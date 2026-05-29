"use client";

import { useState, type ReactNode } from "react";

const JAVA_KEYWORDS = new Set([
  "class", "interface", "enum", "extends", "implements", "public", "private",
  "protected", "static", "final", "abstract", "void", "int", "long", "double",
  "float", "char", "boolean", "byte", "short", "new", "return", "if", "else",
  "for", "while", "do", "switch", "case", "break", "continue", "try", "catch",
  "finally", "throw", "throws", "this", "super", "import", "package",
  "synchronized", "instanceof", "default",
]);

const JAVA_LITERALS = new Set(["null", "true", "false"]);

const PYTHON_KEYWORDS = new Set([
  "def", "return", "import", "from", "for", "in", "if", "elif", "else",
  "class", "lambda", "while", "and", "or", "not", "print", "as", "with",
  "pass", "break", "continue", "try", "except", "finally", "raise", "yield",
  "global", "nonlocal", "assert", "del", "is",
]);

const PYTHON_LITERALS = new Set(["None", "True", "False"]);

const TYPE_HINT = new Set(["class", "new", "extends", "implements", "interface", "enum", "instanceof"]);

/** Normalize a fence language token to one we recognize. */
function normalizeLang(lang: string): "java" | "python" | "plain" {
  const l = (lang || "").toLowerCase();
  if (l === "java") return "java";
  if (l === "python" || l === "py") return "python";
  return "plain";
}

type Tok = { type: string; value: string };

/**
 * Lightweight tokenizer for Java and Python. Produces classified tokens; the
 * renderer HTML-escapes by rendering text as React children (never
 * dangerouslySetInnerHTML).
 */
function tokenize(src: string, lang: "java" | "python"): Tok[] {
  const isPython = lang === "python";
  const KEYWORDS = isPython ? PYTHON_KEYWORDS : JAVA_KEYWORDS;
  const LITERALS = isPython ? PYTHON_LITERALS : JAVA_LITERALS;

  const toks: Tok[] = [];
  let i = 0;
  const n = src.length;
  let prevSignificant = ""; // previous non-whitespace word, to detect types after class/new

  const push = (type: string, value: string) => toks.push({ type, value });

  while (i < n) {
    const c = src[i];

    // Python line comment
    if (isPython && c === "#") {
      let j = i + 1;
      while (j < n && src[j] !== "\n") j++;
      push("comment", src.slice(i, j));
      i = j;
      continue;
    }
    // Block comment (Java)
    if (!isPython && c === "/" && src[i + 1] === "*") {
      let j = i + 2;
      while (j < n && !(src[j] === "*" && src[j + 1] === "/")) j++;
      j = Math.min(j + 2, n);
      push("comment", src.slice(i, j));
      i = j;
      continue;
    }
    // Line comment (Java)
    if (!isPython && c === "/" && src[i + 1] === "/") {
      let j = i + 2;
      while (j < n && src[j] !== "\n") j++;
      push("comment", src.slice(i, j));
      i = j;
      continue;
    }
    // String (double-quoted)
    if (c === '"') {
      let j = i + 1;
      while (j < n && src[j] !== '"') {
        if (src[j] === "\\") j++;
        j++;
      }
      j = Math.min(j + 1, n);
      push("string", src.slice(i, j));
      i = j;
      continue;
    }
    // Single-quoted (Java char / Python string)
    if (c === "'") {
      let j = i + 1;
      while (j < n && src[j] !== "'") {
        if (src[j] === "\\") j++;
        j++;
      }
      j = Math.min(j + 1, n);
      push(isPython ? "string" : "char", src.slice(i, j));
      i = j;
      continue;
    }
    // Annotation / decorator
    if (c === "@") {
      let j = i + 1;
      while (j < n && /[A-Za-z0-9_]/.test(src[j])) j++;
      push("annotation", src.slice(i, j));
      i = j;
      continue;
    }
    // Number
    if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(src[i + 1] ?? ""))) {
      let j = i;
      while (j < n && /[0-9a-fA-FxX._lLdDfF]/.test(src[j])) j++;
      push("number", src.slice(i, j));
      i = j;
      continue;
    }
    // Identifier / keyword
    if (/[A-Za-z_$]/.test(c)) {
      let j = i;
      while (j < n && /[A-Za-z0-9_$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      if (KEYWORDS.has(word)) {
        push("keyword", word);
      } else if (LITERALS.has(word)) {
        push("literal", word);
      } else if (TYPE_HINT.has(prevSignificant)) {
        push("type", word);
      } else if (/^[A-Z]/.test(word)) {
        // Capitalized identifiers → treat as a type/class name.
        push("type", word);
      } else {
        push("plain", word);
      }
      prevSignificant = word;
      i = j;
      continue;
    }
    // Whitespace
    if (/\s/.test(c)) {
      let j = i;
      while (j < n && /\s/.test(src[j])) j++;
      push("plain", src.slice(i, j));
      i = j;
      continue;
    }
    // Punctuation / operators
    push("plain", c);
    prevSignificant = c;
    i++;
  }
  return toks;
}

const TOKEN_CLASS: Record<string, string> = {
  keyword: "tok-keyword",
  type: "tok-type",
  string: "tok-string",
  char: "tok-char",
  comment: "tok-comment",
  number: "tok-number",
  annotation: "tok-annotation",
  literal: "tok-literal",
  plain: "",
};

function highlight(code: string, lang: "java" | "python"): ReactNode[] {
  return tokenize(code, lang).map((t, idx) => {
    const cls = TOKEN_CLASS[t.type] ?? "";
    if (!cls) return <span key={idx}>{t.value}</span>;
    return (
      <span key={idx} className={cls}>
        {t.value}
      </span>
    );
  });
}

export function CodeBlock({ code, lang = "java" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const raw = code.replace(/\s+$/, "");
  const kind = normalizeLang(lang);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(raw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  return (
    <div className="code-panel my-4">
      <div className="code-bar">
        <span className="code-lang">{lang}</span>
        <button type="button" onClick={onCopy} className="code-copy" aria-label="Copy code">
          {copied ? (
            <>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8a2 2 0 012 2v8m-4 4H6a2 2 0 01-2-2V9a2 2 0 012-2h2" />
                <rect x="8" y="3" width="10" height="14" rx="2" ry="2" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="code-pre">
        <code className="code-raw">{kind === "plain" ? raw : highlight(raw, kind)}</code>
      </pre>
    </div>
  );
}

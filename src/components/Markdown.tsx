import { type ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

/**
 * Robust, dependency-free Markdown renderer that returns real JSX (no
 * dangerouslySetInnerHTML — all text is rendered as React children, which
 * React HTML-escapes for us).
 *
 * Supported block constructs:
 *   - ``` fenced code blocks ``` (optionally language-tagged) → CodeBlock
 *   - ## h2 / ### h3
 *   - GitHub tables (| a | b | header + |---|---| separator + rows)
 *   - - / * bullet lists → <ul>, 1. ordered lists → <ol>
 *   - --- horizontal rules → <hr>
 *   - paragraphs
 * Inline: **bold**, `code`.
 */

/* ---------------------------------------------------------------- inline -- */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Split on bold (**...**) and inline code (`...`) while keeping delimiters.
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(<span key={`${keyPrefix}-t${k++}`}>{text.slice(last, m.index)}</span>);
    }
    const tok = m[0];
    if (tok.startsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-b${k++}`}>{tok.slice(2, -2)}</strong>);
    } else {
      nodes.push(<code key={`${keyPrefix}-c${k++}`}>{tok.slice(1, -1)}</code>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) {
    nodes.push(<span key={`${keyPrefix}-t${k++}`}>{text.slice(last)}</span>);
  }
  return nodes;
}

/* ----------------------------------------------------------------- table -- */

function splitRow(line: string): string[] {
  let s = line.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|")) s = s.slice(0, -1);
  // Split on unescaped pipes.
  return s.split("|").map((c) => c.trim());
}

function isSeparator(line: string): boolean {
  return /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(line) && line.includes("-");
}

function Table({ header, rows, k }: { header: string[]; rows: string[][]; k: string }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{renderInline(h, `${k}-h${i}`)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{renderInline(cell, `${k}-r${ri}c${ci}`)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------- block scan -- */

export function Markdown({ source, className }: { source: string; className?: string }) {
  if (!source) return null;

  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  const flushParagraph = (buf: string[]) => {
    const text = buf.join(" ").trim();
    if (text) {
      blocks.push(<p key={`p${key++}`}>{renderInline(text, `p${key}`)}</p>);
    }
  };

  let paraBuf: string[] = [];

  const closePara = () => {
    if (paraBuf.length) {
      flushParagraph(paraBuf);
      paraBuf = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    const fence = line.match(/^```\s*([A-Za-z0-9_+-]*)\s*$/);
    if (fence) {
      closePara();
      const lang = fence[1] || "java";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push(<CodeBlock key={`code${key++}`} code={codeLines.join("\n")} lang={lang || "java"} />);
      continue;
    }

    // Headings
    const h3 = line.match(/^###\s+(.*)$/);
    if (h3) {
      closePara();
      blocks.push(<h3 key={`h3-${key++}`}>{renderInline(h3[1], `h3${key}`)}</h3>);
      i++;
      continue;
    }
    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      closePara();
      blocks.push(<h2 key={`h2-${key++}`}>{renderInline(h2[1], `h2${key}`)}</h2>);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^\s*---\s*$/.test(line) || /^\s*\*\*\*\s*$/.test(line)) {
      closePara();
      blocks.push(<hr key={`hr${key++}`} />);
      i++;
      continue;
    }

    // Table (header row followed by separator row)
    if (
      line.trim().startsWith("|") &&
      i + 1 < lines.length &&
      isSeparator(lines[i + 1])
    ) {
      closePara();
      const header = splitRow(line);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push(<Table key={`tbl${key++}`} header={header} rows={rows} k={`tbl${key}`} />);
      continue;
    }

    // Unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      closePara();
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={`ul${key++}`}>
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it, `ul${key}i${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      closePara();
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol${key++}`}>
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it, `ol${key}i${idx}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Blank line → paragraph break
    if (line.trim() === "") {
      closePara();
      i++;
      continue;
    }

    // Otherwise accumulate into a paragraph
    paraBuf.push(line.trim());
    i++;
  }
  closePara();

  return <div className={className ? `prose-exam ${className}` : "prose-exam"}>{blocks}</div>;
}

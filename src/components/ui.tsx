import Link from "next/link";
import { type ReactNode } from "react";

/* ---------------------------------------------------------- Breadcrumb -- */

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <Link href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className={last ? "text-foreground" : ""}>{item.label}</span>
            )}
            {!last && (
              <svg className="h-3.5 w-3.5 text-[var(--faint)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </span>
        );
      })}
    </nav>
  );
}

/* --------------------------------------------------------------- Tags -- */

export function MarksTag({ children }: { children: ReactNode }) {
  return <span className="tag-marks">{children}</span>;
}

export function CodeTag({ children }: { children: ReactNode }) {
  return <span className="tag-code">{children}</span>;
}

export function KeywordTag({ children }: { children: ReactNode }) {
  return <span className="tag-keyword">{children}</span>;
}

export function CoTag({ children }: { children: ReactNode }) {
  return <span className="tag-code">{children}</span>;
}

/**
 * Frequency badge — highlights "appeared in N/M papers" style strings in indigo.
 */
export function FrequencyTag({ frequency }: { frequency?: string }) {
  if (!frequency) return null;
  const hot = /\b(\d+)\s*\/\s*(\d+)\b/.test(frequency) || /high|frequent|every|always/i.test(frequency);
  return <span className={`tag-freq ${hot ? "tag-freq-hot" : ""}`}>{frequency}</span>;
}

/* -------------------------------------------------------- Section head -- */

export function SectionHeading({
  children,
  hint,
}: {
  children: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{children}</h2>
        {hint && <span className="label-mono">{hint}</span>}
      </div>
      <div className="accent-rule mt-2" />
    </div>
  );
}

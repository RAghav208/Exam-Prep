"use client";

import { useState, type ReactNode } from "react";

export function Collapsible({
  title,
  meta,
  defaultOpen = false,
  children,
  variant = "panel",
}: {
  title: ReactNode;
  meta?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
  variant?: "panel" | "question";
}) {
  const [open, setOpen] = useState(defaultOpen);

  const isQuestion = variant === "question";

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-[var(--surface-muted)]"
      >
        <svg
          className={`h-4 w-4 shrink-0 text-[var(--faint)] transition-transform duration-200 ${open ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span
          className={
            isQuestion
              ? "flex-1 text-[15px] font-medium leading-snug text-foreground"
              : "flex-1 text-base font-semibold tracking-tight text-foreground"
          }
        >
          {title}
        </span>
        {meta && <span className="flex shrink-0 items-center gap-1.5">{meta}</span>}
      </button>
      {open && (
        <div className="border-t border-border px-5 py-4">{children}</div>
      )}
    </div>
  );
}

"use client";

import { useState, type ReactNode } from "react";

export function Tabs({
  tabs,
}: {
  tabs: { id: string; label: string; count: number; content: ReactNode }[];
}) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div>
      <div role="tablist" className="flex gap-1 rounded-lg border border-border bg-[var(--surface-muted)] p-1">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={[
                "flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-surface text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  : "text-muted hover:text-foreground",
              ].join(" ")}
            >
              {tab.label}
              <span
                className={[
                  "rounded-full px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px]",
                  isActive ? "bg-[var(--accent-tint)] text-accent" : "bg-surface text-[var(--faint)]",
                ].join(" ")}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div key={tab.id} role="tabpanel" hidden={tab.id !== active} className="mt-8">
          {tab.id === active && tab.content}
        </div>
      ))}
    </div>
  );
}

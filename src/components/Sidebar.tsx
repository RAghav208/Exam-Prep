"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getSubject, allSubjects, type SubjectSlug } from "@/lib/subjects";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export function Sidebar({ subject: subjectProp }: { subject?: string }) {
  const pathname = usePathname();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const query = normalize(q);

  // Resolve the current subject from the prop or the first path segment.
  const firstSeg = pathname.split("/").filter(Boolean)[0];
  const slug = (subjectProp ?? firstSeg ?? "java") as string;
  const subject = getSubject(slug) ?? getSubject("java")!;
  const activeSlug = subject.slug;
  const base = `/${activeSlug}`;

  // Close the mobile drawer on navigation — adjusted during render using the
  // "store previous value in state" pattern (React-recommended), which avoids
  // a synchronous setState-in-effect cascade.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const modules = subject.syllabus.modules;

  const filtered = useMemo(() => {
    if (!query) return modules;
    return modules
      .map((m) => {
        const topics = m.topics.filter((t) => {
          const hay = [m.title, t.title, t.summary, ...(t.keywords || [])]
            .map((x) => normalize(String(x)))
            .join(" ");
          return hay.includes(query);
        });
        const moduleMatches = normalize(m.title).includes(query);
        return { ...m, topics: moduleMatches && topics.length === 0 ? m.topics : topics };
      })
      .filter((m) => m.topics.length > 0 || normalize(m.title).includes(query));
  }, [query, modules]);

  const predictedActive = pathname === `${base}/predicted`;
  const subjects = allSubjects();

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link href={base} className="flex items-center gap-2">
          <Logo slug={activeSlug} />
          <span className="text-sm font-semibold tracking-tight">{subject.name}</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-surface p-2 text-foreground transition hover:bg-[var(--surface-muted)]"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-zinc-900/30 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar (drawer on mobile, sticky on desktop) */}
      <aside
        className={[
          "scroll-thin fixed inset-y-0 left-0 z-50 w-[300px] overflow-y-auto border-r border-border bg-surface px-3 py-4 transition-transform duration-300 ease-out",
          "lg:sticky lg:top-0 lg:z-auto lg:h-dvh lg:translate-x-0 lg:transition-none",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Mobile close button */}
        <div className="mb-2 flex justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-surface p-1.5 text-muted transition hover:bg-[var(--surface-muted)]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Subject switcher */}
        <div className="px-1">
          <Link
            href="/"
            className="mb-2 flex items-center gap-1.5 px-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)] transition hover:text-accent"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Exam Prep Hub
          </Link>
          <div className="flex gap-1 rounded-lg border border-border bg-[var(--surface-muted)] p-1">
            {subjects.map((s) => {
              const isActive = s.slug === activeSlug;
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className={[
                    "flex-1 rounded-md px-3 py-1.5 text-center text-[13px] font-semibold uppercase tracking-wide transition",
                    isActive
                      ? "bg-surface text-accent shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                      : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {s.slug}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Brand / current subject */}
        <Link
          href={base}
          className="mt-3 flex items-start gap-2.5 rounded-xl px-2 py-2 transition hover:bg-[var(--surface-muted)]"
        >
          <Logo slug={activeSlug} />
          <div className="leading-tight">
            <div className="text-[14px] font-semibold tracking-tight text-foreground">
              {subject.name}
            </div>
            <div className="mt-0.5 font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
              {subject.courseCode}
            </div>
          </div>
        </Link>

        {/* Search */}
        <div className="mt-3 px-1">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--faint)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search topics, keywords…"
              className="w-full rounded-lg border border-border bg-[var(--surface-muted)] py-2 pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-[var(--faint)] focus:border-accent focus:bg-surface"
            />
          </div>
        </div>

        {/* Predicted link */}
        <div className="mt-4 px-1">
          <Link
            href={`${base}/predicted`}
            className={[
              "group flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition",
              predictedActive
                ? "border-[var(--accent-tint-border)] bg-[var(--accent-tint)] text-[var(--accent-hover)]"
                : "border-border bg-surface text-foreground hover:border-[var(--accent-tint-border)] hover:bg-[var(--accent-tint)]",
            ].join(" ")}
          >
            <svg
              className={predictedActive ? "h-4 w-4 text-accent" : "h-4 w-4 text-[var(--faint)] group-hover:text-accent"}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 20.36l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
            </svg>
            <span>Predicted</span>
            <span className="ml-auto font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
              Exam
            </span>
          </Link>
        </div>

        {/* Modules tree */}
        <div className="mt-5 px-1">
          <div className="label-mono px-2 pb-2">Modules</div>
          <nav className="space-y-3">
            {filtered.map((m) => {
              const moduleActive = pathname === `${base}/modules/${m.id}`;
              return (
                <div key={m.id}>
                  <Link
                    href={`${base}/modules/${encodeURIComponent(m.id)}`}
                    className={[
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] font-semibold tracking-tight transition",
                      moduleActive
                        ? "text-accent"
                        : "text-foreground hover:text-accent",
                    ].join(" ")}
                  >
                    <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase text-[var(--faint)]">
                      {m.id}
                    </span>
                    <span className="truncate">{m.title.replace(/^Module \d+:\s*/, "")}</span>
                  </Link>
                  <div className="mt-0.5 space-y-0.5 border-l border-border pl-2">
                    {m.topics.map((t) => {
                      const active = pathname === `${base}/topics/${t.id}`;
                      return (
                        <Link
                          key={t.id}
                          href={`${base}/topics/${encodeURIComponent(t.id)}`}
                          className={[
                            "-ml-px block border-l-2 py-1.5 pl-3 pr-2 text-[13px] leading-snug transition",
                            active
                              ? "border-accent bg-[var(--accent-tint)] font-medium text-[var(--accent-hover)]"
                              : "border-transparent text-muted hover:border-[var(--border-strong)] hover:text-foreground",
                          ].join(" ")}
                        >
                          {t.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="rounded-lg border border-border bg-[var(--surface-muted)] px-3 py-3 text-[13px] text-muted">
                No matches in {subject.name}.
              </div>
            )}
          </nav>
        </div>

        <div className="mt-6 px-3 pb-2 font-[family-name:var(--font-geist-mono)] text-[10px] text-[var(--faint)]">
          Updated {subject.syllabus.meta.updatedAt}
        </div>
      </aside>
    </>
  );
}

function Logo({ slug }: { slug: SubjectSlug }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent font-[family-name:var(--font-geist-mono)] text-[12px] font-bold uppercase text-white">
      {slug === "java" ? "J" : "ML"}
    </span>
  );
}

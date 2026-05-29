import Link from "next/link";
import { allSubjects } from "@/lib/subjects";

export default function Hub() {
  const subjects = allSubjects();

  return (
    <main className="px-5 py-12 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            MCA · Exam Prep Hub
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your exam prep, one hub.
          </h1>
          <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-relaxed text-muted">
            Focused, exam-first study companions for each subject — module-wise notes,
            predicted programs and questions from past papers, and curated video tutorials.
            Pick a subject to begin.
          </p>
        </header>

        {/* Subject cards */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          {subjects.map((s) => {
            const moduleCount = s.syllabus.modules.length;
            const topicCount = s.syllabus.modules.reduce(
              (sum, m) => sum + m.topics.length,
              0
            );
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group card flex flex-col p-7 transition hover:border-[var(--border-strong)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-[family-name:var(--font-geist-mono)] text-base font-bold uppercase text-white">
                    {s.slug === "java" ? "J" : "ML"}
                  </span>
                  <span className="rounded-full border border-border bg-[var(--surface-muted)] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] text-muted">
                    {s.courseCode}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-bold leading-snug tracking-tight text-foreground transition group-hover:text-accent">
                  {s.name}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.tagline}</p>

                <div className="mt-5 flex items-center gap-4 font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
                  <span>{moduleCount} modules</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--faint)]" />
                  <span>{topicCount} topics</span>
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Open {s.slug.toUpperCase()}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </section>

        <footer className="mt-14 text-center font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
          Exam-Focused · Minimal · Updated for the current syllabus
        </footer>
      </div>
    </main>
  );
}

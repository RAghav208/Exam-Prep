import Link from "next/link";
import { allSubjects } from "@/lib/subjects";

type MockProgress = {
  read: number;
  total: number;
  lastTopic?: { id: string; title: string };
};

const PROGRESS: Record<string, MockProgress> = {
  java: { read: 12, total: 18, lastTopic: { id: "exceptions", title: "Exception Handling" } },
  ml: { read: 4, total: 14 },
};

const QUICK_STATS = [
  { label: "Subjects", value: "2" },
  { label: "Modules", value: "9" },
  { label: "Topics", value: "32" },
  { label: "Predicted", value: "48" },
];

export default function MockupHub() {
  const subjects = allSubjects();

  return (
    <main id="main" className="px-5 py-12 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <a
          href="#subjects"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-foreground focus:shadow"
        >
          Skip to subjects
        </a>

        <header className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              MCA · Exam Prep Hub
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Your exam prep, one hub.
            </h1>
            <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-relaxed text-muted lg:mx-0">
              Focused, exam-first study companions for each subject — module-wise notes,
              predicted programs and questions from past papers, and curated video
              tutorials. Pick a subject to begin.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-4 gap-px overflow-hidden rounded-xl border border-border bg-border lg:mt-0 lg:w-[360px]">
            {QUICK_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-0.5 bg-surface px-3 py-3"
              >
                <dt className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
                  {s.label}
                </dt>
                <dd className="font-[family-name:var(--font-geist-mono)] text-lg font-semibold text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section id="subjects" className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              Subjects
            </h2>
            <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
              2 enrolled
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {subjects.map((s) => {
              const moduleCount = s.syllabus.modules.length;
              const topicCount = s.syllabus.modules.reduce(
                (sum, m) => sum + m.topics.length,
                0
              );
              const progress = PROGRESS[s.slug];
              const pct = progress
                ? Math.round((progress.read / progress.total) * 100)
                : 0;
              const initial = s.slug === "java" ? "J" : s.slug === "ml" ? "ML" : "ST";

              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group card flex flex-col p-7 transition hover:border-[var(--border-strong)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-[family-name:var(--font-geist-mono)] text-base font-bold uppercase text-white">
                      {initial}
                    </span>
                    <span className="rounded-full border border-border bg-[var(--surface-muted)] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] text-muted">
                      {s.courseCode}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-foreground transition group-hover:text-accent">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {s.tagline}
                  </p>

                  <div className="mt-5">
                    <div className="flex items-center justify-between font-[family-name:var(--font-geist-mono)] text-[11px]">
                      <span className="text-muted">
                        {progress
                          ? `${progress.read} / ${progress.total} topics read`
                          : "Not started"}
                      </span>
                      <span className="text-[var(--faint)]">{pct}%</span>
                    </div>
                    <div
                      className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-muted)]"
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${s.name} progress`}
                    >
                      <div
                        className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
                    <span>{moduleCount} modules</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--faint)]" />
                    <span>{topicCount} topics</span>
                  </div>

                  {progress?.lastTopic ? (
                    <div className="mt-5 flex items-center justify-between rounded-lg border border-border bg-[var(--surface-muted)] px-3 py-2">
                      <div className="min-w-0">
                        <div className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
                          Continue
                        </div>
                        <div className="truncate text-[13px] font-medium text-foreground">
                          {progress.lastTopic.title}
                        </div>
                      </div>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </div>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Start {s.slug.toUpperCase()}
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <Link
            href="/java/predicted"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[0.875rem] border border-[var(--accent-tint-border)] bg-[var(--accent-tint)] p-6 transition hover:border-accent sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-tint-border)] bg-surface text-accent">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 20.36l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
                </svg>
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
                  Most valuable
                </span>
                <h3 className="mt-1 text-lg font-bold tracking-tight text-[var(--accent-hover)]">
                  Predicted programs & questions
                </h3>
                <p className="mt-1 max-w-[52ch] text-sm leading-relaxed text-[var(--accent-hover)]/80">
                  Curated from past papers, filtered to this syllabus. Model answers,
                  worked solutions, mark weights, and frequency signals.
                </p>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent sm:mt-0">
              Open Predicted
              <svg
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </section>

        <footer className="mt-14 text-center font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
          Exam-Focused · Minimal · Updated for the current syllabus
        </footer>
      </div>
    </main>
  );
}

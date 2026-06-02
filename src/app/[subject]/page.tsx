import Link from "next/link";
import { notFound } from "next/navigation";
import { allSubjects, getSubject } from "@/lib/subjects";

export function generateStaticParams() {
  return allSubjects().map((s) => ({ subject: s.slug }));
}

export default async function SubjectHome({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const { syllabus } = subject;

  return (
    <main className="px-5 py-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <section>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)] transition hover:text-accent"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All subjects
          </Link>
          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {subject.courseCode}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {subject.name}
          </h1>
          <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">
            {subject.tagline}
          </p>
        </section>

        {/* Start Here + Predicted */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Exam path */}
          <section className="card p-6">
            <div className="label-mono">Start Here</div>
            <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              Exam Path
            </h2>
            <ol className="mt-4 space-y-3">
              {syllabus.modules.map((m, idx) => (
                <li key={m.id}>
                  <Link
                    href={`/${slug}/modules/${encodeURIComponent(m.id)}`}
                    className="group flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-[var(--surface-muted)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-[var(--surface-muted)] font-[family-name:var(--font-geist-mono)] text-[12px] font-medium text-muted transition group-hover:border-accent group-hover:text-accent">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground transition group-hover:text-accent">
                      {m.title.replace(/^Module \d+:\s*/, "")}
                    </span>
                    <span className="ml-auto font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
                      {m.topics.length} topics
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          {/* Predicted CTA */}
          <Link
            href={`/${slug}/predicted`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[0.875rem] border border-[var(--accent-tint-border)] bg-[var(--accent-tint)] p-6 transition hover:border-accent"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 20.36l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
                </svg>
                Most valuable
              </span>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-[var(--accent-hover)]">
                {subject.programsLabel} &amp; Questions
              </h2>
              <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-[var(--accent-hover)]/80">
                Curated from past papers and filtered to this syllabus. Model answers,
                worked solutions, mark weights, and frequency signals.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Open Predicted
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Modules grid */}
        <section className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Modules</h2>
            <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
              Updated {syllabus.meta.updatedAt}
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {syllabus.modules.map((m) => (
              <Link
                key={m.id}
                href={`/${slug}/modules/${encodeURIComponent(m.id)}`}
                className="group card flex flex-col p-5 transition hover:border-[var(--border-strong)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <span className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
                  {m.id}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-accent">
                  {m.title.replace(/^Module \d+:\s*/, "")}
                </h3>
                <div className="mt-auto pt-4 font-[family-name:var(--font-geist-mono)] text-[11px] text-muted">
                  {m.topics.length} topics · exam focus included
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { allSubjects, getSubject, findModule } from "@/lib/subjects";
import { Breadcrumb, MarksTag, SectionHeading, FrequencyTag } from "@/components/ui";

export function generateStaticParams() {
  return allSubjects().flatMap((s) =>
    s.syllabus.modules.map((m) => ({ subject: s.slug, moduleId: m.id }))
  );
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ subject: string; moduleId: string }>;
}) {
  const { subject: slug, moduleId } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const mod = findModule(subject, moduleId);

  if (!mod) {
    return (
      <main className="px-5 py-10 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-2xl card p-6">
          <h1 className="text-xl font-semibold text-foreground">Module not found</h1>
          <p className="mt-2 text-sm text-muted">
            Invalid module id:{" "}
            <code className="rounded bg-[var(--surface-muted)] px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)]">
              {moduleId}
            </code>
          </p>
          <Link
            href={`/${slug}`}
            className="mt-4 inline-block rounded-lg border border-border px-3 py-2 text-sm transition hover:bg-[var(--surface-muted)]"
          >
            Back to {subject.name}
          </Link>
        </div>
      </main>
    );
  }

  const programs = subject.getPredictedProgramsForModule(moduleId);
  const questions = subject.getPredictedQuestionsForModule(moduleId);
  const cleanTitle = mod.title.replace(/^Module \d+:\s*/, "");

  return (
    <main className="px-5 py-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <Breadcrumb items={[{ label: subject.name, href: `/${slug}` }, { label: cleanTitle }]} />

        {/* Header */}
        <header className="mt-5">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-wider text-accent">
              {mod.id}
            </span>
          </div>
          <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-foreground">{cleanTitle}</h1>
          <div className="accent-rule mt-4" />
        </header>

        {/* Must-do exam focus */}
        {mod.examFocus.length > 0 && (
          <section className="mt-8 rounded-[0.875rem] border border-[var(--accent-tint-border)] bg-[var(--accent-tint)] p-5">
            <div className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
              Must-do · Exam Focus
            </div>
            <ul className="mt-3 space-y-2">
              {mod.examFocus.map((x) => (
                <li key={x} className="flex gap-2.5 text-sm leading-relaxed text-[var(--accent-hover)]">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Topics */}
        <section className="mt-10">
          <SectionHeading hint={`${mod.topics.length} topics`}>Topics</SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {mod.topics.map((t) => {
              const meta = subject.getTopicMeta(t.id);
              return (
                <Link
                  key={t.id}
                  href={`/${slug}/topics/${encodeURIComponent(t.id)}`}
                  className="group card flex flex-col p-5 transition hover:border-[var(--border-strong)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-accent">
                      {t.title}
                    </h3>
                    {meta?.examWeight && <MarksTag>{meta.examWeight}</MarksTag>}
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{t.summary}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Predicted for this module */}
        {(programs.length > 0 || questions.length > 0) && (
          <section className="mt-12 card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 20.36l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
                  </svg>
                  Predicted for {mod.id}
                </div>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">
                  Likely exam {subject.programsLabel.toLowerCase()} &amp; questions
                </h2>
              </div>
              <Link
                href={`/${slug}/predicted`}
                className="shrink-0 self-center rounded-lg border border-border px-3 py-1.5 text-[13px] font-medium text-muted transition hover:border-accent hover:text-accent"
              >
                View all
              </Link>
            </div>

            <ul className="mt-4 divide-y divide-border">
              {programs.map((p) => (
                <li key={p.id} className="flex items-center gap-3 py-2.5">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
                    {subject.slug === "ml" ? "Problem" : "Program"}
                  </span>
                  <Link href={`/${slug}/predicted`} className="flex-1 truncate text-sm text-foreground transition hover:text-accent">
                    {p.title}
                  </Link>
                  <MarksTag>{p.marks}</MarksTag>
                  <FrequencyTag frequency={p.frequency} />
                </li>
              ))}
              {questions.map((q) => (
                <li key={q.id} className="flex items-center gap-3 py-2.5">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
                    Question
                  </span>
                  <Link href={`/${slug}/predicted`} className="flex-1 truncate text-sm text-foreground transition hover:text-accent">
                    {q.question}
                  </Link>
                  <MarksTag>{q.marks}</MarksTag>
                  <FrequencyTag frequency={q.frequency} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

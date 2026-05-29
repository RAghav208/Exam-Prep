import Link from "next/link";
import { notFound } from "next/navigation";
import { allSubjects, getSubject, allTopics, findTopic } from "@/lib/subjects";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { Markdown } from "@/components/Markdown";
import { Collapsible } from "@/components/Collapsible";
import { ProgramCard, QuestionCard } from "@/components/PredictedCards";
import { Breadcrumb, MarksTag, CodeTag, KeywordTag, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return allSubjects().flatMap((s) =>
    allTopics(s).map((t) => ({ subject: s.slug, topicId: t.id }))
  );
}

const examTips = [
  {
    q: "How to write in the exam?",
    a: "Answer structure: Definition → 2–3 key points → short example → (optional) advantages/uses.",
  },
  {
    q: "Common traps?",
    a: "Watch for closely-related concepts that are easy to confuse — define each precisely and contrast them in a small table.",
  },
];

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topicId: string }>;
}) {
  const { subject: slug, topicId } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const t = findTopic(subject, topicId);

  if (!t) {
    return (
      <main className="px-5 py-10 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-2xl card p-6">
          <h1 className="text-xl font-semibold text-foreground">Topic not found</h1>
          <p className="mt-2 text-sm text-muted">
            Invalid topic id:{" "}
            <code className="rounded bg-[var(--surface-muted)] px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)]">
              {topicId}
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

  const summary = subject.getTopicContent(topicId);
  const detailed = subject.getDetailedNotes(topicId);
  const meta = subject.getTopicMeta(topicId);
  const programs = subject.getPredictedProgramsForTopic(topicId);
  const questions = subject.getPredictedQuestionsForTopic(topicId);
  const topicVideos = subject.videos[topicId] || [];

  // Prev / next from the flat topic order.
  const flat = allTopics(subject);
  const idx = flat.findIndex((x) => x.id === topicId);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  const moduleClean = t.module.title.replace(/^Module \d+:\s*/, "");

  return (
    <main className="px-5 py-8 lg:px-12 lg:py-10">
      <article className="mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { label: subject.name, href: `/${slug}` },
            { label: moduleClean, href: `/${slug}/modules/${encodeURIComponent(t.module.id)}` },
            { label: t.title },
          ]}
        />

        {/* Header */}
        <header className="mt-5">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem]">
            {t.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {meta?.examWeight && <MarksTag>{meta.examWeight}</MarksTag>}
            <CodeTag>{t.module.id}</CodeTag>
            {(meta?.keywords ?? t.keywords).map((k) => (
              <KeywordTag key={k}>{k}</KeywordTag>
            ))}
          </div>
          <p className="mt-4 max-w-[72ch] text-[15px] leading-relaxed text-muted">{t.summary}</p>
          <div className="accent-rule mt-5" />
        </header>

        {/* Quick Summary */}
        {summary && (
          <section className="mt-10">
            <SectionHeading>Quick Summary</SectionHeading>
            <Markdown source={summary} />
          </section>
        )}

        {/* Detailed Notes (collapsible, default open) */}
        {detailed && (
          <section className="mt-10">
            <SectionHeading hint="Click header to collapse">Detailed Notes</SectionHeading>
            <Collapsible title="Full notes" defaultOpen>
              <Markdown source={detailed} />
            </Collapsible>
          </section>
        )}

        {/* Practice / Predicted Programs */}
        {programs.length > 0 && (
          <section className="mt-12">
            <SectionHeading hint={`${programs.length} item${programs.length > 1 ? "s" : ""}`}>
              Practice · {subject.programsLabel}
            </SectionHeading>
            <div className="space-y-5">
              {programs.map((p) => (
                <ProgramCard key={p.id} program={p} lang={subject.programLang} />
              ))}
            </div>
          </section>
        )}

        {/* Predicted Questions */}
        {questions.length > 0 && (
          <section className="mt-12">
            <SectionHeading hint={`${questions.length} question${questions.length > 1 ? "s" : ""}`}>
              Predicted Questions
            </SectionHeading>
            <div className="space-y-3">
              {questions.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </section>
        )}

        {/* Video tutorials */}
        {topicVideos.length > 0 && (
          <section className="mt-12">
            <SectionHeading>Video Tutorials</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {topicVideos.map((video, i) => (
                <YouTubeEmbed key={i} url={video.url} title={video.title} channel={video.channel} />
              ))}
            </div>
          </section>
        )}

        {/* Exam tips */}
        <section className="mt-12">
          <SectionHeading>Common Exam Tips</SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {examTips.map((x, i) => (
              <div key={i} className="card p-5">
                <div className="text-sm font-semibold text-foreground">{x.q}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{x.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next */}
        <nav className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/${slug}/topics/${encodeURIComponent(prev.id)}`}
              className="group card flex flex-col p-4 transition hover:border-[var(--border-strong)]"
            >
              <span className="flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
              <span className="mt-1 text-sm font-medium text-foreground transition group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/${slug}/topics/${encodeURIComponent(next.id)}`}
              className="group card flex flex-col items-end p-4 text-right transition hover:border-[var(--border-strong)] sm:col-start-2"
            >
              <span className="flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-[var(--faint)]">
                Next
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="mt-1 text-sm font-medium text-foreground transition group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </main>
  );
}

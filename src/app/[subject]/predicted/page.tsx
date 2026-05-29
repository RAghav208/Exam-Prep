import { notFound } from "next/navigation";
import {
  allSubjects,
  getSubject,
  type Subject,
  type PredictedProgram,
  type PredictedQuestion,
} from "@/lib/subjects";
import { ProgramCard, QuestionCard } from "@/components/PredictedCards";
import { Tabs } from "@/components/Tabs";
import { Breadcrumb } from "@/components/ui";

export function generateStaticParams() {
  return allSubjects().map((s) => ({ subject: s.slug }));
}

function groupByModule<T extends { moduleId: string }>(
  subject: Subject,
  items: T[]
): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const m of subject.syllabus.modules) map.set(m.id, []);
  for (const item of items) {
    if (!map.has(item.moduleId)) map.set(item.moduleId, []);
    map.get(item.moduleId)!.push(item);
  }
  return map;
}

function ModuleLabel({ subject, id }: { subject: Subject; id: string }) {
  const mod = subject.syllabus.modules.find((m) => m.id === id);
  const title = mod ? mod.title.replace(/^Module \d+:\s*/, "") : id;
  return (
    <div className="sticky top-0 z-10 -mx-1 flex items-baseline gap-2 bg-background/90 px-1 py-2 backdrop-blur lg:top-0">
      <span className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
        {id}
      </span>
      <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
    </div>
  );
}

function ProgramsView({ subject }: { subject: Subject }) {
  const grouped = groupByModule<PredictedProgram>(subject, subject.predictedPrograms);
  const sections = [...grouped.entries()].filter(([, items]) => items.length > 0);

  if (sections.length === 0) return <EmptyState kind={subject.programsLabel.toLowerCase()} />;

  return (
    <div className="space-y-12">
      {sections.map(([modId, items]) => (
        <section key={modId}>
          <ModuleLabel subject={subject} id={modId} />
          <div className="mt-4 space-y-5">
            {items.map((p) => (
              <ProgramCard key={p.id} program={p} lang={subject.programLang} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function QuestionsView({ subject }: { subject: Subject }) {
  const grouped = groupByModule<PredictedQuestion>(subject, subject.predictedQuestions);
  const sections = [...grouped.entries()].filter(([, items]) => items.length > 0);

  if (sections.length === 0) return <EmptyState kind="questions" />;

  return (
    <div className="space-y-12">
      {sections.map(([modId, items]) => (
        <section key={modId}>
          <ModuleLabel subject={subject} id={modId} />
          <div className="mt-4 space-y-3">
            {items.map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function EmptyState({ kind }: { kind: string }) {
  return (
    <div className="card p-10 text-center">
      <p className="text-sm text-muted">No predicted {kind} available yet.</p>
    </div>
  );
}

export default async function PredictedPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  return (
    <main className="px-5 py-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <Breadcrumb items={[{ label: subject.name, href: `/${slug}` }, { label: "Predicted" }]} />

        {/* Hero */}
        <header className="mt-5">
          <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-wider text-accent">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 20.36l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
            </svg>
            Exam Prediction
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {subject.programsLabel} &amp; Questions
          </h1>
          <p className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-muted">
            These are predicted from analysis of past question papers and filtered to the
            current syllabus. Each item carries its mark weight, a frequency signal (how often it
            has appeared), and the mapped course outcome. The worked items include code/solutions
            with an explanation; questions expand to a model answer.
          </p>
          <div className="accent-rule mt-5" />
        </header>

        {/* Tabs */}
        <div className="mt-8">
          <Tabs
            tabs={[
              {
                id: "programs",
                label: subject.programsLabel,
                count: subject.predictedPrograms.length,
                content: <ProgramsView subject={subject} />,
              },
              {
                id: "questions",
                label: "Predicted Questions",
                count: subject.predictedQuestions.length,
                content: <QuestionsView subject={subject} />,
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}

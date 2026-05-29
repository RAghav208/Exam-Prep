import { Markdown } from "./Markdown";
import { CodeBlock } from "./CodeBlock";
import { Collapsible } from "./Collapsible";
import { MarksTag, FrequencyTag, CoTag } from "./ui";
import type { PredictedProgram, PredictedQuestion } from "@/lib/predicted";

function MetaRow({
  marks,
  frequency,
  co,
}: {
  marks: string;
  frequency?: string;
  co?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <MarksTag>{marks}</MarksTag>
      <FrequencyTag frequency={frequency} />
      {co && <CoTag>{co}</CoTag>}
    </div>
  );
}

export function ProgramCard({
  program,
  lang = "java",
}: {
  program: PredictedProgram;
  lang?: string;
}) {
  return (
    <article className="card overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            {program.title}
          </h3>
          <MetaRow marks={program.marks} frequency={program.frequency} co={program.co} />
        </div>
        {program.statement && (
          <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-muted">
            {program.statement}
          </p>
        )}
      </div>
      <div className="px-5 pb-5 pt-1">
        <CodeBlock code={program.code} lang={lang} />
        {program.explanation && (
          <div className="mt-2">
            <div className="label-mono mb-1">Explanation</div>
            <Markdown source={program.explanation} />
          </div>
        )}
      </div>
    </article>
  );
}

export function QuestionCard({ question }: { question: PredictedQuestion }) {
  return (
    <Collapsible
      variant="question"
      title={question.question}
      meta={
        <span className="flex flex-wrap items-center justify-end gap-1.5">
          <MarksTag>{question.marks}</MarksTag>
          <FrequencyTag frequency={question.frequency} />
          {question.co && <CoTag>{question.co}</CoTag>}
        </span>
      }
    >
      <div className="label-mono mb-1">Model Answer</div>
      <Markdown source={question.answer} />
    </Collapsible>
  );
}

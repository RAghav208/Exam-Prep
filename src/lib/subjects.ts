// Subject registry — wires each subject's data files into one uniform shape so
// the routing layer can stay subject-agnostic. Java data already exists; ML
// data is created by parallel agents at the documented `@/.../ml/...` paths.

import type { Syllabus, Module, Topic } from "@/lib/syllabus";

// --- Java data ---
import javaTopics from "@/content/topics.json";
import javaVideos from "@/content/videos.json";
import {
  getTopicContent as javaGetTopicContent,
  getDetailedNotes as javaGetDetailedNotes,
  getTopicMeta as javaGetTopicMeta,
} from "@/lib/topicContent";
import {
  predictedQuestions as javaPredictedQuestions,
  predictedPrograms as javaPredictedPrograms,
  getPredictedQuestionsForTopic as javaGetPredictedQuestionsForTopic,
  getPredictedProgramsForTopic as javaGetPredictedProgramsForTopic,
  getPredictedQuestionsForModule as javaGetPredictedQuestionsForModule,
  getPredictedProgramsForModule as javaGetPredictedProgramsForModule,
} from "@/lib/predicted";

// --- ML data (created in parallel; same shapes as Java) ---
import mlTopics from "@/content/ml/topics.json";
import mlVideos from "@/content/ml/videos.json";
import {
  getTopicContent as mlGetTopicContent,
  getDetailedNotes as mlGetDetailedNotes,
  getTopicMeta as mlGetTopicMeta,
} from "@/lib/ml/topicContent";
import {
  predictedQuestions as mlPredictedQuestions,
  predictedPrograms as mlPredictedPrograms,
  getPredictedQuestionsForTopic as mlGetPredictedQuestionsForTopic,
  getPredictedProgramsForTopic as mlGetPredictedProgramsForTopic,
  getPredictedQuestionsForModule as mlGetPredictedQuestionsForModule,
  getPredictedProgramsForModule as mlGetPredictedProgramsForModule,
} from "@/lib/ml/predicted";

// --- APS data (Advanced Probability and Statistics) ---
import apsTopics from "@/content/aps/topics.json";
import apsVideos from "@/content/aps/videos.json";
import {
  getTopicContent as apsGetTopicContent,
  getDetailedNotes as apsGetDetailedNotes,
  getTopicMeta as apsGetTopicMeta,
} from "@/lib/aps/topicContent";
import {
  predictedQuestions as apsPredictedQuestions,
  predictedPrograms as apsPredictedPrograms,
  getPredictedQuestionsForTopic as apsGetPredictedQuestionsForTopic,
  getPredictedProgramsForTopic as apsGetPredictedProgramsForTopic,
  getPredictedQuestionsForModule as apsGetPredictedQuestionsForModule,
  getPredictedProgramsForModule as apsGetPredictedProgramsForModule,
} from "@/lib/aps/predicted";

export type { Syllabus, Module, Topic };

export type SubjectSlug = "java" | "ml" | "aps";

/** Shared shapes for the predicted-material helpers (structurally identical
 *  to the per-subject `PredictedQuestion` / `PredictedProgram` types). */
export type PredictedQuestion = {
  id: string;
  moduleId: string;
  topicId?: string;
  co?: string;
  marks: string;
  frequency?: string;
  question: string;
  answer: string;
};

export type PredictedProgram = {
  id: string;
  moduleId: string;
  topicId?: string;
  co?: string;
  marks: string;
  frequency?: string;
  title: string;
  statement: string;
  code: string;
  explanation: string;
};

export type VideoLink = { title: string; url: string; channel: string };
export type VideosMap = Record<string, VideoLink[]>;

export type TopicMeta = { title: string; examWeight: string; keywords: string[] };

export type Subject = {
  slug: SubjectSlug;
  name: string;
  courseCode: string;
  tagline: string;
  /** Label for the "programs" section — differs per subject. */
  programsLabel: string;
  /** Default code-fence language for this subject's predicted programs. */
  programLang: string;
  syllabus: Syllabus;
  getTopicContent: (id: string) => string | null;
  getDetailedNotes: (id: string) => string | null;
  getTopicMeta: (id: string) => TopicMeta | null;
  videos: VideosMap;
  predictedQuestions: PredictedQuestion[];
  predictedPrograms: PredictedProgram[];
  getPredictedQuestionsForTopic: (topicId: string) => PredictedQuestion[];
  getPredictedProgramsForTopic: (topicId: string) => PredictedProgram[];
  getPredictedQuestionsForModule: (moduleId: string) => PredictedQuestion[];
  getPredictedProgramsForModule: (moduleId: string) => PredictedProgram[];
};

export const SUBJECTS: Record<SubjectSlug, Subject> = {
  java: {
    slug: "java",
    name: "Object Oriented Programming Using Java",
    courseCode: "25MCAC201",
    tagline: "Exam-first notes, predicted programs, and curated videos for OOP in Java.",
    programsLabel: "Predicted Programs",
    programLang: "java",
    syllabus: javaTopics as Syllabus,
    getTopicContent: javaGetTopicContent,
    getDetailedNotes: javaGetDetailedNotes,
    getTopicMeta: javaGetTopicMeta,
    videos: javaVideos as VideosMap,
    predictedQuestions: javaPredictedQuestions,
    predictedPrograms: javaPredictedPrograms,
    getPredictedQuestionsForTopic: javaGetPredictedQuestionsForTopic,
    getPredictedProgramsForTopic: javaGetPredictedProgramsForTopic,
    getPredictedQuestionsForModule: javaGetPredictedQuestionsForModule,
    getPredictedProgramsForModule: javaGetPredictedProgramsForModule,
  },
  ml: {
    slug: "ml",
    name: "Machine Learning",
    courseCode: "25MCAC203",
    tagline: "Exam-first notes, predicted solved problems, and curated videos for Machine Learning.",
    programsLabel: "Predicted Solved Problems",
    programLang: "python",
    syllabus: mlTopics as Syllabus,
    getTopicContent: mlGetTopicContent,
    getDetailedNotes: mlGetDetailedNotes,
    getTopicMeta: mlGetTopicMeta,
    videos: mlVideos as VideosMap,
    predictedQuestions: mlPredictedQuestions,
    predictedPrograms: mlPredictedPrograms,
    getPredictedQuestionsForTopic: mlGetPredictedQuestionsForTopic,
    getPredictedProgramsForTopic: mlGetPredictedProgramsForTopic,
    getPredictedQuestionsForModule: mlGetPredictedQuestionsForModule,
    getPredictedProgramsForModule: mlGetPredictedProgramsForModule,
  },
  aps: {
    slug: "aps",
    name: "Advanced Probability and Statistics",
    courseCode: "25MCAAIE2041",
    tagline: "Exam-first notes, predicted numericals, and curated videos for Advanced Probability and Statistics.",
    programsLabel: "Predicted Numericals",
    programLang: "text",
    syllabus: apsTopics as Syllabus,
    getTopicContent: apsGetTopicContent,
    getDetailedNotes: apsGetDetailedNotes,
    getTopicMeta: apsGetTopicMeta,
    videos: apsVideos as VideosMap,
    predictedQuestions: apsPredictedQuestions,
    predictedPrograms: apsPredictedPrograms,
    getPredictedQuestionsForTopic: apsGetPredictedQuestionsForTopic,
    getPredictedProgramsForTopic: apsGetPredictedProgramsForTopic,
    getPredictedQuestionsForModule: apsGetPredictedQuestionsForModule,
    getPredictedProgramsForModule: apsGetPredictedProgramsForModule,
  },
};

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS[slug as SubjectSlug];
}

export function allSubjects(): Subject[] {
  return Object.values(SUBJECTS);
}

/* ----------------------------------------------------- subject-scoped helpers -- */

export function allTopics(subject: Subject): Array<Topic & { module: Module }> {
  return subject.syllabus.modules.flatMap((m) =>
    m.topics.map((t) => ({ ...t, module: m }))
  );
}

export function findModule(subject: Subject, id: string): Module | undefined {
  return subject.syllabus.modules.find((m) => m.id === id);
}

export function findTopic(
  subject: Subject,
  id: string
): (Topic & { module: Module }) | undefined {
  return allTopics(subject).find((t) => t.id === id);
}

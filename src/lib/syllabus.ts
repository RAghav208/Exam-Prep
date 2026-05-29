import raw from "@/content/topics.json";

export type Topic = {
  id: string;
  title: string;
  keywords: string[];
  summary: string;
  videos: string[];
};

export type Module = {
  id: string;
  title: string;
  examFocus: string[];
  topics: Topic[];
};

export type Syllabus = {
  meta: {
    title: string;
    courseCode: string;
    language: string;
    updatedAt: string;
  };
  modules: Module[];
};

export const syllabus = raw as Syllabus;

export function allTopics(): Array<Topic & { module: Module }> {
  return syllabus.modules.flatMap((m) => m.topics.map((t) => ({ ...t, module: m })));
}

export function findModule(id: string): Module | undefined {
  return syllabus.modules.find((m) => m.id === id);
}

export function findTopic(id: string): (Topic & { module: Module }) | undefined {
  return allTopics().find((t) => t.id === id);
}


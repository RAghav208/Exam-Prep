import { notFound } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { getSubject } from "@/lib/subjects";

export function generateStaticParams() {
  return [{ subject: "java" }, { subject: "ml" }];
}

export default async function SubjectLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ subject: string }>;
}>) {
  const { subject } = await params;
  if (!getSubject(subject)) notFound();

  return (
    <div className="lg:grid lg:min-h-dvh lg:grid-cols-[300px_1fr]">
      <Sidebar subject={subject} />
      <div className="min-w-0">{children}</div>
    </div>
  );
}

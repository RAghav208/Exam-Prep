"use client";

interface TopicContentProps {
  topicId: string;
}

// Simple markdown parser for display
function parseMarkdown(content: string): string {
  // Handle code blocks
  content = content.replace(/```java([\s\S]*?)```/g, '<pre class="bg-black/30 rounded-xl p-4 my-4 overflow-x-auto text-sm"><code>$1</code></pre>');

  // Handle inline code
  content = content.replace(/`([^`]+)`/g, '<code class="bg-black/30 rounded px-1.5 py-0.5">$1</code>');

  // Handle headers
  content = content.replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mt-6 mb-3">$1</h2>');
  content = content.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>');

  // Handle bold
  content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Handle lists
  content = content.replace(/^\d+\. (.+)$/gm, '<li class="ml-5 list-decimal">$1</li>');
  content = content.replace(/^- (.+)$/gm, '<li class="ml-5 list-disc">$1</li>');

  // Handle paragraphs (double newlines)
  content = content.replace(/\n\n/g, '</p><p class="mt-2">');

  // Handle single newlines in paragraphs
  content = content.replace(/\n/g, '<br/>');

  // Wrap in paragraph
  content = '<p class="mt-2">' + content + '</p>';

  // Clean up empty paragraphs
  content = content.replace(/<p class="mt-2"><\/p>/g, '');

  return content;
}

export function TopicContent({ topicId }: TopicContentProps) {
  // This will be populated by the server component
  return null;
}

export function renderContent(content: string): string {
  return parseMarkdown(content);
}
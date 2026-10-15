import React from "react";

/**
 * Inner wrapper for an interactive tool. The page around it (title, answer, how it works, FAQs,
 * related tools) comes from ToolPage, so the old props are accepted but no longer rendered.
 */
interface ToolLayoutProps {
  title?: string;
  description?: string;
  subtitle?: string;
  children: React.ReactNode;
  illustration?: React.ReactNode;
  relatedToolSlugs?: string[];
  relatedArticles?: { slug: string; title: string; category: string; emoji: string }[];
}

export default function ToolLayout({ children }: ToolLayoutProps) {
  return <div className="tool-body">{children}</div>;
}

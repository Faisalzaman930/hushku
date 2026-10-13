"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Opens the breed compare tool with this breed pre-selected. A button, not a link, so
 * search engines don't crawl hundreds of near-identical `?a=` tool URLs.
 */
export default function CompareButton({ slug, className, children }: { slug: string; className?: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push(`/tools/breed-compare?a=${encodeURIComponent(slug)}`)} className={className}>
      {children}
    </button>
  );
}

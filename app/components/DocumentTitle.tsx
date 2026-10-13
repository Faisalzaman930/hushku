"use client";

import { useEffect } from "react";

/** Sets the browser tab title where a page can't export metadata (the 404 page). */
export default function DocumentTitle({ title }: { title: string }) {
  useEffect(() => {
    // Next writes the layout's default title after hydration; set ours once it has.
    document.title = title;
    const t = window.setTimeout(() => (document.title = title), 50);
    return () => window.clearTimeout(t);
  }, [title]);
  return null;
}

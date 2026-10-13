"use client";

import { useEffect, useState } from "react";

type Cluster = { id: string; label: string; count: number };

/**
 * Topic filter for the Resources hub. The sections themselves are server-rendered (and always
 * in the HTML for search engines); this only hides the ones not chosen, and highlights the
 * section in view.
 */
export default function ResourcesFilter({ clusters, total }: { clusters: Cluster[]; total: number }) {
  const [active, setActive] = useState("all");
  const [inView, setInView] = useState("");

  // Show or hide sections.
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("section[data-cluster]").forEach((el) => {
      el.hidden = active !== "all" && el.dataset.cluster !== active;
    });
  }, [active]);

  // "All 12" links inside each section choose that topic.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLElement>("[data-filter]");
      if (a?.dataset.filter) setActive(a.dataset.filter);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Highlight the section in view while showing all.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setInView((en.target as HTMLElement).dataset.cluster ?? "")),
      { rootMargin: "-20% 0px -65% 0px" }
    );
    document.querySelectorAll("section[data-cluster]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const pill = (on: boolean) =>
    `inline-flex min-h-9 flex-none items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[15px] font-medium transition-colors ${on ? "bg-label text-white" : "text-label-2 hover:bg-surface"}`;

  return (
    <nav className="sticky top-14 z-40 border-y border-separator bg-white/[0.85] backdrop-blur-[20px] backdrop-saturate-[1.8] md:top-[52px]" aria-label="Topic filter">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="scrollbar-hide flex gap-1 overflow-x-auto py-2.5">
          <button type="button" onClick={() => setActive("all")} aria-pressed={active === "all"} className={pill(active === "all")}>
            All <span className="tabular-nums opacity-60">{total}</span>
          </button>
          {clusters.map((c) => (
            <button key={c.id} type="button" onClick={() => setActive(c.id)} aria-pressed={active === c.id} className={pill(active === c.id || (active === "all" && inView === c.id))}>
              {c.label} <span className="tabular-nums opacity-60">{c.count}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight, PlayCircle, Search, X } from "lucide-react";

export type QuestionLite = { slug: string; q: string; short: string; category: string; demo: boolean; keywords?: string };

const SOFT = new Set(["dog", "dogs", "cat", "pet", "pets", "puppy", "kitten", "my"]);

function score(item: QuestionLite, words: string[]) {
  const q = item.q.toLowerCase();
  const a = item.short.toLowerCase();
  const k = (item.keywords ?? "").toLowerCase();
  const hard = words.filter((w) => !SOFT.has(w));
  let s = 0;
  let hits = 0;
  for (const w of words) {
    const stem = w.length > 4 ? w.replace(/(ing|s)$/, "") : w;
    const soft = SOFT.has(w) && hard.length > 0;
    const re = new RegExp(`\\b${stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
    const pts = re.test(q) ? 3 : re.test(k) ? 2 : re.test(a) ? 1 : 0;
    if (!pts) continue;
    s += soft ? 0.5 : pts;
    if (!soft) hits++;
  }
  // Words like "dog" or "pet" only nudge the ranking. Of the rest, allow one miss.
  const needed = hard.length || 1;
  return hits >= Math.max(1, needed - (needed > 1 ? 1 : 0)) ? s : 0;
}

/** Search across every help question. Results update as you type. */
export default function QuestionSearch({
  items,
  placeholder = "Search questions, like “multiple pets” or “lost”",
  autoFocus = false,
}: {
  items: QuestionLite[];
  placeholder?: string;
  autoFocus?: boolean;
}) {
  const [query, setQuery] = useState("");
  const STOP = new Set(["how", "do", "i", "can", "my", "the", "a", "an", "to", "is", "in", "on", "with", "for", "of", "and", "what", "does", "it", "hushku", "app"]);
  const words = query.toLowerCase().replace(/[?.,!’']/g, " ").split(/\s+/).filter((w) => w.length > 1 && !STOP.has(w));
  const results = useMemo(
    () =>
      words.length
        ? items
            .map((i) => ({ i, s: score(i, words) }))
            .filter((r) => r.s > 0)
            .sort((a, b) => b.s - a.s)
            .slice(0, 8)
            .map((r) => r.i)
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, items]
  );

  return (
    <div className="relative w-full">
      <label htmlFor="help-search" className="sr-only">Search help</label>
      <div className="flex min-h-14 items-center gap-3 rounded-full bg-white px-5 ring-1 ring-control focus-within:ring-2 focus-within:ring-brand">
        <Search size={20} className="flex-none text-label-2" aria-hidden />
        <input
          id="help-search"
          type="search"
          autoComplete="off"
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[17px] text-label outline-none focus-visible:!outline-none placeholder:text-label-3 [&::-webkit-search-cancel-button]:hidden"
          aria-controls="help-search-results"
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="grid h-8 w-8 place-items-center rounded-full text-label-2 hover:bg-surface">
            <X size={18} aria-hidden />
          </button>
        ) : null}
      </div>

      <div id="help-search-results" aria-live="polite">
        {words.length ? (
          <div className="mt-3 overflow-hidden rounded-3xl bg-white text-left shadow-[0_12px_40px_rgba(29,27,25,0.12)] ring-1 ring-separator">
            {results.length ? (
              <ul>
                {results.map((r) => (
                  <li key={r.slug} className="border-b border-separator last:border-b-0">
                    <Link href={`/help-center/questions/${r.slug}`} className="group flex items-start gap-3 px-5 py-4 hover:bg-bg-2">
                      <span className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="text-[13px] font-medium text-label-3">{r.category}</span>
                        <span className="text-[17px] leading-[22px] font-semibold text-label group-hover:underline underline-offset-[3px]">{r.q}</span>
                        <span className="line-clamp-2 text-[15px] leading-[22px] text-label-2">{r.short}</span>
                      </span>
                      {r.demo ? (
                        <span className="mt-6 hidden flex-none items-center gap-1 text-[13px] font-medium text-brand-text sm:inline-flex">
                          <PlayCircle size={15} aria-hidden /> Demo
                        </span>
                      ) : null}
                      <ChevronRight size={18} className="mt-6 flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-5 py-4 text-[15px] text-label-2">
                No matches. Try another word, or email <a href="mailto:hello@hushku.app" className="font-medium text-brand-text hover:underline">hello@hushku.app</a>.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

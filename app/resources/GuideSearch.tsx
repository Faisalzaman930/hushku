"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ChevronRight, Search, X } from "lucide-react";

export type SearchItem = {
  href: string;
  title: string;
  kind: string;
  topic: string;
  /** Extra text that's searched but not shown: SEO title, H1, tags, description. */
  text: string;
};

/** Everyday words people type, mapped to the words the guides use. */
const SYNONYMS: Record<string, string[]> = {
  throw: ["vomit"], throwing: ["vomit"], puke: ["vomit"], puking: ["vomit"], sick: ["vomit", "ill"],
  poop: ["stool", "diarrhea", "faeces"], poo: ["stool", "diarrhea"], stool: ["poop"], runny: ["diarrhea"],
  pee: ["urine", "peeing", "litter"], peeing: ["urine", "pee"], wee: ["urine", "pee"], urinating: ["peeing"],
  itch: ["itchy", "scratching"], itching: ["itchy", "scratching"], scratch: ["itchy", "scratching"],
  pup: ["puppy"], pups: ["puppy"], puppies: ["puppy"], kitty: ["kitten", "cat"], kittens: ["kitten"],
  doggy: ["dog"], dogs: ["dog"], cats: ["cat"], feline: ["cat"], canine: ["dog"],
  food: ["feed", "feeding", "nutrition", "diet"], eat: ["eating", "food"], eats: ["eating"],
  acl: ["cruciate"], ccl: ["cruciate"], knee: ["cruciate", "patella"], disc: ["ivdd"], spine: ["ivdd"], back: ["ivdd"],
  tick: ["ticks", "lyme"], ticks: ["tick", "lyme"], flea: ["fleas"], worm: ["worms"],
  teeth: ["dental", "tooth"], tooth: ["dental", "teeth"], breath: ["dental"],
  neuter: ["spay"], spaying: ["spay"], neutering: ["spay"], fix: ["spay"],
  shot: ["vaccine"], shots: ["vaccine"], vaccines: ["vaccine"], jabs: ["vaccine"],
  hot: ["heat", "heatstroke"], summer: ["heat"], heatstroke: ["heat"],
  old: ["senior"], elderly: ["senior"], aging: ["senior"], ageing: ["senior"],
  lost: ["missing"], missing: ["lost"], adopt: ["adoption", "rescue"], adopting: ["adoption", "rescue"],
  limp: ["limping"], cough: ["coughing"], sneeze: ["sneezing"], shake: ["shaking"], bite: ["biting"],
  pain: ["painful", "hurt"], hurt: ["pain"], weight: ["overweight", "weight-loss", "obese"], fat: ["overweight", "weight"],
};

const STOP = new Set(["my", "a", "an", "the", "is", "to", "of", "in", "and", "or", "why", "how", "what", "does", "do", "i", "can", "for", "it", "on", "with", "when", "should"]);

const norm = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim();

function terms(q: string): string[][] {
  const words = norm(q).split(" ").filter(Boolean);
  const meaningful = words.filter((w) => !STOP.has(w));
  return (meaningful.length ? meaningful : words).map((w) => [w, ...(SYNONYMS[w] ?? [])]);
}

type Indexed = SearchItem & { t: string; all: string };

function score(item: Indexed, groups: string[][]): number {
  let total = 0;
  for (const group of groups) {
    let best = 0;
    for (const w of group) {
      const re = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
      if (re.test(item.t)) best = Math.max(best, w === group[0] ? 10 : 7);
      else if (re.test(item.all)) best = Math.max(best, w === group[0] ? 3 : 2);
    }
    if (!best) return 0; // every word (or one of its synonyms) must match somewhere
    total += best;
  }
  return total;
}

export default function GuideSearch({ items, children }: { items: SearchItem[]; children: ReactNode }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const indexed = useMemo<Indexed[]>(() => items.map((i) => ({ ...i, t: norm(i.title), all: norm(`${i.title} ${i.kind} ${i.topic} ${i.text}`) })), [items]);

  // Read ?q= so other pages can link to a search. The URL is kept in sync without a reload;
  // /resources?q=… pages share the hub's canonical URL, so they aren't indexed separately.
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q");
    if (initial) setQ(initial);
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) && !el.isContentEditable) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (q.trim()) url.searchParams.set("q", q.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  }, [q]);

  const query = q.trim();
  const results = useMemo(() => {
    if (!query) return [];
    const groups = terms(query);
    if (!groups.length) return [];
    return indexed
      .map((i) => ({ i, s: score(i, groups) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s || a.i.title.localeCompare(b.i.title))
      .slice(0, 30)
      .map((r) => r.i);
  }, [indexed, query]);

  return (
    <>
      <div>
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            if (results[0]) window.location.href = results[0].href;
          }}
          className="relative"
        >
          <label htmlFor="guide-search" className="sr-only">Search guides and tools</label>
          <Search size={20} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-label-3" aria-hidden />
          <input
            ref={input}
            id="guide-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Escape") setQ(""); }}
            placeholder="Search guides and tools"
            autoComplete="off"
            enterKeyHint="search"
            aria-describedby="guide-search-status"
            className="h-14 w-full rounded-2xl bg-surface pr-12 pl-12 text-[17px] text-label placeholder:text-label-3 outline-none ring-brand focus:ring-2 [&::-webkit-search-cancel-button]:hidden"
          />
          {q && (
            <button type="button" onClick={() => { setQ(""); input.current?.focus(); }} aria-label="Clear search" className="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-label-2 hover:bg-separator">
              <X size={18} aria-hidden />
            </button>
          )}
        </form>
        <p id="guide-search-status" role="status" aria-live="polite" className="sr-only">
          {query ? `${results.length} result${results.length === 1 ? "" : "s"} for ${query}` : ""}
        </p>
      </div>

      {query && (
        <section aria-labelledby="results-h" className="flex flex-col gap-4">
          <h2 id="results-h" className="text-[26px] font-semibold text-label">
            {results.length ? `${results.length === 30 ? "Top 30" : results.length} result${results.length === 1 ? "" : "s"} for “${query}”` : `No results for “${query}”`}
          </h2>
          {results.length ? (
            <ul className="grid gap-x-8 border-t border-separator md:grid-cols-2">
              {results.map((r) => (
                <li key={r.href} className="border-b border-separator">
                  <Link href={r.href} className="group flex min-h-16 items-center gap-3 py-3">
                    <span className="flex-1">
                      <span className="block text-[13px] text-label-2">{r.kind} · {r.topic}</span>
                      <span className="text-[17px] font-medium text-label group-hover:underline underline-offset-[3px]">{r.title}</span>
                    </span>
                    <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[17px] leading-[26px] text-label-2">
              Try a simpler word, like “vomiting”, “itchy” or “puppy”, or check your pet&apos;s signs with the{" "}
              <Link href="/tools/symptom-checker" className="font-medium text-brand-text hover:underline underline-offset-[3px]">symptom checker</Link>. If your pet seems very unwell, call your vet.
            </p>
          )}
        </section>
      )}

      {/* The full guide list is always in the HTML (crawlers and no-JS readers see every link); it's only hidden while searching. */}
      <div hidden={!!query} className={query ? "hidden" : "flex flex-col gap-14"}>{children}</div>
    </>
  );
}

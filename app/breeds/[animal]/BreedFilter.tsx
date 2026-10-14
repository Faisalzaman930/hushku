"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export type BreedListItem = { slug: string; name: string; image: string | null; group: string; size: string | null };

const SIZE_ORDER = ["Small", "Medium", "Large", "Very Large"];

/** Search and filters over the full list. Every breed is in the server-rendered HTML; filtering only hides cards. */
export default function BreedFilter({ animal, breeds, groupLabel }: { animal: string; breeds: BreedListItem[]; groupLabel: string }) {
  const groups = useMemo(() => ["All", ...Array.from(new Set(breeds.map((b) => b.group))).sort()], [breeds]);
  const sizes = useMemo(() => ["All", ...SIZE_ORDER.filter((s) => breeds.some((b) => b.size === s))], [breeds]);
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("All");
  const [size, setSize] = useState("All");

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return new Set(
      breeds
        .filter((b) => (group === "All" || b.group === group) && (size === "All" || b.size === size) && (!needle || b.name.toLowerCase().includes(needle)))
        .map((b) => b.slug)
    );
  }, [breeds, q, group, size]);

  const control = "min-h-11 rounded-full border border-separator bg-white px-4 text-[15px] text-label outline-none focus:border-label";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-3" role="search">
        <label className="sr-only" htmlFor="breed-q">Search breeds</label>
        <input id="breed-q" type="search" placeholder="Search breeds" value={q} onChange={(e) => setQ(e.target.value)} className={`${control} min-w-[200px] flex-1`} />
        <label className="sr-only" htmlFor="breed-group">{groupLabel}</label>
        <select id="breed-group" value={group} onChange={(e) => setGroup(e.target.value)} className={control}>
          {groups.map((g) => <option key={g} value={g}>{g === "All" ? `All ${groupLabel.toLowerCase()}s` : g}</option>)}
        </select>
        {sizes.length > 1 ? (
          <>
            <label className="sr-only" htmlFor="breed-size">Size</label>
            <select id="breed-size" value={size} onChange={(e) => setSize(e.target.value)} className={control}>
              {sizes.map((s) => <option key={s} value={s}>{s === "All" ? "All sizes" : s}</option>)}
            </select>
          </>
        ) : null}
        <span className="text-[15px] text-label-2" aria-live="polite">{shown.size} breeds</span>
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {breeds.map((b) => (
          <li key={b.slug} hidden={!shown.has(b.slug)}>
            <Link href={`/breeds/${animal}/${b.slug}`} className="group flex flex-col gap-3">
              <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                {b.image ? <Image src={b.image} alt={`${b.name} ${animal === "cats" ? "cat" : "dog"}`} fill sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" /> : null}
              </span>
              <span>
                <span className="block text-[17px] font-semibold text-label group-hover:underline underline-offset-[3px]">{b.name}</span>
                <span className="text-[13px] text-label-2">{[b.size, b.group].filter(Boolean).join(" · ")}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {shown.size === 0 ? <p className="py-12 text-center text-[17px] text-label-2">No breeds match. Try a different search or filter.</p> : null}
    </div>
  );
}

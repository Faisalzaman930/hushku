import { dogs, cats } from "./index";
import type { BreedDoc, CatBreedDoc } from "./types";
import { parentSlugs } from "./notes";

const knownDogs = new Set(dogs.map((d) => d.slug));
const SIZES = ["Small", "Medium", "Large", "Very Large"];

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

const parentsOf = (d: BreedDoc) => parentSlugs(d.parentBreeds, knownDogs).map((p) => p.slug).filter(Boolean) as string[];

/** Mixes that have this breed as a parent. */
export function mixesOf(slug: string): BreedDoc[] {
  return dogs.filter((d) => parentsOf(d).includes(slug));
}

function dogDistance(a: BreedDoc, b: BreedDoc) {
  const sa = a.scores, sb = b.scores;
  const keys = ["energy", "kidFriendly", "trainability", "shedding", "strangerFriendly", "exerciseNeeds"] as const;
  let d = 0;
  for (const k of keys) d += Math.abs((sa[k] ?? 3) - (sb[k] ?? 3));
  d += Math.abs(SIZES.indexOf(a.size ?? "Medium") - SIZES.indexOf(b.size ?? "Medium")) * 2;
  if (a.group && a.group === b.group) d -= 3;
  return d;
}

/**
 * Breeds similar in size, group and temperament. Ties are broken by a per-page hash rather than
 * alphabetically, so links spread across the whole catalogue instead of piling onto the A's.
 */
export function relatedDogs(b: BreedDoc, n = 6): BreedDoc[] {
  const mine = new Set(parentsOf(b));
  return dogs
    .filter((d) => d.slug !== b.slug && d.image && !mine.has(d.slug))
    .map((d) => ({ d, score: dogDistance(b, d) + (hash(b.slug + d.slug) % 100) / 100 }))
    .sort((x, y) => x.score - y.score)
    .slice(0, n)
    .map((x) => x.d);
}

export function relatedCats(b: CatBreedDoc, n = 6): CatBreedDoc[] {
  const keys = ["energyLevel", "affectionLevel", "grooming", "socialNeeds", "vocalisation", "childFriendly"] as const;
  return cats
    .filter((c) => c.slug !== b.slug && c.image)
    .map((c) => {
      let d = 0;
      for (const k of keys) d += Math.abs((b.scores[k] ?? 3) - (c.scores[k] ?? 3));
      if (b.origin && b.origin === c.origin) d -= 1;
      return { c, score: d + (hash(b.slug + c.slug) % 100) / 100 };
    })
    .sort((x, y) => x.score - y.score)
    .slice(0, n)
    .map((x) => x.c);
}

export type { BreedDoc, CatBreedDoc, AnyBreed, BreedScores, CatScores } from "./types";

import { dogs as rawDogs } from "./dogs";
import { cats as rawCats } from "./cats";
import type { BreedDoc, CatBreedDoc, AnyBreed } from "./types";
import { dogNote, catNote } from "./notes";
import { catFill } from "./notes/cat-fill";
import { photoFor } from "./photos";

/** "8 to 12 years." → "8 to 12 years"; drops trailing remarks after the first sentence. */
function tidy(v: string | null | undefined): string | null {
  if (!v) return v ?? null;
  return v
    .split(/\.\s/)[0]
    .replace(/\.$/, "")
    .replace(/\s+(tall )?at the shoulder$/i, "")
    .replace(/\s+-\s+/g, " to ")
    .trim();
}

/** Freely licensed Wikimedia Commons photos, each checked against the breed; others show a placeholder. */
function dedupe<T extends { slug: string }>(list: T[]): T[] {
  const seen = new Set<string>();
  return list.filter((b) => (seen.has(b.slug) ? false : (seen.add(b.slug), true)));
}

export const dogs: BreedDoc[] = dedupe(rawDogs).map((d) => {
  const n = dogNote(d.slug);
  return {
    ...d,
    group: n?.g ?? d.group,
    image: photoFor("dogs", d.slug),
    parentBreeds: d.parentBreeds ?? n?.parents,
    lifeSpan: tidy(d.lifeSpan),
    height: tidy(d.height),
    weight: tidy(d.weight),
  };
});

export const cats: CatBreedDoc[] = dedupe(rawCats).map((c) => {
  const n = catNote(c.slug);
  const f = c.weight || c.lifeSpan ? undefined : catFill(c.slug);
  const merged = { ...c, ...(f ?? {}), scores: f?.scores ?? c.scores };
  return { ...merged, image: photoFor("cats", c.slug), origin: n?.o ?? (c.origin || null), lifeSpan: tidy(merged.lifeSpan), weight: tidy(merged.weight) };
});

export const ANIMAL_LABELS: Record<string, string> = {
  dogs: "Dogs",
  cats: "Cats",
};

export const breedsByAnimal: Record<string, BreedDoc[] | CatBreedDoc[]> = {
  dogs,
  cats,
};

export const allBreeds: AnyBreed[] = [...dogs, ...cats];

export function getBreed(animal: string, slug: string): AnyBreed | undefined {
  return (breedsByAnimal[animal] as AnyBreed[])?.find((b) => b.slug === slug);
}

/** Date the breed guides were last rewritten and fact-checked. Change it only when the content changes. */
export const BREED_CONTENT_UPDATED = "2026-10-14";
export const BREED_CONTENT_PUBLISHED = "2026-06-12";

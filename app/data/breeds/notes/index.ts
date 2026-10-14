import type { BreedNote } from "./types";
import { DOGS_A_C } from "./dogs-a-c";
import { DOGS_D_K } from "./dogs-d-k";
import { DOGS_L_Z } from "./dogs-l-z";
import { CATS } from "./cats";
import { MIXES } from "./mixes";

export type { BreedNote } from "./types";

const DOG_NOTES: Record<string, BreedNote & { parents?: string }> = { ...DOGS_A_C, ...DOGS_D_K, ...DOGS_L_Z, ...MIXES };

export function dogNote(slug: string) {
  return DOG_NOTES[slug];
}
export function catNote(slug: string) {
  return CATS[slug];
}

/** Names used in `parentBreeds` that differ from the breed page's name. */
const PARENT_ALIASES: Record<string, string> = {
  "english bulldog": "bulldog",
  "rough collie": "collie",
  "toy poodle": "poodle",
  "miniature poodle": "poodle",
  "toy or miniature poodle": "poodle",
  "german shepherd": "german-shepherd-dog",
};

export function parentSlugs(parentBreeds: string | undefined | null, known: Set<string>) {
  if (!parentBreeds) return [] as { name: string; slug: string | null }[];
  return parentBreeds
    .split(/,\s*|\s+and\s+|\s+or\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((name) => {
      const lower = name.toLowerCase();
      const base = lower.replace(/\s+/g, "-");
      const alias = PARENT_ALIASES[lower];
      const slug = known.has(base) ? base : alias && known.has(alias) ? alias : null;
      return { name, slug };
    });
}

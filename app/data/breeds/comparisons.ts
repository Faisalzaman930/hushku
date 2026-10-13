import { breedsByAnimal } from "./index";
import type { BreedDoc, CatBreedDoc } from "./types";

/** Popular breed match-ups people search for ("X vs Y"). Each becomes an indexable page. */
const DOG_PAIRS: [string, string][] = [
  ["golden-retriever", "labrador-retriever"], ["german-shepherd-dog", "belgian-malinois"], ["german-shepherd-dog", "golden-retriever"],
  ["german-shepherd-dog", "labrador-retriever"], ["german-shepherd-dog", "siberian-husky"], ["siberian-husky", "alaskan-malamute"],
  ["pembroke-welsh-corgi", "cardigan-welsh-corgi"], ["french-bulldog", "boston-terrier"], ["french-bulldog", "pug"],
  ["french-bulldog", "bulldog"], ["bulldog", "american-bulldog"], ["rottweiler", "doberman-pinscher"],
  ["rottweiler", "german-shepherd-dog"], ["cavalier-king-charles-spaniel", "cocker-spaniel"], ["cocker-spaniel", "english-springer-spaniel"],
  ["beagle", "basset-hound"], ["beagle", "dachshund"], ["border-collie", "australian-shepherd"], ["shih-tzu", "lhasa-apso"],
  ["shih-tzu", "maltese"], ["yorkshire-terrier", "maltese"], ["chihuahua", "pomeranian"], ["pomeranian", "yorkshire-terrier"],
  ["poodle", "labradoodle"], ["goldendoodle", "labradoodle"], ["goldendoodle", "golden-retriever"], ["bernese-mountain-dog", "great-pyrenees"],
  ["bernese-mountain-dog", "saint-bernard"], ["great-dane", "mastiff"], ["cane-corso", "rottweiler"], ["cane-corso", "mastiff"],
  ["american-pit-bull-terrier", "american-staffordshire-terrier"], ["staffordshire-bull-terrier", "american-staffordshire-terrier"],
  ["akita", "shiba-inu"], ["shiba-inu", "siberian-husky"], ["samoyed", "siberian-husky"], ["samoyed", "american-eskimo-dog"],
  ["dalmatian", "pointer"], ["vizsla", "weimaraner"], ["weimaraner", "german-shorthaired-pointer"], ["whippet", "italian-greyhound"],
  ["greyhound", "whippet"], ["havanese", "bichon-frise"], ["bichon-frise", "maltese"], ["miniature-schnauzer", "west-highland-white-terrier"],
  ["jack-russell-terrier", "rat-terrier"], ["newfoundland", "saint-bernard"], ["doberman-pinscher", "german-shepherd-dog"],
  ["labrador-retriever", "chesapeake-bay-retriever"], ["boxer", "bulldog"], ["bernese-mountain-dog", "golden-retriever"],
  ["pembroke-welsh-corgi", "dachshund"], ["pug", "shih-tzu"], ["papillon", "chihuahua"], ["cavalier-king-charles-spaniel", "shih-tzu"],
  ["australian-cattle-dog", "border-collie"], ["chow-chow", "akita"], ["collie", "shetland-sheepdog"],
];

const CAT_PAIRS: [string, string][] = [
  ["maine-coon", "norwegian-forest-cat"], ["ragdoll", "maine-coon"], ["ragdoll", "birman"], ["british-shorthair", "scottish-fold"],
  ["british-shorthair", "russian-blue"], ["siamese", "balinese"], ["bengal", "savannah"], ["bengal", "abyssinian"], ["persian", "exotic-shorthair"],
  ["sphynx", "devon-rex"], ["siberian", "norwegian-forest-cat"], ["ragdoll", "persian"], ["persian", "himalayan"], ["siamese", "oriental"],
  ["ragdoll", "ragamuffin"], ["burmese", "tonkinese"],
];

export type Comparison =
  | { slug: string; animal: "dogs"; a: BreedDoc; b: BreedDoc }
  | { slug: string; animal: "cats"; a: CatBreedDoc; b: CatBreedDoc };

const find = (animal: string, slug: string) => (breedsByAnimal[animal] as { slug: string }[]).find((x) => x.slug === slug);

function build(animal: "dogs" | "cats", pairs: [string, string][]): Comparison[] {
  return pairs.flatMap(([x, y]) => {
    const a = find(animal, x);
    const b = find(animal, y);
    if (!a || !b) return [];
    return [{ slug: `${x}-vs-${y}`, animal, a, b } as Comparison];
  });
}

export const COMPARISONS: Comparison[] = [...build("dogs", DOG_PAIRS), ...build("cats", CAT_PAIRS)];

export const getComparison = (slug: string) => COMPARISONS.find((c) => c.slug === slug);

/** Comparisons that include this breed. */
export const comparisonsFor = (animal: string, slug: string) =>
  COMPARISONS.filter((c) => c.animal === animal && (c.a.slug === slug || c.b.slug === slug));

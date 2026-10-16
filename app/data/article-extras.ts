import type { Source } from "./tools";

/**
 * Per-article additions shared by every article type: topic, key facts, sources, related tools,
 * last review date and the in-context app offer. Keyed by slug so the original data models stay put.
 */
export type ArticleExtras = {
  topic?: TopicId;
  keyFacts?: string[];
  sources?: Source[];
  tools?: string[];
  /** Overrides the article's own lastUpdated once it has been reviewed. */
  updated?: string;
  cta?: { title: string; body: string; link?: { href: string; label: string } };
};

export const ARTICLE_TOPICS = {
  health: "Health and symptoms",
  training: "Behaviour and training",
  puppies: "Puppies and kittens",
  cats: "Cat care",
  nutrition: "Food and nutrition",
  breeds: "Breeds",
  adoption: "Adoption, fostering and rehoming",
  everyday: "Everyday care",
  apps: "Pet app guides",
} as const;
export type TopicId = keyof typeof ARTICLE_TOPICS;

const HEALTH_CTA = { title: "Keep your pet's health records in one place", body: "Hushku stores vaccinations, vet visits, medication and weight for each pet, with reminders, and shares them with your household and sitter.", link: { href: "/health", label: "See health and care" } };
const TRAIN_CTA = { title: "Keep everyone consistent", body: "Training works when the whole house does the same thing. In Hushku, add family and sitters to your pet's Care Team so routines and notes are shared.", link: { href: "/care-team", label: "See the Care Team" } };
const FEED_CTA = { title: "Share feeding routines with your household", body: "Set feeding reminders in Hushku and share them with everyone who feeds your pet, so meals aren't missed or doubled.", link: { href: "/care-team", label: "See the Care Team" } };
const ADOPT_CTA = { title: "Adoption and fostering in one app", body: "Shelters and owners list pets for adoption and fostering in Hushku, and you send a request straight from the listing.", link: { href: "/adoption", label: "See adoption" } };

import { EXTRAS_DATA } from "./article-extras-data";
import { EXTRAS_DATA_2 } from "./article-extras-data-2";
import { VACCINE_PAGES } from "./vaccine-schedules";

export const EXTRAS: Record<string, ArticleExtras> = { ...EXTRAS_DATA, ...EXTRAS_DATA_2 };
for (const v of VACCINE_PAGES) EXTRAS[v.slug] = { ...v.extras, updated: "October 2026" };

/** Adds extras for a slug (merged, so content files can each contribute). */
export function addExtras(map: Record<string, ArticleExtras>) {
  for (const [k, v] of Object.entries(map)) EXTRAS[k] = { ...EXTRAS[k], ...v };
}

const TOPIC_RULES: [RegExp, TopicId][] = [
  [/^best-|app/, "apps"],
  [/cat|kitten/, "cats"],
  [/puppy|socializ/, "puppies"],
  [/breed|golden|labrador|beagle|shepherd|bulldog/, "breeds"],
  [/food|nutrition|aafco|feed|diet/, "nutrition"],
  [/rescue|adopt|foster|rehome/, "adoption"],
  [/train|bark|pulling|jumping|leash|command|body-language|anxiety|biting|aggress|playing|clicker|reinforcement|introduc/, "training"],
  [/why-|what-is|health|first-aid|limping|breathing|parvo|bloat|dysplasia|kennel|senior|drinking|restless|walk/, "health"],
];

export function topicFor(slug: string): TopicId {
  const t = EXTRAS[slug]?.topic;
  if (t) return t;
  for (const [re, id] of TOPIC_RULES) if (re.test(slug)) return id;
  return "everyday";
}

export function extrasFor(slug: string): ArticleExtras {
  const x = EXTRAS[slug] ?? {};
  if (x.cta) return x;
  const topic = topicFor(slug);
  const cta = topic === "training" ? TRAIN_CTA : topic === "nutrition" ? FEED_CTA : topic === "adoption" ? ADOPT_CTA : HEALTH_CTA;
  return { ...x, cta };
}

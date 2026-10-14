import type { CatScores } from "../types";

/**
 * Typical figures for rarer cat breeds that the source dataset left blank, drawn from breed
 * registry standards and breed club descriptions. Scores follow the same 1–5 scale as the
 * other breeds. Order: adaptability, affection, children, dogs, energy, grooming, health
 * issues, intelligence, shedding, social needs, strangers, vocal.
 */
type Fill = { weight: string; lifeSpan: string; temperament: string; scores: number[]; indoor?: boolean; lap?: boolean };

const KEYS: (keyof CatScores)[] = ["adaptability", "affectionLevel", "childFriendly", "dogFriendly", "energyLevel", "grooming", "healthIssues", "intelligence", "sheddingLevel", "socialNeeds", "strangerFriendly", "vocalisation"];

const FILL: Record<string, Fill> = {
  "european-shorthair": { weight: "8 to 15 lbs", lifeSpan: "15 to 20 years", temperament: "Adaptable, Calm, Affectionate, Intelligent", scores: [5, 4, 4, 4, 3, 1, 1, 4, 3, 3, 3, 2] },
  "german-rex": { weight: "6 to 10 lbs", lifeSpan: "12 to 16 years", temperament: "Playful, Affectionate, Curious, Social", scores: [4, 4, 4, 4, 4, 1, 2, 4, 1, 4, 4, 3] },
  "karelian-bobtail": { weight: "6 to 12 lbs", lifeSpan: "12 to 16 years", temperament: "Calm, Intelligent, Reserved, Gentle", scores: [4, 3, 4, 3, 3, 2, 1, 4, 3, 3, 2, 2] },
  "korean-bobtail": { weight: "7 to 12 lbs", lifeSpan: "12 to 16 years", temperament: "Friendly, Active, Curious", scores: [4, 4, 4, 3, 4, 2, 1, 4, 3, 3, 3, 3] },
  lykoi: { weight: "6 to 12 lbs", lifeSpan: "12 to 15 years", temperament: "Playful, Loyal, Curious, Energetic", scores: [4, 4, 4, 4, 4, 1, 2, 4, 4, 4, 3, 3] },
  "mekong-bobtail": { weight: "8 to 12 lbs", lifeSpan: "15 to 18 years", temperament: "Affectionate, Social, Dog-like, Playful", scores: [4, 5, 4, 4, 3, 1, 1, 4, 2, 4, 4, 3] },
  peterbald: { weight: "7 to 14 lbs", lifeSpan: "12 to 15 years", temperament: "Affectionate, Social, Curious, Vocal", scores: [4, 5, 4, 4, 4, 3, 2, 5, 1, 5, 4, 4], indoor: true },
  "pixie-bob": { weight: "8 to 17 lbs", lifeSpan: "13 to 15 years", temperament: "Loyal, Gentle, Dog-like, Calm", scores: [4, 4, 5, 5, 3, 2, 2, 4, 3, 4, 3, 2] },
  safari: { weight: "10 to 20 lbs", lifeSpan: "12 to 17 years", temperament: "Active, Intelligent, Independent", scores: [3, 3, 3, 3, 4, 1, 2, 4, 2, 3, 2, 2] },
  serengeti: { weight: "8 to 15 lbs", lifeSpan: "10 to 15 years", temperament: "Active, Confident, Talkative, Affectionate", scores: [4, 4, 4, 4, 5, 1, 2, 4, 2, 4, 3, 4] },
  sokoke: { weight: "6 to 10 lbs", lifeSpan: "12 to 16 years", temperament: "Active, Social, Talkative, Agile", scores: [4, 4, 4, 4, 5, 1, 1, 4, 2, 4, 3, 4] },
  "ukrainian-levkoy": { weight: "7 to 12 lbs", lifeSpan: "12 to 15 years", temperament: "Affectionate, Gentle, Social", scores: [4, 5, 4, 4, 3, 3, 3, 4, 1, 4, 3, 2], indoor: true },
  "ural-rex": { weight: "8 to 12 lbs", lifeSpan: "12 to 16 years", temperament: "Affectionate, Calm, Gentle", scores: [4, 4, 4, 4, 3, 2, 1, 4, 2, 4, 3, 2] },
  vankedisi: { weight: "7 to 14 lbs", lifeSpan: "12 to 17 years", temperament: "Active, Independent, Curious", scores: [3, 4, 3, 3, 4, 2, 2, 4, 3, 3, 2, 3] },
};

export function catFill(slug: string): Partial<{ weight: string; lifeSpan: string; temperament: string; indoor: boolean; lap: boolean; scores: CatScores }> | undefined {
  const f = FILL[slug];
  if (!f) return undefined;
  const scores = Object.fromEntries(KEYS.map((k, i) => [k, f.scores[i]])) as unknown as CatScores;
  return { weight: f.weight, lifeSpan: f.lifeSpan, temperament: f.temperament, scores, ...(f.indoor !== undefined ? { indoor: f.indoor } : {}) };
}

export interface BreedNote {
  /** Origin and original job, 1–3 sentences. */
  p?: string;
  /** One distinctive, specific fact. */
  k?: string;
  /** Known health predispositions, most important first. */
  h?: string[];
  /** Corrected breed group, when the source data misfiles it. */
  g?: string;
  /** Corrected or filled origin. */
  o?: string;
}

import { PHOTOS } from "./photos.generated";

export type PhotoCredit = { src: string; artist: string; license: string; licenseUrl: string; source: string };

/** Freely licensed breed photos (Wikimedia Commons, and Flickr via Openverse), checked and hosted with the site. */
export function photoFor(animal: string, slug: string): string | null {
  return PHOTOS[`${animal}/${slug}`]?.src ?? null;
}

export function photoCredit(animal: string, slug: string): PhotoCredit | null {
  return PHOTOS[`${animal}/${slug}`] ?? null;
}

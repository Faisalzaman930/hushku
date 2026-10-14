import type { AppScreen } from "../ui";
import { SCREEN_HOTSPOTS } from "./hotspots";

export type Box = [number, number, number, number];

export type TourSpot = {
  /** Key of a tagged region on the screen (see hotspots.ts), or an explicit box in % of the screen. */
  at: string | Box;
  label: string;
  body?: string;
  /** This is where you tap to reach the next screen. */
  next?: boolean;
  /** Where this flow starts (usually a bottom tab). */
  start?: boolean;
};

export type TourStep = {
  screen: AppScreen;
  /** How to reach this screen, e.g. ["Home tab", "Care Team", "Manage"]. */
  path?: string[];
  title: string;
  body?: string;
  spots: TourSpot[];
};

export function boxFor(screen: AppScreen, at: TourSpot["at"]): Box | null {
  if (Array.isArray(at)) return at;
  const all = SCREEN_HOTSPOTS as unknown as Record<string, Record<string, Box>>;
  return all[screen]?.[at] ?? null;
}

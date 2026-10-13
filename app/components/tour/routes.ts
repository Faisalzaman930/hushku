import type { AppScreen } from "../ui";

type Box = [number, number, number, number];
export type RouteFrame = { screen: AppScreen; at: string | Box; crumb: number; label: string };

/** Which bottom tab each tab crumb taps, and the screen it opens. */
const TABS: Record<string, { screen: AppScreen; at: string }> = {
  "Home tab": { screen: "home", at: "tab-home" },
  "Discover tab": { screen: "discover", at: "tab-discover" },
  "Alerts tab": { screen: "alerts", at: "tab-alerts" },
  "Messages tab": { screen: "messages", at: "tab-messages" },
  "Profile tab": { screen: "profile", at: "tab-profile" },
};

/** Screens a route can start on without a tab. */
const STARTS: Record<string, AppScreen> = {
  // "Sign up" is handled as a tap on Create Account (see SIGN_UP below).
  "Pet profile": "pet-profile",
  "A chat": "chat",
};

/** Crumbs that just set the scene ("Their phone") or name a section already in view. */
const SKIP = new Set(["How will you use Hushku?", "Shelter profile", "Their phone", "Sarah’s phone", "Manage", "Today’s Care", "A listing", "The listing", "Adoption", "Care & Health", "Pets"]);

/** On screen X, tapping crumb Y happens at hotspot `at` and opens screen `to`. */
const TAPS: Partial<Record<AppScreen, Record<string, { at: string | Box; to: AppScreen; label?: string }>>> = {
  home: {
    "Care Team": { at: [72, 20.4, 22, 6], to: "care-team", label: "Tap Manage next to Care Team" },
    "+": { at: "add-reminder", to: "add-reminder", label: "Tap + next to Today’s Care" },
    "Bell on a task": { at: "nudge", to: "remind-sheet", label: "Tap the bell next to a task" },
    Bell: { at: "notifications", to: "notifications", label: "Tap the bell at the top" },
    Notifications: { at: "notifications", to: "notifications", label: "Tap the bell at the top" },
    "Pet name": { at: "pet-switcher", to: "pet-switcher", label: "Tap your pet’s name" },
    "Scroll down": { at: "upcoming", to: "home-lower", label: "Scroll down" },
    "Health Records": { at: "upcoming", to: "home-lower", label: "Scroll down to Care & Health" },
    "Weight Tracker": { at: "upcoming", to: "home-lower", label: "Scroll down to Care & Health" },
    "Flea & Tick": { at: "upcoming", to: "home-lower", label: "Scroll down to Care & Health" },
    "Heat / Season": { at: "upcoming", to: "home-lower", label: "Scroll down to Care & Health" },
  },
  "home-lower": {
    "Health Records": { at: "records-row", to: "health-records" },
    "Weight Tracker": { at: "weight-row", to: "weight" },
    "Flea & Tick": { at: "flea-row", to: "flea-tick" },
    "Heat / Season": { at: "heat-row", to: "heat-cycle" },
  },
  welcome: {},
  role: {
    Shelter: { at: "role-shelter", to: "shelter-signup", label: "Choose Shelter, then Continue" },
    "Add your pet": { at: "continue", to: "add-pet", label: "Choose Pet owner, then Continue" },
  },
  "care-team": { "+": { at: "header-action", to: "invite-member", label: "Tap +" } },
  discover: {
    Filters: { at: "filters", to: "filters", label: "Tap Filters" },
    "Tap a pet": { at: [4, 19, 92, 46], to: "pet-profile", label: "Tap a pet" },
    "The pet": { at: [4, 19, 92, 46], to: "pet-profile", label: "Tap the pet" },
    Adopt: { at: "tabs", to: "discover-adopt", label: "Tap Adopt" },
    "Adopt or Foster": { at: "tabs", to: "discover-adopt", label: "Tap Adopt or Foster" },
    Shelters: { at: "tabs", to: "shelters", label: "Tap Shelters" },
  },
  "discover-adopt": {
    "+": { at: "post", to: "post-listing", label: "Tap +" },
    "Tap a pet": { at: "listing", to: "listing", label: "Tap a pet" },
    "A pet": { at: "listing", to: "listing", label: "Tap a pet" },
    "A shelter’s pet": { at: "listing", to: "listing", label: "Tap a shelter’s pet" },
  },
  "pet-profile": { "Send playdate invite": { at: "request", to: "request-confirm", label: "Tap Send playdate invite" } },
  messages: {
    "The new chat": { at: "conversation", to: "chat", label: "Tap the chat" },
    "A chat": { at: "conversation", to: "chat", label: "Tap a chat" },
  },
  chat: { "Press and hold a message": { at: [44, 77, 52, 5], to: "chat-actions", label: "Press and hold a message" } },
  profile: {
    Settings: { at: "settings", to: "settings", label: "Tap Settings" },
    "Your listings": { at: "listings", to: "listing-requests", label: "Tap your listing" },
    "Add Pet": { at: "add-pet", to: "add-pet", label: "Tap Add Pet" },
  },
  settings: {
    Notifications: { at: "notifications-row", to: "notification-settings", label: "Tap Notifications" },
    "Account privacy": { at: "privacy-row", to: "privacy", label: "Tap Account privacy" },
  },
  alerts: {
    "+": { at: "report", to: "lost-report", label: "Tap +" },
    "A report": { at: [4, 36, 92, 52], to: "alerts", label: "Tap a report" },
    "Get in touch": { at: "reward", to: "lost-contact", label: "Tap Get in touch" },
    "Your report": { at: [4, 36, 92, 52], to: "lost-detail", label: "Tap your report" },
  },
};

/**
 * Turns "How to get here" crumbs into the taps that get you there, ending on `target`.
 * Returns [] when the route can't be shown (e.g. sign-up flows).
 */
export function resolveRoute(path: string[] | undefined, target: AppScreen): RouteFrame[] {
  if (!path?.length) return [];
  const frames: RouteFrame[] = [];
  let screen: AppScreen | null = null;

  path.forEach((crumb, i) => {
    if (SKIP.has(crumb)) return;
    const tab = TABS[crumb];
    if (tab) {
      frames.push({ screen: tab.screen, at: tab.at, crumb: i, label: `Tap ${crumb.replace(" tab", "")}` });
      screen = tab.screen;
      return;
    }
    if (!screen && crumb === "Sign up") {
      frames.push({ screen: "welcome", at: "create-account", crumb: i, label: "Open Hushku and tap Create Account" });
      screen = "role";
      return;
    }
    if (!screen && STARTS[crumb]) {
      screen = STARTS[crumb];
      return;
    }
    if (!screen && TAPS.home?.[crumb]) {
      frames.push({ screen: "home", at: "tab-home", crumb: i, label: "Tap Home" });
      screen = "home";
    }
    if (!screen) return;
    const tap = TAPS[screen as AppScreen]?.[crumb];
    if (!tap) return;
    frames.push({ screen, at: tap.at, crumb: i, label: tap.label ?? `Tap ${crumb}` });
    screen = tap.to;
    // A scroll lands on a new screen where the same crumb is then tapped.
    const again = TAPS[screen as AppScreen]?.[crumb];
    if (tap.label?.startsWith("Scroll") && again) {
      frames.push({ screen, at: again.at, crumb: i, label: again.label ?? `Tap ${crumb}` });
      screen = again.to;
    }
  });

  void target;
  return frames;
}

import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Playdates and Walk Buddies: How It Works | Hushku Help";
const DESC = "How to find dogs and cats near you in Hushku, filter by what they’re looking for, and send a playdate or walk invite.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/playdate-matching" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/playdate-matching" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="playdate-matching"
      title="Playdates and walk buddies"
      lead="Find pets near you in Discover, check what they’re looking for, and send an invite. When the owner accepts, a chat opens."
      sections={[
  {
    "id": "find",
    "title": "Find pets near you",
    "body": "Open the Discover tab and stay on Pets. You’ll see dogs and cats around you, with their photos, breed, age and what their owner is looking for.",
    "steps": [
      "Open Discover.",
      "Choose the Pets tab at the top.",
      "Scroll through pets nearby. Tap a card to open the full profile."
    ]
  },
  {
    "id": "filters",
    "title": "Use filters",
    "body": "Tap Filters to narrow what you see. Your choices stay until you reset them.",
    "bullets": [
      "Distance from you",
      "Location: your current location, or search a city or area",
      "Pet type and gender",
      "Breed",
      "Looking for: walk, playdate, mating or adoption"
    ]
  },
  {
    "id": "invite",
    "title": "Send a playdate or walk invite",
    "steps": [
      "Open the pet’s profile.",
      "Tap the request button, for example Send playdate invite.",
      "Check the details and confirm."
    ],
    "note": "You can withdraw an invite any time before it’s accepted."
  },
  {
    "id": "accepted",
    "title": "When the owner accepts",
    "body": "When the other owner accepts your invite, a chat opens between you in Messages. Use it to agree a time and place. Meet somewhere public the first time."
  },
  {
    "id": "mating",
    "title": "Mating requests",
    "body": "Mating requests work the same way, with extra care. Owners say whether their pet is spayed or neutered when they add it, and nothing is shared or matched automatically. The owner reviews every mating request first."
  }
]}
      faqs={[
  {
    "q": "Why don’t I see any pets?",
    "a": "Try a larger distance, clear your filters, or check your location. Pets only appear when their owners have listed them for a walk, playdate, mating or adoption."
  },
  {
    "q": "Can I message an owner before they accept?",
    "a": "No. Every conversation starts with a request. Once it’s accepted, a chat opens."
  },
  {
    "q": "Does it work for cats?",
    "a": "Yes. Everything in Hushku works for dogs and cats."
  },
  {
    "q": "Can people see where I live?",
    "a": "No. Others see your general area and an approximate distance, never your address."
  }
]}
    />
  );
}

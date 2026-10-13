import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Adoption and Fostering: How It Works";
const DESC = "How to find pets for adoption and fostering in Hushku, send a request, and post your own listing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/adoption-fostering" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/adoption-fostering", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="adoption-fostering"
      tour="adoption-fostering"
      title="Adoption and fostering"
      lead="Browse pets looking for a home or a foster in Discover, send a request, and talk it through in chat. You can also post a listing yourself."
      sections={[
  {
    "id": "browse",
    "title": "Browse adoption and foster listings",
    "steps": [
      "Open Discover.",
      "Choose the Adopt or Foster tab.",
      "Tap a listing to see photos, the basics, what’s good to know and any special care."
    ]
  },
  {
    "id": "request",
    "title": "Send an adoption request",
    "steps": [
      "Open the listing.",
      "Tap the adoption request button and confirm.",
      "The person who posted it reviews requests and chooses who to talk to."
    ],
    "note": "You can withdraw a request any time before it’s accepted."
  },
  {
    "id": "post",
    "title": "Post a pet for adoption or foster",
    "body": "If you need to rehome a pet, or need someone to look after one for a while, post a listing.",
    "steps": [
      "Start a new listing in Discover.",
      "Choose Adoption or Foster.",
      "Add photos and the basics: pet type, breed, age, gender and size.",
      "Add what people should know, any special care, and for fosters how long you need.",
      "Post it. You can edit, pause or remove it later from your profile."
    ]
  },
  {
    "id": "manage",
    "title": "Choose who to talk to",
    "body": "People who are interested appear on your listing. Open a person to see their profile, accept the request you want to follow up, and a chat opens."
  }
]}
      faqs={[
  {
    "q": "Is there a fee?",
    "a": "No. Hushku is free. Any adoption fee is between you and the shelter or person rehoming the pet."
  },
  {
    "q": "Can shelters post listings?",
    "a": "Yes. Shelter accounts post adoption and foster listings, and show a verified badge once verified."
  },
  {
    "q": "How do I mark a pet as adopted?",
    "a": "Open the listing from your profile and change its status, or remove it."
  }
]}
    />
  );
}

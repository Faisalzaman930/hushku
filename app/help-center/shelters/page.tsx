import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Shelters and Rescues: Help";
const DESC = "How to find shelters and rescues near you in Hushku, and how shelters set up a free account to list animals for adoption and fostering.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/shelters" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/shelters", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="shelters"
      tour="shelters"
      title="Shelters and rescues"
      lead="Find shelters and rescues near you in Discover, see their animals and get in touch. Shelters get a free account of their own."
      sections={[
  {
    "id": "find",
    "title": "Find shelters near you",
    "steps": [
      "Open Discover.",
      "Choose the Shelters tab.",
      "Tap a shelter to see its profile, services and animals."
    ]
  },
  {
    "id": "contact",
    "title": "Adopt or foster from a shelter",
    "body": "Shelter animals appear in the Adopt and Foster tabs too. Send a request on any listing; when the shelter accepts, a chat opens."
  },
  {
    "id": "account",
    "title": "Set up a shelter account",
    "steps": [
      "Download Hushku and sign up.",
      "When asked how you want to use Hushku, choose Shelter.",
      "Add your shelter name, logo, location, email and phone.",
      "Add a description, a contact person and the services you offer.",
      "Post your animals for adoption or fostering."
    ]
  },
  {
    "id": "verified",
    "title": "Verified shelters",
    "body": "Verified shelters show a Verified shelter badge on their listings. If you run a shelter or rescue and have questions about verification, email hello@hushku.app."
  }
]}
      faqs={[
  {
    "q": "Does it cost shelters anything?",
    "a": "No. Shelter accounts are free, with no listing fees."
  },
  {
    "q": "Can a shelter post foster listings?",
    "a": "Yes. Shelters can post both adoption and foster listings."
  }
]}
    />
  );
}

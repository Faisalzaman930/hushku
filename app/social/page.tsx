import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";

const TITLE = "Pet Social Feed: Coming Soon";
const DESC =
  "A neighbourhood feed of the dogs and cats around you is planned for Hushku. It isn’t in the app yet. Join the waitlist to hear when it arrives.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/social" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/social", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SocialPage() {
  return (
    <ComingSoonPage
      feature="Social feed"
      tagline="A feed that’s all pets."
      description="A feed of the dogs and cats on your street, and the shelters near you, is on our roadmap. It isn’t in the app yet. Today, Hushku connects you through pet profiles, requests and chat."
      bullets={[
        "Photos and short updates from pets near you",
        "Follow the pets and shelters you care about",
        "Block, report and privacy controls from day one",
      ]}
    />
  );
}

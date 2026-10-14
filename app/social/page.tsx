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
      guide={{
        title: "What you can do in Hushku today",
        intro: "There's no feed yet, but the app already connects you with pet people nearby, and it was built with privacy first.",
        items: [
          { h: "Give your pet a profile", p: "Add photos, traits and a short bio so people nearby can find your dog or cat in Discover." },
          { h: "Send a request", p: "Ask another owner for a walk or a playdate from their pet's profile. They accept or decline, and you plan the details in Messages." },
          { h: "Build your Circle", p: "Add the people you trust to your Circle, and choose in Settings who can add you." },
          { h: "Stay in control", p: "Make your account private, block anyone in two taps, and report anything that breaks the rules. A blocked person can't see your pets or message you." },
          { h: "Share safely anywhere", p: "On any social app, avoid posting your pet's name with your street, or photos showing your house number. They help thieves and scammers target pets." },
          { h: "Find shelters near you", p: "Browse local shelters' listings in Discover to see pets that need adopting or fostering." },
        ],
        links: [
          { href: "/playdates", text: "Playdates" },
          { href: "/help-center/your-profile", text: "Your profile and privacy" },
          { href: "/resources/best-pet-social-media-apps", text: "Best pet social media apps" },
        ],
      }}
    />
  );
}

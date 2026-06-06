import ComingSoonPage from "../components/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Fostering App — Coming Soon | Hushku",
  description: "Hushku's Fostering platform is coming soon. Open your home temporarily and get matched with pets that need you most — dogs, cats, and small animals from verified shelters.",
  alternates: { canonical: "https://hushku.app/fostering" },
  openGraph: {
    title: "Pet Fostering App — Coming Soon | Hushku",
    description: "Open your home temporarily and get matched with pets that need you most. Coming soon to Hushku.",
    type: "website",
    url: "https://hushku.app/fostering",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Pet Fostering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Fostering App — Coming Soon | Hushku",
    description: "Foster a dog or cat from a verified shelter near you. Coming soon to Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function FosteringPage() {
  return (
    <ComingSoonPage
      icon="💖"
      feature="Fostering"
      tagline="Open your home. Change a life."
      description="Fostering saves lives. Hushku will match you with pets that need a temporary home based on your space, lifestyle, and experience — making fostering as easy as possible."
      phase="Phase 2"
      bullets={[
        "Smart matching based on your home size, lifestyle, and experience",
        "Direct connection with verified shelters and rescues near you",
        "Foster care guides and 24/7 community support",
        "Track your foster pet's health, milestones and adoption progress",
        "Seamless handoff to permanent adoption when the time is right",
        "Foster alumni community — stay connected with pets you've helped",
      ]}
    />
  );
}

import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";

const TITLE = "Find a Vet Near You: Coming Soon | Hushku";
const DESC = "Finding a trusted vet near you is planned for Hushku. It isn’t in the app yet. Join the waitlist to hear when it arrives.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/vets" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/vets" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function VetsPage() {
  return (
    <ComingSoonPage
      feature="Vets"
      tagline="A trusted vet, close by."
      description="Finding and contacting vets near you is on our roadmap. It isn’t in the app yet. In the meantime, keep your pet’s vet visits and vaccinations in the Health & care tools."
      bullets={[
        "Vets near you, with opening hours and distance",
        "Emergency and out-of-hours clinics marked clearly",
        "Your pet’s health records ready to share at the visit",
      ]}
    />
  );
}

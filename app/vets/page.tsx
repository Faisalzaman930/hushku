import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";

const TITLE = "Find a Vet Near You: Coming Soon";
const DESC = "Finding a trusted vet near you is planned for Hushku. It isn’t in the app yet. Join the waitlist to hear when it arrives.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/vets" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/vets", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
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
      guide={{
        title: "How to choose a vet today",
        intro: "Until vet search is in the app, these are the things worth checking before you register. Do it before you need one: in an emergency there's no time to compare.",
        items: [
          { h: "Find out who covers nights and weekends", p: "Many practices send out-of-hours calls to a separate emergency clinic. Ask which one, how far it is, and save its number in your phone." },
          { h: "Look for practice accreditation", p: "Voluntary schemes such as AAHA accreditation in the US or the RCVS Practice Standards Scheme in the UK mean the clinic has been inspected against set standards." },
          { h: "For cats, ask about cat-friendly care", p: "Cat Friendly Clinic accreditation (from the AAFP and ISFM) means separate waiting areas and handling that keeps cats calmer, which makes visits easier." },
          { h: "Ask about costs upfront", p: "Ask the price of a standard consultation, vaccinations and neutering, and whether they offer health plans or payment plans. Prices vary widely between practices." },
          { h: "Check the practice suits your pet", p: "Some vets see more of certain species or breeds. If your pet has a known breed condition, ask whether they're used to managing it." },
          { h: "Bring the records with you", p: "Take vaccination dates, past treatments and medications to the first visit. You can keep all of these in Hushku and show them on your phone." },
        ],
        links: [
          { href: "/health", text: "Health and care in Hushku" },
          { href: "/templates/pet-medical-history-template", text: "Free medical history template" },
          { href: "/tools/symptom-checker", text: "Symptom checker" },
        ],
      }}
    />
  );
}

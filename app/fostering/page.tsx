import type { Metadata } from "next";
import { BookOpen, ClipboardList, Home, LifeBuoy, MessageCircle, Send, Users } from "lucide-react";
import FeaturePage from "../components/FeaturePage";

const TITLE = "Pet Fostering App: Foster Dogs & Cats Near You | Hushku";
const DESC =
  "Find dogs and cats who need a temporary home near you. Foster listings from shelters, rescues and owners, with requests and chat in one free app for iPhone and Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: "pet fostering app, foster a dog near me, foster cats, become a foster carer, rescue foster",
  alternates: { canonical: "https://hushku.app/fostering" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/fostering" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function FosteringPage() {
  return (
    <FeaturePage
      tour={{ key: "adoption-fostering", guide: "/help-center/adoption-fostering" }}
      slug="fostering"
      eyebrow="Fostering"
      title="Open your home for a while."
      lead="Foster listings from shelters, rescues and owners appear in the Foster tab in Discover. Find a pet near you who needs a temporary home, send a request and plan the details in chat."
      included={[
        { label: "Foster tab in Discover", icon: Users },
        { label: "Listings near you", icon: Home },
        { label: "Foster requests", icon: Send },
        { label: "Chat with the lister", icon: MessageCircle },
      ]}
      screen="discover"
      screenCaption="Discover. Pets who need a foster home are in the Foster tab."
      howTitle="Temporary home, lasting difference."
      how={[
        { icon: Users, title: "Browse the Foster tab", body: "Dogs and cats near you who need somewhere to stay, with who is listing them." },
        { icon: ClipboardList, title: "Check it fits", body: "Listings describe the pet and what they need, so you can tell whether your home and routine suit them." },
        { icon: Send, title: "Send a request", body: "Offer to foster with one tap. You can cancel until the lister answers." },
        { icon: MessageCircle, title: "Plan the details", body: "When they accept, a chat opens for dates, supplies, vet care and handover." },
      ]}
      faqs={[
        { q: "Can I sign up to foster on the website?", a: "No. Foster listings and requests live in the Hushku app for iPhone and Android, coming soon to the App Store and Google Play." },
        { q: "How long does fostering last?", a: "That depends on the listing. Some pets need a few days, others a few months. The lister will tell you in chat." },
        { q: "Do I need experience?", a: "Not always. Many pets just need a calm, safe home. Each listing says what the pet needs, so you can choose one that suits you." },
        { q: "Is it free?", a: "Hushku is free. Shelters and rescues usually cover a foster pet’s food and vet costs; ask them about it in chat." },
        { q: "Can shelters post foster listings?", a: "Yes. Shelter accounts can post foster listings alongside adoption listings, for free." },
      ]}
      related={[
        { title: "The foster carer’s manual", href: "/resources/logistics-and-heartbreak-foster-parent-manual", icon: BookOpen },
        { title: "Introducing a new pet to resident pets", href: "/resources/how-to-introduce-new-pet-to-resident-pets", icon: BookOpen },
        { title: "Adoption and fostering help", href: "/help-center/adoption-fostering", icon: LifeBuoy },
      ]}
    />
  );
}

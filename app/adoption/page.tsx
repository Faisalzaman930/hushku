import type { Metadata } from "next";
import { BookOpen, Home, LifeBuoy, MessageCircle, Send, ShieldCheck, Sparkles } from "lucide-react";
import FeaturePage from "../components/FeaturePage";

const TITLE = "Pet Adoption App: Adopt Dogs & Cats Near You | Hushku";
const DESC =
  "Browse dogs and cats waiting for a home near you, from shelters, rescues and owners. Send an adoption request from their profile and talk it through in chat. Free on iPhone and Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: "pet adoption app, adopt a dog near me, adopt a cat near me, rescue dogs for adoption, shelter pets",
  alternates: { canonical: "https://hushku.app/adoption" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/adoption" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function AdoptionPage() {
  return (
    <FeaturePage
      tour={{ key: "adoption-fostering", guide: "/help-center/adoption-fostering" }}
      slug="adoption"
      eyebrow="Adoption"
      title="Find the one who’s looking for you."
      lead="Browse dogs and cats waiting for a home near you, from shelters, rescues and owners rehoming a pet. Send an adoption request from their profile, then talk it through in chat."
      included={[
        { label: "Adopt tab in Discover", icon: Home },
        { label: "Shelters, rescues and owners", icon: ShieldCheck },
        { label: "Adoption requests", icon: Send },
        { label: "Chat with the lister", icon: MessageCircle },
      ]}
      screen="discover"
      screenCaption="Discover. Pets looking for a home are in the Adopt tab."
      howTitle="A calmer way to adopt."
      how={[
        { icon: Home, title: "Browse the Adopt tab", body: "Pets available for adoption near you, with photos, age, temperament and how far away they are." },
        { icon: Sparkles, title: "Read their story", body: "Each listing tells you about the pet and who is listing them, so you know who you’ll be talking to." },
        { icon: Send, title: "Send a request", body: "Ask about a pet with one tap. You can cancel your request until the lister answers." },
        { icon: MessageCircle, title: "Talk it through", body: "When the lister accepts, a chat opens to arrange a meeting and the next steps." },
      ]}
      faqs={[
        { q: "Can I adopt through the website?", a: "No. Adoption listings and requests are in the Hushku app for iPhone and Android, which is coming soon to the App Store and Google Play." },
        { q: "Does Hushku charge an adoption fee?", a: "No. Hushku is free and never charges you to adopt. Shelters and rescues may have their own adoption fees, which they’ll explain in chat." },
        { q: "Who lists pets for adoption?", a: "Shelters and rescues with shelter accounts, and individual owners who need to rehome a pet." },
        { q: "What happens after I send a request?", a: "The lister sees it and can accept. If they do, a private chat opens between you. Nothing is agreed until you both are happy." },
        { q: "I’m a shelter. Can I list our animals?", a: "Yes. Create a shelter account in the app and post adoption and foster listings for free." },
      ]}
      related={[
        { title: "Adopting a rescue dog: the complete guide", href: "/resources/adopting-rescue-dog-complete-guide", icon: BookOpen },
        { title: "The 3-3-3 rule for rescue dogs", href: "/resources/3-3-3-rule-for-rescue-dogs", icon: BookOpen },
        { title: "Adoption and fostering help", href: "/help-center/adoption-fostering", icon: LifeBuoy },
      ]}
    />
  );
}

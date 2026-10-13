import type { Metadata } from "next";
import { BookOpen, Camera, CheckCircle2, Clock, LifeBuoy, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import FeaturePage from "../components/FeaturePage";

const TITLE = "Lost & Found Pets Near You: Lost Dog & Cat Alerts | Hushku";
const DESC =
  "See lost, found and rescue reports near you, with photos and when and roughly where each pet was last seen. Post a report in a minute and neighbours can reach you in the app. Free.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: "lost dog app, lost cat near me, found dog near me, lost pet alert, report a lost pet, missing pet",
  alternates: { canonical: "https://hushku.app/lost-and-found" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/lost-and-found" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function LostAndFoundPage() {
  return (
    <FeaturePage
      tour={{ key: "lost-and-found", guide: "/help-center/lost-and-found" }}
      slug="lost-and-found"
      eyebrow="Lost & found"
      title="Lost, then found."
      lead="The Alerts tab shows lost, found and rescue reports near you, with photos and when and roughly where each pet was last seen. Post a report in a minute, and people nearby can reach you in the app."
      included={[
        { label: "Lost, Found and Rescue", icon: MapPin },
        { label: "Photos and last-seen time", icon: Camera },
        { label: "Approximate area, never your address", icon: ShieldCheck },
        { label: "Contact in the app", icon: MessageCircle },
      ]}
      screen="alerts"
      screenCaption="Alerts. Luna, a Ragdoll, last seen two hours ago."
      howTitle="Every neighbour, a pair of eyes."
      how={[
        { icon: Camera, title: "Post a report", body: "Add photos, their name and breed, when and where they were last seen, and a reward if you want to offer one." },
        { icon: MapPin, title: "Seen nearby", body: "Your report appears in the Alerts tab for people around the area where your pet went missing." },
        { icon: MessageCircle, title: "Hear from neighbours", body: "Anyone who has seen your pet can get in touch with you in the app." },
        { icon: CheckCircle2, title: "Found a pet?", body: "Post them in Found, or in Rescue if an animal needs help, so their family can find them." },
      ]}
      faqs={[
        { q: "Can I report a lost pet on the website?", a: "Not yet. Reports are posted and seen in the Hushku app for iPhone and Android, coming soon to the App Store and Google Play. Until then, contact local shelters, vets and microchip databases straight away." },
        { q: "Does my report show my address?", a: "No. Reports show an approximate area, never the exact spot or your home address." },
        { q: "What’s the difference between Lost, Found and Rescue?", a: "Lost is for your own missing pet. Found is for a pet you’ve found or seen. Rescue is for an animal that needs help." },
        { q: "Is it free?", a: "Yes. Posting and viewing reports is free." },
        { q: "What should I do in the first hour?", a: "Search close to home and call their name calmly, tell neighbours, contact local shelters and vets, and check the microchip details are up to date." },
      ]}
      related={[
        { title: "The best lost pet recovery apps", href: "/resources/best-lost-pet-recovery-apps", icon: BookOpen },
        { title: "Pet first aid: the complete guide", href: "/resources/pet-first-aid-complete-guide", icon: BookOpen },
        { title: "Lost and found help", href: "/help-center/lost-and-found", icon: LifeBuoy },
      ]}
    />
  );
}

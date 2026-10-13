import type { Metadata } from "next";
import { BookOpen, Building2, HeartHandshake, Home, LifeBuoy, MapPin, MessageCircle, Users } from "lucide-react";
import FeaturePage from "../components/FeaturePage";

const TITLE = "Animal Shelters & Rescues Near You | Hushku";
const DESC =
  "Find animal shelters and rescues near you, see the dogs and cats they have for adoption and fostering, and get in touch in the app. Free for owners and for shelters.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: "animal shelters near me, dog rescue near me, cat rescue near me, shelter app, rescue organisations",
  alternates: { canonical: "https://hushku.app/shelters" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/shelters" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SheltersPage() {
  return (
    <FeaturePage
      tour={{ key: "shelters", guide: "/help-center/shelters" }}
      slug="shelters"
      eyebrow="Shelters & rescues"
      title="Every rescue near you, in one place."
      lead="Shelters and rescues have their own Hushku profiles, with their animals for adoption and fostering and the services they offer. Find them in the Shelters tab in Discover."
      included={[
        { label: "Shelters tab in Discover", icon: Building2 },
        { label: "Adoption and foster listings", icon: Home },
        { label: "Services offered", icon: HeartHandshake },
        { label: "Get in touch in the app", icon: MessageCircle },
      ]}
      screen="discover"
      screenCaption="Discover. Shelters and rescues near you are in the Shelters tab."
      howTitle="Owners find you. You find homes."
      how={[
        { icon: MapPin, title: "Find shelters nearby", body: "The Shelters tab lists the rescues and shelters around you." },
        { icon: Home, title: "See their animals", body: "A shelter’s profile shows its adoption and foster listings in one place." },
        { icon: MessageCircle, title: "Ask, adopt or foster", body: "Send a request about a pet and talk it through with the shelter in chat." },
        { icon: Users, title: "For shelters", body: "Create a free shelter account, describe what you offer and post listings for adoption and fostering." },
      ]}
      faqs={[
        { q: "Can I browse shelters on the website?", a: "Not yet. Shelters and their animals are in the Hushku app for iPhone and Android, coming soon to the App Store and Google Play." },
        { q: "We’re a shelter. How do we join?", a: "Choose the shelter account when you sign up in the app. Your profile lists your animals and the services you offer, rather than a personal pet." },
        { q: "Does it cost shelters anything?", a: "No. Hushku is free for shelters and rescues, with no listing fees." },
        { q: "Can we post foster listings as well as adoption?", a: "Yes. Shelter accounts can post both, and people reach you through requests and chat." },
        { q: "Want to partner with us before launch?", a: "Email hello@hushku.app. We’re talking to shelters and rescues now and would love to hear what you need." },
      ]}
      related={[
        { title: "Adopting a rescue dog: the complete guide", href: "/resources/adopting-rescue-dog-complete-guide", icon: BookOpen },
        { title: "The foster carer’s manual", href: "/resources/logistics-and-heartbreak-foster-parent-manual", icon: BookOpen },
        { title: "Shelters help", href: "/help-center/shelters", icon: LifeBuoy },
      ]}
    />
  );
}

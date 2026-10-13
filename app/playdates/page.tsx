import type { Metadata } from "next";
import { BookOpen, Footprints, Heart, LifeBuoy, MapPin, MessageCircle, SlidersHorizontal } from "lucide-react";
import FeaturePage from "../components/FeaturePage";

const TITLE = "Dog & Cat Playdate App: Meet Pets Nearby";
const DESC =
  "Find dogs and cats nearby for playdates and walks. Filter by distance and what they’re looking for, send an invite, and chat when it’s accepted.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: "dog playdate app, find dog playdates near me, cat playdates, dog walking buddy, pet playdate app, puppy playdates",
  alternates: { canonical: "https://hushku.app/playdates" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/playdates", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function PlaydatesPage() {
  return (
    <FeaturePage
      tour={{ key: "playdate-matching", guide: "/help-center/playdate-matching" }}
      slug="playdates"
      eyebrow="Playdates"
      title="Meet their match."
      lead="Hushku shows you dogs and cats nearby who are looking for a playdate or a walk buddy. Send an invite from their profile. When the owner says yes, a chat opens."
      included={[
        { label: "Pets near you", icon: MapPin },
        { label: "Distance, species and purpose filters", icon: SlidersHorizontal },
        { label: "Playdate and walk invites", icon: Heart },
        { label: "Chat once accepted", icon: MessageCircle },
      ]}
      screen="pet-profile"
      screenCaption="Bruno’s profile, with a playdate invite one tap away."
      howTitle="Nearby, and by invitation."
      how={[
        { icon: MapPin, title: "See who’s nearby", body: "Discover shows pets in your area with how far away they are, their breed, age and personality traits." },
        { icon: SlidersHorizontal, title: "Filter what you see", body: "Choose a distance, dogs or cats, and what owners are looking for: a walk, a playdate, mating or adoption." },
        { icon: Footprints, title: "Send an invite", body: "From a pet’s profile, send a playdate or walk invite. You can cancel it until the owner answers." },
        { icon: MessageCircle, title: "Plan it in chat", body: "When the owner accepts, a private chat opens so you can agree on a time and a place." },
      ]}
      stepsTitle="From profile to park."
      steps={[
        { title: "Make your pet’s profile", body: "Photos, breed, age, a short bio, up to five traits and what you’re looking for." },
        { title: "Find a good match", body: "Browse nearby pets, read their profile and check the owner before you invite." },
        { title: "Meet somewhere public", body: "Agree the details in chat, start on lead and keep the first meeting short." },
      ]}
      faqs={[
        { q: "Can I find playdates on the website?", a: "No. Playdates happen in the Hushku app for iPhone and Android. The app is built and coming soon to the App Store and Google Play; join the waitlist and we’ll email you on launch day." },
        { q: "Is Hushku free?", a: "Yes. Hushku is free, with no subscription." },
        { q: "Does it work for cats?", a: "Yes. Cats have profiles just like dogs, and you can set Discover to show only cats." },
        { q: "Can other people see where I live?", a: "No. Other owners see your general area and an approximate distance, never your address. Locations are rounded to about a kilometre." },
        { q: "What if someone makes me uncomfortable?", a: "Block or report them from their profile or your chat. People you block can’t message you or see your pets." },
        { q: "How do I keep a first meeting relaxed?", a: "Meet on neutral ground, keep both pets on lead at first, watch their body language and end on a good note. Short and positive beats long and tiring." },
      ]}
      related={[
        { title: "How to read dog body language", href: "/resources/how-to-read-dog-body-language", icon: BookOpen },
        { title: "Is my dog playing or being aggressive?", href: "/resources/is-my-dog-playing-or-being-aggressive", icon: BookOpen },
        { title: "Playdate help", href: "/help-center/playdate-matching", icon: LifeBuoy },
      ]}
    />
  );
}

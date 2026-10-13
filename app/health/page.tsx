import type { Metadata } from "next";
import { Bell, CalendarDays, ClipboardList, FileHeart, Flower2, LifeBuoy, Scale, ShieldCheck, Users } from "lucide-react";
import FeaturePage from "../components/FeaturePage";

const TITLE = "Pet Health & Care App: Reminders, Weight & Records | Hushku";
const DESC =
  "Your pet’s day in one place: care reminders, a quick log of meals and walks, weight tracking, health records, flea and tick treatments and heat cycles, shared with a care team. Free.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: "pet health app, pet care reminders, dog weight tracker, pet health records, flea and tick reminder, dog heat cycle tracker",
  alternates: { canonical: "https://hushku.app/health" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/health" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function HealthPage() {
  return (
    <FeaturePage
      slug="health"
      eyebrow="Health & care"
      title="Their whole health, in your pocket."
      lead="Hushku’s Home tab is your pet’s day: reminders, a quick log of meals and walks, weight, health records, flea and tick treatments and heat cycles. Share it with a care team so everyone knows what’s been done."
      included={[
        { label: "Reminders", icon: Bell },
        { label: "Quick log", icon: ClipboardList },
        { label: "Weight tracker", icon: Scale },
        { label: "Health records", icon: FileHeart },
        { label: "Flea & tick", icon: ShieldCheck },
        { label: "Heat cycles", icon: Flower2 },
        { label: "Care team", icon: Users },
      ]}
      screen="home"
      screenCaption="Home. Bella’s care team, today’s care and what’s coming up."
      howTitle="One place for everyone who cares."
      how={[
        { icon: ClipboardList, title: "Today’s care", body: "A checklist of walks, meals and medication. Tick things off and see who did them: “Done by Sarah”." },
        { icon: CalendarDays, title: "What’s coming up", body: "Vaccinations, vet visits and treatments due soon, with the date and time." },
        { icon: FileHeart, title: "Records that travel", body: "Vaccinations, vet visits and medication in one place, ready for your next appointment." },
        { icon: Users, title: "A care team", body: "Invite family or a sitter as a caregiver or viewer, and send a gentle reminder when something’s due." },
      ]}
      faqs={[
        { q: "Can I use the care tools on the website?", a: "No. Reminders, logs and records live in the Hushku app for iPhone and Android, coming soon to the App Store and Google Play. Our free web tools, like the pet age calculator, work in the browser." },
        { q: "Can more than one person look after the same pet?", a: "Yes. Invite people to your pet’s care team as a caregiver, who can log care, or a viewer, who can see it." },
        { q: "I have more than one pet.", a: "Add them all and switch between them at the top of the Home tab." },
        { q: "Does Hushku give medical advice?", a: "No. Hushku keeps your pet’s records and reminders organised. Always ask your vet about your pet’s health." },
        { q: "Is it free?", a: "Yes. Every health and care feature is free." },
      ]}
      related={[
        { title: "Weight tracker", href: "/health/weight-tracker", icon: Scale },
        { title: "Health records", href: "/health/records", icon: FileHeart },
        { title: "Care reminders", href: "/health/reminders", icon: Bell },
        { title: "Flea & tick", href: "/health/flea-tick", icon: ShieldCheck },
        { title: "Heat cycles", href: "/health/heat-cycle", icon: Flower2 },
        { title: "Health and care help", href: "/help-center/health-care", icon: LifeBuoy },
      ]}
    />
  );
}

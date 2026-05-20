import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";
import FaqAccordion from "../../components/FaqAccordion";
import ContactSection from "../../components/ContactSection";
import PhoneFrame from "../../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Care Reminders App | Medication, Vaccination & Vet Appointment Reminders — Hushku",
  description: "Never miss a pet care task. Set recurring reminders for walks, feeding, medication, vaccinations, vet appointments, and more. Push notifications straight to your phone. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/health/reminders" },
  openGraph: {
    title: "Pet Care Reminders App | Medication, Vaccination & Vet Appointment Reminders — Hushku",
    description: "Never miss a pet care task. Set recurring reminders for walks, feeding, medication, vaccinations, vet appointments, and more. Push notifications straight to your phone. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health/reminders",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Pet Care Reminders App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Care Reminders App | Medication, Vaccination & Vet Appointment Reminders — Hushku",
    description: "Never miss a pet care task. Set recurring reminders for walks, feeding, medication, vaccinations, vet appointments, and more. Push notifications straight to your phone. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

const benefits = [
  {
    icon: "🔔",
    title: "Push Notification Reminders",
    desc: "Reminders are delivered as push notifications directly to your phone. No need to open the app. Tap the notification to log the task as complete instantly.",
  },
  {
    icon: "🔁",
    title: "Flexible Repeat Options",
    desc: "Set reminders to repeat daily, weekly, monthly, or on a custom schedule. A weekly flea treatment, monthly weigh-in, or annual vaccination — all handled.",
  },
  {
    icon: "📅",
    title: "Full Care Calendar",
    desc: "View all upcoming care tasks in a calendar view. See what's due today, this week, and this month across all your pets in one place.",
  },
  {
    icon: "🏥",
    title: "All Care Types Covered",
    desc: "Reminders support: walks, feeding, water, medication, vaccinations, vet appointments, flea & tick treatments, grooming, and custom care tasks.",
  },
];

const howItWorks = [
  { num: "01", title: "Create a Reminder", desc: "Choose the care type, add a name, set the time and date, and pick a repeat schedule. Takes under a minute." },
  { num: "02", title: "Get Notified on Time", desc: "Hushku delivers the reminder as a push notification at the exact time you set — even if the app is closed." },
  { num: "03", title: "Log It as Done", desc: "Tap the notification to mark the task complete. It's logged in your pet's care history automatically." },
];

const faqs = [
  { q: "What types of reminders can I set?", a: "Walk, feeding, water, medication, vaccination, vet appointment, flea & tick treatment, and a custom type for anything else. Each reminder can have a name, time, date, and repeat schedule." },
  { q: "Will I get notified even if the app is closed?", a: "Yes. Care reminders are delivered as system push notifications. As long as you've granted Hushku notification permission, reminders arrive even when the app is in the background or closed." },
  { q: "Can I set reminders for multiple pets?", a: "Yes. Each reminder is linked to a specific pet. You'll see which pet the reminder is for in the notification and in your care calendar." },
  { q: "Are reminders free to use?", a: "Yes. All care reminders are free. No subscription required." },
];

const relatedLinks = [
  { href: "/health/daily-care", icon: "🍽️", title: "Daily Care Tracker" },
  { href: "/health/flea-tick", icon: "🦟", title: "Flea & Tick Tracker" },
  { href: "/health", icon: "🏥", title: "All Health Features" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pet Care Reminders App — Hushku",
  "description": "Never miss a pet care task. Set recurring reminders for walks, feeding, medication, vaccinations, vet appointments, and more.",
  "url": "https://hushku.app/health/reminders",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export default function RemindersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-emerald-50 py-20 lg:py-32">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  🔔 Care Reminders
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Never Miss a<br /><span className="text-emerald-600">Care Task.</span><br />Again.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Set recurring reminders for walks, feeding, medication, vaccinations, and vet appointments. Push notifications straight to your phone — no app needed.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "Push", l: "Notifications" }, { v: "Custom", l: "Schedules" }, { v: "Free", l: "To Use" }].map(s => (
                    <div key={s.v} className="bg-white border border-emerald-100 rounded-2xl px-5 py-3 text-center shadow-sm">
                      <p className="text-lg font-black text-ebony">{s.v}</p>
                      <p className="text-[10px] font-bold text-slate-gray uppercase tracking-widest mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
                <DownloadButtons />
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[260px]" style={{ animation: "float-a 3.5s ease-in-out infinite" }}>
                  <PhoneFrame src="/screenshots/app-playdates.png" alt="Hushku Pet Care Reminders" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Why Use Care Reminders</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Your Pet's Schedule. On Autopilot.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 bg-emerald-100 rounded-[1.5rem] flex items-center justify-center text-2xl mb-6">{b.icon}</div>
                  <h3 className="font-black text-ebony text-lg uppercase tracking-tight mb-3">{b.title}</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">The Process</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Set. Notify. Log.</h2>
            </div>
            <div className="space-y-6">
              {howItWorks.map((step, i) => (
                <div key={i} className="flex gap-6 items-start bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-gradient rounded-2xl flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-lg">{step.num}</div>
                  <div>
                    <h3 className="font-black text-ebony text-xl uppercase tracking-tight mb-2">{step.title}</h3>
                    <p className="text-slate-gray leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqAccordion faqs={faqs} title="Care Reminder Questions Answered" />

        {/* RELATED */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-black text-ebony uppercase tracking-tight mb-8 text-center">More Health Features</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedLinks.map((r) => (
                <Link key={r.href} href={r.href} className="group bg-white rounded-[2rem] p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span className="text-[10px] font-black text-brand-start bg-brand-start/10 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Health Feature</span>
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <h3 className="font-black text-ebony leading-snug group-hover:text-emerald-600 transition-colors">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DARK CTA */}
        <section className="py-24 bg-ebony">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-4">Free to Download</p>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Your Pet's Care Schedule. On Autopilot.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Push notifications for every care task. Free on iOS and Android.</p>
            <DownloadButtons light center />
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

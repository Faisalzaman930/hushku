import Link from "next/link";
import DownloadButtons from "../components/DownloadButtons";
import FaqAccordion from "../components/FaqAccordion";
import ContactSection from "../components/ContactSection";
import PhoneFrame from "../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Health & Care Tracker App | Vaccinations, Weight, Reminders & More — Hushku",
  description: "Track your pet's health from one place. Hushku's Health & Care suite includes daily care logs, weight tracker, vaccination records, vet visit history, flea & tick reminders, heat cycle tracker, and more. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/health" },
  openGraph: {
    title: "Pet Health & Care Tracker App | Vaccinations, Weight, Reminders & More — Hushku",
    description: "Track your pet's health from one place. Hushku's Health & Care suite includes daily care logs, weight tracker, vaccination records, vet visit history, flea & tick reminders, heat cycle tracker, and more. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health",
    images: [{ url: "https://hushku.app/screenshots/app-health.png", width: 1200, height: 630, alt: "Hushku Pet Health & Care App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Health & Care Tracker App | Vaccinations, Weight, Reminders & More — Hushku",
    description: "Track your pet's health from one place. Hushku's Health & Care suite includes daily care logs, weight tracker, vaccination records, vet visit history, flea & tick reminders, heat cycle tracker, and more. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-health.png"],
  },
};

const features = [
  {
    icon: "🍽️",
    title: "Daily Care Tracker",
    desc: "Log fed, watered, and poop every day. Track your pet's daily routine with a simple tap and see a progress bar for the day's care tasks.",
    href: "/health/daily-care",
  },
  {
    icon: "🔔",
    title: "Care Reminders",
    desc: "Set recurring reminders for walks, feeding, medication, vaccinations, and vet appointments. Get push notifications so nothing gets missed.",
    href: "/health/reminders",
  },
  {
    icon: "⚖️",
    title: "Weight Tracker",
    desc: "Log your pet's weight over time and visualise the trend. Spot changes early. Share the history with your vet in seconds.",
    href: "/health/weight-tracker",
  },
  {
    icon: "📋",
    title: "Health Records",
    desc: "Upload and store vaccination certificates, vet visit summaries, medication logs, and lab reports. All in one digital health wallet.",
    href: "/health/records",
  },
  {
    icon: "🦟",
    title: "Flea & Tick Tracker",
    desc: "Log flea and tick treatment dates and set reminders for the next dose. Never miss a treatment window again.",
    href: "/health/flea-tick",
  },
  {
    icon: "🌡️",
    title: "Heat Cycle Tracker",
    desc: "Track heat cycles for female pets. Log cycle dates, predict the next one, and keep a full history for your vet.",
    href: "/health/heat-cycle",
  },
];

const howItWorks = [
  { num: "01", title: "Build Your Pet's Health Profile", desc: "Add your pet's species, breed, age, and weight. Hushku uses this to personalise your care reminders and health tracking ranges." },
  { num: "02", title: "Log Daily & Track Over Time", desc: "Use the Today Dashboard to tick off fed, watered, and poop. Add weight entries, treatments, and health events whenever they happen." },
  { num: "03", title: "Access Records Anytime", desc: "Every log, record, and reminder is stored securely and accessible from any device. Share your pet's full health history with your vet in one tap." },
];

const faqs = [
  { q: "Is the health data stored on my device or in the cloud?", a: "Health logs and care records are securely stored in your Hushku account via Supabase. You can access them from any device you're logged into. Uploaded files like vaccination certificates are stored in our cloud storage." },
  { q: "Can I use the health features for cats and other pets?", a: "Yes. All health and care features support dogs, cats, and other pets. Species-specific features like heat cycle tracking are shown only for applicable pet types." },
  { q: "Is there a cost to use the health features?", a: "All core health and care tracking features are free. No subscription required to log daily care, track weight, store health records, or set reminders." },
  { q: "Can I share health records with my vet?", a: "Yes. From the Health Records screen, you can export or share your pet's complete health history. This includes vaccination records, vet visit summaries, medication logs, and uploaded documents." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pet Health & Care Tracker App — Hushku",
  "description": "Track your pet's health from one place. Hushku's Health & Care suite includes daily care logs, weight tracker, vaccination records, vet visit history, flea & tick reminders, heat cycle tracker, and more.",
  "url": "https://hushku.app/health",
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

export default function HealthPage() {
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
                  🏥 Health & Care Suite
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Your Pet's Health.<br /><span className="text-emerald-600">Tracked.</span><br />All in One Place.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  From daily fed &amp; watered logs to vaccination records and heat cycle tracking — Hushku's Health &amp; Care suite keeps every detail about your pet's wellbeing in one place.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "7", l: "Health Trackers" }, { v: "Free", l: "To Use" }, { v: "All Pets", l: "Supported" }].map(s => (
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
                  <PhoneFrame src="/screenshots/app-health.png" alt="Hushku Pet Health & Care App" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Health & Care Features</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Everything Your Pet's Health Needs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Link key={f.title} href={f.href} className="group bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 bg-emerald-100 rounded-[1.5rem] flex items-center justify-center text-2xl mb-6">{f.icon}</div>
                  <h3 className="font-black text-ebony text-lg uppercase tracking-tight mb-3 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">{f.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">The Process</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Log. Track. Share.</h2>
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

        <FaqAccordion faqs={faqs} title="Health Feature Questions Answered" />

        {/* EXPLORE HEALTH FEATURES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-black text-ebony uppercase tracking-tight mb-8 text-center">Explore Health Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <Link key={f.href} href={f.href} className="group bg-white rounded-[2rem] p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span className="text-[10px] font-black text-brand-start bg-brand-start/10 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Health Feature</span>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-black text-ebony leading-snug group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DARK CTA */}
        <section className="py-24 bg-ebony">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-4">Free to Download</p>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Every Detail About Your Pet's Health.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Logs, records, reminders, and trackers — all free, all in one app.</p>
            <DownloadButtons light center />
          </div>
        </section>

        
        {/* ── HELP BANNER ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-brand-start/10 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">🩺</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">Getting Started with Health Tracking?</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Our complete guide covers daily care logs, reminders, weight tracker, health records, flea & tick, and heat cycle.</p>
                  <ul className="mt-4 space-y-1.5">
                    <li key="How to log daily care (fed, watered, poop)" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/health-care" className="hover:text-ebony hover:underline transition-colors">How to log daily care (fed, watered, poop)</Link></li>
                    <li key="How to set care reminders" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/health-care" className="hover:text-ebony hover:underline transition-colors">How to set care reminders</Link></li>
                    <li key="How to upload vaccination records" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/health-care" className="hover:text-ebony hover:underline transition-colors">How to upload vaccination records</Link></li>
                  </ul>
                </div>
              </div>
              <Link href="/help-center/health-care" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-7 py-4 rounded-[1.5rem] uppercase tracking-widest text-sm shadow-lg whitespace-nowrap">
                Read the Health & Care Guide →
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

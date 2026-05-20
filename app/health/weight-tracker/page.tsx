import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";
import FaqAccordion from "../../components/FaqAccordion";
import ContactSection from "../../components/ContactSection";
import PhoneFrame from "../../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Weight Tracker App | Log & Monitor Your Pet's Weight — Hushku",
  description: "Track your dog or cat's weight over time with Hushku. Log weight entries, view trends, and share the history with your vet. Supports kg and lbs. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/health/weight-tracker" },
  openGraph: {
    title: "Pet Weight Tracker App | Log & Monitor Your Pet's Weight — Hushku",
    description: "Track your dog or cat's weight over time with Hushku. Log weight entries, view trends, and share the history with your vet. Supports kg and lbs. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health/weight-tracker",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Pet Weight Tracker App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Weight Tracker App | Log & Monitor Your Pet's Weight — Hushku",
    description: "Track your dog or cat's weight over time with Hushku. Log weight entries, view trends, and share the history with your vet. Supports kg and lbs. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

const benefits = [
  {
    icon: "⚖️",
    title: "Quick Weight Logging",
    desc: "Add a weight entry in seconds. Choose kg or lbs, add a note (e.g. \"after grooming\", \"pre-surgery\"), and Hushku timestamps and saves it automatically.",
  },
  {
    icon: "📈",
    title: "Visual Weight Trend",
    desc: "See your pet's weight plotted over time. Spot gradual gain or loss that might otherwise go unnoticed. Useful context for vet appointments.",
  },
  {
    icon: "🏥",
    title: "Vet-Ready History",
    desc: "Your pet's complete weight history is always accessible. Share it with your vet at appointments or export it for specialist referrals.",
  },
  {
    icon: "🐾",
    title: "Works for All Pets",
    desc: "Track weight for dogs, cats, rabbits, or any other pet. Set a target weight range based on your vet's recommendation and see when entries fall outside it.",
  },
];

const howItWorks = [
  { num: "01", title: "Log a Weight Entry", desc: "Open your pet's Health section, tap Weight, and add a new entry. Choose your unit (kg or lbs), enter the weight, and optionally add a note." },
  { num: "02", title: "View the Trend", desc: "Hushku plots each entry on a visual chart. See whether your pet's weight is stable, increasing, or declining over weeks and months." },
  { num: "03", title: "Share with Your Vet", desc: "At any time, export or share your pet's full weight history directly from the app. Your vet gets the full picture in seconds." },
];

const faqs = [
  { q: "How often should I weigh my pet?", a: "For healthy adult pets, monthly weigh-ins are typically sufficient. For puppies and kittens, senior pets, or pets managing a health condition, your vet may recommend more frequent tracking. Hushku lets you set a reminder for whatever interval your vet recommends." },
  { q: "Can I set a target weight range?", a: "Yes. You can enter a target weight range (e.g., 8–10 kg) for each pet. Entries outside this range are highlighted so you can discuss them with your vet." },
  { q: "Does the weight tracker support both kg and lbs?", a: "Yes. You choose the unit when logging each entry, and can switch between them at any time." },
  { q: "Is the weight tracker free?", a: "Yes, completely free." },
];

const relatedLinks = [
  { href: "/health/records", icon: "📋", title: "Health Records" },
  { href: "/health/reminders", icon: "🔔", title: "Care Reminders" },
  { href: "/health", icon: "🏥", title: "All Health Features" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pet Weight Tracker App — Hushku",
  "description": "Track your dog or cat's weight over time with Hushku. Log weight entries, view trends, and share the history with your vet.",
  "url": "https://hushku.app/health/weight-tracker",
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

export default function WeightTrackerPage() {
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
                  ⚖️ Weight Tracker
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Track Their Weight.<br /><span className="text-emerald-600">Spot Changes</span><br />Early.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Log your pet's weight over time and visualise the trend. Spot gradual gain or loss before it becomes a problem. Share the history with your vet in seconds.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "kg & lbs", l: "Supported" }, { v: "Visual", l: "Trend Chart" }, { v: "Free", l: "To Use" }].map(s => (
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
                  <PhoneFrame src="/screenshots/app-playdates.png" alt="Hushku Pet Weight Tracker" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Why Track Weight</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Every Gram. Over Time.</h2>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Log. Trend. Share.</h2>
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

        <FaqAccordion faqs={faqs} title="Weight Tracker Questions Answered" />

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
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Every Gram. Logged. Over Time.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Track your pet's weight and share the history with your vet. Free on iOS and Android.</p>
            <DownloadButtons light center />
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

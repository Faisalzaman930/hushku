import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";
import FaqAccordion from "../../components/FaqAccordion";
import ContactSection from "../../components/ContactSection";
import PhoneFrame from "../../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Heat Cycle Tracker App | Track Your Dog or Cat's Season — Hushku",
  description: "Track your female pet's heat cycle with Hushku. Log cycle dates, predict the next season, and maintain a full history for your vet. For dogs, cats, and more. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/health/heat-cycle" },
  openGraph: {
    title: "Pet Heat Cycle Tracker App | Track Your Dog or Cat's Season — Hushku",
    description: "Track your female pet's heat cycle with Hushku. Log cycle dates, predict the next season, and maintain a full history for your vet. For dogs, cats, and more. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health/heat-cycle",
    images: [{ url: "https://hushku.app/screenshots/app-heat-cycle.png", width: 1200, height: 630, alt: "Hushku Pet Heat Cycle Tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Heat Cycle Tracker App | Track Your Dog or Cat's Season — Hushku",
    description: "Track your female pet's heat cycle with Hushku. Log cycle dates, predict the next season, and maintain a full history for your vet. For dogs, cats, and more. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-heat-cycle.png"],
  },
};

const benefits = [
  {
    icon: "🌡️",
    title: "Log Each Cycle",
    desc: "Record the start and end date of each heat cycle. Hushku calculates the length and adds it to your pet's cycle history.",
  },
  {
    icon: "📅",
    title: "Predict the Next Cycle",
    desc: "Based on your pet's cycle history, Hushku estimates when the next season is likely to begin. Useful for planning, travel, and vet consultations.",
  },
  {
    icon: "📋",
    title: "Full Cycle History",
    desc: "Every logged cycle is saved permanently. Your vet can use this history to assess reproductive health, advise on spaying timing, or investigate irregularities.",
  },
  {
    icon: "🐾",
    title: "For Dogs, Cats & More",
    desc: "Heat cycle tracking works for any female pet with a seasonal cycle. Each pet tracks independently with its own history.",
  },
];

const howItWorks = [
  { num: "01", title: "Log the Start Date", desc: "Go to your pet's Health section, tap Heat Cycle, and add a new entry with the start date. Hushku begins tracking the cycle immediately." },
  { num: "02", title: "Add the End Date", desc: "When the cycle ends, open the entry and add the end date. Hushku calculates the duration and saves it to your history." },
  { num: "03", title: "See the Prediction", desc: "After two or more cycles, Hushku estimates when the next season is likely to begin. The more cycles you log, the more accurate the estimate." },
];

const faqs = [
  { q: "How do I log a heat cycle?", a: "Go to your pet's Health section, tap Heat Cycle, and add a new entry with the start date. When the cycle ends, add the end date. Hushku calculates the duration and updates your history." },
  { q: "How accurate is the next-cycle prediction?", a: "Predictions are based on the average of your pet's logged cycle history. The more cycles you log, the more accurate the estimate. It's a guide, not a medical prediction — always consult your vet for reproductive health advice." },
  { q: "Is the heat cycle tracker only for dogs?", a: "No. It works for any female pet that experiences heat cycles — dogs, cats, rabbits, and others. Each pet has its own independent cycle tracker." },
  { q: "Is the heat cycle tracker free?", a: "Yes, completely free." },
];

const relatedLinks = [
  { href: "/health/records", icon: "📋", title: "Health Records" },
  { href: "/health/reminders", icon: "🔔", title: "Care Reminders" },
  { href: "/health", icon: "🏥", title: "All Health Features" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pet Heat Cycle Tracker App — Hushku",
  "description": "Track your female pet's heat cycle with Hushku. Log cycle dates, predict the next season, and maintain a full history for your vet.",
  "url": "https://hushku.app/health/heat-cycle",
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

export default function HeatCyclePage() {
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
                  🌡️ Heat Cycle Tracker
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Heat Cycle Tracker.<br /><span className="text-emerald-600">Tracked.</span><br />Predicted.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Log your female pet's heat cycles, predict the next season, and keep a full history your vet can use. For dogs, cats, and more.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "Cycle", l: "Prediction" }, { v: "Full", l: "History" }, { v: "Free", l: "To Use" }].map(s => (
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
                  <PhoneFrame src="/screenshots/app-heat-cycle.png" alt="Hushku Pet Heat Cycle Tracker" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">What You Can Track</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Every Season. Every Detail.</h2>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Log. Calculate. Predict.</h2>
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

        <FaqAccordion faqs={faqs} title="Heat Cycle Tracker Questions Answered" />

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
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Every Season. Logged. Predicted. Ready.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Track your pet's heat cycles and predict the next one. Free on iOS and Android.</p>
            <DownloadButtons light center />
          </div>
        </section>

        
        {/* ── HELP BANNER ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">🌡️</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">How to Track Your Pet's Heat Cycle</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Learn how to log a cycle, record symptoms, and read the next-cycle prediction.</p>
                </div>
              </div>
              <Link href="/help-center/health-care" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-7 py-4 rounded-[1.5rem] uppercase tracking-widest text-sm shadow-lg whitespace-nowrap">
                Read the Guide →
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

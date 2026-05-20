import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";
import FaqAccordion from "../../components/FaqAccordion";
import ContactSection from "../../components/ContactSection";
import PhoneFrame from "../../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flea & Tick Treatment Tracker | Never Miss a Treatment — Hushku",
  description: "Track flea and tick treatments for your dog or cat with Hushku. Log treatment dates, set reminders for the next dose, and keep a full treatment history. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/health/flea-tick" },
  openGraph: {
    title: "Flea & Tick Treatment Tracker | Never Miss a Treatment — Hushku",
    description: "Track flea and tick treatments for your dog or cat with Hushku. Log treatment dates, set reminders for the next dose, and keep a full treatment history. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health/flea-tick",
    images: [{ url: "https://hushku.app/screenshots/app-flea-tick.png", width: 1200, height: 630, alt: "Hushku Flea & Tick Treatment Tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flea & Tick Treatment Tracker | Never Miss a Treatment — Hushku",
    description: "Track flea and tick treatments for your dog or cat with Hushku. Log treatment dates, set reminders for the next dose, and keep a full treatment history. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-flea-tick.png"],
  },
};

const benefits = [
  {
    icon: "🦟",
    title: "Log Each Treatment",
    desc: "Record the treatment name (e.g., Frontline, Advocate, NexGard), date applied, and dosage. Hushku builds a full treatment history automatically.",
  },
  {
    icon: "📅",
    title: "Next-Dose Reminders",
    desc: "Set a reminder for when the next treatment is due. Most treatments are monthly — Hushku handles the countdown and notifies you on the day.",
  },
  {
    icon: "📋",
    title: "Full Treatment History",
    desc: "View a timeline of all past flea and tick treatments for each pet. Useful for vet appointments or if your pet has a reaction and you need to identify the product.",
  },
  {
    icon: "🐱",
    title: "Works for Dogs & Cats",
    desc: "Track flea and tick prevention for all pets. Different products, different schedules — Hushku tracks them separately per pet.",
  },
];

const howItWorks = [
  { num: "01", title: "Log the Treatment", desc: "Open your pet's Health section, go to Flea & Tick, and tap \"Add Treatment.\" Enter the product name, date applied, and next due date." },
  { num: "02", title: "Set the Next-Dose Reminder", desc: "Hushku prompts you to set a reminder for the next treatment date. Accept it and the countdown begins." },
  { num: "03", title: "Get Notified. Log Again.", desc: "When the due date arrives, you'll get a push notification. Log the new treatment with one tap and set the next reminder." },
];

const faqs = [
  { q: "How do I log a flea and tick treatment?", a: "Open your pet's Health section, go to Flea & Tick, and tap \"Add Treatment.\" Enter the product name, date applied, and next due date. Hushku saves the entry and optionally sets a reminder." },
  { q: "Can I set a reminder for the next treatment?", a: "Yes. When you log a treatment, you can set the next-due date and Hushku will send a push notification reminder on that day." },
  { q: "Does Hushku recommend specific flea treatments?", a: "No. Hushku is a tracking tool, not a medical service. Always consult your vet for advice on the right flea and tick prevention product for your pet." },
  { q: "Is flea & tick tracking free?", a: "Yes, completely free." },
];

const relatedLinks = [
  { href: "/health/reminders", icon: "🔔", title: "Care Reminders" },
  { href: "/health/records", icon: "📋", title: "Health Records" },
  { href: "/health", icon: "🏥", title: "All Health Features" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Flea & Tick Treatment Tracker — Hushku",
  "description": "Track flea and tick treatments for your dog or cat with Hushku. Log treatment dates, set reminders for the next dose, and keep a full treatment history.",
  "url": "https://hushku.app/health/flea-tick",
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

export default function FleaTickPage() {
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
                  🦟 Flea & Tick Tracker
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Flea &amp; Tick Treatment Tracker.<br /><span className="text-emerald-600">On</span><br />Schedule.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Log flea and tick treatment dates, set reminders for the next dose, and keep a full treatment history. Never miss a treatment window again.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "Auto", l: "Reminders" }, { v: "Full", l: "History" }, { v: "Free", l: "To Use" }].map(s => (
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
                  <PhoneFrame src="/screenshots/app-flea-tick.png" alt="Hushku Flea & Tick Tracker" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Why Track Treatments</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Never Skip a Dose. Ever.</h2>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Log. Remind. Repeat.</h2>
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

        <FaqAccordion faqs={faqs} title="Flea & Tick Tracker Questions Answered" />

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
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Never Miss a Treatment Window. Ever.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Log treatments, set reminders, and keep a full history. Free on iOS and Android.</p>
            <DownloadButtons light center />
          </div>
        </section>

        
        {/* ── HELP BANNER ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">🦟</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">How to Track Flea & Tick Treatments</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Learn how to log a treatment, set the repeat interval, and get reminded before the next dose is due.</p>
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

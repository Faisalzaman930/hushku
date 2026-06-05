import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";
import FaqAccordion from "../../components/FaqAccordion";
import ContactSection from "../../components/ContactSection";
import PhoneFrame from "../../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Pet Care Tracker | Log Dog & Cat Feeding, Water & Bowel Habits — Hushku",
  description: "Track your dog or cat's daily care with Hushku. One-tap logging for feeding, water intake, and bowel movements. Spot health changes early. Daily progress bar included. Free on iOS & Android.",
  keywords: "daily pet care tracker, dog feeding tracker, cat feeding log, pet water intake tracker, dog bowel movement log, pet care app, daily dog care, pet routine tracker",
  alternates: { canonical: "https://hushku.app/health/daily-care" },
  openGraph: {
    title: "Daily Pet Care Tracker | Log Dog & Cat Feeding, Water & Bowel Habits — Hushku",
    description: "One-tap logging for feeding, water intake, and bowel movements. Spot health changes early. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health/daily-care",
    images: [{ url: "https://hushku.app/screenshots/app-daily-care.png", width: 1200, height: 630, alt: "Hushku Daily Pet Care Tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Pet Care Tracker | Log Dog & Cat Feeding, Water & Bowel Habits — Hushku",
    description: "One-tap logging for feeding, water intake, and bowel movements. Spot health changes early. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-daily-care.png"],
  },
};

const benefits = [
  {
    icon: "🍽️",
    title: "One-Tap Fed Log",
    desc: "Tap \"Fed\" the moment you feed your pet. Hushku timestamps the entry and adds it to your pet's daily care log. No more trying to remember if you fed them at 6pm or 7pm.",
  },
  {
    icon: "💧",
    title: "Water Intake Tracking",
    desc: "Log every time your pet drinks or has fresh water added. Essential for pets with kidney conditions, UTIs, or post-surgery recovery where hydration matters.",
  },
  {
    icon: "💩",
    title: "Poop Log",
    desc: "Track bowel movements with a tap. Useful for monitoring digestive health, spotting irregularities, and giving your vet accurate information at appointments.",
  },
  {
    icon: "📊",
    title: "Daily Progress Bar",
    desc: "A visual progress indicator shows how many care tasks you've completed for the day. See fed, watered, and poop status at a glance on your Today Dashboard.",
  },
];

const howItWorks = [
  { num: "01", title: "Open Today Dashboard", desc: "Your Today Dashboard is the first screen you see when you open Hushku. All of your pet's daily care tasks are listed and ready to log." },
  { num: "02", title: "Tap to Log", desc: "Tap Fed, Watered, or Poop the moment it happens. Hushku records the time and date automatically." },
  { num: "03", title: "Track the Progress Bar", desc: "Watch the daily progress bar fill as you complete each care task. A full bar means your pet's day is covered." },
];

const faqs = [
  { q: "Why should I log my dog or cat's daily care?", a: "Daily care logs help you spot patterns and irregularities early — often before clinical symptoms develop. A missed meal, reduced water intake, or change in bowel habit frequency or consistency are frequently the first signs of conditions including gastrointestinal illness, dental pain, kidney disease, or diabetes. Veterinarians consistently report that owners who track daily habits can provide far more useful clinical history than those who estimate from memory. 'She seems to be eating less lately' is much less useful than 'she has eaten 60–70% of her usual portion for the past 5 days.'" },
  { q: "What does normal bowel movement frequency look like for dogs and cats?", a: "Most healthy adult dogs defecate 1–3 times per day, typically within 30 minutes of eating due to the gastrocolic reflex. Puppies and dogs on high-fibre diets may go more frequently. Adult cats typically defecate once per day. Fewer than once per day for more than 48–72 hours (constipation) or more than 4–5 times per day with loose consistency (diarrhoea) are both worth monitoring and discussing with your vet if persistent." },
  { q: "Does the daily care tracker reset each day?", a: "Yes. Each day starts fresh at midnight local time. All previous logs are saved in your history — you can review any past date to see exactly what was logged and when." },
  { q: "Can I log care for multiple pets?", a: "Yes. Each pet has its own Today Dashboard and independent care log. Switch between pets from the home screen to log care for each one separately. Households with multiple dogs, cats, or mixed species can track all of them from a single account." },
  { q: "Is the daily care tracker free?", a: "Yes, completely free. No subscription required." },
];

const relatedLinks = [
  { href: "/health/reminders", icon: "🔔", title: "Care Reminders" },
  { href: "/health/weight-tracker", icon: "⚖️", title: "Weight Tracker" },
  { href: "/health", icon: "🏥", title: "All Health Features" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Daily Pet Care Tracker — Hushku",
  "description": "Track your pet's daily care routine with Hushku. Log fed, watered, and poop with a single tap.",
  "url": "https://hushku.app/health/daily-care",
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

export default function DailyCarePage() {
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
                  🍽️ Daily Care Tracker
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Daily Pet Care Tracker.<br /><span className="text-emerald-600">Logged.</span><br />Done.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Log fed, watered, and poop with a single tap. A daily progress bar keeps you on top of your pet's routine — no guessing, no forgetting.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "1 Tap", l: "To Log" }, { v: "Daily", l: "Progress Bar" }, { v: "Free", l: "To Use" }].map(s => (
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
                  <PhoneFrame src="/screenshots/app-daily-care.png" alt="Hushku Daily Care Tracker" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Why Log Daily Care</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Know Their Day. Every Day.</h2>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Open. Tap. Done.</h2>
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

        <FaqAccordion faqs={faqs} title="Daily Care Tracker Questions Answered" />

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
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Every Fed. Every Sip. Every Time.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Log your pet's daily care in one tap. Free on iOS and Android.</p>
            <DownloadButtons light center />
          </div>
        </section>

        
        {/* ── HELP BANNER ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">🍽️</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">How Does the Daily Care Log Work?</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Learn exactly how to log fed, watered, and poop — and how the daily progress bar updates throughout the day.</p>
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

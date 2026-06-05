import Link from "next/link";
import DownloadButtons from "../components/DownloadButtons";
import FaqAccordion from "../components/FaqAccordion";
import ContactSection from "../components/ContactSection";
import PhoneFrame from "../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost & Found Pets App | Report a Missing Dog or Cat & Alert Your Neighbourhood — Hushku",
  description: "Lost your dog or cat? Report it on Hushku and instantly alert everyone within your chosen radius. 1 in 3 pets will be lost in their lifetime — recovery rates drop dramatically after the first 2 hours. Free on iOS & Android.",
  keywords: "lost pet app, found pet app, report lost dog, report lost cat, missing pet alert, lost dog near me, found dog near me, pet recovery app, lost pet notification, community pet alerts",
  alternates: { canonical: "https://hushku.app/lost-and-found" },
  openGraph: {
    title: "Lost & Found Pets App | Report a Missing Dog or Cat — Hushku",
    description: "Report a lost or found pet and instantly alert your neighbourhood. Community-powered GPS alerts. 1 in 3 pets are lost in their lifetime — the first 2 hours are critical.",
    type: "website",
    url: "https://hushku.app/lost-and-found",
    images: [{ url: "https://hushku.app/screenshots/app-lost-found.png", width: 1200, height: 630, alt: "Hushku Lost & Found Pets App — instant community alerts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost & Found Pets App | Report a Missing Dog or Cat — Hushku",
    description: "Report a lost or found pet and instantly alert your neighbourhood. Community-powered GPS alerts. 1 in 3 pets are lost in their lifetime — the first 2 hours are critical.",
    images: ["https://hushku.app/screenshots/app-lost-found.png"],
  },
};

const benefits = [
  {
    icon: "📢",
    title: "Instant Community Alerts",
    desc: "The moment you report a missing pet, Hushku notifies all users within your chosen radius. No social media posts to manage. No lost posters to print. Your community is alerted in seconds.",
  },
  {
    icon: "📍",
    title: "Location-Based Notifications",
    desc: "Lost pet alerts are targeted by GPS radius. Only owners and pet lovers in the relevant area are notified — keeping alerts relevant and actionable, not spam.",
  },
  {
    icon: "📸",
    title: "Detailed Pet Reports",
    desc: "Submit a full lost or found report with photos, last known location, physical description, microchip number, and your contact preferences. Found pet reports are matched against active missing reports automatically.",
  },
  {
    icon: "✅",
    title: "Mark as Found",
    desc: "When your pet is home safe, mark the report as resolved with one tap. Your community is notified, the alert is closed, and the report is archived for 90 days before deletion.",
  },
];

const howItWorks = [
  { num: "01", title: "Report Your Missing Pet", desc: "Open the Lost & Found tab and tap \"Report Lost Pet.\" Add photos, description, last known location, and the search radius. Takes under 2 minutes." },
  { num: "02", title: "Community Gets Alerted", desc: "Everyone within your chosen radius receives a push notification instantly. They can view the full report, share it, or message you directly if they spot your pet." },
  { num: "03", title: "Submit a Found Pet Report", desc: "Found a stray? Report it in the app. Hushku automatically checks it against active missing reports in the area and notifies the owner if there's a match." },
  { num: "04", title: "Mark as Resolved", desc: "When your pet is found, close the report with one tap. The community is informed, and your listing is removed from active alerts." },
];

const faqs = [
  { q: "How quickly do lost pet alerts go out?", a: "Instantly. The moment you submit a lost pet report and hit publish, Hushku sends push notifications to all users within your chosen radius. There is no moderation delay — the alert goes live immediately. Recovery rates for lost pets drop dramatically after the first two hours, which is why instant alerting is the most important feature in any lost pet tool." },
  { q: "How far do lost pet alerts reach?", a: "You choose the radius when you submit your report — options range from 1 km to 25 km. You can expand the radius if the initial search doesn't produce results. Alerts only reach users whose GPS location overlaps with your chosen search area, keeping alerts relevant rather than spam. For a dog who has bolted on a walk, start with 3–5 km. For a cat who has gone missing from home, 1–2 km is usually appropriate — most lost cats are found within 400 metres of their home." },
  { q: "What should I do immediately when my dog or cat goes missing?", a: "Act in the first two hours: (1) report immediately on Hushku to trigger neighbourhood alerts; (2) check inside your home thoroughly — cats especially hide in tiny spaces when frightened; (3) walk the immediate area calling their name calmly (avoid panicked shouting, which can cause fearful animals to hide); (4) contact your local council's dog warden and all nearby veterinary clinics in case your pet is brought in; (5) check local Facebook community groups; (6) if microchipped, contact the microchip database to flag your pet as missing. A microchip dramatically increases the chance of reunification — in the UK, microchipping has been legally required for dogs since 2016." },
  { q: "What happens if someone finds my pet?", a: "Anyone who finds a pet can submit a Found Pet report in the app. Hushku automatically cross-references it against active missing reports by location and species and notifies you if there is a match. You can then contact the finder directly through in-app encrypted messaging — without sharing your personal phone number." },
  { q: "Is my contact information shared publicly?", a: "Only the details you choose to include in your report are visible. You can opt to receive all contact via in-app messaging only, meaning other users can reach you without you ever sharing a phone number or email address publicly." },
  { q: "What information should I include in a lost pet report?", a: "The more detail, the faster the resolution. Include: clear recent photos from multiple angles, your pet's species and breed, age, sex, and whether desexed, distinctive markings or features (unusual colouring, scars, collar colour), microchip number if known, the last-seen location and time, and any context (escaped through a fence, bolted from a car, slipped collar). If your pet has a medical condition requiring regular medication — such as diabetes requiring insulin or epilepsy requiring phenobarbitone — include this so any finder knows urgency." },
  { q: "How long do reports stay active?", a: "Active lost pet reports stay live until you mark them as found or manually close them. Found pet reports are automatically archived 90 days after the pet is marked as reunited. You will receive a reminder to close the report once your pet is home safe." },
];

const relatedResources = [
  { slug: "how-to-read-dog-body-language", title: "How to Read Dog Body Language", type: "How-To" },
  { slug: "complete-guide-to-adopting-a-rescue-dog", title: "Complete Guide to Adopting a Rescue Dog", type: "Complete Guide" },
  { slug: "first-time-dog-owner-complete-guide", title: "First-Time Dog Owner Complete Guide", type: "Expert Guide" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hushku Lost & Found — Report Missing Pets & Alert Your Community",
    "description": "Report a lost or found pet on Hushku and instantly alert pet owners in your area. Community-powered lost pet alerts with location radius notifications.",
    "url": "https://hushku.app/lost-and-found",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hushku — Lost & Found Pet Alerts",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "LifestyleApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Report lost or found pets and instantly alert your neighbourhood by GPS radius. Community-powered, location-targeted, and free.",
    "featureList": ["Instant GPS radius push alerts", "Photo and location reports", "Auto-matching of found to lost reports", "Encrypted in-app messaging", "Mark as found"],
    "url": "https://hushku.app/lost-and-found",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export default function LostAndFoundPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-rose-50 py-20 lg:py-32">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rose-200/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 bg-rose-100 border border-rose-200 text-rose-800 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  📢 Lost & Found Feature
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Lost &amp; Found.<br />Your <span className="text-rose-600">Community.</span><br />On Alert.
                </h1>
                <p className="text-lg text-slate-gray leading-relaxed max-w-lg">
                  Hushku Lost &amp; Found is a free pet recovery app available globally on iOS and Android. Report a missing dog or cat and instantly alert everyone within your chosen radius — community-powered, GPS-targeted, and available the moment you need it.
                </p>
                <div className="bg-white border border-rose-100 rounded-2xl px-5 py-4 max-w-lg">
                  <p className="text-[10px] font-black text-brand-start uppercase tracking-widest mb-2">What Hushku Lost &amp; Found Does</p>
                  <ul className="space-y-1.5">
                    {["Instant push alerts to all users within 1–25 km", "Photo reports with GPS last-seen location", "Auto-matching of found pet reports to lost listings", "Private contact via in-app encrypted messaging", "Free — no account needed to view lost pet reports"].map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-gray"><span className="text-brand-start font-black">›</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "Instant", l: "Local Alerts" }, { v: "Photo", l: "Reports" }, { v: "Community", l: "Powered" }].map(s => (
                    <div key={s.v} className="bg-white border border-rose-100 rounded-2xl px-5 py-3 text-center shadow-sm">
                      <p className="text-lg font-black text-ebony">{s.v}</p>
                      <p className="text-[10px] font-bold text-slate-gray uppercase tracking-widest mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
                <DownloadButtons />
              </div>
              {/* Phone screenshot */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="w-[260px]"
                  style={{ animation: "float-a 3.5s ease-in-out infinite" }}
                >
                  <PhoneFrame src="/screenshots/app-lost-and-found.png" alt="Hushku Lost & Found — report missing pet screen" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Why Hushku</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">How Do Lost Pet Alerts Work?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 bg-rose-100 rounded-[1.5rem] flex items-center justify-center text-2xl mb-6">{b.icon}</div>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">How to Report a Lost or Found Pet</h2>
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

        {/* WHY QUICK REPORTING MATTERS */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">The Data</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl mb-6">Why the First Two Hours Are Critical</h2>
              <p className="text-lg text-slate-gray leading-relaxed max-w-2xl mx-auto">
                According to the <strong>American Humane Society</strong>, approximately 1 in 3 pets will become lost at some point during their lifetime. Recovery rates drop dramatically after the first two hours — the window in which most lost animals are still within a small radius of their escape point. Traditional lost pet methods (Facebook posts, paper flyers) take hours to spread. Hushku alerts go out in seconds.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { stat: "1 in 3", label: "Pets will be lost at some point in their life", source: "American Humane Society" },
                { stat: "2 hours", label: "Critical recovery window before search radius expands", source: "ASPCA Recovery Data" },
                { stat: "52%", label: "Of lost dogs are recovered through neighbour sightings", source: "Applied Animal Behaviour Science" },
              ].map(({ stat, label, source }) => (
                <div key={stat} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 text-center">
                  <p className="text-3xl font-black text-brand-start mb-2">{stat}</p>
                  <p className="text-sm text-ebony font-bold mb-1">{label}</p>
                  <p className="text-[10px] text-slate-gray uppercase tracking-widest">Source: {source}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-gray leading-relaxed max-w-2xl mx-auto text-center">
              Microchipping dramatically increases recovery rates — in the UK, microchipping has been legally required for dogs since 2016 and increases reunification rates by over 50% compared to non-chipped dogs. Store your pet's microchip number, vaccination records, and up-to-date photos in <Link href="/health" className="text-brand-start font-bold hover:underline">Hushku's health records</Link> so you have everything ready to file a report instantly. You can also <Link href="/adoption" className="text-brand-start font-bold hover:underline">browse adoptable pets</Link> through Hushku if you find an animal that cannot be reunited with its owner.
            </p>
          </div>
        </section>

        <FaqAccordion faqs={faqs} title="Lost & Found Questions Answered" />

        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-black text-ebony uppercase tracking-tight mb-8 text-center">More from Hushku</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedResources.map((r) => (
                <Link key={r.slug} href={`/resources/${r.slug}`} className="group bg-white rounded-[2rem] p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span className="text-[10px] font-black text-brand-start bg-brand-start/10 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{r.type}</span>
                  <h3 className="font-black text-ebony leading-snug group-hover:text-brand-start transition-colors">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HELP BANNER ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-brand-start/10 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">🔍</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">Need Help Reporting a Lost Pet?</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Our guide covers exactly how to file a report, what information to include, and how to mark your pet as found.</p>
                  <ul className="mt-4 space-y-1.5">
                    <li key="How to report a lost pet" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/lost-and-found" className="hover:text-ebony hover:underline transition-colors">How to report a lost pet</Link></li>
                    <li key="How to report a found animal" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/lost-and-found" className="hover:text-ebony hover:underline transition-colors">How to report a found animal</Link></li>
                    <li key="How to mark your pet as found" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/lost-and-found" className="hover:text-ebony hover:underline transition-colors">How to mark your pet as found</Link></li>
                  </ul>
                </div>
              </div>
              <Link href="/help-center/lost-and-found" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-7 py-4 rounded-[1.5rem] uppercase tracking-widest text-sm shadow-lg whitespace-nowrap">
                Read the Lost & Found Guide →
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

import Link from "next/link";
import DownloadButtons from "../components/DownloadButtons";
import FaqAccordion from "../components/FaqAccordion";
import ContactSection from "../components/ContactSection";
import PhoneFrame from "../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animal Shelters Near Me | Find Verified Rescue Centres & Adoptable Pets — Hushku",
  description: "Find verified animal shelters and rescue centres near you on Hushku. Browse adoptable dogs, cats, and small animals, request admission, and connect directly with shelters — all from your phone. Free on iOS & Android.",
  keywords: "animal shelters near me, rescue centres near me, dog shelter near me, cat rescue near me, find animal shelter, adoptable pets near me, shelter dog adoption, rescue cat adoption, animal rescue app",
  alternates: { canonical: "https://hushku.app/shelters" },
  openGraph: {
    title: "Animal Shelters Near Me | Find Verified Rescue Centres & Adoptable Pets — Hushku",
    description: "Find verified animal shelters and rescue centres near you. Browse adoptable dogs, cats, and small animals. Request admission directly through the app.",
    type: "website",
    url: "https://hushku.app/shelters",
    images: [{ url: "https://hushku.app/screenshots/app-shelters.png", width: 1200, height: 630, alt: "Hushku Animal Shelters App — find verified rescue centres near you" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animal Shelters Near Me | Find Verified Rescue Centres & Adoptable Pets — Hushku",
    description: "Find verified animal shelters and rescue centres near you. Browse adoptable dogs, cats, and small animals. Request admission directly through the app.",
    images: ["https://hushku.app/screenshots/app-shelters.png"],
  },
};

const benefits = [
  {
    icon: "🏢",
    title: "Browse Verified Shelters",
    desc: "Search shelters and rescue centres near you. Every organisation is verified before listing. See their available pets, adoption policies, and contact details in one place.",
  },
  {
    icon: "🐾",
    title: "Adoptable Pet Listings",
    desc: "Every shelter's available pets are listed live in the app. Filter by species, age, breed, and size. Each pet has a full profile with photos, temperament notes, and adoption requirements.",
  },
  {
    icon: "📋",
    title: "Request Admission Directly",
    desc: "Submit an admission or fostering enquiry to any shelter directly through the app. No phone tag, no emails lost in inboxes. Track your request status in real time.",
  },
  {
    icon: "🏠",
    title: "Shelter Login & Dashboard",
    desc: "Shelters have their own dedicated login path. They can list their organisation, upload pets available for adoption, manage enquiries, and update listings — all from the Hushku dashboard.",
  },
];

const howItWorks = [
  { num: "01", title: "Search Nearby Shelters", desc: "Enter your location or allow GPS access. Browse verified shelters and rescue centres in your area sorted by distance." },
  { num: "02", title: "Explore Adoptable Pets", desc: "Browse each shelter's live pet listings. Save favourites, compare pets, and read full profiles before making any commitment." },
  { num: "03", title: "Send an Admission Request", desc: "Found the right pet or shelter? Submit a request directly through the app. The shelter receives it instantly and can respond via in-app messaging." },
  { num: "04", title: "Bring Them Home", desc: "Coordinate the handover through the app. Ownership documents and health records transfer to your Hushku profile when adoption is complete." },
];

const faqs = [
  { q: "How do I find animal shelters near me?", a: "Open the Shelters tab in Hushku and allow location access. You will see verified shelters and rescue centres sorted by distance from your current location. You can also search by postcode, city name, or shelter name. Each listing shows the shelter's address, species they house, available pets, adoption policies, and direct contact options — all in one place without needing to visit multiple websites." },
  { q: "Are all shelters on Hushku verified?", a: "Yes. Every shelter and rescue organisation goes through a verification process before their listing goes live. We check registered charity or non-profit status, operating licences, and animal welfare compliance — including alignment with the Five Freedoms of animal welfare established by the Farm Animal Welfare Council. Verified organisations display a checkmark badge on their profile." },
  { q: "What is the difference between a shelter and a rescue on Hushku?", a: "Animal shelters are typically local government-operated or council-contracted facilities that accept stray and surrendered animals. Rescue organisations are usually volunteer-run charities that pull animals from shelters, operate foster networks, and often specialise by species or breed — such as Greyhound rescues, brachycephalic breed rescues, or senior cat rescues. Both are listed on Hushku, clearly labelled, and both go through the same verification process." },
  { q: "Can I apply to adopt directly through the app?", a: "Yes. When you find a pet you would like to adopt, tap Request Adoption on their listing. Your adopter profile is sent to the shelter instantly. You can track the status of your application and communicate with the shelter via in-app messaging without sharing personal contact details until you choose to. Most shelters respond within 24–72 hours." },
  { q: "How does the shelter dashboard work?", a: "Shelters sign up through a dedicated portal. Once verified, they get access to a dashboard where they can add and update pet listings with photos and full profiles, receive and manage adoption and fostering enquiries, respond to applicants via in-app messaging, and update availability when a pet is rehomed. It replaces the fragmented mix of spreadsheets, email chains, and Facebook posts that most small rescues currently rely on." },
  { q: "Can I foster a pet through Hushku?", a: "Yes. Many shelters on Hushku offer fostering as well as adoption — fostering is particularly critical during kitten season (spring–summer) when shelters face capacity overflow. You can filter listings to show fostering opportunities specifically. The process is the same as adoption: submit your profile, communicate with the shelter via in-app chat, and arrange the handover. Foster care guides and support resources are available in the app." },
];

const relatedResources = [
  { slug: "complete-guide-to-adopting-a-rescue-dog", title: "Complete Guide to Adopting a Rescue Dog", type: "Complete Guide" },
  { slug: "first-time-dog-owner-complete-guide", title: "First-Time Dog Owner Complete Guide", type: "Expert Guide" },
  { slug: "complete-guide-to-puppy-care", title: "The Complete Guide to Puppy Care", type: "Complete Guide" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hushku Shelters — Find Verified Animal Shelters & Rescue Centres Near You",
    "description": "Discover verified animal shelters and rescue centres near you on Hushku. Browse adoptable pets, request admission, and connect with shelters directly.",
    "url": "https://hushku.app/shelters",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hushku — Animal Shelter Finder",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "LifestyleApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Find verified animal shelters and rescue centres near you. Browse adoptable dogs, cats and small animals. Submit admission requests directly through the app.",
    "featureList": ["Verified shelter listings", "Live adoptable pet listings", "Species and breed filters", "In-app admission requests", "Shelter dashboard for organisations"],
    "url": "https://hushku.app/shelters",
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

export default function SheltersPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-green-50 py-20 lg:py-32">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-200/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  🏢 Shelters Feature
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Animal <span className="text-green-600">Shelters.</span><br />Find &amp; Connect.<br />Near You.
                </h1>
                <p className="text-lg text-slate-gray leading-relaxed max-w-lg">
                  Hushku Shelters is a free animal shelter finder available globally on iOS and Android. It maps verified shelters and rescue centres near you, shows their live adoptable pet listings, and lets you submit admission requests directly — no phone tag, no email chains.
                </p>
                <div className="bg-white border border-green-100 rounded-2xl px-5 py-4 max-w-lg">
                  <p className="text-[10px] font-black text-brand-start uppercase tracking-widest mb-2">What Hushku Shelters Does</p>
                  <ul className="space-y-1.5">
                    {["Find verified shelters and rescues near you globally", "Browse live adoptable dog, cat & small animal listings", "Filter by species, breed, age & size", "Submit admission or foster requests in-app", "Shelters manage listings via dedicated dashboard"].map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-gray"><span className="text-brand-start font-black">›</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "Verified", l: "Shelters Only" }, { v: "Live", l: "Pet Listings" }, { v: "Direct", l: "Admission Requests" }].map(s => (
                    <div key={s.v} className="bg-white border border-green-100 rounded-2xl px-5 py-3 text-center shadow-sm">
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
                  <PhoneFrame src="/screenshots/app-shelters.png" alt="Hushku Shelters — browse verified animal shelters screen" />
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">How to Find Animal Shelters Near You</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 bg-green-100 rounded-[1.5rem] flex items-center justify-center text-2xl mb-6">{b.icon}</div>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">How to Adopt from a Shelter on Hushku</h2>
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

        {/* WHY SHELTER ADOPTION MATTERS */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">The Impact</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl mb-6">Why Shelters Need Better Technology</h2>
              <p className="text-lg text-slate-gray leading-relaxed max-w-2xl mx-auto">
                The <strong>ASPCA</strong> estimates that approximately 6.5 million animals enter US shelters every year. Around 920,000 are euthanised annually — not because they are unadoptable, but because shelters lack the digital infrastructure to connect them with the right families quickly enough. Most rescues still manage enquiries through email threads, paper forms, and Facebook posts. Hushku gives every shelter a real-time digital presence and a direct channel to adopters.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { stat: "6.5M", label: "Animals enter US shelters annually", source: "ASPCA" },
                { stat: "920,000", label: "Euthanised each year due to capacity and logistics", source: "ASPCA" },
                { stat: "3×", label: "Faster adoption when listings are digital and searchable", source: "Maddie's Fund Research" },
              ].map(({ stat, label, source }) => (
                <div key={stat} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 text-center">
                  <p className="text-3xl font-black text-brand-start mb-2">{stat}</p>
                  <p className="text-sm text-ebony font-bold mb-1">{label}</p>
                  <p className="text-[10px] text-slate-gray uppercase tracking-widest">Source: {source}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-gray leading-relaxed max-w-2xl mx-auto text-center">
              Finding the right shelter is only the first step. Once you have adopted, <Link href="/health" className="text-brand-start font-bold hover:underline">Hushku's health tracker</Link> stores your new pet's vaccination records and medication history — and <Link href="/playdates" className="text-brand-start font-bold hover:underline">playdate matching</Link> helps newly adopted dogs build confidence through structured one-on-one socialisation. If you are not ready to adopt, <Link href="/fostering" className="text-brand-start font-bold hover:underline">fostering</Link> is available through many shelters on the platform.
            </p>
          </div>
        </section>

        <FaqAccordion faqs={faqs} title="Shelter Questions Answered" />

        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-black text-ebony uppercase tracking-tight mb-8 text-center">Prepare for Your New Pet</h2>
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
                <div className="w-14 h-14 bg-brand-start/10 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">🏢</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">Finding Shelters for the First Time?</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Learn how to search for verified shelters, browse their available pets, and send an admission request.</p>
                  <ul className="mt-4 space-y-1.5">
                    <li key="How to find shelters near you" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/shelters" className="hover:text-ebony hover:underline transition-colors">How to find shelters near you</Link></li>
                    <li key="How to contact a shelter" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/shelters" className="hover:text-ebony hover:underline transition-colors">How to contact a shelter</Link></li>
                    <li key="How shelter dashboards work" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/shelters" className="hover:text-ebony hover:underline transition-colors">How shelter dashboards work</Link></li>
                  </ul>
                </div>
              </div>
              <Link href="/help-center/shelters" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-7 py-4 rounded-[1.5rem] uppercase tracking-widest text-sm shadow-lg whitespace-nowrap">
                Read the Shelters Guide →
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

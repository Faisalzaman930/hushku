import Link from "next/link";
import DownloadButtons from "../components/DownloadButtons";
import FaqAccordion from "../components/FaqAccordion";
import ContactSection from "../components/ContactSection";
import PhoneFrame from "../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animal Shelters & Rescue Centres | Find & Support Local Shelters — Hushku",
  description: "Discover verified animal shelters and rescue centres near you on Hushku. Browse adoptable pets, request admission, and connect with shelters directly. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/shelters" },
  openGraph: {
    title: "Animal Shelters & Rescue Centres | Find & Support Local Shelters — Hushku",
    description: "Discover verified animal shelters and rescue centres near you on Hushku. Browse adoptable pets, request admission, and connect with shelters directly. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/shelters",
    images: [{ url: "https://hushku.app/screenshots/app-shelters.png", width: 1200, height: 630, alt: "Hushku Animal Shelters App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animal Shelters & Rescue Centres | Find & Support Local Shelters — Hushku",
    description: "Discover verified animal shelters and rescue centres near you on Hushku. Browse adoptable pets, request admission, and connect with shelters directly. Free on iOS & Android.",
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
  { q: "How do I find shelters near me?", a: "Open the Shelters tab in Hushku and allow location access. You'll see verified shelters sorted by distance. You can also search by postcode, city, or shelter name. Each listing shows the shelter's address, available pets, and contact options." },
  { q: "Are all shelters on Hushku verified?", a: "Yes. Every shelter and rescue organisation goes through a verification process before their listing goes live. We check registered charity or business status, operating licences, and animal welfare compliance. Verified organisations display a checkmark badge on their profile." },
  { q: "Can I apply to adopt directly through the app?", a: "Yes. When you find a pet you'd like to adopt, tap \"Request Adoption\" on their listing. Your adopter profile is sent to the shelter instantly. You can track the status of your application and communicate with the shelter via in-app messaging without sharing personal contact details." },
  { q: "How does the shelter dashboard work?", a: "Shelters sign up through a dedicated portal on Hushku. Once verified, they get access to a dashboard where they can add and update pet listings, receive and manage adoption enquiries, and communicate with potential adopters — all in one place." },
  { q: "Can I foster a pet through Hushku?", a: "Yes. Many shelters on Hushku offer fostering as well as adoption. You can filter listings to show fostering opportunities. The request process is the same — submit your profile, chat with the shelter, and arrange the handover through the app." },
];

const relatedResources = [
  { slug: "complete-guide-to-adopting-a-rescue-dog", title: "Complete Guide to Adopting a Rescue Dog", type: "Complete Guide" },
  { slug: "first-time-dog-owner-complete-guide", title: "First-Time Dog Owner Complete Guide", type: "Expert Guide" },
  { slug: "complete-guide-to-puppy-care", title: "The Complete Guide to Puppy Care", type: "Complete Guide" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hushku Shelters — Find Verified Animal Shelters & Rescue Centres Near You",
  "description": "Discover verified animal shelters and rescue centres near you on Hushku. Browse adoptable pets, request admission, and connect with shelters directly.",
  "url": "https://hushku.app/shelters",
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

export default function SheltersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                  Find <span className="text-green-600">Shelters.</span><br />Save Lives.<br />Near You.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Browse verified animal shelters and rescue centres near you. Connect directly, explore adoptable pets, and make a difference — all from one app.
                </p>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Shelters, Simplified</h2>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Search. Connect. Adopt.</h2>
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

        <section className="py-24 bg-ebony">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-4">Free to Download</p>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Every Shelter Near You. One App.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">Hundreds of verified shelters, thousands of pets waiting for homes. Find yours today.</p>
            <DownloadButtons light center />
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

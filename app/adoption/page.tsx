import Link from "next/link";
import DownloadButtons from "../components/DownloadButtons";
import FaqAccordion from "../components/FaqAccordion";
import ContactSection from "../components/ContactSection";
import PhoneFrame from "../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Adoption App | Adopt Dogs & Cats from Verified Rescues — Hushku",
  description: "Adopt a dog, cat, or small animal on Hushku. Browse verified shelters and rescue organisations, submit paperless adoption applications, and track every step — free on iOS & Android. Approximately 920,000 shelter animals are euthanised in the US annually. Help change that.",
  keywords: "pet adoption app, adopt a dog near me, adopt a cat near me, dog adoption app, shelter pet adoption, rescue dog adoption app, puppy adoption, kitten adoption, paperless adoption application",
  alternates: { canonical: "https://hushku.app/adoption" },
  openGraph: {
    title: "Pet Adoption App | Adopt Dogs & Cats from Verified Rescues — Hushku",
    description: "Browse verified shelters and rescue organisations, submit paperless adoption applications, and track your process. Adopt a dog or cat in minutes, not weeks.",
    type: "website",
    url: "https://hushku.app/adoption",
    images: [{ url: "https://hushku.app/screenshots/app-adoption.png", width: 1200, height: 630, alt: "Hushku Pet Adoption App — browse verified rescues" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Adoption App | Adopt Dogs & Cats from Verified Rescues — Hushku",
    description: "Browse verified shelters and rescue organisations, submit paperless adoption applications, and track your process. Adopt a dog or cat in minutes, not weeks.",
    images: ["https://hushku.app/screenshots/app-adoption.png"],
  },
};

const benefits = [
  {
    icon: "🏠",
    title: "Verified Rescue Network",
    desc: "Every shelter and rescue on Hushku is audited before going live. Registered charity status, operating licenses, and animal welfare standards are all confirmed. No unverified listings.",
  },
  {
    icon: "📋",
    title: "One-Tap Paperless Applications",
    desc: "Build your adopter profile once. Submit it to any rescue on the platform with a single tap. No PDFs, no repeated forms, no waiting for email replies.",
  },
  {
    icon: "💬",
    title: "Direct Rescue Messaging",
    desc: "Coordinate home visits, ask questions, and receive updates through encrypted in-app messaging. No sharing personal contact details until you choose to.",
  },
  {
    icon: "📁",
    title: "Digital Adoption Records",
    desc: "Your complete adoption history, health records transfer, and ownership documentation — all stored in the app and shareable with your vet in seconds.",
  },
];

const howItWorks = [
  { num: "01", title: "Create Your Adopter Profile", desc: "Add your home setup, lifestyle, experience with pets, and what you're looking for. Takes about 3 minutes." },
  { num: "02", title: "Browse Verified Listings", desc: "Search by species, breed, age, size, and temperament. Every listing comes from a verified organization." },
  { num: "03", title: "Apply in One Tap", desc: "Submit your pre-built profile to one or multiple rescues simultaneously. Track application status in real time." },
  { num: "04", title: "Meet & Bring Them Home", desc: "Coordinate your home visit via in-app chat. Complete paperwork digitally. That's it." },
];

const faqs = [
  { q: "How do I know the rescues on Hushku are legitimate?", a: "Every organisation goes through a verification process before listings go live. We verify registered charity or business status, operating licences, and require agreement with our animal welfare standards — including compliance with the Five Freedoms of animal welfare. Verified organisations display a checkmark badge. Listings without it are not active on the platform." },
  { q: "Can I apply to multiple rescues at once?", a: "Yes. Once you've built your adopter profile, you can submit it to any number of verified rescues simultaneously with one tap. You'll receive status updates for each application separately in your inbox. This eliminates the repetitive PDF forms and email chains that make traditional rescue adoption slow and frustrating — the average traditional adoption application takes 3–6 weeks; Hushku's process takes days." },
  { q: "What does the adoption process look like on Hushku?", a: "After submitting your application, the rescue reviews your profile and either approves you for a meet-and-greet or asks follow-up questions through in-app chat. Home visits — required by most UK and Australian rescues, and many US shelters — can be coordinated through the app. Once the rescue confirms the adoption, digital ownership documents are issued directly to your account." },
  { q: "What should I prepare before adopting a rescue dog or cat?", a: "Before your new pet arrives: puppy-proof or kitten-proof your home by securing loose cables, removing toxic plants (lilies are highly toxic to cats; grapes, xylitol, and chocolate are toxic to dogs), and setting up a safe, quiet room for the initial settling-in period. Have a vet appointment booked within the first week. Stock up on species-appropriate food and have a carrier ready for the journey home. Our complete guide to adopting a rescue dog covers the full preparation checklist." },
  { q: "Is there a fee to use the adoption feature?", a: "Hushku is free to download and use. Adoption fees are set entirely by the individual rescue or shelter — Hushku does not charge adopters. Rescue adoption fees typically range from £50–£250 in the UK, $50–$500 in the US, and $150–$400 in Australia, and usually include desexing, microchipping, initial vaccinations, and a health check." },
  { q: "What happens to my pet's records when I adopt?", a: "When adoption is finalised, the rescue transfers all existing medical records, vaccination history, microchip registration data, and desexing certificates to your Hushku health wallet. These records are permanently accessible and exportable to share with any vet. Microchip transfer to your name is handled digitally through the app." },
  { q: "Can I adopt a specific breed through Hushku?", a: "Yes. Breed-specific rescue organisations for hundreds of breeds — including Golden Retrievers, Labrador Retrievers, German Shepherd Dogs, Greyhounds, Staffies, French Bulldogs, and many more — are listed alongside general rescues. You can filter listings by breed when searching. Breed-specific rescues often have deep expertise in the specific health and behavioural needs of that breed, making them an excellent resource even if their current listings don't include exactly what you're looking for." },
];

const relatedResources = [
  { slug: "complete-guide-to-puppy-care", title: "The Complete Guide to Puppy Care", type: "Complete Guide" },
  { slug: "first-time-dog-owner-complete-guide", title: "First-Time Dog Owner Complete Guide", type: "Expert Guide" },
  { slug: "what-is-positive-reinforcement-dog-training", title: "What Is Positive Reinforcement Training?", type: "Health Glossary" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hushku Pet Adoption — Verified Rescues & Paperless Applications",
  "description": "Browse verified shelters and rescues, submit paperless adoption applications, and track your process on Hushku.",
  "url": "https://hushku.app/adoption",
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "Hushku",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS, Android",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  },
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

export default function AdoptionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-amber-50 py-20 lg:py-32">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-200/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  🏠 Adoption Feature
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Pet Adoption.<br />Find Their<br /><span className="text-amber-600">Forever.</span>
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Hushku connects you directly with verified rescues. Browse real listings, submit paperless applications, and bring your next best friend home — all from your phone.
                </p>
                <DownloadButtons />
              </div>
              {/* Phone screenshot */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="w-[260px]"
                  style={{ animation: "float-a 3.5s ease-in-out infinite" }}
                >
                  <PhoneFrame src="/screenshots/app-adoption.png" alt="Hushku adoption feature — PawDiscover screen" />
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Adoption Without the Paperwork</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 bg-amber-100 rounded-[1.5rem] flex items-center justify-center text-2xl mb-6">{b.icon}</div>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">From Browse to Bringing Home</h2>
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

        {/* FAQ */}
        <FaqAccordion faqs={faqs} title="Adoption Questions Answered" />

        {/* RELATED RESOURCES */}
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
                <div className="w-14 h-14 bg-brand-start/10 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">💛</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">New to Adopting on Hushku?</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Learn how to browse listings, submit an adoption request, and track your application status in the app.</p>
                  <ul className="mt-4 space-y-1.5">
                    <li key="How to submit an adoption request" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/adoption-fostering" className="hover:text-ebony hover:underline transition-colors">How to submit an adoption request</Link></li>
                    <li key="How to track your request status" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/adoption-fostering" className="hover:text-ebony hover:underline transition-colors">How to track your request status</Link></li>
                    <li key="Adoption vs fostering — what's the difference?" className="flex items-center gap-2 text-sm text-slate-gray"><span className="text-brand-start font-black">›</span><Link href="/help-center/adoption-fostering" className="hover:text-ebony hover:underline transition-colors">Adoption vs fostering — what's the difference?</Link></li>
                  </ul>
                </div>
              </div>
              <Link href="/help-center/adoption-fostering" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gradient text-white font-black px-7 py-4 rounded-[1.5rem] uppercase tracking-widest text-sm shadow-lg whitespace-nowrap">
                Read the Adoption Guide →
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

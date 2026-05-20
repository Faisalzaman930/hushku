import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";
import FaqAccordion from "../../components/FaqAccordion";
import ContactSection from "../../components/ContactSection";
import PhoneFrame from "../../components/PhoneFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Health Records App | Store Vaccination Certificates, Vet Visits & More — Hushku",
  description: "Store all your pet's health records digitally with Hushku. Upload vaccination certificates, log vet visits, track medications, and store lab reports — all in one secure health wallet. Free on iOS & Android.",
  alternates: { canonical: "https://hushku.app/health/records" },
  openGraph: {
    title: "Pet Health Records App | Store Vaccination Certificates, Vet Visits & More — Hushku",
    description: "Store all your pet's health records digitally with Hushku. Upload vaccination certificates, log vet visits, track medications, and store lab reports — all in one secure health wallet. Free on iOS & Android.",
    type: "website",
    url: "https://hushku.app/health/records",
    images: [{ url: "https://hushku.app/screenshots/app-health-records.png", width: 1200, height: 630, alt: "Hushku Pet Health Records App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Health Records App | Store Vaccination Certificates, Vet Visits & More — Hushku",
    description: "Store all your pet's health records digitally with Hushku. Upload vaccination certificates, log vet visits, track medications, and store lab reports — all in one secure health wallet. Free on iOS & Android.",
    images: ["https://hushku.app/screenshots/app-health-records.png"],
  },
};

const benefits = [
  {
    icon: "💉",
    title: "Vaccination Records",
    desc: "Upload your pet's vaccination certificates and log each vaccine with date, type, batch number, and next due date. Never miss a booster again.",
  },
  {
    icon: "🏥",
    title: "Vet Visit History",
    desc: "Log every vet visit with date, reason, diagnosis, treatment notes, and attending vet. Build a complete clinical history that travels with your pet.",
  },
  {
    icon: "💊",
    title: "Medication Log",
    desc: "Track current and past medications with dosage, frequency, start and end dates. Critical for pets on long-term treatment or multiple medications.",
  },
  {
    icon: "🧪",
    title: "Lab Reports & Documents",
    desc: "Upload any vet-issued documents — blood test results, X-rays, discharge summaries, insurance certificates. Stored securely and accessible forever.",
  },
];

const howItWorks = [
  { num: "01", title: "Choose a Record Type", desc: "Select from Vaccination, Vet Visit, Medication, or Document. Each type has its own structured form so the right information is always captured." },
  { num: "02", title: "Enter the Details", desc: "Fill in the record details and optionally upload a photo or PDF. Hushku saves everything securely in your pet's health wallet." },
  { num: "03", title: "Access & Share Anytime", desc: "All records are accessible from any device. At the vet, share the full history in one tap — no digging through folders or email threads." },
];

const faqs = [
  { q: "What types of records can I store?", a: "Vaccination records (with certificate upload), vet visit summaries, medication logs, lab reports (blood tests, X-rays, etc.), and any other documents. Each record type has its own structured form plus the option to upload a file." },
  { q: "Can I upload physical documents and certificates?", a: "Yes. You can photograph a physical document or upload a PDF directly from your phone. Files are stored securely in Hushku's cloud storage and are accessible any time." },
  { q: "Are health records private?", a: "Yes. Your pet's health records are private to your account. You choose when to share them — for example, exporting to a new vet or sharing with a boarding facility." },
  { q: "What happens to my records if I delete my account?", a: "All records and uploaded files are permanently deleted within 30 days of account deletion. We recommend exporting any records you want to keep before deleting." },
  { q: "Is the health records feature free?", a: "Yes. Storing and accessing health records is completely free." },
];

const relatedLinks = [
  { href: "/health/weight-tracker", icon: "⚖️", title: "Weight Tracker" },
  { href: "/health/flea-tick", icon: "🦟", title: "Flea & Tick Tracker" },
  { href: "/health", icon: "🏥", title: "All Health Features" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pet Health Records App — Hushku",
  "description": "Store all your pet's health records digitally with Hushku. Upload vaccination certificates, log vet visits, track medications, and store lab reports.",
  "url": "https://hushku.app/health/records",
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

export default function RecordsPage() {
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
                  📋 Health Records
                </span>
                <h1 className="text-5xl font-black text-ebony leading-[0.9] uppercase sm:text-7xl tracking-tighter">
                  Pet Health Records.<br /><span className="text-emerald-600">One Digital</span><br />Wallet.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed max-w-lg">
                  Upload vaccination certificates, log vet visits, track medications, and store lab reports — all in one secure place you can access and share anywhere.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[{ v: "Secure", l: "Cloud Storage" }, { v: "All Record", l: "Types" }, { v: "Free", l: "To Use" }].map(s => (
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
                  <PhoneFrame src="/screenshots/app-health-records.png" alt="Hushku Pet Health Records" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">What You Can Store</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Every Record. In One Place.</h2>
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
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">Store. Organise. Share.</h2>
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

        <FaqAccordion faqs={faqs} title="Health Records Questions Answered" />

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
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Your Pet's Complete Health History. Always With You.</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">All records stored securely. Share with your vet in one tap. Free on iOS and Android.</p>
            <DownloadButtons light center />
          </div>
        </section>

        
        {/* ── HELP BANNER ── */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0">📋</div>
                <div>
                  <h2 className="text-xl font-black text-ebony uppercase tracking-tight mb-2">How to Store Health Records</h2>
                  <p className="text-sm text-slate-gray leading-relaxed max-w-lg">Learn how to add vaccination records, vet visit notes, medication logs, and upload documents.</p>
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

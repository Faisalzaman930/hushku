import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Adopt or Foster a Pet on Hushku | Step-by-Step Guide",
  description:
    "Learn how to browse adoption and fostering listings, submit requests, and track your application status on Hushku.",
  alternates: { canonical: "https://hushku.app/help-center/adoption-fostering" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to get a response to an adoption request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the owner or shelter. Most respond within 1–3 days. You'll receive a push notification as soon as your request status changes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply to multiple pets at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can submit adoption or foster requests to as many listings as you like. Track all of them from the Inbox tab.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a fee to adopt through Hushku?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hushku is free to use. Any adoption fee is set by the owner or shelter and disclosed on their listing. Hushku does not charge adopters.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between adoption and fostering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adoption is a permanent rehoming — you become the pet's owner. Fostering is temporary — you care for the pet for a set period while the shelter or owner finds a permanent home.",
      },
    },
  ],
};

export default function AdoptionFosteringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-ebony py-20 lg:py-28">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-end/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 font-medium">
              <Link href="/help-center" className="hover:text-white transition-colors">Help Center</Link>
              <span>→</span>
              <span className="text-white/80">Adoption & Fostering</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              💛 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              How to Adopt or Foster a Pet
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Browse listings, submit requests, and track your adoption or foster application from start to finish.
            </p>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Browsing Adoption Listings */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Browsing Adoption Listings
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Navigate to the <strong className="text-ebony">Discover tab</strong> and scroll to the Adoption section. Each card shows the pet's photo, name, age, breed, size, gender, and an "Adoption" badge. Tap any card to open the full listing.
              </p>
            </section>

            {/* Listing Detail */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                The Listing Detail Page
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                The detail page shows everything you need to decide:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Photo gallery — swipe left and right to browse all photos",
                  "Pet name, age, breed, size, and gender",
                  "Full description and personality traits",
                  "Owner or shelter info and contact badge",
                  "\"Request Adoption\" button at the bottom",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Submitting Adoption */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Submitting an Adoption Request
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { num: "01", title: 'Tap "Request Adoption"', desc: "Found at the bottom of the listing detail page." },
                  { num: "02", title: "Write an Optional Message", desc: 'Tell the owner or shelter about yourself. E.g., "We have a large backyard and two kids who love dogs." This increases your chances of being accepted.' },
                  { num: "03", title: "Send Your Request", desc: 'Tap "Send Request". A confirmation toast appears and your request is logged.' },
                  { num: "04", title: "Wait for a Response", desc: "You'll receive a push notification when the owner or shelter responds. Track status in Inbox → Adoption Requests." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5 items-start bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-black text-ebony uppercase tracking-tight mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Foster Listings */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Browsing Foster Listings
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Foster listings work the same way as adoption — go to the <strong className="text-ebony">Discover tab</strong> and scroll to the Foster section. Foster cards also show the duration (e.g., "2 weeks", "1 month"). Tap a card to open the detail page. Tap <strong className="text-ebony">"Request Foster"</strong> to apply.
              </p>
            </section>

            {/* Foster Request Form */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Fostering Request Form
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                The foster request form has these fields:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Your name", note: "Pre-filled from your profile" },
                  { field: "Your location", note: "Pre-filled; edit if needed" },
                  { field: "Reason for fostering", note: "Required — explain why you're a good match" },
                  { field: "Additional notes", note: "Optional — any extra info for the owner or shelter" },
                ].map((item) => (
                  <div key={item.field} className="bg-white border border-gray-100 rounded-[1.5rem] p-5 flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    <div>
                      <span className="font-black text-ebony text-sm">{item.field}</span>
                      <span className="text-slate-gray text-sm"> — {item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap <strong className="text-ebony">"Send Request"</strong> to submit. You'll receive a confirmation and can track the request from your Inbox.
              </p>
            </section>

            {/* Tracking Requests */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Tracking Your Requests
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Go to <strong className="text-ebony">Inbox → Adoption Requests tab</strong>. Each request shows its current status:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: "⏳", status: "Pending", color: "bg-yellow-50 border-yellow-200", textColor: "text-yellow-700", desc: "Waiting for the owner or shelter to respond." },
                  { icon: "✅", status: "Accepted", color: "bg-green-50 border-green-200", textColor: "text-green-700", desc: "Your request was approved. Open the request to chat and arrange next steps." },
                  { icon: "✗", status: "Rejected", color: "bg-red-50 border-red-200", textColor: "text-red-700", desc: "The owner declined. You can browse and apply to other listings." },
                ].map((s) => (
                  <div key={s.status} className={`rounded-[2rem] p-6 border ${s.color} flex gap-4 items-start`}>
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <h3 className={`font-black uppercase tracking-tight mb-1 ${s.textColor}`}>{s.status}</h3>
                      <p className="text-sm text-slate-gray leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-gray-50 rounded-[2rem] p-6 border-l-4 border-brand-start">
                <p className="text-sm text-slate-gray leading-relaxed">
                  💡 <strong className="text-ebony">Tip:</strong> Tap any request to open its details and start a chat directly with the owner or shelter.
                </p>
              </div>
            </section>

          </div>
        </article>

        {/* RELATED */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-xl font-black text-ebony uppercase tracking-tighter mb-6">Related Help Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Shelters", href: "/help-center/shelters", icon: "🏢" },
                { title: "Messaging & Calls", href: "/help-center/messaging", icon: "💬" },
                { title: "Your Profile", href: "/help-center/your-profile", icon: "👤" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="group bg-white rounded-[2rem] p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <span className="text-2xl block mb-3">{a.icon}</span>
                  <span className="font-black text-ebony text-sm uppercase tracking-tight group-hover:text-brand-start transition-colors">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

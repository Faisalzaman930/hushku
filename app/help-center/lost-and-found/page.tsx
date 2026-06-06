import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Report a Lost or Found Pet on Hushku",
  description:
    "Step-by-step guide to reporting a missing pet, posting a found animal, and alerting your local community on Hushku.",
  alternates: { canonical: "https://hushku.app/help-center/lost-and-found" },
  openGraph: {
    title: "How to Report a Lost or Found Pet on Hushku",
    description: "Step-by-step guide to reporting a missing pet and alerting your community on Hushku.",
    type: "website",
    url: "https://hushku.app/help-center/lost-and-found",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "How to Report a Lost or Found Pet on Hushku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Report a Lost or Found Pet on Hushku",
    description: "Step-by-step guide to reporting a missing pet and alerting your community on Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly do alerts go to my neighbours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instantly. The moment you submit your report and tap Publish, push notifications are sent to all Hushku users within your chosen radius — no moderation delay.",
      },
    },
    {
      "@type": "Question",
      name: "How far do lost pet alerts reach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You choose the radius when submitting — from 1 km up to 25 km. You can expand it later if needed from within your report.",
      },
    },
    {
      "@type": "Question",
      name: "What if someone finds my pet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can submit a \"Found Pet\" report. Hushku cross-references it with active missing reports and notifies you if there's a match. You can also contact any user who taps \"I've seen this pet\" via in-app messaging.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit my report after submitting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Open your report from your profile, tap the edit (pencil) icon, update any details, and save.",
      },
    },
  ],
};

export default function LostAndFoundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-ebony py-20 lg:py-28">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-start/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 font-medium">
              <Link href="/help-center" className="hover:text-white transition-colors">Help Center</Link>
              <span>→</span>
              <span className="text-white/80">Lost & Found</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🔍 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              How to Find & Report Lost Pets
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Report a missing pet, post a found animal, and alert your local community — instantly.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Reporting Lost */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Reporting a Lost Pet
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Go to the <strong className="text-ebony">Lost & Found tab</strong>. Tap <strong className="text-ebony">"I Lost a Pet"</strong> or the + button. A report form slides up. Fill in:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Pet photo", note: "Tap the dashed box to upload from your gallery" },
                  { field: "Pet name", note: "As they're known" },
                  { field: "Breed", note: "Select from the dropdown or type a custom breed" },
                  { field: "Description", note: "Colour, size, any distinguishing marks (e.g., white patch on chest)" },
                  { field: "Last seen location", note: "Tap to open the location picker or type an address" },
                  { field: "Your contact phone number", note: "Required — finders need a way to reach you" },
                  { field: "Reward amount", note: "Optional — can increase community response" },
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
              <div className="mt-6 bg-red-50 rounded-[2rem] p-6 border-l-4 border-red-400">
                <p className="text-sm text-slate-gray leading-relaxed">
                  🚨 <strong className="text-ebony">Tap "Submit Report"</strong> — your report is posted to the community feed instantly and nearby users receive a push notification alert.
                </p>
              </div>
            </section>

            {/* Reporting Found */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Reporting a Found Pet
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap <strong className="text-ebony">"I Found a Pet"</strong> at the top of the Lost & Found tab. Fill in the same form with details about the animal you found, where you found it, and your contact number. Submit.
              </p>
              <p className="text-slate-gray leading-relaxed mt-4">
                The system automatically cross-references your report against active missing pet reports nearby and notifies owners if there&apos;s a potential match.
              </p>
            </section>

            {/* Browsing Active Alerts */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Browsing Active Alerts
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                The <strong className="text-ebony">Lost tab</strong> shows all active missing pet reports near you. Each card shows:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Pet photo",
                  "Name and breed",
                  "When it was last seen",
                  "Distance from your location",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-gray leading-relaxed mt-4">
                Tap a card to see the full report and contact the owner via in-app message.
              </p>
            </section>

            {/* Seen This / My Pet */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                "I've Seen This Pet" & "This Is My Pet"
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Inside any lost pet report, there are two action buttons:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-[2rem] p-6 border border-amber-100">
                  <div className="text-2xl mb-3">👀</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">I've Seen This Pet</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">Tap if you have information about the pet's whereabouts. Opens a message thread with the owner.</p>
                </div>
                <div className="bg-green-50 rounded-[2rem] p-6 border border-green-100">
                  <div className="text-2xl mb-3">🏠</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">This Is My Pet</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">Tap if you're the owner and this is your pet. Opens a message thread with the person who found them.</p>
                </div>
              </div>
            </section>

            {/* Marking Found */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Marking Your Pet as Found
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { num: "01", title: "Open Your Report", desc: "Go to your profile or the Lost & Found tab and tap on your own report." },
                  { num: "02", title: 'Tap "I Found My Pet!"', desc: "This button appears inside your own reports." },
                  { num: "03", title: "Done", desc: "The report is marked as resolved, removed from active alerts, and archived for 90 days." },
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
              <div className="mt-6 bg-gray-50 rounded-[2rem] p-6 border-l-4 border-brand-start">
                <p className="text-sm text-slate-gray leading-relaxed">
                  💡 <strong className="text-ebony">Please mark your pet as found</strong> as soon as they&apos;re home safe — it helps the community know the alert is no longer active.
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
                { title: "Social Feed", href: "/help-center/social-feed", icon: "📸" },
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

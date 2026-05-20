import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Find & Contact Animal Shelters on Hushku",
  description:
    "Learn how to search for verified animal shelters near you, browse their available pets, and send admission requests on Hushku.",
  alternates: { canonical: "https://hushku.app/help-center/shelters" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if a shelter is verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verified shelters display a green checkmark badge on their profile. Hushku checks registered charity or business status and animal welfare compliance before a shelter goes live.",
      },
    },
    {
      "@type": "Question",
      name: "Can shelters list their own pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shelters have their own login and dashboard. They can add pet listings, manage adoption enquiries, and update their profile directly from the app.",
      },
    },
    {
      "@type": "Question",
      name: "Is the shelter list limited to my city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The shelter list is sorted by distance but you can scroll to see shelters further away. You can also search by name or adjust your location in settings.",
      },
    },
  ],
};

export default function SheltersPage() {
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
              <span className="text-white/80">Shelters</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🏢 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              Finding Shelters
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Discover verified animal shelters near you, browse their available pets, and get in touch — all inside the app.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Finding Shelters */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Finding Shelters Near You
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Go to the <strong className="text-ebony">Discover tab</strong> and scroll to the Shelters section. Shelter cards show:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Shelter logo and name",
                  "City and distance from your location",
                  "Number of available pets currently listed",
                  "Verified checkmark badge (if verified)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-gray leading-relaxed mt-4">Tap any card to open the shelter's full profile.</p>
            </section>

            {/* Shelter Profile */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                The Shelter Profile
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                The shelter profile page brings together everything you need in one place:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🖼️", label: "Shelter logo and photo gallery" },
                  { icon: "📍", label: "Location and distance from you" },
                  { icon: "📝", label: "Full description of the shelter" },
                  { icon: "🌐", label: "Website and phone (if provided)" },
                  { icon: "💬", label: '"Contact Shelter" button' },
                  { icon: "🐾", label: "Carousel of currently available pets" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-[1.5rem] p-5 border border-gray-100 flex items-center gap-4">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-sm text-slate-gray font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Browsing Shelter Pets */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Browsing a Shelter's Pets
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Scroll down the shelter profile to see a carousel of their available pets. Tap any pet thumbnail to open its full adoption listing. From there, you can submit an adoption request directly — the same way you would from the Discover tab.
              </p>
              <div className="mt-6 bg-gray-50 rounded-[2rem] p-6 border-l-4 border-brand-start">
                <p className="text-sm text-slate-gray leading-relaxed">
                  💡 <strong className="text-ebony">Tip:</strong> Some shelters list dozens of pets. Use the carousel to browse or tap "View All Pets" to open a full-screen grid.
                </p>
              </div>
            </section>

            {/* Contacting */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Contacting a Shelter
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap <strong className="text-ebony">"Contact Shelter"</strong> to open a direct message thread with the shelter. You can:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Ask questions about specific pets",
                  "Arrange a visit or meet-and-greet",
                  "Enquire about fostering availability",
                  "Request general information about the shelter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Requesting Admission */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Requesting Admission
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                If the shelter accepts admission requests in-app, a <strong className="text-ebony">"Request Admission"</strong> button will appear on their profile. Here's how to use it:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { num: "01", title: "Tap Request Admission", desc: "The button appears on the shelter profile if they have admission requests enabled." },
                  { num: "02", title: "Fill in the Form", desc: "Enter your name, select your interest (Adopt or Foster), and optionally add a message to the shelter." },
                  { num: "03", title: "Submit", desc: "Tap Submit. The shelter receives your request and will respond via in-app message." },
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

          </div>
        </article>

        {/* RELATED */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-xl font-black text-ebony uppercase tracking-tighter mb-6">Related Help Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Adoption & Fostering", href: "/help-center/adoption-fostering", icon: "💛" },
                { title: "Messaging & Calls", href: "/help-center/messaging", icon: "💬" },
                { title: "Lost & Found", href: "/help-center/lost-and-found", icon: "🔍" },
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

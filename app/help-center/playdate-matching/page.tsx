import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Find Pet Playdates on Hushku | Matching Guide",
  description:
    "Step-by-step guide to finding compatible playdate partners for your dog or cat on Hushku. Learn how to swipe, filter by purpose, and arrange meetups.",
  alternates: { canonical: "https://hushku.app/help-center/playdate-matching" },
};

const tips = [
  {
    icon: "💡",
    title: "Complete Your Pet's Profile",
    desc: "Pets with more photos and filled-in personality tags get more matches. Add at least 3 photos and select all relevant personality traits.",
  },
  {
    icon: "🎯",
    title: "Use Purpose Filters",
    desc: "Set the right purpose (Walk, Playdate, etc.) so you only see relevant pets. Mismatched purposes lead to fewer successful meetups.",
  },
  {
    icon: "📍",
    title: "Set Your Location",
    desc: "Accurate location means you only see pets you can realistically meet. Update your location in settings if you've moved.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why am I not seeing any pets to swipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Make sure your location is set and your filters are not too narrow. Try increasing the distance radius or removing breed/age filters. Also check that your pet profile is complete — incomplete profiles may limit your visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when I match with someone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'You both get a notification and a "It\'s a Match!" popup. You can tap "Say Hi" to send a first message, or "Keep Swiping" to continue browsing. Your chat will appear in the Inbox tab.',
      },
    },
    {
      "@type": "Question",
      name: "What is a Super Like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Super Like lets the other owner know you're especially interested. Your card appears with a star badge when it comes up in their stack.",
      },
    },
    {
      "@type": "Question",
      name: "Can I unmatch someone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Open the chat with the match, tap the three-dot menu at the top right, and select Unmatch. This removes the match and the chat.",
      },
    },
  ],
};

export default function PlaydateMatchingPage() {
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 font-medium">
              <Link href="/help-center" className="hover:text-white transition-colors">
                Help Center
              </Link>
              <span>→</span>
              <span className="text-white/80">Playdate Matching</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🐾 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              How to Find Playdates
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Everything you need to know about matching your pet with compatible playdate partners nearby.
            </p>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Getting Started */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-1 pb-4 border-b-2 border-gray-100">
                Getting Started
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Playdate matching lives in the <strong className="text-ebony">Pets tab</strong>. When you open it, you see a stack of pet cards. Each card displays the pet's photo, name, age, breed, location distance, personality tags, and a short bio quote.
              </p>
              <p className="text-slate-gray leading-relaxed mt-4">
                Below each card are three action buttons:
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: "✕", label: "Pass", color: "bg-red-50 border-red-100 text-red-600" },
                  { icon: "★", label: "Super Like", color: "bg-yellow-50 border-yellow-100 text-yellow-600" },
                  { icon: "♥", label: "Like", color: "bg-pink-50 border-pink-100 text-pink-600" },
                ].map((btn) => (
                  <div key={btn.label} className={`rounded-[2rem] p-5 border text-center ${btn.color}`}>
                    <div className="text-3xl mb-2">{btn.icon}</div>
                    <div className="font-black text-sm uppercase tracking-tight">{btn.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Purpose Filters */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-1 pb-4 border-b-2 border-gray-100">
                Using Purpose Filters
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Filters let you narrow results so you only see pets that match your goal. Here's how to open and use them:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { num: "01", title: "Open Filters", desc: "Tap the sliders icon in the top-left corner of the Pets tab." },
                  { num: "02", title: "Choose a Purpose", desc: "Select one: Walk, Playdate, Mating, or Adoption. This is the most important filter — it determines which pet owners are shown to you." },
                  { num: "03", title: "Set Gender Preference", desc: "Choose Male, Female, or Both." },
                  { num: "04", title: "Adjust Distance", desc: "Drag the slider from 0 to 100 km to set your search radius." },
                  { num: "05", title: "Refine by Age & Breed", desc: "Optionally set an age range and preferred breed to narrow further." },
                  { num: "06", title: "Apply", desc: "Tap Apply. The card stack refreshes immediately with your updated results." },
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

            {/* Swiping */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-1 pb-4 border-b-2 border-gray-100">
                Swiping & Liking
              </h2>
              <div className="mt-6 space-y-3">
                {[
                  { action: "Swipe right or tap ♥", result: "Like the pet" },
                  { action: "Swipe left or tap ✕", result: "Pass on the pet" },
                  { action: "Swipe up or tap ★", result: "Send a Super Like" },
                  { action: "Both owners like each other", result: 'A "It\'s a Match!" popup appears' },
                ].map((item) => (
                  <div key={item.action} className="flex items-start gap-4 bg-white border border-gray-100 rounded-[1.5rem] p-5">
                    <span className="w-2 h-2 mt-2 rounded-full bg-brand-gradient flex-shrink-0" style={{ background: "linear-gradient(to right, #E11D48, #FB923C)" }} />
                    <div>
                      <span className="font-black text-ebony text-sm">{item.action}</span>
                      <span className="text-slate-gray text-sm"> — {item.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* When You Match */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-1 pb-4 border-b-2 border-gray-100">
                When You Match
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                When both owners like each other, a <strong className="text-ebony">"It's a Match!"</strong> popup appears showing both pets side by side. The popup has two options:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                  <div className="text-2xl mb-3">💬</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">Say Hi</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">Opens a chat thread with a pre-filled opening message. Hit send or customise it.</p>
                </div>
                <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                  <div className="text-2xl mb-3">🔄</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">Keep Swiping</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">Dismiss the popup and continue browsing. The chat is saved in your Inbox whenever you're ready.</p>
                </div>
              </div>
              <p className="text-slate-gray leading-relaxed mt-6">
                All chats with matches appear in your <strong className="text-ebony">Inbox tab</strong> and stay there until you unmatch or delete.
              </p>
            </section>

            {/* Viewing a Full Profile */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-1 pb-4 border-b-2 border-gray-100">
                Viewing a Full Pet Profile
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap the card <em>without swiping</em> to open the full profile page. You'll see:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "A full photo gallery — swipe left and right to browse all photos",
                  "Full bio and all personality tags",
                  "Pet tab: species, breed, age, gender, size",
                  "Owner tab: owner's name, profile photo, and bio",
                  "A Message button to open a chat directly from the profile",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-1 pb-4 border-b-2 border-gray-100">
                Tips for More Matches
              </h2>
              <div className="mt-8 space-y-5">
                {tips.map((tip) => (
                  <div key={tip.title} className="bg-gray-50 rounded-[2rem] p-6 border-l-4 border-brand-start flex gap-5 items-start">
                    <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <h3 className="font-black text-ebony uppercase tracking-tight mb-2">{tip.title}</h3>
                      <p className="text-sm text-slate-gray leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </article>

        {/* RELATED ARTICLES */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-xl font-black text-ebony uppercase tracking-tighter mb-6">Related Help Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Messaging & Calls", href: "/help-center/messaging", icon: "💬" },
                { title: "Your Profile", href: "/help-center/your-profile", icon: "👤" },
                { title: "Social Feed", href: "/help-center/social-feed", icon: "📸" },
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

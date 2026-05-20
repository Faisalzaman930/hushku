import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Help Center | How to Use Hushku — Guides & FAQs",
  description:
    "Learn how to use every feature of the Hushku pet app. Step-by-step guides for playdate matching, adoption, lost & found, health tracking, shelters, and more.",
  alternates: { canonical: "https://hushku.app/help-center" },
};

const categories = [
  {
    icon: "🐾",
    title: "Playdate Matching",
    href: "/help-center/playdate-matching",
    desc: "Learn how to find compatible pets, use filters, and arrange meetups.",
  },
  {
    icon: "💛",
    title: "Adoption & Fostering",
    href: "/help-center/adoption-fostering",
    desc: "Browse listings, submit requests, and track your adoption status.",
  },
  {
    icon: "🏢",
    title: "Shelters",
    href: "/help-center/shelters",
    desc: "Discover verified shelters, view their pets, and request admission.",
  },
  {
    icon: "🔍",
    title: "Lost & Found",
    href: "/help-center/lost-and-found",
    desc: "Report a missing pet, post a found animal, and mark your pet as home safe.",
  },
  {
    icon: "🩺",
    title: "Health & Care",
    href: "/help-center/health-care",
    desc: "Daily logs, weight tracking, health records, reminders, and more.",
  },
  {
    icon: "📸",
    title: "Social Feed",
    href: "/help-center/social-feed",
    desc: "Post photos and videos, interact with your community, and follow local pets.",
  },
  {
    icon: "💬",
    title: "Messaging & Calls",
    href: "/help-center/messaging",
    desc: "Send messages, voice notes, photos, and make audio or video calls.",
  },
  {
    icon: "👤",
    title: "Your Profile",
    href: "/help-center/your-profile",
    desc: "Set up your owner profile and add your pets.",
  },
];

const popularArticles = [
  { q: "How do I report a lost pet?", href: "/help-center/lost-and-found" },
  { q: "How do I submit an adoption request?", href: "/help-center/adoption-fostering" },
  { q: "How do I set a care reminder?", href: "/help-center/health-care" },
  { q: "How do I start a video call?", href: "/help-center/messaging" },
  { q: "How do I filter playdate matches?", href: "/help-center/playdate-matching" },
  { q: "How do I upload a vaccination record?", href: "/help-center/health-care" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started on Hushku?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download the app on iOS or Android, create your account with your email or OTP, add your owner profile, then add your first pet. Once your pet profile is complete, all features become available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hushku free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All core features are completely free — playdate matching, adoption, fostering, shelters, lost & found, health tracking, and the social feed. Download free on iOS and Android.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Hushku support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email us at hello@hushku.app. We aim to respond within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Hushku for cats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hushku supports dogs, cats, and other pets. All features work for any pet type.",
      },
    },
  ],
};

export default function HelpCenterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-ebony py-24 lg:py-36">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-start/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-end/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              🐾 Hushku Help Center
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-7xl leading-[0.9] mb-6">
              Pet Owner Help Center
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
              Step-by-step guides for every Hushku feature
            </p>
            {/* Static styled search bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search help articles…"
                className="w-full bg-white/10 border border-white/20 rounded-[2.5rem] pl-14 pr-6 py-5 text-white placeholder:text-white/40 outline-none focus:bg-white/15 transition-all"
                readOnly
              />
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Browse by Feature</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">
                What Can We Help With?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 bg-brand-start/10 rounded-[1.5rem] flex items-center justify-center text-2xl mb-6">
                    {cat.icon}
                  </div>
                  <h3 className="font-black text-ebony text-lg uppercase tracking-tight mb-3 group-hover:text-brand-start transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-gray leading-relaxed">{cat.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-black text-brand-start uppercase tracking-widest">
                    Read Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR ARTICLES */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-3">Quick Answers</p>
              <h2 className="text-4xl font-black text-ebony uppercase tracking-tighter sm:text-5xl">
                Popular Articles
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {popularArticles.map((a) => (
                <Link
                  key={a.q}
                  href={a.href}
                  className="group bg-white rounded-[2rem] p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex items-start gap-4"
                >
                  <span className="mt-1 w-8 h-8 bg-brand-start/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-start" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <span className="font-black text-ebony text-sm leading-snug group-hover:text-brand-start transition-colors">
                    {a.q}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* STILL NEED HELP CTA */}
        <section className="py-24 bg-ebony">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-4">Still Need Help?</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter sm:text-5xl mb-6">
              We&apos;re Here for You.
            </h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Reach out and our team will get back to you within 24 hours.
            </p>
            <a
              href="mailto:hello@hushku.app"
              className="inline-flex items-center gap-3 bg-brand-gradient text-white font-black uppercase tracking-widest px-10 py-5 rounded-[2.5rem] shadow-xl hover:opacity-90 transition-opacity"
            >
              ✉️ hello@hushku.app
            </a>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}

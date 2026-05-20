import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Set Up Your Profile on Hushku",
  description:
    "Learn how to create your owner profile, add your pets, and manage your account settings on Hushku.",
  alternates: { canonical: "https://hushku.app/help-center/your-profile" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to add a pet to use the app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A pet profile is required to access the playdate matching and social features. You can browse adoption and lost & found without a pet profile.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add multiple pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There's no limit on how many pets you can add to one account.",
      },
    },
    {
      "@type": "Question",
      name: "How do I delete my account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to Profile → Settings → Delete Account. All your data is permanently deleted within 30 days. This action cannot be undone.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my email address?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact hello@hushku.app to request an email change. We'll verify your identity and update it for you.",
      },
    },
  ],
};

export default function YourProfilePage() {
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
              <span className="text-white/80">Your Profile</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              👤 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              Your Profile
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Create your account, set up your owner profile, add your pets, and manage your settings.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Creating Account */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Creating Your Account
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { num: "01", title: "Download Hushku", desc: "Get the app from the App Store (iOS) or Google Play (Android). It's free." },
                  { num: "02", title: 'Tap "Get Started"', desc: "Open the app and tap Get Started on the welcome screen." },
                  { num: "03", title: "Enter Your Email", desc: "Enter your email address. You'll receive a one-time passcode (OTP)." },
                  { num: "04", title: "Verify with OTP", desc: "Enter the 6-digit code from your email. You're now logged in." },
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

            {/* Owner Profile */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Setting Up Your Owner Profile
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                After logging in, you'll be prompted to complete your owner profile. Fill in:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Display name", note: "How other users see you" },
                  { field: "Profile photo", note: "Tap the circle to upload from your gallery" },
                  { field: "Short bio", note: "Optional — tell others about yourself and your pets" },
                  { field: "Location", note: "City or neighbourhood — used to show you nearby pets and owners" },
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
                Tap <strong className="text-ebony">"Save"</strong> to continue.
              </p>
            </section>

            {/* Adding First Pet */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Adding Your First Pet
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                You must add at least one pet to use matching and other features. Tap <strong className="text-ebony">"Add a Pet"</strong> (or the + icon on the Pets screen). Fill in:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Pet name", note: "" },
                  { field: "Species", note: "Dog, Cat, or Other" },
                  { field: "Breed", note: "Searchable dropdown" },
                  { field: "Age", note: "In years and months" },
                  { field: "Gender", note: "Male or Female — affects which features are available" },
                  { field: "Personality tags", note: "Select from a list: Friendly, Energetic, Calm, Playful, and more" },
                  { field: "Photos", note: "Add at least one — tap the + boxes to upload from gallery" },
                  { field: "Bio", note: 'Optional — e.g., "Much wow. Very walk."' },
                ].map((item) => (
                  <div key={item.field} className="bg-white border border-gray-100 rounded-[1.5rem] p-5 flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    <div>
                      <span className="font-black text-ebony text-sm">{item.field}</span>
                      {item.note && <span className="text-slate-gray text-sm"> — {item.note}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap <strong className="text-ebony">"Save"</strong>. Your pet profile is live and all features are now available.
              </p>
            </section>

            {/* Adding More Pets */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Adding More Pets
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Go to your <strong className="text-ebony">Profile tab</strong> and tap <strong className="text-ebony">"Add Another Pet"</strong>. Repeat the same process. You can have multiple pets on one account and switch between them in the Today dashboard and matching screens.
              </p>
            </section>

            {/* Editing */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Editing Your Profile
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap the <strong className="text-ebony">Profile tab</strong>, then tap the edit (pencil) icon on your profile card or a pet card to update any details. Changes save immediately.
              </p>
            </section>

            {/* Account Settings */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Account Settings
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                From the Profile tab, tap the settings (gear) icon to access:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🔔", label: "Notification preferences", desc: "Control which alerts you receive and how." },
                  { icon: "📍", label: "Location settings", desc: "Update your location or adjust precision." },
                  { icon: "🔒", label: "Privacy settings", desc: "Control who can see your profile and posts." },
                  { icon: "🗑️", label: "Delete account", desc: "Permanently remove your account and all data within 30 days." },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100 flex gap-4 items-start">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-black text-ebony text-sm uppercase tracking-tight mb-1">{item.label}</h3>
                      <p className="text-xs text-slate-gray leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-red-50 rounded-[2rem] p-6 border-l-4 border-red-400">
                <p className="text-sm text-slate-gray leading-relaxed">
                  ⚠️ <strong className="text-ebony">Account deletion is permanent.</strong> All your data — pet profiles, matches, messages, and health records — will be deleted within 30 days and cannot be recovered.
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
                { title: "Playdate Matching", href: "/help-center/playdate-matching", icon: "🐾" },
                { title: "Health & Care", href: "/help-center/health-care", icon: "🩺" },
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

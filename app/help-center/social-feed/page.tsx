import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Use the Hushku Social Feed",
  description:
    "Learn how to post photos and videos, interact with other pet owners, and follow your local pet community on Hushku.",
  alternates: { canonical: "https://hushku.app/help-center/social-feed" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who can see my posts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your posts are visible to other Hushku users, primarily those near your location. The feed is location-weighted, so local owners see your posts more prominently.",
      },
    },
    {
      "@type": "Question",
      name: "Can I delete a post?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tap the three-dot menu (⋯) on your own post and select Delete. Deleted posts are removed immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Why can't I upload a video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Videos must be under 60 seconds and 50 MB. If your video is larger, trim it in your phone's camera roll before uploading.",
      },
    },
  ],
};

export default function SocialFeedPage() {
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
              <span className="text-white/80">Social Feed</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              📸 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              Social Feed
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Post photos and videos, like and comment on your neighbours' pets, and stay connected with your local pet community.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Viewing the Feed */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Viewing the Feed
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Swipe to the <strong className="text-ebony">Feed tab</strong> (middle position in the navigation bar). You'll see posts from pet owners near you — photos, videos, and captions. Each post shows:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Author's avatar and display name",
                  "Location (city or neighbourhood)",
                  "Which pet the post is about",
                  "The media (photo or video)",
                  "Caption, likes count, and comments count",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Creating a Post */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Creating a Post
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap the <strong className="text-ebony">"+ Create"</strong> floating button at the bottom of the feed. A form slides up with these fields:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Caption", note: "Write anything about your pet — a character limit is shown" },
                  { field: "Pet selector", note: "Choose which of your pets this post is about" },
                  { field: "Media", note: "Tap the photo icon to pick from gallery, or camera icon to record a video (up to 60 seconds, max 50 MB)" },
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
                Tap <strong className="text-ebony">"Post"</strong>. Your post appears on the feed immediately.
              </p>
            </section>

            {/* Supported Media */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Supported Media
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                  <div className="text-2xl mb-3">🖼️</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">Photos</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">JPEG, PNG, and WebP formats are supported.</p>
                </div>
                <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                  <div className="text-2xl mb-3">🎬</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">Videos</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">MP4 and MOV — up to 60 seconds and 50 MB. Videos auto-play silently when scrolled into view.</p>
                </div>
              </div>
            </section>

            {/* Interactions */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Interacting with Posts
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: "❤️",
                    title: "Liking a Post",
                    desc: "Tap the heart icon below any post to like it. Tap again to unlike. You can also double-tap the photo to like.",
                  },
                  {
                    icon: "💬",
                    title: "Commenting",
                    desc: "Tap the chat bubble icon to open comments. Type your comment in the input at the bottom and tap \"Post comment\". Comments appear in real time.",
                  },
                  {
                    icon: "↗️",
                    title: "Sharing",
                    desc: "Tap the share icon to share a post via your phone's native share sheet — message, email, copy link, and more.",
                  },
                  {
                    icon: "🔖",
                    title: "Saving",
                    desc: "Tap the bookmark icon to save a post to your bookmarks collection. Access saved posts from your profile.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-[2rem] p-6 border-l-4 border-brand-start flex gap-5 items-start">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-black text-ebony uppercase tracking-tight mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-gray leading-relaxed">{item.desc}</p>
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
                { title: "Playdate Matching", href: "/help-center/playdate-matching", icon: "🐾" },
                { title: "Lost & Found", href: "/help-center/lost-and-found", icon: "🔍" },
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

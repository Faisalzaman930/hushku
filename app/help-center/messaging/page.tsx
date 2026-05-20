import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Message, Call & Send Voice Notes on Hushku",
  description:
    "Learn how to send messages, photos, voice notes, and make audio or video calls on Hushku.",
  alternates: { canonical: "https://hushku.app/help-center/messaging" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I message someone before we match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Messaging is only available between matched users or users connected through an adoption/fostering request.",
      },
    },
    {
      "@type": "Question",
      name: "Are my messages private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Messages are only visible to you and the person you're chatting with. Hushku does not read private messages for advertising purposes. Messages may be reviewed if reported for abuse.",
      },
    },
    {
      "@type": "Question",
      name: "How long are messages stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Messages are stored as long as your account is active. They are permanently deleted within 30 days of account deletion.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do if someone is sending inappropriate messages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Tap the three-dot menu (⋯) at the top of the chat and select "Report" or "Block". Reported users are reviewed by the Hushku team.',
      },
    },
  ],
};

export default function MessagingPage() {
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
              <span className="text-white/80">Messaging & Calls</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              💬 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              Messaging & Calls
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Everything you need to communicate — text, photos, voice notes, audio calls, and video calls.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Opening a Chat */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Opening a Chat
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Go to the <strong className="text-ebony">Inbox tab</strong>. Tap any conversation to open it. Chats are created automatically when you match with another pet owner. You can also start a chat by tapping <strong className="text-ebony">"Message"</strong> from inside a pet profile or adoption listing.
              </p>
            </section>

            {/* Text Messages */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Sending a Text Message
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Type your message in the input field at the bottom of the chat. Tap the send button (arrow icon). Message status indicators:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { icon: "✓", label: "Single checkmark", desc: "Message sent to the server" },
                  { icon: "✓✓", label: "Double checkmark", desc: "Message delivered to the recipient's device" },
                  { icon: "✓✓", label: "Blue double checkmark", desc: "Message read by the recipient" },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-gray-100 rounded-[1.5rem] p-5 flex items-center gap-4">
                    <span className="font-black text-brand-start text-sm w-8 text-center flex-shrink-0">{item.icon}</span>
                    <div>
                      <span className="font-black text-ebony text-sm">{item.label}</span>
                      <span className="text-slate-gray text-sm"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Photos & Videos */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Sending Photos & Videos
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                  <div className="text-2xl mb-3">🖼️</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">Photos</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">Tap the photo icon (left of the text input) to open your gallery. Select a photo. It uploads and appears as a message in the thread.</p>
                </div>
                <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                  <div className="text-2xl mb-3">🎬</div>
                  <h3 className="font-black text-ebony uppercase tracking-tight mb-2">Videos</h3>
                  <p className="text-sm text-slate-gray leading-relaxed">Tap the camera icon to pick a video from your gallery. Videos are auto-compressed before sending. Tap the play button in the chat to watch.</p>
                </div>
              </div>
            </section>

            {/* Voice Notes */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Voice Notes
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  { num: "01", title: "Tap the Microphone Icon", desc: "The recording interface appears with a red record button and a timer." },
                  { num: "02", title: "Start Recording", desc: "Tap the red button to start recording — up to approximately 30 seconds." },
                  { num: "03", title: "Preview", desc: "When done, a preview plays automatically so you can hear it before sending." },
                  { num: "04", title: "Send or Cancel", desc: "Tap the send button to send the voice note, or the X to discard it." },
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
              <p className="text-slate-gray leading-relaxed mt-6">
                Recipients see an audio player with a play button, duration, and waveform visualisation.
              </p>
            </section>

            {/* Audio Calls */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Audio Calls
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap the <strong className="text-ebony">phone icon</strong> at the top right of any chat to start an audio call. The other person receives a ringing notification and taps Accept to connect. During the call you have:
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: "🔇", label: "Mute" },
                  { icon: "🔊", label: "Speaker" },
                  { icon: "📵", label: "End Call" },
                ].map((btn) => (
                  <div key={btn.label} className="bg-gray-50 rounded-[2rem] p-5 border border-gray-100 text-center">
                    <div className="text-2xl mb-2">{btn.icon}</div>
                    <div className="font-black text-ebony text-xs uppercase tracking-tight">{btn.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Calls */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Video Calls
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap the <strong className="text-ebony">video icon</strong> at the top right of any chat. The same flow as audio calls applies — the other person receives a ringing notification and taps Accept to connect. During the call you have a live video feed plus:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Switch front/back camera button",
                  "Mute microphone button",
                  "End call button",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-gray text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-start flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Online Status */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Online Status
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                A <strong className="text-green-600">green dot</strong> next to someone's name means they are currently active in the app. This updates in real time and disappears when they leave the app.
              </p>
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
                { title: "Adoption & Fostering", href: "/help-center/adoption-fostering", icon: "💛" },
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

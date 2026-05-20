import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "How to Use Hushku's Health & Care Tracker",
  description:
    "Complete guide to Hushku's health features — daily care logs, care reminders, weight tracker, health records, flea & tick tracker, and heat cycle tracker.",
  alternates: { canonical: "https://hushku.app/help-center/health-care" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do care logs reset every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fed, Watered, and Poop logs reset at midnight each day. Your previous logs are saved in history so you can look back at any date.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get reminder notifications if the app is closed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Care reminders are delivered as system push notifications. As long as Hushku has notification permission on your device, reminders arrive even when the app is in the background or closed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use health features for multiple pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each pet has their own Today dashboard, health records, weight log, and trackers. Switch between pets from the pet selector at the top of the Today tab.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Heat Cycle tracker only for dogs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It works for any female pet with a heat cycle — dogs, cats, rabbits, and others. It only appears for pets you've marked as female in their profile.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upload PDF documents for health records?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When adding a Vaccination, Lab Report, or Other record, tap the upload button to attach a photo or PDF directly from your phone.",
      },
    },
  ],
};

export default function HealthCarePage() {
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
              <span className="text-white/80">Health & Care</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🩺 Feature Guide
            </span>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter sm:text-6xl leading-[0.9]">
              Health & Care Tracker
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">
              Everything you need to track your pet's daily care, health records, weight, reminders, and more.
            </p>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">

            {/* Daily Care Log */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Daily Care Log — Fed, Watered, Poop
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                The <strong className="text-ebony">Today tab</strong> is your daily dashboard. At the top is a progress bar showing how many care tasks you've completed today. Below are four quick-action buttons:
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: "🍽️", label: "Fed" },
                  { icon: "💧", label: "Watered" },
                  { icon: "💩", label: "Poop" },
                  { icon: "🔔", label: "Remind" },
                ].map((btn) => (
                  <div key={btn.label} className="bg-gray-50 rounded-[2rem] p-5 border border-gray-100 text-center">
                    <div className="text-3xl mb-2">{btn.icon}</div>
                    <div className="font-black text-ebony text-sm uppercase tracking-tight">{btn.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap any button to log that care task instantly — it's timestamped and added to today's activity log, and the progress bar updates. You can log each action multiple times per day (e.g., if you feed your pet twice).
              </p>
            </section>

            {/* Care Reminders */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Care Reminders
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap the <strong className="text-ebony">Remind</strong> button on the Today dashboard. A form slides up with these fields:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Reminder type", note: "Walk, Feeding, Water, Medication, Vaccination, Vet, or Other" },
                  { field: "Title", note: 'e.g., "Evening Walk" or "Flea treatment"' },
                  { field: "Date", note: "When the reminder should fire" },
                  { field: "Time", note: "Specific time for the alert" },
                  { field: "Repeat", note: "None, Daily, Weekly, or Monthly" },
                  { field: "Notes", note: "Optional — any extra context" },
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
                Tap <strong className="text-ebony">"Save Reminder"</strong>. A local notification is scheduled — you'll receive an alert at the set time even if the app is closed. Tap the notification to be taken straight to the Today dashboard.
              </p>
            </section>

            {/* Weight Tracker */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Weight Tracker
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Navigate to the <strong className="text-ebony">Weight Tracker</strong> screen from the Today dashboard. Tap <strong className="text-ebony">"+ Add Weight"</strong>. Fill in:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Weight", note: "Enter the number" },
                  { field: "Unit", note: "kg or lb" },
                  { field: "Date", note: "Defaults to today — tap to change" },
                  { field: "Notes", note: 'Optional — e.g., "After vet visit"' },
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
                Tap <strong className="text-ebony">"Save Entry"</strong>. Your entry is added to the log and the trend chart updates. The chart shows your pet's weight over time — you can spot gradual gain or loss at a glance.
              </p>
            </section>

            {/* Health Records */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Health Records
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Navigate to <strong className="text-ebony">Health Records</strong>. Tap <strong className="text-ebony">"+ Add Record"</strong>. Choose a record type:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { type: "Vaccination", icon: "💉", desc: "Vaccine name, date, provider, next due date, and optional certificate upload." },
                  { type: "Vet Visit", icon: "🏥", desc: "Date, reason, vet name/clinic, and notes." },
                  { type: "Medication", icon: "💊", desc: "Medication name, dosage, start date, and end date." },
                  { type: "Lab Report", icon: "🧪", desc: "Upload a document (PDF or photo) with date and notes." },
                  { type: "Other", icon: "📄", desc: "Free-form record with title, date, and optional file upload." },
                ].map((item) => (
                  <div key={item.type} className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100 flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-black text-ebony uppercase tracking-tight mb-1">{item.type}</h3>
                      <p className="text-sm text-slate-gray leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-gray leading-relaxed mt-6">
                Tap <strong className="text-ebony">"Save Record"</strong>. Records are stored permanently and grouped by type. Tap any record to view or edit it.
              </p>
            </section>

            {/* Flea & Tick */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Flea & Tick Tracker
              </h2>
              <p className="text-slate-gray leading-relaxed mt-6">
                Navigate to <strong className="text-ebony">Flea & Tick</strong>. Tap <strong className="text-ebony">"+ Log Treatment"</strong>. Fill in:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Treatment product name", note: 'e.g., "Frontline Plus" or "Bravecto"' },
                  { field: "Application date", note: "When you applied the treatment" },
                  { field: "Repeat interval", note: "Monthly (30 days), Every 2 months (60 days), or Every 3 months (90 days)" },
                  { field: "Notes", note: "Optional — any extra details" },
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
                Tap <strong className="text-ebony">"Save Treatment"</strong>. Hushku automatically calculates the next due date and schedules a push reminder. Your treatment history is saved and visible as a list.
              </p>
            </section>

            {/* Heat Cycle */}
            <section>
              <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter pb-4 border-b-2 border-gray-100">
                Heat Cycle Tracker
              </h2>
              <div className="mb-4 bg-amber-50 rounded-[2rem] p-5 border border-amber-100 text-sm text-amber-800 font-medium mt-6">
                This feature only appears for pets you&apos;ve marked as <strong>female</strong> in their profile.
              </div>
              <p className="text-slate-gray leading-relaxed">
                Navigate to <strong className="text-ebony">Heat Cycle</strong>. Tap <strong className="text-ebony">"+ Log Cycle"</strong>. Fill in:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { field: "Start date", note: "When the cycle began" },
                  { field: "Symptoms", note: "Select all that apply: Swelling, Spotting, Restless behaviour, More affectionate, Appetite change, Frequent urination" },
                  { field: "Notes", note: "Optional — any extra observations" },
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
                Tap <strong className="text-ebony">"Save Cycle"</strong>. Hushku calculates the cycle duration and updates your next cycle prediction based on your history. The tracker screen shows your last cycle date, estimated next cycle date, and a full cycle history timeline.
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
                { title: "Your Profile", href: "/help-center/your-profile", icon: "👤" },
                { title: "Playdate Matching", href: "/help-center/playdate-matching", icon: "🐾" },
                { title: "Shelters", href: "/help-center/shelters", icon: "🏢" },
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

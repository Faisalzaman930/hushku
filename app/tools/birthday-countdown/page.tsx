import Link from "next/link";
import PetBirthdayCountdown from "./PetBirthdayCountdown";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Birthday Countdown", item: "https://hushku.app/tools/birthday-countdown" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Birthday Countdown",
  url: "https://hushku.app/tools/birthday-countdown",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: "Why should I track my pet's birthday?", a: "Tracking your pet's birthday helps you plan annual wellness visits timed around their birthday, ensure vaccinations and preventive treatments stay current, and monitor health changes between yearly milestones. Many veterinary practices recommend scheduling annual wellness checks around the pet's birthday as an easy-to-remember anchor. Beyond the practical, marking pet birthdays is associated with higher rates of preventive care adherence — owners who mark the occasion are more likely to book the annual vet check." },
  { q: 'What are key milestone ages for dogs?', a: 'Key canine milestones: 6–9 months (sexual maturity, typically when neutering is recommended), 1 year (adult for small and medium breeds), 2 years (adult for large breeds), 7 years (senior for large breeds — increase vet visits to biannual), 10–12 years (geriatric for most breeds, biannual blood panels strongly recommended). Giant breeds age faster: senior status from 5–6 years.' },
  { q: 'What are key milestone ages for cats?', a: "Key feline milestones: 6 months (sexual maturity), 1 year (adult), 10 years (mature/middle-aged — the AAFP classifies 7–10 as 'mature'), 11 years (senior — biannual wellness recommended), 15 years (geriatric — comprehensive twice-yearly panels including kidney function, thyroid, blood pressure). Indoor cats regularly reach 16–20 years with good preventive care." },
  { q: 'Can I track multiple pets?', a: "Yes — Hushku's health tracking feature supports multiple pets on a single account. Each pet has their own profile, birthday, and health log. Create profiles for all your pets and get reminders for each one's birthday and upcoming care events through the app." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PetBirthdayCountdown />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Track your pet's next birthday with a live countdown timer. Enter your pet's name, species, and date of birth — the calculator shows the exact days, hours, and minutes until their next birthday, along with their current age and upcoming milestone years. Use it as a fun reminder tool, share it with friends, or track multiple pets simultaneously.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key="Why should I track my pet's birthday?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Why should I track my pet's birthday?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Tracking your pet's birthday helps you plan annual wellness visits timed around their birthday, ensure vaccinations and preventive treatments stay current, and monitor health changes between yearly milestones. Many veterinary practices recommend scheduling annual wellness checks around the pet's birthday as an easy-to-remember anchor. Beyond the practical, marking pet birthdays is associated with higher rates of preventive care adherence — owners who mark the occasion are more likely to book the annual vet check.</p>
          </div>
          <div key='What are key milestone ages for dogs?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are key milestone ages for dogs?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Key canine milestones: 6–9 months (sexual maturity, typically when neutering is recommended), 1 year (adult for small and medium breeds), 2 years (adult for large breeds), 7 years (senior for large breeds — increase vet visits to biannual), 10–12 years (geriatric for most breeds, biannual blood panels strongly recommended). Giant breeds age faster: senior status from 5–6 years.</p>
          </div>
          <div key='What are key milestone ages for cats?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are key milestone ages for cats?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Key feline milestones: 6 months (sexual maturity), 1 year (adult), 10 years (mature/middle-aged — the AAFP classifies 7–10 as 'mature'), 11 years (senior — biannual wellness recommended), 15 years (geriatric — comprehensive twice-yearly panels including kidney function, thyroid, blood pressure). Indoor cats regularly reach 16–20 years with good preventive care.</p>
          </div>
          <div key='Can I track multiple pets?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Can I track multiple pets?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — Hushku's health tracking feature supports multiple pets on a single account. Each pet has their own profile, birthday, and health log. Create profiles for all your pets and get reminders for each one's birthday and upcoming care events through the app.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health" href="/health" className="text-brand-start font-bold hover:underline text-sm">/health →</Link>
          <Link key="/health/reminders" href="/health/reminders" className="text-brand-start font-bold hover:underline text-sm">/health/reminders →</Link>
          <Link key="/tools/age-calculator" href="/tools/age-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/age-calculator →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

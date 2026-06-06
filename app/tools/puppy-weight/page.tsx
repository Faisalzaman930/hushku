import Link from "next/link";
import PuppyWeightPredictor from "./PuppyWeightPredictor";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Puppy Weight", item: "https://hushku.app/tools/puppy-weight" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Puppy Weight",
  url: "https://hushku.app/tools/puppy-weight",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: "How do I predict my puppy's adult weight?", a: "The simplest approach: for large breeds, take current weight in pounds, divide by the puppy's age in weeks, and multiply by 52. A 10 lb puppy at 10 weeks: (10 ÷ 10) × 52 = 52 lbs adult. For small breeds, adult weight is roughly double the 8-week weight. For medium breeds, weigh at 14 weeks and multiply by 2.5. These are approximations — parent sizes are the most reliable predictor for purebreds." },
  { q: 'At what age is a puppy fully grown?', a: 'Small breeds (under 10 lbs adult) are fully grown at 8–10 months. Medium breeds (10–50 lbs) at 12–14 months. Large breeds (50–100 lbs) at 15–18 months. Giant breeds (over 100 lbs — Great Dane, Saint Bernard, Mastiff) continue growing until 18–24 months. Growth plate closure, not simply reaching adult weight, marks true skeletal maturity — this is why high-impact exercise is restricted in large and giant breeds until 18 months.' },
  { q: 'Are mixed breed puppies harder to predict?', a: 'Yes. For mixed breeds, breed size composition drives the estimate — if both parents are known, averaging their adult weights gives a reasonable target. DNA breed test results (Embark, Wisdom Panel) provide breed composition that improves estimates. Without parent information, weight at 16 weeks is a reasonable predictor: adult weight is typically 3–4× the 16-week weight for medium dogs.' },
  { q: 'Why does growth rate matter for large breed puppies?', a: 'Rapid growth in large and giant breed puppies is a documented risk factor for developmental orthopaedic diseases including osteochondrosis (OCD), hip dysplasia, and elbow dysplasia. The Orthopedic Foundation for Animals (OFA) recommends feeding large breed puppies a diet formulated specifically for large breed growth — with controlled calcium and calorie levels — to avoid accelerated bone development. Overfeeding a large breed puppy is more harmful than overfeeding a small breed.' },
  { q: 'How often should I weigh my puppy?', a: "Weekly weigh-ins during the first 6 months, then monthly until adulthood. Weight is most reliably measured at the same time of day (before morning feeding) on the same scale. A consistent slight upward trend is healthy; rapid weight gain or any weight loss warrants a veterinary discussion. Log weights in Hushku's health tracker to maintain a growth chart over time." },
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

      <PuppyWeightPredictor />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Predicting adult size from puppy weight helps owners plan appropriately for food costs, housing space, and equipment sizing. The calculation uses breed size category (small, medium, large, giant) and applies published growth curve data: small breeds typically reach adult weight by 8–10 months; medium breeds by 12–14 months; large breeds by 15–18 months; giant breeds by 18–24 months.
  The most widely used formula for large and giant breeds is the <strong>Purina formula</strong>: adult weight ≈ (current weight ÷ age in weeks) × 52. Results are estimates — individual variation within breed size categories is significant.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key="How do I predict my puppy's adult weight?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I predict my puppy's adult weight?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The simplest approach: for large breeds, take current weight in pounds, divide by the puppy's age in weeks, and multiply by 52. A 10 lb puppy at 10 weeks: (10 ÷ 10) × 52 = 52 lbs adult. For small breeds, adult weight is roughly double the 8-week weight. For medium breeds, weigh at 14 weeks and multiply by 2.5. These are approximations — parent sizes are the most reliable predictor for purebreds.</p>
          </div>
          <div key='At what age is a puppy fully grown?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">At what age is a puppy fully grown?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Small breeds (under 10 lbs adult) are fully grown at 8–10 months. Medium breeds (10–50 lbs) at 12–14 months. Large breeds (50–100 lbs) at 15–18 months. Giant breeds (over 100 lbs — Great Dane, Saint Bernard, Mastiff) continue growing until 18–24 months. Growth plate closure, not simply reaching adult weight, marks true skeletal maturity — this is why high-impact exercise is restricted in large and giant breeds until 18 months.</p>
          </div>
          <div key='Are mixed breed puppies harder to predict?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Are mixed breed puppies harder to predict?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes. For mixed breeds, breed size composition drives the estimate — if both parents are known, averaging their adult weights gives a reasonable target. DNA breed test results (Embark, Wisdom Panel) provide breed composition that improves estimates. Without parent information, weight at 16 weeks is a reasonable predictor: adult weight is typically 3–4× the 16-week weight for medium dogs.</p>
          </div>
          <div key='Why does growth rate matter for large breed puppies?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Why does growth rate matter for large breed puppies?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Rapid growth in large and giant breed puppies is a documented risk factor for developmental orthopaedic diseases including osteochondrosis (OCD), hip dysplasia, and elbow dysplasia. The Orthopedic Foundation for Animals (OFA) recommends feeding large breed puppies a diet formulated specifically for large breed growth — with controlled calcium and calorie levels — to avoid accelerated bone development. Overfeeding a large breed puppy is more harmful than overfeeding a small breed.</p>
          </div>
          <div key='How often should I weigh my puppy?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How often should I weigh my puppy?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Weekly weigh-ins during the first 6 months, then monthly until adulthood. Weight is most reliably measured at the same time of day (before morning feeding) on the same scale. A consistent slight upward trend is healthy; rapid weight gain or any weight loss warrants a veterinary discussion. Log weights in Hushku's health tracker to maintain a growth chart over time.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/tools/exercise-calculator" href="/tools/exercise-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/exercise-calculator →</Link>
          <Link key="/health/weight-tracker" href="/health/weight-tracker" className="text-brand-start font-bold hover:underline text-sm">/health/weight-tracker →</Link>
          <Link key="/resources/complete-guide-to-puppy-care" href="/resources/complete-guide-to-puppy-care" className="text-brand-start font-bold hover:underline text-sm">/resources/complete-guide-to-puppy-care →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

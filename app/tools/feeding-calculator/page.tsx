import Link from "next/link";
import PetFeedingCalculator from "./PetFeedingCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Feeding Calculator", item: "https://hushku.app/tools/feeding-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Feeding Calculator",
  url: "https://hushku.app/tools/feeding-calculator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How much should I feed my dog per day?', a: "Daily feeding amounts depend on your dog's weight, age, activity level, and the caloric density of the food. As a baseline: a 10 kg adult neutered dog at maintenance activity needs roughly 700 kcal/day. Dry kibble typically provides 300–400 kcal per 100g; wet food 70–100 kcal per 100g (85g tin). Always check the specific caloric content on your food label and calculate from that — never rely solely on the bag's feeding guide. Weigh food with a kitchen scale rather than using cups, which can vary by 20–30%." },
  { q: 'How many times a day should I feed my dog?', a: 'Adult dogs (over 12 months) do well with two meals daily. Puppies under 12 weeks need 4 meals per day; 12 weeks to 6 months need 3 meals; 6–12 months need 2–3 meals. Splitting the daily ration into two meals reduces hunger, stabilises blood sugar, and decreases the risk of bloat (Gastric Dilatation-Volvulus) in large and deep-chested breeds, which are at highest risk when fed one large meal. Breeds prone to bloat include Great Danes, German Shepherds, Dobermans, and Standard Poodles.' },
  { q: 'How much should I feed my cat?', a: 'An average 4 kg adult indoor neutered cat needs approximately 180–220 kcal/day, split into 2–4 small meals (cats are natural grazers). Free-feeding dry food leads to overconsumption in most cats. Measured wet food meals are preferable for weight management and urinary health. The exact amount depends on the caloric density of the specific food — check the label for kcal per 100g or per tin and calculate accordingly.' },
  { q: 'Should I feed my dog once or twice a day?', a: 'Twice daily is the veterinary consensus recommendation for adult dogs for the reasons above. Some owners prefer once daily; this is acceptable for most small and medium breeds but increases bloat risk in large, deep-chested breeds. Regardless of frequency, total daily calories should remain the same — splitting into multiple meals does not mean feeding more.' },
  { q: 'What is the difference between feeding for weight loss vs maintenance?', a: 'Weight loss in pets requires feeding approximately 80% of the RER (Resting Energy Requirement) rather than the full maintenance level (typically 1.4–1.8× RER). This is a modest caloric restriction that produces safe, gradual weight loss of approximately 1–2% of body weight per week — the rate recommended by veterinary nutritionists to preserve lean muscle mass. Rapid weight restriction (below 60–70% RER) should only be attempted under veterinary supervision, particularly in cats where it risks hepatic lipidosis.' },
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

      <PetFeedingCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Portion sizes on pet food packaging are notoriously overestimated — manufacturers have a commercial incentive to recommend higher amounts, and the ranges given are typically based on unspayed/unneutered animals at maintenance activity. This calculator provides feeding amounts based on your pet's actual weight, age, reproductive status, and activity level — adjusted for the caloric density of common food types.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How much should I feed my dog per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much should I feed my dog per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Daily feeding amounts depend on your dog's weight, age, activity level, and the caloric density of the food. As a baseline: a 10 kg adult neutered dog at maintenance activity needs roughly 700 kcal/day. Dry kibble typically provides 300–400 kcal per 100g; wet food 70–100 kcal per 100g (85g tin). Always check the specific caloric content on your food label and calculate from that — never rely solely on the bag's feeding guide. Weigh food with a kitchen scale rather than using cups, which can vary by 20–30%.</p>
          </div>
          <div key='How many times a day should I feed my dog?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How many times a day should I feed my dog?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Adult dogs (over 12 months) do well with two meals daily. Puppies under 12 weeks need 4 meals per day; 12 weeks to 6 months need 3 meals; 6–12 months need 2–3 meals. Splitting the daily ration into two meals reduces hunger, stabilises blood sugar, and decreases the risk of bloat (Gastric Dilatation-Volvulus) in large and deep-chested breeds, which are at highest risk when fed one large meal. Breeds prone to bloat include Great Danes, German Shepherds, Dobermans, and Standard Poodles.</p>
          </div>
          <div key='How much should I feed my cat?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much should I feed my cat?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">An average 4 kg adult indoor neutered cat needs approximately 180–220 kcal/day, split into 2–4 small meals (cats are natural grazers). Free-feeding dry food leads to overconsumption in most cats. Measured wet food meals are preferable for weight management and urinary health. The exact amount depends on the caloric density of the specific food — check the label for kcal per 100g or per tin and calculate accordingly.</p>
          </div>
          <div key='Should I feed my dog once or twice a day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Should I feed my dog once or twice a day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Twice daily is the veterinary consensus recommendation for adult dogs for the reasons above. Some owners prefer once daily; this is acceptable for most small and medium breeds but increases bloat risk in large, deep-chested breeds. Regardless of frequency, total daily calories should remain the same — splitting into multiple meals does not mean feeding more.</p>
          </div>
          <div key='What is the difference between feeding for weight loss vs maintenance?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the difference between feeding for weight loss vs maintenance?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Weight loss in pets requires feeding approximately 80% of the RER (Resting Energy Requirement) rather than the full maintenance level (typically 1.4–1.8× RER). This is a modest caloric restriction that produces safe, gradual weight loss of approximately 1–2% of body weight per week — the rate recommended by veterinary nutritionists to preserve lean muscle mass. Rapid weight restriction (below 60–70% RER) should only be attempted under veterinary supervision, particularly in cats where it risks hepatic lipidosis.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/tools/water-calculator" href="/tools/water-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/water-calculator →</Link>
          <Link key="/tools/pet-bmi" href="/tools/pet-bmi" className="text-brand-start font-bold hover:underline text-sm">/tools/pet-bmi →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

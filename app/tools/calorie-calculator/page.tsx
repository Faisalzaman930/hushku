import Link from "next/link";
import PetCalorieCalculator from "./PetCalorieCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Calorie Calculator", item: "https://hushku.app/tools/calorie-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calorie Calculator",
  url: "https://hushku.app/tools/calorie-calculator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How many calories should my dog eat per day?', a: 'A healthy adult neutered dog needs approximately 1.6 × RER calories per day, where RER = 70 × (weight in kg)^0.75. A 10 kg neutered adult dog needs roughly 70 × 10^0.75 × 1.6 ≈ 700 kcal/day. Puppies under 4 months need 3× RER. Active or working dogs need 2–2.5× RER. These are maintenance targets — always adjust based on body condition score, not just weight.' },
  { q: 'How many calories should my cat eat per day?', a: 'An average adult indoor neutered cat weighing 4 kg needs approximately 180–220 kcal/day. The RER for a 4 kg cat is 70 × 4^0.75 ≈ 235 kcal, multiplied by a factor of 0.8–1.0 for inactive indoor cats. Wet food typically provides 70–100 kcal per 85g serving; dry food provides 300–400 kcal per 100g. Measuring both is critical — most owners underestimate by 20–30%.' },
  { q: "Do treats count toward my pet's daily calorie intake?", a: "Yes — treats should account for no more than 10% of your pet's total daily calorie intake, according to WSAVA guidelines. A single medium dog biscuit can be 40–60 kcal. For a 10 kg dog on 700 kcal/day, the 10% limit is 70 kcal — roughly one or two small treats. This is a commonly overlooked cause of gradual weight gain." },
  { q: 'What is RER and why does it matter?', a: 'RER (Resting Energy Requirement) is the energy a pet needs while at complete rest to maintain normal physiological functions — breathing, circulation, digestion, temperature regulation. It is the baseline from which all other caloric targets are calculated using life-stage multipliers. The formula 70 × (weight in kg)^0.75 is derived from metabolic scaling research and is the standard used by WSAVA, AAHA, and the European College of Veterinary and Comparative Nutrition (ECVCN).' },
  { q: 'How do I know if my dog or cat is overweight?', a: 'The Body Condition Score (BCS) is more informative than weight alone. On the 1–9 scale used by WSAVA, a score of 4–5 is ideal. Signs of healthy weight: you can feel but not see the ribs, there is a visible waist when viewed from above, and the abdomen tucks up when viewed from the side. If ribs are hard to feel, the waist is not visible, or there is obvious abdominal rounding, the animal is likely overweight. Our Pet BMI & Body Condition Checker provides a structured assessment.' },
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

      <PetCalorieCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">The Hushku Pet Calorie Calculator uses the Resting Energy Requirement (RER) formula established in the <strong>WSAVA/AAHA Nutritional Guidelines</strong>: RER = 70 × (body weight in kg)<sup>0.75</sup>. This baseline is then multiplied by a life-stage factor — ranging from 1.0 for weight-loss programmes to 3.0 for puppies under 4 months — to produce a daily caloric target. Over 60% of dogs and 56% of cats in the US are currently overweight or obese, according to the <strong>Association for Pet Obesity Prevention (APOP)</strong>. Incorrect calorie intake — usually from guessing portions or not accounting for treats — is the primary cause.
  This calculator is a starting point. For therapeutic diets, post-surgery recovery, or pets with conditions like diabetes or kidney disease, always confirm targets with your vet or a board-certified veterinary nutritionist (DACVN).</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How many calories should my dog eat per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How many calories should my dog eat per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">A healthy adult neutered dog needs approximately 1.6 × RER calories per day, where RER = 70 × (weight in kg)^0.75. A 10 kg neutered adult dog needs roughly 70 × 10^0.75 × 1.6 ≈ 700 kcal/day. Puppies under 4 months need 3× RER. Active or working dogs need 2–2.5× RER. These are maintenance targets — always adjust based on body condition score, not just weight.</p>
          </div>
          <div key='How many calories should my cat eat per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How many calories should my cat eat per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">An average adult indoor neutered cat weighing 4 kg needs approximately 180–220 kcal/day. The RER for a 4 kg cat is 70 × 4^0.75 ≈ 235 kcal, multiplied by a factor of 0.8–1.0 for inactive indoor cats. Wet food typically provides 70–100 kcal per 85g serving; dry food provides 300–400 kcal per 100g. Measuring both is critical — most owners underestimate by 20–30%.</p>
          </div>
          <div key="Do treats count toward my pet's daily calorie intake?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Do treats count toward my pet's daily calorie intake?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — treats should account for no more than 10% of your pet's total daily calorie intake, according to WSAVA guidelines. A single medium dog biscuit can be 40–60 kcal. For a 10 kg dog on 700 kcal/day, the 10% limit is 70 kcal — roughly one or two small treats. This is a commonly overlooked cause of gradual weight gain.</p>
          </div>
          <div key='What is RER and why does it matter?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is RER and why does it matter?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">RER (Resting Energy Requirement) is the energy a pet needs while at complete rest to maintain normal physiological functions — breathing, circulation, digestion, temperature regulation. It is the baseline from which all other caloric targets are calculated using life-stage multipliers. The formula 70 × (weight in kg)^0.75 is derived from metabolic scaling research and is the standard used by WSAVA, AAHA, and the European College of Veterinary and Comparative Nutrition (ECVCN).</p>
          </div>
          <div key='How do I know if my dog or cat is overweight?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I know if my dog or cat is overweight?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The Body Condition Score (BCS) is more informative than weight alone. On the 1–9 scale used by WSAVA, a score of 4–5 is ideal. Signs of healthy weight: you can feel but not see the ribs, there is a visible waist when viewed from above, and the abdomen tucks up when viewed from the side. If ribs are hard to feel, the waist is not visible, or there is obvious abdominal rounding, the animal is likely overweight. Our Pet BMI & Body Condition Checker provides a structured assessment.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/water-calculator" href="/tools/water-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/water-calculator →</Link>
          <Link key="/tools/exercise-calculator" href="/tools/exercise-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/exercise-calculator →</Link>
          <Link key="/tools/pet-bmi" href="/tools/pet-bmi" className="text-brand-start font-bold hover:underline text-sm">/tools/pet-bmi →</Link>
          <Link key="/resources/complete-guide-to-pet-nutrition" href="/resources/complete-guide-to-pet-nutrition" className="text-brand-start font-bold hover:underline text-sm">/resources/complete-guide-to-pet-nutrition →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

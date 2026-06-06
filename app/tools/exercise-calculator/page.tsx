import Link from "next/link";
import DogExerciseCalculator from "./DogExerciseCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Exercise Calculator", item: "https://hushku.app/tools/exercise-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Exercise Calculator",
  url: "https://hushku.app/tools/exercise-calculator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How much exercise does a dog need per day?', a: 'Exercise needs vary enormously by breed. Low-energy breeds (Basset Hound, Shih Tzu, French Bulldog) need 20–30 minutes daily. Medium-energy breeds (Labrador Retriever, Beagle, Cocker Spaniel) need 45–60 minutes. High-energy working breeds (Border Collie, Australian Shepherd, Vizsla, Weimaraner) need 90–120+ minutes. These are minimums — most dogs benefit from more. Age matters too: puppies need shorter, more frequent play sessions; seniors need gentler, shorter walks.' },
  { q: 'Is walking enough exercise for my dog?', a: 'For low and medium-energy breeds, a combination of walks and off-lead play is usually sufficient. For high-energy working breeds, walks alone are rarely adequate — these breeds require activities that challenge them physically and mentally: fetch, agility, swimming, off-lead running, or structured training sessions. A dog who is adequately exercised will be calm and settled indoors; a dog who is under-exercised is frequently restless, destructive, or attention-seeking.' },
  { q: 'How much exercise is too much for a puppy?', a: 'The widely cited guideline for puppies is 5 minutes of structured exercise per month of age, twice daily (so a 4-month-old puppy: 20 minutes twice daily). This applies to leash walking and structured play — not free play, which puppies self-regulate. Excessive repetitive exercise on hard surfaces during the growth period can damage developing joints, particularly in large breeds prone to hip and elbow dysplasia. From 12–18 months, gradually increase to adult exercise levels.' },
  { q: 'Do brachycephalic breeds like French Bulldogs need less exercise?', a: 'Yes — and their exercise must be managed carefully. Brachycephalic breeds (French Bulldogs, Pugs, Bulldogs, Boxers) have anatomically compromised airways that limit their ability to cool themselves through panting. They are at high risk of heatstroke in temperatures above 20°C (68°F) and should never be exercised in direct sun during warm weather. Short walks (15–20 minutes), multiple times daily in cool parts of the day, are safer than one long walk. Owners should watch for rapid panting, drooling, or distress as warning signs.' },
  { q: 'What counts as mental exercise for dogs?', a: 'Mental stimulation is as tiring as physical exercise for most dogs. Sniffing on a walk (allowing the dog to follow scents rather than walk at heel) is cognitively demanding. Training sessions (5–10 minutes of reinforcement-based obedience or trick training) are highly effective. Puzzle feeders, Kongs, licking mats, and scatter feeding reduce arousal and provide enrichment. For working breeds, scent work and nose games can exhaust a dog mentally more effectively than an hour-long run.' },
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

      <DogExerciseCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Daily exercise requirements vary dramatically by breed, age, and health status. A Border Collie needs 90–120 minutes of vigorous exercise daily; a Basset Hound needs 20–30 minutes. The <strong>American Kennel Club (AKC)</strong> and veterinary behaviourists consistently identify insufficient exercise as the primary cause of destructive behaviour, obesity, and anxiety disorders in dogs.
  This calculator combines breed energy profile, age stage, and health flags to produce a daily exercise recommendation in minutes — split between structured activity (walks, runs, fetch) and mental enrichment (training, puzzle feeders, scent work).</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How much exercise does a dog need per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much exercise does a dog need per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Exercise needs vary enormously by breed. Low-energy breeds (Basset Hound, Shih Tzu, French Bulldog) need 20–30 minutes daily. Medium-energy breeds (Labrador Retriever, Beagle, Cocker Spaniel) need 45–60 minutes. High-energy working breeds (Border Collie, Australian Shepherd, Vizsla, Weimaraner) need 90–120+ minutes. These are minimums — most dogs benefit from more. Age matters too: puppies need shorter, more frequent play sessions; seniors need gentler, shorter walks.</p>
          </div>
          <div key='Is walking enough exercise for my dog?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is walking enough exercise for my dog?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">For low and medium-energy breeds, a combination of walks and off-lead play is usually sufficient. For high-energy working breeds, walks alone are rarely adequate — these breeds require activities that challenge them physically and mentally: fetch, agility, swimming, off-lead running, or structured training sessions. A dog who is adequately exercised will be calm and settled indoors; a dog who is under-exercised is frequently restless, destructive, or attention-seeking.</p>
          </div>
          <div key='How much exercise is too much for a puppy?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much exercise is too much for a puppy?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The widely cited guideline for puppies is 5 minutes of structured exercise per month of age, twice daily (so a 4-month-old puppy: 20 minutes twice daily). This applies to leash walking and structured play — not free play, which puppies self-regulate. Excessive repetitive exercise on hard surfaces during the growth period can damage developing joints, particularly in large breeds prone to hip and elbow dysplasia. From 12–18 months, gradually increase to adult exercise levels.</p>
          </div>
          <div key='Do brachycephalic breeds like French Bulldogs need less exercise?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Do brachycephalic breeds like French Bulldogs need less exercise?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — and their exercise must be managed carefully. Brachycephalic breeds (French Bulldogs, Pugs, Bulldogs, Boxers) have anatomically compromised airways that limit their ability to cool themselves through panting. They are at high risk of heatstroke in temperatures above 20°C (68°F) and should never be exercised in direct sun during warm weather. Short walks (15–20 minutes), multiple times daily in cool parts of the day, are safer than one long walk. Owners should watch for rapid panting, drooling, or distress as warning signs.</p>
          </div>
          <div key='What counts as mental exercise for dogs?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What counts as mental exercise for dogs?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Mental stimulation is as tiring as physical exercise for most dogs. Sniffing on a walk (allowing the dog to follow scents rather than walk at heel) is cognitively demanding. Training sessions (5–10 minutes of reinforcement-based obedience or trick training) are highly effective. Puzzle feeders, Kongs, licking mats, and scatter feeding reduce arousal and provide enrichment. For working breeds, scent work and nose games can exhaust a dog mentally more effectively than an hour-long run.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/tools/breed-compare" href="/tools/breed-compare" className="text-brand-start font-bold hover:underline text-sm">/tools/breed-compare →</Link>
          <Link key="/resources/complete-guide-to-dog-training" href="/resources/complete-guide-to-dog-training" className="text-brand-start font-bold hover:underline text-sm">/resources/complete-guide-to-dog-training →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

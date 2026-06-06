import Link from "next/link";
import PetAgeCalculator from "./PetAgeCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Age Calculator", item: "https://hushku.app/tools/age-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Age Calculator",
  url: "https://hushku.app/tools/age-calculator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'Is the 7-year rule for dog ages accurate?', a: 'No — the 7-year rule is a rough average that is inaccurate at most life stages. A 1-year-old dog is sexually mature and physically adult, equivalent to a human in their mid-teens to early twenties, not age 7. A 2-year-old large breed dog has already completed most of its aging, while a 2-year-old small breed dog ages much more slowly. Research from UC San Diego (2020) using DNA methylation analysis provides a more accurate model that this calculator is based on.' },
  { q: 'Do large dogs age faster than small dogs?', a: "Yes — significantly so. A 10-year-old Great Dane is geriatric; a 10-year-old Chihuahua is middle-aged. The AKC and veterinary geriatric research consistently show that giant breeds (over 45 kg) have lifespans of 7–10 years, while toy breeds regularly live 14–16 years. The accelerated aging of large breeds is linked to their faster growth rates and higher metabolic turnover. Veterinarians typically consider large breeds 'senior' from age 7 and giant breeds from age 5–6." },
  { q: 'At what age is a cat considered senior?', a: 'The American Association of Feline Practitioners (AAFP) classifies cats as senior from age 11 and geriatric from age 15. In human-equivalent terms, an 11-year-old cat is roughly equivalent to a 60-year-old human. Biannual veterinary check-ups (rather than annual) are recommended from age 11 onwards to catch age-related conditions — kidney disease, hyperthyroidism, dental disease, arthritis, and hypertension — early.' },
  { q: "How does breed affect a dog's lifespan?", a: 'Breed and body size are the strongest predictors of canine lifespan. Small breeds (under 10 kg): 12–16 years. Medium breeds (10–25 kg): 10–14 years. Large breeds (25–45 kg): 9–12 years. Giant breeds (over 45 kg): 7–10 years. Within size categories, certain breeds have known longevity (Dachshund, Miniature Poodle) or shortened lifespans due to breed-specific health conditions (Bulldog, Boxer, Great Dane).' },
  { q: 'When should I start treating my pet as a senior?', a: 'Dogs: age 7 for medium and large breeds, age 5–6 for giant breeds, age 9–10 for small breeds. Cats: age 11. Senior status means increasing vet check-ups to twice yearly, asking about senior blood panels (kidney function, thyroid, glucose, CBC), transitioning to senior or joint-support diet formulations if appropriate, and monitoring for mobility changes, weight loss, increased thirst/urination, or behavioural changes.' },
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

      <PetAgeCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">The old "1 dog year = 7 human years" formula is scientifically inaccurate. Research published in <em>Cell Systems</em> (2020) by Trey Ideker and colleagues at UC San Diego used DNA methylation patterns to establish that dogs age rapidly in the first two years and more slowly thereafter — and that large breeds age faster than small breeds. This calculator uses species-specific and size-specific aging models to give a biologically grounded human-age equivalent.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='Is the 7-year rule for dog ages accurate?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is the 7-year rule for dog ages accurate?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">No — the 7-year rule is a rough average that is inaccurate at most life stages. A 1-year-old dog is sexually mature and physically adult, equivalent to a human in their mid-teens to early twenties, not age 7. A 2-year-old large breed dog has already completed most of its aging, while a 2-year-old small breed dog ages much more slowly. Research from UC San Diego (2020) using DNA methylation analysis provides a more accurate model that this calculator is based on.</p>
          </div>
          <div key='Do large dogs age faster than small dogs?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Do large dogs age faster than small dogs?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — significantly so. A 10-year-old Great Dane is geriatric; a 10-year-old Chihuahua is middle-aged. The AKC and veterinary geriatric research consistently show that giant breeds (over 45 kg) have lifespans of 7–10 years, while toy breeds regularly live 14–16 years. The accelerated aging of large breeds is linked to their faster growth rates and higher metabolic turnover. Veterinarians typically consider large breeds 'senior' from age 7 and giant breeds from age 5–6.</p>
          </div>
          <div key='At what age is a cat considered senior?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">At what age is a cat considered senior?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The American Association of Feline Practitioners (AAFP) classifies cats as senior from age 11 and geriatric from age 15. In human-equivalent terms, an 11-year-old cat is roughly equivalent to a 60-year-old human. Biannual veterinary check-ups (rather than annual) are recommended from age 11 onwards to catch age-related conditions — kidney disease, hyperthyroidism, dental disease, arthritis, and hypertension — early.</p>
          </div>
          <div key="How does breed affect a dog's lifespan?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How does breed affect a dog's lifespan?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Breed and body size are the strongest predictors of canine lifespan. Small breeds (under 10 kg): 12–16 years. Medium breeds (10–25 kg): 10–14 years. Large breeds (25–45 kg): 9–12 years. Giant breeds (over 45 kg): 7–10 years. Within size categories, certain breeds have known longevity (Dachshund, Miniature Poodle) or shortened lifespans due to breed-specific health conditions (Bulldog, Boxer, Great Dane).</p>
          </div>
          <div key='When should I start treating my pet as a senior?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">When should I start treating my pet as a senior?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Dogs: age 7 for medium and large breeds, age 5–6 for giant breeds, age 9–10 for small breeds. Cats: age 11. Senior status means increasing vet check-ups to twice yearly, asking about senior blood panels (kidney function, thyroid, glucose, CBC), transitioning to senior or joint-support diet formulations if appropriate, and monitoring for mobility changes, weight loss, increased thirst/urination, or behavioural changes.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health" href="/health" className="text-brand-start font-bold hover:underline text-sm">/health →</Link>
          <Link key="/health/weight-tracker" href="/health/weight-tracker" className="text-brand-start font-bold hover:underline text-sm">/health/weight-tracker →</Link>
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

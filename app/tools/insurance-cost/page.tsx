import Link from "next/link";
import InsuranceCostEstimator from "./InsuranceCostEstimator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Insurance Cost", item: "https://hushku.app/tools/insurance-cost" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Insurance Cost",
  url: "https://hushku.app/tools/insurance-cost",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'Is pet insurance worth it?', a: 'Pet insurance is most valuable when you want financial certainty and would pursue all available treatment if your pet became seriously ill. The average dog owner in the US pays approximately $1,500/year in vet bills; insured owners tend to pursue more thorough diagnostics and treatment because cost is less of a barrier. The break-even point varies by breed — high-health-risk breeds (Bulldog, Great Dane, Golden Retriever) are more likely to recoup premium costs through claims. For budget-conscious owners, an emergency savings fund of $2,000–3,000 can serve a similar purpose for minor emergencies.' },
  { q: 'What does pet insurance typically cover?', a: 'Accident-only policies cover injuries (broken bones, lacerations, toxin ingestion, road accidents) but not illness. Accident and illness policies cover most conditions including cancer, orthopaedic conditions, digestive issues, respiratory disease, and more. Wellness/preventive riders add coverage for routine care (vaccinations, dental cleanings, annual check-ups) for an additional monthly premium. Almost all policies exclude: pre-existing conditions (any condition documented before the policy start date), elective procedures, and breed-specific conditions if the breed is listed as high-risk on that policy.' },
  { q: 'When is the best time to get pet insurance?', a: 'The earlier the better — ideally when your pet is young and healthy, before any condition can be classified as pre-existing. Most insurers have a waiting period (typically 14 days for illness, 48 hours for accidents) before coverage begins. Conditions diagnosed or showing symptoms before the policy start date are permanently excluded on most policies. Getting insurance before your first vet visit ensures the widest coverage.' },
  { q: 'What is a deductible and how does it work in pet insurance?', a: 'A deductible is the amount you pay out-of-pocket before insurance pays. Pet insurance deductibles work either per-incident (you pay the deductible each time a new condition is treated) or annually (you pay the deductible once per year regardless of how many conditions arise). Annual deductibles typically offer better value if your pet has multiple claims in a year; per-incident deductibles may be better if your pet is generally healthy and you only expect occasional claims.' },
  { q: 'Are there pet insurance options in the UK and Australia?', a: "Yes — pet insurance is widely available in both markets. In the UK, major providers include Petplan, More Than, Animal Friends, and Direct Line. In Australia: PetInsurance Australia, Budget Direct, and RSPCA Pet Insurance. UK market penetration is higher than the US — approximately 25% of UK dogs are insured versus 4% of US dogs. European insurers generally offer 'lifetime' policies that cover conditions year after year without exclusion limits, which tend to offer better value than US-style annual policies." },
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

      <InsuranceCostEstimator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Pet insurance premiums in the US range from approximately $15 to $100+ per month depending on species, breed, age, location, coverage type, deductible, and reimbursement percentage. The average annual vet spend is approximately $1,500 for dogs and $900 for cats, but a single accident or illness — cancer diagnosis, orthopaedic surgery, emergency GDV surgery — can cost $5,000–$15,000. This estimator calculates a realistic premium range based on your pet's profile and breaks down what each coverage tier typically includes.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='Is pet insurance worth it?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is pet insurance worth it?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Pet insurance is most valuable when you want financial certainty and would pursue all available treatment if your pet became seriously ill. The average dog owner in the US pays approximately $1,500/year in vet bills; insured owners tend to pursue more thorough diagnostics and treatment because cost is less of a barrier. The break-even point varies by breed — high-health-risk breeds (Bulldog, Great Dane, Golden Retriever) are more likely to recoup premium costs through claims. For budget-conscious owners, an emergency savings fund of $2,000–3,000 can serve a similar purpose for minor emergencies.</p>
          </div>
          <div key='What does pet insurance typically cover?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What does pet insurance typically cover?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Accident-only policies cover injuries (broken bones, lacerations, toxin ingestion, road accidents) but not illness. Accident and illness policies cover most conditions including cancer, orthopaedic conditions, digestive issues, respiratory disease, and more. Wellness/preventive riders add coverage for routine care (vaccinations, dental cleanings, annual check-ups) for an additional monthly premium. Almost all policies exclude: pre-existing conditions (any condition documented before the policy start date), elective procedures, and breed-specific conditions if the breed is listed as high-risk on that policy.</p>
          </div>
          <div key='When is the best time to get pet insurance?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">When is the best time to get pet insurance?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The earlier the better — ideally when your pet is young and healthy, before any condition can be classified as pre-existing. Most insurers have a waiting period (typically 14 days for illness, 48 hours for accidents) before coverage begins. Conditions diagnosed or showing symptoms before the policy start date are permanently excluded on most policies. Getting insurance before your first vet visit ensures the widest coverage.</p>
          </div>
          <div key='What is a deductible and how does it work in pet insurance?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is a deductible and how does it work in pet insurance?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">A deductible is the amount you pay out-of-pocket before insurance pays. Pet insurance deductibles work either per-incident (you pay the deductible each time a new condition is treated) or annually (you pay the deductible once per year regardless of how many conditions arise). Annual deductibles typically offer better value if your pet has multiple claims in a year; per-incident deductibles may be better if your pet is generally healthy and you only expect occasional claims.</p>
          </div>
          <div key='Are there pet insurance options in the UK and Australia?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Are there pet insurance options in the UK and Australia?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — pet insurance is widely available in both markets. In the UK, major providers include Petplan, More Than, Animal Friends, and Direct Line. In Australia: PetInsurance Australia, Budget Direct, and RSPCA Pet Insurance. UK market penetration is higher than the US — approximately 25% of UK dogs are insured versus 4% of US dogs. European insurers generally offer 'lifetime' policies that cover conditions year after year without exclusion limits, which tend to offer better value than US-style annual policies.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/adoption" href="/adoption" className="text-brand-start font-bold hover:underline text-sm">/adoption →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

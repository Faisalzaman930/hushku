import Link from "next/link";
import PetHealthQuiz from "./PetHealthQuiz";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Pet Health Quiz", item: "https://hushku.app/tools/pet-health-quiz" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pet Health Quiz",
  url: "https://hushku.app/tools/pet-health-quiz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How often should I take my pet to the vet?', a: 'The AVMA recommends annual wellness visits for healthy adult pets (1–7 years), and biannual visits for senior pets (dogs over 7, cats over 11). Each visit should include a full physical examination, weight check, dental assessment, and discussion of any behavioural changes. Annual bloodwork (CBC, biochemistry panel, urinalysis) is increasingly recommended from middle age onwards to establish baselines and catch conditions like kidney disease, diabetes, and hypothyroidism before clinical signs appear.' },
  { q: 'How important is dental care for pets?', a: 'Dental disease is one of the most under-treated conditions in companion animals. The American Veterinary Dental College estimates that by age 3, over 80% of dogs and 70% of cats have some degree of dental disease. Periodontal disease causes chronic pain, tooth loss, and — critically — allows bacteria to enter the bloodstream, increasing risk of heart, kidney, and liver disease. Professional dental cleaning under general anaesthesia is the gold standard; daily tooth brushing at home is the single most effective preventive measure.' },
  { q: 'What is the minimum exercise requirement for a healthy pet?', a: 'There is no universal minimum — requirements vary enormously by species and breed. As a general guide: dogs need at least 30 minutes of moderate activity daily (most dogs benefit from significantly more); cats need at least two 10–15 minute active play sessions daily in addition to environmental enrichment (climbing structures, puzzle feeders, window access). Sedentary indoor cats that receive no active play are at high risk of obesity, urinary tract disease, and behavioural problems.' },
  { q: 'What mental stimulation does my pet need?', a: 'Mental stimulation is as important as physical exercise, particularly for intelligent breeds. For dogs: training sessions (5–10 minutes daily), puzzle feeders, scatter feeding, sniffing games, novel environments. For cats: food puzzles, rotating toy variety, bird feeders positioned at windows, and interactive wand play. Dogs that are physically exercised but mentally understimulated frequently develop anxiety-based behaviours including destructive chewing, excessive barking, and repetitive stereotypies.' },
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

      <PetHealthQuiz />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">This 8-question lifestyle audit scores your pet's health across five domains recommended by the <strong>American Veterinary Medical Association (AVMA)</strong> and <strong>WSAVA</strong>: diet and nutrition, physical exercise, mental stimulation, preventive veterinary care, and dental health. The quiz produces a wellness score out of 80, categorised into tiers from Excellent to Needs Improvement, with specific actionable recommendations for the lowest-scoring areas.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How often should I take my pet to the vet?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How often should I take my pet to the vet?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The AVMA recommends annual wellness visits for healthy adult pets (1–7 years), and biannual visits for senior pets (dogs over 7, cats over 11). Each visit should include a full physical examination, weight check, dental assessment, and discussion of any behavioural changes. Annual bloodwork (CBC, biochemistry panel, urinalysis) is increasingly recommended from middle age onwards to establish baselines and catch conditions like kidney disease, diabetes, and hypothyroidism before clinical signs appear.</p>
          </div>
          <div key='How important is dental care for pets?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How important is dental care for pets?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Dental disease is one of the most under-treated conditions in companion animals. The American Veterinary Dental College estimates that by age 3, over 80% of dogs and 70% of cats have some degree of dental disease. Periodontal disease causes chronic pain, tooth loss, and — critically — allows bacteria to enter the bloodstream, increasing risk of heart, kidney, and liver disease. Professional dental cleaning under general anaesthesia is the gold standard; daily tooth brushing at home is the single most effective preventive measure.</p>
          </div>
          <div key='What is the minimum exercise requirement for a healthy pet?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the minimum exercise requirement for a healthy pet?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">There is no universal minimum — requirements vary enormously by species and breed. As a general guide: dogs need at least 30 minutes of moderate activity daily (most dogs benefit from significantly more); cats need at least two 10–15 minute active play sessions daily in addition to environmental enrichment (climbing structures, puzzle feeders, window access). Sedentary indoor cats that receive no active play are at high risk of obesity, urinary tract disease, and behavioural problems.</p>
          </div>
          <div key='What mental stimulation does my pet need?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What mental stimulation does my pet need?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Mental stimulation is as important as physical exercise, particularly for intelligent breeds. For dogs: training sessions (5–10 minutes daily), puzzle feeders, scatter feeding, sniffing games, novel environments. For cats: food puzzles, rotating toy variety, bird feeders positioned at windows, and interactive wand play. Dogs that are physically exercised but mentally understimulated frequently develop anxiety-based behaviours including destructive chewing, excessive barking, and repetitive stereotypies.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health" href="/health" className="text-brand-start font-bold hover:underline text-sm">/health →</Link>
          <Link key="/health/daily-care" href="/health/daily-care" className="text-brand-start font-bold hover:underline text-sm">/health/daily-care →</Link>
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/tools/exercise-calculator" href="/tools/exercise-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/exercise-calculator →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

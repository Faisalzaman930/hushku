import Link from "next/link";
import BreedCompareTool from "./BreedCompareTool";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Breed Compare", item: "https://hushku.app/tools/breed-compare" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Breed Compare",
  url: "https://hushku.app/tools/breed-compare",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What is the best way to choose between two dog breeds?', a: 'Compare on the factors that directly affect daily life: energy level and exercise needs (are they compatible with your lifestyle?), trainability and experience requirement (are you the right owner?), shedding and grooming needs (are you prepared for the maintenance?), and health and lifespan (are you prepared for potential breed-specific veterinary costs?). Appearance should be the last factor, not the first. The Orthopedic Foundation for Animals (OFA) and breed-specific health studies provide documented data on breed-specific hereditary conditions that should inform any long-term ownership decision.' },
  { q: 'How is the trainability score calculated?', a: "Trainability reflects the breed's general responsiveness to positive reinforcement-based training, based on aggregated breed standard descriptions from the American Kennel Club (AKC), The Kennel Club (UK), and veterinary behavioural literature. A score of 5 indicates a breed that is highly motivated by food or praise, learns quickly, and generalises commands well (e.g. Border Collie, Standard Poodle). A score of 1 indicates a breed that is independent, follows its own instincts, and requires significantly more patience and experience (e.g. Afghan Hound, Basset Hound)." },
  { q: 'Golden Retriever vs Labrador Retriever — which is better?', a: 'Both are excellent family dogs and consistently rank in the top 3 most popular breeds in the US and UK. Key differences: Labrador Retrievers come in three coat colours (black, yellow, chocolate) and have a shorter, lower-maintenance coat; Golden Retrievers have a longer coat requiring more regular grooming. Labs tend to mature faster and are slightly more food-motivated for training. Golden Retrievers are typically more gentle with very young children. Cancer incidence is higher in Golden Retrievers (approximately 60% lifetime risk). Both are highly intelligent, trainable, and family-friendly.' },
  { q: 'Can I compare a dog breed with a cat breed?', a: "The comparison tool is currently separated by species — you can compare dog vs dog or cat vs cat. Comparing across species is not directly meaningful because the scoring systems reflect species-specific criteria (e.g. 'playfulness' in a dog context is different from the feline equivalent). For cross-species household decisions, read the individual breed guides and look specifically at the dog-friendly scores for cats and cat-friendly information for dogs." },
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

      <BreedCompareTool />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Compare any two dog or cat breeds across 28+ attributes simultaneously — including temperament scores (adaptability, friendliness, trainability, energy), physical characteristics (size, weight, height), grooming requirements, health indicators, and suitability for different households. Data is drawn from the same breed database that powers our 450+ breed directory pages, scored on a 1–5 scale aligned with AKC and Kennel Club breed standards.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What is the best way to choose between two dog breeds?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the best way to choose between two dog breeds?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Compare on the factors that directly affect daily life: energy level and exercise needs (are they compatible with your lifestyle?), trainability and experience requirement (are you the right owner?), shedding and grooming needs (are you prepared for the maintenance?), and health and lifespan (are you prepared for potential breed-specific veterinary costs?). Appearance should be the last factor, not the first. The Orthopedic Foundation for Animals (OFA) and breed-specific health studies provide documented data on breed-specific hereditary conditions that should inform any long-term ownership decision.</p>
          </div>
          <div key='How is the trainability score calculated?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How is the trainability score calculated?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Trainability reflects the breed's general responsiveness to positive reinforcement-based training, based on aggregated breed standard descriptions from the American Kennel Club (AKC), The Kennel Club (UK), and veterinary behavioural literature. A score of 5 indicates a breed that is highly motivated by food or praise, learns quickly, and generalises commands well (e.g. Border Collie, Standard Poodle). A score of 1 indicates a breed that is independent, follows its own instincts, and requires significantly more patience and experience (e.g. Afghan Hound, Basset Hound).</p>
          </div>
          <div key='Golden Retriever vs Labrador Retriever — which is better?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Golden Retriever vs Labrador Retriever — which is better?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Both are excellent family dogs and consistently rank in the top 3 most popular breeds in the US and UK. Key differences: Labrador Retrievers come in three coat colours (black, yellow, chocolate) and have a shorter, lower-maintenance coat; Golden Retrievers have a longer coat requiring more regular grooming. Labs tend to mature faster and are slightly more food-motivated for training. Golden Retrievers are typically more gentle with very young children. Cancer incidence is higher in Golden Retrievers (approximately 60% lifetime risk). Both are highly intelligent, trainable, and family-friendly.</p>
          </div>
          <div key='Can I compare a dog breed with a cat breed?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Can I compare a dog breed with a cat breed?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The comparison tool is currently separated by species — you can compare dog vs dog or cat vs cat. Comparing across species is not directly meaningful because the scoring systems reflect species-specific criteria (e.g. 'playfulness' in a dog context is different from the feline equivalent). For cross-species household decisions, read the individual breed guides and look specifically at the dog-friendly scores for cats and cat-friendly information for dogs.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/breeds/dogs" href="/breeds/dogs" className="text-brand-start font-bold hover:underline text-sm">/breeds/dogs →</Link>
          <Link key="/breeds/cats" href="/breeds/cats" className="text-brand-start font-bold hover:underline text-sm">/breeds/cats →</Link>
          <Link key="/tools/best-dog-quiz" href="/tools/best-dog-quiz" className="text-brand-start font-bold hover:underline text-sm">/tools/best-dog-quiz →</Link>
          <Link key="/tools/best-cat-quiz" href="/tools/best-cat-quiz" className="text-brand-start font-bold hover:underline text-sm">/tools/best-cat-quiz →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

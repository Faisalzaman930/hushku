import Link from "next/link";
import PetOwnerQuiz from "./PetOwnerQuiz";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Pet Owner Quiz", item: "https://hushku.app/tools/pet-owner-quiz" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pet Owner Quiz",
  url: "https://hushku.app/tools/pet-owner-quiz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What are the most important things a pet owner should do?', a: 'According to the AVMA, the five most important commitments for responsible pet ownership are: (1) annual wellness veterinary visits and keeping vaccinations current; (2) microchipping and registration — microchipped pets are reunited with owners at rates 2.5× higher for dogs and 21× higher for cats than unchipped pets; (3) desexing unless breeding is planned — reduces roaming, aggression, and several cancers; (4) providing appropriate nutrition and preventing obesity; (5) providing adequate exercise and mental stimulation appropriate to the species and breed.' },
  { q: 'How can I tell if I am a good pet owner?', a: 'Signs of responsible ownership: your pet maintains a healthy body weight (BCS 4–5/9), has up-to-date vaccinations and annual vet checks, their teeth are clean, they are microchipped, you have an emergency vet fund or pet insurance, they get appropriate daily exercise, and they exhibit calm, confident behaviour without fear or aggression. If any of these areas are lacking, the quiz provides specific, actionable improvements.' },
  { q: 'Is microchipping compulsory?', a: 'Microchipping is legally compulsory for dogs in the UK (since 2016), Australia (in most states), and many EU countries. In the US there is no federal requirement, but many states and municipalities have mandatory microchipping laws. Regardless of legality, microchipping is strongly recommended by all major veterinary and welfare bodies — it is a permanent, inexpensive (typically $25–50) form of identification that dramatically improves lost pet recovery rates.' },
  { q: 'What does responsible pet ownership cost per year?', a: 'Average annual costs for a dog in the US (APPA 2023–24): vet care $400–$700, food $300–$700, grooming $100–$400, supplies and accessories $100–$200, boarding/pet sitting when travelling $200–$600. Total: $1,100–$2,600/year minimum for a healthy dog. Unexpected veterinary costs (surgery, illness) can add $2,000–$15,000. Annual costs for cats are generally lower: $800–$1,800/year. These costs should be factored into the decision to get a pet.' },
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

      <PetOwnerQuiz />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">This 8-question self-assessment scores your pet ownership practices across the areas veterinary and welfare organisations identify as most predictive of pet wellbeing: veterinary care regularity, vaccination compliance, diet quality and portion control, dental care, emergency preparedness, physical activity, identification (microchipping), and safety practices. The result gives an honest rating with specific areas to improve.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What are the most important things a pet owner should do?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are the most important things a pet owner should do?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">According to the AVMA, the five most important commitments for responsible pet ownership are: (1) annual wellness veterinary visits and keeping vaccinations current; (2) microchipping and registration — microchipped pets are reunited with owners at rates 2.5× higher for dogs and 21× higher for cats than unchipped pets; (3) desexing unless breeding is planned — reduces roaming, aggression, and several cancers; (4) providing appropriate nutrition and preventing obesity; (5) providing adequate exercise and mental stimulation appropriate to the species and breed.</p>
          </div>
          <div key='How can I tell if I am a good pet owner?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How can I tell if I am a good pet owner?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Signs of responsible ownership: your pet maintains a healthy body weight (BCS 4–5/9), has up-to-date vaccinations and annual vet checks, their teeth are clean, they are microchipped, you have an emergency vet fund or pet insurance, they get appropriate daily exercise, and they exhibit calm, confident behaviour without fear or aggression. If any of these areas are lacking, the quiz provides specific, actionable improvements.</p>
          </div>
          <div key='Is microchipping compulsory?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is microchipping compulsory?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Microchipping is legally compulsory for dogs in the UK (since 2016), Australia (in most states), and many EU countries. In the US there is no federal requirement, but many states and municipalities have mandatory microchipping laws. Regardless of legality, microchipping is strongly recommended by all major veterinary and welfare bodies — it is a permanent, inexpensive (typically $25–50) form of identification that dramatically improves lost pet recovery rates.</p>
          </div>
          <div key='What does responsible pet ownership cost per year?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What does responsible pet ownership cost per year?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Average annual costs for a dog in the US (APPA 2023–24): vet care $400–$700, food $300–$700, grooming $100–$400, supplies and accessories $100–$200, boarding/pet sitting when travelling $200–$600. Total: $1,100–$2,600/year minimum for a healthy dog. Unexpected veterinary costs (surgery, illness) can add $2,000–$15,000. Annual costs for cats are generally lower: $800–$1,800/year. These costs should be factored into the decision to get a pet.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health" href="/health" className="text-brand-start font-bold hover:underline text-sm">/health →</Link>
          <Link key="/adoption" href="/adoption" className="text-brand-start font-bold hover:underline text-sm">/adoption →</Link>
          <Link key="/tools/pet-health-quiz" href="/tools/pet-health-quiz" className="text-brand-start font-bold hover:underline text-sm">/tools/pet-health-quiz →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

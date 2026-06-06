import Link from "next/link";
import PetSitterCostCalculator from "./PetSitterCostCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Pet Sitter Cost", item: "https://hushku.app/tools/pet-sitter-cost" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pet Sitter Cost",
  url: "https://hushku.app/tools/pet-sitter-cost",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How much does pet sitting cost per day?', a: 'In the US, pet sitting in your home averages $25–$45 per night for a single dog or cat (Rover national data, 2024). Overnight stays where the sitter stays in your home typically cost $50–$80/night. Doggy daycare (drop-off at a facility) averages $25–$40/day. In major cities (New York, Los Angeles, San Francisco), rates run 40–60% higher. In the UK, overnight pet sitting averages £20–£40/night; in Australia, AUD $50–$90/night.' },
  { q: 'What is the difference between pet sitting and dog boarding?', a: "Pet sitting means a sitter comes to your home (drop-in visits of 30–60 minutes, or overnight stays). Dog boarding means your dog goes to the sitter's or facility's home. Home-based boarding is typically less stressful than commercial kennels because dogs are in a home environment with fewer dogs present. Kennels offer professional supervision and medical facilities if needed. Pet sitting in your own home is usually the least stressful for the pet — they stay in their familiar environment with minimal disruption to routine." },
  { q: 'How do I find a trustworthy pet sitter?', a: 'Platforms like Rover and Wag provide background-checked sitters with verified reviews. Key factors to evaluate: experience with your specific breed or species, number of pets they care for simultaneously, references from past clients, insurance coverage, first-aid certification, and whether they have a meet-and-greet process before the booking. Always do a trial overnight before a long trip. Ask specifically about emergency veterinary protocols — what do they do if your pet needs urgent care?' },
  { q: 'Is Rover or Wag better for pet sitting?', a: 'Rover has a larger number of sitters and generally more transparent reviews. Wag operates more like a gig platform (faster booking, less pre-screening). Rover is typically better for first-time bookings where you want to vet the sitter carefully; Wag can be convenient for last-minute bookings. Both have similar pricing. Neither fully replaces a personal recommendation from a trusted friend or vet — ask your vet for local sitter referrals as a starting point.' },
  { q: 'Should I use a pet hotel or a home pet sitter?', a: 'For dogs that are highly social and used to multiple-dog environments, a quality doggy daycare or small kennel works well. For anxious dogs, dogs with medical needs, multiple-cat households, or exotic pets, a home-based sitter who comes to your house is usually preferable. Cats in particular are best cared for in their own territory — transport to a boarding facility adds stress to an already stressful situation.' },
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

      <PetSitterCostCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Pet sitting costs vary significantly by location, service type, pet species, trip duration, and provider. US national averages (Rover, 2024): in-home pet sitting $25–$45/night; doggy daycare $25–$40/day; dog walking $15–$30 per 30-minute walk; boarding at a sitter's home $30–$60/night. Urban markets (New York, San Francisco, London) run 30–50% higher. This calculator applies regional pricing adjustments and species/special-needs factors to give a realistic budget estimate.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How much does pet sitting cost per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much does pet sitting cost per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">In the US, pet sitting in your home averages $25–$45 per night for a single dog or cat (Rover national data, 2024). Overnight stays where the sitter stays in your home typically cost $50–$80/night. Doggy daycare (drop-off at a facility) averages $25–$40/day. In major cities (New York, Los Angeles, San Francisco), rates run 40–60% higher. In the UK, overnight pet sitting averages £20–£40/night; in Australia, AUD $50–$90/night.</p>
          </div>
          <div key='What is the difference between pet sitting and dog boarding?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the difference between pet sitting and dog boarding?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Pet sitting means a sitter comes to your home (drop-in visits of 30–60 minutes, or overnight stays). Dog boarding means your dog goes to the sitter's or facility's home. Home-based boarding is typically less stressful than commercial kennels because dogs are in a home environment with fewer dogs present. Kennels offer professional supervision and medical facilities if needed. Pet sitting in your own home is usually the least stressful for the pet — they stay in their familiar environment with minimal disruption to routine.</p>
          </div>
          <div key='How do I find a trustworthy pet sitter?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I find a trustworthy pet sitter?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Platforms like Rover and Wag provide background-checked sitters with verified reviews. Key factors to evaluate: experience with your specific breed or species, number of pets they care for simultaneously, references from past clients, insurance coverage, first-aid certification, and whether they have a meet-and-greet process before the booking. Always do a trial overnight before a long trip. Ask specifically about emergency veterinary protocols — what do they do if your pet needs urgent care?</p>
          </div>
          <div key='Is Rover or Wag better for pet sitting?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is Rover or Wag better for pet sitting?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Rover has a larger number of sitters and generally more transparent reviews. Wag operates more like a gig platform (faster booking, less pre-screening). Rover is typically better for first-time bookings where you want to vet the sitter carefully; Wag can be convenient for last-minute bookings. Both have similar pricing. Neither fully replaces a personal recommendation from a trusted friend or vet — ask your vet for local sitter referrals as a starting point.</p>
          </div>
          <div key='Should I use a pet hotel or a home pet sitter?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Should I use a pet hotel or a home pet sitter?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">For dogs that are highly social and used to multiple-dog environments, a quality doggy daycare or small kennel works well. For anxious dogs, dogs with medical needs, multiple-cat households, or exotic pets, a home-based sitter who comes to your house is usually preferable. Cats in particular are best cared for in their own territory — transport to a boarding facility adds stress to an already stressful situation.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/sitting-comparison" href="/tools/sitting-comparison" className="text-brand-start font-bold hover:underline text-sm">/tools/sitting-comparison →</Link>
          <Link key="/playdates" href="/playdates" className="text-brand-start font-bold hover:underline text-sm">/playdates →</Link>
          <Link key="/health/reminders" href="/health/reminders" className="text-brand-start font-bold hover:underline text-sm">/health/reminders →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

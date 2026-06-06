import Link from "next/link";
import SittingComparisonTool from "./SittingComparisonTool";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Sitting Comparison", item: "https://hushku.app/tools/sitting-comparison" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sitting Comparison",
  url: "https://hushku.app/tools/sitting-comparison",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'Is Rover or Wag better?', a: "Rover and Wag serve different use cases. Rover has a larger sitter network, requires a meet-and-greet before the first booking, allows you to review a sitter's full profile and reviews before booking, and has a dedicated trust & safety team. Wag functions more like an on-demand service — faster booking but less pre-screening. Rover is generally recommended for first-time bookings or extended stays where building a relationship with the sitter matters. Wag can be convenient for last-minute dog walks where the primary requirement is availability." },
  { q: 'What background checks do pet sitting platforms do?', a: "Rover runs a criminal background check via Checkr (covering national criminal records and sex offender databases) but does not verify references or conduct in-person interviews. Wag runs similar background checks. Neither platform guarantees the sitter's experience level with specific breeds or health conditions — that requires direct assessment through meet-and-greet. Care.com offers more thorough background checks as an add-on but does not specialise in pet care. No platform is a substitute for personal verification." },
  { q: 'What happens if my pet gets injured while being sat?', a: "Rover provides up to $25,000 in veterinary coverage per incident for injuries occurring while under a Rover sitter's care, plus $1,000,000 in liability insurance. Wag offers similar coverage. However, claims require documentation and approval — in a genuine emergency, instruct the sitter to go to the nearest emergency vet immediately and worry about coverage paperwork later. Ensure your sitter has your vet's contact information and a signed emergency treatment authorisation before you travel." },
  { q: 'How much does Rover cost compared to Wag?', a: "Pricing varies by location and sitter, but national US averages are comparable: $25–$45/night for in-home sitting, $30–$60/night for boarding at the sitter's home, $15–$30 for a 30-minute dog walk. Rover charges a 20% service fee on the booking amount; Wag charges a 40% commission. Both sitters set their own base rates. Urban markets (NYC, SF, London) run significantly higher — $60–$100+/night for in-home sitting is not unusual." },
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

      <SittingComparisonTool />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Comparing pet sitting platforms requires evaluating more than just price. This comparison covers the four major platforms (Rover, Wag, Care.com, local alternatives) across the criteria that matter most for pet safety: sitter screening depth (background check scope, criminal database coverage), insurance and liability coverage, what happens in a veterinary emergency, the transparency of the review system, and cancellation policies. Price is the least important variable when trusting a stranger with your pet.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='Is Rover or Wag better?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is Rover or Wag better?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Rover and Wag serve different use cases. Rover has a larger sitter network, requires a meet-and-greet before the first booking, allows you to review a sitter's full profile and reviews before booking, and has a dedicated trust & safety team. Wag functions more like an on-demand service — faster booking but less pre-screening. Rover is generally recommended for first-time bookings or extended stays where building a relationship with the sitter matters. Wag can be convenient for last-minute dog walks where the primary requirement is availability.</p>
          </div>
          <div key='What background checks do pet sitting platforms do?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What background checks do pet sitting platforms do?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Rover runs a criminal background check via Checkr (covering national criminal records and sex offender databases) but does not verify references or conduct in-person interviews. Wag runs similar background checks. Neither platform guarantees the sitter's experience level with specific breeds or health conditions — that requires direct assessment through meet-and-greet. Care.com offers more thorough background checks as an add-on but does not specialise in pet care. No platform is a substitute for personal verification.</p>
          </div>
          <div key='What happens if my pet gets injured while being sat?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What happens if my pet gets injured while being sat?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Rover provides up to $25,000 in veterinary coverage per incident for injuries occurring while under a Rover sitter's care, plus $1,000,000 in liability insurance. Wag offers similar coverage. However, claims require documentation and approval — in a genuine emergency, instruct the sitter to go to the nearest emergency vet immediately and worry about coverage paperwork later. Ensure your sitter has your vet's contact information and a signed emergency treatment authorisation before you travel.</p>
          </div>
          <div key='How much does Rover cost compared to Wag?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much does Rover cost compared to Wag?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Pricing varies by location and sitter, but national US averages are comparable: $25–$45/night for in-home sitting, $30–$60/night for boarding at the sitter's home, $15–$30 for a 30-minute dog walk. Rover charges a 20% service fee on the booking amount; Wag charges a 40% commission. Both sitters set their own base rates. Urban markets (NYC, SF, London) run significantly higher — $60–$100+/night for in-home sitting is not unusual.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/pet-sitter-cost" href="/tools/pet-sitter-cost" className="text-brand-start font-bold hover:underline text-sm">/tools/pet-sitter-cost →</Link>
          <Link key="/playdates" href="/playdates" className="text-brand-start font-bold hover:underline text-sm">/playdates →</Link>
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

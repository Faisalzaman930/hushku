import Link from "next/link";
import HeatCycleCalculator from "./HeatCycleCalculator";

const URL = "https://hushku.app/tools/heat-cycle-calculator";

const faqs = [
  { q: "How often do dogs go into heat?", a: "Most dogs come into heat about every six months, so twice a year. Small breeds can cycle every four to five months, and giant breeds may go 12 to 18 months between heats. Cycles are often irregular for the first year or two before settling into a pattern." },
  { q: "How long does a dog stay in heat?", a: "A heat usually lasts two to three weeks from the first sign of swelling or bleeding. The first phase, proestrus, averages about nine days; estrus, when she will accept a male, also averages about nine days, but either can be as short as a few days or as long as three weeks." },
  { q: "When is a dog most fertile?", a: "Ovulation often falls around days 9 to 14 of the heat, but it varies a lot between dogs and between cycles. She can become pregnant on any day of estrus, and sperm survive for several days, so there is no reliably safe day. If you are planning a breeding, your vet can time ovulation with progesterone blood tests." },
  { q: "When does a puppy have her first heat?", a: "Usually between 6 and 15 months of age. Small breeds tend to start earlier, and some giant breeds don't have their first heat until 18 to 24 months." },
  { q: "Do dogs go through menopause?", a: "No. Dogs keep cycling throughout life, though the gap between heats often gets longer as they age. An older unspayed dog who seems unwell after a heat should see a vet, because pyometra (a womb infection) is most common in the weeks after a heat." },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
      { "@type": "ListItem", position: 3, name: "Dog Heat Cycle Calculator", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dog Heat Cycle Calculator",
    url: URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <HeatCycleCalculator />
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">
            Most dogs come into heat <strong>about every six months</strong>, and each heat lasts <strong>two to three weeks</strong>. This calculator counts from the first day of her last heat, uses the typical gap for her size (or the gap you enter), and shows this cycle&apos;s phases and her next three expected heats. Treat the dates as a reminder to start watching for signs, not as a fertility test.
          </p>
        </div>
        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="text-base font-black text-ebony mb-2">{f.q}</h3>
              <p className="text-sm text-slate-gray leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/health/heat-cycle" className="text-brand-start font-bold hover:underline text-sm">Heat cycle tracking in Hushku →</Link>
            <Link href="/tools/whelping-calculator" className="text-brand-start font-bold hover:underline text-sm">Pregnancy due date calculator →</Link>
            <Link href="/tools/puppy-weight" className="text-brand-start font-bold hover:underline text-sm">Puppy weight predictor →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

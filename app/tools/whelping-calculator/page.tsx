import Link from "next/link";
import WhelpingCalculator from "./WhelpingCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Whelping Calculator", item: "https://hushku.app/tools/whelping-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Whelping Calculator",
  url: "https://hushku.app/tools/whelping-calculator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How long is a dog pregnant?', a: 'Canine gestation averages 63 days from ovulation. Because ovulation timing varies and mating can occur over several days, whelping typically falls between day 58 and day 68 from the first mating date. Litter size influences timing — larger litters may whelp slightly earlier. Gestation length shorter than 58 days or longer than 70 days warrants veterinary assessment.' },
  { q: 'How long is a cat pregnant?', a: 'Feline gestation averages 63–65 days from mating, with normal delivery between day 60 and day 68. Unlike dogs, cats are induced ovulators — ovulation is triggered by mating — which makes the mating date a more reliable reference point for estimating due date in cats than in dogs.' },
  { q: 'What are the signs that a dog or cat is about to give birth?', a: 'In the 24–48 hours before labour: core body temperature drops below 37.5°C (99.5°F) in dogs (a reliable indicator — measure twice daily from day 58 onwards), nesting behaviour intensifies, the animal becomes restless or seeks seclusion, appetite may decrease, and a clear or slightly bloody discharge may appear. Milk may be present in the mammary glands from the final week of pregnancy.' },
  { q: 'When should I have an X-ray done during pregnancy?', a: 'Radiographic confirmation of litter size becomes reliable from day 45 of gestation, when fetal skeletons are mineralised enough to be visible. Knowing the litter size helps you monitor whelping progress — if the expected number of puppies or kittens has not been delivered and labour stalls, your vet knows to intervene. An ultrasound can confirm foetal viability from as early as day 25.' },
  { q: 'What is dystocia and when should I call a vet?', a: 'Dystocia is difficulty giving birth. Call a vet immediately if: active straining lasts more than 30–60 minutes without a puppy/kitten being delivered; more than 4 hours pass between deliveries when more foetuses are expected; the dam shows signs of extreme exhaustion, severe pain, or systemic illness; or there is excessive bright-red bleeding. Emergency caesarean section may be required. High-risk breeds for dystocia include brachycephalic breeds (French Bulldogs, Bulldogs) due to foetal head-to-pelvis size mismatch.' },
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

      <WhelpingCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Dogs have an average gestation of <strong>63 days from ovulation</strong>, though whelping typically occurs between day 58 and day 68 from mating. Cats average <strong>63–65 days</strong>. Because ovulation timing varies, the mating date provides an estimate rather than a precise due date.
  This calculator gives you an expected whelping window plus key milestone dates during pregnancy — including the optimal window for radiographic confirmation of litter size (day 45+) and the critical transition period (day 58 onwards) when whelping preparations should be in place.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How long is a dog pregnant?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How long is a dog pregnant?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Canine gestation averages 63 days from ovulation. Because ovulation timing varies and mating can occur over several days, whelping typically falls between day 58 and day 68 from the first mating date. Litter size influences timing — larger litters may whelp slightly earlier. Gestation length shorter than 58 days or longer than 70 days warrants veterinary assessment.</p>
          </div>
          <div key='How long is a cat pregnant?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How long is a cat pregnant?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Feline gestation averages 63–65 days from mating, with normal delivery between day 60 and day 68. Unlike dogs, cats are induced ovulators — ovulation is triggered by mating — which makes the mating date a more reliable reference point for estimating due date in cats than in dogs.</p>
          </div>
          <div key='What are the signs that a dog or cat is about to give birth?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are the signs that a dog or cat is about to give birth?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">In the 24–48 hours before labour: core body temperature drops below 37.5°C (99.5°F) in dogs (a reliable indicator — measure twice daily from day 58 onwards), nesting behaviour intensifies, the animal becomes restless or seeks seclusion, appetite may decrease, and a clear or slightly bloody discharge may appear. Milk may be present in the mammary glands from the final week of pregnancy.</p>
          </div>
          <div key='When should I have an X-ray done during pregnancy?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">When should I have an X-ray done during pregnancy?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Radiographic confirmation of litter size becomes reliable from day 45 of gestation, when fetal skeletons are mineralised enough to be visible. Knowing the litter size helps you monitor whelping progress — if the expected number of puppies or kittens has not been delivered and labour stalls, your vet knows to intervene. An ultrasound can confirm foetal viability from as early as day 25.</p>
          </div>
          <div key='What is dystocia and when should I call a vet?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is dystocia and when should I call a vet?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Dystocia is difficulty giving birth. Call a vet immediately if: active straining lasts more than 30–60 minutes without a puppy/kitten being delivered; more than 4 hours pass between deliveries when more foetuses are expected; the dam shows signs of extreme exhaustion, severe pain, or systemic illness; or there is excessive bright-red bleeding. Emergency caesarean section may be required. High-risk breeds for dystocia include brachycephalic breeds (French Bulldogs, Bulldogs) due to foetal head-to-pelvis size mismatch.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health/heat-cycle" href="/health/heat-cycle" className="text-brand-start font-bold hover:underline text-sm">/health/heat-cycle →</Link>
          <Link key="/resources/complete-guide-to-puppy-care" href="/resources/complete-guide-to-puppy-care" className="text-brand-start font-bold hover:underline text-sm">/resources/complete-guide-to-puppy-care →</Link>
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import ToxicFoodChecker from "./ToxicFoodChecker";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Toxic Food", item: "https://hushku.app/tools/toxic-food" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Toxic Food",
  url: "https://hushku.app/tools/toxic-food",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What foods are toxic to dogs?', a: 'The most dangerous foods for dogs: xylitol (sugar-free gum, sugar-free peanut butter, some medications — causes severe hypoglycaemia and liver failure at very small doses); grapes and raisins (cause acute kidney failure — the mechanism is not fully understood but all forms are toxic); chocolate (theobromine toxicity — dark chocolate and baking chocolate are most dangerous); onions and garlic (damage red blood cells — raw, cooked, and powdered forms are all toxic); macadamia nuts (cause weakness, hyperthermia, vomiting); raw yeast dough (expands in stomach, produces alcohol); alcohol and caffeine. Avocado is toxic to many species but has low toxicity to dogs (primarily a concern for birds and rabbits).' },
  { q: 'What foods are toxic to cats?', a: 'Cats share many toxicity risks with dogs but have some unique vulnerabilities: lilies (all parts of true lilies — Lilium and Hemerocallis species — cause acute kidney failure in cats; even small exposures such as pollen on the coat are toxic); onions and garlic (cause Heinz body anaemia); xylitol (less acutely toxic than in dogs but still harmful); raw fish (contains thiaminase, which destroys thiamine/vitamin B1); raw eggs; and paracetamol/acetaminophen (cats lack the liver enzyme to metabolise it — even a single tablet can be fatal).' },
  { q: 'Is chocolate dangerous for dogs — how much is toxic?', a: 'Yes — chocolate contains theobromine and caffeine, both of which dogs metabolise much more slowly than humans. Toxicity is dose- and type-dependent. Dark chocolate: toxic dose is approximately 1.3 g/kg body weight. Baking/unsweetened chocolate: toxic at approximately 0.2 g/kg. Milk chocolate: toxic at approximately 3.5 g/kg. White chocolate has very low theobromine but can still cause GI upset and pancreatitis. Symptoms of chocolate toxicity: vomiting, diarrhoea, restlessness, muscle tremors, seizures. Call ASPCA Poison Control immediately if ingestion is confirmed.' },
  { q: 'Can dogs eat peanut butter?', a: "Plain peanut butter (with no added xylitol) is safe for dogs in small amounts and is widely used to administer medications or as a training reward. However, xylitol — an artificial sweetener — is increasingly common in peanut butter brands and is highly toxic to dogs at tiny doses (as little as 0.1 g/kg can cause life-threatening hypoglycaemia). Always check the ingredients list for xylitol, sorbitol, erythritol, or 'natural sweetener' before giving peanut butter to a dog." },
  { q: 'Are grapes and raisins really that toxic to dogs?', a: 'Yes — grapes and raisins cause acute kidney injury in dogs, and the toxic mechanism is still not fully understood by researchers. Critically, there is no known safe dose — even one grape or a few raisins has caused fatal kidney failure in some dogs while other dogs have eaten larger amounts without obvious acute illness. The ASPCA and BSAVA recommend treating any grape or raisin ingestion as a veterinary emergency. Foods containing raisins (raisin bread, trail mix, fruitcake) are equally dangerous.' },
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

      <ToxicFoodChecker />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">This searchable database covers 50+ foods with safety ratings for dogs and cats — from everyday items like grapes (highly toxic to dogs) and onions (toxic to both species) to less-known hazards like xylitol (found in sugar-free gum, peanut butter, and medications), macadamia nuts, and certain sweeteners. For any suspected toxin ingestion, contact the <strong>ASPCA Animal Poison Control Center (888-426-4435)</strong> or your nearest emergency vet immediately.
  According to ASPCA data, the most common toxin ingestions in dogs involve human medications (often left accessible accidentally), foods, and household chemicals.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What foods are toxic to dogs?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What foods are toxic to dogs?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The most dangerous foods for dogs: xylitol (sugar-free gum, sugar-free peanut butter, some medications — causes severe hypoglycaemia and liver failure at very small doses); grapes and raisins (cause acute kidney failure — the mechanism is not fully understood but all forms are toxic); chocolate (theobromine toxicity — dark chocolate and baking chocolate are most dangerous); onions and garlic (damage red blood cells — raw, cooked, and powdered forms are all toxic); macadamia nuts (cause weakness, hyperthermia, vomiting); raw yeast dough (expands in stomach, produces alcohol); alcohol and caffeine. Avocado is toxic to many species but has low toxicity to dogs (primarily a concern for birds and rabbits).</p>
          </div>
          <div key='What foods are toxic to cats?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What foods are toxic to cats?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Cats share many toxicity risks with dogs but have some unique vulnerabilities: lilies (all parts of true lilies — Lilium and Hemerocallis species — cause acute kidney failure in cats; even small exposures such as pollen on the coat are toxic); onions and garlic (cause Heinz body anaemia); xylitol (less acutely toxic than in dogs but still harmful); raw fish (contains thiaminase, which destroys thiamine/vitamin B1); raw eggs; and paracetamol/acetaminophen (cats lack the liver enzyme to metabolise it — even a single tablet can be fatal).</p>
          </div>
          <div key='Is chocolate dangerous for dogs — how much is toxic?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is chocolate dangerous for dogs — how much is toxic?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — chocolate contains theobromine and caffeine, both of which dogs metabolise much more slowly than humans. Toxicity is dose- and type-dependent. Dark chocolate: toxic dose is approximately 1.3 g/kg body weight. Baking/unsweetened chocolate: toxic at approximately 0.2 g/kg. Milk chocolate: toxic at approximately 3.5 g/kg. White chocolate has very low theobromine but can still cause GI upset and pancreatitis. Symptoms of chocolate toxicity: vomiting, diarrhoea, restlessness, muscle tremors, seizures. Call ASPCA Poison Control immediately if ingestion is confirmed.</p>
          </div>
          <div key='Can dogs eat peanut butter?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Can dogs eat peanut butter?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Plain peanut butter (with no added xylitol) is safe for dogs in small amounts and is widely used to administer medications or as a training reward. However, xylitol — an artificial sweetener — is increasingly common in peanut butter brands and is highly toxic to dogs at tiny doses (as little as 0.1 g/kg can cause life-threatening hypoglycaemia). Always check the ingredients list for xylitol, sorbitol, erythritol, or 'natural sweetener' before giving peanut butter to a dog.</p>
          </div>
          <div key='Are grapes and raisins really that toxic to dogs?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Are grapes and raisins really that toxic to dogs?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — grapes and raisins cause acute kidney injury in dogs, and the toxic mechanism is still not fully understood by researchers. Critically, there is no known safe dose — even one grape or a few raisins has caused fatal kidney failure in some dogs while other dogs have eaten larger amounts without obvious acute illness. The ASPCA and BSAVA recommend treating any grape or raisin ingestion as a veterinary emergency. Foods containing raisins (raisin bread, trail mix, fruitcake) are equally dangerous.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/symptom-checker" href="/tools/symptom-checker" className="text-brand-start font-bold hover:underline text-sm">/tools/symptom-checker →</Link>
          <Link key="/tools/first-aid-quiz" href="/tools/first-aid-quiz" className="text-brand-start font-bold hover:underline text-sm">/tools/first-aid-quiz →</Link>
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

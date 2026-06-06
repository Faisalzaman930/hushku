import Link from "next/link";
import PetWaterCalculator from "./PetWaterCalculator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Water Calculator", item: "https://hushku.app/tools/water-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Water Calculator",
  url: "https://hushku.app/tools/water-calculator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How much water should a dog drink per day?', a: 'A healthy adult dog should drink approximately 20–70 ml per kg of body weight per day. For a 20 kg Labrador Retriever, that is 400–1,400 ml (roughly 1.5–6 cups). Dogs on wet food need significantly less from their bowl — wet food is 60–80% water. A dog who has just exercised vigorously will drink more immediately after. Consistent measurement over 3 days gives a reliable individual baseline.' },
  { q: 'How much water should a cat drink per day?', a: 'Healthy cats need approximately 40–60 ml per kg of body weight per day. A 4 kg cat needs about 160–240 ml daily. However, most of this should come from food — cats evolved as desert animals and naturally have a low thirst drive. A cat eating wet food may drink almost nothing from a bowl; a cat on dry kibble needs to drink substantially more. Low water intake in cats on dry food is a risk factor for lower urinary tract disease (FLUTD) and kidney disease.' },
  { q: 'Why is my dog drinking more water than usual?', a: "Increased water consumption (polydipsia) in dogs is associated with several conditions: diabetes mellitus (polyuria/polydipsia is a hallmark symptom), Cushing's disease (hyperadrenocorticism), chronic kidney disease, pyometra in intact females, hypercalcaemia, and liver disease. Medications such as corticosteroids and phenobarbitone also increase thirst as a known side effect. If your dog is consistently drinking more than 90–100 ml/kg/day without an obvious benign cause (heat, exercise, diet change), a veterinary blood and urine panel is warranted." },
  { q: 'Does diet affect how much water my pet needs?', a: 'Yes — significantly. Wet food is 70–80% water and substantially reduces how much a dog or cat needs to drink from a bowl. Dry kibble is only 8–12% water, so dogs and cats on dry diets need to drink much more. If you recently switched from wet to dry food and notice your pet drinking more, this is the expected and appropriate response — not a health concern.' },
  { q: 'How can I encourage my cat to drink more water?', a: 'Cats are attracted to moving water — a pet water fountain increases consumption in most cats compared to a static bowl. Multiple water stations around the home also help. Feeding wet or raw food, adding water to dry food, or offering a small amount of low-sodium broth are evidence-supported strategies. Stainless steel or ceramic bowls are preferable to plastic, which can harbour bacteria that some cats find aversive.' },
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

      <PetWaterCalculator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Normal daily water intake for dogs and cats is <strong>20–70 ml per kg of body weight</strong>, according to veterinary internal medicine guidelines. The precise requirement varies by diet type (wet food contributes 60–80% of moisture needs; dry kibble almost none), ambient temperature, exercise level, and health status. Polydipsia — excessive thirst defined as drinking more than 90–100 ml/kg/day — is a clinically significant symptom associated with diabetes mellitus, Cushing's disease, kidney disease, and pyometra.
  This calculator gives you a personalised daily water target so you can establish a baseline and recognise deviations early.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How much water should a dog drink per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much water should a dog drink per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">A healthy adult dog should drink approximately 20–70 ml per kg of body weight per day. For a 20 kg Labrador Retriever, that is 400–1,400 ml (roughly 1.5–6 cups). Dogs on wet food need significantly less from their bowl — wet food is 60–80% water. A dog who has just exercised vigorously will drink more immediately after. Consistent measurement over 3 days gives a reliable individual baseline.</p>
          </div>
          <div key='How much water should a cat drink per day?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much water should a cat drink per day?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Healthy cats need approximately 40–60 ml per kg of body weight per day. A 4 kg cat needs about 160–240 ml daily. However, most of this should come from food — cats evolved as desert animals and naturally have a low thirst drive. A cat eating wet food may drink almost nothing from a bowl; a cat on dry kibble needs to drink substantially more. Low water intake in cats on dry food is a risk factor for lower urinary tract disease (FLUTD) and kidney disease.</p>
          </div>
          <div key='Why is my dog drinking more water than usual?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Why is my dog drinking more water than usual?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Increased water consumption (polydipsia) in dogs is associated with several conditions: diabetes mellitus (polyuria/polydipsia is a hallmark symptom), Cushing's disease (hyperadrenocorticism), chronic kidney disease, pyometra in intact females, hypercalcaemia, and liver disease. Medications such as corticosteroids and phenobarbitone also increase thirst as a known side effect. If your dog is consistently drinking more than 90–100 ml/kg/day without an obvious benign cause (heat, exercise, diet change), a veterinary blood and urine panel is warranted.</p>
          </div>
          <div key='Does diet affect how much water my pet needs?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Does diet affect how much water my pet needs?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — significantly. Wet food is 70–80% water and substantially reduces how much a dog or cat needs to drink from a bowl. Dry kibble is only 8–12% water, so dogs and cats on dry diets need to drink much more. If you recently switched from wet to dry food and notice your pet drinking more, this is the expected and appropriate response — not a health concern.</p>
          </div>
          <div key='How can I encourage my cat to drink more water?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How can I encourage my cat to drink more water?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Cats are attracted to moving water — a pet water fountain increases consumption in most cats compared to a static bowl. Multiple water stations around the home also help. Feeding wet or raw food, adding water to dry food, or offering a small amount of low-sodium broth are evidence-supported strategies. Stainless steel or ceramic bowls are preferable to plastic, which can harbour bacteria that some cats find aversive.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/resources/why-is-my-dog-drinking-so-much-water" href="/resources/why-is-my-dog-drinking-so-much-water" className="text-brand-start font-bold hover:underline text-sm">/resources/why-is-my-dog-drinking-so-much-water →</Link>
          <Link key="/health/daily-care" href="/health/daily-care" className="text-brand-start font-bold hover:underline text-sm">/health/daily-care →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

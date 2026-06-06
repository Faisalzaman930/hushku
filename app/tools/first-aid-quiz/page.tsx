import Link from "next/link";
import FirstAidQuiz from "./FirstAidQuiz";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "First Aid Quiz", item: "https://hushku.app/tools/first-aid-quiz" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "First Aid Quiz",
  url: "https://hushku.app/tools/first-aid-quiz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What are the most common pet emergencies?', a: 'The most common pet emergencies seen in veterinary ERs are: gastric dilatation-volvulus (bloat) in large dogs, urethral obstruction in male cats, toxin ingestion (chocolate, xylitol, grapes, medications), trauma (road accidents, falls), respiratory distress (especially in brachycephalic breeds), allergic reactions and anaphylaxis, seizures, and heatstroke. Urethral obstruction in male cats is particularly time-critical — complete obstruction is fatal within 24–48 hours without treatment.' },
  { q: 'What should I do if my dog eats something poisonous?', a: 'Call the ASPCA Animal Poison Control Center (888-426-4435) or your nearest emergency vet immediately. Do not induce vomiting unless explicitly instructed by a vet or poison control — some toxins (caustic substances, hydrocarbons) cause more damage coming back up. Note the substance, amount ingested, and time of ingestion before you call. Common household toxins include xylitol (sugar-free products), grapes and raisins, macadamia nuts, ibuprofen and acetaminophen, rat bait, and certain houseplants including lilies (highly toxic to cats).' },
  { q: 'How do I perform CPR on a dog or cat?', a: 'Dog CPR: place the dog on its side, locate the heart behind the left elbow. Compress the chest 30 times at a rate of 100–120 per minute (same as human CPR), then give 2 rescue breaths by holding the mouth closed and breathing into the nose. Cat CPR: same positioning, but use only the thumb and one finger for compressions on very small animals. Get your pet to an emergency vet immediately — CPR is a bridge measure, not a substitute for veterinary care.' },
  { q: "What is the difference between a medical emergency and 'watch at home'?", a: "Emergencies requiring immediate (same night) vet care: difficulty breathing, collapse, seizures lasting more than 2 minutes, suspected poisoning, major trauma or bleeding, inability to urinate (especially male cats), pale or blue gums, distended abdomen. Monitor at home (vet visit next day or in 24 hours): mild vomiting (once or twice, otherwise normal), mild diarrhoea without blood, single episode of limping without obvious injury. When in doubt, call your vet's emergency line — they can advise by phone." },
  { q: 'How do I treat a dog or cat that is choking?', a: 'If the animal can still breathe, cough, or make noise, do not intervene — let them attempt to clear the obstruction naturally and get to a vet. If the animal is silent and cannot breathe: for dogs, look in the mouth for a visible obstruction and sweep it out with a finger only if you can clearly see it; then use the Heimlich manoeuvre (place hands behind last rib and thrust sharply inward and upward). For cats, use gentle back blows between shoulder blades. Transport to emergency vet immediately regardless of outcome.' },
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

      <FirstAidQuiz />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Pet emergencies are time-critical. Knowing whether a situation requires an emergency vet visit in the next hour — or can wait until morning — can save a pet's life and prevent owners from panicking unnecessarily. This 6-question quiz tests your knowledge of pet first aid, triage decisions, and emergency response protocols across common scenarios including poisoning, seizures, choking, and trauma.
  The <strong>American Red Cross</strong> offers a Pet First Aid app and certification programme. The <strong>ASPCA Animal Poison Control Center</strong> (888-426-4435) is available 24/7 for poisoning emergencies.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What are the most common pet emergencies?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are the most common pet emergencies?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The most common pet emergencies seen in veterinary ERs are: gastric dilatation-volvulus (bloat) in large dogs, urethral obstruction in male cats, toxin ingestion (chocolate, xylitol, grapes, medications), trauma (road accidents, falls), respiratory distress (especially in brachycephalic breeds), allergic reactions and anaphylaxis, seizures, and heatstroke. Urethral obstruction in male cats is particularly time-critical — complete obstruction is fatal within 24–48 hours without treatment.</p>
          </div>
          <div key='What should I do if my dog eats something poisonous?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What should I do if my dog eats something poisonous?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Call the ASPCA Animal Poison Control Center (888-426-4435) or your nearest emergency vet immediately. Do not induce vomiting unless explicitly instructed by a vet or poison control — some toxins (caustic substances, hydrocarbons) cause more damage coming back up. Note the substance, amount ingested, and time of ingestion before you call. Common household toxins include xylitol (sugar-free products), grapes and raisins, macadamia nuts, ibuprofen and acetaminophen, rat bait, and certain houseplants including lilies (highly toxic to cats).</p>
          </div>
          <div key='How do I perform CPR on a dog or cat?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I perform CPR on a dog or cat?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Dog CPR: place the dog on its side, locate the heart behind the left elbow. Compress the chest 30 times at a rate of 100–120 per minute (same as human CPR), then give 2 rescue breaths by holding the mouth closed and breathing into the nose. Cat CPR: same positioning, but use only the thumb and one finger for compressions on very small animals. Get your pet to an emergency vet immediately — CPR is a bridge measure, not a substitute for veterinary care.</p>
          </div>
          <div key="What is the difference between a medical emergency and 'watch at home'?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the difference between a medical emergency and 'watch at home'?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Emergencies requiring immediate (same night) vet care: difficulty breathing, collapse, seizures lasting more than 2 minutes, suspected poisoning, major trauma or bleeding, inability to urinate (especially male cats), pale or blue gums, distended abdomen. Monitor at home (vet visit next day or in 24 hours): mild vomiting (once or twice, otherwise normal), mild diarrhoea without blood, single episode of limping without obvious injury. When in doubt, call your vet's emergency line — they can advise by phone.</p>
          </div>
          <div key='How do I treat a dog or cat that is choking?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I treat a dog or cat that is choking?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">If the animal can still breathe, cough, or make noise, do not intervene — let them attempt to clear the obstruction naturally and get to a vet. If the animal is silent and cannot breathe: for dogs, look in the mouth for a visible obstruction and sweep it out with a finger only if you can clearly see it; then use the Heimlich manoeuvre (place hands behind last rib and thrust sharply inward and upward). For cats, use gentle back blows between shoulder blades. Transport to emergency vet immediately regardless of outcome.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/symptom-checker" href="/tools/symptom-checker" className="text-brand-start font-bold hover:underline text-sm">/tools/symptom-checker →</Link>
          <Link key="/tools/toxic-food" href="/tools/toxic-food" className="text-brand-start font-bold hover:underline text-sm">/tools/toxic-food →</Link>
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

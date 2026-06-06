import Link from "next/link";
import SymptomCheckerTool from "./SymptomCheckerTool";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Symptom Checker", item: "https://hushku.app/tools/symptom-checker" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Symptom Checker",
  url: "https://hushku.app/tools/symptom-checker",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'When should I take my dog to an emergency vet?', a: 'Seek emergency veterinary care immediately for: difficulty breathing or open-mouth breathing (especially in cats), collapse or inability to stand, seizures lasting more than 2 minutes or cluster seizures, suspected poisoning (call ASPCA Poison Control first), distended abdomen in large dogs (possible GDV/bloat), inability to urinate — especially in male cats (complete urethral obstruction is fatal within 24–48 hours without treatment), pale, white, blue, or grey gums, severe and uncontrolled bleeding, trauma (road accident, fall from height, dog attack), and sudden-onset extreme lethargy.' },
  { q: 'Is my dog vomiting serious?', a: 'Occasional vomiting (once or twice) in an otherwise normal, alert dog is usually benign — common causes include eating too fast, eating grass, or minor dietary indiscretion. Concerning signs that warrant same-day or emergency vet care: vomiting blood or material that looks like coffee grounds, vomiting combined with extreme lethargy or pain, vomiting plus abdominal distension in large breeds (potential GDV), repeated vomiting (5+ times in a day), vomiting in a puppy or senior dog, or vomiting combined with known or suspected toxin ingestion.' },
  { q: 'Why is my cat not eating?', a: 'Cats that stop eating for more than 24–48 hours require veterinary attention regardless of apparent cause. Unlike dogs, cats that go without food for 3–5 days are at risk of hepatic lipidosis — a severe and potentially fatal liver condition where fat accumulates in liver cells during caloric restriction. Common causes of anorexia in cats include dental pain (the most common cause in adult cats), upper respiratory infection (loss of smell eliminates appetite), nausea from various systemic conditions, stress from environmental changes, and serious underlying disease.' },
  { q: 'What does it mean if my dog has pale gums?', a: 'Pale, white, grey, or blue gums are a veterinary emergency indicating poor oxygen delivery to tissues — this can result from severe anaemia, internal bleeding, shock, circulatory failure, or respiratory compromise. Normal dog gum colour is pink (like bubblegum) and returns to pink within 2 seconds of pressing firmly with a finger (capillary refill time). Any deviation from pink warrants immediate emergency vet assessment.' },
  { q: 'How do I know if my cat is in pain?', a: 'Cats are stoic and mask pain effectively. Signs of pain in cats: reduced activity or hiding, change in posture (hunched with feet tucked under), reduced grooming or over-grooming a specific area, changes in facial expression (orbital tightening, ear flattening, whisker position changes — the validated Feline Grimace Scale describes these), vocalisation when touched in a specific area, reluctance to jump or climb, reduced appetite, and increased aggression when handled. Dental disease is the most common unrecognised source of chronic pain in cats.' },
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

      <SymptomCheckerTool />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">This tool allows you to search or browse 40+ common pet symptoms and returns an urgency rating (Emergency, See Vet Soon, Monitor at Home), a list of potential causes, and immediate action guidance. It is designed for triage — helping you decide whether a symptom requires an emergency vet visit tonight, a next-day appointment, or careful home monitoring.
  <strong>This tool is not a substitute for veterinary diagnosis.</strong> When in doubt, call your vet's emergency line — most practices offer 24/7 telephone triage. For poisoning, call the <strong>ASPCA Animal Poison Control Center at 888-426-4435</strong>.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='When should I take my dog to an emergency vet?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">When should I take my dog to an emergency vet?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Seek emergency veterinary care immediately for: difficulty breathing or open-mouth breathing (especially in cats), collapse or inability to stand, seizures lasting more than 2 minutes or cluster seizures, suspected poisoning (call ASPCA Poison Control first), distended abdomen in large dogs (possible GDV/bloat), inability to urinate — especially in male cats (complete urethral obstruction is fatal within 24–48 hours without treatment), pale, white, blue, or grey gums, severe and uncontrolled bleeding, trauma (road accident, fall from height, dog attack), and sudden-onset extreme lethargy.</p>
          </div>
          <div key='Is my dog vomiting serious?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is my dog vomiting serious?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Occasional vomiting (once or twice) in an otherwise normal, alert dog is usually benign — common causes include eating too fast, eating grass, or minor dietary indiscretion. Concerning signs that warrant same-day or emergency vet care: vomiting blood or material that looks like coffee grounds, vomiting combined with extreme lethargy or pain, vomiting plus abdominal distension in large breeds (potential GDV), repeated vomiting (5+ times in a day), vomiting in a puppy or senior dog, or vomiting combined with known or suspected toxin ingestion.</p>
          </div>
          <div key='Why is my cat not eating?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Why is my cat not eating?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Cats that stop eating for more than 24–48 hours require veterinary attention regardless of apparent cause. Unlike dogs, cats that go without food for 3–5 days are at risk of hepatic lipidosis — a severe and potentially fatal liver condition where fat accumulates in liver cells during caloric restriction. Common causes of anorexia in cats include dental pain (the most common cause in adult cats), upper respiratory infection (loss of smell eliminates appetite), nausea from various systemic conditions, stress from environmental changes, and serious underlying disease.</p>
          </div>
          <div key='What does it mean if my dog has pale gums?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What does it mean if my dog has pale gums?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Pale, white, grey, or blue gums are a veterinary emergency indicating poor oxygen delivery to tissues — this can result from severe anaemia, internal bleeding, shock, circulatory failure, or respiratory compromise. Normal dog gum colour is pink (like bubblegum) and returns to pink within 2 seconds of pressing firmly with a finger (capillary refill time). Any deviation from pink warrants immediate emergency vet assessment.</p>
          </div>
          <div key='How do I know if my cat is in pain?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I know if my cat is in pain?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Cats are stoic and mask pain effectively. Signs of pain in cats: reduced activity or hiding, change in posture (hunched with feet tucked under), reduced grooming or over-grooming a specific area, changes in facial expression (orbital tightening, ear flattening, whisker position changes — the validated Feline Grimace Scale describes these), vocalisation when touched in a specific area, reluctance to jump or climb, reduced appetite, and increased aggression when handled. Dental disease is the most common unrecognised source of chronic pain in cats.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/toxic-food" href="/tools/toxic-food" className="text-brand-start font-bold hover:underline text-sm">/tools/toxic-food →</Link>
          <Link key="/tools/first-aid-quiz" href="/tools/first-aid-quiz" className="text-brand-start font-bold hover:underline text-sm">/tools/first-aid-quiz →</Link>
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          <Link key="/health/reminders" href="/health/reminders" className="text-brand-start font-bold hover:underline text-sm">/health/reminders →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

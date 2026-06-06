import Link from "next/link";
import PetBMIChecker from "./PetBMIChecker";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Pet Bmi", item: "https://hushku.app/tools/pet-bmi" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pet Bmi",
  url: "https://hushku.app/tools/pet-bmi",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How do I know if my dog is overweight?', a: 'Use the Body Condition Score (BCS) system. At ideal weight (BCS 4–5 on a 1–9 scale): you can feel ribs easily with light pressure but cannot see them; there is a visible waist when viewed from above; the abdomen tucks up when viewed from the side. Overweight (BCS 6–7): ribs require firm pressure to feel; waist is barely visible or absent; little or no abdominal tuck. Obese (BCS 8–9): ribs cannot be felt; prominent fat deposits over spine and base of tail; no waist visible; pendulous abdomen.' },
  { q: 'What health problems are caused by obesity in pets?', a: 'Canine and feline obesity is associated with shortened lifespan (studies show obese dogs live 1.8 years less on average than ideal-weight dogs), osteoarthritis and joint inflammation, type 2 diabetes (particularly in cats), cardiovascular disease, respiratory compromise (especially in brachycephalic breeds), increased anaesthetic risk, hepatic lipidosis in cats, increased cancer risk, and urinary tract disease. The Association for Pet Obesity Prevention notes that even modest weight reduction — 10–15% of body weight — produces measurable improvement in mobility and quality of life in arthritic dogs.' },
  { q: "How much should I reduce my pet's food to help them lose weight?", a: 'A safe weight loss rate for dogs is approximately 1–2% of body weight per week; for cats, 0.5–1% per week. This typically requires feeding approximately 70–80% of the maintenance caloric requirement. Do not restrict calories below 60% of RER without veterinary supervision — rapid restriction in cats risks hepatic lipidosis, a potentially fatal liver condition triggered by fat mobilisation during caloric restriction. Switching to a high-protein, lower-calorie food formulation is often more sustainable than reducing portions of a calorie-dense food.' },
  { q: 'Is it normal for a cat to be chubby?', a: "No — despite being culturally normalised, obesity in cats is a serious health condition. The term 'fat cat' and the prevalence of overweight cats on social media have contributed to owner perception that a heavy cat is normal or cute. A healthy adult cat typically weighs 3.5–5.5 kg depending on frame. A 6–7 kg cat is overweight; an 8+ kg cat is obese. Common causes include indoor sedentary lifestyle, ad-lib dry food feeding, and neutering (which reduces metabolic rate by approximately 20–25%)." },
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

      <PetBMIChecker />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">The standard human BMI formula is not appropriate for pets — a dog's healthy weight depends on breed, sex, and frame size. This tool uses <strong>Body Condition Score (BCS)</strong>, the system recommended by the <strong>World Small Animal Veterinary Association (WSAVA)</strong>, combined with breed size norms to assess whether your pet is underweight, ideal, overweight, or obese. Over 60% of US dogs and cats are currently overweight according to APOP 2024 data — and the majority of their owners believe their pet is at a healthy weight.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How do I know if my dog is overweight?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I know if my dog is overweight?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Use the Body Condition Score (BCS) system. At ideal weight (BCS 4–5 on a 1–9 scale): you can feel ribs easily with light pressure but cannot see them; there is a visible waist when viewed from above; the abdomen tucks up when viewed from the side. Overweight (BCS 6–7): ribs require firm pressure to feel; waist is barely visible or absent; little or no abdominal tuck. Obese (BCS 8–9): ribs cannot be felt; prominent fat deposits over spine and base of tail; no waist visible; pendulous abdomen.</p>
          </div>
          <div key='What health problems are caused by obesity in pets?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What health problems are caused by obesity in pets?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Canine and feline obesity is associated with shortened lifespan (studies show obese dogs live 1.8 years less on average than ideal-weight dogs), osteoarthritis and joint inflammation, type 2 diabetes (particularly in cats), cardiovascular disease, respiratory compromise (especially in brachycephalic breeds), increased anaesthetic risk, hepatic lipidosis in cats, increased cancer risk, and urinary tract disease. The Association for Pet Obesity Prevention notes that even modest weight reduction — 10–15% of body weight — produces measurable improvement in mobility and quality of life in arthritic dogs.</p>
          </div>
          <div key="How much should I reduce my pet's food to help them lose weight?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How much should I reduce my pet's food to help them lose weight?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">A safe weight loss rate for dogs is approximately 1–2% of body weight per week; for cats, 0.5–1% per week. This typically requires feeding approximately 70–80% of the maintenance caloric requirement. Do not restrict calories below 60% of RER without veterinary supervision — rapid restriction in cats risks hepatic lipidosis, a potentially fatal liver condition triggered by fat mobilisation during caloric restriction. Switching to a high-protein, lower-calorie food formulation is often more sustainable than reducing portions of a calorie-dense food.</p>
          </div>
          <div key='Is it normal for a cat to be chubby?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is it normal for a cat to be chubby?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">No — despite being culturally normalised, obesity in cats is a serious health condition. The term 'fat cat' and the prevalence of overweight cats on social media have contributed to owner perception that a heavy cat is normal or cute. A healthy adult cat typically weighs 3.5–5.5 kg depending on frame. A 6–7 kg cat is overweight; an 8+ kg cat is obese. Common causes include indoor sedentary lifestyle, ad-lib dry food feeding, and neutering (which reduces metabolic rate by approximately 20–25%).</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          <Link key="/tools/feeding-calculator" href="/tools/feeding-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/feeding-calculator →</Link>
          <Link key="/health/weight-tracker" href="/health/weight-tracker" className="text-brand-start font-bold hover:underline text-sm">/health/weight-tracker →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

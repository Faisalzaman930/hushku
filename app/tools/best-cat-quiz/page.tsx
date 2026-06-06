import Link from "next/link";
import BestCatBreedQuiz from "./BestCatBreedQuiz";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Best Cat Quiz", item: "https://hushku.app/tools/best-cat-quiz" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Best Cat Quiz",
  url: "https://hushku.app/tools/best-cat-quiz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What is the best cat breed for beginners?', a: 'The best cat breeds for first-time owners are those with adaptable, forgiving temperaments that do not require specialist handling. Top recommendations include the Ragdoll (famously docile, gentle with handling, low-maintenance temperament), the British Shorthair (independent, calm, not demanding), the Maine Coon (sociable but not clingy, robust), and the Domestic Shorthair / moggy (the most adaptable of all, typically robust health). Avoid highly vocal, demanding breeds like Siamese or Burmese as a first cat unless you actively want that engagement level.' },
  { q: 'What is the best cat breed for small apartments?', a: 'Low-energy, indoor-adapted breeds suit apartments best. The British Shorthair, Persian, and Ragdoll are calm, non-destructive, and content with indoor life. The Scottish Fold and Exotic Shorthair are similar in temperament. Avoid Bengal cats and Abyssinians in apartments — both breeds are high-energy, athletic, and need vertical space and stimulation to prevent destructive behaviour. Any cat in an apartment benefits from window perches, vertical scratching posts, and interactive play twice daily.' },
  { q: 'Are there hypoallergenic cat breeds?', a: 'No cat breed is 100% allergen-free — all cats produce Fel d 1, the primary cat allergen. However, some breeds produce significantly less: the Balinese, Siberian, and Sphynx are frequently cited as lower-allergen options. Male cats generally produce more Fel d 1 than females; entire (unspayed/unneutered) males produce the most. Regular bathing of the cat and HEPA air filtration in the home reduces airborne allergen levels regardless of breed.' },
  { q: 'What cat breeds are best with children?', a: 'Maine Coons, Ragdolls, and Birmans are consistently recommended for families with children due to their patient, gentle temperaments and tolerance of handling. These breeds are less likely to scratch or hide when approached by young children. Avoid timid breeds like the Russian Blue or Norwegian Forest Cat for households with boisterous children — these cats are easily overwhelmed and will spend most of their time hiding rather than engaging.' },
  { q: 'What is the difference between an indoor and outdoor cat?', a: 'Indoor cats live exclusively inside; outdoor cats have access to the outdoors, either freely or in an enclosed garden (catio). Indoor cats live significantly longer on average — 12–18 years versus 5–7 years for outdoor cats — due to reduced exposure to road accidents, predators, disease, and injury. The RSPCA and most veterinary bodies recommend keeping cats indoors, particularly in urban areas. Breeds like the Ragdoll and Persian are better suited to indoor life; breeds like the Norwegian Forest Cat and Bengal typically adapt better if outdoor access is available.' },
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

      <BestCatBreedQuiz />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Finding the right cat breed matters more than most people realise. A Bengal's high energy and vocalisation make it a poor match for a quiet apartment; a Persian's long coat demands daily grooming that low-maintenance owners resent. This quiz asks 7 questions — covering activity level, living space, allergy sensitivity, grooming tolerance, indoor/outdoor preference, family composition, and desired companionship style — to match you with the ideal feline companion from 15 cat breed profiles.
  According to the <strong>American Pet Products Association (APPA)</strong>, there are approximately 46 million cat-owning households in the US. The most common rehoming reason cited by cat owners is "incompatible temperament" — a problem this quiz is designed to prevent.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What is the best cat breed for beginners?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the best cat breed for beginners?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The best cat breeds for first-time owners are those with adaptable, forgiving temperaments that do not require specialist handling. Top recommendations include the Ragdoll (famously docile, gentle with handling, low-maintenance temperament), the British Shorthair (independent, calm, not demanding), the Maine Coon (sociable but not clingy, robust), and the Domestic Shorthair / moggy (the most adaptable of all, typically robust health). Avoid highly vocal, demanding breeds like Siamese or Burmese as a first cat unless you actively want that engagement level.</p>
          </div>
          <div key='What is the best cat breed for small apartments?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the best cat breed for small apartments?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Low-energy, indoor-adapted breeds suit apartments best. The British Shorthair, Persian, and Ragdoll are calm, non-destructive, and content with indoor life. The Scottish Fold and Exotic Shorthair are similar in temperament. Avoid Bengal cats and Abyssinians in apartments — both breeds are high-energy, athletic, and need vertical space and stimulation to prevent destructive behaviour. Any cat in an apartment benefits from window perches, vertical scratching posts, and interactive play twice daily.</p>
          </div>
          <div key='Are there hypoallergenic cat breeds?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Are there hypoallergenic cat breeds?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">No cat breed is 100% allergen-free — all cats produce Fel d 1, the primary cat allergen. However, some breeds produce significantly less: the Balinese, Siberian, and Sphynx are frequently cited as lower-allergen options. Male cats generally produce more Fel d 1 than females; entire (unspayed/unneutered) males produce the most. Regular bathing of the cat and HEPA air filtration in the home reduces airborne allergen levels regardless of breed.</p>
          </div>
          <div key='What cat breeds are best with children?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What cat breeds are best with children?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Maine Coons, Ragdolls, and Birmans are consistently recommended for families with children due to their patient, gentle temperaments and tolerance of handling. These breeds are less likely to scratch or hide when approached by young children. Avoid timid breeds like the Russian Blue or Norwegian Forest Cat for households with boisterous children — these cats are easily overwhelmed and will spend most of their time hiding rather than engaging.</p>
          </div>
          <div key='What is the difference between an indoor and outdoor cat?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the difference between an indoor and outdoor cat?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Indoor cats live exclusively inside; outdoor cats have access to the outdoors, either freely or in an enclosed garden (catio). Indoor cats live significantly longer on average — 12–18 years versus 5–7 years for outdoor cats — due to reduced exposure to road accidents, predators, disease, and injury. The RSPCA and most veterinary bodies recommend keeping cats indoors, particularly in urban areas. Breeds like the Ragdoll and Persian are better suited to indoor life; breeds like the Norwegian Forest Cat and Bengal typically adapt better if outdoor access is available.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/breeds/cats" href="/breeds/cats" className="text-brand-start font-bold hover:underline text-sm">/breeds/cats →</Link>
          <Link key="/tools/best-dog-quiz" href="/tools/best-dog-quiz" className="text-brand-start font-bold hover:underline text-sm">/tools/best-dog-quiz →</Link>
          <Link key="/adoption" href="/adoption" className="text-brand-start font-bold hover:underline text-sm">/adoption →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

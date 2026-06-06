import Link from "next/link";
import PetNameGenerator from "./PetNameGenerator";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Name Generator", item: "https://hushku.app/tools/name-generator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Name Generator",
  url: "https://hushku.app/tools/name-generator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What makes a good name for a dog?', a: "Veterinary behaviourists and animal trainers recommend names that are: 1–2 syllables (easier to say quickly in training), end in a vowel or 'y' sound (higher pitch carries better and gets the dog's attention), and do not sound like common commands (avoid 'Kit' which sounds like 'sit', 'Bo' which sounds like 'no', 'Ray' which sounds like 'stay'). Short, distinctive names produce the fastest conditioned response in training. That said, any name works with consistent use — the dog learns the sound, not the meaning." },
  { q: 'Do cats actually respond to their names?', a: 'Yes — a 2019 study published in <em>Scientific Reports</em> by Atsuko Saito and colleagues demonstrated that domestic cats can distinguish their own name from other words, responding with head movements and ear orientation. Cats are more selective in showing this response than dogs, but the ability is well-documented. Cats respond better to names with sharp consonants (K, T, P sounds) and higher-pitched vowels, consistent with the sounds their owners use when speaking to them in excited or affectionate tones.' },
  { q: "Is it bad to change a rescue pet's name?", a: "Not at all — rescue pets adapt to new names within days to weeks with consistent positive reinforcement. Say the new name whenever the pet looks at you or comes toward you, and immediately reward. Avoid repeating the name when the pet is not responding, which can teach them to ignore it. If you want to ease the transition, choose a new name that sounds similar to the original (e.g. transitioning 'Buster' to 'Rusty' uses the same vowel sounds and ending)." },
  { q: 'What are the most popular pet names?', a: "According to Rover and VetStreet annual surveys, the top dog names in the US are consistently: Luna, Bella, Daisy, Max, Charlie, Cooper, Buddy, Milo, Lola, and Sadie. Top cat names include: Luna, Bella, Oliver, Leo, Milo, Charlie, Max, Lucy, Lily, and Nala. If uniqueness matters to you, avoid these — at any dog park, calling 'Luna' or 'Bella' will produce multiple responses." },
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

      <PetNameGenerator />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Naming a pet is a surprisingly significant decision — you will say the name thousands of times, and the dog or cat will learn to respond to it. Research in animal cognition suggests dogs respond best to names with 2 syllables ending in a vowel sound (the 'soft' consonant ending carries better in outdoor environments and in excited states). This generator produces name suggestions based on species, personality type, and coat colour — drawing from a database of hundreds of options organised by theme, origin, and phonetic quality.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What makes a good name for a dog?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What makes a good name for a dog?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Veterinary behaviourists and animal trainers recommend names that are: 1–2 syllables (easier to say quickly in training), end in a vowel or 'y' sound (higher pitch carries better and gets the dog's attention), and do not sound like common commands (avoid 'Kit' which sounds like 'sit', 'Bo' which sounds like 'no', 'Ray' which sounds like 'stay'). Short, distinctive names produce the fastest conditioned response in training. That said, any name works with consistent use — the dog learns the sound, not the meaning.</p>
          </div>
          <div key='Do cats actually respond to their names?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Do cats actually respond to their names?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — a 2019 study published in <em>Scientific Reports</em> by Atsuko Saito and colleagues demonstrated that domestic cats can distinguish their own name from other words, responding with head movements and ear orientation. Cats are more selective in showing this response than dogs, but the ability is well-documented. Cats respond better to names with sharp consonants (K, T, P sounds) and higher-pitched vowels, consistent with the sounds their owners use when speaking to them in excited or affectionate tones.</p>
          </div>
          <div key="Is it bad to change a rescue pet's name?" className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is it bad to change a rescue pet's name?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Not at all — rescue pets adapt to new names within days to weeks with consistent positive reinforcement. Say the new name whenever the pet looks at you or comes toward you, and immediately reward. Avoid repeating the name when the pet is not responding, which can teach them to ignore it. If you want to ease the transition, choose a new name that sounds similar to the original (e.g. transitioning 'Buster' to 'Rusty' uses the same vowel sounds and ending).</p>
          </div>
          <div key='What are the most popular pet names?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are the most popular pet names?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">According to Rover and VetStreet annual surveys, the top dog names in the US are consistently: Luna, Bella, Daisy, Max, Charlie, Cooper, Buddy, Milo, Lola, and Sadie. Top cat names include: Luna, Bella, Oliver, Leo, Milo, Charlie, Max, Lucy, Lily, and Nala. If uniqueness matters to you, avoid these — at any dog park, calling 'Luna' or 'Bella' will produce multiple responses.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/tools/birthday-countdown" href="/tools/birthday-countdown" className="text-brand-start font-bold hover:underline text-sm">/tools/birthday-countdown →</Link>
          <Link key="/breeds/dogs" href="/breeds/dogs" className="text-brand-start font-bold hover:underline text-sm">/breeds/dogs →</Link>
          <Link key="/adoption" href="/adoption" className="text-brand-start font-bold hover:underline text-sm">/adoption →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import BestDogQuizClient from "./BestDogQuizClient";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Best Dog Breed Quiz", item: "https://hushku.app/tools/best-dog-quiz" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Best Dog Breed Quiz",
  "url": "https://hushku.app/tools/best-dog-quiz",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Answer 7 questions about your lifestyle, living space, experience, and household — and get matched with the ideal dog breed for you. Free and instant.",
  "creator": { "@type": "Organization", "name": "Hushku", "url": "https://hushku.app" },
  "featureList": [
    "Lifestyle-based breed matching",
    "Activity level filter",
    "Space and housing filter",
    "Allergy and shedding filter",
    "Family and household filter",
    "15 breed profiles",
    "Direct adoption links per result",
  ],
};

const faqs = [
  {
    q: "What dog breed is best for small apartments?",
    a: "The best dog breeds for small apartments are low-energy, compact dogs that do not require a large yard. Top apartment-friendly breeds include the French Bulldog, Cavalier King Charles Spaniel, Shih Tzu, Chihuahua, and Maltese. These breeds are content with short daily walks and indoor play. Avoid high-energy breeds like Border Collies, Australian Shepherds, and Siberian Huskies in apartments — they require extensive daily exercise and space to avoid behavioural problems.",
  },
  {
    q: "What is the best dog breed for first-time owners?",
    a: "The best dog breeds for first-time owners are breeds that are forgiving, trainable, and naturally friendly. The Labrador Retriever is consistently ranked as the top choice for new owners — it is eager to please, responds well to basic positive reinforcement training, and tolerates the mistakes of inexperienced handlers. Other good choices include the Golden Retriever, Cavalier King Charles Spaniel, Poodle, and Beagle. Avoid high-drive working breeds (German Shepherd, Border Collie, Malinois) until you have experience.",
  },
  {
    q: "What dog breed is best for active people and runners?",
    a: "The best dog breeds for highly active people include the Border Collie, Australian Shepherd, Vizsla, Weimaraner, Siberian Husky, and Labrador Retriever. These breeds were bred for endurance work and genuinely need 1–2 hours of vigorous daily exercise. The Border Collie and Australian Shepherd also require significant mental stimulation — without a job to do, they become destructive. If you run long distances, the Vizsla and Weimaraner are particularly well-suited as they are built for sustained aerobic activity.",
  },
  {
    q: "What dog breeds are best for families with young children?",
    a: "The best dog breeds for families with young children are gentle, patient, and naturally tolerant. The Golden Retriever, Labrador Retriever, Beagle, Cavalier King Charles Spaniel, and Bernese Mountain Dog are consistently recommended for family households. The Golden and Labrador score highest for child-friendliness due to their soft mouths, patient temperaments, and love of play. All dogs — regardless of breed — should be supervised with children under 10, and children should be taught appropriate interaction from the start.",
  },
  {
    q: "What dog breeds are hypoallergenic or low-shedding?",
    a: "No dog breed is 100% allergen-free, but several breeds produce significantly less dander and shed minimally, making them more suitable for allergy sufferers. The best low-shedding breeds include the Poodle (and all Poodle crosses including Labradoodle, Goldendoodle, Cavapoo), Maltese, Bichon Frise, Portuguese Water Dog, Soft Coated Wheaten Terrier, and Schnauzer. The allergen in question is Fel d 1 in cats and Can f 1 in dogs — while reduced shedding helps, regular bathing of the dog also significantly reduces airborne allergen levels.",
  },
  {
    q: "How accurate is a dog breed quiz?",
    a: "A dog breed quiz provides a useful starting point but should not be your only research. Breed characteristics describe population averages — individual dogs vary significantly based on upbringing, socialisation, and training history. A quiz based on 7 lifestyle factors (as this one is) will reliably narrow down compatible breed categories, but before committing to a specific breed, you should research breed-specific health conditions, speak with breeders or rescues who know the breed's temperament, and meet individual dogs in person. The American Kennel Club (AKC) breed selector and the Kennel Club's breed information pages are useful secondary resources.",
  },
  {
    q: "Should I buy or adopt a dog?",
    a: "Adopting from a shelter or rescue is the most impactful choice — approximately 920,000 animals are euthanised in US shelters annually, primarily due to overcrowding rather than any problem with the animals themselves. Most shelter dogs are adults with established personalities, making the match more predictable than a puppy. Breed-specific rescues exist for virtually every popular breed, including Golden Retrievers, Labrador Retrievers, French Bulldogs, Beagles, and German Shepherds. Hushku's adoption feed connects you directly with verified shelters and rescues, with one-tap applications replacing the traditional weeks-long paper process.",
  },
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

const sampleBreeds = [
  { name: "Golden Retriever", slug: "golden-retriever", trait: "Best for families" },
  { name: "French Bulldog", slug: "french-bulldog", trait: "Best for apartments" },
  { name: "Poodle", slug: "poodle", trait: "Best hypoallergenic" },
  { name: "Border Collie", slug: "border-collie", trait: "Best for active owners" },
  { name: "Labrador Retriever", slug: "labrador-retriever", trait: "Best for first-time owners" },
  { name: "German Shepherd", slug: "german-shepherd", trait: "Best guard dog" },
  { name: "Cavalier King Charles Spaniel", slug: "cavalier-king-charles-spaniel", trait: "Best companion" },
  { name: "Beagle", slug: "beagle", trait: "Best family all-rounder" },
  { name: "Australian Shepherd", slug: "australian-shepherd", trait: "Best for large properties" },
  { name: "Chihuahua", slug: "chihuahua", trait: "Best small apartment dog" },
  { name: "Bernese Mountain Dog", slug: "bernese-mountain-dog", trait: "Best gentle giant" },
  { name: "Dachshund", slug: "dachshund", trait: "Best for moderate lifestyle" },
];

export default function BestDogBreedQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* The interactive quiz (client component) */}
      <BestDogQuizClient />

      {/* How the quiz works — static, crawlable — GEO content starts here */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">
            <strong className="text-ebony">What is this quiz?</strong> The Hushku Best Dog Breed Quiz is a free tool that matches you with the ideal dog breed based on 7 lifestyle questions — covering activity level, living space, grooming commitment, experience, household composition, allergy requirements, and purpose. According to the <strong>American Kennel Club (AKC)</strong>, there are over 200 recognised dog breeds in the US, each with distinct energy and care profiles — this quiz narrows them to your best match in under 2 minutes.
          </p>
        </div>
        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-4">How the Dog Breed Matching Works</h2>
        <p className="text-slate-gray leading-relaxed mb-4">
          The quiz asks 7 questions that cover the five factors veterinary behaviourists and breed experts consistently identify as the most important determinants of breed compatibility: <strong>living space</strong>, <strong>activity level</strong>, <strong>owner experience</strong>, <strong>household composition</strong>, and <strong>grooming tolerance</strong>. Two additional questions cover allergy requirements and the primary role you want the dog to play in your life.
        </p>
        <p className="text-slate-gray leading-relaxed mb-4">
          Each of the 15 breed profiles in the quiz has a matching function that evaluates your answers against that breed&apos;s known characteristics — energy level, apartment suitability, child-friendliness, trainability, and shedding profile. The quiz returns the first breed whose profile aligns with your answers. Where multiple breeds match, the most popular and widely available breed is returned to increase the likelihood of finding an adoptable dog nearby.
        </p>
        <p className="text-slate-gray leading-relaxed">
          This quiz is a starting point, not a final decision. For deeper research, use our <Link href="/tools/breed-compare" className="text-brand-start font-bold hover:underline">Breed Comparison Tool</Link> to compare any two breeds side by side, or browse our <Link href="/breeds/dogs" className="text-brand-start font-bold hover:underline">full dog breed directory</Link> with temperament scores, grooming guides, and health information.
        </p>
      </section>

      {/* What Makes a Good Breed Match — static editorial */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-4">What Makes a Good Dog Breed Match?</h2>
        <p className="text-slate-gray leading-relaxed mb-4">
          The most common mistake people make when choosing a dog breed is optimising for appearance rather than lifestyle fit. A Siberian Husky is beautiful — it is also a working sled dog that requires 2+ hours of vigorous daily exercise, will escape a standard garden fence, and produces significant coat maintenance year-round. Placed in an apartment with a sedentary owner, it becomes destructive, anxious, and unhappy.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { factor: "Activity Level", detail: "High-energy breeds (Border Collie, Australian Shepherd, Vizsla) need 90+ minutes of vigorous exercise daily. Low-energy breeds (Shih Tzu, French Bulldog, Basset Hound) are content with 30 minutes." },
            { factor: "Living Space", detail: "Size is less important than energy level. A calm Great Dane can live comfortably in an apartment. An active Jack Russell in a large house will still redecorate if under-exercised." },
            { factor: "Owner Experience", detail: "Working breeds like the Belgian Malinois, German Shepherd, and Akita require confident, consistent handling. Forgiving breeds like the Labrador Retriever and Golden Retriever are better for first-time owners." },
            { factor: "Household Composition", detail: "Breeds with high prey drive (Greyhound, Husky, Terriers) may not be safe with cats or small children. Gentle breeds with soft mouths (Golden, Labrador, Cavalier) are recommended for families." },
            { factor: "Grooming Commitment", detail: "Double-coated breeds (Husky, Chow Chow, Samoyed) shed heavily twice yearly. Wire-coated breeds (Schnauzer, Airedale) need professional hand-stripping. Single-coated breeds (Poodle, Maltese) shed minimally but need regular grooming." },
            { factor: "Health & Lifespan", detail: "Brachycephalic breeds (French Bulldog, Pug, Bulldog) have documented respiratory issues and higher vet costs. Giant breeds (Great Dane, Mastiff) have shorter lifespans (6–10 years) versus small breeds (12–16 years). Check the OFA (Orthopedic Foundation for Animals) for breed-specific health screening data." },
          ].map(({ factor, detail }) => (
            <div key={factor} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-black text-ebony uppercase tracking-widest mb-2">{factor}</p>
              <p className="text-sm text-slate-gray leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Breeds in this quiz — entity links */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-2">Breeds Included in This Quiz</h2>
        <p className="text-sm text-slate-gray mb-6">The quiz can match you with any of the following 15 breeds. Each links to our full breed guide with temperament scores, health information, and care tips.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {sampleBreeds.map(({ name, slug, trait }) => (
            <Link key={slug} href={`/breeds/dogs/${slug}`}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-brand-start/30 hover:shadow-md transition-all group">
              <p className="text-sm font-black text-ebony group-hover:text-brand-start transition-colors leading-snug">{name}</p>
              <p className="text-[10px] text-slate-gray uppercase tracking-widest mt-1">{trait}</p>
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-gray mt-4">
          Want to compare any two breeds? Use our <Link href="/tools/breed-compare" className="text-brand-start font-bold hover:underline">free breed comparison tool</Link>. Or browse the complete <Link href="/breeds/dogs" className="text-brand-start font-bold hover:underline">dog breed directory</Link> with 450+ breeds.
        </p>
      </section>

      {/* FAQ section — fully server-rendered */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Common Questions About Choosing a Dog Breed</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="text-base font-black text-ebony mb-2">{q}</h3>
              <p className="text-sm text-slate-gray leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Adoption CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-ebony rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-black text-brand-start uppercase tracking-widest mb-2">Ready to adopt?</p>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">Find Your Breed in a Rescue Near You</h3>
            <p className="text-white/50 text-sm">Browse verified shelters and rescues on Hushku — one-tap applications, no PDFs.</p>
          </div>
          <Link href="/adoption"
            className="flex-shrink-0 bg-brand-gradient text-white font-black px-8 py-4 rounded-2xl uppercase tracking-widest text-xs shadow-lg whitespace-nowrap">
            Browse Adoptable Dogs →
          </Link>
        </div>
      </section>
    </>
  );
}

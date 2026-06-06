import Link from "next/link";
import VaccineTrackerTool from "./VaccineTrackerTool";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Vaccine Tracker", item: "https://hushku.app/tools/vaccine-tracker" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Vaccine Tracker",
  url: "https://hushku.app/tools/vaccine-tracker",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What vaccinations does a puppy need and when?', a: 'The standard puppy vaccination schedule recommended by WSAVA: first combination vaccine (distemper/adenovirus/parvovirus) at 6–8 weeks; second at 10–12 weeks; third at 14–16 weeks; booster at 12 months. Rabies as required by local law (typically 12–16 weeks with a booster at 12 months). Non-core vaccines based on lifestyle: Bordetella (kennel cough) — recommended before any dog-to-dog contact, kennelling, or training classes; leptospirosis — recommended in areas with wildlife exposure; Lyme disease — recommended in tick-endemic regions.' },
  { q: 'What vaccinations does a kitten need?', a: 'Core kitten vaccines per WSAVA guidelines: feline herpesvirus-1 + calicivirus + panleukopenia (FVRCP combination) starting at 6–8 weeks, then every 3–4 weeks until 16 weeks. Booster at 12 months. Rabies as required. Non-core: FeLV (feline leukaemia virus) — recommended for any cat with outdoor access or contact with other cats; FIV — not universally recommended.' },
  { q: 'How often do adult dogs need vaccinations?', a: 'Following the initial puppy series and 12-month booster, most core vaccines are effective for 3 years and should be given every 3 years in adult dogs, according to WSAVA guidelines. Rabies vaccination schedules are set by local law (1-year or 3-year depending on jurisdiction). Bordetella and leptospirosis vaccines typically require annual boosters. Your vet can run titre tests (blood tests measuring antibody levels) as an alternative to automatic booster vaccination — many practices now offer this.' },
  { q: 'Is it safe to vaccinate an adult dog that has no vaccination history?', a: "Yes — a dog with unknown vaccination history should receive the full primary course as if a puppy. For an adult dog with no records: one combination vaccine immediately, a second 3–4 weeks later. No harm comes from vaccinating a dog that was previously vaccinated — the immune response from a booster in a dog that is already immune is normal and does not cause 'over-vaccination' problems. Titre testing first is an alternative if you want to confirm whether immunity already exists before vaccinating." },
  { q: 'What is kennel cough and should my dog be vaccinated?', a: 'Kennel cough (infectious tracheobronchitis) is a highly contagious respiratory infection caused primarily by Bordetella bronchiseptica and canine parainfluenza virus. It spreads rapidly in any context where dogs meet — kennels, training classes, dog parks, grooming facilities. Symptoms: harsh honking cough, retching, nasal discharge. Usually self-limiting in healthy adults but can progress to pneumonia in puppies, seniors, or immunocompromised dogs. The Bordetella vaccine (intranasal or injectable) does not prevent all strains but significantly reduces severity. It is recommended at least 7–10 days before any dog-to-dog contact.' },
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

      <VaccineTrackerTool />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Vaccination schedules differ by species, age, geographic location, and lifestyle factors. This tracker displays the recommended vaccination timelines for puppies, kittens, and adult dogs and cats — separated into core vaccines (recommended for all animals regardless of lifestyle) and non-core vaccines (recommended based on risk factors).
  Core vaccines for dogs are established by the <strong>WSAVA Vaccination Guidelines Group</strong> and include distemper, adenovirus (hepatitis), parvovirus, and rabies (where required by law). Core vaccines for cats include panleukopenia (feline parvovirus), feline herpesvirus-1, and calicivirus.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What vaccinations does a puppy need and when?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What vaccinations does a puppy need and when?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The standard puppy vaccination schedule recommended by WSAVA: first combination vaccine (distemper/adenovirus/parvovirus) at 6–8 weeks; second at 10–12 weeks; third at 14–16 weeks; booster at 12 months. Rabies as required by local law (typically 12–16 weeks with a booster at 12 months). Non-core vaccines based on lifestyle: Bordetella (kennel cough) — recommended before any dog-to-dog contact, kennelling, or training classes; leptospirosis — recommended in areas with wildlife exposure; Lyme disease — recommended in tick-endemic regions.</p>
          </div>
          <div key='What vaccinations does a kitten need?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What vaccinations does a kitten need?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Core kitten vaccines per WSAVA guidelines: feline herpesvirus-1 + calicivirus + panleukopenia (FVRCP combination) starting at 6–8 weeks, then every 3–4 weeks until 16 weeks. Booster at 12 months. Rabies as required. Non-core: FeLV (feline leukaemia virus) — recommended for any cat with outdoor access or contact with other cats; FIV — not universally recommended.</p>
          </div>
          <div key='How often do adult dogs need vaccinations?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How often do adult dogs need vaccinations?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Following the initial puppy series and 12-month booster, most core vaccines are effective for 3 years and should be given every 3 years in adult dogs, according to WSAVA guidelines. Rabies vaccination schedules are set by local law (1-year or 3-year depending on jurisdiction). Bordetella and leptospirosis vaccines typically require annual boosters. Your vet can run titre tests (blood tests measuring antibody levels) as an alternative to automatic booster vaccination — many practices now offer this.</p>
          </div>
          <div key='Is it safe to vaccinate an adult dog that has no vaccination history?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Is it safe to vaccinate an adult dog that has no vaccination history?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Yes — a dog with unknown vaccination history should receive the full primary course as if a puppy. For an adult dog with no records: one combination vaccine immediately, a second 3–4 weeks later. No harm comes from vaccinating a dog that was previously vaccinated — the immune response from a booster in a dog that is already immune is normal and does not cause 'over-vaccination' problems. Titre testing first is an alternative if you want to confirm whether immunity already exists before vaccinating.</p>
          </div>
          <div key='What is kennel cough and should my dog be vaccinated?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is kennel cough and should my dog be vaccinated?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Kennel cough (infectious tracheobronchitis) is a highly contagious respiratory infection caused primarily by Bordetella bronchiseptica and canine parainfluenza virus. It spreads rapidly in any context where dogs meet — kennels, training classes, dog parks, grooming facilities. Symptoms: harsh honking cough, retching, nasal discharge. Usually self-limiting in healthy adults but can progress to pneumonia in puppies, seniors, or immunocompromised dogs. The Bordetella vaccine (intranasal or injectable) does not prevent all strains but significantly reduces severity. It is recommended at least 7–10 days before any dog-to-dog contact.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          <Link key="/health/reminders" href="/health/reminders" className="text-brand-start font-bold hover:underline text-sm">/health/reminders →</Link>
          <Link key="/tools/calorie-calculator" href="/tools/calorie-calculator" className="text-brand-start font-bold hover:underline text-sm">/tools/calorie-calculator →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

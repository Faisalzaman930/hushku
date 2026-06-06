import Link from "next/link";
import PetPackingChecklist from "./PetPackingChecklist";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Packing Checklist", item: "https://hushku.app/tools/packing-checklist" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Packing Checklist",
  url: "https://hushku.app/tools/packing-checklist",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'What documents do I need to travel internationally with my pet?', a: "International pet travel requirements vary by destination country. For most destinations you will need: a valid microchip (ISO 15-digit standard), an up-to-date rabies vaccination (often required at least 21–30 days before travel), a health certificate from an accredited veterinarian issued within 10 days of travel, and an import permit or USDA/APHIS endorsement. The EU requires an EU Animal Health Certificate. Australia and New Zealand have among the strictest requirements globally, including mandatory quarantine periods. Always check the destination country's official animal import requirements 3–6 months before travel." },
  { q: 'Can my pet travel in the cabin on an aeroplane?', a: "Most major airlines allow small dogs and cats (combined weight with carrier typically under 8–10 kg) to travel in the cabin in an approved carrier under the seat. Larger pets must travel in the cargo hold in an airline-approved crate (IATA regulations specify crate size, ventilation, and construction requirements). Brachycephalic breeds (French Bulldogs, Pugs, Bulldogs, Persian cats, Himalayan cats) are banned from cargo and sometimes from cabin travel by many airlines due to their elevated respiratory risk in pressurised environments. Check your specific airline's pet policy before booking." },
  { q: 'How do I help my pet with travel anxiety?', a: 'Preparation reduces travel anxiety significantly. Introduce the carrier weeks before travel — leave it open with bedding and treats inside so the pet associates it positively. For road trips, acclimatise with short practice journeys. Pheromone products (Adaptil for dogs, Feliway for cats) applied to the carrier 30 minutes before use are evidence-supported anxiolytics. For severe anxiety, a veterinarian can prescribe gabapentin or trazodone for travel days — these require a vet consultation and a trial run at home to assess the response before the actual travel day.' },
  { q: 'What food and water arrangements should I make for travelling?', a: "Bring your pet's regular food — abrupt diet changes combined with travel stress frequently cause gastrointestinal upset. Maintain normal feeding times as much as possible. Water from a clean, familiar source or bottled water is preferable to tap water in unfamiliar locations (mineral content varies and can cause loose stools). Collapsible travel bowls are compact and convenient. For flights, withhold food for 4–6 hours before departure to reduce nausea risk, but ensure water is available." },
  { q: 'What vaccinations does my dog or cat need for travel?', a: 'Core vaccinations (distemper/parvo/hepatitis for dogs; panleukopenia/herpesvirus/calicivirus for cats) should be current. Rabies vaccination is required for international travel to most countries and for domestic travel to some US states. Bordetella (kennel cough) vaccination is recommended if your dog will be in boarding facilities or contact with other dogs during the trip. A health certificate from your vet, issued within 10 days of travel, documents current vaccination status and is required for airline travel.' },
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

      <PetPackingChecklist />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Travelling with a pet requires significantly more preparation than travelling alone. This checklist covers 7 categories across all common species: food and feeding equipment, medications and health documents, safety and containment, bedding and comfort items, waste management, emergency contact information, and destination-specific requirements. It adapts based on your pet's species, trip type (domestic or international), transport method, and any special health needs.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='What documents do I need to travel internationally with my pet?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What documents do I need to travel internationally with my pet?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">International pet travel requirements vary by destination country. For most destinations you will need: a valid microchip (ISO 15-digit standard), an up-to-date rabies vaccination (often required at least 21–30 days before travel), a health certificate from an accredited veterinarian issued within 10 days of travel, and an import permit or USDA/APHIS endorsement. The EU requires an EU Animal Health Certificate. Australia and New Zealand have among the strictest requirements globally, including mandatory quarantine periods. Always check the destination country's official animal import requirements 3–6 months before travel.</p>
          </div>
          <div key='Can my pet travel in the cabin on an aeroplane?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">Can my pet travel in the cabin on an aeroplane?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Most major airlines allow small dogs and cats (combined weight with carrier typically under 8–10 kg) to travel in the cabin in an approved carrier under the seat. Larger pets must travel in the cargo hold in an airline-approved crate (IATA regulations specify crate size, ventilation, and construction requirements). Brachycephalic breeds (French Bulldogs, Pugs, Bulldogs, Persian cats, Himalayan cats) are banned from cargo and sometimes from cabin travel by many airlines due to their elevated respiratory risk in pressurised environments. Check your specific airline's pet policy before booking.</p>
          </div>
          <div key='How do I help my pet with travel anxiety?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I help my pet with travel anxiety?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Preparation reduces travel anxiety significantly. Introduce the carrier weeks before travel — leave it open with bedding and treats inside so the pet associates it positively. For road trips, acclimatise with short practice journeys. Pheromone products (Adaptil for dogs, Feliway for cats) applied to the carrier 30 minutes before use are evidence-supported anxiolytics. For severe anxiety, a veterinarian can prescribe gabapentin or trazodone for travel days — these require a vet consultation and a trial run at home to assess the response before the actual travel day.</p>
          </div>
          <div key='What food and water arrangements should I make for travelling?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What food and water arrangements should I make for travelling?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Bring your pet's regular food — abrupt diet changes combined with travel stress frequently cause gastrointestinal upset. Maintain normal feeding times as much as possible. Water from a clean, familiar source or bottled water is preferable to tap water in unfamiliar locations (mineral content varies and can cause loose stools). Collapsible travel bowls are compact and convenient. For flights, withhold food for 4–6 hours before departure to reduce nausea risk, but ensure water is available.</p>
          </div>
          <div key='What vaccinations does my dog or cat need for travel?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What vaccinations does my dog or cat need for travel?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Core vaccinations (distemper/parvo/hepatitis for dogs; panleukopenia/herpesvirus/calicivirus for cats) should be current. Rabies vaccination is required for international travel to most countries and for domestic travel to some US states. Bordetella (kennel cough) vaccination is recommended if your dog will be in boarding facilities or contact with other dogs during the trip. A health certificate from your vet, issued within 10 days of travel, documents current vaccination status and is required for airline travel.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/health/records" href="/health/records" className="text-brand-start font-bold hover:underline text-sm">/health/records →</Link>
          <Link key="/health/reminders" href="/health/reminders" className="text-brand-start font-bold hover:underline text-sm">/health/reminders →</Link>
          <Link key="/tools/vaccine-tracker" href="/tools/vaccine-tracker" className="text-brand-start font-bold hover:underline text-sm">/tools/vaccine-tracker →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import PetPhotoTipsWizard from "./PetPhotoTipsWizard";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" },
    { "@type": "ListItem", position: 3, name: "Photo Tips", item: "https://hushku.app/tools/photo-tips" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Photo Tips",
  url: "https://hushku.app/tools/photo-tips",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
};

const faqs = [
  { q: 'How do I get a sharp photo of my dog or cat?', a: 'The three most common causes of blurry pet photos: insufficient shutter speed (use at least 1/500s for moving pets), focus on the wrong part (ensure your camera locks focus on the eyes, not the nose or ears), and camera shake (brace your arms or use image stabilisation). On a smartphone: tap the eye area on screen to set focus, then use burst mode (hold the shutter button) to capture 10+ frames and choose the sharpest. Use the volume button as a shutter on iPhones to reduce camera shake.' },
  { q: 'What is the best lighting for pet photography?', a: "Natural window light from the side (not direct sunlight through the window) is the most flattering for pets. Overcast outdoor light is ideal — it is soft, even, and shadow-free. Direct flash causes red-eye in many animals and harsh shadows. If shooting indoors at night, a ring light placed at pet's eye level is significantly better than overhead lighting, which creates unflattering downward shadows and highlights the top of the head rather than the face." },
  { q: 'How do I photograph a black dog or cat?', a: "Black animals are notoriously difficult to photograph because cameras expose for average scene brightness, causing the dark subject to become underexposed while the background becomes correctly or over-exposed. Fixes: photograph against a light background to help the camera meter correctly; use your phone's exposure compensation slider (tap the subject and drag the sun icon down) or manual mode to slightly overexpose relative to the camera's suggestion; shoot in RAW format if available and lift the shadows in editing; avoid harsh directional light which loses detail in dark fur." },
  { q: 'What are good ways to get my pet to look at the camera?', a: 'Make a squeaky sound or crinkle a treat bag immediately before taking the shot — the ears will prick and the eyes will focus on you. Hold a treat against the lens of your camera or phone so the pet looks directly at the lens. For cats, a bird sound or gentle squeaking toy works well. Have an assistant stand behind you making noise. Take many shots — with 10 seconds of burst mode, you will get at least one with direct eye contact and alert expression.' },
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

      <PetPhotoTipsWizard />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">Taking a sharp, well-lit, emotionally engaging photo of a moving pet is genuinely difficult. This wizard asks 3 questions — lighting conditions, pet coat type, and camera — and provides personalised tips based on the specific challenges of your setup. Key principles: always shoot at the pet's eye level, use burst mode to capture motion, achieve focus on the eyes (not the nose), and use natural light or a ring light rather than direct flash.</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div key='How do I get a sharp photo of my dog or cat?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I get a sharp photo of my dog or cat?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">The three most common causes of blurry pet photos: insufficient shutter speed (use at least 1/500s for moving pets), focus on the wrong part (ensure your camera locks focus on the eyes, not the nose or ears), and camera shake (brace your arms or use image stabilisation). On a smartphone: tap the eye area on screen to set focus, then use burst mode (hold the shutter button) to capture 10+ frames and choose the sharpest. Use the volume button as a shutter on iPhones to reduce camera shake.</p>
          </div>
          <div key='What is the best lighting for pet photography?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What is the best lighting for pet photography?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Natural window light from the side (not direct sunlight through the window) is the most flattering for pets. Overcast outdoor light is ideal — it is soft, even, and shadow-free. Direct flash causes red-eye in many animals and harsh shadows. If shooting indoors at night, a ring light placed at pet's eye level is significantly better than overhead lighting, which creates unflattering downward shadows and highlights the top of the head rather than the face.</p>
          </div>
          <div key='How do I photograph a black dog or cat?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">How do I photograph a black dog or cat?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Black animals are notoriously difficult to photograph because cameras expose for average scene brightness, causing the dark subject to become underexposed while the background becomes correctly or over-exposed. Fixes: photograph against a light background to help the camera meter correctly; use your phone's exposure compensation slider (tap the subject and drag the sun icon down) or manual mode to slightly overexpose relative to the camera's suggestion; shoot in RAW format if available and lift the shadows in editing; avoid harsh directional light which loses detail in dark fur.</p>
          </div>
          <div key='What are good ways to get my pet to look at the camera?' className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">What are good ways to get my pet to look at the camera?</h3>
            <p className="text-sm text-slate-gray leading-relaxed">Make a squeaky sound or crinkle a treat bag immediately before taking the shot — the ears will prick and the eyes will focus on you. Hold a treat against the lens of your camera or phone so the pet looks directly at the lens. For cats, a bird sound or gentle squeaking toy works well. Have an assistant stand behind you making noise. Take many shots — with 10 seconds of burst mode, you will get at least one with direct eye contact and alert expression.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
          <Link key="/social" href="/social" className="text-brand-start font-bold hover:underline text-sm">/social →</Link>
          <Link key="/breeds/dogs" href="/breeds/dogs" className="text-brand-start font-bold hover:underline text-sm">/breeds/dogs →</Link>
          <Link key="/tools/name-generator" href="/tools/name-generator" className="text-brand-start font-bold hover:underline text-sm">/tools/name-generator →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

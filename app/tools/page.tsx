import Hero from "../components/Hero";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Pet Care Calculators & Tools | 25+ Free Tools | Hushku",
  description: "25+ free interactive pet care tools — calorie calculators, breed quizzes, symptom checkers, toxic food databases, vaccination schedules, and more. Built for dog and cat owners worldwide. No account required.",
  keywords: "free pet care tools, dog calorie calculator, pet symptom checker, toxic food checker, dog breed quiz, cat breed quiz, pet age calculator, puppy weight predictor, dog exercise calculator",
  alternates: { canonical: "https://hushku.app/tools" },
  openGraph: {
    title: "Free Pet Care Calculators & Tools | Hushku",
    description: "25+ free interactive pet care tools for dog and cat owners. Calorie calculators, breed quizzes, symptom checkers, and more.",
    type: "website",
    url: "https://hushku.app/tools",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Free Pet Care Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "25+ Free Pet Care Tools | Hushku",
    description: "Free dog & cat calculators, breed quizzes, symptom checkers and more. No account required.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function ToolsHubPage() {
  const tools = [
    {
      title: "Pet Sitter Cost Calculator",
      desc: "Instant web estimator for professional care based on pet type and quantity.",
      href: "/tools/pet-sitter-cost",
      icon: "💰",
      category: "Free Calculator",
    },
    {
      title: "Best Dog Breed Quiz",
      desc: "7 questions to find your ideal canine match. Powered by veterinary breed psychology.",
      href: "/tools/best-dog-quiz",
      icon: "🐾",
      category: "Free Interactive Quiz",
    },
    {
      title: "Best Cat Breed Quiz",
      desc: "7 questions to find your perfect feline match. Based on temperament psychology and lifestyle.",
      href: "/tools/best-cat-quiz",
      icon: "🐈",
      category: "Free Interactive Quiz",
    },
    {
      title: "Pet Age Calculator",
      desc: "Convert your pet's age into human years with precision across dog and cat breeds.",
      href: "/tools/age-calculator",
      icon: "⏳",
      category: "Free Calculator",
    },
    {
      title: "Pet Weight BMI Checker",
      desc: "Check if your pet is at a healthy weight using the BCS method.",
      href: "/tools/pet-bmi",
      icon: "⚖️",
      category: "Health Calculator",
    },
    {
      title: "Toxic Food Checker",
      desc: "Search our database to see if a food is safe for your dog or cat.",
      href: "/tools/toxic-food",
      icon: "🍎",
      category: "Safety Tool",
    },
    {
      title: "Pet Symptom Checker",
      desc: "Get an instant urgency rating for common pet health symptoms.",
      href: "/tools/symptom-checker",
      icon: "🏥",
      category: "Health Tool",
    },
    {
      title: "Breed Comparison Tool",
      desc: "Compare two dog or cat breeds side-by-side for size, temperament, and care.",
      href: "/tools/breed-compare",
      icon: "🆚",
      category: "Breed Guide",
    },
    {
      title: "Pet Name Generator",
      desc: "Find the perfect name based on species, color, or personality trait.",
      href: "/tools/name-generator",
      icon: "✨",
      category: "Creative Tool",
    },
    {
      title: "Pet Insurance Estimator",
      desc: "Estimate monthly insurance premiums based on breed, age, and coverage.",
      href: "/tools/insurance-cost",
      icon: "🛡️",
      category: "Finance Tool",
    },
    {
      title: "Vaccination Schedule",
      desc: "Recommended vaccine timeline for puppies, kittens, and adults.",
      href: "/tools/vaccine-tracker",
      icon: "💉",
      category: "Health Tracker",
    },
    {
      title: "Pet Owner Quiz",
      desc: "Are you a superstar pet parent? Take the fun 8-question assessment.",
      href: "/tools/pet-owner-quiz",
      icon: "🏆",
      category: "Fun Quiz",
    },
    {
      title: "Lifestyle Health Quiz",
      desc: "Audit your pet's routine across diet, exercise, and medical care.",
      href: "/tools/pet-health-quiz",
      icon: "📋",
      category: "Wellness Quiz",
    },
    {
      title: "First Aid Knowledge Quiz",
      desc: "Test your emergency preparedness with our lifesaver first aid quiz.",
      href: "/tools/first-aid-quiz",
      icon: "🩺",
      category: "Health Quiz",
    },
    {
      title: "Birthday Countdown",
      desc: "Live countdown to your pet's next big milestone celebration.",
      href: "/tools/birthday-countdown",
      icon: "🎂",
      category: "Fun Widget",
    },

    {
      title: "Hotel Packing Checklist",
      desc: "Automatically generate a travel essential list based on your pet's specific needs.",
      href: "/tools/packing-checklist",
      icon: "🏨",
      category: "Free Travel Tool",
    },
    {
      title: "Pet Sitting App Comparison",
      desc: "Filter and compare the best platforms (Rover vs Wag) for price and platform and rating.",
      href: "/tools/sitting-comparison",
      icon: "📱",
      category: "Free Guide",
    },
    {
      title: "Feeding Schedule Calculator",
      desc: "Optimized daily feeding amounts based on weight, age, and pet type.",
      href: "/tools/feeding-calculator",
      icon: "🥣",
      category: "Free Calculator",
    },


    {
      title: "Pet Photo Tips Wizard",
      desc: "Get tailored photography advice based on your lighting and pet breed.",
      href: "/tools/photo-tips",
      icon: "📸",
      category: "Free Creative Wizard",
    },
    {
      title: "Puppy Growth Predictor",
      desc: "Enter your puppy's current age and weight to predict their adult size and track milestone weights.",
      href: "/tools/puppy-weight",
      icon: "📏",
      category: "Growth Calculator",
    },
    {
      title: "Pet Calorie Calculator",
      desc: "Calculate precise daily calorie needs using the RER formula — adjusts for life stage, activity, and neuter status.",
      href: "/tools/calorie-calculator",
      icon: "🔥",
      category: "Nutrition Calculator",
    },
    {
      title: "Whelping Due Date Calculator",
      desc: "Enter the mating date to get the expected whelping date and every key pregnancy milestone for dogs and cats.",
      href: "/tools/whelping-calculator",
      icon: "🍼",
      category: "Breeding Tool",
    },
    {
      title: "Pet Water Intake Calculator",
      desc: "Find out exactly how much water your dog or cat needs each day based on weight, activity, and diet type.",
      href: "/tools/water-calculator",
      icon: "💧",
      category: "Health Calculator",
    },
    {
      title: "Dog Exercise Calculator",
      desc: "Get a daily exercise recommendation tailored to your dog's breed energy level, age, and health status.",
      href: "/tools/exercise-calculator",
      icon: "🏃",
      category: "Wellness Calculator",
    },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Pet Care Calculators & Tools",
    "description": "25+ free interactive pet care tools for dog and cat owners — calorie calculators, breed quizzes, symptom checkers, vaccination schedules, and more.",
    "url": "https://hushku.app/tools",
    "publisher": { "@type": "Organization", "name": "Hushku", "url": "https://hushku.app" },
    "hasPart": tools.map(t => ({
      "@type": "WebApplication",
      "name": t.title,
      "url": `https://hushku.app${t.href}`,
      "applicationCategory": "LifestyleApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    })),
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
    <div className="bg-white">
      <Hero
        subtitle="Free Community Resources"
        title="Free Pet Calculators <br/>Built for Modern Pet Parents."
        description="Hushku is more than just an app. We're building a global resource hub for pet parents. Explore our free web-based calculators and interactive guides—designed to give you instant utility, right in your browser."
        showDownloads={true}
      />

      {/* GEO intro block */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4">
            <p className="text-sm text-slate-gray leading-relaxed">
              <strong className="text-ebony">What are Hushku's free tools?</strong> Hushku offers 25+ free, browser-based pet care calculators, quizzes, and interactive guides — available globally with no account required. Tools are built on veterinary evidence, including guidelines from the <strong>WSAVA</strong>, <strong>AAHA</strong>, <strong>AVMA</strong>, and the <strong>American Kennel Club (AKC)</strong>. Categories include nutrition calculators, health assessment quizzes, breed matching tools, safety databases, and care planning resources for dogs, cats, and other pets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="flex flex-col bg-gray-50/50 p-10 rounded-[3.5rem] border border-gray-100/50 transition-all hover:bg-white hover:shadow-2xl group border-b-8 border-b-transparent hover:border-b-brand-start"
                >
                   <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white shadow-inner text-4xl mb-8 group-hover:scale-110 transition-transform">
                      {tool.icon}
                   </div>
                   <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-start bg-brand-start/10 px-3 py-1 rounded-full">{tool.category}</span>
                   </div>
                   <h3 className="text-2xl font-black text-ebony uppercase tracking-tight group-hover:text-brand-start transition-colors leading-tight">
                      {tool.title}
                   </h3>
                   <p className="mt-4 text-slate-gray leading-7 opacity-80 group-hover:opacity-100 transition-opacity">
                      {tool.desc}
                   </p>
                   <div className="mt-auto pt-8 flex items-center gap-2 text-ebony font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                      Open Web Tool <span aria-hidden="true">→</span>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
    </>
  );
}

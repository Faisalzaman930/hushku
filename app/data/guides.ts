import { GUIDE_ADDITIONS } from "./article-extras-data";
import { guideSharedPetCare, guideRehoming, guideLostPet } from "./guide-conversion";
import { guide333Rescue } from "./guide-333-rescue";
import { guidePuppySocialization } from "./guide-puppy-socialization";
import { guideCatNutrition } from "./guide-cat-nutrition";
import { guideSeparationAnxiety } from "./guide-separation-anxiety";
import { guideSeniorPetCare } from "./guide-senior-pet-care";
import { guidePetFirstAid } from "./guide-pet-first-aid";
import { guideAdoptingRescueDog } from "./guide-adopting-rescue-dog";
import { guideDogDrinkingTooMuchWater } from "./guide-dog-drinking-too-much-water";
import { guideDogWontWalk } from "./guide-dog-wont-walk";
import { guideDogPlayVsAggression } from "./guide-dog-play-vs-aggression";
import { guideStopPuppyBiting } from "./guide-stop-puppy-biting";
import { guideDogRestlessAtNight } from "./guide-dog-restless-at-night";

export interface GuideChapter {
  title: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  shortTitle: string;
  seoDescription: string;
  category: string;
  tags: string[];
  publishDate: string;
  lastUpdated: string;
  readTime: string;
  heroImage?: string;
  introduction: string;
  chapters: GuideChapter[];
  conclusion: string;
  relatedSlugs: string[];
  /** One or two sentences answering the main question, shown first. */
  quickAnswer?: string;
  faqs?: { q: string; a: string }[];
  /** Optional in-context app offer shown before the conclusion. Only features that are in the app. */
  appCta?: { title: string; body: string; link?: { href: string; label: string } };
}

export const guides: Guide[] = [
  guideSharedPetCare,
  guideRehoming,
  guideLostPet,
  guide333Rescue,
  guidePuppySocialization,
  guideCatNutrition,
  guideSeparationAnxiety,
  guideSeniorPetCare,
  guidePetFirstAid,
  guideAdoptingRescueDog,
  guideDogDrinkingTooMuchWater,
  guideDogWontWalk,
  guideDogPlayVsAggression,
  guideStopPuppyBiting,
  guideDogRestlessAtNight,

  {
    slug: "logistics-and-heartbreak-foster-parent-manual",
    title: "The Pet Foster Parent Manual: Logistics, Medicine, and the Heartbreak",
    seoTitle: "The Complete Pet Foster Parent Guide 2026",
    shortTitle: "Fostering Manual",
    seoDescription: "A complete operational manual for pet fostering — covering the Two-Door introduction method, medication protocols, digital record management, and how to survive the heartbreak of successful placement.",
    category: "Expert Guides",
    tags: ["Fostering", "Expert Guides", "Logistics"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "20 Min Read",
    introduction: `Fostering saves lives. It's one of the most direct ways a person can address the shelter system's capacity problem — particularly for animals who need a home environment to recover medically, behaviorally, or simply from the stress of kennel life before they're ready for permanent placement.

It's also a logistical undertaking that many rescue organizations are genuinely unprepared to support their fosters through. The goodwill of foster families is enormous. The operational infrastructure behind them is frequently inadequate. The result is a high burnout rate among experienced fosters — not from the animals, but from the chaos of miscommunication, lost paperwork, and unclear coordination with overwhelmed rescue staff.

This guide is the operational manual that most rescue organizations wish they had time to give every new foster. It covers the integration protocols, the medical management realities, the digital tools that eliminate the paperwork failures, and how to emotionally sustain a practice that requires you to love an animal deeply and then give them away. Learn more about the networks supporting this work through <a href="/fostering" class="text-brand-start font-bold hover:underline">Hushku's fostering hub</a>.`,
    chapters: [
      {
        title: "Chapter 1: The Introduction Protocol — Protecting Your Resident Animals",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">The Biggest Mistake New Fosters Make</h4>
          <p class="mb-6">The most common error in fostering is introducing the new animal to resident pets immediately. The instinct is understandable — you want everyone to meet, to see if they'll get along, to get the household dynamics sorted quickly. This instinct causes more setbacks than almost any other single action.</p>
          <p class="mb-6">A newly arrived foster animal is in acute stress. They have unfamiliar smells, an unfamiliar space, and no established relationship with anyone in the house. Introducing them immediately to resident animals — who are also mildly stressed by the intruder's smell — creates an explosive combination: two or more stressed animals meeting without the foundational trust that makes canine or feline social interaction safe.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">The Two-Door / Isolation Protocol</h4>
          <p class="mb-6">The evidence-based approach is strict separation for the first 48-72 hours. The foster animal stays in a single room — with their own food, water, litter or pee pads, and resting space — completely separated from resident animals by a closed door.</p>
          <p class="mb-6">During this period, passive scent exchange happens through the door gap. Both the foster and resident animals can smell each other without the visual and physical stimulation of direct contact. Feed both sides near the door crack — this conditions a positive (food) association with the smell of the other animal before they've ever seen each other.</p>
          <p class="mb-6">After 48-72 hours, allow visual contact through a cracked door or baby gate while both animals are calm and at a distance. Reward calm observations. Do not force prolonged visual contact if either animal becomes agitated. This phase may last another 48 hours. The face-to-face meeting happens only when both animals are showing neutral or positive responses to the gated visual contact.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Cat-Specific Introduction Nuances</h4>
          <p class="mb-6">Cats require a slower timeline than dogs as a rule. Full integration in a multi-cat household can take 2-4 weeks for smooth introductions and significantly longer for more reactive pairs. The isolation phase should be longer — 5-7 days minimum — and visual contact should proceed more slowly. Cats communicate primarily through body language and proximity; forced proximity is experienced as severe stress.</p>
          <p class="mb-6">Signs that introduction is proceeding well in cats: eating normally near the barrier, relaxed body posture near the barrier, showing curiosity rather than hissing or growling. Signs to slow down: not eating, hiding constantly, aggression toward the door, spraying or inappropriate elimination. Any of these signals indicate you need more separation time before progressing.</p>
        `
      },
      {
        title: "Chapter 2: Medical Management — The Documentation You Cannot Lose",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">What Foster Animals Typically Arrive With</h4>
          <p class="mb-6">Foster animals — especially those coming directly from shelters — frequently arrive with active medical conditions. Upper respiratory infections (URIs) are nearly universal in newly fostered cats. Kennel cough (Bordetella bronchiseptica/parainfluenza complex) is common in dogs. Intestinal parasites (Giardia, roundworms, hookworms) are frequent regardless of species. Animals rescued from neglect situations may have more serious conditions: malnutrition, mange, heartworm infection, or untreated injuries.</p>
          <p class="mb-6">Understanding what you're managing medically is the foundation of good fostering. The intake exam documentation from the rescue organization should include: vaccination history, current medications and dosages, known diagnoses, any behavioral notes from previous handlers, and emergency contact information for the rescue's veterinary contacts.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Building a Digital Medical Record From Day One</h4>
          <p class="mb-6">Paper records from rescue organizations are lost with alarming regularity. Coordinators text you a photo of a handwritten medication schedule. Intake records are physical documents that get wet, misplaced, or left with the previous transport volunteer. The cost of this information loss is measured in missed doses, wrong dosages given at emergency vet visits, and decisions made without accurate history.</p>
          <p class="mb-6">The correct approach: photograph or scan every document the moment it arrives. Upload to a centralized digital health vault — <a href="/vets" class="text-brand-start font-bold">Hushku's medical record system</a> supports this — so records are accessible from your phone at any hour, shareable with emergency vets via QR code, and backed up independently of the rescue organization's own systems.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">The Go-Bag Protocol</h4>
          <p class="mb-6">Every foster animal should have a Go-Bag — a physical bag by the door containing the critical information an emergency vet would need at 2 AM:</p>
          <ul class="list-disc pl-6 mb-8 space-y-3">
            <li>Printed copy of current medications, dosages, and schedule</li>
            <li>Microchip number and registration information</li>
            <li>Rescue organization's emergency contact number</li>
            <li>Any known allergies or adverse drug reactions</li>
            <li>Most recent weight (relevant for medication dosing)</li>
            <li>Photo of the animal for identification</li>
          </ul>
          <p class="mb-6">This bag should be updated every time a medication changes. Treat it as a living document, not a one-time setup.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Medication Administration Realities</h4>
          <p class="mb-6">Many foster animals arrive on complex medication schedules: twice-daily antibiotics, morning and evening heartworm treatment pills, topical ointments for wound care, or anti-nausea medication before meals. Missing doses has real medical consequences. Giving double doses because of confusion about who administered the previous one also has real consequences.</p>
          <p class="mb-6">Digital medication trackers — whether through a dedicated app or a shared household note — that allow all members of the household to log each administration are significantly safer than memory or verbal coordination. If your rescue organization cannot provide this, implement your own system on Day 1.</p>
        `
      }
    ],
    conclusion: `The emotional mathematics of fostering require a particular kind of compartmentalization. Your job is to love an animal into health, stability, and adoptability — and then to let them go to someone who will love them permanently. Every successful placement is the objective fulfilled, even when it hurts.

The fosters who sustain this practice long-term do it by removing the operational friction that would otherwise drain their capacity. Digital records that work. Communication tools that don't require 12 text messages to coordinate a vet pickup. Clear protocols that prevent the preventable failures.

Get the logistics right so you can give the animal everything else they need: presence, patience, and the consistent safety of a temporary home done well.`,
    relatedSlugs: ["3-3-3-rule-for-rescue-dogs", "how-to-introduce-new-pet-to-resident-pets", "best-pet-fostering-network-apps"]
  },

  {
    slug: "first-time-dog-owner-complete-guide",
    title: "First-Time Dog Owner: The Complete Preparation and First-Year Guide",
    seoTitle: "First-Time Dog Owner Guide 2026: Complete Year-One Preparation",
    shortTitle: "First-Time Owners",
    seoDescription: "Everything you need to know before and after bringing home your first dog — from home preparation and supplies to vet visits, training foundations, and the first-year milestones most guides skip.",
    category: "Expert Guides",
    tags: ["First-Time Owners", "Expert Guides", "Puppies"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "22 Min Read",
    introduction: `First-time dog ownership is one of the most consequential decisions a person makes — and one of the least prepared-for. The emotional pull toward getting a dog is well-served by content. The practical, logistical, financial, and behavioral reality of the first year is significantly less covered.

This guide exists to fill that gap. It covers the preparation work before the dog arrives, the critical first week, the training foundations that make every subsequent year easier, and the veterinary and financial planning that determines whether you're in a sustainable situation or an overwhelming one.

The goal isn't to discourage anyone from getting a dog. It's to give new owners a realistic map so that the reality they encounter matches the reality they planned for. You can find dogs available for adoption through <a href="/adoption" class="text-brand-start font-bold hover:underline">Hushku's adoption listings</a> when you're ready to take the next step.`,
    chapters: [
      {
        title: "Chapter 1: Before the Dog Arrives — The Preparation Work That Matters",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">Choosing the Right Dog for Your Actual Life</h4>
          <p class="mb-6">The single most important decision in dog ownership — more important than any training approach or product — is the initial match between the dog's needs and your actual lifestyle. "I want a dog" is not sufficient to determine breed or type. The relevant questions are: How much exercise can you reliably provide daily (not on your best days, but on your average Tuesday)? How much alone time will the dog have? What's your living space? Do you have children or other pets?</p>
          <p class="mb-6">Border Collies, Huskies, and Belgian Malinois in apartment settings with owners who work 9-hour days are statistically high-risk for behavioral problems — not because the owners are bad, but because the breed's needs are fundamentally incompatible with the available lifestyle. An adult shelter dog whose personality is already developed often makes a more reliably matched choice than a puppy whose adult temperament is unknown.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Home Preparation: What Actually Needs to Happen</h4>
          <p class="mb-6">Dog-proofing a home is primarily about removing hazards rather than acquiring products. Walk through each room at dog level — literally get on your hands and knees — and identify what's accessible. Common hazards include: electrical cords (chewing risk), toxic houseplants (extensive list available from ASPCA), human medications accessible in low cabinets, cleaning products under sinks, and small objects that can be swallowed.</p>
          <p class="mb-6">For puppies, baby gates to restrict access to certain areas are often more practical than attempting to proof every room simultaneously. Start with a small, manageable space and expand access as the dog's reliability in that space is established.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">The Actual Essential Supplies List</h4>
          <p class="mb-6">The pet industry aggressively markets products to new dog owners. The genuinely necessary items are fewer than the pet store experience suggests:</p>
          <ul class="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Crate</strong> — appropriately sized (standing room, lying stretched out, turning around; not large enough to use a corner as a bathroom)</li>
            <li><strong>Collar with ID tags</strong> and a separate <strong>harness</strong> for walking (reduces neck pressure, especially for puppies)</li>
            <li><strong>6-foot leash</strong> (not retractable — retractable leashes undermine leash training)</li>
            <li><strong>Food and water bowls</strong> (stainless steel or ceramic; easier to sanitize than plastic)</li>
            <li><strong>Vet-recommended food</strong> for the dog's age, size, and any health conditions</li>
            <li><strong>Enzymatic cleaner</strong> (for inevitable accidents — critical for effective odor elimination)</li>
            <li><strong>High-value treats</strong> (small, soft, smelly — for training; distinct from regular food)</li>
          </ul>
          <p class="mb-6">Everything else — beds, toys, specialty products — can be acquired based on the individual dog's preferences and needs after you learn them. Buying elaborate setups before knowing the dog often results in significant waste.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Financial Planning for the First Year</h4>
          <p class="mb-6">First-year dog ownership costs are consistently higher than ongoing annual costs and consistently higher than new owners expect. A realistic budget for a medium-sized dog in a major US metro in 2026:</p>
          <ul class="list-disc pl-6 mb-8 space-y-2">
            <li>Initial vet exam, vaccinations, spay/neuter if needed: $500-1,200</li>
            <li>Food (quality kibble or fresh food): $600-1,800/year depending on size and brand</li>
            <li>Preventative medications (flea/tick, heartworm): $200-400/year</li>
            <li>Training (group class minimum): $250-400 for an 8-week course</li>
            <li>Emergency vet fund or pet insurance: $50-100/month</li>
            <li>Supplies, bedding, toys: $300-600 in year one</li>
          </ul>
          <p class="mb-6">Total first-year cost: $2,500-5,000 is realistic, not worst-case. Plan for this honestly before committing. An emergency vet visit (foreign body ingestion, orthopedic injury) without insurance or savings can run $3,000-8,000.</p>
        `
      },
      {
        title: "Chapter 2: The First Week — Foundations That Determine the First Year",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">The Most Important Thing to Establish: Routine</h4>
          <p class="mb-6">Dogs are profoundly routine-dependent animals. The fastest way to reduce anxiety, accelerate housetraining, and create a calm household is to establish and rigidly maintain a daily schedule from the first day. Feed at the same times. Take outside at the same times. Bedtime at the same time. The schedule need not be elaborate; it needs to be consistent.</p>
          <p class="mb-6">For puppies, the outdoor bathroom schedule should be aggressive in week one: upon waking (immediately), after every meal (within 10-15 minutes), after every nap, after every play session, and every 2 hours in between. This level of frequency feels excessive — but it creates the muscle-memory pattern of "outside equals bathroom" that every subsequent month of housetraining builds on.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Crate Training: The Most Misunderstood Tool</h4>
          <p class="mb-6">Crates are not punishment. Used correctly, a crate becomes a dog's safe space — their den equivalent — that they choose to use voluntarily. The process of establishing this takes patience in the first week but pays dividends for years.</p>
          <p class="mb-6">Introduction should be gradual: leave the crate open with comfortable bedding and occasionally toss high-value treats inside. Feed meals near, then in, the crate with the door open. Progress to briefly closing the door while they eat, then opening immediately when they finish. Build duration very slowly — minutes, not hours — during the first week. A puppy who goes into the crate voluntarily because it's associated with good things is different from a puppy who's locked in it while they scream. Only the first one is actually working.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">The First Vet Visit</h4>
          <p class="mb-6">Schedule the first vet visit within 72 hours of bringing the dog home, regardless of whether they appear healthy. This visit establishes a baseline health record, confirms the vaccination and parasite prevention schedule, and allows the vet to identify any conditions that weren't apparent at adoption or from the rescue's records.</p>
          <p class="mb-6">Bring any paperwork from the rescue or breeder. Ask specifically about: recommended food and feeding schedule for the dog's age and size, any breed-specific health screenings to schedule, local recommendations for flea/tick and heartworm prevention (these vary by region), and the vet's approach to vaccination timing for the socialization balance discussed in our <a href="/resources/puppy-socialization-masterclass" class="text-brand-start font-bold">puppy socialization guide</a>.</p>
        `
      },
      {
        title: "Chapter 3: Training Foundations — The 5 Behaviors Every Dog Must Know",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">Why Training Is Safety, Not Luxury</h4>
          <p class="mb-6">Basic obedience training is frequently framed as an optional add-on for well-behaved dogs. This framing is wrong. Training is the mechanism through which you establish reliable communication with your dog — which means you can get them away from a dangerous situation, recall them from across a park, and prevent the types of behavior that lead to dogs being surrendered. An untrained dog isn't just inconvenient; they're a higher risk to themselves and others.</p>
          <p class="mb-6">All training should use positive reinforcement: rewarding behaviors you want rather than punishing behaviors you don't. This approach has the strongest evidence base, creates the most durable behavior patterns, and strengthens rather than strains the dog-owner relationship. Sessions should be 5-10 minutes maximum, multiple times daily. Dogs learn better in short, frequent sessions than in long infrequent ones.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">The 5 Essential Behaviors</h4>
          <ul class="list-disc pl-6 mb-8 space-y-4">
            <li><strong>Sit:</strong> The easiest to teach and the foundation for everything else. Lure with a treat from nose to above the head — the natural response is a sit. Mark the moment their bottom hits the floor with a "yes!" or clicker, then reward. Add the word "sit" only once the behavior is reliable.</li>
            <li><strong>Stay:</strong> Build duration (how long), distance (how far you move away), and distraction (what's happening around them) separately before combining. Start with 1-second stays, reward, release. Add seconds gradually before adding any distance.</li>
            <li><strong>Come (Recall):</strong> The most important safety behavior. Never call your dog to you for anything unpleasant (baths, nail trims, being put away). The word "come" must always predict something wonderful. Practice in low-distraction environments and make the reward — praise, treats, play — genuinely exciting.</li>
            <li><strong>Leave It:</strong> Teach the dog to disengage from whatever they're approaching or have interest in. Invaluable for preventing ingestion of toxic objects, food on the ground, and reactive behavior toward other dogs. The two-stage process: cover a treat in your fist, reward any disengagement from the fist, then progress to treats on the floor.</li>
            <li><strong>Loose-Leash Walking:</strong> The behavior most people find most difficult to maintain. Requires consistency: the leash must never, ever tighten as a result of pulling and still result in forward movement. Any tightening means you stop, redirect, and resume only when the leash is loose. Consistency for 2-3 weeks produces reliable results; inconsistency produces dogs who pull forever.</li>
          </ul>
        `
      }
    ],
    conclusion: `The first year of dog ownership is the most important year. The patterns established — behavioral, medical, and relational — form the baseline for the decade or more of partnership that follows. The time investment in the first year is real and significant. So is the return.

Get the logistics handled (vet records, consistent feeding, scheduled preventatives) so they don't create crises. Get the training started early so management doesn't become your permanent strategy. Get the socialization done during the window so you have a dog who can engage confidently with the world.

Everything after that is relationship — and relationships between dogs and their people, built on the foundations described here, are among the best things available to humans.`,
    relatedSlugs: ["puppy-socialization-masterclass", "3-3-3-rule-for-rescue-dogs", "how-to-read-pet-food-labels"]
  },

  {
    slug: "how-to-read-pet-food-labels",
    title: "How to Read a Pet Food Label: What the Packaging Doesn't Tell You",
    seoTitle: "How to Read Pet Food Labels 2026: Ingredient Guide",
    shortTitle: "Pet Food Labels",
    seoDescription: "Most pet food labels are designed to sell, not inform. Here's how to read ingredient lists, guaranteed analysis panels, and AAFCO statements to actually evaluate what you're feeding your pet.",
    category: "Expert Guides",
    tags: ["Nutrition", "Expert Guides", "Health"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "14 Min Read",
    introduction: `Americans spend more than $60 billion a year on pet food and treats, according to the American Pet Products Association. It is also one of the least regulated consumer product markets in terms of marketing claim requirements. Words like "premium," "holistic," "natural," and "human-grade" have no regulated definition in pet food labeling. They mean whatever the company printing them chooses them to mean.

The good news: there is a standardized framework for evaluating pet food quality that requires no nutrition degree to use. The Association of American Feed Control Officials (AAFCO) sets the minimum standards that define what claims manufacturers can make about nutritional completeness — and once you understand how to read the label's regulated sections, you can evaluate any product regardless of its marketing.

This guide walks through every section of a pet food label, explains what's regulated versus marketing, and gives you a practical framework for evaluating what you're actually feeding your pet. For tracking your pet's diet and logging daily intake, <a href="/resources/best-pet-diet-nutrition-apps" class="text-brand-start font-bold hover:underline">see our pet nutrition app roundup</a>.`,
    chapters: [
      {
        title: "Chapter 1: The AAFCO Statement — The Most Important Line on the Label",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">What the AAFCO Statement Actually Means</h4>
          <p class="mb-6">Every complete pet food in the US should have an AAFCO nutritional adequacy statement. This is the single most regulated piece of information on the label. Look for it in small print, usually near the guaranteed analysis panel. It will say something like: "[Product name] is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for [life stage]."</p>
          <p class="mb-6">There are two ways a company can make this claim, and the difference matters significantly:</p>
          <ul class="list-disc pl-6 mb-8 space-y-3">
            <li><strong>Formulated to meet AAFCO profiles:</strong> The recipe was calculated on paper to meet minimum nutrient requirements. The food was never tested on actual animals. This is the minimum bar.</li>
            <li><strong>Substantiated by feeding trials:</strong> The food was fed to actual animals in controlled studies to confirm it sustains health. This is a higher standard and indicates more investment in validating the product's real-world nutritional performance.</li>
          </ul>
          <p class="mb-6">If the label says "for supplemental feeding only" or "for intermittent or supplemental use," the food does NOT meet complete nutrition standards and should not be fed as a primary diet.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Life Stage Claims</h4>
          <p class="mb-6">AAFCO defines three life stage categories for dogs: puppy (growth and reproduction), adult maintenance, and senior (not separately defined by AAFCO — "senior" on a label is a marketing term, not a regulated nutritional standard). A food labeled "all life stages" meets the more demanding puppy/growth requirements and is appropriate for any age, though it may exceed the caloric density needed for sedentary adult dogs.</p>
          <p class="mb-6">For cats: kitten (growth and reproduction) and adult maintenance are the AAFCO-defined stages. Cats have specific requirements (taurine, arachidonic acid, preformed vitamin A) that are not optional — cats cannot synthesize these from precursors the way dogs can, which is why feeding dogs food to cats is nutritionally dangerous over the long term.</p>
        `
      },
      {
        title: "Chapter 2: Ingredient Lists — What the Order Tells You (and What It Doesn't)",
        content: `
          <h4 class="text-xl font-bold text-ebony mb-4">Ingredient Ordering by Weight</h4>
          <p class="mb-6">Ingredients are listed by pre-cooking weight, heaviest first. This sounds straightforward but has significant implications for interpretation. Chicken is approximately 70% water by weight. "Chicken meal" has the water already removed — it's roughly 4-5x more calorie and protein dense by weight than fresh chicken. A food listing "chicken meal" second and "chicken" first may actually contain more total chicken protein from the meal than from the fresh chicken.</p>
          <p class="mb-6">This is not an industry trick — it's basic food chemistry. But it means "first ingredient is chicken" is not automatically a quality signal. Look at the first 5-6 ingredients collectively to understand the actual nutritional composition.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">Ingredient Splitting</h4>
          <p class="mb-6">A common label manipulation is "ingredient splitting" — dividing a single ingredient into multiple forms to push it down the list. Example: "Chicken, brewer's rice, brown rice, white rice, oat groats..." The individual rice forms each appear small, but combined they may represent more of the diet by weight than the chicken. This is legal and common. When you see multiple forms of the same base ingredient, add them together mentally to estimate their collective contribution.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">By-Products: The Most Misunderstood Ingredient</h4>
          <p class="mb-6">"Chicken by-products" or "meat by-products" are among the most demonized ingredients in pet food marketing — and among the most misunderstood. By AAFCO definition, by-products are the non-rendered parts other than meat: organs, lungs, kidney, brain, spleen, bone, fatty tissue. Organs are among the most nutrient-dense components of an animal. Many premium raw diet advocates specifically include organ meat as a high-value component.</p>
          <p class="mb-6">The quality distinction that matters is named versus unnamed: "chicken by-products" (named species) is preferable to "poultry by-products" (unnamed, could be any poultry). The named version indicates a consistent, traceable ingredient source. Avoiding by-products entirely as a category, based on marketing-driven fear, often means avoiding some of the most nutritionally complete parts of the animal.</p>

          <h4 class="text-xl font-bold text-ebony mb-4 mt-8">The Guaranteed Analysis Panel</h4>
          <p class="mb-6">The guaranteed analysis shows minimum percentages of crude protein and fat, and maximum percentages of fiber and moisture. These are guaranteed minimums — the actual amounts may be higher. To meaningfully compare foods with different moisture levels (dry kibble vs. canned vs. raw), you need to convert to "dry matter basis."</p>
          <p class="mb-6"><strong>Dry Matter Basis Calculation:</strong> Subtract the moisture percentage from 100 to get the dry matter percentage. Then divide the nutrient percentage by the dry matter percentage and multiply by 100. Example: A canned food with 78% moisture and 10% crude protein. Dry matter = 22%. Protein on dry matter basis = (10/22) × 100 = 45.5%. This is the number to compare against kibble with 10% moisture and 30% protein (dry matter basis = 33.3%).</p>
        `
      }
    ],
    conclusion: `Pet food marketing is designed to sell products, not to help you evaluate them. The regulated portions of the label — the AAFCO statement, the guaranteed analysis, the ingredient list — contain the actual information needed for informed evaluation.

The practical framework: verify the AAFCO statement and whether the claim is formulation-based or feeding-trial-based. Check that the first several ingredients are quality protein sources. Convert to dry matter basis when comparing foods of different moisture levels. Don't let marketing terms like "holistic," "natural," or "human-grade" substitute for reading the actual label.

A food that meets AAFCO complete nutrition standards for the correct life stage, sourced from named protein ingredients, and supported by feeding trials is a quality product regardless of whether the bag says "premium" on it.`,
    relatedSlugs: ["first-time-dog-owner-complete-guide", "best-pet-diet-nutrition-apps", "senior-pet-care-complete-guide"]
  },
  ];

// Short answers and FAQs added in the October 2026 review.
for (const g of guides) {
  const add = GUIDE_ADDITIONS[g.slug];
  if (add) {
    g.quickAnswer ??= add.quickAnswer;
    if (add.faqs && !g.faqs?.length) g.faqs = add.faqs;
  }
}

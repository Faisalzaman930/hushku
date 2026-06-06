"""
Generates server wrapper page.tsx for all tool pages.
Steps per tool:
1. Copy page.tsx → [slug]Client.tsx, renaming the export function
2. Write a new server page.tsx with JSON-LD, static content, FAQ, entity links
"""

import os, re, shutil

BASE = "/Users/mac/Desktop/hushku/app/tools"
OG_IMG = "https://hushku.app/screenshots/app-playdates.png"

# ── Per-tool data ─────────────────────────────────────────────────────────────
TOOLS = {

"calorie-calculator": {
  "client_export": "PetCalorieCalculator",
  "what": """The Hushku Pet Calorie Calculator uses the Resting Energy Requirement (RER) formula established in the <strong>WSAVA/AAHA Nutritional Guidelines</strong>: RER = 70 × (body weight in kg)<sup>0.75</sup>. This baseline is then multiplied by a life-stage factor — ranging from 1.0 for weight-loss programmes to 3.0 for puppies under 4 months — to produce a daily caloric target. Over 60% of dogs and 56% of cats in the US are currently overweight or obese, according to the <strong>Association for Pet Obesity Prevention (APOP)</strong>. Incorrect calorie intake — usually from guessing portions or not accounting for treats — is the primary cause.
  This calculator is a starting point. For therapeutic diets, post-surgery recovery, or pets with conditions like diabetes or kidney disease, always confirm targets with your vet or a board-certified veterinary nutritionist (DACVN).""",
  "faqs": [
    ("How many calories should my dog eat per day?",
     "A healthy adult neutered dog needs approximately 1.6 × RER calories per day, where RER = 70 × (weight in kg)^0.75. A 10 kg neutered adult dog needs roughly 70 × 10^0.75 × 1.6 ≈ 700 kcal/day. Puppies under 4 months need 3× RER. Active or working dogs need 2–2.5× RER. These are maintenance targets — always adjust based on body condition score, not just weight."),
    ("How many calories should my cat eat per day?",
     "An average adult indoor neutered cat weighing 4 kg needs approximately 180–220 kcal/day. The RER for a 4 kg cat is 70 × 4^0.75 ≈ 235 kcal, multiplied by a factor of 0.8–1.0 for inactive indoor cats. Wet food typically provides 70–100 kcal per 85g serving; dry food provides 300–400 kcal per 100g. Measuring both is critical — most owners underestimate by 20–30%."),
    ("Do treats count toward my pet's daily calorie intake?",
     "Yes — treats should account for no more than 10% of your pet's total daily calorie intake, according to WSAVA guidelines. A single medium dog biscuit can be 40–60 kcal. For a 10 kg dog on 700 kcal/day, the 10% limit is 70 kcal — roughly one or two small treats. This is a commonly overlooked cause of gradual weight gain."),
    ("What is RER and why does it matter?",
     "RER (Resting Energy Requirement) is the energy a pet needs while at complete rest to maintain normal physiological functions — breathing, circulation, digestion, temperature regulation. It is the baseline from which all other caloric targets are calculated using life-stage multipliers. The formula 70 × (weight in kg)^0.75 is derived from metabolic scaling research and is the standard used by WSAVA, AAHA, and the European College of Veterinary and Comparative Nutrition (ECVCN)."),
    ("How do I know if my dog or cat is overweight?",
     "The Body Condition Score (BCS) is more informative than weight alone. On the 1–9 scale used by WSAVA, a score of 4–5 is ideal. Signs of healthy weight: you can feel but not see the ribs, there is a visible waist when viewed from above, and the abdomen tucks up when viewed from the side. If ribs are hard to feel, the waist is not visible, or there is obvious abdominal rounding, the animal is likely overweight. Our Pet BMI & Body Condition Checker provides a structured assessment."),
  ],
  "links": ["/tools/water-calculator", "/tools/exercise-calculator", "/tools/pet-bmi", "/resources/complete-guide-to-pet-nutrition"],
},

"water-calculator": {
  "client_export": "PetWaterCalculator",
  "what": """Normal daily water intake for dogs and cats is <strong>20–70 ml per kg of body weight</strong>, according to veterinary internal medicine guidelines. The precise requirement varies by diet type (wet food contributes 60–80% of moisture needs; dry kibble almost none), ambient temperature, exercise level, and health status. Polydipsia — excessive thirst defined as drinking more than 90–100 ml/kg/day — is a clinically significant symptom associated with diabetes mellitus, Cushing's disease, kidney disease, and pyometra.
  This calculator gives you a personalised daily water target so you can establish a baseline and recognise deviations early.""",
  "faqs": [
    ("How much water should a dog drink per day?",
     "A healthy adult dog should drink approximately 20–70 ml per kg of body weight per day. For a 20 kg Labrador Retriever, that is 400–1,400 ml (roughly 1.5–6 cups). Dogs on wet food need significantly less from their bowl — wet food is 60–80% water. A dog who has just exercised vigorously will drink more immediately after. Consistent measurement over 3 days gives a reliable individual baseline."),
    ("How much water should a cat drink per day?",
     "Healthy cats need approximately 40–60 ml per kg of body weight per day. A 4 kg cat needs about 160–240 ml daily. However, most of this should come from food — cats evolved as desert animals and naturally have a low thirst drive. A cat eating wet food may drink almost nothing from a bowl; a cat on dry kibble needs to drink substantially more. Low water intake in cats on dry food is a risk factor for lower urinary tract disease (FLUTD) and kidney disease."),
    ("Why is my dog drinking more water than usual?",
     "Increased water consumption (polydipsia) in dogs is associated with several conditions: diabetes mellitus (polyuria/polydipsia is a hallmark symptom), Cushing's disease (hyperadrenocorticism), chronic kidney disease, pyometra in intact females, hypercalcaemia, and liver disease. Medications such as corticosteroids and phenobarbitone also increase thirst as a known side effect. If your dog is consistently drinking more than 90–100 ml/kg/day without an obvious benign cause (heat, exercise, diet change), a veterinary blood and urine panel is warranted."),
    ("Does diet affect how much water my pet needs?",
     "Yes — significantly. Wet food is 70–80% water and substantially reduces how much a dog or cat needs to drink from a bowl. Dry kibble is only 8–12% water, so dogs and cats on dry diets need to drink much more. If you recently switched from wet to dry food and notice your pet drinking more, this is the expected and appropriate response — not a health concern."),
    ("How can I encourage my cat to drink more water?",
     "Cats are attracted to moving water — a pet water fountain increases consumption in most cats compared to a static bowl. Multiple water stations around the home also help. Feeding wet or raw food, adding water to dry food, or offering a small amount of low-sodium broth are evidence-supported strategies. Stainless steel or ceramic bowls are preferable to plastic, which can harbour bacteria that some cats find aversive."),
  ],
  "links": ["/tools/calorie-calculator", "/resources/why-is-my-dog-drinking-so-much-water", "/health/daily-care"],
},

"exercise-calculator": {
  "client_export": "DogExerciseCalculator",
  "what": """Daily exercise requirements vary dramatically by breed, age, and health status. A Border Collie needs 90–120 minutes of vigorous exercise daily; a Basset Hound needs 20–30 minutes. The <strong>American Kennel Club (AKC)</strong> and veterinary behaviourists consistently identify insufficient exercise as the primary cause of destructive behaviour, obesity, and anxiety disorders in dogs.
  This calculator combines breed energy profile, age stage, and health flags to produce a daily exercise recommendation in minutes — split between structured activity (walks, runs, fetch) and mental enrichment (training, puzzle feeders, scent work).""",
  "faqs": [
    ("How much exercise does a dog need per day?",
     "Exercise needs vary enormously by breed. Low-energy breeds (Basset Hound, Shih Tzu, French Bulldog) need 20–30 minutes daily. Medium-energy breeds (Labrador Retriever, Beagle, Cocker Spaniel) need 45–60 minutes. High-energy working breeds (Border Collie, Australian Shepherd, Vizsla, Weimaraner) need 90–120+ minutes. These are minimums — most dogs benefit from more. Age matters too: puppies need shorter, more frequent play sessions; seniors need gentler, shorter walks."),
    ("Is walking enough exercise for my dog?",
     "For low and medium-energy breeds, a combination of walks and off-lead play is usually sufficient. For high-energy working breeds, walks alone are rarely adequate — these breeds require activities that challenge them physically and mentally: fetch, agility, swimming, off-lead running, or structured training sessions. A dog who is adequately exercised will be calm and settled indoors; a dog who is under-exercised is frequently restless, destructive, or attention-seeking."),
    ("How much exercise is too much for a puppy?",
     "The widely cited guideline for puppies is 5 minutes of structured exercise per month of age, twice daily (so a 4-month-old puppy: 20 minutes twice daily). This applies to leash walking and structured play — not free play, which puppies self-regulate. Excessive repetitive exercise on hard surfaces during the growth period can damage developing joints, particularly in large breeds prone to hip and elbow dysplasia. From 12–18 months, gradually increase to adult exercise levels."),
    ("Do brachycephalic breeds like French Bulldogs need less exercise?",
     "Yes — and their exercise must be managed carefully. Brachycephalic breeds (French Bulldogs, Pugs, Bulldogs, Boxers) have anatomically compromised airways that limit their ability to cool themselves through panting. They are at high risk of heatstroke in temperatures above 20°C (68°F) and should never be exercised in direct sun during warm weather. Short walks (15–20 minutes), multiple times daily in cool parts of the day, are safer than one long walk. Owners should watch for rapid panting, drooling, or distress as warning signs."),
    ("What counts as mental exercise for dogs?",
     "Mental stimulation is as tiring as physical exercise for most dogs. Sniffing on a walk (allowing the dog to follow scents rather than walk at heel) is cognitively demanding. Training sessions (5–10 minutes of reinforcement-based obedience or trick training) are highly effective. Puzzle feeders, Kongs, licking mats, and scatter feeding reduce arousal and provide enrichment. For working breeds, scent work and nose games can exhaust a dog mentally more effectively than an hour-long run."),
  ],
  "links": ["/tools/calorie-calculator", "/tools/breed-compare", "/resources/complete-guide-to-dog-training"],
},

"puppy-weight": {
  "client_export": "PuppyWeightPredictor",
  "what": """Predicting adult size from puppy weight helps owners plan appropriately for food costs, housing space, and equipment sizing. The calculation uses breed size category (small, medium, large, giant) and applies published growth curve data: small breeds typically reach adult weight by 8–10 months; medium breeds by 12–14 months; large breeds by 15–18 months; giant breeds by 18–24 months.
  The most widely used formula for large and giant breeds is the <strong>Purina formula</strong>: adult weight ≈ (current weight ÷ age in weeks) × 52. Results are estimates — individual variation within breed size categories is significant.""",
  "faqs": [
    ("How do I predict my puppy's adult weight?",
     "The simplest approach: for large breeds, take current weight in pounds, divide by the puppy's age in weeks, and multiply by 52. A 10 lb puppy at 10 weeks: (10 ÷ 10) × 52 = 52 lbs adult. For small breeds, adult weight is roughly double the 8-week weight. For medium breeds, weigh at 14 weeks and multiply by 2.5. These are approximations — parent sizes are the most reliable predictor for purebreds."),
    ("At what age is a puppy fully grown?",
     "Small breeds (under 10 lbs adult) are fully grown at 8–10 months. Medium breeds (10–50 lbs) at 12–14 months. Large breeds (50–100 lbs) at 15–18 months. Giant breeds (over 100 lbs — Great Dane, Saint Bernard, Mastiff) continue growing until 18–24 months. Growth plate closure, not simply reaching adult weight, marks true skeletal maturity — this is why high-impact exercise is restricted in large and giant breeds until 18 months."),
    ("Are mixed breed puppies harder to predict?",
     "Yes. For mixed breeds, breed size composition drives the estimate — if both parents are known, averaging their adult weights gives a reasonable target. DNA breed test results (Embark, Wisdom Panel) provide breed composition that improves estimates. Without parent information, weight at 16 weeks is a reasonable predictor: adult weight is typically 3–4× the 16-week weight for medium dogs."),
    ("Why does growth rate matter for large breed puppies?",
     "Rapid growth in large and giant breed puppies is a documented risk factor for developmental orthopaedic diseases including osteochondrosis (OCD), hip dysplasia, and elbow dysplasia. The Orthopedic Foundation for Animals (OFA) recommends feeding large breed puppies a diet formulated specifically for large breed growth — with controlled calcium and calorie levels — to avoid accelerated bone development. Overfeeding a large breed puppy is more harmful than overfeeding a small breed."),
    ("How often should I weigh my puppy?",
     "Weekly weigh-ins during the first 6 months, then monthly until adulthood. Weight is most reliably measured at the same time of day (before morning feeding) on the same scale. A consistent slight upward trend is healthy; rapid weight gain or any weight loss warrants a veterinary discussion. Log weights in Hushku's health tracker to maintain a growth chart over time."),
  ],
  "links": ["/tools/calorie-calculator", "/tools/exercise-calculator", "/health/weight-tracker", "/resources/complete-guide-to-puppy-care"],
},

"whelping-calculator": {
  "client_export": "WhelpingCalculator",
  "what": """Dogs have an average gestation of <strong>63 days from ovulation</strong>, though whelping typically occurs between day 58 and day 68 from mating. Cats average <strong>63–65 days</strong>. Because ovulation timing varies, the mating date provides an estimate rather than a precise due date.
  This calculator gives you an expected whelping window plus key milestone dates during pregnancy — including the optimal window for radiographic confirmation of litter size (day 45+) and the critical transition period (day 58 onwards) when whelping preparations should be in place.""",
  "faqs": [
    ("How long is a dog pregnant?",
     "Canine gestation averages 63 days from ovulation. Because ovulation timing varies and mating can occur over several days, whelping typically falls between day 58 and day 68 from the first mating date. Litter size influences timing — larger litters may whelp slightly earlier. Gestation length shorter than 58 days or longer than 70 days warrants veterinary assessment."),
    ("How long is a cat pregnant?",
     "Feline gestation averages 63–65 days from mating, with normal delivery between day 60 and day 68. Unlike dogs, cats are induced ovulators — ovulation is triggered by mating — which makes the mating date a more reliable reference point for estimating due date in cats than in dogs."),
    ("What are the signs that a dog or cat is about to give birth?",
     "In the 24–48 hours before labour: core body temperature drops below 37.5°C (99.5°F) in dogs (a reliable indicator — measure twice daily from day 58 onwards), nesting behaviour intensifies, the animal becomes restless or seeks seclusion, appetite may decrease, and a clear or slightly bloody discharge may appear. Milk may be present in the mammary glands from the final week of pregnancy."),
    ("When should I have an X-ray done during pregnancy?",
     "Radiographic confirmation of litter size becomes reliable from day 45 of gestation, when fetal skeletons are mineralised enough to be visible. Knowing the litter size helps you monitor whelping progress — if the expected number of puppies or kittens has not been delivered and labour stalls, your vet knows to intervene. An ultrasound can confirm foetal viability from as early as day 25."),
    ("What is dystocia and when should I call a vet?",
     "Dystocia is difficulty giving birth. Call a vet immediately if: active straining lasts more than 30–60 minutes without a puppy/kitten being delivered; more than 4 hours pass between deliveries when more foetuses are expected; the dam shows signs of extreme exhaustion, severe pain, or systemic illness; or there is excessive bright-red bleeding. Emergency caesarean section may be required. High-risk breeds for dystocia include brachycephalic breeds (French Bulldogs, Bulldogs) due to foetal head-to-pelvis size mismatch."),
  ],
  "links": ["/health/heat-cycle", "/resources/complete-guide-to-puppy-care", "/tools/calorie-calculator"],
},

"age-calculator": {
  "client_export": "PetAgeCalculator",
  "what": """The old "1 dog year = 7 human years" formula is scientifically inaccurate. Research published in <em>Cell Systems</em> (2020) by Trey Ideker and colleagues at UC San Diego used DNA methylation patterns to establish that dogs age rapidly in the first two years and more slowly thereafter — and that large breeds age faster than small breeds. This calculator uses species-specific and size-specific aging models to give a biologically grounded human-age equivalent.""",
  "faqs": [
    ("Is the 7-year rule for dog ages accurate?",
     "No — the 7-year rule is a rough average that is inaccurate at most life stages. A 1-year-old dog is sexually mature and physically adult, equivalent to a human in their mid-teens to early twenties, not age 7. A 2-year-old large breed dog has already completed most of its aging, while a 2-year-old small breed dog ages much more slowly. Research from UC San Diego (2020) using DNA methylation analysis provides a more accurate model that this calculator is based on."),
    ("Do large dogs age faster than small dogs?",
     "Yes — significantly so. A 10-year-old Great Dane is geriatric; a 10-year-old Chihuahua is middle-aged. The AKC and veterinary geriatric research consistently show that giant breeds (over 45 kg) have lifespans of 7–10 years, while toy breeds regularly live 14–16 years. The accelerated aging of large breeds is linked to their faster growth rates and higher metabolic turnover. Veterinarians typically consider large breeds 'senior' from age 7 and giant breeds from age 5–6."),
    ("At what age is a cat considered senior?",
     "The American Association of Feline Practitioners (AAFP) classifies cats as senior from age 11 and geriatric from age 15. In human-equivalent terms, an 11-year-old cat is roughly equivalent to a 60-year-old human. Biannual veterinary check-ups (rather than annual) are recommended from age 11 onwards to catch age-related conditions — kidney disease, hyperthyroidism, dental disease, arthritis, and hypertension — early."),
    ("How does breed affect a dog's lifespan?",
     "Breed and body size are the strongest predictors of canine lifespan. Small breeds (under 10 kg): 12–16 years. Medium breeds (10–25 kg): 10–14 years. Large breeds (25–45 kg): 9–12 years. Giant breeds (over 45 kg): 7–10 years. Within size categories, certain breeds have known longevity (Dachshund, Miniature Poodle) or shortened lifespans due to breed-specific health conditions (Bulldog, Boxer, Great Dane)."),
    ("When should I start treating my pet as a senior?",
     "Dogs: age 7 for medium and large breeds, age 5–6 for giant breeds, age 9–10 for small breeds. Cats: age 11. Senior status means increasing vet check-ups to twice yearly, asking about senior blood panels (kidney function, thyroid, glucose, CBC), transitioning to senior or joint-support diet formulations if appropriate, and monitoring for mobility changes, weight loss, increased thirst/urination, or behavioural changes."),
  ],
  "links": ["/health", "/health/weight-tracker", "/tools/calorie-calculator"],
},

"best-cat-quiz": {
  "client_export": "BestCatBreedQuiz",
  "what": """Finding the right cat breed matters more than most people realise. A Bengal's high energy and vocalisation make it a poor match for a quiet apartment; a Persian's long coat demands daily grooming that low-maintenance owners resent. This quiz asks 7 questions — covering activity level, living space, allergy sensitivity, grooming tolerance, indoor/outdoor preference, family composition, and desired companionship style — to match you with the ideal feline companion from 15 cat breed profiles.
  According to the <strong>American Pet Products Association (APPA)</strong>, there are approximately 46 million cat-owning households in the US. The most common rehoming reason cited by cat owners is "incompatible temperament" — a problem this quiz is designed to prevent.""",
  "faqs": [
    ("What is the best cat breed for beginners?",
     "The best cat breeds for first-time owners are those with adaptable, forgiving temperaments that do not require specialist handling. Top recommendations include the Ragdoll (famously docile, gentle with handling, low-maintenance temperament), the British Shorthair (independent, calm, not demanding), the Maine Coon (sociable but not clingy, robust), and the Domestic Shorthair / moggy (the most adaptable of all, typically robust health). Avoid highly vocal, demanding breeds like Siamese or Burmese as a first cat unless you actively want that engagement level."),
    ("What is the best cat breed for small apartments?",
     "Low-energy, indoor-adapted breeds suit apartments best. The British Shorthair, Persian, and Ragdoll are calm, non-destructive, and content with indoor life. The Scottish Fold and Exotic Shorthair are similar in temperament. Avoid Bengal cats and Abyssinians in apartments — both breeds are high-energy, athletic, and need vertical space and stimulation to prevent destructive behaviour. Any cat in an apartment benefits from window perches, vertical scratching posts, and interactive play twice daily."),
    ("Are there hypoallergenic cat breeds?",
     "No cat breed is 100% allergen-free — all cats produce Fel d 1, the primary cat allergen. However, some breeds produce significantly less: the Balinese, Siberian, and Sphynx are frequently cited as lower-allergen options. Male cats generally produce more Fel d 1 than females; entire (unspayed/unneutered) males produce the most. Regular bathing of the cat and HEPA air filtration in the home reduces airborne allergen levels regardless of breed."),
    ("What cat breeds are best with children?",
     "Maine Coons, Ragdolls, and Birmans are consistently recommended for families with children due to their patient, gentle temperaments and tolerance of handling. These breeds are less likely to scratch or hide when approached by young children. Avoid timid breeds like the Russian Blue or Norwegian Forest Cat for households with boisterous children — these cats are easily overwhelmed and will spend most of their time hiding rather than engaging."),
    ("What is the difference between an indoor and outdoor cat?",
     "Indoor cats live exclusively inside; outdoor cats have access to the outdoors, either freely or in an enclosed garden (catio). Indoor cats live significantly longer on average — 12–18 years versus 5–7 years for outdoor cats — due to reduced exposure to road accidents, predators, disease, and injury. The RSPCA and most veterinary bodies recommend keeping cats indoors, particularly in urban areas. Breeds like the Ragdoll and Persian are better suited to indoor life; breeds like the Norwegian Forest Cat and Bengal typically adapt better if outdoor access is available."),
  ],
  "links": ["/breeds/cats", "/tools/best-dog-quiz", "/adoption"],
},

"birthday-countdown": {
  "client_export": "PetBirthdayCountdown",
  "what": """Track your pet's next birthday with a live countdown timer. Enter your pet's name, species, and date of birth — the calculator shows the exact days, hours, and minutes until their next birthday, along with their current age and upcoming milestone years. Use it as a fun reminder tool, share it with friends, or track multiple pets simultaneously.""",
  "faqs": [
    ("Why should I track my pet's birthday?",
     "Tracking your pet's birthday helps you plan annual wellness visits timed around their birthday, ensure vaccinations and preventive treatments stay current, and monitor health changes between yearly milestones. Many veterinary practices recommend scheduling annual wellness checks around the pet's birthday as an easy-to-remember anchor. Beyond the practical, marking pet birthdays is associated with higher rates of preventive care adherence — owners who mark the occasion are more likely to book the annual vet check."),
    ("What are key milestone ages for dogs?",
     "Key canine milestones: 6–9 months (sexual maturity, typically when neutering is recommended), 1 year (adult for small and medium breeds), 2 years (adult for large breeds), 7 years (senior for large breeds — increase vet visits to biannual), 10–12 years (geriatric for most breeds, biannual blood panels strongly recommended). Giant breeds age faster: senior status from 5–6 years."),
    ("What are key milestone ages for cats?",
     "Key feline milestones: 6 months (sexual maturity), 1 year (adult), 10 years (mature/middle-aged — the AAFP classifies 7–10 as 'mature'), 11 years (senior — biannual wellness recommended), 15 years (geriatric — comprehensive twice-yearly panels including kidney function, thyroid, blood pressure). Indoor cats regularly reach 16–20 years with good preventive care."),
    ("Can I track multiple pets?",
     "Yes — Hushku's health tracking feature supports multiple pets on a single account. Each pet has their own profile, birthday, and health log. Create profiles for all your pets and get reminders for each one's birthday and upcoming care events through the app."),
  ],
  "links": ["/health", "/health/reminders", "/tools/age-calculator"],
},

"breed-compare": {
  "client_export": "BreedCompareTool",
  "what": """Compare any two dog or cat breeds across 28+ attributes simultaneously — including temperament scores (adaptability, friendliness, trainability, energy), physical characteristics (size, weight, height), grooming requirements, health indicators, and suitability for different households. Data is drawn from the same breed database that powers our 450+ breed directory pages, scored on a 1–5 scale aligned with AKC and Kennel Club breed standards.""",
  "faqs": [
    ("What is the best way to choose between two dog breeds?",
     "Compare on the factors that directly affect daily life: energy level and exercise needs (are they compatible with your lifestyle?), trainability and experience requirement (are you the right owner?), shedding and grooming needs (are you prepared for the maintenance?), and health and lifespan (are you prepared for potential breed-specific veterinary costs?). Appearance should be the last factor, not the first. The Orthopedic Foundation for Animals (OFA) and breed-specific health studies provide documented data on breed-specific hereditary conditions that should inform any long-term ownership decision."),
    ("How is the trainability score calculated?",
     "Trainability reflects the breed's general responsiveness to positive reinforcement-based training, based on aggregated breed standard descriptions from the American Kennel Club (AKC), The Kennel Club (UK), and veterinary behavioural literature. A score of 5 indicates a breed that is highly motivated by food or praise, learns quickly, and generalises commands well (e.g. Border Collie, Standard Poodle). A score of 1 indicates a breed that is independent, follows its own instincts, and requires significantly more patience and experience (e.g. Afghan Hound, Basset Hound)."),
    ("Golden Retriever vs Labrador Retriever — which is better?",
     "Both are excellent family dogs and consistently rank in the top 3 most popular breeds in the US and UK. Key differences: Labrador Retrievers come in three coat colours (black, yellow, chocolate) and have a shorter, lower-maintenance coat; Golden Retrievers have a longer coat requiring more regular grooming. Labs tend to mature faster and are slightly more food-motivated for training. Golden Retrievers are typically more gentle with very young children. Cancer incidence is higher in Golden Retrievers (approximately 60% lifetime risk). Both are highly intelligent, trainable, and family-friendly."),
    ("Can I compare a dog breed with a cat breed?",
     "The comparison tool is currently separated by species — you can compare dog vs dog or cat vs cat. Comparing across species is not directly meaningful because the scoring systems reflect species-specific criteria (e.g. 'playfulness' in a dog context is different from the feline equivalent). For cross-species household decisions, read the individual breed guides and look specifically at the dog-friendly scores for cats and cat-friendly information for dogs."),
  ],
  "links": ["/breeds/dogs", "/breeds/cats", "/tools/best-dog-quiz", "/tools/best-cat-quiz"],
},

"feeding-calculator": {
  "client_export": "PetFeedingCalculator",
  "what": """Portion sizes on pet food packaging are notoriously overestimated — manufacturers have a commercial incentive to recommend higher amounts, and the ranges given are typically based on unspayed/unneutered animals at maintenance activity. This calculator provides feeding amounts based on your pet's actual weight, age, reproductive status, and activity level — adjusted for the caloric density of common food types.""",
  "faqs": [
    ("How much should I feed my dog per day?",
     "Daily feeding amounts depend on your dog's weight, age, activity level, and the caloric density of the food. As a baseline: a 10 kg adult neutered dog at maintenance activity needs roughly 700 kcal/day. Dry kibble typically provides 300–400 kcal per 100g; wet food 70–100 kcal per 100g (85g tin). Always check the specific caloric content on your food label and calculate from that — never rely solely on the bag's feeding guide. Weigh food with a kitchen scale rather than using cups, which can vary by 20–30%."),
    ("How many times a day should I feed my dog?",
     "Adult dogs (over 12 months) do well with two meals daily. Puppies under 12 weeks need 4 meals per day; 12 weeks to 6 months need 3 meals; 6–12 months need 2–3 meals. Splitting the daily ration into two meals reduces hunger, stabilises blood sugar, and decreases the risk of bloat (Gastric Dilatation-Volvulus) in large and deep-chested breeds, which are at highest risk when fed one large meal. Breeds prone to bloat include Great Danes, German Shepherds, Dobermans, and Standard Poodles."),
    ("How much should I feed my cat?",
     "An average 4 kg adult indoor neutered cat needs approximately 180–220 kcal/day, split into 2–4 small meals (cats are natural grazers). Free-feeding dry food leads to overconsumption in most cats. Measured wet food meals are preferable for weight management and urinary health. The exact amount depends on the caloric density of the specific food — check the label for kcal per 100g or per tin and calculate accordingly."),
    ("Should I feed my dog once or twice a day?",
     "Twice daily is the veterinary consensus recommendation for adult dogs for the reasons above. Some owners prefer once daily; this is acceptable for most small and medium breeds but increases bloat risk in large, deep-chested breeds. Regardless of frequency, total daily calories should remain the same — splitting into multiple meals does not mean feeding more."),
    ("What is the difference between feeding for weight loss vs maintenance?",
     "Weight loss in pets requires feeding approximately 80% of the RER (Resting Energy Requirement) rather than the full maintenance level (typically 1.4–1.8× RER). This is a modest caloric restriction that produces safe, gradual weight loss of approximately 1–2% of body weight per week — the rate recommended by veterinary nutritionists to preserve lean muscle mass. Rapid weight restriction (below 60–70% RER) should only be attempted under veterinary supervision, particularly in cats where it risks hepatic lipidosis."),
  ],
  "links": ["/tools/calorie-calculator", "/tools/water-calculator", "/tools/pet-bmi"],
},

"first-aid-quiz": {
  "client_export": "FirstAidQuiz",
  "what": """Pet emergencies are time-critical. Knowing whether a situation requires an emergency vet visit in the next hour — or can wait until morning — can save a pet's life and prevent owners from panicking unnecessarily. This 6-question quiz tests your knowledge of pet first aid, triage decisions, and emergency response protocols across common scenarios including poisoning, seizures, choking, and trauma.
  The <strong>American Red Cross</strong> offers a Pet First Aid app and certification programme. The <strong>ASPCA Animal Poison Control Center</strong> (888-426-4435) is available 24/7 for poisoning emergencies.""",
  "faqs": [
    ("What are the most common pet emergencies?",
     "The most common pet emergencies seen in veterinary ERs are: gastric dilatation-volvulus (bloat) in large dogs, urethral obstruction in male cats, toxin ingestion (chocolate, xylitol, grapes, medications), trauma (road accidents, falls), respiratory distress (especially in brachycephalic breeds), allergic reactions and anaphylaxis, seizures, and heatstroke. Urethral obstruction in male cats is particularly time-critical — complete obstruction is fatal within 24–48 hours without treatment."),
    ("What should I do if my dog eats something poisonous?",
     "Call the ASPCA Animal Poison Control Center (888-426-4435) or your nearest emergency vet immediately. Do not induce vomiting unless explicitly instructed by a vet or poison control — some toxins (caustic substances, hydrocarbons) cause more damage coming back up. Note the substance, amount ingested, and time of ingestion before you call. Common household toxins include xylitol (sugar-free products), grapes and raisins, macadamia nuts, ibuprofen and acetaminophen, rat bait, and certain houseplants including lilies (highly toxic to cats)."),
    ("How do I perform CPR on a dog or cat?",
     "Dog CPR: place the dog on its side, locate the heart behind the left elbow. Compress the chest 30 times at a rate of 100–120 per minute (same as human CPR), then give 2 rescue breaths by holding the mouth closed and breathing into the nose. Cat CPR: same positioning, but use only the thumb and one finger for compressions on very small animals. Get your pet to an emergency vet immediately — CPR is a bridge measure, not a substitute for veterinary care."),
    ("What is the difference between a medical emergency and 'watch at home'?",
     "Emergencies requiring immediate (same night) vet care: difficulty breathing, collapse, seizures lasting more than 2 minutes, suspected poisoning, major trauma or bleeding, inability to urinate (especially male cats), pale or blue gums, distended abdomen. Monitor at home (vet visit next day or in 24 hours): mild vomiting (once or twice, otherwise normal), mild diarrhoea without blood, single episode of limping without obvious injury. When in doubt, call your vet's emergency line — they can advise by phone."),
    ("How do I treat a dog or cat that is choking?",
     "If the animal can still breathe, cough, or make noise, do not intervene — let them attempt to clear the obstruction naturally and get to a vet. If the animal is silent and cannot breathe: for dogs, look in the mouth for a visible obstruction and sweep it out with a finger only if you can clearly see it; then use the Heimlich manoeuvre (place hands behind last rib and thrust sharply inward and upward). For cats, use gentle back blows between shoulder blades. Transport to emergency vet immediately regardless of outcome."),
  ],
  "links": ["/tools/symptom-checker", "/tools/toxic-food", "/health/records"],
},

"insurance-cost": {
  "client_export": "InsuranceCostEstimator",
  "what": """Pet insurance premiums in the US range from approximately $15 to $100+ per month depending on species, breed, age, location, coverage type, deductible, and reimbursement percentage. The average annual vet spend is approximately $1,500 for dogs and $900 for cats, but a single accident or illness — cancer diagnosis, orthopaedic surgery, emergency GDV surgery — can cost $5,000–$15,000. This estimator calculates a realistic premium range based on your pet's profile and breaks down what each coverage tier typically includes.""",
  "faqs": [
    ("Is pet insurance worth it?",
     "Pet insurance is most valuable when you want financial certainty and would pursue all available treatment if your pet became seriously ill. The average dog owner in the US pays approximately $1,500/year in vet bills; insured owners tend to pursue more thorough diagnostics and treatment because cost is less of a barrier. The break-even point varies by breed — high-health-risk breeds (Bulldog, Great Dane, Golden Retriever) are more likely to recoup premium costs through claims. For budget-conscious owners, an emergency savings fund of $2,000–3,000 can serve a similar purpose for minor emergencies."),
    ("What does pet insurance typically cover?",
     "Accident-only policies cover injuries (broken bones, lacerations, toxin ingestion, road accidents) but not illness. Accident and illness policies cover most conditions including cancer, orthopaedic conditions, digestive issues, respiratory disease, and more. Wellness/preventive riders add coverage for routine care (vaccinations, dental cleanings, annual check-ups) for an additional monthly premium. Almost all policies exclude: pre-existing conditions (any condition documented before the policy start date), elective procedures, and breed-specific conditions if the breed is listed as high-risk on that policy."),
    ("When is the best time to get pet insurance?",
     "The earlier the better — ideally when your pet is young and healthy, before any condition can be classified as pre-existing. Most insurers have a waiting period (typically 14 days for illness, 48 hours for accidents) before coverage begins. Conditions diagnosed or showing symptoms before the policy start date are permanently excluded on most policies. Getting insurance before your first vet visit ensures the widest coverage."),
    ("What is a deductible and how does it work in pet insurance?",
     "A deductible is the amount you pay out-of-pocket before insurance pays. Pet insurance deductibles work either per-incident (you pay the deductible each time a new condition is treated) or annually (you pay the deductible once per year regardless of how many conditions arise). Annual deductibles typically offer better value if your pet has multiple claims in a year; per-incident deductibles may be better if your pet is generally healthy and you only expect occasional claims."),
    ("Are there pet insurance options in the UK and Australia?",
     "Yes — pet insurance is widely available in both markets. In the UK, major providers include Petplan, More Than, Animal Friends, and Direct Line. In Australia: PetInsurance Australia, Budget Direct, and RSPCA Pet Insurance. UK market penetration is higher than the US — approximately 25% of UK dogs are insured versus 4% of US dogs. European insurers generally offer 'lifetime' policies that cover conditions year after year without exclusion limits, which tend to offer better value than US-style annual policies."),
  ],
  "links": ["/health/records", "/tools/calorie-calculator", "/adoption"],
},

"name-generator": {
  "client_export": "PetNameGenerator",
  "what": """Naming a pet is a surprisingly significant decision — you will say the name thousands of times, and the dog or cat will learn to respond to it. Research in animal cognition suggests dogs respond best to names with 2 syllables ending in a vowel sound (the 'soft' consonant ending carries better in outdoor environments and in excited states). This generator produces name suggestions based on species, personality type, and coat colour — drawing from a database of hundreds of options organised by theme, origin, and phonetic quality.""",
  "faqs": [
    ("What makes a good name for a dog?",
     "Veterinary behaviourists and animal trainers recommend names that are: 1–2 syllables (easier to say quickly in training), end in a vowel or 'y' sound (higher pitch carries better and gets the dog's attention), and do not sound like common commands (avoid 'Kit' which sounds like 'sit', 'Bo' which sounds like 'no', 'Ray' which sounds like 'stay'). Short, distinctive names produce the fastest conditioned response in training. That said, any name works with consistent use — the dog learns the sound, not the meaning."),
    ("Do cats actually respond to their names?",
     "Yes — a 2019 study published in <em>Scientific Reports</em> by Atsuko Saito and colleagues demonstrated that domestic cats can distinguish their own name from other words, responding with head movements and ear orientation. Cats are more selective in showing this response than dogs, but the ability is well-documented. Cats respond better to names with sharp consonants (K, T, P sounds) and higher-pitched vowels, consistent with the sounds their owners use when speaking to them in excited or affectionate tones."),
    ("Is it bad to change a rescue pet's name?",
     "Not at all — rescue pets adapt to new names within days to weeks with consistent positive reinforcement. Say the new name whenever the pet looks at you or comes toward you, and immediately reward. Avoid repeating the name when the pet is not responding, which can teach them to ignore it. If you want to ease the transition, choose a new name that sounds similar to the original (e.g. transitioning 'Buster' to 'Rusty' uses the same vowel sounds and ending)."),
    ("What are the most popular pet names?",
     "According to Rover and VetStreet annual surveys, the top dog names in the US are consistently: Luna, Bella, Daisy, Max, Charlie, Cooper, Buddy, Milo, Lola, and Sadie. Top cat names include: Luna, Bella, Oliver, Leo, Milo, Charlie, Max, Lucy, Lily, and Nala. If uniqueness matters to you, avoid these — at any dog park, calling 'Luna' or 'Bella' will produce multiple responses."),
  ],
  "links": ["/tools/birthday-countdown", "/breeds/dogs", "/adoption"],
},

"packing-checklist": {
  "client_export": "PetPackingChecklist",
  "what": """Travelling with a pet requires significantly more preparation than travelling alone. This checklist covers 7 categories across all common species: food and feeding equipment, medications and health documents, safety and containment, bedding and comfort items, waste management, emergency contact information, and destination-specific requirements. It adapts based on your pet's species, trip type (domestic or international), transport method, and any special health needs.""",
  "faqs": [
    ("What documents do I need to travel internationally with my pet?",
     "International pet travel requirements vary by destination country. For most destinations you will need: a valid microchip (ISO 15-digit standard), an up-to-date rabies vaccination (often required at least 21–30 days before travel), a health certificate from an accredited veterinarian issued within 10 days of travel, and an import permit or USDA/APHIS endorsement. The EU requires an EU Animal Health Certificate. Australia and New Zealand have among the strictest requirements globally, including mandatory quarantine periods. Always check the destination country's official animal import requirements 3–6 months before travel."),
    ("Can my pet travel in the cabin on an aeroplane?",
     "Most major airlines allow small dogs and cats (combined weight with carrier typically under 8–10 kg) to travel in the cabin in an approved carrier under the seat. Larger pets must travel in the cargo hold in an airline-approved crate (IATA regulations specify crate size, ventilation, and construction requirements). Brachycephalic breeds (French Bulldogs, Pugs, Bulldogs, Persian cats, Himalayan cats) are banned from cargo and sometimes from cabin travel by many airlines due to their elevated respiratory risk in pressurised environments. Check your specific airline's pet policy before booking."),
    ("How do I help my pet with travel anxiety?",
     "Preparation reduces travel anxiety significantly. Introduce the carrier weeks before travel — leave it open with bedding and treats inside so the pet associates it positively. For road trips, acclimatise with short practice journeys. Pheromone products (Adaptil for dogs, Feliway for cats) applied to the carrier 30 minutes before use are evidence-supported anxiolytics. For severe anxiety, a veterinarian can prescribe gabapentin or trazodone for travel days — these require a vet consultation and a trial run at home to assess the response before the actual travel day."),
    ("What food and water arrangements should I make for travelling?",
     "Bring your pet's regular food — abrupt diet changes combined with travel stress frequently cause gastrointestinal upset. Maintain normal feeding times as much as possible. Water from a clean, familiar source or bottled water is preferable to tap water in unfamiliar locations (mineral content varies and can cause loose stools). Collapsible travel bowls are compact and convenient. For flights, withhold food for 4–6 hours before departure to reduce nausea risk, but ensure water is available."),
    ("What vaccinations does my dog or cat need for travel?",
     "Core vaccinations (distemper/parvo/hepatitis for dogs; panleukopenia/herpesvirus/calicivirus for cats) should be current. Rabies vaccination is required for international travel to most countries and for domestic travel to some US states. Bordetella (kennel cough) vaccination is recommended if your dog will be in boarding facilities or contact with other dogs during the trip. A health certificate from your vet, issued within 10 days of travel, documents current vaccination status and is required for airline travel."),
  ],
  "links": ["/health/records", "/health/reminders", "/tools/vaccine-tracker"],
},

"pet-bmi": {
  "client_export": "PetBMIChecker",
  "what": """The standard human BMI formula is not appropriate for pets — a dog's healthy weight depends on breed, sex, and frame size. This tool uses <strong>Body Condition Score (BCS)</strong>, the system recommended by the <strong>World Small Animal Veterinary Association (WSAVA)</strong>, combined with breed size norms to assess whether your pet is underweight, ideal, overweight, or obese. Over 60% of US dogs and cats are currently overweight according to APOP 2024 data — and the majority of their owners believe their pet is at a healthy weight.""",
  "faqs": [
    ("How do I know if my dog is overweight?",
     "Use the Body Condition Score (BCS) system. At ideal weight (BCS 4–5 on a 1–9 scale): you can feel ribs easily with light pressure but cannot see them; there is a visible waist when viewed from above; the abdomen tucks up when viewed from the side. Overweight (BCS 6–7): ribs require firm pressure to feel; waist is barely visible or absent; little or no abdominal tuck. Obese (BCS 8–9): ribs cannot be felt; prominent fat deposits over spine and base of tail; no waist visible; pendulous abdomen."),
    ("What health problems are caused by obesity in pets?",
     "Canine and feline obesity is associated with shortened lifespan (studies show obese dogs live 1.8 years less on average than ideal-weight dogs), osteoarthritis and joint inflammation, type 2 diabetes (particularly in cats), cardiovascular disease, respiratory compromise (especially in brachycephalic breeds), increased anaesthetic risk, hepatic lipidosis in cats, increased cancer risk, and urinary tract disease. The Association for Pet Obesity Prevention notes that even modest weight reduction — 10–15% of body weight — produces measurable improvement in mobility and quality of life in arthritic dogs."),
    ("How much should I reduce my pet's food to help them lose weight?",
     "A safe weight loss rate for dogs is approximately 1–2% of body weight per week; for cats, 0.5–1% per week. This typically requires feeding approximately 70–80% of the maintenance caloric requirement. Do not restrict calories below 60% of RER without veterinary supervision — rapid restriction in cats risks hepatic lipidosis, a potentially fatal liver condition triggered by fat mobilisation during caloric restriction. Switching to a high-protein, lower-calorie food formulation is often more sustainable than reducing portions of a calorie-dense food."),
    ("Is it normal for a cat to be chubby?",
     "No — despite being culturally normalised, obesity in cats is a serious health condition. The term 'fat cat' and the prevalence of overweight cats on social media have contributed to owner perception that a heavy cat is normal or cute. A healthy adult cat typically weighs 3.5–5.5 kg depending on frame. A 6–7 kg cat is overweight; an 8+ kg cat is obese. Common causes include indoor sedentary lifestyle, ad-lib dry food feeding, and neutering (which reduces metabolic rate by approximately 20–25%)."),
  ],
  "links": ["/tools/calorie-calculator", "/tools/feeding-calculator", "/health/weight-tracker"],
},

"pet-health-quiz": {
  "client_export": "PetHealthQuiz",
  "what": """This 8-question lifestyle audit scores your pet's health across five domains recommended by the <strong>American Veterinary Medical Association (AVMA)</strong> and <strong>WSAVA</strong>: diet and nutrition, physical exercise, mental stimulation, preventive veterinary care, and dental health. The quiz produces a wellness score out of 80, categorised into tiers from Excellent to Needs Improvement, with specific actionable recommendations for the lowest-scoring areas.""",
  "faqs": [
    ("How often should I take my pet to the vet?",
     "The AVMA recommends annual wellness visits for healthy adult pets (1–7 years), and biannual visits for senior pets (dogs over 7, cats over 11). Each visit should include a full physical examination, weight check, dental assessment, and discussion of any behavioural changes. Annual bloodwork (CBC, biochemistry panel, urinalysis) is increasingly recommended from middle age onwards to establish baselines and catch conditions like kidney disease, diabetes, and hypothyroidism before clinical signs appear."),
    ("How important is dental care for pets?",
     "Dental disease is one of the most under-treated conditions in companion animals. The American Veterinary Dental College estimates that by age 3, over 80% of dogs and 70% of cats have some degree of dental disease. Periodontal disease causes chronic pain, tooth loss, and — critically — allows bacteria to enter the bloodstream, increasing risk of heart, kidney, and liver disease. Professional dental cleaning under general anaesthesia is the gold standard; daily tooth brushing at home is the single most effective preventive measure."),
    ("What is the minimum exercise requirement for a healthy pet?",
     "There is no universal minimum — requirements vary enormously by species and breed. As a general guide: dogs need at least 30 minutes of moderate activity daily (most dogs benefit from significantly more); cats need at least two 10–15 minute active play sessions daily in addition to environmental enrichment (climbing structures, puzzle feeders, window access). Sedentary indoor cats that receive no active play are at high risk of obesity, urinary tract disease, and behavioural problems."),
    ("What mental stimulation does my pet need?",
     "Mental stimulation is as important as physical exercise, particularly for intelligent breeds. For dogs: training sessions (5–10 minutes daily), puzzle feeders, scatter feeding, sniffing games, novel environments. For cats: food puzzles, rotating toy variety, bird feeders positioned at windows, and interactive wand play. Dogs that are physically exercised but mentally understimulated frequently develop anxiety-based behaviours including destructive chewing, excessive barking, and repetitive stereotypies."),
  ],
  "links": ["/health", "/health/daily-care", "/tools/calorie-calculator", "/tools/exercise-calculator"],
},

"pet-owner-quiz": {
  "client_export": "PetOwnerQuiz",
  "what": """This 8-question self-assessment scores your pet ownership practices across the areas veterinary and welfare organisations identify as most predictive of pet wellbeing: veterinary care regularity, vaccination compliance, diet quality and portion control, dental care, emergency preparedness, physical activity, identification (microchipping), and safety practices. The result gives an honest rating with specific areas to improve.""",
  "faqs": [
    ("What are the most important things a pet owner should do?",
     "According to the AVMA, the five most important commitments for responsible pet ownership are: (1) annual wellness veterinary visits and keeping vaccinations current; (2) microchipping and registration — microchipped pets are reunited with owners at rates 2.5× higher for dogs and 21× higher for cats than unchipped pets; (3) desexing unless breeding is planned — reduces roaming, aggression, and several cancers; (4) providing appropriate nutrition and preventing obesity; (5) providing adequate exercise and mental stimulation appropriate to the species and breed."),
    ("How can I tell if I am a good pet owner?",
     "Signs of responsible ownership: your pet maintains a healthy body weight (BCS 4–5/9), has up-to-date vaccinations and annual vet checks, their teeth are clean, they are microchipped, you have an emergency vet fund or pet insurance, they get appropriate daily exercise, and they exhibit calm, confident behaviour without fear or aggression. If any of these areas are lacking, the quiz provides specific, actionable improvements."),
    ("Is microchipping compulsory?",
     "Microchipping is legally compulsory for dogs in the UK (since 2016), Australia (in most states), and many EU countries. In the US there is no federal requirement, but many states and municipalities have mandatory microchipping laws. Regardless of legality, microchipping is strongly recommended by all major veterinary and welfare bodies — it is a permanent, inexpensive (typically $25–50) form of identification that dramatically improves lost pet recovery rates."),
    ("What does responsible pet ownership cost per year?",
     "Average annual costs for a dog in the US (APPA 2023–24): vet care $400–$700, food $300–$700, grooming $100–$400, supplies and accessories $100–$200, boarding/pet sitting when travelling $200–$600. Total: $1,100–$2,600/year minimum for a healthy dog. Unexpected veterinary costs (surgery, illness) can add $2,000–$15,000. Annual costs for cats are generally lower: $800–$1,800/year. These costs should be factored into the decision to get a pet."),
  ],
  "links": ["/health", "/adoption", "/tools/pet-health-quiz"],
},

"pet-sitter-cost": {
  "client_export": "PetSitterCostCalculator",
  "what": """Pet sitting costs vary significantly by location, service type, pet species, trip duration, and provider. US national averages (Rover, 2024): in-home pet sitting $25–$45/night; doggy daycare $25–$40/day; dog walking $15–$30 per 30-minute walk; boarding at a sitter's home $30–$60/night. Urban markets (New York, San Francisco, London) run 30–50% higher. This calculator applies regional pricing adjustments and species/special-needs factors to give a realistic budget estimate.""",
  "faqs": [
    ("How much does pet sitting cost per day?",
     "In the US, pet sitting in your home averages $25–$45 per night for a single dog or cat (Rover national data, 2024). Overnight stays where the sitter stays in your home typically cost $50–$80/night. Doggy daycare (drop-off at a facility) averages $25–$40/day. In major cities (New York, Los Angeles, San Francisco), rates run 40–60% higher. In the UK, overnight pet sitting averages £20–£40/night; in Australia, AUD $50–$90/night."),
    ("What is the difference between pet sitting and dog boarding?",
     "Pet sitting means a sitter comes to your home (drop-in visits of 30–60 minutes, or overnight stays). Dog boarding means your dog goes to the sitter's or facility's home. Home-based boarding is typically less stressful than commercial kennels because dogs are in a home environment with fewer dogs present. Kennels offer professional supervision and medical facilities if needed. Pet sitting in your own home is usually the least stressful for the pet — they stay in their familiar environment with minimal disruption to routine."),
    ("How do I find a trustworthy pet sitter?",
     "Platforms like Rover and Wag provide background-checked sitters with verified reviews. Key factors to evaluate: experience with your specific breed or species, number of pets they care for simultaneously, references from past clients, insurance coverage, first-aid certification, and whether they have a meet-and-greet process before the booking. Always do a trial overnight before a long trip. Ask specifically about emergency veterinary protocols — what do they do if your pet needs urgent care?"),
    ("Is Rover or Wag better for pet sitting?",
     "Rover has a larger number of sitters and generally more transparent reviews. Wag operates more like a gig platform (faster booking, less pre-screening). Rover is typically better for first-time bookings where you want to vet the sitter carefully; Wag can be convenient for last-minute bookings. Both have similar pricing. Neither fully replaces a personal recommendation from a trusted friend or vet — ask your vet for local sitter referrals as a starting point."),
    ("Should I use a pet hotel or a home pet sitter?",
     "For dogs that are highly social and used to multiple-dog environments, a quality doggy daycare or small kennel works well. For anxious dogs, dogs with medical needs, multiple-cat households, or exotic pets, a home-based sitter who comes to your house is usually preferable. Cats in particular are best cared for in their own territory — transport to a boarding facility adds stress to an already stressful situation."),
  ],
  "links": ["/tools/sitting-comparison", "/playdates", "/health/reminders"],
},

"photo-tips": {
  "client_export": "PetPhotoTipsWizard",
  "what": """Taking a sharp, well-lit, emotionally engaging photo of a moving pet is genuinely difficult. This wizard asks 3 questions — lighting conditions, pet coat type, and camera — and provides personalised tips based on the specific challenges of your setup. Key principles: always shoot at the pet's eye level, use burst mode to capture motion, achieve focus on the eyes (not the nose), and use natural light or a ring light rather than direct flash.""",
  "faqs": [
    ("How do I get a sharp photo of my dog or cat?",
     "The three most common causes of blurry pet photos: insufficient shutter speed (use at least 1/500s for moving pets), focus on the wrong part (ensure your camera locks focus on the eyes, not the nose or ears), and camera shake (brace your arms or use image stabilisation). On a smartphone: tap the eye area on screen to set focus, then use burst mode (hold the shutter button) to capture 10+ frames and choose the sharpest. Use the volume button as a shutter on iPhones to reduce camera shake."),
    ("What is the best lighting for pet photography?",
     "Natural window light from the side (not direct sunlight through the window) is the most flattering for pets. Overcast outdoor light is ideal — it is soft, even, and shadow-free. Direct flash causes red-eye in many animals and harsh shadows. If shooting indoors at night, a ring light placed at pet's eye level is significantly better than overhead lighting, which creates unflattering downward shadows and highlights the top of the head rather than the face."),
    ("How do I photograph a black dog or cat?",
     "Black animals are notoriously difficult to photograph because cameras expose for average scene brightness, causing the dark subject to become underexposed while the background becomes correctly or over-exposed. Fixes: photograph against a light background to help the camera meter correctly; use your phone's exposure compensation slider (tap the subject and drag the sun icon down) or manual mode to slightly overexpose relative to the camera's suggestion; shoot in RAW format if available and lift the shadows in editing; avoid harsh directional light which loses detail in dark fur."),
    ("What are good ways to get my pet to look at the camera?",
     "Make a squeaky sound or crinkle a treat bag immediately before taking the shot — the ears will prick and the eyes will focus on you. Hold a treat against the lens of your camera or phone so the pet looks directly at the lens. For cats, a bird sound or gentle squeaking toy works well. Have an assistant stand behind you making noise. Take many shots — with 10 seconds of burst mode, you will get at least one with direct eye contact and alert expression."),
  ],
  "links": ["/social", "/breeds/dogs", "/tools/name-generator"],
},

"sitting-comparison": {
  "client_export": "SittingComparisonTool",
  "what": """Comparing pet sitting platforms requires evaluating more than just price. This comparison covers the four major platforms (Rover, Wag, Care.com, local alternatives) across the criteria that matter most for pet safety: sitter screening depth (background check scope, criminal database coverage), insurance and liability coverage, what happens in a veterinary emergency, the transparency of the review system, and cancellation policies. Price is the least important variable when trusting a stranger with your pet.""",
  "faqs": [
    ("Is Rover or Wag better?",
     "Rover and Wag serve different use cases. Rover has a larger sitter network, requires a meet-and-greet before the first booking, allows you to review a sitter's full profile and reviews before booking, and has a dedicated trust & safety team. Wag functions more like an on-demand service — faster booking but less pre-screening. Rover is generally recommended for first-time bookings or extended stays where building a relationship with the sitter matters. Wag can be convenient for last-minute dog walks where the primary requirement is availability."),
    ("What background checks do pet sitting platforms do?",
     "Rover runs a criminal background check via Checkr (covering national criminal records and sex offender databases) but does not verify references or conduct in-person interviews. Wag runs similar background checks. Neither platform guarantees the sitter's experience level with specific breeds or health conditions — that requires direct assessment through meet-and-greet. Care.com offers more thorough background checks as an add-on but does not specialise in pet care. No platform is a substitute for personal verification."),
    ("What happens if my pet gets injured while being sat?",
     "Rover provides up to $25,000 in veterinary coverage per incident for injuries occurring while under a Rover sitter's care, plus $1,000,000 in liability insurance. Wag offers similar coverage. However, claims require documentation and approval — in a genuine emergency, instruct the sitter to go to the nearest emergency vet immediately and worry about coverage paperwork later. Ensure your sitter has your vet's contact information and a signed emergency treatment authorisation before you travel."),
    ("How much does Rover cost compared to Wag?",
     "Pricing varies by location and sitter, but national US averages are comparable: $25–$45/night for in-home sitting, $30–$60/night for boarding at the sitter's home, $15–$30 for a 30-minute dog walk. Rover charges a 20% service fee on the booking amount; Wag charges a 40% commission. Both sitters set their own base rates. Urban markets (NYC, SF, London) run significantly higher — $60–$100+/night for in-home sitting is not unusual."),
  ],
  "links": ["/tools/pet-sitter-cost", "/playdates", "/health/records"],
},

"symptom-checker": {
  "client_export": "SymptomCheckerTool",
  "what": """This tool allows you to search or browse 40+ common pet symptoms and returns an urgency rating (Emergency, See Vet Soon, Monitor at Home), a list of potential causes, and immediate action guidance. It is designed for triage — helping you decide whether a symptom requires an emergency vet visit tonight, a next-day appointment, or careful home monitoring.
  <strong>This tool is not a substitute for veterinary diagnosis.</strong> When in doubt, call your vet's emergency line — most practices offer 24/7 telephone triage. For poisoning, call the <strong>ASPCA Animal Poison Control Center at 888-426-4435</strong>.""",
  "faqs": [
    ("When should I take my dog to an emergency vet?",
     "Seek emergency veterinary care immediately for: difficulty breathing or open-mouth breathing (especially in cats), collapse or inability to stand, seizures lasting more than 2 minutes or cluster seizures, suspected poisoning (call ASPCA Poison Control first), distended abdomen in large dogs (possible GDV/bloat), inability to urinate — especially in male cats (complete urethral obstruction is fatal within 24–48 hours without treatment), pale, white, blue, or grey gums, severe and uncontrolled bleeding, trauma (road accident, fall from height, dog attack), and sudden-onset extreme lethargy."),
    ("Is my dog vomiting serious?",
     "Occasional vomiting (once or twice) in an otherwise normal, alert dog is usually benign — common causes include eating too fast, eating grass, or minor dietary indiscretion. Concerning signs that warrant same-day or emergency vet care: vomiting blood or material that looks like coffee grounds, vomiting combined with extreme lethargy or pain, vomiting plus abdominal distension in large breeds (potential GDV), repeated vomiting (5+ times in a day), vomiting in a puppy or senior dog, or vomiting combined with known or suspected toxin ingestion."),
    ("Why is my cat not eating?",
     "Cats that stop eating for more than 24–48 hours require veterinary attention regardless of apparent cause. Unlike dogs, cats that go without food for 3–5 days are at risk of hepatic lipidosis — a severe and potentially fatal liver condition where fat accumulates in liver cells during caloric restriction. Common causes of anorexia in cats include dental pain (the most common cause in adult cats), upper respiratory infection (loss of smell eliminates appetite), nausea from various systemic conditions, stress from environmental changes, and serious underlying disease."),
    ("What does it mean if my dog has pale gums?",
     "Pale, white, grey, or blue gums are a veterinary emergency indicating poor oxygen delivery to tissues — this can result from severe anaemia, internal bleeding, shock, circulatory failure, or respiratory compromise. Normal dog gum colour is pink (like bubblegum) and returns to pink within 2 seconds of pressing firmly with a finger (capillary refill time). Any deviation from pink warrants immediate emergency vet assessment."),
    ("How do I know if my cat is in pain?",
     "Cats are stoic and mask pain effectively. Signs of pain in cats: reduced activity or hiding, change in posture (hunched with feet tucked under), reduced grooming or over-grooming a specific area, changes in facial expression (orbital tightening, ear flattening, whisker position changes — the validated Feline Grimace Scale describes these), vocalisation when touched in a specific area, reluctance to jump or climb, reduced appetite, and increased aggression when handled. Dental disease is the most common unrecognised source of chronic pain in cats."),
  ],
  "links": ["/tools/toxic-food", "/tools/first-aid-quiz", "/health/records", "/health/reminders"],
},

"toxic-food": {
  "client_export": "ToxicFoodChecker",
  "what": """This searchable database covers 50+ foods with safety ratings for dogs and cats — from everyday items like grapes (highly toxic to dogs) and onions (toxic to both species) to less-known hazards like xylitol (found in sugar-free gum, peanut butter, and medications), macadamia nuts, and certain sweeteners. For any suspected toxin ingestion, contact the <strong>ASPCA Animal Poison Control Center (888-426-4435)</strong> or your nearest emergency vet immediately.
  According to ASPCA data, the most common toxin ingestions in dogs involve human medications (often left accessible accidentally), foods, and household chemicals.""",
  "faqs": [
    ("What foods are toxic to dogs?",
     "The most dangerous foods for dogs: xylitol (sugar-free gum, sugar-free peanut butter, some medications — causes severe hypoglycaemia and liver failure at very small doses); grapes and raisins (cause acute kidney failure — the mechanism is not fully understood but all forms are toxic); chocolate (theobromine toxicity — dark chocolate and baking chocolate are most dangerous); onions and garlic (damage red blood cells — raw, cooked, and powdered forms are all toxic); macadamia nuts (cause weakness, hyperthermia, vomiting); raw yeast dough (expands in stomach, produces alcohol); alcohol and caffeine. Avocado is toxic to many species but has low toxicity to dogs (primarily a concern for birds and rabbits)."),
    ("What foods are toxic to cats?",
     "Cats share many toxicity risks with dogs but have some unique vulnerabilities: lilies (all parts of true lilies — Lilium and Hemerocallis species — cause acute kidney failure in cats; even small exposures such as pollen on the coat are toxic); onions and garlic (cause Heinz body anaemia); xylitol (less acutely toxic than in dogs but still harmful); raw fish (contains thiaminase, which destroys thiamine/vitamin B1); raw eggs; and paracetamol/acetaminophen (cats lack the liver enzyme to metabolise it — even a single tablet can be fatal)."),
    ("Is chocolate dangerous for dogs — how much is toxic?",
     "Yes — chocolate contains theobromine and caffeine, both of which dogs metabolise much more slowly than humans. Toxicity is dose- and type-dependent. Dark chocolate: toxic dose is approximately 1.3 g/kg body weight. Baking/unsweetened chocolate: toxic at approximately 0.2 g/kg. Milk chocolate: toxic at approximately 3.5 g/kg. White chocolate has very low theobromine but can still cause GI upset and pancreatitis. Symptoms of chocolate toxicity: vomiting, diarrhoea, restlessness, muscle tremors, seizures. Call ASPCA Poison Control immediately if ingestion is confirmed."),
    ("Can dogs eat peanut butter?",
     "Plain peanut butter (with no added xylitol) is safe for dogs in small amounts and is widely used to administer medications or as a training reward. However, xylitol — an artificial sweetener — is increasingly common in peanut butter brands and is highly toxic to dogs at tiny doses (as little as 0.1 g/kg can cause life-threatening hypoglycaemia). Always check the ingredients list for xylitol, sorbitol, erythritol, or 'natural sweetener' before giving peanut butter to a dog."),
    ("Are grapes and raisins really that toxic to dogs?",
     "Yes — grapes and raisins cause acute kidney injury in dogs, and the toxic mechanism is still not fully understood by researchers. Critically, there is no known safe dose — even one grape or a few raisins has caused fatal kidney failure in some dogs while other dogs have eaten larger amounts without obvious acute illness. The ASPCA and BSAVA recommend treating any grape or raisin ingestion as a veterinary emergency. Foods containing raisins (raisin bread, trail mix, fruitcake) are equally dangerous."),
  ],
  "links": ["/tools/symptom-checker", "/tools/first-aid-quiz", "/health/records"],
},

"vaccine-tracker": {
  "client_export": "VaccineTrackerTool",
  "what": """Vaccination schedules differ by species, age, geographic location, and lifestyle factors. This tracker displays the recommended vaccination timelines for puppies, kittens, and adult dogs and cats — separated into core vaccines (recommended for all animals regardless of lifestyle) and non-core vaccines (recommended based on risk factors).
  Core vaccines for dogs are established by the <strong>WSAVA Vaccination Guidelines Group</strong> and include distemper, adenovirus (hepatitis), parvovirus, and rabies (where required by law). Core vaccines for cats include panleukopenia (feline parvovirus), feline herpesvirus-1, and calicivirus.""",
  "faqs": [
    ("What vaccinations does a puppy need and when?",
     "The standard puppy vaccination schedule recommended by WSAVA: first combination vaccine (distemper/adenovirus/parvovirus) at 6–8 weeks; second at 10–12 weeks; third at 14–16 weeks; booster at 12 months. Rabies as required by local law (typically 12–16 weeks with a booster at 12 months). Non-core vaccines based on lifestyle: Bordetella (kennel cough) — recommended before any dog-to-dog contact, kennelling, or training classes; leptospirosis — recommended in areas with wildlife exposure; Lyme disease — recommended in tick-endemic regions."),
    ("What vaccinations does a kitten need?",
     "Core kitten vaccines per WSAVA guidelines: feline herpesvirus-1 + calicivirus + panleukopenia (FVRCP combination) starting at 6–8 weeks, then every 3–4 weeks until 16 weeks. Booster at 12 months. Rabies as required. Non-core: FeLV (feline leukaemia virus) — recommended for any cat with outdoor access or contact with other cats; FIV — not universally recommended."),
    ("How often do adult dogs need vaccinations?",
     "Following the initial puppy series and 12-month booster, most core vaccines are effective for 3 years and should be given every 3 years in adult dogs, according to WSAVA guidelines. Rabies vaccination schedules are set by local law (1-year or 3-year depending on jurisdiction). Bordetella and leptospirosis vaccines typically require annual boosters. Your vet can run titre tests (blood tests measuring antibody levels) as an alternative to automatic booster vaccination — many practices now offer this."),
    ("Is it safe to vaccinate an adult dog that has no vaccination history?",
     "Yes — a dog with unknown vaccination history should receive the full primary course as if a puppy. For an adult dog with no records: one combination vaccine immediately, a second 3–4 weeks later. No harm comes from vaccinating a dog that was previously vaccinated — the immune response from a booster in a dog that is already immune is normal and does not cause 'over-vaccination' problems. Titre testing first is an alternative if you want to confirm whether immunity already exists before vaccinating."),
    ("What is kennel cough and should my dog be vaccinated?",
     "Kennel cough (infectious tracheobronchitis) is a highly contagious respiratory infection caused primarily by Bordetella bronchiseptica and canine parainfluenza virus. It spreads rapidly in any context where dogs meet — kennels, training classes, dog parks, grooming facilities. Symptoms: harsh honking cough, retching, nasal discharge. Usually self-limiting in healthy adults but can progress to pneumonia in puppies, seniors, or immunocompromised dogs. The Bordetella vaccine (intranasal or injectable) does not prevent all strains but significantly reduces severity. It is recommended at least 7–10 days before any dog-to-dog contact."),
  ],
  "links": ["/health/records", "/health/reminders", "/tools/calorie-calculator"],
},

}  # end TOOLS


def slugify(s):
    return s.lower().replace(" ", "-").replace("_", "-")


def client_name_from_export(export_name):
    """Convert export function name to a file-friendly name."""
    return export_name


def build_server_page(slug, data):
    client_export = data["client_export"]
    what = data["what"]
    faqs = data["faqs"]
    links = data.get("links", [])

    canonical = f"https://hushku.app/tools/{slug}"

    faq_schema_items = "\n".join([
        f"""    {{
      "@type": "Question",
      name: {repr(q)},
      acceptedAnswer: {{ "@type": "Answer", text: {repr(a)} }},
    }},""" for q, a in faqs
    ])

    faq_jsx = "\n".join([
        f"""          <div key={repr(q)} className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-base font-black text-ebony mb-2">{q}</h3>
            <p className="text-sm text-slate-gray leading-relaxed">{a}</p>
          </div>""" for q, a in faqs
    ])

    link_items = "\n".join([
        f'          <Link key="{l}" href="{l}" className="text-brand-start font-bold hover:underline text-sm">{l} →</Link>' for l in links
    ])

    return f'''import Link from "next/link";
import {client_export} from "./{client_export}";

const breadcrumbSchema = {{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {{ "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" }},
    {{ "@type": "ListItem", position: 2, name: "Free Tools", item: "https://hushku.app/tools" }},
    {{ "@type": "ListItem", position: 3, name: "{slug.replace("-", " ").title()}", item: "{canonical}" }},
  ],
}};

const webAppSchema = {{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "{slug.replace("-", " ").title()}",
  url: "{canonical}",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {{ "@type": "Offer", price: "0", priceCurrency: "USD" }},
  creator: {{ "@type": "Organization", name: "Hushku", url: "https://hushku.app" }},
}};

const faqs = [
{chr(10).join([f'  {{ q: {repr(q)}, a: {repr(a)} }},' for q, a in faqs])}
];

const faqSchema = {{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({{ q, a }}) => ({{
    "@type": "Question",
    name: q,
    acceptedAnswer: {{ "@type": "Answer", text: a }},
  }})),
}};

export default function Page() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(webAppSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}} />

      <{client_export} />

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="bg-brand-start/5 border border-brand-start/15 rounded-2xl px-6 py-4 mb-8">
          <p className="text-sm text-slate-gray leading-relaxed">{what}</p>
        </div>

        <h2 className="text-2xl font-black text-ebony uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
{faq_jsx}
        </div>
{(f"""
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-slate-gray uppercase tracking-widest mb-3">Related</p>
          <div className="flex flex-wrap gap-4">
{link_items}
          </div>
        </div>""") if links else ""}
      </section>
    </>
  );
}}
'''


updated_tools = []
skipped = []

for slug, data in TOOLS.items():
    tool_dir = os.path.join(BASE, slug)
    page_path = os.path.join(tool_dir, "page.tsx")
    client_export = data["client_export"]
    client_path = os.path.join(tool_dir, f"{client_export}.tsx")

    if not os.path.exists(page_path):
        print(f"No page.tsx found: {slug}")
        continue

    with open(page_path) as f:
        content = f.read()

    # Skip if already restructured (already imports a client component)
    if f'import {client_export} from "./{client_export}"' in content:
        skipped.append(slug)
        continue

    # 1. Copy page.tsx → [ClientExport].tsx
    shutil.copy(page_path, client_path)
    print(f"Created client: {slug}/{client_export}.tsx")

    # 2. Write new server page.tsx
    server_content = build_server_page(slug, data)
    with open(page_path, "w") as f:
        f.write(server_content)
    print(f"Created server page: {slug}/page.tsx")

    updated_tools.append(slug)

print(f"\nDone. Created server wrappers for {len(updated_tools)} tools.")
if skipped:
    print(f"Skipped (already done): {skipped}")

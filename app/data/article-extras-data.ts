import type { ArticleExtras } from "./article-extras";
import type { Source } from "./tools";

/** Reusable sources. Each URL was checked when this guide set was reviewed (October 2026). */
export const SRC = {
  avsabSocial: { label: "AVSAB: Position statement on puppy socialization", url: "https://indoorpet.osu.edu/sites/default/files/imce/Puppy_Socialization_Position_download_-_10-4-14.pdf" },
  avsabTraining: { label: "AVSAB: Humane dog training position statement (2021)", url: "https://about.illinoisstate.edu/vfdouga/files/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf" },
  avsabAll: { label: "AVSAB: Position statements and handouts", url: "https://avsab.org/resources/position-statements/" },
  aahaLife: { label: "AAHA: 2019 Canine Life Stage Guidelines", url: "https://www.aaha.org/aaha-guidelines/life-stage-canine-2019/" },
  aahaSenior: { label: "AAHA: 2023 Senior Care Guidelines for Dogs and Cats", url: "https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/" },
  aahaNutrition: { label: "AAHA: 2021 Nutrition and Weight Management Guidelines", url: "http://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2021-nutrition-and-weight-management/resourcepdfs/nutritiongl_box1.pdf" },
  aahaVaxDog: { label: "AAHA: 2022 Canine Vaccination Guidelines", url: "https://www.aaha.org/aaha-guidelines/2022-aaha-canine-vaccination-guidelines/" },
  wsavaSelect: { label: "WSAVA: Selecting a pet food for your pet", url: "https://wsava.org/wp-content/uploads/2021/04/Selecting-a-pet-food-for-your-pet-updated-2021_WSAVA-Global-Nutrition-Toolkit.pdf" },
  wsavaNutrition: { label: "WSAVA: Global nutrition guidelines and toolkit", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
  wsavaBcs: { label: "WSAVA body condition score charts", url: "https://vmc.vet.osu.edu/sites/default/files/documents/wsava-bcs-chart-dogs-cats.pdf" },
  aafcoLabels: { label: "AAFCO: How to understand a dog or cat food label", url: "https://www.aafco.org/consumers/understanding-pet-food/reading-labels/" },
  cornellCatNutrition: { label: "Cornell Feline Health Center: Experts address feline nutrition", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/cornell-veterinary-experts-address-feline-nutrition" },
  merckParvo: { label: "Merck Veterinary Manual: Canine parvovirus", url: "https://merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/canine-parvovirus" },
  osuParvo: { label: "Ohio State University: Canine parvovirus fact sheet", url: "https://Vet.osu.edu/sites/default/files/documents/Canine Parvovirus Fact Sheet 20200123.pdf" },
  avmaCirdc: { label: "AVMA: Canine infectious respiratory disease complex (kennel cough)", url: "https://avma.org/resources-tools/pet-owners/petcare/canine-infectious-respiratory-disease-complex-kennel-cough" },
  cornellCirdc: { label: "Cornell Riney Canine Health Center: Canine respiratory disease outbreaks", url: "https://www.vet.cornell.edu/departments/riney-canine-health-center/canine-health-information/canine-respiratory-disease-outbreaks" },
  acvsGdv: { label: "ACVS: Gastric dilatation-volvulus", url: "https://www.acvs.org/small-animal/gastric-dilatation-volvulus/" },
  vinGdv: { label: "VIN: Risk factors for canine bloat", url: "https://www.vin.com/doc/?id=3848657" },
  acvsHip: { label: "ACVS: Canine hip dysplasia", url: "https://www.acvs.org/?p=6312" },
  ofa: { label: "Orthopedic Foundation for Animals", url: "https://ofa.org/about/" },
  vcaThirst: { label: "VCA Animal Hospitals: Testing for increased thirst and urination", url: "https://vcahospitals.com/know-your-pet/testing-for-increased-thirst-and-urination" },
  vetScotPd: { label: "Veterinary Specialists Scotland: Polydipsia in dogs and cats", url: "https://vetspecialists.co.uk/fact-sheets-post/polydipsia-in-dogs-and-cats-increased-drinking-fact-sheet/" },
  vcaAnorexia: { label: "VCA Animal Hospitals: Anorexia in dogs", url: "https://vcahospitals.com/know-your-pet/anorexia-in-dogs" },
  vcaLameness: { label: "VCA Animal Hospitals: Lameness in dogs", url: "https://vcahospitals.com/know-your-pet/lameness-in-dogs" },
  medvetAtopy: { label: "MedVet: Atopic disease in dogs", url: "https://www.medvet.com/atopic-disease-dogs/" },
  cornellCds: { label: "Cornell Riney Canine Health Center: Cognitive dysfunction syndrome", url: "https://www.vet.cornell.edu/departments/riney-canine-health-center/canine-health-information/cognitive-dysfunction-syndrome" },
  idexxSdma: { label: "IDEXX: Why SDMA matters", url: "https://www.idexx.com/en/veterinary/reference-laboratories/sdma/why-sdma-matters" },
  dvm360Oa: { label: "dvm360: Prevalence data for osteoarthritis in companion animals", url: "https://www.dvm360.com/view/prevalence-data-for-oa-in-companion-animals" },
  cbdCornell: { label: "Gamble et al. (2018), Cannabidiol in osteoarthritic dogs, Frontiers in Veterinary Science", url: "https://www.frontiersin.org/articles/10.3389/fvets.2018.00165/full" },
  ecollar: { label: "China, Mills and Cooper (2020), Efficacy of dog training with and without e-collars, Frontiers in Veterinary Science", url: "https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2020.00508/pdf" },
  purinaLifespan: { label: "Penn Today: Dogs fed a reduced-calorie diet lived nearly two years longer", url: "https://penntoday.upenn.edu/news/study-finds-dogs-fed-reduced-calorie-diet-live-nearly-two-years-longer-dogs-unrestricted-diet" },
  avmaFirstAid: { label: "AVMA: Pet first aid brochure", url: "https://ebusiness.avma.org/files/ProductDownloads/mcm-client-brochures-pet-first-aid-2025.pdf" },
  aspcaFoods: { label: "ASPCA: People foods to avoid feeding your pets", url: "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets" },
  aspcaBodyLanguage: { label: "ASPCA: Canine body language", url: "https://aspcapro.org/sites/default/files/canine-body-language-aspca.pdf" },
  aspcaAnxiety: { label: "ASPCA Pro: Treating anxiety in shelter dogs", url: "https://www.aspcapro.org/sites/default/files/behavior-2020-treating-anxiety.pdf" },
  akcCrate: { label: "AKC: How to crate train a puppy", url: "https://www.akc.org/expert-advice/training/how-to-crate-train-a-puppy/" },
  akcPotty: { label: "AKC: How to potty train a puppy", url: "https://www.akc.org/expert-advice/training/how-to-potty-train-a-puppy/" },
  akcNails: { label: "AKC: How to trim dog nails", url: "https://www.akc.org/expert-advice/health/how-to-trim-dog-nails/" },
  akcFrenchie: { label: "AKC: French Bulldog breed information", url: "https://www.akc.org/dog-breeds/french-bulldog/" },
  akcGolden: { label: "AKC: Golden Retriever breed information", url: "https://www.akc.org/dog-breeds/golden-retriever/" },
  akcLab: { label: "AKC: Labrador Retriever breed information", url: "https://www.akc.org/dog-breeds/labrador-retriever/" },
  akcGsd: { label: "AKC: German Shepherd Dog breed information", url: "https://www.akc.org/dog-breeds/german-shepherd-dog/" },
  akcBeagle: { label: "AKC: Beagle breed information", url: "https://www.akc.org/dog-breeds/beagle/" },
  camBoas: { label: "University of Cambridge: BOAS research annual report (2018)", url: "https://www.vet.cam.ac.uk/system/files/documents/BOAS_annual_report_Dec2018.pdf" },
  frenchieVetCompass: { label: "VetCompass: Disorders of French Bulldogs under primary veterinary care in the UK", url: "https://dogwellnet.com/content/population-statistics/general-breeds-specific-disease-inform/populaton-based-data-from-veterinarians-insurance-databases/demography-and-disorders-of-the-french-bulldog-population-under-primary-veterinary-care-in-the-uk-in-2013-r584/" },
  morrisGolden: { label: "Morris Animal Foundation: Golden Retriever Lifetime Study", url: "https://www.morrisanimalfoundation.org/study/golden-retriever-lifetime-study" },
  camLabPomc: { label: "University of Cambridge: Genetic variant may help explain why Labradors are prone to obesity", url: "https://www.cam.ac.uk/research/news/genetic-variant-may-help-explain-why-labradors-are-prone-to-obesity" },
  sydneyChocLab: { label: "University of Sydney: A dog's colour could impact longevity", url: "https://sydney.edu.au/news-opinion/news/2018/10/22/a-dog-s-colour-could-impact-longevity--increase-health-problems.html" },
} satisfies Record<string, Source>;

const S = SRC;

export const EXTRAS_DATA: Record<string, ArticleExtras> = {
  // ── Complete guides ──────────────────────────────────────────────
  "complete-guide-to-dog-training": {
    topic: "training",
    keyFacts: [
      "Veterinary behaviourists recommend reward-based training; the AVSAB advises against aversive tools such as shock, prong and choke collars.",
      "A 2020 UK study found e-collar training was no more effective than reward-based training for the same behaviours.",
      "Short sessions of a few minutes, several times a day, work better than one long session.",
      "Most behaviour problems have a cause (fear, boredom, pain or unclear rules) that training alone can't fix.",
    ],
    sources: [S.avsabTraining, S.ecollar, S.avsabAll],
    tools: ["exercise-calculator", "best-dog-quiz"],
    updated: "October 2026",
  },
  "complete-guide-to-puppy-care": {
    topic: "puppies",
    keyFacts: [
      "The key socialisation period runs to about 12–14 weeks; vets recommend safe socialisation before vaccinations are finished.",
      "Core puppy vaccines start at 6–8 weeks and continue every 2–4 weeks until at least 16 weeks.",
      "Young puppies need to go out after waking, eating and play, and roughly every 1–2 hours while awake.",
      "Large-breed puppies need a large-breed puppy food to support steady, not rapid, growth.",
    ],
    sources: [S.avsabSocial, S.aahaVaxDog, S.aahaLife, S.akcPotty],
    tools: ["puppy-weight", "vaccine-tracker", "feeding-calculator", "crate-collar-harness-size"],
    updated: "October 2026",
  },
  "complete-guide-to-pet-health": {
    topic: "health",
    keyFacts: [
      "Healthy adult pets need a check-up at least once a year; seniors every 6 months.",
      "Kidney disease can be picked up earlier with the SDMA blood test, which can rise after about 25% loss of function versus about 75% for creatinine.",
      "Osteoarthritis is common and under-recognised: vets estimate at least 20% of adult dogs are affected, and far more seniors.",
      "Dental disease is one of the most common problems vets see in dogs and cats.",
    ],
    sources: [S.aahaLife, S.aahaSenior, S.idexxSdma, S.dvm360Oa],
    tools: ["symptom-checker", "vaccine-tracker", "pet-bmi", "age-calculator"],
    updated: "October 2026",
  },
  "complete-guide-to-pet-nutrition": {
    topic: "nutrition",
    keyFacts: [
      "Daily calories start from the resting energy requirement (70 × weight in kg^0.75), multiplied by a life stage factor.",
      "Look for an AAFCO 'complete and balanced' statement for your pet's life stage on the label.",
      "Treats should be no more than 10% of daily calories.",
      "In Purina's 14-year study, Labradors kept lean lived a median 1.8 years longer than their heavier littermates.",
    ],
    sources: [S.aahaNutrition, S.wsavaSelect, S.aafcoLabels, S.purinaLifespan],
    tools: ["calorie-calculator", "feeding-calculator", "pet-bmi", "food-transition-calculator"],
    updated: "October 2026",
  },

  // ── How-to guides ───────────────────────────────────────────────
  "how-to-crate-train-a-puppy": { keyFacts: ["Feed meals in the crate with the door open so it predicts good things.", "Build closed-door time slowly, from seconds to minutes to hours, over 1–3 weeks.", "Never use the crate as punishment.", "A puppy shouldn't be crated for longer than they can hold their bladder."], sources: [S.akcCrate, S.avsabTraining], tools: ["crate-collar-harness-size", "puppy-weight"], updated: "October 2026" },
  "how-to-potty-train-a-puppy": { keyFacts: ["Take your puppy out after waking, eating, playing and every 1–2 hours while awake.", "Reward within 2 seconds of them going in the right place.", "Clean accidents with an enzyme cleaner so the smell doesn't draw them back.", "Never punish accidents; it teaches puppies to hide when they go."], sources: [S.akcPotty, S.avsabTraining], tools: ["puppy-weight"], updated: "October 2026" },
  "how-to-stop-dog-pulling-on-leash": { keyFacts: ["Pulling works because it gets the dog where it wants to go; stop moving whenever the lead goes tight.", "A front-clip harness reduces pulling without pain.", "Practise in quiet places before busy streets.", "Prong and choke collars can cause injury and fear; vets advise against them."], sources: [S.avsabTraining], tools: ["exercise-calculator", "crate-collar-harness-size"], updated: "October 2026" },
  "how-to-read-dog-body-language": { keyFacts: ["A wagging tail doesn't always mean a happy dog; look at the whole body.", "Lip licking, yawning and turning away are early signs of stress.", "Stiffening, staring and a closed mouth often come before a growl or bite.", "Never punish a growl: it's a warning, and removing it can lead to bites without warning."], sources: [S.aspcaBodyLanguage, S.avsabAll], updated: "October 2026" },
  "how-to-trim-dog-nails-at-home": { keyFacts: ["Most dogs need their nails trimmed every 3–4 weeks.", "Cut small slivers and stop before the pink quick (or the chalky centre on dark nails).", "Keep styptic powder or cornflour to hand in case you nick the quick.", "Pair handling with treats to make trims easier over time."], sources: [S.akcNails], updated: "October 2026" },
  "how-to-switch-dog-food-safely": { keyFacts: ["Switch over about 7–10 days: roughly 25% new food, then 50%, then 75%, then all new.", "Sensitive dogs may need 14 days or longer.", "Keep the total amount the same unless the calorie content differs.", "If stools loosen, go back a step for 2–3 days."], sources: [S.wsavaSelect], tools: ["food-transition-calculator", "feeding-calculator"], updated: "October 2026" },
  "how-to-choose-pet-food": { keyFacts: ["Choose a food labelled 'complete and balanced' for your pet's life stage.", "WSAVA suggests asking makers whether they employ a qualified nutritionist and run feeding trials.", "Compare foods on a dry matter basis, not the label's 'as fed' percentages.", "Grain-free isn't healthier for most pets; ask your vet before choosing it."], sources: [S.wsavaSelect, S.aafcoLabels], tools: ["feeding-calculator", "calorie-calculator"], updated: "October 2026" },
  "how-to-introduce-new-pet-to-resident-pets": { keyFacts: ["Start with scent swapping before the animals meet.", "Keep first meetings short, calm and separated by a gate or lead.", "Give each pet its own food, water, bed and (for cats) litter tray.", "Introductions can take days for some pets and weeks for others; go at the slowest pet's pace."], sources: [S.aspcaBodyLanguage, S.avsabAll], updated: "October 2026" },
  "how-to-stop-dog-barking": { keyFacts: ["Work out why your dog barks (alert, boredom, fear, attention or anxiety); each needs a different fix.", "Shouting usually adds to the noise rather than stopping it.", "Meet exercise and enrichment needs first.", "Bark collars suppress the symptom and can increase fear."], sources: [S.avsabTraining], tools: ["exercise-calculator"], updated: "October 2026" },
  "how-to-stop-dog-jumping-on-people": { keyFacts: ["Dogs jump because it gets attention; make four paws on the floor the only way to get it.", "Ask visitors to turn away and greet only when all four paws are down.", "Teach a sit as an alternative greeting.", "Everyone in the house needs to respond the same way."], sources: [S.avsabTraining], updated: "October 2026" },
  "how-to-teach-basic-dog-commands": { keyFacts: ["Reward-based training is the approach recommended by veterinary behaviourists.", "Keep sessions to 5 minutes and end on a success.", "Add the word only once the dog reliably does the behaviour.", "Practise in many places so the dog learns the cue everywhere."], sources: [S.avsabTraining], updated: "October 2026" },
  "how-to-manage-leash-reactive-dog": { keyFacts: ["Reactivity is usually driven by fear or frustration, not dominance.", "Work at a distance where your dog can notice the trigger without reacting.", "Pair the sight of the trigger with high-value treats (counter-conditioning).", "Leash corrections can make reactivity worse over time."], sources: [S.avsabTraining, S.aspcaBodyLanguage], updated: "October 2026" },

  // ── Symptom guides ──────────────────────────────────────────────
  "why-is-my-dog-not-eating": { keyFacts: ["A healthy adult dog skipping one meal is rarely an emergency.", "Call your vet if your dog hasn't eaten for 24 hours, or sooner with vomiting, lethargy or a swollen belly.", "Puppies and small dogs can get low blood sugar quickly; don't wait.", "Dental pain and nausea are common hidden causes."], sources: [S.vcaAnorexia], tools: ["symptom-checker", "toxic-food"], updated: "October 2026" },
  "why-is-my-dog-limping": { keyFacts: ["Sudden non-weight-bearing lameness needs a vet the same day.", "Check paws first: cuts, thorns and broken nails are common causes.", "Never give human painkillers such as ibuprofen; they can be toxic to dogs.", "Limping that comes and goes in young large-breed dogs can be a growth problem."], sources: [S.vcaLameness], tools: ["symptom-checker"], updated: "October 2026" },
  "why-does-my-dog-keep-licking-paws": { keyFacts: ["Allergies (to pollen, dust mites or food) are among the most common causes.", "Environmental allergies are far more common than food allergies in dogs.", "Licking between the toes can lead to yeast or bacterial infection.", "Sudden licking of one paw suggests an injury or something stuck."], sources: [S.medvetAtopy], updated: "October 2026" },
  "dog-breathing-fast-at-rest": { keyFacts: ["A normal sleeping breathing rate for most dogs is under about 30 breaths a minute.", "Count breaths while your dog is asleep: one rise and fall is one breath.", "Fast breathing with pale or blue gums, collapse or distress is an emergency.", "Flat-faced breeds breathe harder at rest and overheat easily."], sources: [S.camBoas], tools: ["symptom-checker", "hot-pavement-checker"], updated: "October 2026" },

  // ── Explainers ──────────────────────────────────────────────────
  "what-is-kennel-cough": { keyFacts: ["Kennel cough is a set of contagious respiratory infections, not one germ.", "Most dogs recover in 1–3 weeks; puppies, seniors and flat-faced dogs are at more risk of pneumonia.", "Vaccines (Bordetella, parainfluenza, flu) reduce but don't remove the risk.", "See a vet for a cough with fever, poor appetite, lethargy or fast breathing."], sources: [S.avmaCirdc, S.cornellCirdc], tools: ["vaccine-tracker", "symptom-checker"], updated: "October 2026" },
  "what-is-parvo-in-dogs": { keyFacts: ["Parvovirus attacks the gut and bone marrow and spreads through infected faeces.", "Without treatment most infected puppies die; with hospital treatment most survive.", "The virus survives in the environment for months; clean with a disinfectant proven to kill parvo.", "Vaccination at 6–8 weeks, repeated every 2–4 weeks until at least 16 weeks, is the best protection."], sources: [S.merckParvo, S.osuParvo, S.aahaVaxDog], tools: ["vaccine-tracker", "symptom-checker"], updated: "October 2026" },
  "what-is-hip-dysplasia-in-dogs": { keyFacts: ["Hip dysplasia is a developmental problem of the hip joint, partly inherited.", "Large and giant breeds are most affected; keeping puppies lean lowers the risk.", "Signs include bunny-hopping, stiffness after rest and reluctance to jump or climb.", "Breeders can screen parents with OFA or similar hip scoring."], sources: [S.acvsHip, S.ofa], tools: ["pet-bmi", "puppy-weight", "weight-loss-calculator"], updated: "October 2026" },
  "what-is-bloat-in-dogs": { keyFacts: ["GDV (bloat with twisting) is a surgical emergency that can kill within hours.", "Signs: a swollen hard belly, retching without bringing anything up, drooling and restlessness.", "Great Danes have the highest lifetime risk, at about 42%.", "Preventive gastropexy surgery is an option for high-risk breeds."], sources: [S.acvsGdv, S.vinGdv], tools: ["symptom-checker"], updated: "October 2026" },
  "what-is-positive-reinforcement-dog-training": { keyFacts: ["Positive reinforcement means adding something the dog likes to make a behaviour more likely.", "Veterinary behaviourists recommend reward-based methods over aversive ones.", "Timing matters: reward within a second or two of the behaviour.", "Rewards can be food, play, praise or access to something the dog wants."], sources: [S.avsabTraining, S.ecollar], updated: "October 2026" },
  "what-is-aafco": { keyFacts: ["AAFCO sets the nutrient profiles and labelling rules most US pet foods follow, but doesn't test or approve foods.", "'Complete and balanced' can be met by formulation or by feeding trials.", "Label names have rules: 'Beef dog food' must be at least 95% beef (not counting water), 'beef dinner' 25% and 'with beef' only 3%.", "Compare foods on a dry matter basis to account for moisture."], sources: [S.aafcoLabels, S.wsavaSelect], tools: ["feeding-calculator"], updated: "October 2026" },
  "what-is-clicker-training": { keyFacts: ["A clicker marks the exact moment a dog does the right thing.", "Each click is always followed by a reward.", "It's especially useful for teaching precise or complex behaviours.", "It's a form of reward-based training, which veterinary behaviourists recommend."], sources: [S.avsabTraining], updated: "October 2026" },

  // ── Breed guides ────────────────────────────────────────────────
  "french-bulldog-complete-guide": { keyFacts: ["About half of French Bulldogs screened by the University of Cambridge had clinically significant breathing problems (BOAS).", "Frenchies overheat easily; avoid exercise in warm weather.", "Spinal disc disease, skin fold infections and allergies are also common.", "Choose a breeder who screens for BOAS and avoids extreme flat faces."], sources: [S.camBoas, S.frenchieVetCompass, S.akcFrenchie], tools: ["hot-pavement-checker", "insurance-cost", "breed-compare"], updated: "October 2026" },
  "golden-retriever-complete-guide": { keyFacts: ["Goldens have a high cancer rate: about 60% died of cancer in a breed club health survey.", "The Morris Animal Foundation's Golden Retriever Lifetime Study follows over 3,000 Goldens to find out why.", "Hip and elbow dysplasia are common; ask breeders for parent screening results.", "They shed heavily and need brushing several times a week."], sources: [S.morrisGolden, S.akcGolden, S.ofa], tools: ["exercise-calculator", "insurance-cost", "breed-compare"], updated: "October 2026" },
  "labrador-retriever-complete-guide": { keyFacts: ["About 1 in 4 Labradors carry a POMC gene variant linked to hunger and weight gain.", "Chocolate Labradors lived about 10.7 years on average in one UK study, versus about 12.1 for black and yellow.", "Keeping a Lab lean is one of the best things you can do for its joints and lifespan.", "Labs need at least an hour of exercise a day."], sources: [S.camLabPomc, S.sydneyChocLab, S.akcLab, S.purinaLifespan], tools: ["calorie-calculator", "pet-bmi", "weight-loss-calculator"], updated: "October 2026" },
  "german-shepherd-complete-guide": { keyFacts: ["German Shepherds need a lot of exercise and mental work.", "Hip and elbow dysplasia and degenerative myelopathy are breed concerns.", "They're a deep-chested breed at risk of bloat (GDV).", "Early socialisation helps prevent over-guarding and fearfulness."], sources: [S.akcGsd, S.acvsHip, S.acvsGdv], tools: ["exercise-calculator", "breed-compare"], updated: "October 2026" },
  "beagle-complete-guide": { keyFacts: ["Beagles are scent hounds: their nose often wins over recall, so keep them on a lead in open spaces.", "They're food-motivated and prone to weight gain.", "Many Beagles bay and howl, which matters in flats and terraced houses.", "Ear infections and back problems are among their common health issues."], sources: [S.akcBeagle], tools: ["calorie-calculator", "exercise-calculator", "breed-compare"], updated: "October 2026" },

  // ── In-depth guides ─────────────────────────────────────────────
  "3-3-3-rule-for-rescue-dogs": { topic: "adoption", keyFacts: ["The 3-3-3 rule is a rough guide: about 3 days to decompress, 3 weeks to learn the routine, 3 months to feel at home.", "Many rescue dogs are withdrawn at first and show more of their personality after a few weeks.", "Keep the first days quiet, with a safe space and a predictable routine.", "Behaviour that worries you in the first weeks often improves with time; ask a qualified behaviourist if it doesn't."], sources: [S.avsabAll, S.aspcaAnxiety], tools: ["cost-of-owning-a-pet"], updated: "October 2026" },
  "adopting-rescue-dog-complete-guide": { topic: "adoption", keyFacts: ["Match energy, size and needs to your real daily routine, not your best day.", "Prepare a quiet space, a lead, ID tag and food before the dog arrives.", "Book a vet check within the first week or two.", "Give it time: most rescue dogs take weeks to months to settle fully."], sources: [S.avsabAll, S.aahaLife], tools: ["best-dog-quiz", "cost-of-owning-a-pet", "crate-collar-harness-size"], updated: "October 2026" },
  "puppy-socialization-masterclass": { topic: "puppies", keyFacts: ["The sensitive period for socialisation runs to about 12–14 weeks.", "The AVSAB recommends puppy classes from 7–8 weeks, with at least one set of vaccines and a deworming.", "Socialisation means positive experiences, not overwhelming ones.", "Lack of socialisation is a major cause of fear and aggression later."], sources: [S.avsabSocial, S.aahaLife], tools: ["vaccine-tracker", "puppy-weight"], updated: "October 2026" },
  "cat-nutrition-science-complete-guide": { topic: "cats", keyFacts: ["Cats are obligate carnivores and need taurine and other nutrients found in animal tissue.", "Many cats drink little, so wet food helps increase water intake.", "Obesity is very common in pet cats and increases the risk of diabetes.", "Never put a cat on a crash diet; rapid weight loss can cause liver disease."], sources: [S.cornellCatNutrition, S.wsavaNutrition, S.aahaNutrition], tools: ["calorie-calculator", "feeding-calculator", "weight-loss-calculator"], updated: "October 2026" },
  "dog-separation-anxiety-complete-guide": { topic: "training", keyFacts: ["Separation anxiety is a panic response to being alone, not spite or stubbornness.", "Filming your dog when you leave is the best way to tell it apart from boredom.", "Treatment builds alone time in tiny steps, keeping the dog below the point of panic.", "Moderate to severe cases often need medication from a vet alongside training."], sources: [S.aspcaAnxiety, S.avsabAll], tools: ["exercise-calculator"], updated: "October 2026" },
  "senior-pet-care-complete-guide": { topic: "health", keyFacts: ["AAHA recommends at least twice-yearly check-ups for senior pets.", "SDMA blood tests can flag kidney disease earlier than creatinine.", "Arthritis is common and often missed; stiffness and reluctance to jump are pain signs.", "Night-time restlessness and confusion can be signs of cognitive dysfunction, which can be helped."], sources: [S.aahaSenior, S.idexxSdma, S.cornellCds, S.dvm360Oa], tools: ["age-calculator", "pet-bmi", "insurance-cost"], updated: "October 2026" },
  "pet-first-aid-complete-guide": { topic: "health", keyFacts: ["Keep your vet's and the nearest emergency vet's numbers in your phone.", "Apply firm, direct pressure to stop bleeding.", "Cool an overheated pet with cool, not ice-cold, water and get to a vet.", "Don't make your pet vomit unless a vet tells you to."], sources: [S.avmaFirstAid, S.aspcaFoods], tools: ["first-aid-quiz", "symptom-checker", "toxic-food", "chocolate-toxicity-calculator"], updated: "October 2026" },
  "why-is-my-dog-drinking-so-much-water": { topic: "health", keyFacts: ["Normal intake is about 20–70 ml per kg a day; more than 100 ml per kg is excessive.", "Heat, exercise and dry food all increase normal thirst.", "Kidney disease, diabetes, Cushing's disease and womb infection (pyometra) are common medical causes.", "A sudden increase in drinking deserves a vet check with blood and urine tests."], sources: [S.vetScotPd, S.vcaThirst], tools: ["water-calculator", "symptom-checker"], updated: "October 2026" },
  "why-wont-my-dog-walk-anymore": { topic: "health", keyFacts: ["A dog that suddenly refuses walks may be in pain: check paws, joints and back.", "Fear of traffic, other dogs or a past scare is another common reason.", "Hot pavement can burn paws; check the surface before walks in summer.", "If refusal comes with limping, yelping or stiffness, see your vet."], sources: [S.vcaLameness, S.dvm360Oa], tools: ["hot-pavement-checker", "exercise-calculator"], updated: "October 2026" },
  "is-my-dog-playing-or-being-aggressive": { topic: "training", keyFacts: ["Healthy play is loose and bouncy, with play bows and role reversals.", "Stiff bodies, hard stares, pinned ears and one dog trying to escape mean play has gone wrong.", "Short pauses during play are a good sign.", "Interrupt calmly by calling dogs apart, rather than grabbing collars."], sources: [S.aspcaBodyLanguage], updated: "October 2026" },
  "how-to-stop-puppy-biting": { topic: "puppies", keyFacts: ["Puppy biting is normal; the goal is to teach a soft mouth, then no mouth on people.", "Redirect to a toy and pause play when teeth touch skin.", "Overtired puppies bite more: most need 18 hours or more of sleep a day.", "Punishment such as holding the mouth shut tends to make biting worse."], sources: [S.avsabTraining, S.avsabSocial], tools: ["puppy-weight"], updated: "October 2026" },
  "why-is-my-dog-restless-at-night": { topic: "health", keyFacts: ["Common causes include needing the toilet, pain, anxiety, heat and too little daytime exercise.", "In older dogs, night pacing can be a sign of cognitive dysfunction syndrome.", "One Australian study found only about 2% of dogs with signs of cognitive dysfunction had been diagnosed.", "A vet check helps rule out pain, thirst and urinary problems."], sources: [S.cornellCds], tools: ["exercise-calculator", "age-calculator"], updated: "October 2026" },
  "first-time-dog-owner-complete-guide": { topic: "puppies", keyFacts: ["Choose a dog for your average day, not your best one.", "Budget for the first year: one-off costs plus food, vet care and insurance.", "Register with a vet and book a check-up in the first week.", "Start reward-based training and socialisation from day one."], sources: [S.aahaLife, S.avsabTraining], tools: ["best-dog-quiz", "cost-of-owning-a-pet", "puppy-weight"], updated: "October 2026" },
  "how-to-read-pet-food-labels": { topic: "nutrition", keyFacts: ["Look for the AAFCO statement: 'complete and balanced' for your pet's life stage.", "Ingredients are listed by weight before cooking, so wet meats sit higher than they contribute.", "Product names follow rules: 'beef' at least 95% of the product (not counting water), 'beef dinner' 25%, 'with beef' 3%, 'beef flavour' just detectable.", "Compare foods on a dry matter basis."], sources: [S.aafcoLabels, S.wsavaSelect], tools: ["feeding-calculator", "calorie-calculator"], updated: "October 2026" },
  "logistics-and-heartbreak-foster-parent-manual": { topic: "adoption", sources: [S.avsabAll], tools: ["kitten-age-calculator", "vaccine-tracker"], updated: "October 2026" },
  "how-to-share-pet-care-at-home": { topic: "everyday", tools: ["feeding-calculator", "exercise-calculator"] },
  "how-to-rehome-a-pet-without-a-shelter": { topic: "adoption" },
  "lost-pet-first-24-hours": { topic: "everyday" },
};

/** Short answers and FAQs for in-depth guides that didn't have them. */
export const GUIDE_ADDITIONS: Record<string, { quickAnswer: string; faqs?: { q: string; a: string }[] }> = {
  "3-3-3-rule-for-rescue-dogs": {
    quickAnswer: "The 3-3-3 rule says a rescue dog usually needs about **3 days** to decompress, **3 weeks** to learn your routine and **3 months** to feel truly at home. It's a guide, not a deadline: keep the first days quiet and predictable, and expect their real personality to show over weeks.",
    faqs: [
      { q: "Is the 3-3-3 rule backed by science?", a: "It's a practical guide used by shelters and rescues rather than a scientific rule. The idea behind it, that stress takes time to settle and behaviour changes as a dog adjusts, is well supported." },
      { q: "What should I do in the first 3 days with a rescue dog?", a: "Keep things quiet: a safe space, short calm walks, the same routine every day and no visitors or big outings. Let the dog come to you." },
      { q: "When should I worry about a rescue dog's behaviour?", a: "If you see aggression, severe fear or panic when left alone, or if problems get worse rather than better after a few weeks, talk to your vet and a qualified behaviourist." },
    ],
  },
  "adopting-rescue-dog-complete-guide": {
    quickAnswer: "Before adopting, choose a dog whose energy and needs fit your everyday life, prepare a quiet space and basic supplies, and plan a calm first few weeks. Book a vet check soon after arrival, and expect the dog to take weeks to months to settle.",
    faqs: [
      { q: "How long does it take a rescue dog to settle?", a: "Many dogs relax within a few weeks, but some take several months to feel fully at home. The 3-3-3 rule (3 days, 3 weeks, 3 months) is a useful rough guide." },
      { q: "What should I ask the shelter before adopting?", a: "Ask about the dog's history, behaviour with people, dogs, cats and children, any medical needs, how they cope alone, and what support the shelter offers after adoption." },
    ],
  },
  "puppy-socialization-masterclass": {
    quickAnswer: "Puppies learn what is safe most easily before about 12–14 weeks of age. Give them lots of short, positive experiences with people, sounds, surfaces and calm vaccinated dogs during this time. The American Veterinary Society of Animal Behavior recommends starting puppy classes from 7–8 weeks, after the first vaccines.",
    faqs: [
      { q: "Can I socialise my puppy before vaccinations are finished?", a: "Yes, with care. The AVSAB recommends puppy classes from 7–8 weeks once the first vaccine and deworming are done. Avoid places where unknown dogs toilet, such as dog parks, until your vet says otherwise." },
      { q: "What if I missed the socialisation window?", a: "Older puppies and dogs can still learn, but it takes longer. Go slowly, keep experiences positive and get help from a qualified trainer if your dog is fearful." },
    ],
  },
  "cat-nutrition-science-complete-guide": {
    quickAnswer: "Cats are obligate carnivores: they need a complete and balanced diet rich in animal protein, with nutrients like taurine. Wet food helps cats take in more water, measured meals help prevent obesity, and any weight loss should be slow and supervised by a vet.",
    faqs: [
      { q: "Is wet or dry food better for cats?", a: "Both can be complete and balanced. Wet food adds water, which helps cats that drink little; dry food is convenient and energy-dense. Many owners feed a mix and measure portions." },
      { q: "How much should I feed my cat?", a: "A typical neutered indoor adult cat needs around 200–250 kcal a day, but it varies. Use the food's calorie content and your cat's body condition to set portions." },
    ],
  },
  "dog-separation-anxiety-complete-guide": {
    quickAnswer: "Separation anxiety is panic about being left alone, not bad behaviour. Treat it by building your dog's time alone in tiny steps, always below the point where they start to panic, and talk to your vet: moderate and severe cases often improve faster with medication alongside training.",
    faqs: [
      { q: "Can separation anxiety be cured?", a: "Many dogs improve enough to stay alone comfortably for a normal working day. Mild cases often resolve fully; severe cases usually improve a lot but may need ongoing management." },
      { q: "How long does treatment take?", a: "Mild cases often improve noticeably within 4–8 weeks of consistent practice. Severe cases can take 6–12 months, with setbacks after big life changes." },
      { q: "Will a second dog help?", a: "Only if your dog is anxious about being without any company rather than without you. Test it first by borrowing a calm dog and filming them together." },
      { q: "Do calming products work?", a: "Pheromone diffusers, calming chews and CBD have limited evidence for separation anxiety. They may help a little alongside training but won't fix it on their own." },
      { q: "How do I know it's separation anxiety and not boredom?", a: "Film your dog when you leave. Dogs with separation anxiety usually show distress within minutes (pacing, howling, scratching at exits), while bored dogs tend to settle and then get into mischief later." },
    ],
  },
  "senior-pet-care-complete-guide": {
    quickAnswer: "Senior pets need check-ups at least every 6 months, with blood and urine tests to catch kidney, thyroid and other problems early. Watch for hidden pain from arthritis, keep them at a lean weight, adapt exercise and the home, and keep their minds busy.",
    faqs: [
      { q: "At what age is a dog or cat a senior?", a: "Roughly the last quarter of the expected lifespan: around 7 for giant dogs, 10 or later for small dogs, and about 10–11 for cats." },
      { q: "What tests do senior pets need?", a: "Usually a full exam, blood tests (including kidney markers like SDMA), urine tests and blood pressure, plus thyroid tests for cats. Your vet will tailor them." },
    ],
  },
  "pet-first-aid-complete-guide": {
    quickAnswer: "In an emergency, keep yourself safe, check breathing and bleeding, apply firm pressure to wounds, keep the pet calm and warm (or cool in heatstroke), and call your vet or emergency vet on the way. First aid buys time; it isn't a substitute for veterinary care.",
    faqs: [
      { q: "What should be in a pet first aid kit?", a: "Gauze, non-stick dressings, bandage and tape, blunt scissors, tweezers, saline, a digital thermometer, a towel or blanket, a muzzle and your vet's and emergency vet's numbers." },
      { q: "Should I make my dog vomit if it ate something toxic?", a: "Only if a vet or poison line tells you to. Some substances cause more harm coming back up, and home methods can be dangerous." },
    ],
  },
  "why-is-my-dog-drinking-so-much-water": {
    quickAnswer: "Dogs normally drink about 20–70 ml per kg of body weight a day, more in heat or after exercise. Drinking more than 100 ml per kg a day, or a sudden increase, can be a sign of kidney disease, diabetes, Cushing's disease or infection, so see your vet.",
  },
  "why-wont-my-dog-walk-anymore": {
    quickAnswer: "A dog that stops wanting to walk is often in pain (sore paws, joints or back), frightened by something on the route, overheated, or simply tired. If it comes with limping, stiffness or yelping, see your vet; otherwise look for the trigger and rebuild confidence slowly.",
  },
  "is-my-dog-playing-or-being-aggressive": {
    quickAnswer: "Play looks loose and bouncy, with play bows, open mouths, pauses and dogs taking turns chasing and being chased. Stiff bodies, hard stares, raised hackles with a frozen posture, or one dog constantly trying to escape mean it has tipped into conflict.",
  },
  "how-to-stop-puppy-biting": {
    quickAnswer: "Puppy biting is normal. Teach a soft mouth first by pausing play whenever teeth press too hard, give a toy to bite instead, and make sure your puppy gets enough sleep. Most puppies bite much less by 5–6 months if everyone responds the same way.",
  },
  "why-is-my-dog-restless-at-night": {
    quickAnswer: "Night-time restlessness usually comes from needing the toilet, pain, anxiety, being too hot, or too little exercise during the day. In older dogs it can be a sign of cognitive dysfunction, which a vet can help with.",
  },
  "first-time-dog-owner-complete-guide": {
    quickAnswer: "Before getting your first dog, pick a breed or individual dog that fits your everyday life, budget for the first year, prepare your home, and register with a vet. Start reward-based training and gentle socialisation from day one.",
  },
  "how-to-read-pet-food-labels": {
    quickAnswer: "Start with the AAFCO statement: the food should be 'complete and balanced' for your pet's life stage. Then check the calorie content to set portions, and compare protein and fat on a dry matter basis rather than the 'as fed' numbers.",
  },
  "logistics-and-heartbreak-foster-parent-manual": {
    quickAnswer: "Fostering means giving a shelter or rescue animal a temporary home until they're adopted. You'll need a quiet space, time for care and vet visits, a clear agreement with the rescue about costs and decisions, and a plan for saying goodbye.",
  },
  "how-to-share-pet-care-at-home": {
    quickAnswer: "Write the routine down once, give every job one named owner, and record each meal, walk and dose the moment it's done, on a fridge chart or a shared app. That's what stops double-feeding and missed medication.",
  },
  "how-to-rehome-a-pet-without-a-shelter": {
    quickAnswer: "First check whether the problem can be solved. If not, write an honest profile, list your pet through people you know, breed rescues or a free service like Rehome by Adopt-a-Pet, screen adopters carefully, meet safely and sign an agreement.",
  },
  "lost-pet-first-24-hours": {
    quickAnswer: "Search the immediate area on foot straight away, then call your microchip database, local shelters and vets, post on local lost-pet groups and put up clear flyers. Most lost pets are found close to home, so keep searching and visiting shelters in person.",
  },
};

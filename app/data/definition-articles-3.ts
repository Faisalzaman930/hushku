import type { DefinitionArticle } from "./definition-articles";

const base = { category: "Pet Health Glossary" as const, publishDate: "October 2026", lastUpdated: "October 2026", pillarSlug: "complete-guide-to-pet-health", ctaFeature: "/health", ctaText: "Keep your pet's health records in one place" };

export const definitionArticles3: DefinitionArticle[] = [
  {
    ...base,
    slug: "pancreatitis-in-dogs",
    title: "Pancreatitis in Dogs (and Cats): Signs, Treatment and Diet",
    seoTitle: "Pancreatitis in Dogs: Symptoms, Treatment and Diet",
    shortTitle: "Pancreatitis",
    seoDescription: "Pancreatitis causes vomiting, belly pain and lethargy, often after a fatty meal. Signs in dogs and cats, how it's diagnosed and treated, and what to feed afterwards.",
    tags: ["Dog Health", "Cat Health", "Digestion"],
    readTime: "7 Min Read",
    quickAnswer: "Pancreatitis is inflammation of the pancreas. In dogs it typically causes vomiting, belly pain, lethargy and not eating, often after scavenging or a fatty meal; in cats the signs are vaguer, usually lethargy and poor appetite. It needs a vet the same day. Treatment is supportive (fluids, anti-sickness medicine, pain relief and early feeding), and dogs usually need a low-fat diet afterwards.",
    definition: "Pancreatitis is inflammation of the pancreas, the organ beside the stomach that makes digestive enzymes and insulin. In pancreatitis, digestive enzymes activate too early and damage the pancreas and surrounding tissue.",
    introduction: `Pancreatitis can be **acute** (a sudden episode, from mild to life-threatening) or **chronic** (ongoing, low-grade inflammation with flare-ups). Most cases have no single identifiable cause, but the Merck Veterinary Manual lists dietary indiscretion as a common risk factor in dogs, along with very high blood fats (hypertriglyceridaemia), Cushing's disease and some medicines.

Miniature Schnauzers are markedly over-represented, and Yorkshire Terriers, Cocker Spaniels, Dachshunds and Poodles are also reported at higher rates.

In cats, pancreatitis is common but harder to spot. Signs are often just lethargy and eating less, and it frequently occurs alongside inflammatory bowel disease and liver inflammation (sometimes called "triaditis").`,
    symptoms: [
      "Vomiting, often repeated",
      "Not eating",
      "Belly pain: a hunched back or the 'praying position' (front legs down, rear up)",
      "Lethargy and weakness",
      "Diarrhea",
      "Fever or dehydration",
      "In cats: lethargy, hiding, poor appetite and weight loss, sometimes yellow gums",
    ],
    causes: [
      "Eating fatty food, scraps, rubbish or something rich (in dogs)",
      "High blood fat levels, common in Miniature Schnauzers",
      "Being overweight",
      "Cushing's disease, diabetes and some medicines",
      "Trauma or surgery affecting the abdomen",
      "Often no cause is found",
    ],
    treatment: [
      "Intravenous fluids to correct dehydration",
      "Anti-sickness medicines such as maropitant",
      "Pain relief, as pancreatitis is assumed to be painful",
      "Early feeding of a suitable diet, by tube if needed; food is only withheld if vomiting can't be controlled",
      "Hospital care for moderate to severe cases",
      "A newer drug, fuzapladib, has conditional FDA approval for acute pancreatitis in dogs",
    ],
    prevention: [
      "Don't feed fatty scraps, bacon, sausages, gravy or takeaway leftovers",
      "Secure the bin and kitchen counters",
      "Keep your dog at a healthy weight",
      "After an episode, feed the low-fat diet your vet recommends, long term",
    ],
    sections: [
      { title: "How it's diagnosed", content: "There's no single perfect test. Vets combine the history and exam with blood tests, including pancreatic lipase tests (such as Spec cPL or a SNAP cPL in dogs), and often an ultrasound scan. These also help rule out other causes of vomiting, such as a blockage." },
      { title: "What to feed after pancreatitis", content: "Dogs that have had pancreatitis usually do best on a low-fat diet. Merck describes a diet with under 20 g of fat per 1,000 kcal as crucial for dogs with recurrent disease. Cats are usually fed a moderately fat-restricted, highly digestible diet. Avoid high-fat treats and table food." },
      { title: "Outlook", content: "Mild cases often recover within a few days with treatment. Severe pancreatitis can be life-threatening and lead to complications such as diabetes or, in some dogs, a reduced ability to digest food (exocrine pancreatic insufficiency). Dogs that have had one episode are at risk of more." },
    ],
    faqs: [
      { q: "Can one fatty meal cause pancreatitis?", a: "It can in susceptible dogs. Holiday meals, barbecues and raided bins are classic triggers, which is why vets see more pancreatitis around holidays." },
      { q: "Can dogs recover fully from pancreatitis?", a: "Many recover well, especially from mild episodes. Some develop chronic pancreatitis with flare-ups, which is managed with diet and prompt treatment." },
      { q: "Is pancreatitis painful?", a: "Yes, it's often very painful, and pain relief is a key part of treatment." },
    ],
    relatedSlugs: ["why-is-my-dog-vomiting", "diabetes-in-dogs-and-cats", "how-to-help-your-pet-lose-weight"],
  },
  {
    ...base,
    slug: "diabetes-in-dogs-and-cats",
    title: "Diabetes in Dogs and Cats: Signs, Insulin and Remission",
    seoTitle: "Diabetes in Dogs and Cats: Symptoms and Treatment",
    shortTitle: "Diabetes",
    seoDescription: "The signs of diabetes in pets, how dogs and cats differ, insulin and diet, how cats can go into remission, and the emergency signs of low blood sugar.",
    tags: ["Dog Health", "Cat Health", "Senior Pets"],
    readTime: "8 Min Read",
    quickAnswer: "The classic signs of diabetes are drinking and peeing much more, a big appetite and weight loss. Most diabetic dogs need insulin injections for life. Cats usually have a type similar to human type 2, and with prompt treatment, insulin and a low-carbohydrate diet, many go into remission. Weakness, wobbliness or seizures in a pet on insulin can mean low blood sugar, which is an emergency.",
    definition: "Diabetes mellitus is a condition in which the body either doesn't make enough insulin or doesn't respond to it properly, so sugar (glucose) builds up in the blood and spills into the urine.",
    introduction: `Insulin lets the body's cells take in glucose for energy. Without enough of it, cells are starved even though blood sugar is high, so the body breaks down fat and muscle, and a diabetic pet loses weight while eating more.

**Dogs** usually develop a form similar to human type 1: the insulin-producing cells of the pancreas are lost, so dogs nearly always need insulin for life. Most diabetic dogs also develop cataracts, which can cause blindness but can often be treated surgically.

**Cats** most commonly have type 2 diabetes. Cornell Feline Health Center estimates between 1 in 100 and 1 in 500 cats will be diagnosed in their lifetime. Obesity, older age, inactivity, being male and steroid treatment raise the risk, and obese cats are up to four times more likely to develop diabetes than cats at an ideal weight.`,
    symptoms: [
      "Drinking much more water",
      "Peeing more, accidents or a soaked litter box",
      "A bigger appetite",
      "Weight loss despite eating well",
      "Lethargy",
      "Cloudy eyes in dogs (cataracts)",
      "In cats: walking flat on the hocks of the back legs (a 'plantigrade' stance)",
    ],
    causes: [
      "Dogs: loss of insulin-producing cells, often immune-related; some breeds are predisposed",
      "Cats: insulin resistance linked to obesity, inactivity and age",
      "Pancreatitis",
      "Cushing's disease and hormonal changes in unspayed female dogs",
      "Long-term steroid treatment",
    ],
    treatment: [
      "Insulin injections, usually twice daily with meals",
      "A consistent diet and feeding routine",
      "Cats: a high-protein, low-carbohydrate diet, often wet food",
      "Regular monitoring of signs, weight and blood glucose, sometimes with a continuous glucose monitor",
      "Spaying unspayed female dogs, as hormones affect insulin",
      "Treating any infections or other diseases that affect control",
    ],
    prevention: [
      "Keep pets at a healthy weight, especially cats",
      "Encourage daily activity and play",
      "Feed cats a diet appropriate for an obligate carnivore",
      "Watch for increased thirst in middle-aged and older pets",
    ],
    sections: [
      { title: "Remission in cats", content: "Early, intensive treatment can lead to remission in cats, where blood sugar stays normal without insulin. Cornell notes that cats treated promptly, cats whose diabetes was triggered by steroids, and cats on glargine insulin are more likely to go into remission, and that if remission hasn't happened within about six months, lifelong insulin is likely. A low-carbohydrate diet improves control." },
      { title: "Low blood sugar: an emergency", content: "Too much insulin, a missed meal or vomiting after an injection can cause hypoglycaemia. Signs include weakness, wobbliness, trembling, confusion, seizures and collapse. If your pet is conscious, rub a little honey or syrup on its gums and call your vet or emergency clinic immediately. Never give insulin to a pet that hasn't eaten without checking with your vet first." },
      { title: "Diabetic ketoacidosis", content: "Untreated or poorly controlled diabetes can lead to diabetic ketoacidosis (DKA): vomiting, not eating, lethargy, dehydration and sometimes sweet-smelling breath. DKA is life-threatening and needs hospital treatment." },
      { title: "Living with a diabetic pet", content: "Most owners quickly get used to giving injections. Keep meals and insulin at the same times each day, keep a log of doses, appetite, thirst and weight, and share it with anyone who cares for your pet so doses aren't missed or doubled." },
    ],
    faqs: [
      { q: "How long do diabetic dogs live?", a: "With good control, many diabetic dogs live a normal or near-normal lifespan. The first months are often the hardest while the right insulin dose is found." },
      { q: "Can diabetes in dogs be cured?", a: "Rarely. Dogs usually need insulin for life. Some unspayed female dogs improve after spaying if diabetes is caught early." },
      { q: "What if I miss an insulin dose?", a: "Don't double the next dose. Call your vet for advice; giving too much insulin is more dangerous than a missed dose." },
    ],
    relatedSlugs: ["why-is-my-dog-drinking-so-much-water", "why-is-my-cat-drinking-so-much-water", "why-is-my-cat-losing-weight"],
  },
  {
    ...base,
    slug: "cushings-disease-in-dogs",
    title: "Cushing's Disease in Dogs: Signs, Tests and Treatment",
    seoTitle: "Cushing's Disease in Dogs: Symptoms and Treatment",
    shortTitle: "Cushing's Disease",
    seoDescription: "Cushing's disease is a common hormone disorder in older dogs. The signs to look for, how it's tested for, treatment with trilostane, and what monitoring involves.",
    tags: ["Dog Health", "Senior Pets", "Hormones"],
    readTime: "7 Min Read",
    quickAnswer: "Cushing's disease (hyperadrenocorticism) is caused by too much cortisol. It's common in middle-aged and older dogs and causes drinking and peeing more, a big appetite, a pot belly, panting and thin skin and coat. About 85–90% of cases are caused by a small pituitary tumour. It's diagnosed with blood tests and usually managed with daily medication (trilostane) and regular check-ups.",
    definition: "Cushing's disease, or hyperadrenocorticism, is a hormonal disorder in which the adrenal glands produce too much cortisol, a stress hormone that affects metabolism, the skin, muscles and the immune system.",
    introduction: `There are three main types:

- **Pituitary-dependent Cushing's** (about 85–90% of cases, according to the Merck Veterinary Manual): a usually benign tumour in the pituitary gland at the base of the brain overstimulates the adrenal glands.
- **Adrenal-dependent Cushing's** (about 10–15%): a tumour in one adrenal gland produces too much cortisol itself. Some of these tumours are malignant.
- **Iatrogenic Cushing's**: caused by long-term steroid medication, which goes away when steroids are carefully tapered off.

Cushing's develops slowly, so the signs are often put down to ageing. Poodles, Dachshunds, terriers and Boxers are among the breeds most often affected. It's rare in cats.`,
    symptoms: [
      "Drinking and peeing much more, sometimes with accidents",
      "A ravenous appetite",
      "A pot-bellied appearance",
      "Panting more, even at rest",
      "Thin coat and hair loss on the body, without itching",
      "Thin skin, blackheads and slow-healing wounds",
      "Muscle weakness and less energy",
      "Recurring skin or urinary infections",
    ],
    causes: [
      "A benign pituitary tumour (most cases)",
      "An adrenal gland tumour",
      "Long-term steroid medication",
    ],
    treatment: [
      "Trilostane, a daily oral medicine that reduces cortisol production, is the most common treatment",
      "Regular blood tests to adjust the dose, especially in the first months",
      "Surgery to remove an adrenal tumour in suitable cases",
      "Gradually reducing steroids for iatrogenic Cushing's (never stop them suddenly)",
    ],
    sections: [
      { title: "How it's diagnosed", content: "Signs and routine blood and urine tests raise suspicion: raised liver enzymes (especially ALP), dilute urine and high cholesterol are common. Specific tests include the ACTH stimulation test and the low-dose dexamethasone suppression test (LDDS). A urine cortisol:creatinine ratio can help rule Cushing's out. Ultrasound of the adrenal glands helps tell pituitary from adrenal causes." },
      { title: "Monitoring treatment", content: "Treatment controls Cushing's rather than curing it. Your vet will recheck cortisol levels and blood tests after starting or changing the dose and then every few months. Too much medication can cause the opposite problem, low cortisol (an Addisonian crisis): vomiting, diarrhea, weakness and collapse. Stop the medication and call your vet if you see these." },
      { title: "Why treat it?", content: "Untreated Cushing's can lead to diabetes, high blood pressure, blood clots, urinary infections and stones, and pancreatitis. Most dogs feel much better within weeks to months of treatment, with less thirst and panting and a better coat." },
    ],
    faqs: [
      { q: "How long do dogs live with Cushing's?", a: "Many treated dogs live for years with a good quality of life. The outlook depends on the type, the dog's age and other health problems." },
      { q: "Is Cushing's painful?", a: "It isn't usually painful in itself, but it can cause muscle weakness, skin infections and other complications that affect comfort." },
      { q: "Can I treat Cushing's with diet alone?", a: "No. Diet can help with weight and complications, but medication or surgery is needed to control cortisol." },
    ],
    relatedSlugs: ["why-is-my-dog-drinking-so-much-water", "why-is-my-dog-losing-hair", "senior-pet-care-complete-guide"],
  },
  {
    ...base,
    slug: "ticks-and-lyme-disease-in-dogs",
    title: "Ticks and Lyme Disease in Dogs and Cats",
    seoTitle: "Lyme Disease in Dogs: Symptoms, Ticks and Prevention",
    shortTitle: "Ticks and Lyme Disease",
    seoDescription: "Ticks spread Lyme disease, ehrlichiosis and anaplasmosis. The signs in dogs, how quickly ticks transmit disease, testing, and why vets recommend year-round tick control.",
    tags: ["Parasites", "Dog Health", "Cat Health"],
    readTime: "7 Min Read",
    quickAnswer: "Ticks can spread several diseases to dogs and cats, including Lyme disease, ehrlichiosis and anaplasmosis. Lyme bacteria usually need 24 to 48 hours of tick feeding to transmit, so checking your pet daily and removing ticks promptly helps. The Companion Animal Parasite Council recommends year-round tick control for all dogs and cats. Most dogs exposed to Lyme never get sick; those that do usually have fever and lameness that shifts between legs.",
    definition: "Lyme disease (Lyme borreliosis) is a bacterial infection caused by Borrelia burgdorferi, spread by the bite of infected blacklegged (deer) ticks. Ticks also spread other infections, together called tick-borne diseases.",
    introduction: `Ticks are blood-feeding parasites that wait in long grass and undergrowth and climb onto passing animals. They're most active in spring and autumn in many areas, but can be active whenever temperatures are above freezing.

According to CAPC, ticks transmit a range of infections to dogs and cats, including *Ehrlichia*, *Anaplasma*, *Rickettsia* (Rocky Mountain spotted fever), *Babesia* and, in cats, *Cytauxzoon felis*. Some of these also infect people. Heavy tick burdens can cause anaemia, and some ticks cause tick paralysis.

**Timing matters.** CAPC notes Lyme bacteria can take 24 to 48 hours of feeding before infection passes on, while *Ehrlichia* and *Rickettsia* can transmit within 3 to 6 hours. Prevention products that kill ticks quickly are the best protection.`,
    symptoms: [
      "Often no signs at all: most dogs exposed to Lyme never get sick",
      "Lameness that shifts from one leg to another",
      "Swollen, painful joints",
      "Fever, lethargy and poor appetite",
      "Swollen lymph nodes",
      "Rarely, kidney disease (Lyme nephritis), with vomiting, thirst and weight loss, which is serious",
      "Other tick diseases: bruising, nosebleeds, pale gums or fever",
    ],
    causes: [
      "Bites from infected ticks",
      "Walking in long grass, woodland and brush, especially in tick-heavy regions",
      "Missed or late doses of tick preventive",
    ],
    treatment: [
      "A course of antibiotics, usually doxycycline, for around 4 weeks for Lyme disease",
      "Pain relief for sore joints",
      "Hospital care for dogs with kidney involvement",
      "Specific treatments for other tick-borne infections",
    ],
    prevention: [
      "Year-round tick control for every dog and cat, as CAPC recommends",
      "Check your pet daily for ticks after walks, especially the head, ears, neck, armpits and between the toes",
      "Remove ticks promptly with fine tweezers or a tick tool",
      "A Lyme vaccine is available for dogs in high-risk areas; ask your vet",
      "Keep grass short and clear leaf litter in your garden",
    ],
    sections: [
      { title: "Testing", content: "Many vets use an in-clinic blood test once a year that screens for heartworm and tick-borne infections at the same time (such as the SNAP 4Dx). A positive Lyme result shows exposure, not necessarily disease; your vet will decide whether treatment is needed based on signs and further tests, such as a urine protein test." },
      { title: "Cats and ticks", content: "Cats rarely get sick from Lyme disease but can get other tick-borne infections, including cytauxzoonosis in parts of the US, which is often fatal. Never use dog tick products on cats: some contain permethrin, which is highly toxic to cats." },
      { title: "Can I catch Lyme from my dog?", content: "Not directly. People get Lyme from tick bites, not from dogs. But dogs can carry ticks into the home, so tick control protects your family too." },
    ],
    faqs: [
      { q: "Should I test a tick I removed from my dog?", a: "It's usually not necessary. Monitor your dog for signs, and mention the bite at your next vet visit or sooner if your dog seems unwell." },
      { q: "Can dogs get Lyme disease twice?", a: "Yes. Infection doesn't give lasting immunity, so ongoing prevention matters." },
      { q: "Is the Lyme vaccine worth it?", a: "It may be recommended for dogs in high-risk areas, alongside tick control, not instead of it. Ask your vet about the risk where you live." },
    ],
    relatedSlugs: ["how-to-remove-a-tick-from-a-dog-or-cat", "how-to-get-rid-of-fleas", "heartworm-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "ivdd-in-dogs",
    title: "IVDD in Dogs: Slipped Discs, Signs and Treatment",
    seoTitle: "IVDD in Dogs: Symptoms, Treatment and Recovery",
    shortTitle: "IVDD (Slipped Disc)",
    seoDescription: "Intervertebral disc disease is a common cause of back pain and paralysis in Dachshunds and other breeds. The warning signs, treatment options and recovery outlook.",
    tags: ["Dog Health", "Mobility", "Breeds"],
    readTime: "7 Min Read",
    quickAnswer: "IVDD is when a disc between the vertebrae bulges or bursts and presses on the spinal cord. Signs range from back or neck pain to wobbliness, paralysis and loss of bladder control. It's most common in Dachshunds and other short-legged breeds. Any dog that suddenly can't walk properly needs a vet the same day: speed matters, and if pain sensation in the feet is lost, the chance of recovery falls.",
    definition: "Intervertebral disc disease (IVDD) is degeneration of the cushioning discs between the bones of the spine, which can cause a disc to bulge or rupture and compress the spinal cord.",
    introduction: `Each disc has a tough outer layer and a gel-like centre. In chondrodystrophic breeds (dogs with short legs and long backs), discs can harden and calcify early in life, making them prone to sudden rupture. The American College of Veterinary Surgeons notes that **Dachshunds account for 45–70% of cases**, usually at 3 to 6 years old. Other at-risk breeds include the Pekingese, Beagle, Lhasa Apso, French Bulldog, Shih Tzu and Corgi.

In larger breeds such as Labradors and German Shepherds, discs tend to degenerate more slowly and bulge gradually, typically in dogs aged 5 to 12.

ACVS describes a predictable progression of signs: back or neck pain, then a wobbly "drunken sailor" walk, then loss of the ability to walk (usually with loss of bladder control), and finally loss of pain sensation, a sign of severe spinal cord injury.`,
    symptoms: [
      "Back or neck pain: a hunched back, reluctance to move, crying when picked up",
      "Not wanting to jump or use stairs",
      "Holding the head low or stiffly (neck discs)",
      "Wobbly, crossing or knuckling back legs",
      "Weakness or paralysis of the back legs, or all four legs with neck discs",
      "Loss of bladder or bowel control",
    ],
    causes: [
      "Early disc degeneration in short-legged, long-backed breeds",
      "Age-related disc degeneration in larger breeds",
      "Being overweight, which adds strain",
      "A sudden jump or twist can trigger a rupture in an already degenerated disc",
    ],
    treatment: [
      "Conservative care for a first, mild episode: strict crate rest, pain relief and anti-inflammatories",
      "Surgery to remove disc material and relieve pressure (such as a hemilaminectomy), often recommended for weakness or paralysis",
      "At least 4 weeks of restricted activity after surgery, per ACVS",
      "Physiotherapy and rehabilitation to rebuild strength",
      "Bladder care for dogs that can't pee on their own",
    ],
    prevention: [
      "Keep at-risk breeds lean",
      "Use ramps and steps instead of letting dogs jump on and off furniture and in and out of cars",
      "Use a harness rather than a collar, especially for neck problems",
      "Support the back and chest when lifting a long-backed dog",
    ],
    sections: [
      { title: "Why speed matters", content: "Outcomes are best when treatment starts early. ACVS reports that in dogs that have lost pain sensation, 50–60% regain the ability to walk with surgery, compared with fewer than 10% with strict medical management alone. If your dog suddenly can't walk, go to a vet or emergency clinic immediately; don't wait to see if it improves." },
      { title: "Crate rest done properly", content: "Crate rest means your dog stays in a crate or small pen except for brief, calm toilet trips on a lead, usually for several weeks. It feels harsh, but movement can make a damaged disc worse. Give food puzzles and chews for enrichment, and follow your vet's timeline exactly." },
      { title: "Will it happen again?", content: "Some dogs have more than one episode, at the same or a different disc. Weight control, ramps and avoiding jumping help reduce the risk. Your vet may discuss preventive procedures in some cases." },
    ],
    faqs: [
      { q: "Can a dog recover from IVDD without surgery?", a: "Many dogs with mild signs, such as pain with normal walking, improve with strict crate rest and medication. Dogs with weakness or paralysis have better outcomes with surgery." },
      { q: "How much does IVDD surgery cost?", a: "It varies widely by country and clinic, and is often several thousand dollars. Pet insurance taken out before signs appear can cover it." },
      { q: "Can paralysed dogs have a good life?", a: "Many dogs that don't regain full function adapt well with a cart, bladder management and good care. Your vet can help you weigh quality of life." },
    ],
    relatedSlugs: ["why-is-my-dog-limping", "how-to-tell-if-your-pet-is-in-pain", "what-is-hip-dysplasia-in-dogs"],
  },
  {
    ...base,
    slug: "luxating-patella-in-dogs",
    title: "Luxating Patella in Dogs: The 'Skipping' Kneecap",
    seoTitle: "Luxating Patella in Dogs: Grades, Signs and Surgery",
    shortTitle: "Luxating Patella",
    seoDescription: "A dislocating kneecap is common in small breeds and causes a 'skip' in the step. The four grades, when surgery is needed and what recovery looks like.",
    tags: ["Dog Health", "Mobility", "Small Breeds"],
    readTime: "6 Min Read",
    quickAnswer: "A luxating patella is a kneecap that slips out of its groove. Dogs typically 'skip' for a few steps, holding up a back leg, then carry on normally. It's very common in small breeds like Chihuahuas, Pomeranians, Yorkshire Terriers and Toy Poodles. Mild cases are monitored; surgery is usually considered for grade 2 and above when it causes lameness, and over 90% of owners are satisfied with the result.",
    definition: "Patellar luxation is a condition in which the kneecap (patella) moves out of its normal position in the groove at the end of the thigh bone (femur), usually towards the inside of the leg (medial luxation).",
    introduction: `The kneecap normally glides up and down in a groove at the bottom of the femur. In dogs with patellar luxation, the groove may be too shallow, or the bones and muscles of the leg may be slightly misaligned, so the kneecap pops out of place.

According to the American College of Veterinary Surgeons, it mainly affects small breeds, including Boston and Yorkshire Terriers, Chihuahuas, Pomeranians and Miniature Poodles. Some large breeds, including the Chinese Shar Pei, Flat-Coated Retriever, Akita and Great Pyrenees, are also now considered predisposed. It's usually developmental and often affects both knees.

The classic sign is **"skipping"**: your dog suddenly holds a back leg up for a few steps, may kick or stretch the leg out, and then uses it normally again once the kneecap slips back into place.`,
    symptoms: [
      "A 'skip' or hop for a few strides, then normal walking",
      "Holding a back leg up, or kicking it out behind",
      "Bow-legged appearance in severe cases",
      "Lameness that becomes more frequent or constant over time",
      "Stiffness or pain as arthritis develops",
    ],
    causes: [
      "A shallow groove in the femur",
      "Misalignment of the leg bones or the attachment of the thigh muscles",
      "Genetics: it runs in families and in certain breeds",
      "Less often, injury",
    ],
    treatment: [
      "Monitoring, weight control and exercise to build thigh muscle for mild cases without signs",
      "Pain relief and joint support if arthritis develops",
      "Surgery to deepen the groove, realign the shinbone attachment and tighten the soft tissues",
      "Strict rest for several weeks after surgery, followed by gradual rehabilitation",
    ],
    sections: [
      { title: "The four grades", content: "**Grade 1:** the kneecap can be pushed out by hand but returns on its own. **Grade 2:** it pops out on its own when the knee bends, and goes back when the leg is extended. **Grade 3:** it's out of place most of the time but can be pushed back by hand. **Grade 4:** it's permanently out of place and can't be pushed back, often with obvious deformity. ACVS notes surgery is most often considered for grade 2 and above, depending on the signs." },
      { title: "Outlook", content: "ACVS reports that over 90% of owners are satisfied with their dog's progress after surgery, and recurrence is uncommon. Results are less favourable in large dogs, especially with other problems such as hip dysplasia or significant bone deformity." },
      { title: "Cruciate ligament risk", content: "A kneecap that keeps slipping puts extra strain on the knee and is thought to increase the risk of cruciate ligament injury, another reason to have persistent skipping checked." },
    ],
    prevention: [
      "Choose puppies from parents screened for patellar luxation",
      "Keep your dog lean",
      "Build muscle with regular, steady exercise rather than lots of jumping",
    ],
    faqs: [
      { q: "Is a luxating patella painful?", a: "Many dogs with mild luxation show no pain. As it worsens or arthritis develops, it can become painful." },
      { q: "Can a luxating patella fix itself?", a: "The kneecap often slips back by itself, but the underlying problem doesn't go away. Grades can stay stable or worsen over time." },
      { q: "Should a dog with a luxating patella be bred?", a: "It's generally advised not to breed affected dogs, as the condition is inherited." },
    ],
    relatedSlugs: ["cruciate-ligament-tear-in-dogs", "why-is-my-dog-limping", "how-to-help-your-pet-lose-weight"],
  },
  {
    ...base,
    slug: "cruciate-ligament-tear-in-dogs",
    title: "Cruciate Ligament Tears in Dogs (CCL or ACL)",
    seoTitle: "Dog ACL Tear (CCL): Symptoms, Surgery and Recovery",
    shortTitle: "Cruciate Ligament Tear",
    seoDescription: "Cruciate ligament disease is the most common cause of back-leg lameness in dogs. The signs, surgery options like TPLO, recovery time and the risk to the other knee.",
    tags: ["Dog Health", "Mobility", "Surgery"],
    readTime: "7 Min Read",
    quickAnswer: "The cranial cruciate ligament (the dog equivalent of the human ACL) stabilises the knee. In dogs it usually weakens gradually and then tears, causing back-leg lameness, difficulty sitting and rising, and stiffness after rest. Surgery such as TPLO is generally the best way to stabilise the knee, with significant improvement in 85–90% of dogs. 40–60% of affected dogs later develop the same problem in the other knee.",
    definition: "Cranial cruciate ligament disease (CCLD) is degeneration and tearing of the ligament that stops the shinbone (tibia) sliding forward relative to the thigh bone (femur), leaving the knee unstable.",
    introduction: `Unlike in people, where ACL tears are usually sports injuries, the American College of Veterinary Surgeons explains that most canine cruciate ruptures result from **slow degeneration of the ligament over time**, influenced by age, obesity, fitness, genetics, conformation and breed. Partial tears almost always progress to full tears.

Breeds with a higher risk include Rottweilers, Newfoundlands, Staffordshire Terriers, Mastiffs, Akitas, Saint Bernards, Chesapeake Bay Retrievers and Labradors. It's rare in cats.

When the ligament tears, the knee becomes unstable, which causes pain, inflammation and, over time, arthritis. The meniscus, a cartilage cushion in the knee, is often damaged too.`,
    symptoms: [
      "Lameness in a back leg, sudden or gradually worsening",
      "Sitting with the affected leg stuck out to the side (a positive 'sit test')",
      "Difficulty rising, jumping into the car or climbing stairs",
      "Stiffness after rest, improving with gentle movement",
      "Muscle loss in the thigh",
      "A clicking sound when walking, which can mean a torn meniscus",
      "A firm swelling on the inside of the knee",
    ],
    causes: [
      "Gradual degeneration of the ligament",
      "Being overweight or unfit",
      "Breed and genetics",
      "Leg conformation, such as a steep tibial plateau",
      "Less often, a sudden injury",
    ],
    treatment: [
      "TPLO (tibial plateau levelling osteotomy): the shinbone is cut and rotated so the knee is stable without the ligament; most dogs return to active lives",
      "TTA (tibial tuberosity advancement): an alternative bone-cutting procedure",
      "Extracapsular suture: a lower-cost option, generally better suited to smaller, less active dogs",
      "Conservative care: pain relief, strict activity restriction, weight loss, rehabilitation and sometimes a custom brace",
    ],
    sections: [
      { title: "Diagnosis", content: "Vets usually diagnose cruciate disease by feeling for abnormal movement in the knee (the 'cranial drawer' or 'tibial thrust' tests), sometimes under sedation for partial tears. X-rays are used to plan surgery and assess arthritis." },
      { title: "Recovery", content: "After surgery, activity is restricted for several weeks while the bone heals, with short lead walks only. ACVS advises starting rehabilitation straight after surgery, as it speeds recovery and improves outcomes. Most dogs return to normal activity within a few months." },
      { title: "The other knee", content: "ACVS notes that 40–60% of dogs with cruciate disease in one knee eventually develop it in the other, often within a year or two. Keeping your dog lean and fit is one of the best ways to reduce that risk." },
    ],
    prevention: [
      "Keep your dog at a healthy weight; obesity is a major risk factor",
      "Regular, consistent exercise rather than 'weekend warrior' bursts",
      "Build fitness gradually in young and large-breed dogs",
    ],
    faqs: [
      { q: "Can a dog's cruciate ligament heal on its own?", a: "The ligament doesn't heal, but scar tissue can partly stabilise the knee over months, especially in small dogs. Arthritis usually progresses, so surgery is generally recommended for larger and active dogs." },
      { q: "Is TPLO better than other surgeries?", a: "TPLO is widely used and has good outcomes, especially in medium to large active dogs. The best option depends on your dog's size, age, activity and your surgeon's advice." },
      { q: "How do I know if my dog tore its ACL?", a: "Sudden back-leg lameness, especially after exercise, and sitting with the leg out to the side are common signs. A vet exam confirms it." },
    ],
    relatedSlugs: ["why-is-my-dog-limping", "luxating-patella-in-dogs", "how-to-help-your-pet-lose-weight"],
  },
  {
    ...base,
    slug: "fiv-and-felv-in-cats",
    title: "FIV and FeLV in Cats: What a Positive Test Means",
    seoTitle: "FIV vs FeLV in Cats: Symptoms, Testing, Life Expectancy",
    shortTitle: "FIV and FeLV",
    seoDescription: "Feline immunodeficiency virus and feline leukaemia virus explained: how they spread, testing, vaccines, and how long cats live with them.",
    tags: ["Cat Health", "Infections", "Adoption"],
    readTime: "8 Min Read",
    quickAnswer: "FIV and FeLV are viruses that weaken a cat's immune system. FIV spreads mainly through deep bite wounds, and many FIV-positive cats live normal lifespans with good care. FeLV spreads through saliva and close contact, is more serious (median survival about 2.5 years after diagnosis), and is preventable with vaccination, which is now core for kittens. Every new cat should be tested.",
    definition: "Feline immunodeficiency virus (FIV) and feline leukaemia virus (FeLV) are retroviruses that infect cats for life and can suppress the immune system. FeLV can also cause cancers and blood disorders.",
    introduction: `The two viruses are often tested for together, but they behave very differently.

**FIV** is found in about 2.5–5% of healthy cats in North America, according to Cornell Feline Health Center, and in 15% or more of sick or high-risk cats. It's spread mainly through bite wounds, so unneutered male cats that fight are most at risk. Casual contact like sharing bowls or grooming is not an efficient route, and mother-to-kitten spread is rare.

**FeLV** affects about 2–3% of cats in the US and Canada, rising to as high as 30% in ill or high-risk cats. It spreads in saliva, urine, faeces and milk, through grooming, shared bowls and litter boxes, bites, and from mother to kittens. Kittens are far more vulnerable than adults. The virus survives only a few hours outside a cat's body.`,
    symptoms: [
      "Often no signs for months or years",
      "Recurring infections that are slow to clear",
      "Gum and mouth inflammation (gingivostomatitis)",
      "Weight loss and poor appetite",
      "Fever and enlarged lymph nodes",
      "Pale gums from anaemia (especially FeLV)",
      "Cancers such as lymphoma (much more common with FeLV)",
    ],
    causes: [
      "FIV: deep bite wounds from an infected cat",
      "FeLV: prolonged close contact, mutual grooming, shared bowls and litter, bites, and mother to kittens",
      "Outdoor access, fighting, and living with infected cats raise the risk",
    ],
    treatment: [
      "There's no cure for either virus",
      "Prompt treatment of secondary infections and other illnesses",
      "Wellness checks at least every 6 months, with blood and urine tests",
      "Good dental care",
      "Antiviral or immune-support treatments in some cases, under your vet's guidance",
    ],
    prevention: [
      "Test every new cat before it meets your other cats",
      "Vaccinate kittens against FeLV (core for kittens) and continue for cats at risk, such as those going outdoors",
      "Neuter cats to reduce roaming and fighting",
      "Keep cats indoors or in a secure outdoor enclosure",
      "There's no FIV vaccine available in North America",
    ],
    sections: [
      { title: "What a positive test means", content: "In-clinic tests screen for FIV antibodies and FeLV protein (antigen). Positive results should be confirmed with a second, different test, because false positives happen. Kittens under six months can test FIV-positive from their mother's antibodies without being infected, so they should be retested. For FeLV, a follow-up PCR test and repeat testing after 6 to 12 weeks help tell a progressive infection from a regressive one, where the cat has contained the virus." },
      { title: "Life expectancy", content: "Cornell notes that many FIV-positive cats live normal lifespans if well cared for and not also infected with FeLV. For FeLV, median survival after diagnosis is about 2.5 years, and can be much longer for cats with regressive infections. Cats with FeLV should be kept indoors and away from uninfected cats." },
      { title: "Caring for an FIV or FeLV-positive cat", content: "Keep them indoors, neutered and at a healthy weight; feed a complete diet and avoid raw food, which carries infection risks; and see your vet at the first sign of illness. Cornell advises keeping FIV-positive cats indoors and separate from other cats. Some shelters do place them with calm cats that don't fight, because spread without bite wounds is uncommon, so ask your vet about your household. FeLV spreads more easily, so FeLV-positive cats are best kept as single cats or with other FeLV-positive cats." },
    ],
    faqs: [
      { q: "Can people or dogs catch FIV or FeLV?", a: "No. Both viruses only infect cats." },
      { q: "Should I adopt an FIV-positive cat?", a: "Many FIV-positive cats make wonderful pets and live long, healthy lives. Ask the shelter about the cat's health and temperament, and plan regular vet checks." },
      { q: "Does the FeLV vaccine cause a positive test?", a: "No. FeLV vaccines don't cause false positives on the standard FeLV test." },
    ],
    relatedSlugs: ["complete-guide-to-kitten-care", "why-is-my-cat-sneezing", "adopting-rescue-dog-complete-guide"],
  },
  {
    ...base,
    slug: "giardia-in-dogs-and-cats",
    title: "Giardia in Dogs and Cats: Diarrhea, Testing and Treatment",
    seoTitle: "Giardia in Dogs and Cats: Symptoms and Treatment",
    shortTitle: "Giardia",
    seoDescription: "Giardia is a common gut parasite that can cause diarrhea. How pets catch it, testing, treatment, bathing and cleaning to stop reinfection, and the risk to people.",
    tags: ["Parasites", "Dog Health", "Cat Health"],
    readTime: "6 Min Read",
    quickAnswer: "Giardia is a microscopic intestinal parasite picked up by swallowing cysts from contaminated water, soil or faeces. Many infected pets have no signs; others get soft, smelly diarrhea that can come and go. It's diagnosed with stool tests and treated with fenbendazole and/or metronidazole, plus a bath at the end of treatment and prompt poop pick-up to prevent reinfection.",
    definition: "Giardiasis is an infection of the small intestine with Giardia duodenalis, a single-celled protozoan parasite spread by the faecal-oral route.",
    introduction: `Infected animals pass cysts in their faeces, and the Companion Animal Parasite Council notes these cysts are infective as soon as they're passed. Pets swallow them from contaminated water (puddles, ponds, streams), food, objects, or while grooming.

Giardia is common: a 2023 nationwide US survey cited by CAPC found it in 5.72% of dog stool samples and 4.82% of cat samples, with higher rates in shelters, kennels and dog parks. Puppies and kittens are most likely to show signs.

Shedding is intermittent, so a single negative test doesn't always rule it out; your vet may test more than once.`,
    symptoms: [
      "Often none",
      "Soft, pale, greasy or foul-smelling diarrhea, sometimes with mucus",
      "Diarrhea that comes and goes",
      "Gas and an upset stomach",
      "Weight loss or poor growth in puppies and kittens",
      "Occasionally vomiting or lethargy",
    ],
    causes: [
      "Drinking from puddles, ponds and streams",
      "Contact with infected faeces at parks, kennels, daycare and shelters",
      "Grooming contaminated fur",
      "Reinfection from the pet's own environment",
    ],
    treatment: [
      "Fenbendazole, metronidazole or both, as prescribed by your vet",
      "A bath with pet shampoo on the last day of treatment to remove cysts from the coat",
      "Picking up faeces straight away and disposing of it in household waste",
      "A highly digestible diet while the gut recovers",
      "Retesting if signs continue",
    ],
    prevention: [
      "Pick up after your dog promptly",
      "Provide fresh water on walks so your dog doesn't drink from puddles",
      "Clean and dry bowls, bedding and hard surfaces regularly",
      "Clean litter boxes daily",
    ],
    sections: [
      { title: "Does a pet without signs need treatment?", content: "CAPC's majority view is that pets with Giardia but no diarrhea may not need treatment, but treatment should be considered for pets living with vulnerable people or animals, or infected with a type that can affect people. Your vet will help you decide." },
      { title: "Can people catch Giardia from pets?", content: "CAPC notes that spread from dogs or cats to people hasn't been conclusively shown in North America, and the types that infect pets are mostly different from those that commonly infect people. People with weakened immune systems should still take care: wash hands after handling pets and picking up faeces." },
      { title: "Cleaning up", content: "Cysts are killed by drying and by many disinfectants. Clean hard surfaces with detergent, rinse, then dry thoroughly. Wash bedding hot. Grass and soil can't be disinfected, so prompt poop pick-up is the most important step." },
    ],
    faqs: [
      { q: "Why does my dog keep getting Giardia?", a: "Usually because of reinfection from the environment or other pets, or because cysts on the coat are swallowed during grooming. Bathing at the end of treatment and strict clean-up help." },
      { q: "Can my dog go to daycare with Giardia?", a: "Keep your dog away from other dogs until treatment is finished and diarrhea has resolved, and check your daycare's policy." },
      { q: "Is there a Giardia vaccine?", a: "Not one that's recommended. Hygiene and prompt treatment of sick pets are the main controls." },
    ],
    relatedSlugs: ["why-does-my-dog-have-diarrhea", "why-does-my-cat-have-diarrhea", "intestinal-worms-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "ringworm-in-dogs-and-cats",
    title: "Ringworm in Dogs and Cats: Signs, Treatment and Cleaning",
    seoTitle: "Ringworm in Cats and Dogs: Symptoms and Treatment",
    shortTitle: "Ringworm",
    seoDescription: "Ringworm is a fungal skin infection, not a worm. How it looks in pets, how it spreads to people, treatment, and how to clean your home to stop it coming back.",
    tags: ["Skin", "Cat Health", "Dog Health"],
    readTime: "6 Min Read",
    quickAnswer: "Ringworm is a contagious fungal skin infection, not a worm. In pets it causes round patches of hair loss with scaly or crusty skin, and brittle fur and claws; some cats carry it with no signs. It spreads to people and other pets through contact and contaminated bedding. Treatment usually combines antifungal medicine and medicated washes for several weeks, plus thorough cleaning at home.",
    definition: "Ringworm (dermatophytosis) is an infection of the skin, hair and nails caused by fungi called dermatophytes, most often Microsporum canis in cats and dogs.",
    introduction: `The name comes from the ring-shaped rash it can cause in people. In pets, it more often looks like patchy hair loss.

**Kittens, puppies, long-haired cats (especially Persians), and animals in shelters or with weakened immune systems** are most often affected. Fungal spores can survive in the environment for many months, so cleaning matters as much as treating the pet.

According to the California Department of Public Health, people develop an itchy, red, ring-shaped rash 4 to 14 days after contact, usually on the face, arms or legs. Children, older people and those with weakened immune systems are at higher risk.`,
    symptoms: [
      "Round patches of hair loss, often on the head, ears and front legs",
      "Scaly, crusty or red skin",
      "Broken or brittle hairs",
      "Rough or brittle claws",
      "Usually only mildly itchy, if at all",
      "Some cats carry it with no visible signs",
      "In people: an itchy, red, ring-shaped rash",
    ],
    causes: [
      "Direct contact with an infected animal",
      "Contaminated bedding, brushes, towels, furniture and carriers",
      "Spores in soil (some types)",
      "Young age, long coats, crowding and stress raise the risk",
    ],
    treatment: [
      "Oral antifungal medicine, such as itraconazole or terbinafine",
      "Medicated shampoos, dips or rinses (lime sulphur or miconazole and chlorhexidine) to reduce spores on the coat",
      "Clipping long fur can help, but should be done gently to avoid spreading spores",
      "Treatment continues for several weeks, until follow-up fungal tests are negative",
      "Treating or testing other pets in the household, even if they look healthy",
    ],
    prevention: [
      "Quarantine and check new pets before introducing them",
      "Don't share brushes and bedding between pets during treatment",
      "Wash hands after handling an infected pet",
    ],
    sections: [
      { title: "How it's diagnosed", content: "Your vet may use a UV (Wood's) lamp, which makes some ringworm strains glow, but not all do. A fungal culture or PCR test of hairs confirms the diagnosis, and repeat cultures show when treatment can stop." },
      { title: "Cleaning your home", content: "Confine your pet to an easily cleaned room during treatment. Vacuum often and throw away the bag or empty the canister outside. Wash bedding and towels in hot water. CDPH advises disinfecting hard surfaces with a fungicidal product or diluted bleach (1/4 cup per gallon of water), after first cleaning off hair and debris." },
      { title: "Protecting your family", content: "Limit cuddling during treatment, wear gloves and long sleeves when handling your pet, and wash hands afterwards. Anyone with a suspicious rash should see a doctor and mention the pet's diagnosis; ringworm in people is usually easily treated." },
    ],
    faqs: [
      { q: "How long is a pet with ringworm contagious?", a: "Until treatment has cleared the infection, which typically takes several weeks. Your vet will use follow-up tests to confirm." },
      { q: "Can ringworm go away on its own?", a: "It can in healthy adult animals, but this takes months, during which the pet spreads spores. Treatment shortens the time and protects your family." },
      { q: "Is it called ringworm because of a worm?", a: "No. It's a fungus. The name comes from the ring-shaped rash it causes in people." },
    ],
    relatedSlugs: ["why-is-my-dog-losing-hair", "complete-guide-to-kitten-care", "how-to-bathe-a-dog"],
  },
];

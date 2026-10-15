import type { DefinitionArticle } from "./definition-articles";

const base = { category: "Pet Health Glossary" as const, publishDate: "October 2026", lastUpdated: "October 2026", pillarSlug: "complete-guide-to-pet-health", ctaFeature: "/health", ctaText: "Keep your pet's health records in one place" };

export const definitionArticles2: DefinitionArticle[] = [
  {
    ...base,
    slug: "heartworm-in-dogs-and-cats",
    title: "Heartworm in Dogs and Cats: Signs, Testing and Prevention",
    seoTitle: "Heartworm in Dogs and Cats: Symptoms and Prevention",
    shortTitle: "Heartworm",
    seoDescription: "Heartworm is spread by mosquitoes and has been found in all 50 US states. How it harms dogs and cats, how it's tested for, and why year-round prevention is advised.",
    tags: ["Parasites", "Dog Health", "Cat Health"],
    readTime: "7 Min Read",
    quickAnswer: "Heartworm is a parasitic worm spread by mosquito bites that lives in the heart and lungs. The American Heartworm Society recommends year-round prevention for dogs and cats and a heartworm test for dogs every year. Infected dogs can be treated; there is no approved treatment for cats, so prevention matters even more.",
    definition: "Heartworm disease is caused by *Dirofilaria immitis*, a worm transmitted by mosquitoes. Adult worms live in the heart, lungs and blood vessels, causing lung disease, heart failure and organ damage.",
    introduction: `When an infected mosquito bites a pet, it leaves tiny larvae that migrate through the body and grow into adult worms over about six months. In dogs, adult worms can reach a foot long and live for years, and a dog can carry dozens. Cats are less natural hosts and usually have fewer worms, but even immature worms can cause serious lung disease, sometimes called heartworm-associated respiratory disease (HARD).

Heartworm was once thought of as a disease of the southern US, but the American Heartworm Society reports cases in all 50 states. Indoor pets are not fully protected, because mosquitoes get inside.`,
    symptoms: ["Often none in early infection", "A mild, persistent cough", "Tiring easily on walks", "Weight loss and poor appetite", "A swollen belly from fluid (late stage)", "In cats: coughing, asthma-like attacks, vomiting, or sudden collapse"],
    causes: ["Bites from infected mosquitoes", "Missed or late doses of preventive", "Living in or travelling to areas with heartworm (which now includes most of the US)"],
    treatment: ["Dogs: a staged course of injections that kill adult worms, with strict exercise restriction for weeks", "Supportive care and medicines to reduce complications", "Cats: no approved treatment to kill the worms; care focuses on managing signs"],
    prevention: ["Year-round heartworm preventive (monthly chewable or topical, or an injection every 6 or 12 months for dogs)", "Annual heartworm testing for dogs, even on prevention", "Testing before starting prevention in dogs over 7 months old", "Mosquito control around the home"],
    sections: [
      { title: "Why prevention is given all year", content: "Preventives work by killing larvae picked up in the previous month. Because a missed month can let larvae mature, and mosquito seasons are getting longer, the American Heartworm Society advises giving prevention every month of the year, even where winters are cold." },
      { title: "Why dogs need an annual test", content: "No preventive is 100% effective, and doses get missed or vomited. An annual test catches infection early, when treatment is easier. Starting prevention in an already-infected dog can cause a reaction, which is why dogs over about 7 months are tested first." },
      { title: "Heartworm in cats", content: "Cats can be infected even if they live indoors. Testing is harder in cats, and there's no approved drug to kill the worms, so monthly prevention is the main protection. Ask your vet about combined flea, worm and heartworm products." },
    ],
    faqs: [
      { q: "Do indoor cats need heartworm prevention?", a: "Many vets recommend it, because mosquitoes get indoors and there is no approved treatment for cats once they're infected. Ask your vet about the risk where you live." },
      { q: "Can heartworm spread from dog to dog?", a: "No. It needs a mosquito to pass from one animal to another." },
      { q: "Is heartworm treatment dangerous?", a: "Treatment in dogs is effective but carries risks as the worms die, which is why dogs must be kept very quiet for weeks during treatment. Prevention is far safer and cheaper." },
    ],
    relatedSlugs: ["intestinal-worms-in-dogs-and-cats", "how-to-get-rid-of-fleas", "complete-guide-to-pet-health"],
  },
  {
    ...base,
    slug: "intestinal-worms-in-dogs-and-cats",
    title: "Worms in Dogs and Cats: Types, Signs and Deworming Schedules",
    seoTitle: "Worms in Dogs and Cats: Signs and Deworming Schedule",
    shortTitle: "Intestinal Worms",
    seoDescription: "Roundworms, hookworms, tapeworms and whipworms: how pets get worms, the signs, how often to deworm puppies, kittens and adults, and the risk to people.",
    tags: ["Parasites", "Dog Health", "Cat Health", "Puppies", "Kittens"],
    readTime: "8 Min Read",
    quickAnswer: "Most puppies and kittens are born with or quickly pick up roundworms, so the Companion Animal Parasite Council (CAPC) recommends deworming from 2 weeks of age, every 2 weeks, then moving to a monthly parasite preventive. Adults should be on year-round monthly control, or dewormed four times a year, with stool tests at least twice a year.",
    definition: "Intestinal worms are parasites that live in the gut of dogs and cats. The main types are roundworms, hookworms, whipworms (dogs) and tapeworms. Some can also infect people, especially children.",
    introduction: `Worms are extremely common, especially in young animals. Roundworm larvae lie dormant in an adult dog's tissues and reactivate late in pregnancy, so puppies are often infected before they're even born. Kittens pick them up from their environment, from prey and, if the mother is infected while nursing, through milk.

Many infected pets show no signs, which is why vets recommend regular deworming and stool tests rather than waiting for symptoms.`,
    symptoms: ["A pot-bellied appearance in puppies and kittens", "Diarrhea, sometimes with blood or mucus", "Vomiting, sometimes with worms visible", "Weight loss or poor growth", "A dull coat", "Rice-like segments around the bottom (tapeworm)", "Scooting", "Pale gums from blood loss (hookworm)"],
    causes: ["Passed from mother to young before birth or through milk", "Swallowing eggs from contaminated soil, grass or faeces", "Eating infected prey such as mice and birds", "Swallowing fleas while grooming (flea tapeworm)", "Hookworm larvae burrowing through the skin"],
    treatment: ["A dewormer prescribed for the worms found or likely", "Repeat doses, as many dewormers don't kill immature stages", "Flea control alongside tapeworm treatment", "Stool tests to confirm treatment worked"],
    prevention: ["Puppies and kittens: deworm from 2 weeks, every 2 weeks, then monthly prevention", "Adults: year-round monthly parasite control, or deworming 4 times a year", "Stool tests at least 4 times in the first year and twice a year in adults", "Pick up faeces promptly and wash hands", "Year-round flea control"],
    sections: [
      { title: "The risk to people", content: "Roundworm eggs can survive in soil for years. Children who swallow eggs, for example from sandpits or playgrounds, can develop toxocariasis, which rarely affects the eyes or organs. Hookworm larvae can cause itchy skin tracks. Regular deworming, picking up after pets and handwashing protect your family." },
      { title: "Why a 'natural' approach isn't enough", content: "Garlic, pumpkin seeds and other home remedies haven't been shown to clear worms reliably, and garlic is toxic to pets. Use a vet-recommended product." },
    ],
    faqs: [
      { q: "How do I know if my dog or cat has worms?", a: "Often you won't: many pets have no signs. A stool test at your vet is the reliable way to check, alongside regular preventive treatment." },
      { q: "Can I catch worms from my pet?", a: "Some, such as roundworm and hookworm, can infect people, particularly children. Regular deworming, picking up faeces promptly and washing hands greatly reduce the risk." },
      { q: "How often should I deworm my adult dog or cat?", a: "CAPC recommends year-round monthly parasite control that covers roundworms, or deworming at least four times a year if that isn't possible. Your vet may tailor this to your pet's lifestyle." },
    ],
    relatedSlugs: ["heartworm-in-dogs-and-cats", "how-to-get-rid-of-fleas", "why-is-my-dog-scooting", "complete-guide-to-puppy-care"],
  },
  {
    ...base,
    slug: "when-to-spay-or-neuter",
    title: "When to Spay or Neuter a Dog or Cat: Ages, Benefits and Risks",
    seoTitle: "When to Spay or Neuter a Dog or Cat: Best Age by Size",
    shortTitle: "Spay and Neuter Timing",
    seoDescription: "The right age to spay or neuter depends on species and adult size. AAHA guidance for cats and small and large dogs, plus benefits, risks and recovery.",
    tags: ["Dog Health", "Cat Health", "Puppies", "Kittens"],
    readTime: "8 Min Read",
    quickAnswer: "AAHA guidance: neuter or spay cats by 5 months of age. Small-breed dogs (under about 45 lb or 20 kg as adults) can be neutered at about 6 months or spayed before their first heat (5 to 6 months). Large-breed dogs are usually neutered after growth stops (9 to 15 months), and large-breed females spayed between 5 and 15 months, depending on their risks. Talk to your vet about your pet.",
    definition: "Spaying (ovariohysterectomy or ovariectomy) removes a female's ovaries, and usually the uterus. Neutering (castration) removes a male's testicles. Both prevent pregnancy and change hormone-related behaviour and disease risk.",
    introduction: `For decades, almost all pets were neutered at around six months. Research on large-breed dogs has since shown that timing can affect the risk of some joint problems and cancers, so advice now depends on species, size and sex. For cats, earlier neutering is recommended to prevent unplanned litters and spraying.

There's no single right age for every dog. The decision balances the risk of unwanted litters, behaviour, mammary cancer and womb infection (pyometra) against orthopaedic and other risks in some breeds. Your vet can help weigh these for your pet.`,
    sections: [
      { title: "Recommended ages at a glance", content: `| Pet | Recommended timing (AAHA) |
| --- | --- |
| Cats | By 5 months old ("Fix Felines by Five") |
| Small dogs (under ~45 lb adult) | Neuter about 6 months; spay before first heat (5–6 months) |
| Large dogs, males (over ~45 lb adult) | After growth stops, usually 9–15 months |
| Large dogs, females | Between 5 and 15 months, depending on risk and lifestyle |` },
      { title: "Benefits", content: `- Prevents unplanned litters
- Spaying removes the risk of pyometra (womb infection) and greatly reduces mammary tumours if done early
- Neutering removes the risk of testicular cancer and reduces roaming and some marking behaviour
- In cats, reduces spraying, fighting and roaming` },
      { title: "Risks and trade-offs", content: `- General anaesthetic and surgical risk, which is low in healthy young pets
- Increased tendency to gain weight: feed about 10 to 20% less and keep an eye on body condition
- In some large breeds, early neutering has been linked to a higher risk of joint disorders and some cancers, which is why timing is later
- Urinary incontinence in some spayed females, usually treatable` },
      { title: "Recovery", content: "Most pets go home the same day. Expect 10 to 14 days of restricted activity, a cone or body suit to stop licking, and a wound check. Call your vet if the wound is swollen, oozing or open, or if your pet isn't eating." },
    ],
    faqs: [
      { q: "Should I let my dog have one litter or one season first?", a: "There's no health benefit to letting a dog have a litter. Spaying before the first heat gives the biggest reduction in mammary cancer risk in small dogs; for large breeds your vet may advise waiting." },
      { q: "Will neutering change my dog's personality?", a: "It reduces some hormone-driven behaviours, such as roaming and mounting, but doesn't change basic personality or make dogs less protective." },
      { q: "Will my pet get fat after neutering?", a: "Neutered pets need fewer calories. Reduce food by about 10 to 20% and monitor weight; weight gain isn't inevitable." },
    ],
    relatedSlugs: ["complete-guide-to-puppy-care", "complete-guide-to-kitten-care", "complete-guide-to-pet-health"],
  },
  {
    ...base,
    slug: "dental-disease-in-dogs-and-cats",
    title: "Dental Disease in Dogs and Cats: Signs, Treatment and Prevention",
    seoTitle: "Dental Disease in Dogs and Cats: Signs and Prevention",
    shortTitle: "Pet Dental Disease",
    seoDescription: "By age 3, most dogs and cats have some periodontal disease. The signs, why cleanings need anaesthesia, and how brushing and VOHC products help.",
    tags: ["Dog Health", "Cat Health", "Dental"],
    readTime: "7 Min Read",
    quickAnswer: "Periodontal disease is the most common health problem vets see: the American Animal Hospital Association says most dogs and cats have some by age 3. It causes pain and infection but often goes unnoticed. Prevention is daily tooth brushing, dental products with the VOHC seal, and regular check-ups with professional cleaning under anaesthesia when needed.",
    definition: "Periodontal disease is inflammation and infection of the tissues that hold teeth in place, caused by plaque bacteria. It starts as gingivitis and can progress to bone loss and tooth loss.",
    introduction: `Plaque forms on teeth within hours of eating. If it isn't removed, it hardens into tartar and bacteria spread below the gumline, where most of the damage happens out of sight. Pets rarely stop eating because of dental pain, so many owners don't realise there's a problem.

Cats also commonly get tooth resorption, painful lesions that eat away at the tooth and can only be fully seen on dental X-rays.`,
    symptoms: ["Bad breath", "Red or bleeding gums", "Yellow-brown tartar", "Dropping food or chewing on one side", "Pawing at the mouth or drooling", "Loose or missing teeth", "Facial swelling (tooth root abscess)"],
    causes: ["Plaque and tartar build-up", "Crowded teeth in small and flat-faced breeds", "Retained baby teeth", "Lack of home dental care"],
    treatment: ["A full cleaning under general anaesthesia, above and below the gumline", "Dental X-rays to find hidden disease", "Extraction of painful or diseased teeth", "Pain relief and sometimes antibiotics"],
    prevention: ["Daily tooth brushing with pet toothpaste", "Dental chews, diets and water additives with the VOHC seal", "Dental check at every vet visit", "Avoid hard chews like antlers, bones and hooves, which can break teeth"],
    sections: [
      { title: "Why cleanings need anaesthesia", content: "Most periodontal disease is below the gumline. Cleaning and X-raying there properly isn't possible in an awake pet, and anaesthesia-free 'cosmetic' scaling can hide disease while leaving it untreated. AAHA's dental guidelines say the risks of non-anaesthetic dentistry should be explained to owners. Modern anaesthesia with monitoring is low-risk for most pets." },
      { title: "Choosing dental products", content: "Look for the Veterinary Oral Health Council (VOHC) seal, which shows a product has evidence of reducing plaque or tartar. Brushing remains the single most effective home care." },
    ],
    faqs: [
      { q: "How often should I brush my pet's teeth?", a: "Daily is best, because plaque reforms within a day. Even a few times a week helps." },
      { q: "Is anaesthesia-free dental cleaning safe?", a: "It can't clean below the gumline or allow X-rays, so disease can be missed. Veterinary dental guidelines recommend cleaning under anaesthesia." },
      { q: "Do dental chews work?", a: "Some do. Choose products with the VOHC seal, and use them alongside brushing rather than instead of it." },
    ],
    relatedSlugs: ["how-to-brush-your-dogs-teeth", "senior-pet-care-complete-guide", "complete-guide-to-pet-health"],
  },
  {
    ...base,
    slug: "cat-urinary-blockage-and-flutd",
    title: "Cat Urinary Problems (FLUTD) and Blockages: An Emergency Guide",
    seoTitle: "Cat Can't Pee? Urinary Blockage and FLUTD Explained",
    shortTitle: "Cat Urinary Blockage",
    seoDescription: "A cat straining in the litter box with little or no urine may be blocked, which can be fatal within 24 to 48 hours. Signs, causes, treatment and prevention.",
    tags: ["Cat Health", "Urinary", "Emergency"],
    readTime: "8 Min Read",
    quickAnswer: "If your cat, especially a male, is straining in the litter box and passing little or no urine, go to a vet immediately. A urethral blockage is an absolute emergency: Cornell's Feline Health Center notes death can occur within about 24 to 48 hours. Other urinary problems (FLUTD) cause frequent small pees, blood and peeing outside the box, and also need a vet.",
    definition: "Feline lower urinary tract disease (FLUTD) is a group of conditions affecting the bladder and urethra. The most common is feline idiopathic cystitis; others include bladder stones, urethral plugs and infection. In male cats, any of these can block the urethra.",
    introduction: `Male cats have a long, narrow urethra that can be blocked by a plug of crystals and mucus, a small stone or swelling. When urine can't get out, toxins and potassium build up in the blood, which can stop the heart. A blocked cat may look like it's constipated, cry in the litter box, lick its genitals, vomit or hide.

Female cats get urinary problems too but rarely block.`,
    symptoms: ["Straining or crying in the litter box", "Frequent trips with only small amounts of urine", "Blood in the urine", "Peeing outside the box", "Licking the genital area", "In a blocked cat: no urine, vomiting, lethargy, hiding, collapse"],
    causes: ["Feline idiopathic cystitis (the most common cause, linked to stress)", "Bladder stones (struvite and calcium oxalate)", "Urethral plugs", "Bacterial infection (less common in young cats)"],
    treatment: ["Blocked cats: emergency sedation or anaesthesia, a urinary catheter, IV fluids and hospital care for days", "Pain relief and medicines to relax the urethra", "Special diets to dissolve struvite stones", "Surgery for some stones or repeated blockages"],
    prevention: ["Increase water intake: wet food, water fountains and several bowls", "One litter box per cat plus one, kept clean", "Reduce stress and keep routines steady", "Keep cats at a healthy weight and active", "Follow your vet's diet advice for cats with stones or crystals"],
    sections: [
      { title: "Who is most at risk", content: "Middle-aged, overweight, indoor male cats that drink little and live with stress (such as conflict with other cats or a recent move) are at greatest risk." },
      { title: "After a blockage", content: "Blockages often recur, especially in the first weeks. Follow the diet and stress-reduction plan exactly and watch the litter tray closely. Repeated blockages may be treated with surgery (perineal urethrostomy)." },
    ],
    faqs: [
      { q: "How long can a cat go without peeing?", a: "If your cat hasn't peed in 12 hours or more, or is straining with nothing coming out, treat it as an emergency." },
      { q: "Can stress really cause bladder problems in cats?", a: "Yes. Feline idiopathic cystitis is strongly linked to stress, and reducing stress is part of treatment." },
    ],
    relatedSlugs: ["why-is-my-cat-peeing-outside-the-litter-box", "why-is-my-cat-not-eating", "cat-nutrition-science-complete-guide"],
  },
  {
    ...base,
    slug: "chronic-kidney-disease-in-cats",
    title: "Chronic Kidney Disease in Cats: Signs, Stages and Care",
    seoTitle: "Kidney Disease in Cats: Symptoms, Stages and Diet",
    shortTitle: "Kidney Disease in Cats",
    seoDescription: "Chronic kidney disease affects up to 40% of cats over 10. Early signs, how it's diagnosed and staged, kidney diets, fluids and what to expect.",
    tags: ["Cat Health", "Senior Pets", "Kidney"],
    readTime: "9 Min Read",
    quickAnswer: "Chronic kidney disease (CKD) is one of the most common illnesses in older cats, affecting up to 40% of cats over 10 and 80% over 15, according to Cornell's Feline Health Center. It can't be cured, but a kidney diet, good hydration and treatment of blood pressure and anaemia can keep many cats well for years, especially when it's found early.",
    definition: "Chronic kidney disease is a gradual, irreversible loss of kidney function. As the kidneys fail, they can't concentrate urine or remove waste, leading to dehydration, nausea, weight loss and high blood pressure.",
    introduction: `The kidneys have a lot of spare capacity, so cats often show no signs until much of their function is lost. That's why routine blood and urine tests for senior cats matter: the SDMA blood test and a urine concentration check can pick up kidney disease earlier than creatinine alone, which usually rises only once about 75% of function has gone.

Vets stage CKD from 1 to 4 using the International Renal Interest Society (IRIS) system, based on blood tests, urine protein and blood pressure. The stage guides treatment and outlook.`,
    symptoms: ["Drinking and peeing more", "Weight loss and muscle loss", "Poor or picky appetite", "Vomiting", "Poor coat and less grooming", "Lethargy", "Bad breath or mouth ulcers (later stages)", "Sudden blindness from high blood pressure"],
    causes: ["Ageing (the main risk factor)", "Previous kidney injury, such as from lily poisoning or infection", "Polycystic kidney disease in some Persian-related breeds", "High blood pressure and hyperthyroidism, which interact with kidney disease"],
    treatment: ["A prescription kidney diet (lower phosphorus and moderate high-quality protein)", "Hydration support: wet food, fountains and sometimes fluids under the skin at home", "Blood pressure medicine if needed", "Treatment for anaemia, nausea and low appetite", "Regular rechecks every few months"],
    prevention: ["Twice-yearly senior check-ups with blood and urine tests", "Keep lilies out of the house; they cause acute kidney failure", "Encourage water intake", "Keep teeth healthy and weight steady"],
    sections: [
      { title: "What to expect", content: "Outlook varies a lot. Cornell's Feline Health Center notes that cats diagnosed at stage 2 survive on average about 2 to 3 years in many studies, while cats at stage 4 average under 6 months. Earlier diagnosis and treatment are linked to better outcomes, and some studies report cats on kidney diets live considerably longer than those on standard food." },
      { title: "Getting your cat to eat a kidney diet", content: "Switch slowly over several weeks, try different flavours and textures, and never let your cat go without food to force the change: a cat that isn't eating is at greater risk than one eating a non-kidney diet. Ask your vet about appetite stimulants and anti-nausea medicine." },
    ],
    faqs: [
      { q: "Is kidney disease in cats painful?", a: "CKD itself isn't usually painful, but nausea, dehydration and mouth ulcers make cats feel unwell. Treating these improves quality of life a lot." },
      { q: "Can kidney disease in cats be reversed?", a: "Chronic kidney disease can't be reversed, but its progression can often be slowed. Sudden (acute) kidney injury is different and can sometimes recover with treatment." },
    ],
    relatedSlugs: ["why-is-my-cat-drinking-so-much-water", "hyperthyroidism-in-cats", "senior-pet-care-complete-guide", "cat-nutrition-science-complete-guide"],
  },
  {
    ...base,
    slug: "hyperthyroidism-in-cats",
    title: "Hyperthyroidism in Cats: Signs, Treatment Options and Costs",
    seoTitle: "Hyperthyroidism in Cats: Symptoms and Treatment Options",
    shortTitle: "Hyperthyroidism in Cats",
    seoDescription: "An overactive thyroid is common in older cats. The classic signs, how it's diagnosed, and the four treatments: medication, radioactive iodine, surgery and diet.",
    tags: ["Cat Health", "Senior Pets", "Hormones"],
    readTime: "8 Min Read",
    quickAnswer: "Hyperthyroidism is one of the most common hormone disorders in middle-aged and older cats. The classic sign is weight loss despite a big appetite, often with thirst, restlessness and vomiting. It's very treatable: options are daily medication, radioactive iodine (cures about 95% of cats, per Cornell), surgery or an iodine-restricted diet.",
    definition: "Hyperthyroidism is overproduction of thyroid hormone, usually caused by a benign growth (adenoma) of the thyroid gland. Excess hormone speeds up the metabolism and strains the heart and other organs.",
    introduction: `Because it often starts slowly in older cats, owners may put the early signs down to age. Untreated, hyperthyroidism can lead to heart disease, high blood pressure and blindness, so a vet check is worth it for any older cat that's losing weight.

Diagnosis is usually straightforward: a blood test shows a high T4 level in most cats, and your vet may feel an enlarged thyroid in the neck. Because hyperthyroidism can mask kidney disease, your vet will check kidney function before and during treatment.`,
    symptoms: ["Weight loss despite eating more", "Increased thirst and urination", "Restlessness, yowling or night-time activity", "Vomiting or diarrhea", "Unkempt, matted or greasy coat", "Fast heart rate"],
    causes: ["A benign thyroid growth in most cats (rarely cancer)", "The exact trigger is unknown; it's linked to age"],
    treatment: ["Anti-thyroid medication (tablets or a gel rubbed on the ear), usually lifelong", "Radioactive iodine: a single treatment that cures most cats, with a hospital stay of a few days", "Surgery to remove the affected gland", "A prescription iodine-restricted diet fed exclusively"],
    sections: [
      { title: "Choosing a treatment", content: `| Option | Pros | Cons |
| --- | --- | --- |
| Medication | Inexpensive to start, available everywhere | Daily, lifelong; side effects in some cats; regular blood tests |
| Radioactive iodine | Cures about 95% of cats with one treatment | Higher upfront cost; specialist centre; 3–5 day hospital stay |
| Surgery | Often a permanent cure | Anaesthetic risk in older cats; risk to parathyroid glands |
| Iodine-restricted diet | No pills or procedures | Must be the only food; less suitable for cats that hunt or live with other cats |` },
      { title: "Kidneys and hyperthyroidism", content: "Excess thyroid hormone increases blood flow to the kidneys and can hide kidney disease. Once hyperthyroidism is treated, kidney values may rise. Your vet will monitor this, and may trial medication first before a permanent treatment." },
    ],
    faqs: [
      { q: "How long can a cat live with hyperthyroidism?", a: "With treatment, many cats live for years. Outlook depends on age, other conditions such as kidney disease, and the treatment chosen." },
      { q: "Can hyperthyroidism in cats be cured?", a: "Yes. Radioactive iodine cures about 95% of cats within three months, and surgery can also be curative. Medication and diet control it but don't cure it." },
    ],
    relatedSlugs: ["chronic-kidney-disease-in-cats", "why-is-my-cat-drinking-so-much-water", "senior-pet-care-complete-guide"],
  },
];

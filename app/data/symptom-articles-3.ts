import type { SymptomArticle } from "./symptom-articles";

const base = { category: "Symptom Guide" as const, publishDate: "October 2026", lastUpdated: "October 2026", pillarSlug: "complete-guide-to-pet-health", ctaFeature: "/health", ctaText: "Keep your pet's health records in one place" };

export const symptomArticles3: SymptomArticle[] = [
  // ── Dogs ──────────────────────────────────────────────────────────
  {
    ...base,
    slug: "why-does-my-dog-have-bad-breath",
    title: "Why Does My Dog Have Bad Breath? Causes and Fixes",
    seoTitle: "Dog Bad Breath: Causes and How to Fix It",
    shortTitle: "Dog Bad Breath",
    seoDescription: "Most bad breath in dogs comes from dental disease. What different smells can point to, when bad breath means illness, and how to keep your dog's mouth healthy.",
    tags: ["Dog Health", "Dental", "Symptoms"],
    readTime: "6 Min Read",
    quickAnswer: "Bad breath in dogs is almost always caused by dental disease: plaque bacteria and tartar build-up along the gumline. A vet check and, usually, a dental cleaning under anaesthesia fixes it, and daily tooth brushing keeps it away. Breath that smells sweet or fruity, or of urine, can be a sign of diabetes or kidney disease and needs a vet soon.",
    urgencyLevel: "routine",
    urgencyLabel: "Book a check-up; sooner if your dog is unwell",
    introduction: `"Dog breath" isn't normal. A healthy dog's mouth shouldn't smell strongly, and persistent bad breath (halitosis) is usually the first sign of periodontal disease, which affects most dogs by the age of three, according to the American Animal Hospital Association.

Plaque, a film of bacteria, forms on teeth within hours of a meal. If it isn't removed, it hardens into tartar within days, and bacteria spread under the gumline, where they cause inflammation, pain, gum recession and eventually tooth loss. The smell comes from the sulphur compounds those bacteria produce.

Most of the disease is hidden below the gums, so a mouth that looks fairly clean can still be sore. Dogs rarely show dental pain; many keep eating normally even with infected teeth.`,
    causes: [
      { title: "Periodontal (gum) disease", description: "By far the most common cause. Look for yellow-brown tartar, red or bleeding gums, and drooling or pawing at the mouth.", severity: "moderate" },
      { title: "Broken or infected teeth", description: "Fractured teeth from chewing bones, antlers or hard toys can become infected and abscess. A swelling under the eye can be a tooth root abscess.", severity: "moderate" },
      { title: "Something stuck in the mouth", description: "Sticks, bone fragments or grass caught between teeth or across the roof of the mouth can cause a sudden, foul smell.", severity: "mild" },
      { title: "Eating faeces or rubbish", description: "Dogs that eat poop, carrion or rubbish often have unpleasant breath for a while afterwards.", severity: "mild" },
      { title: "Diabetes", description: "A sweet or fruity smell, with drinking and peeing more, can be a sign of diabetes with ketones, which needs prompt treatment.", severity: "serious" },
      { title: "Kidney disease", description: "Breath that smells of urine or ammonia, with increased thirst, weight loss or vomiting, can mean the kidneys aren't clearing waste.", severity: "serious" },
      { title: "Oral tumours", description: "Growths in the mouth, more common in older dogs, can bleed and smell. Any lump in the mouth should be checked.", severity: "serious" },
    ],
    emergencyWarnings: [
      "Sweet or fruity breath with heavy drinking, vomiting or lethargy (possible diabetic ketoacidosis)",
      "Facial swelling, a swelling under the eye, or your dog refusing to eat",
      "Bleeding from the mouth that won't stop",
      "Breath that smells of urine with vomiting or weakness",
    ],
    homeCareTips: [
      "Lift your dog's lips and look at the back teeth, which usually have the most tartar.",
      "Start daily tooth brushing with a soft brush and dog toothpaste; see our step-by-step guide.",
      "Choose dental chews and diets with the Veterinary Oral Health Council (VOHC) seal, which have been tested to reduce plaque or tartar.",
      "Avoid very hard chews (antlers, bones, hooves) that commonly break teeth. If you can't bend it or dent it with a fingernail, it's too hard.",
      "Never use human toothpaste, which can contain xylitol and fluoride.",
    ],
    whenToSeeVet: [
      "Bad breath that lasts more than a few days",
      "Visible tartar, red gums, loose or broken teeth",
      "Drooling, pawing at the mouth, chewing on one side or dropping food",
      "Any lump or ulcer in the mouth",
      "Bad breath with drinking more, weight loss or vomiting",
    ],
    prevention: [
      "Brush your dog's teeth daily, or at least several times a week",
      "Have a dental check at every annual vet visit",
      "Book professional cleanings under anaesthesia when your vet recommends them",
      "Small and flat-faced breeds are especially prone to dental disease, so start brushing early",
    ],
    faqs: [
      { q: "Is anaesthesia-free dental cleaning OK?", a: "AAHA advises against it. Scraping tartar off the visible tooth surfaces doesn't treat disease below the gumline, can't include X-rays, and can be stressful and painful. A proper cleaning needs anaesthesia." },
      { q: "Do water additives and dental chews work?", a: "Some do. Look for the VOHC seal, which means the product has been tested. They help alongside brushing but don't replace it or treat existing disease." },
      { q: "Why does my puppy's breath smell?", a: "Puppy breath is often linked to teething, as baby teeth fall out and adult teeth come through between about 3 and 7 months. A truly foul smell should be checked." },
    ],
    relatedSlugs: ["dental-disease-in-dogs-and-cats", "how-to-brush-your-dogs-teeth", "why-does-my-dog-eat-poop"],
  },
  {
    ...base,
    slug: "why-is-my-dog-coughing",
    title: "Why Is My Dog Coughing? Types of Cough and What They Mean",
    seoTitle: "Dog Coughing: Causes, Types of Cough and When to Worry",
    shortTitle: "Dog Coughing",
    seoDescription: "Honking, hacking, wet or night-time coughs: what different coughs can mean in dogs, from kennel cough to heart disease, and when a cough needs a vet.",
    tags: ["Dog Health", "Symptoms", "Breathing"],
    readTime: "7 Min Read",
    quickAnswer: "A honking cough in a dog that's otherwise bright, especially after kennels, daycare or a dog park, is most often kennel cough, which usually clears in 1 to 3 weeks. See a vet if the cough lasts more than a week, if your dog is lethargic, off food or has a fever, or if the cough happens at night or at rest in an older dog. Any breathing difficulty, blue or pale gums, or collapse is an emergency.",
    urgencyLevel: "urgent",
    urgencyLabel: "Vet within days; emergency if breathing is laboured",
    introduction: `Coughing is a reflex that clears the airways, so the occasional cough after drinking or pulling on the lead is nothing to worry about. A cough that keeps coming back, though, is a sign that something is irritating the throat, airways, lungs or heart.

**It helps to describe the cough to your vet.** Is it dry or wet? Does it sound like a goose honk? Does it happen at night, after exercise, when excited, or after eating or drinking? A short video on your phone is very useful.

**Is it really a cough?** Reverse sneezing, a sudden noisy snorting through the nose, is often mistaken for coughing or choking. It's usually harmless. Gagging and retching can also look like coughing; unproductive retching with a swollen belly in a large dog may be bloat, which is an emergency.`,
    causes: [
      { title: "Kennel cough (canine infectious respiratory disease)", description: "A harsh, honking cough, often ending with a gag, after contact with other dogs. Most dogs stay bright and recover in 1 to 3 weeks, but puppies, older dogs and flat-faced breeds can develop pneumonia.", severity: "mild" },
      { title: "Collapsing trachea", description: "Common in toy breeds such as Yorkshire Terriers, Pomeranians and Chihuahuas. A goose-honk cough triggered by excitement, pulling on a collar or drinking. Use a harness instead of a collar.", severity: "moderate" },
      { title: "Heart disease", description: "In older small-breed dogs especially, heart valve disease can enlarge the heart and lead to fluid on the lungs. Coughing at night or at rest, tiring easily and faster breathing are warning signs.", severity: "serious" },
      { title: "Pneumonia", description: "A wet, productive cough with fever, lethargy and poor appetite. It can follow kennel cough or inhaling food or vomit.", severity: "serious" },
      { title: "Heartworm", description: "A mild, persistent cough and tiring on walks in dogs not on prevention. Spread by mosquitoes and found across the US.", severity: "serious" },
      { title: "Chronic bronchitis and allergies", description: "A long-standing dry cough in middle-aged dogs, sometimes worse with smoke, dust or air fresheners.", severity: "moderate" },
      { title: "Something stuck or inhaled", description: "A sudden, violent cough or gagging may mean a grass seed, stick or food is caught in the throat or airways.", severity: "serious" },
      { title: "Lung tumours", description: "Less common, mainly in older dogs, and sometimes spread from cancer elsewhere.", severity: "serious" },
    ],
    emergencyWarnings: [
      "Struggling to breathe, breathing with the belly, or breathing with the mouth open at rest",
      "Blue, grey or very pale gums or tongue",
      "Collapse or fainting, especially during coughing",
      "Coughing up blood",
      "Choking, pawing at the mouth or sudden violent gagging",
      "Retching without producing anything, with a swollen belly (possible bloat)",
    ],
    homeCareTips: [
      "Rest your dog and avoid strenuous exercise while it's coughing.",
      "Walk on a harness rather than a collar to take pressure off the windpipe.",
      "Keep coughing dogs away from other dogs until they've been clear for at least a week or two, as kennel cough is contagious.",
      "Avoid smoke, aerosols and dusty environments.",
      "Count your dog's breaths while it sleeps: over 30 to 40 breaths a minute at rest needs a vet.",
      "Don't give human cough medicines; some contain ingredients that are toxic to dogs.",
    ],
    whenToSeeVet: [
      "A cough lasting more than a week, or getting worse",
      "Coughing in a puppy, an older dog or a flat-faced breed",
      "Coughing with fever, lethargy, poor appetite or a wet sound",
      "Coughing at night or at rest, or a fast resting breathing rate",
      "Any cough in a dog not on heartworm prevention",
    ],
    prevention: [
      "Keep vaccines up to date, including Bordetella and parainfluenza if your dog goes to kennels, daycare, grooming or shows",
      "Give heartworm prevention every month, all year",
      "Use a harness for small breeds and dogs that pull",
      "Keep your dog at a healthy weight, which helps the heart and airways",
    ],
    faqs: [
      { q: "Can my dog give kennel cough to me or my cat?", a: "Kennel cough is mostly spread between dogs. Bordetella bronchiseptica can infect cats and, very rarely, people with weakened immune systems, so wash hands and keep a coughing dog's bowls separate." },
      { q: "Why does my dog cough after drinking water?", a: "Occasional coughing after gulping water is common. Frequent coughing after drinking, especially in a toy breed, can be a sign of a collapsing trachea or a swallowing problem." },
      { q: "Why does my old dog cough at night?", a: "Night-time or resting coughs in older dogs can be a sign of heart disease. Your vet can listen for a murmur and may recommend chest X-rays." },
    ],
    relatedSlugs: ["what-is-kennel-cough", "dog-breathing-fast-at-rest", "heartworm-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "why-is-my-dog-losing-hair",
    title: "Why Is My Dog Losing Hair? Bald Patches and What Causes Them",
    seoTitle: "Dog Losing Hair in Patches? Causes and Treatment",
    shortTitle: "Dog Hair Loss",
    seoDescription: "Normal shedding or a problem? Common causes of hair loss and bald spots in dogs, from fleas and allergies to mange, ringworm and hormone disorders.",
    tags: ["Dog Health", "Skin", "Symptoms"],
    readTime: "7 Min Read",
    quickAnswer: "Even shedding all over is normal, especially in spring and autumn. Bald patches, thinning coat, or hair loss with itching, redness, scabs or a smell are not. The most common causes are fleas, allergies, skin infections, mange mites and ringworm; hair loss on both sides of the body without itching can point to a hormone problem such as an underactive thyroid or Cushing's disease. A vet visit with simple skin tests usually finds the cause.",
    urgencyLevel: "routine",
    urgencyLabel: "Book a vet visit within a week or two",
    introduction: `All dogs shed, and double-coated breeds like Huskies, German Shepherds and Labradors "blow" their undercoat seasonally, losing huge amounts of fluff for a few weeks. That's normal, and the coat underneath stays full.

What's not normal is hair loss that leaves **bald or thin patches**, or that comes with **itching, red or scaly skin, scabs, a greasy feel or a bad smell**. Hair loss in dogs (alopecia) is a sign, not a diagnosis, so the pattern matters.

**Is it itchy?** Itchy hair loss is usually caused by parasites, allergies or infection, and dogs often lick or chew the hair off themselves. Non-itchy hair loss, especially if it's symmetrical on both flanks, is more likely to be hormonal.`,
    causes: [
      { title: "Fleas and flea allergy", description: "Hair loss and scabs over the lower back and tail base. One bite can trigger itching for days in an allergic dog.", severity: "mild" },
      { title: "Environmental and food allergies", description: "Itching and chewing at the paws, face, ears, armpits and belly, often with recurring ear and skin infections.", severity: "moderate" },
      { title: "Bacterial or yeast skin infections", description: "Red bumps, rings of scale, greasy skin and a musty smell. Usually secondary to allergies.", severity: "moderate" },
      { title: "Mange (Demodex or Sarcoptes mites)", description: "Demodectic mange causes patchy hair loss, often around the eyes and face in young dogs, and isn't contagious. Sarcoptic mange is intensely itchy, starts on ear tips and elbows, and spreads to other dogs and people.", severity: "moderate" },
      { title: "Ringworm", description: "A fungal infection that causes round, scaly patches of hair loss. It can spread to people and other pets.", severity: "moderate" },
      { title: "Hypothyroidism", description: "An underactive thyroid in middle-aged dogs causes a thin coat, weight gain, lethargy and a 'rat tail'.", severity: "moderate" },
      { title: "Cushing's disease", description: "Thin skin and hair loss on the body, with drinking and peeing more, a big appetite and a pot belly.", severity: "moderate" },
      { title: "Pressure points and licking", description: "Calluses on elbows in large dogs, and lick granulomas on the legs from boredom, anxiety or pain.", severity: "mild" },
    ],
    emergencyWarnings: [
      "Raw, oozing or rapidly spreading sores (hot spots), especially with pain",
      "Hair loss with lethargy, fever or not eating",
      "Swollen, painful skin or a wound that smells",
    ],
    homeCareTips: [
      "Check for fleas with a flea comb over white paper; black specks that turn red when damp are flea dirt.",
      "Treat every pet in the home with a vet-recommended flea product, every month.",
      "Stop your dog licking or chewing a sore area with a cone or soft recovery suit until it's checked.",
      "Don't shave double-coated dogs to reduce shedding; the coat may grow back patchy.",
      "If ringworm is possible, wash hands after handling your dog and wash its bedding hot.",
    ],
    whenToSeeVet: [
      "Bald patches, thinning or broken hair",
      "Hair loss with itching, redness, scabs, dandruff or smell",
      "Symmetrical hair loss, or hair loss with weight gain or drinking more",
      "Itchy spots appearing on people in the household",
    ],
    prevention: [
      "Year-round flea control for every pet in the home",
      "Regular brushing to spot problems early and remove dead undercoat",
      "Manage allergies with your vet before skin infections take hold",
      "Feed a complete and balanced diet",
    ],
    faqs: [
      { q: "What tests will the vet do?", a: "Usually a flea check, skin scrapes for mites, tape or impression tests for yeast and bacteria, and a fungal culture or PCR for ringworm. Blood tests check thyroid and adrenal hormones if they're suspected." },
      { q: "Can stress make dogs lose hair?", a: "Stress causes more shedding in the short term, such as at the vet. Anxiety can also lead to over-licking that leaves bald spots, often on the legs." },
      { q: "Is mange contagious to people?", a: "Sarcoptic mange (scabies) can cause itchy spots in people. Demodectic mange isn't contagious to people or other dogs." },
    ],
    relatedSlugs: ["why-is-my-dog-so-itchy", "ringworm-in-dogs-and-cats", "cushings-disease-in-dogs"],
  },
  {
    ...base,
    slug: "why-is-my-dog-sneezing",
    title: "Why Is My Dog Sneezing (or Reverse Sneezing)?",
    seoTitle: "Dog Sneezing a Lot? Reverse Sneezing and Other Causes",
    shortTitle: "Dog Sneezing",
    seoDescription: "Play sneezes, irritants, grass seeds and reverse sneezing explained: why dogs sneeze, how to stop a reverse sneeze, and the signs that need a vet.",
    tags: ["Dog Health", "Symptoms", "Breathing"],
    readTime: "6 Min Read",
    quickAnswer: "Occasional sneezing is normal, and many dogs 'play sneeze' when excited. Sudden, violent sneezing with pawing at the nose may mean a grass seed is stuck up there and needs a vet the same day. Reverse sneezing, loud snorting inhalations, looks alarming but is usually harmless. See a vet for sneezing that lasts more than a few days, nosebleeds, or thick or one-sided discharge.",
    urgencyLevel: "monitor",
    urgencyLabel: "Watch at home; same day for violent sneezing or nosebleeds",
    introduction: `Sneezing clears irritants from the nose. Dust, pollen, perfume or a sniff of something interesting can all set it off. Dogs also sneeze as a social signal during play, often with a play bow or a wagging tail.

**Reverse sneezing** is different. Your dog suddenly stands still, extends its neck and makes loud, rapid snorting or honking inhalations through the nose for a few seconds to a minute. It's caused by a spasm at the back of the nose and throat, often triggered by excitement, pulling on the lead, eating or drinking quickly, or irritants. It's especially common in small and flat-faced breeds. It isn't dangerous on its own, though frequent bouts can be a sign of nasal irritation.

**To stop a reverse sneeze**, stay calm and gently stroke your dog's throat, or briefly cover the nostrils so it swallows. Most episodes stop on their own.`,
    causes: [
      { title: "Irritants and play", description: "Dust, pollen, smoke, sprays and excitement. Occasional sneezes in a happy dog are normal.", severity: "mild" },
      { title: "Reverse sneezing", description: "Snorting inhalations, common in small and flat-faced dogs. Harmless unless very frequent.", severity: "mild" },
      { title: "Grass seeds and foreign bodies", description: "Sudden, violent sneezing, pawing at the nose and sometimes a nosebleed from one nostril, often after a walk through long grass.", severity: "serious" },
      { title: "Respiratory infections", description: "Sneezing with nasal discharge, coughing and sometimes fever, often as part of kennel cough.", severity: "moderate" },
      { title: "Dental disease", description: "Infected upper tooth roots sit close to the nasal passages and can cause sneezing and one-sided discharge.", severity: "moderate" },
      { title: "Nasal mites and fungal infections", description: "Less common causes of persistent sneezing, discharge and nosebleeds.", severity: "moderate" },
      { title: "Nasal tumours", description: "Mainly in older dogs: one-sided discharge, nosebleeds, noisy breathing and sometimes facial swelling.", severity: "serious" },
    ],
    emergencyWarnings: [
      "A nosebleed that won't stop, or bleeding from both nostrils without injury",
      "Difficulty breathing, or blue or pale gums",
      "Violent sneezing and pawing at the face after a walk (possible grass seed)",
      "Sneezing after possible exposure to rat poison (can cause bleeding)",
    ],
    homeCareTips: [
      "Keep your home free of smoke, strong fragrances and aerosol sprays.",
      "Use a harness instead of a collar if pulling triggers reverse sneezing.",
      "Check your dog's coat, ears, paws and nose for grass seeds after walks in summer.",
      "Keep a short video of the episode to show your vet.",
    ],
    whenToSeeVet: [
      "Sneezing that lasts more than a few days",
      "Thick, coloured or bloody nasal discharge, or discharge from one nostril only",
      "Reverse sneezing that's becoming more frequent",
      "Sneezing with coughing, lethargy or loss of appetite",
      "Facial swelling, or bad breath with sneezing",
    ],
    prevention: [
      "Avoid long grass with seed heads in summer, especially with spaniels and other dogs with feathery ears and feet",
      "Keep up with dental checks and tooth brushing",
      "Vaccinate against kennel cough if your dog mixes with lots of other dogs",
    ],
    faqs: [
      { q: "Is reverse sneezing an emergency?", a: "No. It sounds dramatic, but dogs breathe normally once it stops. See a vet if episodes become frequent or come with discharge or nosebleeds." },
      { q: "Can dogs have hay fever?", a: "Dogs with environmental allergies more often get itchy skin, paws and ears than sneezing, but some do sneeze and have runny eyes." },
      { q: "Why does my dog sneeze when playing?", a: "Play sneezing is a communication signal that seems to say 'this is just play'. It's normal." },
    ],
    relatedSlugs: ["why-is-my-dog-coughing", "what-is-kennel-cough", "dental-disease-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "why-does-my-dog-eat-poop",
    title: "Why Does My Dog Eat Poop? What Research Says and How to Stop It",
    seoTitle: "Why Do Dogs Eat Poop? And How to Stop It",
    shortTitle: "Dog Eating Poop",
    seoDescription: "Eating poop (coprophagia) is common and usually behavioural. What a large UC Davis study found, when it's a health issue, and practical ways to stop it.",
    tags: ["Dog Behaviour", "Dog Health", "Symptoms"],
    readTime: "6 Min Read",
    quickAnswer: "Eating poop is common and usually a normal, if unpleasant, canine behaviour. A large UC Davis survey found about 1 in 6 dogs did it frequently, almost always eating fresh stools, and products added to food rarely worked. The most effective fix is to pick up poop straight away, supervise in the garden, teach 'leave it' and 'come', and check with a vet if it starts suddenly or comes with weight loss or a big appetite.",
    urgencyLevel: "routine",
    urgencyLabel: "Usually behavioural; see a vet if it starts suddenly",
    introduction: `Coprophagia, eating faeces, is one of the most off-putting things dogs do, and one of the most common. Mother dogs eat their puppies' waste to keep the den clean, and puppies often investigate poop with their mouths.

A 2018 study from the University of California, Davis, led by Benjamin Hart, surveyed owners of more than 1,500 dogs. It found that **16% of dogs ate stools frequently** (seen at least six times), almost always **fresh stools no more than two days old**. Coprophagic dogs were more likely to be described as greedy eaters, and the behaviour wasn't linked to diet or age. The reported success rate for commercial products and food additives was close to zero.

The researchers suggested the behaviour may be an inherited instinct from wolves, which keep their dens free of fresh faeces that could carry intestinal parasite eggs before they become infective.`,
    causes: [
      { title: "Normal instinct and habit", description: "Most coprophagia is behavioural. Puppies often grow out of it; some adults keep it up.", severity: "mild" },
      { title: "Greedy appetite or hunger", description: "Dogs that are very food-motivated, on a strict diet, or fed one large meal a day may scavenge more.", severity: "mild" },
      { title: "Boredom, attention or stress", description: "Dogs left alone in a garden, or punished for accidents, may eat poop to occupy themselves or hide the evidence.", severity: "mild" },
      { title: "Poor digestion or absorption", description: "Exocrine pancreatic insufficiency, intestinal disease or parasites can leave undigested food in stools and increase appetite. Watch for weight loss and soft, bulky stools.", severity: "moderate" },
      { title: "Conditions that increase appetite", description: "Diabetes, Cushing's disease and some medicines such as steroids can make dogs ravenous.", severity: "moderate" },
      { title: "Cat litter and other animals' droppings", description: "Many dogs find cat faeces and herbivore droppings especially attractive.", severity: "mild" },
    ],
    emergencyWarnings: [
      "Vomiting, diarrhea or lethargy after eating droppings from wildlife or other dogs",
      "Eating cat litter in large amounts (clumping litter can cause blockages)",
      "Eating faeces from a pet on medication, or from horses recently dewormed",
    ],
    homeCareTips: [
      "Pick up poop immediately, in the garden and on walks; prevention works better than any additive.",
      "Go out with your dog and call it away to a treat as soon as it's finished toileting.",
      "Teach a reliable 'leave it' and recall, using high-value rewards.",
      "Keep litter boxes out of reach, for example behind a baby gate or with a top-entry box.",
      "Split daily food into two or three meals and use puzzle feeders to slow eating.",
      "Don't punish your dog for eating poop or for accidents indoors; it can make the behaviour more secretive.",
    ],
    whenToSeeVet: [
      "Coprophagia that starts suddenly in an adult or older dog",
      "Weight loss, a ravenous appetite, or soft, greasy or bulky stools",
      "Drinking and peeing more",
      "Vomiting or diarrhea",
    ],
    prevention: [
      "Keep up with regular deworming and stool tests",
      "Supervise puppies and clean up promptly during house training",
      "Give plenty of exercise, chew toys and enrichment",
    ],
    faqs: [
      { q: "Is eating poop dangerous for my dog?", a: "Eating its own fresh stools is usually harmless, but other animals' faeces can carry parasites and bacteria. Regular parasite control helps." },
      { q: "Do pineapple or stool-eating deterrents work?", a: "There's little evidence. In the UC Davis survey, owners reported almost no success with commercial products." },
      { q: "Will my puppy grow out of it?", a: "Many do by about a year old, especially if poop is cleared up consistently so the habit doesn't form." },
    ],
    relatedSlugs: ["intestinal-worms-in-dogs-and-cats", "how-to-teach-a-dog-to-come-when-called", "why-does-my-dog-have-bad-breath"],
  },
  {
    ...base,
    slug: "why-is-my-dog-peeing-in-the-house",
    title: "Why Is My Dog Peeing in the House All of a Sudden?",
    seoTitle: "Dog Peeing in the House Suddenly? Causes and Fixes",
    shortTitle: "Dog Peeing in the House",
    seoDescription: "A house-trained dog that starts peeing indoors may have a medical problem. Causes from UTIs and incontinence to marking and anxiety, and how to fix it.",
    tags: ["Dog Health", "Dog Behaviour", "House Training"],
    readTime: "7 Min Read",
    quickAnswer: "If a house-trained dog suddenly starts peeing indoors, see your vet first. Urinary tract infections, bladder stones, incontinence, diabetes, kidney disease and Cushing's disease are common medical causes. Once those are ruled out, the usual reasons are incomplete house training, marking, excitement or submissive urination, anxiety, or not getting out often enough. Clean accidents with an enzyme cleaner and never punish.",
    urgencyLevel: "urgent",
    urgencyLabel: "Vet within a day or two; same day if straining",
    introduction: `Peeing indoors is either a **medical problem** or a **behaviour problem**, and the first step is always to rule out a medical cause. A dog that was reliably house-trained for months or years doesn't usually "forget" without a reason.

Watch closely and note: How much urine? Is your dog squatting and straining, dribbling, or lifting a leg on vertical surfaces? Does it happen while sleeping? Is your dog drinking more? Does it only happen when you're out, when visitors arrive, or when your dog is excited? These details point your vet towards the cause.

**Straining with little or no urine coming out is urgent**, as it can mean a blockage.`,
    causes: [
      { title: "Urinary tract infection", description: "Peeing small amounts often, straining, licking the genitals, and sometimes blood in the urine. More common in female dogs.", severity: "moderate" },
      { title: "Bladder stones or crystals", description: "Similar signs to an infection, and stones can block the urethra, especially in male dogs.", severity: "serious" },
      { title: "Incontinence", description: "Leaking urine while lying down or asleep, common in middle-aged and older spayed female dogs and usually treatable with medication.", severity: "moderate" },
      { title: "Drinking more (diabetes, kidney disease, Cushing's)", description: "Large volumes of urine and accidents because the bladder fills faster than usual.", severity: "serious" },
      { title: "Incomplete house training", description: "Common in puppies, young dogs, newly adopted dogs and after moving house.", severity: "mild" },
      { title: "Urine marking", description: "Small amounts on vertical surfaces, mostly in unneutered males, often triggered by new people, pets or smells.", severity: "mild" },
      { title: "Excitement or submissive urination", description: "Peeing during greetings, play or when reached for, especially in young dogs. Most grow out of it with calm greetings.", severity: "mild" },
      { title: "Anxiety or cognitive decline", description: "Accidents only when left alone can be separation-related. In senior dogs, forgetting house training can be a sign of cognitive dysfunction.", severity: "moderate" },
    ],
    emergencyWarnings: [
      "Straining to pee with little or nothing coming out",
      "Blood in the urine with lethargy, vomiting or pain",
      "Drinking and peeing a lot with vomiting, weakness or not eating",
    ],
    homeCareTips: [
      "Clean accidents with an enzyme-based cleaner; ordinary cleaners leave a smell your dog can detect, and ammonia cleaners smell like urine.",
      "Go back to house-training basics: frequent trips out, especially after sleep, meals and play, and reward toileting outside.",
      "Keep greetings low-key if your dog pees when excited; greet outside or crouch side-on and avoid looming over.",
      "Never punish accidents. It makes dogs afraid to pee in front of you, so they go indoors in secret.",
      "Collect a fresh urine sample in a clean container to take to the vet.",
      "Make sure adult dogs get a chance to toilet at least every 6 to 8 hours, more often for puppies and seniors.",
    ],
    whenToSeeVet: [
      "Any house-trained dog that starts having accidents",
      "Straining, peeing more often, or blood in the urine",
      "Leaking urine while resting or asleep",
      "Drinking more water than usual",
      "Accidents with confusion or night-time restlessness in an older dog",
    ],
    prevention: [
      "Stick to a regular toilet routine",
      "Neutering can reduce marking in male dogs, especially if done before the habit is established",
      "Give older dogs more frequent toilet breaks and easy access to the door",
    ],
    faqs: [
      { q: "Do dogs pee inside out of spite?", a: "No. Dogs don't pee to get back at you. Accidents come from medical problems, anxiety, marking or incomplete training." },
      { q: "Why does my dog pee when I come home?", a: "Excitement or submissive urination. Keep greetings calm, ignore your dog for the first minute, and greet outside where possible." },
      { q: "Can a UTI clear up on its own?", a: "Don't wait to find out. Untreated infections can spread to the kidneys, and similar signs can be caused by stones. Your vet will test a urine sample." },
    ],
    relatedSlugs: ["how-to-potty-train-a-puppy", "why-is-my-dog-drinking-so-much-water", "cushings-disease-in-dogs"],
  },
  {
    ...base,
    slug: "blood-in-dog-stool",
    title: "Blood in Dog Poop: What Red or Black Stool Means",
    seoTitle: "Blood in Dog Stool: Causes and When to Worry",
    shortTitle: "Blood in Dog Stool",
    seoDescription: "Bright red streaks, jelly-like bloody diarrhea or black tarry stools: what blood in your dog's poop can mean and when it's an emergency.",
    tags: ["Dog Health", "Digestion", "Symptoms"],
    readTime: "7 Min Read",
    quickAnswer: "A small streak of bright red blood or mucus on an otherwise normal stool, in a dog that's bright and eating, is often from colon irritation and may settle within a day or two, but call your vet if it continues. Large amounts of blood, 'raspberry jam' diarrhea, black tarry stools, or blood with vomiting or lethargy need a vet the same day. Puppies with bloody diarrhea need a vet immediately because of the risk of parvovirus.",
    urgencyLevel: "urgent",
    urgencyLabel: "Same day for large amounts, black stool or a sick dog",
    introduction: `The colour of the blood tells you roughly where it's coming from.

**Bright red blood (haematochezia)** comes from the lower intestine: the colon or rectum. It often appears as streaks or spots, sometimes with mucus and straining, and is commonly caused by colitis (inflammation of the colon) after scavenging, a diet change or stress.

**Black, tarry stools (melena)** contain digested blood from higher up: the stomach or small intestine. This can be caused by ulcers (including from anti-inflammatory medicines), bleeding disorders, swallowed blood or tumours, and needs prompt veterinary attention. Note that iron supplements and some foods can also darken stools.

A sudden onset of large amounts of watery, bloody diarrhea that looks like raspberry jam can be **acute haemorrhagic diarrhea syndrome** (formerly called HGE), which can cause rapid dehydration, especially in small breeds.`,
    causes: [
      { title: "Colitis from diet or scavenging", description: "Soft stools with mucus and fresh blood, frequent small poops and straining. Often settles quickly.", severity: "mild" },
      { title: "Stress colitis", description: "Bloody, mucousy diarrhea after kennels, travel, house moves or other stress.", severity: "mild" },
      { title: "Intestinal parasites", description: "Whipworms and hookworms can cause bloody stools; giardia causes soft, smelly diarrhea.", severity: "moderate" },
      { title: "Parvovirus", description: "Severe, bloody, foul-smelling diarrhea with vomiting and lethargy in unvaccinated puppies and young dogs. An emergency.", severity: "serious" },
      { title: "Acute haemorrhagic diarrhea syndrome", description: "Sudden, profuse raspberry-jam diarrhea, often with vomiting, most common in small and toy breeds.", severity: "serious" },
      { title: "Anti-inflammatory medicines and stomach ulcers", description: "NSAIDs, steroids or human painkillers can cause ulcers and black stools.", severity: "serious" },
      { title: "Rat poison (anticoagulant)", description: "Causes bleeding from anywhere, including the gut, often days after eating it.", severity: "serious" },
      { title: "Anal gland problems, tumours or polyps", description: "Blood on the outside of the stool or after passing it, more common in older dogs.", severity: "moderate" },
    ],
    emergencyWarnings: [
      "Black, tarry stools, or vomit that contains blood or looks like coffee grounds",
      "Large amounts of blood or raspberry-jam diarrhea",
      "Bloody diarrhea in a puppy or an unvaccinated dog",
      "Lethargy, weakness, pale gums or collapse",
      "Possible access to rat poison or human medicines",
    ],
    homeCareTips: [
      "Take a photo of the stool, and bring a fresh sample to the vet if you can.",
      "For a single mild streak in a bright adult dog, offer small, bland meals and plenty of water, and watch closely.",
      "Don't give human anti-diarrhea or painkilling medicines.",
      "Keep your dog away from other dogs until you know the cause.",
    ],
    whenToSeeVet: [
      "Blood in the stool for more than a day, or more than once",
      "Diarrhea lasting more than 24 to 48 hours",
      "Straining, pain or a swollen belly",
      "Weight loss or poor appetite",
      "Any blood in the stool of a dog on anti-inflammatory medication",
    ],
    prevention: [
      "Vaccinate puppies against parvovirus and complete the full course",
      "Keep to a regular deworming and stool-testing schedule",
      "Change foods gradually over 7 to 10 days",
      "Keep rat poison, medicines and rubbish out of reach",
    ],
    faqs: [
      { q: "Can stress cause blood in a dog's stool?", a: "Yes. Stress colitis is a common cause of bloody, mucousy diarrhea after kennels, travel or upheaval, and usually settles quickly with treatment." },
      { q: "Is a little blood after a hard poop serious?", a: "A tiny spot after straining to pass a hard stool can be from minor irritation, but recurring blood should be checked." },
      { q: "What does mucus in dog poop mean?", a: "A little mucus is normal. More mucus, often with fresh blood, usually means the colon is inflamed." },
    ],
    relatedSlugs: ["why-does-my-dog-have-diarrhea", "what-is-parvo-in-dogs", "intestinal-worms-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "why-is-my-dog-shaking-its-head",
    title: "Why Is My Dog Shaking Its Head? Ear Infections and Other Causes",
    seoTitle: "Dog Shaking Head? Ear Infections and Other Causes",
    shortTitle: "Dog Shaking Its Head",
    seoDescription: "Head shaking and ear scratching usually mean ear trouble. Signs of ear infections, mites and grass seeds, why allergies are often behind them, and what to do.",
    tags: ["Dog Health", "Ears", "Symptoms"],
    readTime: "6 Min Read",
    quickAnswer: "Frequent head shaking and scratching at the ears usually means an ear problem: most often an ear infection (otitis externa), which is commonly triggered by allergies. Sudden, violent shaking after a walk can mean a grass seed in the ear. See your vet within a day or two; don't put drops in the ear until it's been examined, as some can harm the eardrum.",
    urgencyLevel: "urgent",
    urgencyLabel: "Vet within a day or two",
    introduction: `A quick shake after a swim or a nap is normal. Repeated shaking, tilting the head, rubbing the ears on the floor or scratching at them is a sign that something is bothering your dog's ears.

Dogs' ear canals are long and L-shaped, which traps moisture and debris, so infections are common, especially in dogs with floppy or hairy ears and in dogs that swim. **Most ear infections are a symptom of an underlying cause**, most often allergies. Treating the infection without addressing the cause means it tends to come back.

Look inside the ear flap: healthy ears are pale pink, clean and don't smell. Redness, swelling, a brown or yellow discharge, or a yeasty or foul smell all point to infection.`,
    causes: [
      { title: "Outer ear infection (otitis externa)", description: "Redness, discharge, smell and pain, caused by yeast or bacteria taking hold in an inflamed ear.", severity: "moderate" },
      { title: "Allergies", description: "Environmental and food allergies are the most common underlying cause of recurring ear infections, often with itchy paws too.", severity: "moderate" },
      { title: "Grass seeds and foreign bodies", description: "Sudden, violent head shaking and holding the head tilted, often in one ear only after a walk through long grass.", severity: "serious" },
      { title: "Ear mites", description: "Dark, crumbly discharge like coffee grounds and intense itching, most common in puppies and dogs living with cats.", severity: "moderate" },
      { title: "Water in the ears", description: "Moisture after swimming or bathing can lead to infections in prone dogs.", severity: "mild" },
      { title: "Middle or inner ear infection", description: "A head tilt, loss of balance, flicking eyes or facial drooping can mean infection has spread deeper.", severity: "serious" },
      { title: "Aural haematoma", description: "Constant shaking can burst a blood vessel in the ear flap, which swells up like a pillow. It needs treating, along with the cause of the shaking.", severity: "moderate" },
    ],
    emergencyWarnings: [
      "Loss of balance, circling, a sudden head tilt or flicking eyes",
      "Severe pain, crying when the ear is touched, or not eating",
      "A suddenly swollen ear flap",
      "Violent head shaking that started on a walk and won't stop",
    ],
    homeCareTips: [
      "Don't put any drops, oils or home remedies in the ear until your vet has checked the eardrum.",
      "Never push cotton buds into the ear canal.",
      "Use a cone if your dog is scratching hard enough to cause wounds.",
      "Once treated, finish the full course of ear medication, even if the ear looks better, and go back for the recheck.",
    ],
    whenToSeeVet: [
      "Head shaking or ear scratching lasting more than a day",
      "Redness, discharge, smell or swelling in the ear",
      "Ear infections that keep coming back (ask about allergy management)",
    ],
    prevention: [
      "Dry ears thoroughly after swimming and bathing",
      "Clean ears only when needed, with a vet-recommended cleaner",
      "Check ears and paws for grass seeds after summer walks",
      "Work with your vet to control allergies",
    ],
    faqs: [
      { q: "Can I treat my dog's ear infection at home?", a: "Not safely without an exam. The vet needs to check the eardrum is intact and identify yeast, bacteria or mites, as the treatment differs." },
      { q: "Why does my dog keep getting ear infections?", a: "Usually because of an underlying cause, most often allergies, or because ear shape and hair trap moisture. Treating the cause reduces repeat infections." },
      { q: "Are ear infections contagious between dogs?", a: "Infections themselves aren't usually contagious, but ear mites are, and spread easily between dogs and cats." },
    ],
    relatedSlugs: ["how-to-clean-your-dogs-ears", "why-is-my-dog-so-itchy", "why-does-my-dog-keep-licking-paws"],
  },

  // ── Cats ──────────────────────────────────────────────────────────
  {
    ...base,
    slug: "why-is-my-cat-sneezing",
    title: "Why Is My Cat Sneezing? Cat Flu and Other Causes",
    seoTitle: "Cat Sneezing: Causes, Cat Flu and When to See a Vet",
    shortTitle: "Cat Sneezing",
    seoDescription: "Most sneezing cats have an upper respiratory infection (cat flu). Signs, home care, why cats with blocked noses stop eating, and when to see a vet.",
    tags: ["Cat Health", "Symptoms", "Breathing"],
    readTime: "7 Min Read",
    quickAnswer: "A sneezing cat most often has an upper respiratory infection (cat flu), usually caused by feline herpesvirus or calicivirus. Mild cases in adult cats that are still eating often clear in 7 to 10 days with supportive care. See a vet if your cat stops eating, has thick discharge, sore eyes, mouth ulcers or a fever, or if it's a kitten. Breathing faster than 35 breaths a minute at rest, or with the mouth open, is an emergency.",
    urgencyLevel: "urgent",
    urgencyLabel: "Vet within a day or two; sooner if not eating",
    introduction: `The occasional sneeze is normal. Repeated sneezing, especially with runny eyes or nose, usually means a respiratory infection, which is very common in kittens, shelter cats and multi-cat homes.

Cornell Feline Health Center notes that feline herpesvirus causes lifelong infection in up to 80% of exposed cats, and up to 45% shed the virus again from time to time, usually when stressed. That's why some cats get "flare-ups" of sneezing and sore eyes after a house move, boarding or a new pet.

**Why sneezing cats stop eating:** cats rely heavily on smell to want to eat. A blocked nose can stop a cat eating altogether, and cats that don't eat for more than a day or two risk serious liver disease (hepatic lipidosis).`,
    causes: [
      { title: "Feline herpesvirus", description: "Sneezing, nasal discharge, and red, runny or ulcerated eyes. Recurring flare-ups with stress are common.", severity: "moderate" },
      { title: "Feline calicivirus", description: "Sneezing and discharge, often with painful mouth ulcers, drooling and sometimes limping in kittens.", severity: "moderate" },
      { title: "Bacterial infections (Chlamydia, Bordetella)", description: "Often with conjunctivitis or coughing, and more common in multi-cat homes and shelters.", severity: "moderate" },
      { title: "Irritants", description: "Dusty litter, perfume, smoke, cleaning products and pollen can trigger sneezing without other signs.", severity: "mild" },
      { title: "Chronic rhinitis", description: "Long-term nasal inflammation, often after a bad bout of cat flu, causing ongoing sneezing and snuffles.", severity: "moderate" },
      { title: "Nasopharyngeal polyps", description: "Benign growths in young cats that cause noisy breathing, snoring and sometimes ear problems.", severity: "moderate" },
      { title: "Dental disease, fungal infection or nasal tumours", description: "One-sided discharge, nosebleeds or facial swelling, especially in older cats.", severity: "serious" },
    ],
    emergencyWarnings: [
      "Breathing faster than about 35 breaths per minute at rest, open-mouth breathing or effortful breathing",
      "Blue or grey gums",
      "Not eating for more than 24 hours, or a kitten not eating at all",
      "A very sick, lethargic or dehydrated kitten",
    ],
    homeCareTips: [
      "Gently wipe discharge from the eyes and nose with cotton wool dampened with warm water.",
      "Sit your cat in a steamy bathroom for 10 to 15 minutes to loosen congestion (never leave it unattended).",
      "Offer strong-smelling, slightly warmed wet food to tempt the appetite.",
      "Keep sick cats separate from other cats and wash hands between them.",
      "Don't give lysine on its own as a treatment: Cornell notes studies suggest it's not effective.",
      "Never give human cold or flu medicines; paracetamol (acetaminophen) is deadly to cats.",
    ],
    whenToSeeVet: [
      "Sneezing with thick yellow or green discharge, sore eyes or mouth ulcers",
      "Not eating, drooling or lethargy",
      "Sneezing lasting more than a week or keeps coming back",
      "Any sneezing kitten, older cat or cat with other health problems",
      "Nosebleeds or discharge from one nostril only",
    ],
    prevention: [
      "Keep FVRCP vaccines up to date; they reduce how severe cat flu is",
      "Reduce stress for cats known to carry herpesvirus",
      "Isolate new cats for a week or two before introductions",
      "Use low-dust litter",
    ],
    faqs: [
      { q: "Can I catch a cold from my cat?", a: "No. Cat flu viruses don't infect people. Bordetella can, very rarely, infect people with weakened immune systems." },
      { q: "My vaccinated cat has cat flu. Why?", a: "Vaccines reduce severity but don't prevent infection in every case, and they don't stop cats that already carry herpesvirus from having flare-ups." },
      { q: "Do sneezing cats need antibiotics?", a: "Most cat flu is viral, so antibiotics don't help unless there's a secondary bacterial infection, such as thick coloured discharge. Your vet will decide." },
    ],
    relatedSlugs: ["why-is-my-cat-not-eating", "complete-guide-to-kitten-care", "fiv-and-felv-in-cats"],
  },
  {
    ...base,
    slug: "why-is-my-cat-losing-weight",
    title: "Why Is My Cat Losing Weight? Causes and When to Worry",
    seoTitle: "Why Is My Cat Losing Weight? Causes and When to Worry",
    shortTitle: "Cat Losing Weight",
    seoDescription: "Unexplained weight loss in cats is a sign to see a vet. Common causes include hyperthyroidism, diabetes, kidney disease, dental pain and intestinal disease.",
    tags: ["Cat Health", "Senior Pets", "Symptoms"],
    readTime: "7 Min Read",
    quickAnswer: "Unexplained weight loss in a cat should always be checked by a vet. If your cat is losing weight while eating more, hyperthyroidism and diabetes are the most likely causes. If it's eating less, think of dental pain, kidney disease, intestinal disease or cancer. Weigh your cat monthly: losing 10% of body weight, just half a kilo (about 1 lb) in a 5 kg cat, is significant.",
    urgencyLevel: "urgent",
    urgencyLabel: "Book a vet visit within a week; sooner if not eating",
    introduction: `Cats hide illness well, and weight loss is often the first, or only, sign that something is wrong. Because it happens gradually, and fur hides the change, owners often don't notice until a cat feels bony when stroked.

**Is your cat eating more or less?** This is the most useful question for your vet.

- **Losing weight while eating normally or more** suggests the body is burning or losing calories faster than they're taken in: hyperthyroidism, diabetes, or poor absorption from the gut.
- **Losing weight while eating less** suggests something is making your cat feel unwell or making eating painful: dental disease, kidney disease, nausea, intestinal disease or cancer.

Weight loss is especially common in senior cats, and the most common causes are treatable or manageable if they're caught early.`,
    causes: [
      { title: "Hyperthyroidism", description: "The classic sign is weight loss despite a huge appetite, often with restlessness, yowling, vomiting and drinking more. Common in cats over 10.", severity: "serious" },
      { title: "Diabetes", description: "Weight loss with a good appetite and increased thirst and urination. Overweight, middle-aged male cats are most at risk.", severity: "serious" },
      { title: "Chronic kidney disease", description: "Weight and muscle loss, drinking more, poor appetite and vomiting. Very common in older cats.", severity: "serious" },
      { title: "Dental disease and mouth pain", description: "Dropping food, chewing on one side, drooling or preferring soft food.", severity: "moderate" },
      { title: "Inflammatory bowel disease and intestinal lymphoma", description: "Weight loss with vomiting, diarrhea or changes in appetite. These can look alike and need tests to tell apart.", severity: "serious" },
      { title: "Parasites", description: "Worms can cause weight loss, especially in kittens and outdoor cats.", severity: "moderate" },
      { title: "Stress, competition or food access", description: "Another cat guarding the food, a new feeding station or a change in routine can mean a cat simply isn't getting enough.", severity: "mild" },
    ],
    emergencyWarnings: [
      "Not eating at all for more than 24 hours",
      "Vomiting repeatedly, weakness or collapse",
      "Heavy drinking with vomiting or lethargy (possible diabetic ketoacidosis)",
      "Yellow gums, eyes or skin (jaundice)",
    ],
    homeCareTips: [
      "Weigh your cat on a baby or kitchen scale, or weigh yourself holding your cat and subtract your weight.",
      "Feel along the spine and ribs every few weeks; prominent bones mean your cat is too thin.",
      "Watch at meal times to see whether your cat is eating, struggling to chew, or being pushed away by another cat.",
      "Note any changes in thirst, litter box use, vomiting or behaviour to tell your vet.",
      "Never put a cat on a crash diet or withhold food; cats that stop eating risk fatty liver disease.",
    ],
    whenToSeeVet: [
      "Any unexplained weight loss, especially 10% or more",
      "Weight loss with a bigger appetite, more thirst or more urine",
      "Weight loss with vomiting, diarrhea or eating less",
      "Bad breath, drooling or dropping food",
    ],
    prevention: [
      "Weigh your cat monthly and record it",
      "Senior cats: vet checks every 6 months, with blood tests that include thyroid and kidney values",
      "Feed cats separately in multi-cat homes if one is a food bully",
      "Keep up with dental care and parasite control",
    ],
    faqs: [
      { q: "Is it normal for old cats to lose weight?", a: "Some muscle loss can come with age, but weight loss is never something to put down to old age without a vet check. The common causes are often treatable." },
      { q: "How much weight loss is serious in a cat?", a: "Losing 10% of body weight without trying is significant. For a 5 kg (11 lb) cat, that's just 500 g (about 1 lb)." },
      { q: "What tests will my vet do?", a: "Usually a full exam, blood tests (including thyroid levels, kidney values and blood sugar), a urine test and sometimes imaging." },
    ],
    relatedSlugs: ["hyperthyroidism-in-cats", "diabetes-in-dogs-and-cats", "chronic-kidney-disease-in-cats"],
  },
  {
    ...base,
    slug: "why-does-my-cat-have-diarrhea",
    title: "Why Does My Cat Have Diarrhea? Causes and Care",
    seoTitle: "Cat Diarrhea: Causes, What to Do and When to Worry",
    shortTitle: "Cat Diarrhea",
    seoDescription: "What causes diarrhea in cats, from diet changes and stress to parasites, IBD and hyperthyroidism, what you can do at home and when your cat needs a vet.",
    tags: ["Cat Health", "Digestion", "Symptoms"],
    readTime: "6 Min Read",
    quickAnswer: "Mild diarrhea in an adult cat that's bright and eating can be caused by a diet change or stress and may settle within a day or two. Cornell Feline Health Center advises seeing a vet if it lasts more than a day or two, or comes with poor appetite, lethargy or vomiting. Kittens, older cats and cats with blood in the stool should be seen sooner.",
    urgencyLevel: "urgent",
    urgencyLabel: "Vet if it lasts over 1–2 days or your cat is unwell",
    introduction: `Diarrhea happens when stool moves through the intestines too quickly to absorb enough water, nutrients and electrolytes. Short bouts are often caused by a sudden diet change, stress such as a car journey or boarding, or kittens adjusting to solid food.

In adult cats, diarrhea that isn't linked to diet is often caused by inflammatory, infectious or tumour-related disease in the gut, and problems elsewhere in the body, such as hyperthyroidism and kidney or liver disease, can cause it too.

Note the details: how often, how much, the colour, whether there's mucus or blood, and whether your cat is straining. A photo helps your vet.`,
    causes: [
      { title: "Sudden diet change or new treats", description: "Usually short-lived. Switch foods gradually over at least a week.", severity: "mild" },
      { title: "Milk and dairy", description: "Many adult cats can't digest lactose, so milk causes diarrhea.", severity: "mild" },
      { title: "Stress", description: "Travel, boarding, a new pet or a move can upset the gut.", severity: "mild" },
      { title: "Parasites", description: "Roundworms, hookworms, giardia and coccidia are common in kittens and outdoor or shelter cats.", severity: "moderate" },
      { title: "Infections", description: "Bacterial and viral infections, including panleukopenia in unvaccinated kittens, which is life-threatening.", severity: "serious" },
      { title: "Food intolerance or allergy", description: "Recurring diarrhea, sometimes with vomiting or itchy skin.", severity: "moderate" },
      { title: "Inflammatory bowel disease and lymphoma", description: "Ongoing diarrhea and weight loss in middle-aged and older cats.", severity: "serious" },
      { title: "Hyperthyroidism", description: "Diarrhea or vomiting with weight loss and a big appetite in older cats.", severity: "serious" },
    ],
    emergencyWarnings: [
      "Diarrhea in a young kitten, especially with vomiting or lethargy",
      "Large amounts of blood, or black tarry stools",
      "Vomiting as well as diarrhea, or refusing food",
      "Weakness, collapse, or sunken eyes and sticky gums (dehydration)",
      "Possible poisoning, such as lilies or human medicines",
    ],
    homeCareTips: [
      "Make sure fresh water is always available; wet food helps with hydration.",
      "Don't withhold food from cats for long; offer small meals of their usual food or a vet gastrointestinal diet.",
      "Don't give human anti-diarrhea medicines; some are toxic to cats.",
      "Keep the litter box extra clean and wipe your cat's bottom if needed.",
      "Collect a fresh stool sample for your vet.",
    ],
    whenToSeeVet: [
      "Diarrhea lasting more than a day or two",
      "Diarrhea with poor appetite, lethargy or vomiting",
      "Blood or lots of mucus in the stool",
      "Recurring bouts, or weight loss",
    ],
    prevention: [
      "Change foods gradually",
      "Don't feed cow's milk",
      "Keep up with deworming and vaccines",
      "Wash food bowls daily and avoid feeding raw meat, which can carry harmful bacteria",
    ],
    faqs: [
      { q: "Can hairballs cause diarrhea?", a: "Not usually. Hairballs mainly cause vomiting or, rarely, constipation or a blockage." },
      { q: "Is pumpkin good for cat diarrhea?", a: "A small amount of plain cooked pumpkin adds fibre and helps some cats, but it doesn't treat the cause. See your vet if diarrhea continues." },
      { q: "Can indoor cats get worms?", a: "Yes. Eggs can come in on shoes, and cats can be infected by eating insects or rodents, or from fleas (tapeworm)." },
    ],
    relatedSlugs: ["why-is-my-cat-vomiting", "giardia-in-dogs-and-cats", "intestinal-worms-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "why-is-my-cat-hiding",
    title: "Why Is My Cat Hiding? When It's Normal and When It's Not",
    seoTitle: "Why Is My Cat Hiding? Causes and When to Worry",
    shortTitle: "Cat Hiding",
    seoDescription: "Cats hide when they're scared, stressed or unwell. How to tell normal hiding from a sign of illness, and how to help a hiding cat feel safe.",
    tags: ["Cat Behaviour", "Cat Health", "Symptoms"],
    readTime: "6 Min Read",
    quickAnswer: "Hiding is a normal way for cats to cope with change: a new home, visitors, noise or a new pet. A new cat may hide for days. But a cat that suddenly starts hiding and isn't eating, using the litter box or acting normally may be ill or in pain and should see a vet. Never drag a cat out of hiding; give it safe hiding spots instead.",
    urgencyLevel: "monitor",
    urgencyLabel: "Normal with change; vet if hiding comes with other signs",
    introduction: `Cats are both predators and prey, and when they feel vulnerable their instinct is to get somewhere small, high or enclosed where they can watch without being seen. Hiding is a healthy coping strategy, which is why the AAFP and ISFM environmental needs guidelines recommend every cat has safe places to retreat to.

**Normal hiding** is linked to an obvious trigger, such as a move, a party, building work, thunder or a new pet, and the cat comes out to eat, drink and use the litter box when things are quiet.

**Concerning hiding** is new, has no obvious trigger, or comes with other changes: not eating, not grooming, peeing outside the box, a hunched posture, or reacting when touched. Cats hide pain and illness, so a change in behaviour is often the first sign.`,
    causes: [
      { title: "A new home", description: "Many cats hide for a few days to a couple of weeks after moving or adoption. Start them in one quiet room.", severity: "mild" },
      { title: "Visitors, noise and changes", description: "Parties, children, building work, fireworks and new furniture can all send cats under the bed.", severity: "mild" },
      { title: "Tension with other pets", description: "Conflict with another cat or a dog, which may be subtle: staring, blocking doorways or guarding food and litter boxes.", severity: "moderate" },
      { title: "Pain", description: "Arthritis, dental pain, injuries and abdominal pain all cause cats to withdraw.", severity: "serious" },
      { title: "Illness", description: "Infections, kidney disease, urinary problems and many other illnesses make cats seek out quiet places.", severity: "serious" },
      { title: "Pregnancy and giving birth", description: "Unspayed females look for a hidden nest before giving birth.", severity: "mild" },
    ],
    emergencyWarnings: [
      "Hiding and straining in the litter box or not passing urine (especially male cats)",
      "Hiding and not eating for more than 24 hours",
      "Breathing fast or with an open mouth",
      "Hiding after a possible fall, road accident or fight",
      "Hiding after possible exposure to lilies, antifreeze or medicines",
    ],
    homeCareTips: [
      "Give hiding places on purpose: covered beds, cardboard boxes on their side and high shelves.",
      "Put food, water and a litter box near where your cat is hiding, in a quiet room.",
      "Sit nearby, talk softly, and let your cat come to you; don't pull it out.",
      "Use a wand toy or treats to build confidence at your cat's pace.",
      "Make sure each cat in a multi-cat home has its own resources in separate places.",
      "Leave the carrier out with a soft bed so it's a hiding place, not a sign of the vet.",
    ],
    whenToSeeVet: [
      "Sudden hiding with no obvious reason",
      "Hiding with changes in appetite, drinking, grooming or litter box use",
      "Hiding and reacting when picked up or touched",
      "A new cat that is still not eating after a day or two",
    ],
    prevention: [
      "Provide hiding places and high perches in every home, even for confident cats",
      "Introduce changes, new pets and new people gradually",
      "Keep routines predictable",
      "Keep up with regular vet checks, as cats hide illness",
    ],
    faqs: [
      { q: "How long will a new cat hide?", a: "Anything from a few hours to a couple of weeks. As long as it's eating, drinking and using the litter box, be patient and let it set the pace." },
      { q: "Should I force my cat out of hiding?", a: "No. It increases fear and can lead to bites and scratches. Make the area around the hiding place pleasant instead." },
      { q: "Do cats hide when they're dying?", a: "Cats often withdraw when very ill, which is one reason sudden hiding should be taken seriously and checked by a vet." },
    ],
    relatedSlugs: ["cat-behavior-decoded", "how-to-introduce-new-pet-to-resident-pets", "how-to-tell-if-your-pet-is-in-pain"],
  },
  {
    ...base,
    slug: "why-is-my-cat-meowing-so-much",
    title: "Why Is My Cat Meowing So Much (Especially at Night)?",
    seoTitle: "Cat Meowing at Night or a Lot? Causes and How to Stop It",
    shortTitle: "Cat Meowing a Lot",
    seoDescription: "Why cats meow excessively or yowl at night, from hunger and attention to being in heat, hyperthyroidism, high blood pressure and cognitive decline.",
    tags: ["Cat Behaviour", "Senior Pets", "Symptoms"],
    readTime: "6 Min Read",
    quickAnswer: "Cats mostly meow to communicate with people, so extra meowing is often about food, attention or routine. Unspayed females yowl loudly when in heat. A sudden increase in meowing or night-time yowling in an older cat can be a sign of hyperthyroidism, high blood pressure, pain, hearing loss or cognitive decline, and should be checked by a vet.",
    urgencyLevel: "routine",
    urgencyLabel: "Book a vet check if it's new, especially in older cats",
    introduction: `Adult cats rarely meow at each other; meowing is largely a way to talk to us. Some breeds, such as Siamese and Orientals, are naturally very vocal, and some individual cats are simply chatty.

What matters is **change**. A cat that starts meowing much more than usual, sounds distressed, or yowls at night when it never did before is telling you something has changed, whether that's its routine, its environment or its health.

Night-time yowling in senior cats is particularly common and often has a medical cause that can be treated.`,
    causes: [
      { title: "Hunger and routine", description: "Cats quickly learn that meowing gets breakfast. Early morning meowing is often a learned habit.", severity: "mild" },
      { title: "Attention and boredom", description: "Indoor cats without enough play may meow for interaction, especially in the evening.", severity: "mild" },
      { title: "Being in heat", description: "Unspayed female cats yowl loudly, roll and raise their rear for several days at a time, often every few weeks in season.", severity: "mild" },
      { title: "Hyperthyroidism", description: "Restlessness, yowling, weight loss and a big appetite in cats over about 10.", severity: "serious" },
      { title: "High blood pressure", description: "Often linked to kidney disease or hyperthyroidism, it can cause night-time yowling, confusion and sudden blindness.", severity: "serious" },
      { title: "Cognitive dysfunction", description: "Senior cats may become disoriented, yowl at night, forget the litter box and change their sleep pattern.", severity: "moderate" },
      { title: "Pain or hearing loss", description: "Arthritis and other pain can make cats vocal; deaf cats often meow very loudly because they can't hear themselves.", severity: "moderate" },
      { title: "Urinary problems", description: "Crying in or near the litter box, especially while straining, can mean a urinary blockage.", severity: "serious" },
    ],
    emergencyWarnings: [
      "Crying while straining in the litter box, especially a male cat",
      "Sudden blindness (dilated pupils, bumping into things)",
      "Yowling with dragging or paralysed back legs (possible blood clot)",
      "Distressed crying with breathing difficulty",
    ],
    homeCareTips: [
      "Don't reward demand meowing with food or attention; wait for a quiet moment, then respond.",
      "Use an automatic feeder for early-morning meals so your cat stops waking you.",
      "Schedule a play session with a wand toy before bed, followed by a meal.",
      "Spay female cats to stop heat cycles.",
      "For senior cats, use night lights and keep litter, water and food easy to find.",
    ],
    whenToSeeVet: [
      "A sudden increase in meowing or yowling",
      "Night-time yowling in a cat over about 10",
      "Meowing with weight loss, a bigger appetite or drinking more",
      "Confusion, getting lost in the house or forgetting the litter box",
    ],
    prevention: [
      "Twice-yearly vet checks for senior cats, including blood pressure and thyroid tests",
      "Daily play and enrichment for indoor cats",
      "Consistent feeding routines",
    ],
    faqs: [
      { q: "Why does my cat meow at 4am?", a: "Usually because it's hungry, bored, or has learned that meowing gets you up. An automatic feeder and evening play help. If it's new in an older cat, see a vet." },
      { q: "Do cats meow when they're in pain?", a: "Sometimes, but many cats in pain go quiet and hide. Any change in vocal behaviour is worth noting." },
      { q: "How long does a cat stay in heat?", a: "Usually about a week, and unspayed cats can come back into heat every two to three weeks during the breeding season." },
    ],
    relatedSlugs: ["hyperthyroidism-in-cats", "chronic-kidney-disease-in-cats", "senior-pet-care-complete-guide"],
  },
  {
    ...base,
    slug: "why-does-my-cat-bite-me",
    title: "Why Does My Cat Bite Me? Play, Petting and Fear Biting",
    seoTitle: "Why Does My Cat Bite Me? And How to Stop It",
    shortTitle: "Cat Biting",
    seoDescription: "Why cats bite during play or petting, the warning signs before a bite, and how to stop biting without punishment, based on Cornell's feline behaviour advice.",
    tags: ["Cat Behaviour", "Kittens", "Training"],
    readTime: "6 Min Read",
    quickAnswer: "Most cat bites come from play aggression (often in young cats who learned to play with hands), petting-induced aggression (being stroked for too long), fear, or redirected aggression. Play with wand toys, never hands, stop petting at the first tail flick or ear twitch, and never punish, which makes biting worse. Sudden biting in a previously gentle cat can mean pain, so see a vet.",
    urgencyLevel: "routine",
    urgencyLabel: "Behavioural; see a vet if it's new or sudden",
    introduction: `Cats bite for a reason, and they usually give warning signs first. Cornell Feline Health Center describes several types of aggression in cats, and knowing which one you're seeing tells you how to fix it.

**Play aggression** is most common in kittens and young cats, especially those raised without littermates. Look for stalking, pouncing from hiding, a thrashing tail, flattened ears and dilated pupils.

**Petting-induced aggression** happens when a cat that seemed to enjoy being stroked suddenly bites. Early signs include dilated pupils, tail lashing and ears turning backwards.

**Fear aggression** is triggered by unfamiliar people, animals, noises or handling, and **redirected aggression** happens when a cat is aroused by something it can't reach, such as a cat outside the window, and lashes out at whoever is nearby.

**Cat bites need care.** Their sharp teeth inject bacteria deep into tissue, and bites to the hand often become infected. Wash any bite well and see a doctor if it breaks the skin, especially on the hand.`,
    causes: [
      { title: "Play aggression", description: "Young, energetic cats practising hunting on feet and hands, especially if they've been encouraged to play with hands.", severity: "mild" },
      { title: "Petting-induced aggression", description: "Overstimulation from being stroked for too long or in sensitive areas such as the belly or base of the tail.", severity: "mild" },
      { title: "Fear", description: "Being cornered, picked up or approached by strangers, other pets or children.", severity: "moderate" },
      { title: "Redirected aggression", description: "Arousal from a cat outside or a loud noise, taken out on a person or pet nearby.", severity: "moderate" },
      { title: "Pain or illness", description: "Cornell advises ruling out medical causes such as hyperthyroidism, arthritis, dental disease and neurological problems.", severity: "serious" },
      { title: "Love bites", description: "Gentle nibbles during grooming or affection, usually without breaking the skin.", severity: "mild" },
    ],
    emergencyWarnings: [
      "A bite that breaks your skin, especially on the hand: wash it and see a doctor",
      "Sudden, unprovoked aggression in a previously gentle cat",
      "Aggression with other signs of illness, or after a fall or fight",
    ],
    homeCareTips: [
      "Play with wand toys and kick toys that keep hands well away from teeth and claws.",
      "Schedule two or three active play sessions a day, ending with a 'catch' and a treat or meal.",
      "If your cat ambushes you, stop moving, go quiet and walk away: biting ends the game.",
      "Learn your cat's petting limit: stroke the head and cheeks briefly, and stop before the tail starts twitching.",
      "Give your cat a choice: offer a hand and let it come to you for affection.",
      "Close blinds or block window views if outdoor cats trigger redirected aggression.",
      "Never hit, shout at or spray your cat; Cornell warns physical punishment increases fear and worsens aggression.",
    ],
    whenToSeeVet: [
      "Biting or aggression that's new or getting worse",
      "Biting when touched in a particular area",
      "Aggression with changes in appetite, grooming or litter box use",
      "Serious or persistent aggression (ask about a veterinary behaviourist)",
    ],
    prevention: [
      "Never let kittens play with hands or feet",
      "Provide climbing, scratching and hunting-style play every day",
      "Handle kittens gently and positively from an early age",
      "Supervise young children with cats and teach them the warning signs",
    ],
    faqs: [
      { q: "Why does my cat bite me then lick me?", a: "It's often part of social grooming, or a sign your cat is becoming overstimulated. Stop petting when the nibbles start." },
      { q: "Will my kitten grow out of biting?", a: "Most become gentler with age if you redirect biting onto toys consistently. Kittens rewarded with hand play often keep biting as adults." },
      { q: "Should I get a second cat for my bitey kitten?", a: "Sometimes a playmate of similar age and energy helps, but it's a big decision. Lots of daily play with you is the first step." },
    ],
    relatedSlugs: ["cat-behavior-decoded", "complete-guide-to-kitten-care", "how-to-stop-a-cat-scratching-furniture"],
  },
];

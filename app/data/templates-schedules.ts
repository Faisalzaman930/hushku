import type { TemplateDoc } from "./templates";

const LINE = "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";

/** Daily routine templates: feeding, walking and a new-puppy day. */
export const scheduleTemplates: TemplateDoc[] = [
  {
    slug: "dog-feeding-schedule-template",
    title: "Dog Feeding Schedule Template (Free, Printable)",
    seoTitle: "Dog Feeding Schedule Template: Free Printable Chart",
    shortTitle: "Feeding Schedule",
    seoDescription: "Free printable feeding schedule for dogs and cats: meal times, amounts, treats, medication with food and a weekly tick-off chart so nobody feeds twice.",
    icon: "🥣",
    tier: 2,
    category: "Pet Sitting & Care",
    targetKeywords: ["dog feeding schedule template", "pet feeding chart printable", "dog feeding chart", "cat feeding schedule", "puppy feeding schedule chart"],
    publishDate: "October 2026",
    lastUpdated: "October 2026",
    readTime: "4 Min Read",
    quickAnswer: "A feeding schedule lists when your pet eats, how much, what food and any treats or medication given with meals, with a chart to tick off each meal so no one in the house double-feeds or forgets.",
    intro: `Most feeding mistakes in shared homes aren't about the food. They're about two people each assuming the other one hasn't fed the dog, or a sitter not knowing that the evening meal gets a tablet hidden in it.

A feeding schedule on the fridge fixes that. Write down the times and the exact amount (in cups or grams, measured, not "a scoop"), then tick off each meal as it happens. Most adult dogs do well on two meals a day, about 8 to 12 hours apart; puppies usually need three or four smaller meals. Cats often prefer several small meals. Your vet can tell you the right daily amount for your pet's weight and activity, and our free feeding calculator gives a starting point.`,
    whenYouNeedIt: [
      "More than one person feeds the pet",
      "A sitter, walker or family member is covering meals",
      "Your pet is on a weight-loss plan or a prescription diet",
      "Medication has to be given with food",
    ],
    whatToInclude: [
      { title: "Meals", items: ["Meal times", "Exact amount per meal, measured", "Brand and type of food", "Where the food is stored"] },
      { title: "Extras", items: ["Daily treat allowance", "Foods that are off limits", "Medication or supplements given with meals"] },
      { title: "Tracking", items: ["A tick box for each meal, each day", "Initials of who fed", "Notes on appetite, vomiting or skipped meals"] },
    ],
    stateNotes: "",
    templateText: `FEEDING SCHEDULE: [PET NAME]

Food: ______________________   Stored at: ______________________
Daily amount: ____________  (split into ____ meals)
Water: refresh bowl at ____________ and ____________

${LINE}
MEALS
${LINE}
Breakfast: _______ at _______am   Amount: ____________
Lunch (puppies/cats): _______ at _______   Amount: ____________
Dinner: _______ at _______pm   Amount: ____________

${LINE}
EXTRAS
${LINE}
Treats per day (max): ____________   Type: ____________
Medication with food: ____________  Dose: ______  Meal: ______
Never feed: chocolate, grapes/raisins, onions, garlic, xylitol, ____________

${LINE}
WEEKLY CHART (tick and initial each meal)
${LINE}
          Breakfast   Lunch   Dinner   Notes
Mon       [   ]       [   ]   [   ]    __________
Tue       [   ]       [   ]   [   ]    __________
Wed       [   ]       [   ]   [   ]    __________
Thu       [   ]       [   ]   [   ]    __________
Fri       [   ]       [   ]   [   ]    __________
Sat       [   ]       [   ]   [   ]    __________
Sun       [   ]       [   ]   [   ]    __________

Call the owner if: skips two meals in a row, vomits more than once, or eats something on the never-feed list.
Owner: ______________________   Phone: ______________________
Vet: ______________________   Phone: ______________________`,
    faqs: [
      { q: "How many times a day should I feed my dog?", a: "Most adult dogs do well on two meals a day, roughly 8 to 12 hours apart. Puppies under six months usually need three or four meals. Some vets suggest smaller, more frequent meals for deep-chested breeds prone to bloat. Ask your vet if you're unsure." },
      { q: "How much should my dog eat?", a: "It depends on weight, age, activity and the food's calorie content. Start with the feeding guide on the bag, adjust to keep a healthy body condition, and check with your vet. Our free feeding calculator gives a starting amount." },
      { q: "Should I free-feed my cat?", a: "Some cats manage it, but many overeat. Measured meals make it easier to notice when appetite changes, which is often the first sign a cat is unwell." },
    ],
    relatedSlugs: ["dog-walking-schedule-template", "puppy-schedule-template", "pet-care-instructions-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },
  {
    slug: "dog-walking-schedule-template",
    title: "Dog Walking Schedule Template (Free, Printable)",
    seoTitle: "Dog Walking Schedule Template: Free Printable Rota",
    shortTitle: "Walking Schedule",
    seoDescription: "Free printable dog walking schedule and family rota: who walks when, how long, potty breaks and a weekly log. Ideal for shared homes and dog walkers.",
    icon: "🦮",
    tier: 2,
    category: "Pet Sitting & Care",
    targetKeywords: ["dog walking schedule template", "dog walking rota", "family dog chore chart", "dog walk log printable", "dog potty schedule"],
    publishDate: "October 2026",
    lastUpdated: "October 2026",
    readTime: "4 Min Read",
    quickAnswer: "A dog walking schedule sets who walks the dog at each time of day, for how long and with what rules, plus a log to record each walk and potty break, so the dog gets the same routine whoever is home.",
    intro: `Dogs cope well with a lot of things, but an unpredictable toilet schedule isn't one of them. In a busy home the fix is a simple rota: each walk slot has a name next to it, and whoever does it ticks it off.

Most adult dogs need to go out at least three to five times a day, and the amount of exercise varies hugely by breed and age, from a couple of short strolls for a senior toy breed to well over an hour of activity for a young working dog. Our free exercise calculator gives a starting point. Write down the house rules too (lead on near roads, no ball throwing after meals, which dogs to avoid) so a new walker gets them right first time.`,
    whenYouNeedIt: [
      "A family is sharing walks",
      "You use a dog walker for midday visits",
      "You're house-training a puppy or a rescue",
      "Your dog's routine is changing (new job, new baby, new home)",
    ],
    whatToInclude: [
      { title: "Rota", items: ["Walk times", "Who's responsible for each slot", "Length of each walk", "Backup person if someone can't"] },
      { title: "Rules", items: ["Lead and recall rules", "Harness, poo bags, water", "Dogs or places to avoid", "Weather limits (heat, ice)"] },
      { title: "Log", items: ["Tick per walk", "Pee and poo", "Anything unusual (limping, pulling, reactivity)"] },
    ],
    stateNotes: "",
    templateText: `WALKING SCHEDULE: [DOG NAME]

${LINE}
DAILY ROTA
${LINE}
Morning walk:   _______am   Length: ______ min   Who: ______________
Midday break:   _______     Length: ______ min   Who: ______________
Afternoon walk: _______pm   Length: ______ min   Who: ______________
Last out:       _______pm   Length: ______ min   Who: ______________
Backup if someone can't: ______________   Phone: ______________

${LINE}
WALK RULES
${LINE}
Lead on: always / near roads / ____________
Off-lead OK at: ______________________
Avoid: ______________________
Bring: poo bags, water, treats, ____________
Too hot or icy? ______________________

${LINE}
WEEKLY LOG (tick each walk; P = pee, X = poo)
${LINE}
          Morning   Midday   Afternoon   Last out   Notes
Mon       [   ]     [   ]    [   ]       [   ]      __________
Tue       [   ]     [   ]    [   ]       [   ]      __________
Wed       [   ]     [   ]    [   ]       [   ]      __________
Thu       [   ]     [   ]    [   ]       [   ]      __________
Fri       [   ]     [   ]    [   ]       [   ]      __________
Sat       [   ]     [   ]    [   ]       [   ]      __________
Sun       [   ]     [   ]    [   ]       [   ]      __________

Owner: ______________________   Phone: ______________________
Vet: ______________________   Phone: ______________________`,
    faqs: [
      { q: "How many times a day should a dog be walked?", a: "Most adult dogs need to go out at least three to five times a day for toilet breaks, with one or two longer walks for exercise. Puppies need to go out far more often: after waking, eating, playing and roughly every couple of hours while they learn." },
      { q: "How do I split dog walks fairly in a family?", a: "Give each slot an owner rather than saying 'whoever's free', swap slots weekly if needed, and keep the log somewhere everyone passes. Children can take the shorter walks with an adult until they can safely handle the dog alone." },
    ],
    relatedSlugs: ["dog-feeding-schedule-template", "puppy-schedule-template", "pet-sitter-instructions-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },
  {
    slug: "puppy-schedule-template",
    title: "Puppy Schedule Template: A Daily Routine (Free, Printable)",
    seoTitle: "Puppy Schedule Template: Free Printable Daily Routine",
    shortTitle: "Puppy Schedule",
    seoDescription: "Free printable puppy schedule: a full day of potty breaks, meals, naps, play and training, plus a potty log. Built for 8 to 16 week old puppies.",
    icon: "🐶",
    tier: 2,
    category: "Pet Sitting & Care",
    targetKeywords: ["puppy schedule template", "puppy daily routine", "puppy schedule printable", "8 week old puppy schedule", "puppy potty training schedule"],
    publishDate: "October 2026",
    lastUpdated: "October 2026",
    readTime: "5 Min Read",
    quickAnswer: "A puppy schedule plans the whole day around potty breaks, three or four small meals, lots of naps, short play and training sessions, with a log of every toilet trip so you can see the pattern and prevent accidents.",
    intro: `Young puppies sleep a lot, often 18 hours or more a day, and need the toilet far more often than people expect: after waking, after eating, after play, and every hour or two in between. A written schedule makes house-training faster because everyone in the home takes the puppy out at the same moments.

The routine below suits a puppy of roughly 8 to 16 weeks. A common rule of thumb is that a puppy can hold it for about one hour per month of age, up to around eight hours, but every puppy is different. Shift the times to fit your day, keep training sessions to a few minutes, and speak to your vet about the vaccination schedule before your puppy goes out in public places.`,
    whenYouNeedIt: [
      "Bringing a new puppy home",
      "House-training and crate-training",
      "Several people sharing puppy care",
      "Handing over to a puppy sitter",
    ],
    whatToInclude: [
      { title: "Routine", items: ["Wake-up and bedtime", "Potty breaks", "Three or four meals", "Naps in a crate or pen"] },
      { title: "Learning", items: ["Short training sessions", "Socialisation goals for the week", "Handling practice (paws, ears, teeth)"] },
      { title: "Tracking", items: ["Potty log with times", "Accidents and where", "Vaccination and worming dates"] },
    ],
    stateNotes: "",
    templateText: `PUPPY SCHEDULE: [PUPPY NAME]   Age: ______ weeks

${LINE}
DAILY ROUTINE (adjust times to suit)
${LINE}
_______  Wake up, straight outside for potty
_______  Breakfast, then potty
_______  Play and short training (5 min)
_______  Nap in crate or pen
_______  Potty break
_______  Lunch, then potty
_______  Nap
_______  Potty, play, socialisation outing
_______  Afternoon meal, then potty
_______  Nap
_______  Family time, gentle play, handling practice
_______  Last potty
_______  Bedtime in crate
Night:   potty break at _______ (if needed)

Rule: potty after every nap, meal and play session.

${LINE}
THIS WEEK'S GOALS
${LINE}
Training: ______________________
New people, sounds or places: ______________________
Handling: ______________________

${LINE}
POTTY LOG
${LINE}
Time      Pee   Poo   Accident (where)   Who
_______   [ ]   [ ]   ______________     ____
_______   [ ]   [ ]   ______________     ____
_______   [ ]   [ ]   ______________     ____
_______   [ ]   [ ]   ______________     ____
_______   [ ]   [ ]   ______________     ____

${LINE}
HEALTH DATES
${LINE}
Next vaccination: ____________   Worming: ____________   Flea treatment: ____________
Vet: ______________________   Phone: ______________________`,
    faqs: [
      { q: "How often does a puppy need to go out?", a: "Very often at first: as soon as they wake, after eating, after play, and roughly every one to two hours while awake. Many young puppies also need one toilet trip during the night." },
      { q: "How much should a puppy sleep?", a: "Puppies commonly sleep 18 to 20 hours a day. Planned naps in a crate or pen help prevent overtired, bitey behaviour." },
      { q: "When can my puppy go for walks?", a: "It depends on your puppy's vaccination schedule and local disease risk. Ask your vet when it's safe to walk in public places. Until then you can carry your puppy out to see the world." },
    ],
    relatedSlugs: ["dog-feeding-schedule-template", "dog-walking-schedule-template", "pet-vaccination-record-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },
];

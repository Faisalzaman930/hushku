import type { HowToArticle } from "./howto";

const base = { category: "How-To" as const, publishDate: "October 2026", lastUpdated: "October 2026", ctaFeature: "/health", ctaText: "Keep your pet's care in one place" };

export const howToArticles3: HowToArticle[] = [
  {
    ...base,
    slug: "how-to-clean-your-dogs-ears",
    title: "How to Clean Your Dog's Ears Safely",
    seoTitle: "How to Clean Dog Ears at Home: Step-by-Step Guide",
    shortTitle: "Cleaning Your Dog's Ears",
    seoDescription: "How to clean your dog's ears with a vet ear cleaner in three simple steps, how often to do it, what never to use, and the signs of an ear infection.",
    tags: ["Grooming", "Ears", "Dog Health"],
    readTime: "5 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Fill the ear canal with a vet-approved ear cleaner, massage the base of the ear for about 30 seconds, let your dog shake, then wipe away loosened debris with cotton wool or gauze, no deeper than your first knuckle. Clean only when the ears are dirty or as your vet advises; never use cotton buds, hydrogen peroxide or alcohol. Red, smelly or painful ears need a vet, not cleaning.",
    introduction: `Most dogs with healthy ears need very little ear cleaning. Over-cleaning can irritate the ear canal and actually cause problems. Dogs that swim often, have floppy or hairy ears, or are prone to infections may need cleaning more often.

**Check first.** Healthy ears are pale pink, with little wax and no strong smell. If you see redness, swelling, dark or yellow discharge, or your dog is shaking its head or yelps when you touch its ear, see your vet before cleaning: the eardrum may need to be checked, and some cleaners shouldn't be used if it's damaged.`,
    supplies: [
      { item: "A vet-recommended dog ear cleaner", note: "Avoid homemade solutions, which may irritate or not clean effectively." },
      { item: "Cotton wool balls or gauze", note: "Not cotton buds, which can push debris deeper and damage the canal." },
      { item: "Treats", note: "To make the experience positive." },
      { item: "A towel", note: "Your dog will shake, and cleaner goes everywhere." },
    ],
    steps: [
      { number: 1, title: "Get your dog comfortable", content: "Choose a calm moment, ideally after a walk. Sit with your dog in a corner or in the bath so it can't back away. Handle the ears and give treats before you start.", tip: "Practise touching and lifting the ear flaps for a few days beforehand with treats." },
      { number: 2, title: "Fill the ear canal with cleaner", content: "Lift the ear flap and squeeze enough cleaner into the canal to fill it. Keep the tip of the bottle from touching the ear, to avoid injury and contamination." },
      { number: 3, title: "Massage the base of the ear", content: "Gently massage the base of the ear for about 30 seconds. You should hear a squelching sound as the cleaner breaks up wax and debris." },
      { number: 4, title: "Let your dog shake", content: "Step back and let your dog shake its head, which brings loosened debris up from the canal. Hold a towel up to protect yourself." },
      { number: 5, title: "Wipe away the debris", content: "Use cotton wool or gauze wrapped around your finger to wipe the inside of the ear flap and the opening of the canal, no deeper than one knuckle. Repeat until it comes away clean.", warning: "Stop and see your vet if your dog seems to be in pain." },
      { number: 6, title: "Reward and repeat on the other side", content: "Give a treat and some praise, then do the other ear. Use fresh cotton wool for each ear." },
    ],
    commonMistakes: [
      { mistake: "Using cotton buds", why: "They push wax deeper and can damage the ear canal or eardrum.", fix: "Use cotton wool or gauze on your fingertip only." },
      { mistake: "Using hydrogen peroxide, alcohol or vinegar", why: "They can irritate healthy ear tissue and sting inflamed ears.", fix: "Use a cleaner made for dogs' ears." },
      { mistake: "Cleaning an infected ear instead of seeing a vet", why: "Cleaning doesn't treat infection and can hurt if the eardrum is damaged.", fix: "See your vet for red, smelly, painful or discharging ears." },
      { mistake: "Cleaning too often", why: "Over-cleaning can irritate the ear and upset its natural balance.", fix: "Clean only when needed, or on your vet's schedule." },
    ],
    faqs: [
      { q: "How often should I clean my dog's ears?", a: "Only when they look dirty, or as often as your vet recommends for your dog. Dogs that swim regularly may benefit from a drying cleaner after swimming." },
      { q: "Should I pluck the hair in my dog's ears?", a: "Routine plucking is no longer generally recommended unless the hair is causing problems, as it can irritate the canal. Ask your vet or groomer." },
      { q: "What does brown ear wax mean?", a: "A little light-brown wax is normal. Lots of dark brown discharge, especially with a smell or itching, can mean infection or ear mites." },
    ],
    relatedSlugs: ["why-is-my-dog-shaking-its-head", "how-to-bathe-a-dog", "home-grooming-basics"],
  },
  {
    ...base,
    slug: "how-to-remove-a-tick-from-a-dog-or-cat",
    title: "How to Remove a Tick From a Dog or Cat",
    seoTitle: "How to Remove a Tick From a Dog or Cat Safely",
    shortTitle: "Removing a Tick",
    seoDescription: "The safe way to remove a tick from your pet with tweezers or a tick tool, what not to do, what to do if the head stays in, and how to prevent ticks.",
    tags: ["Parasites", "Dog Health", "Cat Health"],
    readTime: "5 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Grasp the tick as close to the skin as possible with fine-tipped tweezers or a tick removal tool, and pull straight out with slow, steady pressure. Don't twist, jerk, squeeze or crush the tick, and don't use matches, petroleum jelly or nail polish. Clean the bite and your hands, and remove ticks as soon as you find them, as the longer a tick feeds, the higher the risk of disease.",
    introduction: `Ticks can spread diseases including Lyme disease, ehrlichiosis and anaplasmosis to dogs and cats, and some of these also affect people. The Companion Animal Parasite Council notes that Lyme bacteria usually need 24 to 48 hours of feeding to transmit, so prompt removal makes a real difference.

Check your pet after every walk in long grass, woodland or brush, running your fingers through the coat and paying attention to the head, ears, neck, armpits, groin and between the toes. A tick feels like a small, hard bump.`,
    supplies: [
      { item: "Fine-tipped tweezers or a tick removal tool", note: "Regular tweezers can squeeze the tick's body." },
      { item: "Disposable gloves", note: "Protect yourself from tick-borne infections." },
      { item: "Antiseptic or soap and water", note: "To clean the bite and your hands." },
      { item: "A sealable container or tape", note: "To dispose of the tick." },
      { item: "A helper and treats", note: "To keep your pet still and calm." },
    ],
    steps: [
      { number: 1, title: "Keep your pet still", content: "Have someone hold your pet gently and offer treats. Put on gloves and part the fur so you can see where the tick enters the skin." },
      { number: 2, title: "Grip the tick at the skin", content: "Grasp the tick with the tweezers as close to your pet's skin as possible, around its head and mouthparts, not its swollen body. With a tick hook, slide it under the tick from the side until the tick is held in the slot." },
      { number: 3, title: "Pull straight out, slowly", content: "Pull upwards with slow, steady, even pressure. CDC and CAPC both advise against twisting, jerking or squeezing, which can leave mouthparts behind or push infected fluid into the bite.", warning: "Don't burn the tick, or smother it with petroleum jelly, nail polish or alcohol while it's attached. This can make it regurgitate into the bite." },
      { number: 4, title: "Dispose of the tick", content: "Put the tick in a sealed container with alcohol, wrap it tightly in tape, or flush it away. Don't crush it with your fingers." },
      { number: 5, title: "Clean up", content: "Clean the bite with antiseptic or soap and water, and wash your hands well. Check the rest of your pet, and yourself, for more ticks." },
      { number: 6, title: "Watch for signs", content: "A small red bump at the bite is normal for a few days. Over the following weeks, watch for lameness, fever, lethargy or poor appetite, and see your vet if any appear." },
    ],
    commonMistakes: [
      { mistake: "Squeezing the tick's body", why: "It can push infected fluid into your pet.", fix: "Grip at the skin, around the mouthparts." },
      { mistake: "Panicking about the head", why: "If mouthparts stay in, the skin usually pushes them out as it heals; digging can cause infection.", fix: "Leave small remnants and watch for swelling or infection." },
      { mistake: "Using dog tick products on cats", why: "Some contain permethrin, which is highly toxic to cats.", fix: "Use a product made for cats, recommended by your vet." },
    ],
    faqs: [
      { q: "Should I keep the tick?", a: "Usually not necessary, but some people keep it in a sealed container with the date, in case your pet becomes ill. Testing ticks isn't generally recommended." },
      { q: "When are ticks most active?", a: "Often spring and autumn, but ticks can be active whenever temperatures are above freezing, which is why year-round prevention is advised." },
      { q: "Can I get Lyme disease from my dog?", a: "Not directly, but dogs can bring ticks into the home, where they may bite people." },
    ],
    relatedSlugs: ["ticks-and-lyme-disease-in-dogs", "how-to-get-rid-of-fleas", "heartworm-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "how-to-bathe-a-dog",
    title: "How to Bathe a Dog: Step-by-Step, Without the Stress",
    seoTitle: "How to Bathe a Dog at Home and How Often to Do It",
    shortTitle: "Bathing a Dog",
    seoDescription: "How often to bathe your dog, which shampoo to use, and a calm step-by-step method for washing, rinsing and drying, plus tips for dogs that hate baths.",
    tags: ["Grooming", "Dog Care", "Skin"],
    readTime: "6 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Most dogs need a bath every one to three months, or when they're dirty or smelly; the ASPCA suggests at least once every three months. Brush first, use lukewarm water and a dog shampoo, keep water out of the eyes and ears, rinse thoroughly, and dry well. Dogs with skin conditions may need more frequent, medicated baths on your vet's advice.",
    introduction: `Dogs don't need bathing as often as people. Too-frequent baths with the wrong product can strip natural oils and dry the skin. How often depends on the coat, lifestyle and skin health: a muddy Labrador will need more baths than a house-bound Chihuahua.

Use a shampoo made for dogs. The ASPCA notes human shampoos aren't toxic, but some contain fragrances and ingredients that can irritate a dog's skin.

Many dogs are nervous of baths, so take it slowly, keep it positive, and use plenty of treats.`,
    supplies: [
      { item: "Dog shampoo", note: "Ask your vet for a medicated shampoo if your dog has skin problems." },
      { item: "A non-slip mat", note: "Slipping is one of the main reasons dogs fear the bath." },
      { item: "A jug or handheld shower", note: "For gentle wetting and rinsing." },
      { item: "Cotton wool", note: "To place loosely in the ears (remember to remove it)." },
      { item: "Towels and a brush", note: "Plus a dryer on a cool setting if your dog tolerates it." },
      { item: "Treats or a lick mat", note: "Spread with dog-safe food to keep your dog busy." },
    ],
    steps: [
      { number: 1, title: "Brush first", content: "Brush out loose hair and mats before the bath. Mats tighten when wet and are much harder to remove afterwards." },
      { number: 2, title: "Set up the bath", content: "Lay down a non-slip mat and fill the bath with a few inches of lukewarm water. Test the temperature on your wrist. Stick a lick mat to the side of the bath.", tip: "Small dogs are often easier to wash in a sink or a large basin." },
      { number: 3, title: "Wet your dog", content: "Wet your dog from the neck down using a jug or low-pressure shower. Keep water away from the eyes, ears and nose, and use a damp washcloth for the face." },
      { number: 4, title: "Shampoo", content: "Massage in shampoo from neck to tail, including the legs, belly and paws. For medicated shampoos, follow the contact time on the label, usually several minutes." },
      { number: 5, title: "Rinse thoroughly", content: "Rinse until the water runs clear and the coat no longer feels slippery. Leftover shampoo can irritate the skin and cause itching.", warning: "Never use hot water: dogs' skin is sensitive." },
      { number: 6, title: "Dry and reward", content: "Squeeze out excess water, then towel dry. Use a dryer on a cool, low setting if your dog accepts it, keeping it moving. Make sure thick coats dry down to the skin to prevent hot spots. Finish with a treat." },
    ],
    commonMistakes: [
      { mistake: "Bathing too often", why: "Frequent bathing with harsh shampoo can dry out the skin.", fix: "Bathe every one to three months unless your vet advises otherwise." },
      { mistake: "Not rinsing enough", why: "Shampoo residue causes itching and flaking.", fix: "Rinse for longer than you think you need to." },
      { mistake: "Leaving a thick coat damp", why: "Damp undercoat can lead to skin infections and hot spots.", fix: "Dry thoroughly, especially double-coated breeds." },
      { mistake: "Bathing straight after a spot-on flea treatment", why: "It can reduce how well the product works.", fix: "Check the product label; many advise waiting 48 hours." },
    ],
    faqs: [
      { q: "Can I use baby shampoo on my dog?", a: "It's gentler than most human shampoos, but a dog shampoo is a better choice for dog skin. In an emergency, a mild unscented baby shampoo is OK once." },
      { q: "Why does my dog still smell after a bath?", a: "Persistent smells often come from ears, teeth, skin infections or anal glands rather than the coat. See your vet if a bath doesn't help." },
      { q: "Can I bathe a puppy?", a: "Yes, with a gentle puppy shampoo and warm room, once your puppy is settled at home. Keep it short and positive." },
    ],
    relatedSlugs: ["home-grooming-basics", "how-to-clean-your-dogs-ears", "how-to-trim-dog-nails-at-home"],
  },
  {
    ...base,
    slug: "how-to-trim-your-cats-nails",
    title: "How to Trim Your Cat's Nails",
    seoTitle: "How to Trim Cat Nails at Home: Step-by-Step Guide",
    shortTitle: "Trimming Cat Nails",
    seoDescription: "How to get your cat used to nail trims, where to cut to avoid the quick, how often to trim, and what to do if you cut a nail too short.",
    tags: ["Grooming", "Cat Care"],
    readTime: "5 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Gently press the toe pad to extend the claw, then clip just the sharp, clear tip, staying well away from the pink quick. Do one or two nails per session at first, with a treat after each. The ASPCA suggests trimming every 10 days to two weeks. If your cat struggles, stop and try again later; never force it.",
    introduction: `Trimming your cat's claws blunts the sharp tips, protects your skin and furniture, and stops claws growing into the pads, which is common in older cats that scratch less. It's not a substitute for scratching posts, which cats need to stretch and keep claws healthy.

The **quick** is the pink area inside the claw that contains blood vessels and nerves. Cutting it hurts and bleeds. In cats with clear claws it's easy to see; cut only the sharp hooked tip beyond it.

Most cats tolerate nail trims well if they're introduced slowly and kept very short.`,
    supplies: [
      { item: "Cat nail clippers", note: "Scissor-style or small guillotine clippers. Keep them sharp." },
      { item: "Styptic powder or cornflour", note: "To stop bleeding if you cut the quick." },
      { item: "Treats", note: "Something your cat really loves, such as lickable treats." },
      { item: "A towel", note: "For a gentle 'burrito' wrap if your cat is wriggly." },
    ],
    steps: [
      { number: 1, title: "Get your cat used to paw handling", content: "For a week or so, gently hold a paw and press a pad to extend a claw, then give a treat. Practise on a different toe each time. The ASPCA suggests doing this when your cat is relaxed or sleepy, away from windows and other pets." },
      { number: 2, title: "Introduce the clippers", content: "Let your cat sniff the clippers and hear the click. Clip a piece of dry spaghetti near your cat, then treat, so the sound predicts something good." },
      { number: 3, title: "Extend the claw", content: "Hold your cat on your lap facing away from you. Take a paw and gently press the top and bottom of the toe to extend the claw." },
      { number: 4, title: "Clip the tip", content: "Clip just the sharp, curved tip, cutting from top to bottom. Stay well clear of the pink quick.", warning: "If you cut the quick, press styptic powder or cornflour onto the tip and hold for a moment. Give a treat and stop for the day." },
      { number: 5, title: "Stop while it's going well", content: "Do one or two claws, then give a treat and let your cat go. You don't have to do all 18 claws in one session. Don't forget the dewclaws on the inside of the front legs." },
      { number: 6, title: "Make it routine", content: "Trim every 10 days to two weeks. Older cats may need more frequent checks, as their claws thicken and can grow into the pads." },
    ],
    commonMistakes: [
      { mistake: "Trying to do every nail at once", why: "Cats lose patience quickly, and a bad experience makes the next one harder.", fix: "Do a few claws at a time and stop before your cat struggles." },
      { mistake: "Restraining a struggling cat", why: "It makes cats fearful and can lead to bites and scratches.", fix: "Stop, try later, or ask your vet or a groomer for help." },
      { mistake: "Cutting too much", why: "Hitting the quick is painful and bleeds.", fix: "Take only the sharp tip; when in doubt, cut less." },
    ],
    faqs: [
      { q: "Is it better to declaw my cat?", a: "No. Declawing is the amputation of the last bone of each toe. The AAFP strongly opposes elective declawing and encourages nail trims and scratching posts instead." },
      { q: "Do indoor cats need their nails trimmed?", a: "Most benefit from it, especially older cats, which scratch less and are prone to overgrown claws." },
      { q: "What about nail caps?", a: "Soft vinyl caps glued over the claws are a humane option for some homes. They need replacing every few weeks as claws grow." },
    ],
    relatedSlugs: ["how-to-stop-a-cat-scratching-furniture", "how-to-trim-dog-nails-at-home", "complete-guide-to-kitten-care"],
  },
  {
    ...base,
    slug: "how-to-teach-a-dog-to-come-when-called",
    title: "How to Teach Your Dog to Come When Called (Reliable Recall)",
    seoTitle: "How to Teach a Dog to Come When Called: Recall Training",
    shortTitle: "Teaching Recall",
    seoDescription: "A step-by-step, reward-based plan for a reliable recall, from games at home to a long line in the park, plus the mistakes that teach dogs to ignore 'come'.",
    tags: ["Training", "Dog Behaviour", "Safety"],
    readTime: "8 Min Read",
    pillarSlug: "complete-guide-to-dog-training",
    ctaFeature: "/care-team",
    ctaText: "Keep everyone using the same cues",
    quickAnswer: "Choose one recall word, pair it with your dog's favourite reward, and practise in easy places first, gradually adding distance and distractions. Use a long line outdoors until your dog comes reliably. Never call your dog for something unpleasant, and never punish it for coming back, however long it took. Make coming to you the best thing that happens on every walk.",
    introduction: `A reliable recall is the most important thing you can teach your dog. It lets your dog enjoy off-lead exercise safely and can prevent accidents with traffic, wildlife and other dogs.

Recall is built on one simple idea: **coming to you must be more rewarding than whatever your dog is doing**. That means using rewards your dog genuinely values, and building up slowly. The American Veterinary Society of Animal Behavior recommends reward-based methods for all training, as aversive methods carry risks of fear and aggression.

Plan on weeks of practice, not days, and expect some setbacks during adolescence (around 6 to 18 months), when many dogs get more independent.`,
    supplies: [
      { item: "High-value treats", note: "Small, soft and special: chicken, cheese or sausage pieces. Kibble rarely competes with a squirrel." },
      { item: "A long line (5 to 10 m)", note: "Attached to a harness, not a collar, so your dog can't hurt its neck." },
      { item: "A favourite toy", note: "For dogs that love tug or fetch more than food." },
      { item: "A whistle (optional)", note: "Sounds the same every time, whoever blows it, and carries a long way." },
    ],
    steps: [
      { number: 1, title: "Choose a fresh recall cue", content: "If your dog already ignores 'come', pick a new word, like 'here' or 'touch', or a whistle. Everyone in the household should use the same cue." },
      { number: 2, title: "Charge up the cue", content: "At home, say the cue once and immediately give a great treat, even though your dog is right next to you. Repeat 10 times a few times a day for several days, until your dog's head whips round at the sound." },
      { number: 3, title: "Add a little distance", content: "Call your dog from across the room, then from another room. When it arrives, reward generously and gently touch its collar or harness before giving the treat, so being caught is part of the game.", tip: "Run backwards away from your dog as you call; most dogs love to chase." },
      { number: 4, title: "Play recall games", content: "Play 'ping-pong' recall between two people, or hide-and-seek in the house or garden. Games build enthusiasm and lots of successful repetitions." },
      { number: 5, title: "Go outside on a long line", content: "Practise in a quiet park on a long line. Call your dog when it's not too distracted, reward, then release it to go and sniff again. Coming back shouldn't always mean the end of the fun." },
      { number: 6, title: "Add distractions slowly", content: "Gradually practise near more distractions: other dogs at a distance, people, smells. If your dog can't respond, you're too close; move further away and make it easier.", warning: "Don't drop the long line until your dog comes back reliably, the first time, in that kind of situation." },
      { number: 7, title: "Keep it rewarding for life", content: "Keep rewarding recalls, sometimes with a jackpot of several treats. Practise several times on every walk, not just when it's time to leave." },
    ],
    commonMistakes: [
      { mistake: "Calling your dog only to end the fun", why: "Your dog learns that 'come' means the lead goes on and play stops.", fix: "Call, reward and release your dog to play again, many times per walk." },
      { mistake: "Repeating the cue", why: "Saying 'come, come, COME' teaches your dog the word is background noise.", fix: "Say it once. If your dog doesn't respond, go and get it, and make the next one easier." },
      { mistake: "Telling off a dog that comes back slowly", why: "Your dog learns coming back is unpleasant and will be even slower next time.", fix: "Always greet your dog warmly when it arrives, no matter how long it took." },
      { mistake: "Calling for things your dog dislikes", why: "Baths, nail trims and being shut away poison the cue.", fix: "Go and get your dog for unpleasant things instead." },
    ],
    faqs: [
      { q: "At what age can I start recall training?", a: "Straight away. Young puppies naturally follow you, which makes it the perfect time to build a strong recall." },
      { q: "My dog has a great recall at home but not in the park. Why?", a: "Dogs don't generalise well. Practise in lots of places, starting easy, and use better rewards outdoors." },
      { q: "Are some breeds harder to recall?", a: "Scent hounds and sight hounds, such as Beagles and Greyhounds, can find it harder to resist chasing. They may always need a long line in risky areas." },
    ],
    relatedSlugs: ["how-to-teach-basic-dog-commands", "what-is-positive-reinforcement-dog-training", "how-to-stop-dog-pulling-on-leash"],
  },
  {
    ...base,
    slug: "how-to-keep-your-dog-cool-in-hot-weather",
    title: "How to Keep Your Dog Cool in Hot Weather (and Spot Heatstroke)",
    seoTitle: "How to Keep a Dog Cool in Hot Weather & Heatstroke Signs",
    shortTitle: "Keeping Dogs Cool",
    seoDescription: "Practical ways to keep dogs safe in hot weather, the early signs of heatstroke, what to do if your dog overheats, and which dogs are most at risk.",
    tags: ["Safety", "Dog Health", "Seasonal"],
    readTime: "6 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Walk early in the morning or late in the evening, avoid hot pavement, give constant access to water and shade, and never leave a dog in a parked car, even for a few minutes. Flat-faced, overweight, older and very young dogs are at highest risk. Heavy panting, drooling, weakness, vomiting or collapse can be heatstroke: start cooling straight away with cool water and get to a vet immediately.",
    introduction: `Dogs cool themselves mainly by panting, which works poorly in hot, humid weather. Heatstroke happens when body temperature climbs too high, and the ASPCA lists a body temperature above 104°F (40°C) as a danger sign. It can cause organ damage and death within a short time.

**Cars are the biggest danger.** The AVMA warns that cars can heat to deadly temperatures quickly, even when the weather doesn't seem very hot and even with the windows cracked or the car in shade.

Dogs most at risk include flat-faced (brachycephalic) breeds such as Pugs, French Bulldogs and Bulldogs, overweight dogs, older dogs, puppies, dogs with heart or breathing problems, and dogs with thick coats.`,
    supplies: [
      { item: "Water and a travel bowl", note: "Take water on every walk." },
      { item: "Shade", note: "A shady spot in the garden or a canopy." },
      { item: "A cooling mat or damp towel", note: "Let your dog choose whether to lie on it." },
      { item: "A paddling pool", note: "Shallow water for dogs that enjoy it, with supervision." },
    ],
    steps: [
      { number: 1, title: "Change your walk times", content: "Walk in the early morning or late evening, when it's coolest. On very hot days, skip the walk and play brain games indoors instead; a missed walk won't harm your dog, heatstroke can." },
      { number: 2, title: "Check the pavement", content: "Asphalt and sand can burn paw pads. Press the back of your hand on the ground for seven seconds; if it's too hot for you, it's too hot for your dog. Our hot pavement checker estimates surface temperatures." },
      { number: 3, title: "Provide water and shade", content: "Make sure fresh water and shade are always available, indoors and out. Add ice cubes to the water bowl or make frozen treats from dog-safe food." },
      { number: 4, title: "Never leave your dog in a car", content: "Not for a few minutes, not with the windows open, not in shade. Leave your dog at home if you need to make stops.", warning: "Leaving a dog in a hot car is illegal in several US states and other countries." },
      { number: 5, title: "Groom, don't shave", content: "Brush out loose undercoat regularly. The ASPCA advises against shaving dogs, as the coat helps protect against overheating and sunburn, though long hair can be trimmed." },
      { number: 6, title: "Know the signs of heatstroke", content: "Watch for heavy panting, drooling, a fast heart rate, red or dark gums, weakness, wobbliness, confusion, vomiting or diarrhea (sometimes bloody) and collapse." },
      { number: 7, title: "Act fast if your dog overheats", content: "Move your dog to shade or air conditioning, pour cool water over its body (tap water is fine), use a fan, and offer small amounts of water to drink. Call a vet and go straight there, continuing to cool on the way. Even if your dog seems to recover, it needs checking." },
    ],
    commonMistakes: [
      { mistake: "Thinking a short car stop is fine", why: "Cars heat up fast, even on mild days.", fix: "Take your dog with you or leave it at home." },
      { mistake: "Draping a wet towel over an overheated dog", why: "A towel left on the body can trap heat once it warms up.", fix: "Pour cool water over your dog repeatedly and use a fan or moving air." },
      { mistake: "Driving to the vet before cooling", why: "Every minute at a high temperature adds to the damage.", fix: "Start cooling straight away, then keep cooling on the way to the vet." },
      { mistake: "Exercising in the heat of the day", why: "Exercise generates heat that dogs can't shed on hot days.", fix: "Walk early or late, and keep it gentle." },
    ],
    faqs: [
      { q: "What temperature is too hot to walk a dog?", a: "It depends on humidity, the dog and the surface, but extra care is needed from about 77°F (25°C) upwards, especially for flat-faced and overweight dogs. Use our heatstroke and pavement tool as a guide." },
      { q: "Do dogs sweat?", a: "Only a little, through their paw pads. They mainly cool down by panting." },
      { q: "Can cats get heatstroke?", a: "Yes, though less often. Flat-faced breeds like Persians are at higher risk. Panting in a cat is never normal and needs a vet." },
    ],
    relatedSlugs: ["dog-breathing-fast-at-rest", "french-bulldog-complete-guide", "pet-first-aid-complete-guide"],
  },
  {
    ...base,
    slug: "how-to-tell-if-your-pet-is-in-pain",
    title: "How to Tell If Your Dog or Cat Is in Pain",
    seoTitle: "How to Tell If Your Dog or Cat Is in Pain",
    shortTitle: "Signs of Pain",
    seoDescription: "Dogs and cats hide pain well. The subtle behaviour and posture changes that signal pain, how vets assess it, and why you should never give human painkillers.",
    tags: ["Dog Health", "Cat Health", "Senior Pets"],
    readTime: "7 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Pets rarely cry out when they're in pain. Instead, look for changes: moving less, reluctance to jump or use stairs, limping or stiffness, licking one area, changes in appetite, sleeping more, hiding, irritability, panting at rest (dogs) or squinting and a hunched posture (cats). If you notice these, see your vet, and never give human painkillers: ibuprofen and paracetamol can be deadly to pets.",
    introduction: `In the wild, showing pain makes an animal vulnerable, so dogs and cats are good at hiding it. Chronic pain, such as arthritis, comes on so gradually that owners often put the changes down to "just getting old".

The 2022 AAHA Pain Management Guidelines encourage vets to assess pain using a combination of behaviour, physical signs and context, and to help owners recognise it. You know your pet's normal behaviour best, so changes you notice are valuable clues.

**For cats**, researchers at the Université de Montréal developed the Feline Grimace Scale, which scores five facial features: ear position, orbital tightening (squinting), muzzle tension, whisker position and head position. Flattened, rotated ears, narrowed eyes, a tense muzzle, straight whiskers and a lowered head can all signal pain.`,
    steps: [
      { number: 1, title: "Watch how your pet moves", content: "Look for limping, stiffness after rest, a shorter stride, difficulty getting up, reluctance to jump onto furniture or into the car, and avoiding stairs. Cats may stop jumping to high places or use lower routes." },
      { number: 2, title: "Notice posture", content: "A hunched back, tucked belly, head held low, or a reluctance to lie down can mean pain. Dogs may stand in a 'praying position' with belly pain. Cats in pain often sit hunched with paws tucked under and eyes half closed." },
      { number: 3, title: "Look at behaviour changes", content: "Hiding, irritability, growling or biting when touched, less interest in play, clinginess, restlessness at night and sleeping more are all possible signs. Cats may stop using the litter box if getting in hurts." },
      { number: 4, title: "Check grooming and licking", content: "Repeated licking or chewing of one area can point to a sore spot. Cats in pain often stop grooming, leading to a scruffy or matted coat, especially along the back." },
      { number: 5, title: "Monitor eating, drinking and breathing", content: "Eating less, dropping food or chewing on one side can mean dental pain. Panting at rest, a faster breathing rate and trembling can be signs of pain in dogs." },
      { number: 6, title: "Record and see your vet", content: "Take short videos of anything unusual and note when it happens. Your vet can examine your pet, look for the cause and discuss pain relief, from medication to weight management and physiotherapy.", warning: "Never give human painkillers. Ibuprofen and naproxen can cause stomach ulcers and kidney failure in dogs and cats, and paracetamol (acetaminophen) is deadly to cats." },
    ],
    commonMistakes: [
      { mistake: "Assuming 'slowing down' is just age", why: "Arthritis is common and treatable, and untreated pain affects quality of life.", fix: "Mention any changes in mobility or behaviour to your vet." },
      { mistake: "Waiting for crying or whimpering", why: "Most pets in pain stay quiet.", fix: "Watch for changes in posture, movement and behaviour." },
      { mistake: "Giving leftover medicine", why: "Doses for one pet or person can be dangerous for another.", fix: "Only give medicines prescribed for this pet." },
    ],
    faqs: [
      { q: "Do dogs cry when in pain?", a: "Sometimes, especially with sudden injuries, but chronic pain is usually silent. Changes in behaviour and movement are more reliable signs." },
      { q: "Do cats purr when they're in pain?", a: "Yes, they can. Cats purr when stressed, unwell or in pain as well as when content, so purring doesn't rule out pain." },
      { q: "What can I give my dog for pain at home?", a: "Nothing without talking to your vet. Pet-specific anti-inflammatories and other pain relief are safe when prescribed and monitored." },
    ],
    relatedSlugs: ["why-is-my-dog-limping", "senior-pet-care-complete-guide", "why-is-my-cat-hiding"],
  },
  {
    ...base,
    slug: "how-to-help-your-pet-lose-weight",
    title: "How to Help Your Dog or Cat Lose Weight Safely",
    seoTitle: "How to Help Your Dog or Cat Lose Weight Safely",
    shortTitle: "Pet Weight Loss",
    seoDescription: "A safe, step-by-step weight-loss plan for overweight dogs and cats: checking body condition, measuring food, cutting treats, adding activity and tracking progress.",
    tags: ["Nutrition", "Weight", "Dog Health", "Cat Health"],
    readTime: "8 Min Read",
    pillarSlug: "complete-guide-to-pet-nutrition",
    ctaFeature: "/care-team",
    ctaText: "Share feeding plans with your household",
    quickAnswer: "Check your pet's body condition, ask your vet to set a target weight and rule out medical causes, then feed a measured amount for the target weight, weighed in grams. Keep treats to under 10% of daily calories, add daily activity, and weigh every 2 to 4 weeks. Aim for about 1–2% of body weight a week in dogs and 0.5–1% in cats; never crash-diet a cat.",
    introduction: `Being overweight is one of the most common health problems in pets, and it's linked to arthritis, diabetes, breathing problems and a shorter life. In a lifetime study of Labrador Retrievers, dogs fed 25% less than their littermates stayed leaner and lived a median of nearly two years longer.

Many owners don't realise their pet is overweight. Use a body condition score rather than the scale alone: you should be able to feel your pet's ribs easily under a thin layer of fat, see a waist from above, and see a tummy tuck from the side.

**Safety first:** weight loss should be gradual. Cats that suddenly stop eating or lose weight too fast can develop hepatic lipidosis (fatty liver), which can be fatal.`,
    supplies: [
      { item: "Kitchen scale", note: "Cups and scoops can be off by 20% or more; weigh food in grams." },
      { item: "A weight-loss diet, if recommended", note: "These are higher in protein and fibre and lower in calories, so pets feel fuller." },
      { item: "Puzzle feeders", note: "Slow eating and add activity." },
      { item: "A shared log", note: "So everyone in the household knows what has been fed." },
    ],
    steps: [
      { number: 1, title: "Score your pet's body condition", content: "Use the WSAVA body condition score charts. A score of 6 or 7 out of 9 is overweight; 8 or 9 is obese. Our pet BMI tool walks you through it." },
      { number: 2, title: "See your vet", content: "Your vet can confirm the target weight and check for medical causes, such as an underactive thyroid in dogs, as well as arthritis that might limit exercise." },
      { number: 3, title: "Work out how much to feed", content: "Calories are usually based on the target weight, not the current one. Our weight loss calculator gives a starting point; your vet may adjust it. Cornell Feline Health Center describes a cat losing weight safely on about 70% of its maintenance calories." },
      { number: 4, title: "Weigh every meal", content: "Divide the daily amount into meals and weigh it. Count every food your pet gets, including chews, table scraps and food used for medication." },
      { number: 5, title: "Cut and swap treats", content: "Keep treats under 10% of daily calories. Use pieces of the daily kibble, green beans or carrot for dogs, or a few kibbles in a puzzle ball for cats.", warning: "Never use grapes, raisins, onion, garlic or anything with xylitol as treats." },
      { number: 6, title: "Add activity gradually", content: "For dogs, extend walks slowly and add sniffing games and swimming if suitable. For cats, schedule short play sessions with wand toys two or three times a day, and put food in places they have to climb or walk to." },
      { number: 7, title: "Weigh and adjust", content: "Weigh your pet every 2 to 4 weeks. Aim for about 1–2% of body weight a week for dogs and 0.5–1% for cats. If weight loss stalls for a month, reduce food by about 5–10% with your vet's guidance." },
      { number: 8, title: "Maintain the new weight", content: "Once your pet reaches its target, increase food slightly to stop further loss, and keep weighing monthly. Many pets regain weight if old habits return." },
    ],
    commonMistakes: [
      { mistake: "Feeding by scoop or by eye", why: "Small errors add up to a lot of extra calories each week.", fix: "Use a kitchen scale for every meal." },
      { mistake: "Forgetting extra food", why: "Treats, chews and family members' scraps often add up to more than the meals.", fix: "Keep a shared log and agree one treat allowance for the whole household." },
      { mistake: "Cutting a cat's food drastically", why: "Rapid weight loss can trigger fatty liver disease.", fix: "Lose weight slowly under your vet's supervision." },
      { mistake: "Relying on exercise alone", why: "It's hard to burn off overfeeding with exercise.", fix: "Combine measured food with more activity." },
    ],
    faqs: [
      { q: "Why is my pet still gaining weight on a diet?", a: "Usually because of hidden extras, inaccurate measuring, or a calorie target that's still too high. Medical problems such as hypothyroidism in dogs can contribute; ask your vet." },
      { q: "Does neutering make pets fat?", a: "Neutered pets need fewer calories, often about 10–20% fewer, so portions need adjusting. Weight gain isn't inevitable." },
      { q: "My pet begs constantly. What can I do?", a: "Split food into more meals, use puzzle feeders and high-fibre diets, and replace food rewards with play and attention." },
    ],
    relatedSlugs: ["complete-guide-to-pet-nutrition", "how-to-read-pet-food-labels", "diabetes-in-dogs-and-cats"],
  },
];

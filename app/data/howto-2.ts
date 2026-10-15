import type { HowToArticle } from "./howto";

const base = { category: "How-To" as const, publishDate: "October 2026", lastUpdated: "October 2026", ctaFeature: "/health", ctaText: "Keep your pet's care in one place" };

export const howToArticles2: HowToArticle[] = [
  {
    ...base,
    slug: "how-to-get-rid-of-fleas",
    title: "How to Get Rid of Fleas on Your Dog, Cat and in Your Home",
    seoTitle: "How to Get Rid of Fleas on Pets and in the House",
    shortTitle: "Getting Rid of Fleas",
    seoDescription: "A step-by-step plan to clear fleas from your dog or cat and your home, why it takes weeks, and how to stop them coming back.",
    tags: ["Parasites", "Dog Health", "Cat Health"],
    readTime: "8 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Treat every dog and cat in the home with a vet-recommended flea product, every month, without gaps. Wash bedding hot and vacuum daily for a few weeks to remove eggs and larvae, and keep treating: new fleas keep hatching from cocoons in the home for weeks, so a moderate infestation can take months to clear.",
    introduction: `The fleas you see on your pet are only part of the problem. Female fleas start laying eggs within a day of their first meal and can lay 40 to 50 eggs a day, according to the Companion Animal Parasite Council (CAPC). The eggs fall off into carpets, bedding and furniture, where they develop into larvae and then cocoons. Cocooned fleas can wait for weeks before hatching, which is why infestations seem to come back after treatment.

The key is consistency: treat all pets, treat the home and keep going long enough to break the life cycle.`,
    supplies: [
      { item: "A vet-recommended flea treatment for each pet", note: "Dog and cat products are different. Never use a dog product on a cat: some contain permethrin, which is highly toxic to cats." },
      { item: "A flea comb", note: "To check for fleas and flea dirt (black specks that turn red on damp paper)." },
      { item: "A vacuum cleaner", note: "Vibration helps fleas hatch so treatments can reach them; empty the bag or canister outside." },
      { item: "A household flea spray (optional)", note: "Choose one with an insect growth regulator and keep pets and fish away while it dries." },
    ],
    steps: [
      { number: 1, title: "Confirm it's fleas", content: "Comb your pet over a white surface, especially around the tail base and neck. Black specks that leave red-brown smears on damp paper are flea dirt (digested blood). Itching around the back end is a classic sign.", tip: "Allergic pets can be very itchy with only a few fleas you'll never see." },
      { number: 2, title: "Treat every pet in the home", content: "Use a product your vet recommends for each dog and cat, including pets that don't seem itchy. Untreated pets keep the infestation going. Follow the dosing interval exactly.", warning: "Don't use dog flea products on cats. Some dog spot-ons contain permethrin, which can cause tremors, seizures and death in cats." },
      { number: 3, title: "Wash and vacuum", content: "Wash pet bedding, throws and washable soft furnishings on a hot wash. Vacuum carpets, furniture, skirting boards and under furniture every day or two for the first few weeks, and the car if your pet travels in it." },
      { number: 4, title: "Treat the home if needed", content: "For heavier infestations, a household spray containing an insect growth regulator stops eggs and larvae developing. Treat areas where your pet sleeps and spends time." },
      { number: 5, title: "Keep going for at least three months", content: "New fleas will keep hatching from cocoons for weeks. They jump onto your treated pet and die, but you may still see some. CAPC notes moderate to severe infestations can take several months to control, so don't stop early." },
      { number: 6, title: "Prevent reinfestation year-round", content: "CAPC recommends year-round flea control for life, because fleas survive indoors through winter. Treat for tapeworm too if your vet advises it, as pets swallow tapeworm larvae when grooming fleas." },
    ],
    commonMistakes: [
      { mistake: "Treating only the itchy pet", why: "Other pets carry fleas without symptoms and keep reinfesting the home.", fix: "Treat every dog and cat in the household at the same time." },
      { mistake: "Stopping when fleas disappear", why: "Cocoons in the home keep hatching for weeks or months.", fix: "Continue monthly treatment for at least three months, then year-round." },
      { mistake: "Using supermarket or natural remedies", why: "Many are less effective, and some essential oils are toxic to cats.", fix: "Ask your vet for a proven product for your pet's species and weight." },
    ],
    faqs: [
      { q: "Can fleas live on humans?", a: "Cat fleas bite people, causing itchy spots, but they can't complete their life cycle on humans. Clearing them from your pets and home solves the problem." },
      { q: "Why does my pet still have fleas after treatment?", a: "Usually because new fleas are hatching from the home, another pet isn't treated, or doses were late. Keep treating all pets on schedule and keep vacuuming." },
      { q: "Do indoor cats need flea treatment?", a: "Fleas get inside on people and other pets, so many vets recommend year-round protection for indoor cats too." },
    ],
    relatedSlugs: ["why-is-my-dog-so-itchy", "intestinal-worms-in-dogs-and-cats", "heartworm-in-dogs-and-cats"],
  },
  {
    ...base,
    slug: "how-to-brush-your-dogs-teeth",
    title: "How to Brush Your Dog's Teeth (and Get Them to Like It)",
    seoTitle: "How to Brush Your Dog's Teeth: Step-by-Step Guide",
    shortTitle: "Brushing Your Dog's Teeth",
    seoDescription: "A gentle, step-by-step way to get your dog used to tooth brushing, what toothpaste to use, and how often to brush to prevent dental disease.",
    tags: ["Dental", "Dog Health", "Grooming"],
    readTime: "6 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Use a soft pet toothbrush or finger brush and pet toothpaste (never human toothpaste, which can contain xylitol). Build up over one to two weeks, from tasting the paste, to touching the gums, to brushing a few teeth, and aim to brush daily, focusing on the outer surfaces along the gumline.",
    introduction: `Daily brushing is the most effective way to prevent dental disease, which affects most dogs by the age of three. Plaque starts to harden into tartar within days, so little and often is what counts. Most dogs accept brushing if you introduce it slowly and make it rewarding.

Brushing prevents disease; it doesn't remove existing tartar or treat sore teeth. If your dog has bad breath, red gums or visible tartar, see your vet first.`,
    supplies: [
      { item: "Pet toothpaste", note: "Flavoured, safe to swallow. Human toothpaste can contain xylitol and fluoride and isn't meant to be swallowed." },
      { item: "Soft toothbrush or finger brush", note: "A child's soft toothbrush works for many dogs; finger brushes help at the start." },
      { item: "Treats or a favourite toy", note: "To reward calm behaviour at every step." },
    ],
    steps: [
      { number: 1, title: "Let your dog taste the toothpaste", content: "For a few days, offer a little pet toothpaste on your finger as a treat." },
      { number: 2, title: "Touch the lips and gums", content: "Gently lift the lip and rub a finger with paste along the outer gums for a few seconds. Reward and stop before your dog wants to pull away." },
      { number: 3, title: "Introduce the brush", content: "Let your dog lick paste off the brush, then brush the large canine and back teeth for a few seconds, with the bristles angled at the gumline." },
      { number: 4, title: "Build up to the whole mouth", content: "Over a week or two, work up to about 30 seconds a side, covering the outer surfaces of all teeth. The inner surfaces matter less because the tongue helps clean them.", tip: "Keep sessions short and end while your dog is still relaxed." },
      { number: 5, title: "Make it daily", content: "Brush at the same time every day, for example after the evening walk, so it becomes routine." },
    ],
    commonMistakes: [
      { mistake: "Using human toothpaste", why: "It may contain xylitol, which is toxic to dogs, and isn't designed to be swallowed.", fix: "Use toothpaste made for pets." },
      { mistake: "Going too fast", why: "Forcing it creates a dog that runs from the brush.", fix: "Spend a week or two building up gradually, with rewards." },
      { mistake: "Brushing sore teeth", why: "Brushing a painful mouth hurts and can't fix existing disease.", fix: "Get a dental check first if gums are red or there's tartar or bad breath." },
    ],
    faqs: [
      { q: "How often should I brush my dog's teeth?", a: "Daily is ideal. If that's not possible, aim for at least three times a week." },
      { q: "Are dental chews a substitute for brushing?", a: "They can help, especially products with the VOHC seal, but brushing is more effective. Use chews alongside brushing." },
    ],
    relatedSlugs: ["dental-disease-in-dogs-and-cats", "how-to-trim-dog-nails-at-home", "complete-guide-to-pet-health"],
  },
  {
    ...base,
    slug: "how-to-litter-train-a-kitten",
    title: "How to Litter Train a Kitten in a Few Days",
    seoTitle: "How to Litter Train a Kitten: Step-by-Step",
    shortTitle: "Litter Training a Kitten",
    seoDescription: "Most kittens learn to use a litter tray quickly. The right box, litter and placement, a simple routine, and what to do about accidents.",
    tags: ["Kittens", "Cat Care", "Litter"],
    readTime: "6 Min Read",
    pillarSlug: "complete-guide-to-kitten-care",
    quickAnswer: "Kittens have a natural instinct to dig and bury, so most learn quickly. Use a low-sided box with unscented, fine litter in a quiet spot, put your kitten in the box after meals, naps and play, and keep it very clean. Have one box per cat plus one, and never punish accidents.",
    introduction: `Kittens usually start using litter at about 3 to 4 weeks old, often by copying their mother. If your kitten came from a shelter or breeder, it may already know what to do; it just needs to learn where the boxes are in its new home.

Most problems come from the set-up rather than the kitten: a box that's too high, too far away, dirty, scented or in a busy place.`,
    supplies: [
      { item: "A low-sided litter box", note: "Kittens and older cats need to step in easily. An uncovered box suits most cats." },
      { item: "Unscented, fine clumping litter", note: "Most cats prefer it. Some vets suggest non-clumping litter for very young kittens that may eat litter." },
      { item: "A scoop and enzyme cleaner", note: "For daily scooping and for cleaning accidents." },
    ],
    steps: [
      { number: 1, title: "Set up the box first", content: "Put the box in a quiet, easy-to-reach place away from food and water. For a new kitten, start with a smaller area (one room) so the box is always close by." },
      { number: 2, title: "Show your kitten the box", content: "Place your kitten in the box when it arrives and let it sniff and dig. Don't move its paws for it." },
      { number: 3, title: "Use the key moments", content: "Gently put your kitten in the box after waking, after eating and after play. Praise or give a treat when it goes." },
      { number: 4, title: "Keep it clean", content: "Scoop at least once or twice a day and refresh litter regularly. Cats avoid dirty boxes." },
      { number: 5, title: "Add boxes as your kitten explores", content: "As your kitten gets the run of the house, provide one box per cat plus one, on each floor if possible." },
    ],
    commonMistakes: [
      { mistake: "Scented litter or liners", why: "Many cats dislike strong smells and the feel of liners.", fix: "Use unscented litter and no liner." },
      { mistake: "Punishing accidents", why: "It makes the kitten afraid and more likely to hide when it goes.", fix: "Clean with an enzyme cleaner and make the box more appealing." },
      { mistake: "Putting the box next to food or in a noisy spot", why: "Cats don't like to toilet where they eat, or where they might be disturbed.", fix: "Choose a quiet, private place away from bowls." },
    ],
    faqs: [
      { q: "How long does it take to litter train a kitten?", a: "Many kittens use the box from day one; most are reliable within a few days to a couple of weeks." },
      { q: "My kitten was using the box and has stopped. Why?", a: "Check the box is clean and easy to reach, that nothing has changed (litter, location, a new pet), and see your vet to rule out diarrhoea, constipation or a urinary problem." },
    ],
    relatedSlugs: ["why-is-my-cat-peeing-outside-the-litter-box", "complete-guide-to-kitten-care", "how-to-stop-a-cat-scratching-furniture"],
  },
  {
    ...base,
    slug: "how-to-stop-a-cat-scratching-furniture",
    title: "How to Stop a Cat Scratching Furniture (Without Declawing)",
    seoTitle: "How to Stop Your Cat Scratching Furniture",
    shortTitle: "Stopping Furniture Scratching",
    seoDescription: "Scratching is normal and necessary for cats. How to redirect it to the right places with the right posts, placement and rewards.",
    tags: ["Cat Behaviour", "Cat Care"],
    readTime: "6 Min Read",
    pillarSlug: "complete-guide-to-kitten-care",
    quickAnswer: "You can't stop a cat scratching, but you can move it. Give sturdy scratching posts tall enough for a full stretch, covered in sisal, wood or rough fabric, and put them right next to the furniture they use and near where they sleep. Reward scratching on the post, make the furniture unappealing for a while, and trim claws regularly.",
    introduction: `Cats scratch to keep their claws in good shape, to stretch, and to leave scent and visual marks. The American Association of Feline Practitioners (AAFP) describes it as normal behaviour that owners should redirect rather than try to stop, and it opposes declawing as a routine solution.

Most cats scratch furniture because it's the best option available: tall, stable, in a prominent place and with a satisfying texture. Make the post better than the sofa.`,
    supplies: [
      { item: "A tall, heavy scratching post", note: "Tall enough for a full stretch and anchored so it doesn't wobble. Sisal rope and wood are popular." },
      { item: "Horizontal scratchers", note: "Some cats prefer cardboard pads on the floor." },
      { item: "Catnip, treats or a wand toy", note: "To draw your cat to the post and reward it." },
      { item: "Double-sided tape or a throw", note: "To make favourite furniture spots temporarily unappealing." },
    ],
    steps: [
      { number: 1, title: "Watch how your cat scratches", content: "Does it stretch up a sofa arm (vertical) or scratch a rug (horizontal)? Choose posts that match." },
      { number: 2, title: "Put posts where the scratching happens", content: "Place a post directly in front of the furniture your cat uses, and another near where it sleeps, because cats often scratch on waking." },
      { number: 3, title: "Make the post attractive", content: "Rub catnip on it, play with a wand toy around it, and give a treat or praise when your cat scratches it." },
      { number: 4, title: "Make the furniture less attractive", content: "Cover the spot with a throw, double-sided tape or plastic while your cat learns. Remove it gradually once the post is in regular use." },
      { number: 5, title: "Trim claws every few weeks", content: "Short claws do less damage. Soft nail caps, replaced every 4 to 6 weeks, are a temporary option for some cats." },
    ],
    commonMistakes: [
      { mistake: "A short, wobbly post", why: "Cats won't use a post that moves or doesn't let them stretch fully.", fix: "Choose a tall, heavy or wall-mounted post." },
      { mistake: "Hiding the post in a spare room", why: "Scratching is partly marking, so cats want to scratch in prominent places.", fix: "Put posts in the rooms your cat uses most." },
      { mistake: "Punishing scratching", why: "It frightens your cat and doesn't teach where to scratch.", fix: "Redirect gently to the post and reward." },
    ],
    faqs: [
      { q: "Is declawing a good solution?", a: "Declawing is surgical amputation of the end of each toe. The AAFP strongly encourages owners to try alternatives first and considers declawing only a last resort." },
      { q: "Why does my cat scratch the carpet by the door?", a: "Scratching near doorways is often marking, especially if your cat sees other cats outside. A horizontal scratcher in that spot can help." },
    ],
    relatedSlugs: ["how-to-litter-train-a-kitten", "complete-guide-to-kitten-care", "how-to-introduce-new-pet-to-resident-pets"],
  },
  {
    ...base,
    slug: "how-to-give-a-pill-to-a-dog-or-cat",
    title: "How to Give a Pill to a Dog or Cat (Without a Fight)",
    seoTitle: "How to Give Your Dog or Cat a Pill: Easy Methods",
    shortTitle: "Giving Pills to Pets",
    seoDescription: "Tricks that work for giving tablets to dogs and cats, which foods are safe to hide pills in, and why cats need water after a pill.",
    tags: ["Dog Health", "Cat Health", "Medication"],
    readTime: "6 Min Read",
    pillarSlug: "complete-guide-to-pet-health",
    quickAnswer: "Most dogs take pills hidden in a small piece of tasty food or a pill pocket; give a 'free' treat first and after. For cats, try a pill treat, or place the pill at the back of the tongue, gently close the mouth and stroke the throat, then always follow with a little water or food so the pill doesn't stick in the food pipe.",
    introduction: `Getting a full course of medicine into your pet is what makes it work. Ask your vet whether the medicine can be given with food, crushed or made into a liquid, chew or gel; many medicines can be compounded into easier forms, but some shouldn't be crushed.

For cats in particular, pills can stick in the oesophagus (food pipe) and cause irritation or narrowing, which is why vets recommend following any dry pill with a little water or food.`,
    supplies: [
      { item: "Pill pockets or a soft treat", note: "Check the ingredients: no xylitol, onion or garlic." },
      { item: "A pill popper (pill gun)", note: "Useful for cats and small dogs; ask your vet to show you." },
      { item: "A syringe of water (no needle)", note: "To give a little water after a cat's pill." },
      { item: "A towel", note: "For gently wrapping a wriggly cat." },
    ],
    steps: [
      { number: 1, title: "Check how the medicine can be given", content: "Read the label and ask your vet whether it can go with food, be split or crushed, or come as a liquid or treat form." },
      { number: 2, title: "Try food first", content: "Hide the pill in a small amount of soft food or a pill pocket. Give one plain treat, then the one with the pill, then another plain one so your pet gulps it without checking." },
      { number: 3, title: "If food doesn't work, give it by hand", content: "Hold the head from above with the nose tilted up, gently open the lower jaw, place the pill as far back on the tongue as you can (or use a pill popper), close the mouth and stroke the throat until your pet swallows." },
      { number: 4, title: "Follow with water or food (especially cats)", content: "Give about 5 ml of water by syringe into the side of the mouth, or a small amount of food, so the pill goes all the way down.", warning: "Some antibiotics can damage a cat's oesophagus if they stick, so don't skip this step." },
      { number: 5, title: "Reward", content: "Finish with a treat or play so the next dose is easier." },
    ],
    commonMistakes: [
      { mistake: "Hiding pills in a whole meal", why: "If your pet leaves some food, it misses part of the dose.", fix: "Use a small amount of food your pet will eat in one go." },
      { mistake: "Crushing pills without checking", why: "Some pills are coated or slow-release, or taste very bitter.", fix: "Ask your vet or pharmacist first." },
      { mistake: "Giving a dry pill to a cat", why: "It can stick in the oesophagus.", fix: "Follow with water or food every time." },
    ],
    faqs: [
      { q: "What can I hide my dog's pill in?", a: "Pill pockets, a small piece of cheese, plain cooked chicken or xylitol-free peanut butter work for many dogs, if your vet says the medicine can be given with food." },
      { q: "My cat won't take pills at all. What can I do?", a: "Ask your vet about liquid, chewable or transdermal (gel on the ear) versions, or a compounded flavoured form." },
    ],
    relatedSlugs: ["pet-first-aid-complete-guide", "complete-guide-to-pet-health", "chronic-kidney-disease-in-cats"],
  },
];

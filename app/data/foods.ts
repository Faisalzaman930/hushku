import type { Source } from "./tools";
import { SRC as S } from "./article-extras-data";

/**
 * "Can dogs eat …?" and "Can cats eat …?" pages. Each entry is written for one species; verdicts follow
 * ASPCA Animal Poison Control, AKC, FDA, Merck and Cornell guidance (checked October 2026).
 */
export type Species = "dogs" | "cats";
export type Verdict = "no" | "avoid" | "limit" | "yes";

export type FoodPage = {
  species: Species;
  slug: string;
  /** As it reads in "Can dogs eat {food}?" */
  food: string;
  verdict: Verdict;
  answer: string;
  why: string;
  /** For safe foods: how to offer it. */
  safely?: string[];
  /** For toxic or risky foods: what to do if your pet ate some. */
  ifAte?: string[];
  signs?: string[];
  faqs: { q: string; a: string }[];
  sources: Source[];
  tools?: string[];
  related?: string[];
};

export const FOOD_SRC = {
  akcHuman: { label: "AKC: Human foods dogs can and can't eat", url: "https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/" },
  akcFruitVeg: { label: "AKC: Fruits and vegetables dogs can and can't eat", url: "https://www.akc.org/expert-advice/nutrition/fruits-vegetables-dogs-can-and-cant-eat/" },
  fdaXylitol: { label: "FDA: Paws off xylitol; it's dangerous for dogs", url: "https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs" },
  ppnRaisins: { label: "Pet Poison Helpline: Raisins", url: "https://www.petpoisonhelpline.com/poison/raisin/" },
  vcaGrapes: { label: "VCA Animal Hospitals: Grape, raisin and currant poisoning in dogs", url: "https://vcahospitals.com/know-your-pet/grape-raisin-and-currant-poisoning-in-dogs" },
  merckMacadamia: { label: "Merck Veterinary Manual: Macadamia nut toxicosis in dogs", url: "https://www.merckvetmanual.com/toxicology/food-hazards/macadamia-nuts" },
  merckPancreatitis: { label: "Merck Veterinary Manual: Pancreatitis in dogs and cats", url: "https://www.merckvetmanual.com/digestive-system/the-exocrine-pancreas/pancreatitis-in-small-animals" },
} satisfies Record<string, Source>;
const F = FOOD_SRC;

export const VERDICT_LABEL: Record<Verdict, string> = {
  no: "No: toxic",
  avoid: "Best avoided",
  limit: "Yes, in moderation",
  yes: "Yes",
};

/** Shared emergency steps for toxic foods. */
export const POISON_STEPS = [
  "Call your vet, an emergency clinic or a pet poison line straight away, even if your pet seems fine. Many poisonings are easier to treat before signs appear.",
  "In the US: ASPCA Animal Poison Control (888) 426-4435 or Pet Poison Helpline (855) 764-7661. Both may charge a consultation fee.",
  "Note what was eaten, roughly how much and when, and keep the packaging.",
  "Don't make your pet vomit unless a vet tells you to; it isn't always safe.",
];

const DOG_GUT = ["why-is-my-dog-vomiting", "why-does-my-dog-have-diarrhea"];
const CAT_GUT = ["why-is-my-cat-vomiting", "why-does-my-cat-have-diarrhea"];

const dogs: Omit<FoodPage, "species">[] = [
  // ── Toxic ────────────────────────────────────────────────────────
  {
    slug: "grapes", food: "grapes", verdict: "no",
    answer: "No. Grapes, raisins, sultanas and currants can cause sudden kidney failure in dogs, and there's no known safe amount: some dogs have become seriously ill after eating only a few. If your dog ate any, call your vet or a poison line now.",
    why: "Grape poisoning is unpredictable. Some dogs eat grapes without problems while others develop kidney injury from small amounts, and toxicity doesn't appear to depend simply on dose. Tartaric acid is the suspected cause, but this hasn't been proven. Vomiting, often within hours, is usually the first sign, followed by kidney damage over the next one to three days. Raisins are concentrated, so they're at least as dangerous as fresh grapes, and baked goods such as raisin bread, fruit cake and trail mix count too.",
    ifAte: ["Treat it as an emergency, however few grapes or raisins your dog ate.", "Your vet may make your dog vomit and give activated charcoal, then intravenous fluids and kidney blood tests over the next 48 hours or so."],
    signs: ["Vomiting or diarrhoea, sometimes with pieces of grape or raisin", "Lethargy and weakness", "Loss of appetite", "Belly pain", "Drinking and peeing more, then peeing little or nothing (a sign of kidney failure)"],
    faqs: [
      { q: "Can one grape kill a dog?", a: "It's unlikely but not impossible. There's no established safe dose, and some dogs react to very small amounts, so vets treat any ingestion as an emergency." },
      { q: "Are grape-flavoured treats dangerous?", a: "Artificial grape flavouring doesn't contain grape flesh and isn't thought to be toxic. Real grape juice, raisins and grape-containing foods are." },
    ],
    sources: [F.ppnRaisins, F.vcaGrapes, S.aspcaFoods], tools: ["dog-ate-grapes", "toxic-food"], related: ["pet-first-aid-complete-guide", "why-is-my-dog-vomiting"],
  },
  {
    slug: "chocolate", food: "chocolate", verdict: "no",
    answer: "No. Chocolate contains theobromine and caffeine, which dogs process very slowly. Dark, baking chocolate and cocoa powder are the most dangerous; milk chocolate less so; white chocolate has very little. Use our chocolate toxicity calculator, and call your vet if your dog ate any dark chocolate or a large amount of milk chocolate.",
    why: "Theobromine and caffeine (methylxanthines) overstimulate the heart and nervous system. The ASPCA notes the darker the chocolate, the higher the risk, with baking chocolate and cocoa powder the most concentrated. Small dogs are at more risk because the dose per kilo of body weight is higher. Signs usually start within 6 to 12 hours and can last for days. Watch out for chocolate in cakes, brownies and cocoa mulch, and for chocolate products that also contain raisins, macadamia nuts or xylitol.",
    ifAte: ["Work out the type and amount with our chocolate calculator, then call your vet, especially for dark or baking chocolate.", "If it was recent, your vet may make your dog vomit and give activated charcoal."],
    signs: ["Vomiting and diarrhoea", "Restlessness, panting and hyperactivity", "Drinking and peeing more", "A racing or irregular heartbeat", "Tremors or seizures in severe cases"],
    faqs: [
      { q: "How much chocolate is toxic to a dog?", a: "It depends on the type and your dog's weight. Mild signs can start at around 20 mg of theobromine per kg; severe signs at 40–60 mg/kg. Our calculator works it out for you." },
      { q: "Is white chocolate safe for dogs?", a: "It contains very little theobromine, so poisoning is unlikely, but it's high in fat and sugar and can cause stomach upset or pancreatitis." },
    ],
    sources: [S.aspcaFoods, F.akcHuman], tools: ["chocolate-toxicity-calculator", "toxic-food"], related: ["pet-first-aid-complete-guide", "why-is-my-dog-shaking"],
  },
  {
    slug: "onions", food: "onions", verdict: "no",
    answer: "No. Onions in any form (raw, cooked, fried, dried or powdered) damage dogs' red blood cells and can cause anaemia. Signs can be delayed by several days. Watch for onion in gravy, stock, baby food, takeaways and seasoning mixes.",
    why: "Onions contain compounds that damage red blood cells, which then break down faster than the body can replace them (haemolytic anaemia). Toxicity can build up from one large meal or from small amounts eaten repeatedly. Concentrated forms such as onion powder are especially risky. The AKC notes Japanese breeds such as Akitas and Shiba Inus are more susceptible. Leeks, shallots, spring onions and chives belong to the same family and are toxic too.",
    ifAte: ["Use our onion and garlic calculator to estimate the risk, and call your vet.", "Your vet may make your dog vomit if it was recent, and check blood counts over the following days."],
    signs: ["Vomiting, diarrhoea or drooling (early)", "Pale gums", "Weakness, tiring easily or collapse", "Fast breathing or a fast heart rate", "Red or brown urine", "Signs may appear 1 to 5 days after eating"],
    faqs: [
      { q: "Can dogs eat food cooked with onion?", a: "It's best not to. Small traces are unlikely to cause problems in a large dog, but gravies, sauces and stocks can contain a lot of onion, and repeated small amounts add up." },
      { q: "Are spring onions and leeks toxic to dogs?", a: "Yes. All members of the onion family (Allium), including leeks, shallots, spring onions and chives, are toxic." },
    ],
    sources: [S.aspcaFoods, F.akcFruitVeg], tools: ["onion-garlic-toxicity-calculator", "toxic-food"], related: ["pet-first-aid-complete-guide"],
  },
  {
    slug: "garlic", food: "garlic", verdict: "no",
    answer: "No. Garlic is in the onion family and is more potent than onion. It can damage dogs' red blood cells and cause anaemia, and signs may be delayed by several days. Don't give garlic as a flea remedy or supplement.",
    why: "Like onions, garlic contains compounds that damage red blood cells. Garlic is more concentrated, so a smaller amount can cause harm, and garlic powder, garlic bread and garlic butter are common sources. The AKC lists garlic as toxic to dogs and notes symptoms may be delayed. There's no good evidence that garlic repels fleas; use a vet-recommended flea product instead.",
    ifAte: ["Use our onion and garlic calculator, and call your vet for anything more than a trace.", "Your vet may induce vomiting if it was recent and check blood counts over the following days."],
    signs: ["Vomiting, diarrhoea or drooling", "Pale gums", "Weakness and lethargy", "Fast breathing", "Red or brown urine", "Signs may start several days later"],
    faqs: [
      { q: "Is the small amount of garlic in dog treats safe?", a: "Some commercial treats contain small amounts of garlic. Most vets would rather dogs avoided it, especially small dogs and breeds that are more sensitive." },
      { q: "Does garlic keep fleas off dogs?", a: "There's no reliable evidence it does, and it risks poisoning. Use a proven flea treatment." },
    ],
    sources: [F.akcHuman, S.aspcaFoods], tools: ["onion-garlic-toxicity-calculator", "toxic-food"], related: ["how-to-get-rid-of-fleas", "pet-first-aid-complete-guide"],
  },
  {
    slug: "macadamia-nuts", food: "macadamia nuts", verdict: "no",
    answer: "No. Macadamia nuts can cause weakness (especially in the back legs), vomiting, tremors and fever in dogs, usually within 12 hours. Most dogs recover within one to two days, but call your vet, especially if the nuts were chocolate-coated.",
    why: "The cause of macadamia nut poisoning isn't known, but the Merck Veterinary Manual reports signs in dogs after about 2.4 g of nuts per kg of body weight, which is just a few nuts for a small dog. The syndrome is usually not fatal and signs generally resolve within 12 to 48 hours. The bigger dangers are cookies and chocolates that combine macadamias with chocolate, raisins or xylitol, and the high fat content, which can trigger pancreatitis.",
    ifAte: ["Call your vet. If it was recent, they may make your dog vomit.", "Check the packaging for chocolate, raisins or xylitol, which change the risk."],
    signs: ["Weakness, especially in the back legs, or wobbliness", "Vomiting", "Tremors", "Fever", "Lethargy"],
    faqs: [
      { q: "Can a dog die from eating macadamia nuts?", a: "Deaths are very rare and most dogs recover with supportive care, but treat it seriously, particularly if other toxic ingredients were involved." },
      { q: "Are other nuts toxic to dogs?", a: "Most other nuts aren't toxic but are high in fat. Mouldy walnuts and other nuts can contain toxins that cause tremors." },
    ],
    sources: [F.merckMacadamia, S.aspcaFoods], tools: ["toxic-food"], related: ["pancreatitis-in-dogs", "pet-first-aid-complete-guide"],
  },
  // ── Best avoided ─────────────────────────────────────────────────
  {
    slug: "avocado", food: "avocado", verdict: "avoid",
    answer: "It's best avoided. Avocado flesh isn't seriously toxic to dogs (persin is mainly dangerous to birds, rabbits and horses), but it's very fatty and can upset the stomach or trigger pancreatitis. The large pit can cause a blockage, and guacamole often contains onion and garlic.",
    why: "The ASPCA notes avocado is primarily a problem for birds, rabbits, horses and ruminants. For dogs, the main risks are the fat content, which can cause vomiting, diarrhoea or pancreatitis, and the stone, which can lodge in the stomach or intestine and need surgery. The skin and leaves are also best kept away from dogs.",
    ifAte: ["A small piece of flesh is unlikely to cause harm; watch for stomach upset.", "If your dog swallowed the pit, or ate guacamole, call your vet."],
    signs: ["Vomiting or diarrhoea", "Belly pain or a hunched posture (possible pancreatitis)", "Repeated vomiting and not eating (possible blockage from the pit)"],
    faqs: [{ q: "Is avocado oil safe for dogs?", a: "It's in some dog foods and isn't toxic, but like any oil it's very high in calories and fat." }],
    sources: [S.aspcaFoods, F.akcFruitVeg], tools: ["toxic-food"], related: ["pancreatitis-in-dogs", ...DOG_GUT],
  },
  {
    slug: "cherries", food: "cherries", verdict: "avoid",
    answer: "It's best avoided. Cherry flesh isn't toxic, but the pits, stems and leaves contain cyanide compounds, and pits can block a dog's intestine. It's hard to give cherries safely, so choose another fruit, such as blueberries.",
    why: "The AKC advises keeping cherry pits and plant parts away from dogs because they contain cyanide-releasing compounds, and the hard pits are a choking and blockage risk. One accidentally swallowed pit is unlikely to cause cyanide poisoning, but several pits, or a small dog, raise the risk of an obstruction. Maraschino and canned cherries are also high in sugar.",
    ifAte: ["One or two pitted cherries: no action needed beyond watching for stomach upset.", "Several pits, or any pits in a small dog: call your vet."],
    signs: ["Vomiting, constipation or not eating (possible blockage)", "Dilated pupils, bright red gums or difficulty breathing (rare signs of cyanide poisoning)"],
    faqs: [{ q: "Can dogs eat pitted cherries?", a: "A few pitted fresh cherries won't hurt, but there are safer, easier fruits." }],
    sources: [F.akcFruitVeg, S.aspcaFoods], tools: ["toxic-food"], related: DOG_GUT,
  },
  {
    slug: "almonds", food: "almonds", verdict: "avoid",
    answer: "It's best avoided. Almonds aren't toxic to dogs like macadamias, but they're hard to digest, can cause choking or a blockage, and are high in fat. Salted and flavoured almonds are worse. One dropped almond is unlikely to cause a problem.",
    why: "The AKC advises against almonds because they can obstruct the food pipe or intestines, especially in small dogs that swallow them whole. Their high fat content can cause vomiting, diarrhoea or pancreatitis, and seasoned almonds add salt, garlic or onion. Almond butter is less of a choking risk but still fatty; check it has no xylitol.",
    ifAte: ["A few almonds: watch for vomiting, diarrhoea or discomfort.", "A large amount, flavoured almonds, or signs of choking or blockage: call your vet."],
    signs: ["Vomiting or diarrhoea", "Gagging or coughing", "Not eating, or straining to poop"],
    faqs: [{ q: "Is almond milk safe for dogs?", a: "Plain, unsweetened almond milk in small amounts is unlikely to harm, but avoid sweetened versions and any with xylitol." }],
    sources: [F.akcHuman, S.aspcaFoods], tools: ["toxic-food"], related: ["pancreatitis-in-dogs", ...DOG_GUT],
  },
  {
    slug: "ice-cream", food: "ice cream", verdict: "avoid",
    answer: "It's best avoided. Ice cream is high in sugar and fat, and many dogs can't digest the lactose. Sugar-free ice cream can contain xylitol, which is very toxic, and chocolate, coffee and raisin flavours are dangerous. Try dog-safe frozen treats instead.",
    why: "The AKC advises against ice cream for dogs. Adult dogs produce little lactase, so dairy often causes diarrhoea and gas. The fat and sugar can lead to weight gain or pancreatitis. The FDA warns that xylitol appears in 'skinny' and sugar-free desserts and can cause a dangerous drop in blood sugar within 10 to 60 minutes.",
    ifAte: ["A lick of plain vanilla is unlikely to cause harm; watch for diarrhoea.", "Sugar-free (check for xylitol), chocolate, coffee or rum-raisin flavours: call your vet."],
    signs: ["Diarrhoea, gas or vomiting", "With xylitol: weakness, wobbliness, collapse or seizures"],
    faqs: [{ q: "What frozen treats can dogs have?", a: "Frozen plain yogurt (no xylitol), frozen blueberries or banana, or a stuffed chew toy frozen overnight." }],
    sources: [F.akcHuman, F.fdaXylitol], tools: ["xylitol-toxicity-calculator", "chocolate-toxicity-calculator"], related: ["why-does-my-dog-have-diarrhea"],
  },
  // ── In moderation ────────────────────────────────────────────────
  {
    slug: "cheese", food: "cheese", verdict: "limit",
    answer: "Yes, in small amounts. Plain, lower-fat cheese such as mozzarella or cottage cheese is fine as an occasional treat or to hide a pill. Avoid blue cheese and cheese with garlic, onion or herbs, and skip it for dogs that are overweight, lactose intolerant or prone to pancreatitis.",
    why: "Cheese is high in fat and calories, and some dogs can't digest lactose, which causes gas and diarrhoea. Harder, aged cheeses are lower in lactose. Mouldy blue cheeses can contain fungal toxins that cause tremors in dogs, and flavoured cheeses can contain onion, garlic or chives.",
    safely: ["Use small cubes as high-value training treats or to wrap a pill.", "Choose plain, lower-fat cheeses.", "Keep treats under 10% of daily calories.", "Stop if your dog gets loose stools."],
    faqs: [{ q: "Can dogs eat cheese every day?", a: "A tiny amount as part of their treat allowance is fine for most dogs, but it adds up quickly in small dogs." }],
    sources: [F.akcHuman, S.aspcaFoods], tools: ["calorie-calculator"], related: ["how-to-give-a-pill-to-a-dog-or-cat", "how-to-help-your-pet-lose-weight"],
  },
  {
    slug: "milk", food: "milk", verdict: "limit",
    answer: "A small amount is fine for most dogs, but it isn't needed. Many adult dogs are lactose intolerant, and milk can cause diarrhoea and gas. Water is the best drink; if you want to share, offer a few laps of plain milk and watch for loose stools.",
    why: "Puppies drink their mother's milk, but most dogs produce less lactase after weaning, so dairy can cause digestive upset. Milk is also high in fat and calories. Lactose-free milk is gentler but still unnecessary. Never give puppies cow's milk as a replacement for their mother's milk; use a puppy milk replacer if needed.",
    safely: ["Offer only a few laps, occasionally.", "Try plain yogurt or lactose-free milk if your dog seems sensitive.", "Avoid flavoured, sweetened or chocolate milk."],
    faqs: [{ q: "Can puppies drink cow's milk?", a: "No. Use a commercial puppy milk replacer for orphaned or underweight puppies." }],
    sources: [F.akcHuman, S.aspcaFoods], related: ["why-does-my-dog-have-diarrhea", "complete-guide-to-puppy-care"],
  },
  {
    slug: "peanut-butter", food: "peanut butter", verdict: "limit",
    answer: "Yes, if it doesn't contain xylitol. Plain, unsalted peanut butter is a popular treat and handy for stuffing toys or hiding pills. Always check the label for xylitol (also called birch sugar), which is very toxic to dogs, and keep portions small because it's high in fat.",
    why: "Peanuts aren't toxic to dogs, but a growing number of 'sugar-free', 'no added sugar' and 'keto' nut butters contain xylitol. The FDA warns it can drop a dog's blood sugar dangerously within 10 to 60 minutes. Peanut butter is also calorie-dense, so a spoonful can be a big part of a small dog's daily allowance.",
    safely: ["Check every new jar for xylitol or birch sugar.", "Choose unsalted, no-sugar-added peanut butter with just peanuts.", "Use a thin smear in a lick mat or chew toy, or a small amount to hide a pill.", "Count it in your dog's treat calories."],
    ifAte: ["If the peanut butter contained xylitol, call your vet or a poison line immediately."],
    faqs: [{ q: "How much peanut butter can a dog have?", a: "Think of it as a treat: about half a teaspoon for a small dog and up to a tablespoon for a large dog, not every day." }],
    sources: [F.akcHuman, F.fdaXylitol], tools: ["xylitol-toxicity-calculator", "calorie-calculator"], related: ["how-to-give-a-pill-to-a-dog-or-cat", "pancreatitis-in-dogs"],
  },
  {
    slug: "bananas", food: "bananas", verdict: "limit",
    answer: "Yes, in moderation. Bananas are a safe, low-fat treat rich in potassium, but they're high in sugar, so offer a few slices rather than a whole banana, and don't give the peel.",
    why: "The AKC lists bananas as safe for dogs in moderation. Their natural sugar means they're best as an occasional treat, especially for overweight or diabetic dogs. The peel isn't toxic but is hard to digest and can cause a blockage.",
    safely: ["Offer a few thin slices, or freeze slices for a summer treat.", "Mash a little into a chew toy.", "Remove the peel.", "Count it in your dog's treat calories."],
    faqs: [{ q: "Can bananas help a dog's upset stomach?", a: "Some owners use a little banana, but a bland diet recommended by your vet is more reliable." }],
    sources: [F.akcFruitVeg], tools: ["calorie-calculator"], related: ["how-to-help-your-pet-lose-weight"],
  },
  {
    slug: "apples", food: "apples", verdict: "yes",
    answer: "Yes. Apple slices are a crunchy, low-calorie treat for dogs. Remove the core and seeds first: the seeds contain small amounts of cyanide compounds and the core is a choking risk.",
    why: "Apples provide fibre and vitamins and are low in fat, making them a good treat for dogs watching their weight. The AKC advises removing the seeds and core. A few accidentally swallowed seeds are very unlikely to cause harm, but cores can cause choking or blockage, especially in small dogs.",
    safely: ["Wash, core and slice into bite-sized pieces.", "Plain apple only: no apple pie, caramel or sweetened apple sauce.", "Freeze slices for a cooling treat."],
    faqs: [{ q: "Can dogs eat apple skin?", a: "Yes, the skin is fine in small amounts." }],
    sources: [F.akcFruitVeg], tools: ["calorie-calculator"], related: ["how-to-help-your-pet-lose-weight"],
  },
  {
    slug: "strawberries", food: "strawberries", verdict: "limit",
    answer: "Yes, in moderation. Fresh strawberries are safe for dogs and full of fibre and vitamin C. Cut them into small pieces and offer a few at a time, as they contain natural sugar.",
    why: "The AKC lists strawberries as safe in moderation. Avoid canned strawberries and those in syrup, jam or desserts, which are high in sugar and may contain xylitol.",
    safely: ["Wash, remove the green tops and slice.", "Offer a few pieces as a treat.", "Avoid sweetened or canned strawberries."],
    faqs: [{ q: "Can puppies eat strawberries?", a: "Yes, small pieces are fine once they're eating solid food. Introduce new foods slowly." }],
    sources: [F.akcFruitVeg], tools: ["calorie-calculator"],
  },
  {
    slug: "blueberries", food: "blueberries", verdict: "yes",
    answer: "Yes. Blueberries are one of the best fruit treats for dogs: small, low in calories and rich in antioxidants and fibre. Fresh or frozen blueberries work well as training treats.",
    why: "The AKC lists blueberries as safe for dogs. Their size makes them easy to use as low-calorie rewards. Avoid blueberry muffins, pies and sweetened dried blueberries, which add sugar and fat.",
    safely: ["Offer fresh or frozen, plain blueberries.", "Halve them for very small dogs or dogs that gulp.", "Count them in your dog's treat calories."],
    faqs: [{ q: "How many blueberries can a dog eat?", a: "A small handful for a medium dog is plenty as a treat. Too many can cause loose stools." }],
    sources: [F.akcFruitVeg], tools: ["calorie-calculator"],
  },
  {
    slug: "watermelon", food: "watermelon", verdict: "yes",
    answer: "Yes. Seedless watermelon flesh is a hydrating, low-calorie summer treat for dogs. Remove the rind and seeds, which can cause stomach upset or an intestinal blockage.",
    why: "Watermelon is about 92% water and low in calories. The AKC advises removing the seeds and rind because they can cause blockages. Avoid watermelon-flavoured sweets and drinks.",
    safely: ["Cut seedless flesh into cubes.", "Freeze cubes for a hot-day treat.", "Never give the rind."],
    faqs: [{ q: "Can watermelon help keep my dog cool?", a: "Frozen cubes are a nice treat, but shade, water and avoiding the hottest hours matter far more." }],
    sources: [F.akcFruitVeg], tools: ["hot-pavement-checker"], related: ["how-to-keep-your-dog-cool-in-hot-weather"],
  },
  {
    slug: "pineapple", food: "pineapple", verdict: "limit",
    answer: "Yes, in moderation. Fresh pineapple is safe for dogs in small pieces. Remove the spiky skin and tough core, and avoid canned pineapple in syrup.",
    why: "The AKC lists pineapple as safe in moderation. It's high in natural sugar and fibre, so too much can cause diarrhoea. Some owners believe pineapple stops dogs eating poop; there's no good evidence it works.",
    safely: ["Offer a few small chunks of fresh flesh.", "Remove the skin, crown and core.", "Avoid syrup-packed canned pineapple."],
    faqs: [{ q: "Does pineapple stop dogs eating poop?", a: "There's little evidence. Picking up poop promptly works much better." }],
    sources: [F.akcFruitVeg], related: ["why-does-my-dog-eat-poop"],
  },
  {
    slug: "mango", food: "mango", verdict: "limit",
    answer: "Yes, in moderation. Peeled mango flesh is a safe, vitamin-rich treat for dogs. Remove the pit, which is a choking and blockage risk and contains small amounts of cyanide compounds, and keep portions small because of the sugar.",
    why: "The AKC lists mango as safe in moderation once the stone is removed. The skin can be hard to digest, so peel it first.",
    safely: ["Peel, remove the stone and cut into small pieces.", "Offer occasionally, a few pieces at a time."],
    faqs: [{ q: "Can dogs eat dried mango?", a: "Dried mango is much higher in sugar. Fresh is better." }],
    sources: [F.akcFruitVeg],
  },
  {
    slug: "oranges", food: "oranges", verdict: "limit",
    answer: "Yes, a segment or two. Peeled orange is safe for dogs, but it's acidic and sugary, so give only small amounts. Remove the peel and seeds, and skip it for dogs with sensitive stomachs or diabetes.",
    why: "The AKC lists oranges as safe in small amounts. The ASPCA notes citrus peels and plant parts contain oils that can irritate, though eating the fruit itself is unlikely to cause more than mild stomach upset. Many dogs don't like the taste anyway.",
    safely: ["Peel and remove seeds.", "Offer one or two segments.", "Avoid orange juice, which is concentrated sugar."],
    faqs: [{ q: "Can dogs eat clementines or mandarins?", a: "Yes, the same advice applies: a peeled segment or two." }],
    sources: [F.akcFruitVeg, S.aspcaFoods],
  },
  {
    slug: "tomatoes", food: "tomatoes", verdict: "limit",
    answer: "Ripe tomato flesh is fine in small amounts. Keep dogs away from green tomatoes, stems, leaves and tomato plants, which contain solanine. Don't share sauces or ketchup, which often contain onion, garlic and salt.",
    why: "The AKC notes ripe tomatoes are generally safe but the green parts of the plant contain solanine, which can cause stomach upset and, in larger amounts, weakness and tremors. Dogs that get into a vegetable garden are most at risk.",
    safely: ["Offer a few pieces of ripe, red tomato.", "Fence off tomato plants in the garden.", "Avoid tomato sauces, soups and ketchup."],
    ifAte: ["If your dog ate tomato plants or lots of green tomatoes, call your vet."],
    signs: ["Vomiting or diarrhoea", "Drooling", "Weakness or tremors (larger amounts of plant)"],
    faqs: [{ q: "Is tomato sauce safe for dogs?", a: "Most sauces contain onion and garlic, so it's best not to share them." }],
    sources: [F.akcFruitVeg, S.aspcaFoods], tools: ["onion-garlic-toxicity-calculator"],
  },
  {
    slug: "mushrooms", food: "mushrooms", verdict: "limit",
    answer: "Plain, store-bought mushrooms are generally fine for dogs in small amounts. Wild mushrooms are a different matter: some are deadly. If your dog ate a mushroom in the garden or on a walk, call your vet or a poison line straight away.",
    why: "The AKC notes washed, store-bought mushrooms are generally fine, but avoid mushrooms cooked with butter, garlic or onion. Wild mushrooms are hard to identify, and species such as death caps can cause fatal liver failure, with signs delayed for 6 to 24 hours.",
    safely: ["Offer plain, cooked or raw store-bought mushrooms only.", "Never share mushrooms cooked with garlic, onion or heavy butter.", "Check your garden and walk routes for wild mushrooms, especially in autumn."],
    ifAte: ["Wild mushrooms: treat as an emergency even if your dog seems fine.", "Take a photo, or a sample in a paper bag, to help identification."],
    signs: ["Vomiting and diarrhoea", "Drooling", "Wobbliness, tremors or seizures", "Yellow gums or eyes (liver damage), sometimes a day or more later"],
    faqs: [{ q: "How quickly do mushroom poisoning signs start?", a: "Some cause signs within hours; the most dangerous types may not cause signs for 6 to 24 hours, by which time the liver is already damaged." }],
    sources: [F.akcFruitVeg], tools: ["toxic-food"], related: ["pet-first-aid-complete-guide"],
  },
  {
    slug: "shrimp", food: "shrimp", verdict: "limit",
    answer: "Yes, in moderation. Plain, fully cooked shrimp with the shell, head, tail and legs removed is a safe protein treat. Don't give raw shrimp or shrimp cooked with garlic, butter or heavy seasoning.",
    why: "The AKC lists shrimp as safe in moderation if fully cooked and peeled. Raw shellfish can carry harmful bacteria, and shells and tails are a choking risk. Shrimp is fairly high in cholesterol, so keep it occasional.",
    safely: ["Cook thoroughly: boiled or steamed, unseasoned.", "Remove the shell, head, tail and legs.", "Cut into small pieces."],
    faqs: [{ q: "Can dogs eat shrimp tails?", a: "No. Tails and shells are hard and can cause choking or irritation." }],
    sources: [F.akcHuman],
  },
  {
    slug: "salmon", food: "salmon", verdict: "yes",
    answer: "Yes, if it's fully cooked, plain and boneless. Salmon is a good source of protein and omega-3 fatty acids. Never feed raw or undercooked salmon: in parts of North America it can carry a parasite that causes salmon poisoning disease, which can be fatal.",
    why: "The AKC notes raw salmon can carry parasites. Salmon poisoning disease is caused by bacteria carried by a fluke found in raw salmon and trout from the Pacific Northwest, and it can kill dogs if untreated. Cooking kills the parasite. Smoked salmon is too salty, and small bones can cause choking.",
    safely: ["Cook fully (baked, poached or steamed) without seasoning.", "Remove all bones and skin.", "Offer small portions as a treat or meal topper."],
    ifAte: ["If your dog ate raw salmon or trout, tell your vet, especially in the Pacific Northwest. Signs of salmon poisoning start about a week later."],
    faqs: [{ q: "Can dogs eat salmon skin?", a: "Cooked skin is very fatty; a small piece is fine but it isn't needed." }],
    sources: [F.akcHuman], related: ["complete-guide-to-pet-nutrition"],
  },
  {
    slug: "pork", food: "pork", verdict: "limit",
    answer: "Plain, fully cooked lean pork is fine in moderation. Avoid raw pork, fatty cuts, bacon, ham and sausages, which are high in fat and salt and can cause pancreatitis, and never give cooked pork bones.",
    why: "The AKC lists plain, trimmed, unseasoned pork as safe in moderation. Processed pork products are very salty and fatty, and fatty meals are a classic trigger for pancreatitis in dogs. Raw or undercooked pork can carry parasites, and cooked bones splinter.",
    safely: ["Cook thoroughly and trim off fat.", "No seasoning, onion or garlic.", "Small portions only; skip bacon, ham and sausage."],
    faqs: [{ q: "Can dogs eat bacon?", a: "A tiny piece won't poison a dog, but bacon is very fatty and salty and a common trigger for pancreatitis. Best avoided." }],
    sources: [F.akcHuman, F.merckPancreatitis], related: ["pancreatitis-in-dogs"],
  },
  {
    slug: "tuna", food: "tuna", verdict: "limit",
    answer: "A little, occasionally. Plain tuna canned in water is safe for dogs as an occasional treat, but tuna contains mercury, so it shouldn't be a regular part of the diet. Avoid tuna in oil, brine or with seasoning.",
    why: "The AKC lists tuna as acceptable in moderation, preferably cooked fresh tuna or canned tuna in water with no added salt. Large fish like tuna accumulate mercury, which can build up with frequent feeding.",
    safely: ["Choose tuna in water, no added salt.", "Offer a spoonful mixed into food occasionally.", "Not more than once or twice a week."],
    faqs: [{ q: "Can dogs eat tuna every day?", a: "No. Because of mercury, keep it occasional." }],
    sources: [F.akcHuman],
  },
  {
    slug: "eggs", food: "eggs", verdict: "yes",
    answer: "Yes, cooked. Fully cooked eggs (scrambled, boiled or poached, without butter, salt or seasoning) are a nutritious source of protein for dogs. Avoid raw eggs, which can carry Salmonella.",
    why: "The AKC lists eggs as safe if fully cooked. The ASPCA warns raw eggs can carry Salmonella and E. coli, which are harmful to pets and people, and raw egg whites can interfere with vitamin absorption.",
    safely: ["Cook fully with no butter, oil, salt or seasoning.", "Chop or mash for small dogs.", "Count eggs in your dog's daily calories; one egg is about 70–80 kcal."],
    faqs: [{ q: "Can dogs eat eggshells?", a: "Ground eggshell is sometimes used as a calcium source in vet-formulated home diets, but don't add it without advice." }],
    sources: [F.akcHuman, S.aspcaFoods], tools: ["calorie-calculator"],
  },
  {
    slug: "carrots", food: "carrots", verdict: "yes",
    answer: "Yes. Carrots are a low-calorie, crunchy treat that most dogs love, raw or cooked. Cut them into sticks or coins to avoid choking, especially for small dogs and gulpers.",
    why: "The AKC lists carrots as a healthy, low-calorie snack. They're a good swap for higher-calorie treats in dogs that need to lose weight. Whole large carrots can be a choking hazard.",
    safely: ["Cut into sticks or slices.", "Offer raw for crunch or cooked for older dogs with dental problems.", "Freeze for teething puppies (supervise)."],
    faqs: [{ q: "Do carrots clean dogs' teeth?", a: "They provide a little chewing, but they don't replace tooth brushing." }],
    sources: [F.akcFruitVeg], tools: ["weight-loss-calculator"], related: ["how-to-help-your-pet-lose-weight", "how-to-brush-your-dogs-teeth"],
  },
  {
    slug: "cucumbers", food: "cucumbers", verdict: "yes",
    answer: "Yes. Cucumber is a hydrating, very low-calorie treat that's ideal for overweight dogs. Slice it into small pieces to avoid choking. Pickles are different: they're salty and often contain garlic or onion.",
    why: "The AKC lists cucumbers as safe and a good option for dogs watching their weight.",
    safely: ["Wash and slice into rounds or sticks.", "Skip pickles and cucumber salads with onion or dressing."],
    faqs: [{ q: "Can dogs eat cucumber skin?", a: "Yes, it's fine." }],
    sources: [F.akcFruitVeg], tools: ["weight-loss-calculator"], related: ["how-to-help-your-pet-lose-weight"],
  },
  {
    slug: "broccoli", food: "broccoli", verdict: "limit",
    answer: "Yes, in small amounts. Plain broccoli is safe for dogs, but the florets contain compounds that can irritate the stomach in large amounts, and tough stalks can be a choking risk. Keep it to a small part of the treat allowance.",
    why: "The AKC says broccoli is safe in small quantities and that cooked broccoli is easier to digest. Large amounts can cause gas and stomach upset.",
    safely: ["Steam or boil plain, without butter or garlic.", "Chop small and avoid large stalk pieces.", "Offer a few florets at most."],
    faqs: [{ q: "Raw or cooked broccoli for dogs?", a: "Both are safe in small amounts; cooked is easier to digest." }],
    sources: [F.akcFruitVeg],
  },
  {
    slug: "sweet-potatoes", food: "sweet potatoes", verdict: "yes",
    answer: "Yes, cooked and plain. Sweet potato is a good source of fibre and vitamins for dogs. Serve it boiled, baked or steamed with no butter, sugar or spices, and don't feed it raw.",
    why: "Raw sweet potato is hard to digest and can cause blockages. Cooked sweet potato is a common ingredient in dog foods and chews. It's fairly high in starch, so portions should be small for overweight or diabetic dogs.",
    safely: ["Cook thoroughly and mash or cube.", "No butter, sugar, marshmallows or spices.", "Offer small amounts mixed into food."],
    faqs: [{ q: "Is sweet potato good for dogs with diarrhoea?", a: "Some vets use plain sweet potato or pumpkin as fibre, but ask your vet before treating diarrhoea at home." }],
    sources: [F.akcFruitVeg],
  },
  {
    slug: "pumpkin", food: "pumpkin", verdict: "yes",
    answer: "Yes. Plain, cooked pumpkin or 100% pure canned pumpkin is safe for dogs and a good source of fibre. Don't use pumpkin pie filling, which contains sugar and spices and sometimes xylitol.",
    why: "The AKC notes pure pumpkin puree can help with both diarrhoea and constipation. It's often recommended in small amounts, but it doesn't replace a vet visit for ongoing digestive problems.",
    safely: ["Use plain cooked pumpkin or 100% pure canned pumpkin.", "Start with about a teaspoon for small dogs and a tablespoon for large dogs.", "Avoid pie filling and spiced pumpkin products."],
    faqs: [{ q: "How much pumpkin should I give a dog with diarrhoea?", a: "A teaspoon to a tablespoon depending on size. If diarrhoea lasts more than a day or your dog is unwell, see your vet." }],
    sources: [F.akcFruitVeg, F.fdaXylitol], related: ["why-does-my-dog-have-diarrhea"],
  },
  {
    slug: "rice", food: "rice", verdict: "yes",
    answer: "Yes. Plain, cooked white or brown rice is safe for dogs. White rice is easy to digest, which is why vets often recommend plain rice with boiled chicken as a short-term bland diet for upset stomachs.",
    why: "Rice is a common carbohydrate in dog food. It's not toxic, but it's starchy, so it should be a small part of the diet for overweight or diabetic dogs. Avoid fried rice and rice cooked with onion, garlic or salt.",
    safely: ["Cook plain, without salt, butter or seasoning.", "For a bland diet, mix with boiled skinless chicken as your vet advises.", "Return to normal food gradually."],
    faqs: [{ q: "Is rice good for dogs with diarrhoea?", a: "A short-term bland diet of rice and chicken helps some dogs. See your vet if diarrhoea lasts more than a day or two." }],
    sources: [F.akcHuman], related: ["why-does-my-dog-have-diarrhea", "why-is-my-dog-vomiting"],
  },
  {
    slug: "bread", food: "bread", verdict: "limit",
    answer: "Plain white or wholemeal bread is safe in small amounts but offers little nutrition. Avoid raisin bread, garlic bread and bread with nuts or seeds. Raw bread dough is dangerous: it can expand in the stomach and produce alcohol.",
    why: "The AKC lists plain bread as acceptable in moderation. The ASPCA warns yeast dough can rise in the stomach, causing bloating and potentially a twisted stomach, while fermentation produces alcohol, which is toxic.",
    safely: ["A small piece of plain bread occasionally.", "No butter, spreads, garlic or raisins."],
    ifAte: ["If your dog ate raw dough, call your vet immediately."],
    signs: ["After raw dough: a swollen belly, retching without bringing anything up, wobbliness or weakness"],
    faqs: [{ q: "Can bread help if my dog swallowed something sharp?", a: "Don't rely on home remedies. Call your vet for advice." }],
    sources: [F.akcHuman, S.aspcaFoods], related: ["what-is-bloat-in-dogs"],
  },
  {
    slug: "popcorn", food: "popcorn", verdict: "limit",
    answer: "Plain, air-popped popcorn is fine as an occasional treat. Avoid buttered, salted, sweet or flavoured popcorn, and pick out unpopped kernels, which can damage teeth or get stuck.",
    why: "The AKC lists plain, air-popped popcorn as acceptable in moderation. Cinema and microwave popcorn are high in fat and salt, and kernel husks can lodge in the gums.",
    safely: ["Air-pop with no butter, oil or salt.", "Remove unpopped kernels.", "Offer a few pieces."],
    faqs: [{ q: "Is microwave popcorn safe for dogs?", a: "It's usually high in fat, salt and flavourings, so it's best not to share it." }],
    sources: [F.akcHuman],
  },
  {
    slug: "yogurt", food: "yogurt", verdict: "limit",
    answer: "Yes, plain yogurt in small amounts. Choose plain, unsweetened yogurt with no artificial sweeteners, and check the label for xylitol. Some dogs are sensitive to lactose, so start with a spoonful.",
    why: "The AKC lists plain yogurt as safe. It's lower in lactose than milk, and Greek yogurt is lower still. Flavoured and 'light' yogurts may contain sugar or xylitol.",
    safely: ["Plain, unsweetened yogurt only.", "Start with a teaspoon to a tablespoon.", "Freeze in a chew toy for a summer treat."],
    faqs: [{ q: "Does yogurt help dogs' digestion?", a: "It contains live cultures, but vet-formulated probiotics are more reliable if your dog needs one." }],
    sources: [F.akcHuman, F.fdaXylitol], tools: ["xylitol-toxicity-calculator"],
  },
  {
    slug: "corn", food: "corn", verdict: "limit",
    answer: "Corn kernels are fine for dogs in moderation, but never give a corn cob. Cobs are a common cause of intestinal blockages that need surgery. Keep plates and bins out of reach at barbecues.",
    why: "The AKC notes corn is a common dog food ingredient and safe off the cob. Cobs are hard to digest and the right size to lodge in the intestine.",
    safely: ["Plain kernels only, no butter or salt.", "A spoonful as a treat."],
    ifAte: ["If your dog swallowed a corn cob or a large piece, call your vet even if it seems fine. Signs of a blockage can take a day or more to appear."],
    signs: ["Vomiting, especially repeatedly", "Not eating", "Belly pain", "Straining or not pooping"],
    faqs: [{ q: "Will a corn cob pass on its own?", a: "Sometimes, but cobs often cause blockages. Your vet may recommend X-rays or inducing vomiting soon after it was eaten." }],
    sources: [F.akcHuman], related: ["why-is-my-dog-vomiting"],
  },
  {
    slug: "cashews", food: "cashews", verdict: "limit",
    answer: "A few plain, unsalted cashews are fine for most dogs. They're high in fat and calories, so too many can cause stomach upset, weight gain or pancreatitis. Avoid salted or flavoured cashews and nut mixes that may contain macadamias.",
    why: "The AKC lists unsalted cashews as acceptable in small amounts. The main risks are fat content and mixed nuts that include toxic macadamias.",
    safely: ["Unsalted, roasted cashews only.", "One or two for small dogs, a few for large dogs, occasionally."],
    faqs: [{ q: "Are cashews toxic to dogs?", a: "No, but they're fatty. Macadamia nuts are the ones that are toxic." }],
    sources: [F.akcHuman, F.merckPancreatitis], related: ["pancreatitis-in-dogs"],
  },
  {
    slug: "celery", food: "celery", verdict: "yes",
    answer: "Yes. Celery is a crunchy, very low-calorie snack for dogs. Cut it into small pieces, as the stringy stalks can be a choking risk for small dogs.",
    why: "The AKC lists celery as safe. It's mostly water and fibre, so it suits dogs on a weight-loss plan.",
    safely: ["Wash and chop into small pieces.", "Plain only."],
    faqs: [{ q: "Can dogs eat celery leaves?", a: "Yes, in small amounts." }],
    sources: [F.akcFruitVeg], tools: ["weight-loss-calculator"],
  },
  {
    slug: "green-beans", food: "green beans", verdict: "yes",
    answer: "Yes. Plain green beans, fresh, frozen or canned with no added salt, are a healthy, low-calorie treat for dogs. Avoid beans cooked with butter, garlic or onion.",
    why: "The AKC lists plain green beans as safe. They're often used to add bulk to a dog's diet during weight loss.",
    safely: ["Steam or serve raw, chopped.", "Choose no-salt-added canned beans.", "Use as a low-calorie treat."],
    faqs: [{ q: "Does the 'green bean diet' work for dogs?", a: "Replacing some food with green beans can help, but a measured weight-loss plan from your vet is safer and more reliable." }],
    sources: [F.akcFruitVeg], tools: ["weight-loss-calculator"], related: ["how-to-help-your-pet-lose-weight"],
  },
];

const cats: Omit<FoodPage, "species">[] = [
  {
    slug: "tuna", food: "tuna", verdict: "limit",
    answer: "A little, occasionally. Plain tuna in water is a safe treat for cats, but it isn't a complete food and contains mercury. Cats fed lots of tuna can become fussy eaters and miss out on nutrients. Avoid tuna in oil or brine.",
    why: "Human tuna lacks the balance of nutrients cats need, including enough vitamin E. Diets heavy in fish were historically linked to steatitis ('yellow fat disease'), a painful inflammation of body fat. Raw fish also contains an enzyme that destroys thiamine (vitamin B1). Tuna made for cats is formulated to avoid these problems.",
    safely: ["Offer a teaspoon of tuna in water as an occasional treat.", "Choose tuna in spring water with no added salt.", "Never make human tuna the main diet."],
    faqs: [{ q: "Can cats eat tuna every day?", a: "No. Use it as an occasional treat; a complete cat food should make up the diet." }],
    sources: [S.cornellCatNutrition, S.aspcaFoods], tools: ["calorie-calculator"], related: ["cat-nutrition-science-complete-guide"],
  },
  {
    slug: "milk", food: "milk", verdict: "avoid",
    answer: "It's best avoided. Most adult cats are lactose intolerant, and cow's milk often causes diarrhoea, gas and stomach upset. Cats only need water. If you want to treat your cat, use a lactose-free 'cat milk'.",
    why: "Kittens produce lactase to digest their mother's milk, but most cats produce much less after weaning. The ASPCA notes dairy can cause diarrhoea and digestive upset. Milk also adds calories. Never give kittens cow's milk as a replacement: use a kitten milk replacer.",
    ifAte: ["A few laps are unlikely to cause harm; watch for diarrhoea over the next day."],
    signs: ["Diarrhoea", "Vomiting", "Gas or a swollen tummy"],
    faqs: [{ q: "Why do cats like milk if it's bad for them?", a: "They like the fat. Lactose-free cat milk lets them enjoy it without the upset." }],
    sources: [S.aspcaFoods, S.cornellCatNutrition], related: ["why-does-my-cat-have-diarrhea", "complete-guide-to-kitten-care"],
  },
  {
    slug: "cheese", food: "cheese", verdict: "limit",
    answer: "A tiny piece now and then is fine for most cats, but cheese isn't a good treat. It's high in fat and salt, and many cats are lactose intolerant. Hard cheeses contain less lactose than soft cheeses. Avoid cheese with garlic, onion or chives.",
    why: "Cats get no nutritional benefit from cheese, and a small piece is a lot of calories for a cat. Dairy can cause diarrhoea in lactose-intolerant cats. A very small amount can be useful for hiding a pill.",
    safely: ["Use a pea-sized piece of hard cheese, occasionally.", "Plain cheese only.", "Try lickable cat treats instead for pills."],
    faqs: [{ q: "Can cats eat cream cheese?", a: "A tiny lick won't usually hurt, but it's high in fat and lactose." }],
    sources: [S.aspcaFoods], related: ["how-to-give-a-pill-to-a-dog-or-cat"],
  },
  {
    slug: "eggs", food: "eggs", verdict: "limit",
    answer: "Yes, cooked eggs in small amounts. Plain scrambled or boiled egg is a good source of protein for cats. Don't feed raw eggs: they can carry Salmonella, and raw egg whites interfere with a B vitamin (biotin).",
    why: "The ASPCA warns raw eggs can carry Salmonella and E. coli and that raw egg whites can interfere with vitamin absorption. Cooked egg is nutritious but shouldn't replace a complete diet.",
    safely: ["Cook fully with no butter, oil, salt or seasoning.", "Offer a teaspoon or two as a treat."],
    faqs: [{ q: "Can cats eat egg yolk?", a: "Cooked yolk is fine in small amounts." }],
    sources: [S.aspcaFoods],
  },
  {
    slug: "chicken", food: "chicken", verdict: "yes",
    answer: "Yes, cooked, plain and boneless. Chicken is an excellent treat for cats, which are obligate carnivores. Remove the skin, bones and seasoning. Don't feed raw chicken, which can carry Salmonella and Campylobacter.",
    why: "Plain cooked chicken is high in the protein cats need. Cooked bones splinter and can injure the mouth or gut, and seasonings may contain garlic or onion. Chicken alone isn't a complete diet: cats need taurine, vitamin A and other nutrients in the right balance.",
    safely: ["Boil, bake or poach without seasoning.", "Remove skin and all bones.", "Offer small pieces as a treat or topper."],
    faqs: [{ q: "Can I feed my cat only chicken?", a: "No. Plain chicken lacks essential nutrients such as calcium and the right balance of vitamins. Use a complete cat food." }],
    sources: [S.cornellCatNutrition, S.aspcaFoods], related: ["cat-nutrition-science-complete-guide", "why-is-my-cat-not-eating"],
  },
  {
    slug: "chocolate", food: "chocolate", verdict: "no",
    answer: "No. Chocolate is toxic to cats as well as dogs. It contains theobromine and caffeine, which cats can't process well. Cats are less likely to eat it, but if yours did, especially dark or baking chocolate, call your vet.",
    why: "The ASPCA notes the darker the chocolate, the greater the risk, with baking chocolate and cocoa powder the most concentrated. A cat's small size means even a small amount can be a significant dose.",
    ifAte: ["Use our chocolate calculator for a rough guide, and tell your vet the type and amount."],
    signs: ["Vomiting and diarrhoea", "Restlessness and hyperactivity", "A fast heart rate", "Tremors or seizures"],
    faqs: [{ q: "Do cats like chocolate?", a: "Cats can't taste sweetness, so they're less interested than dogs, but they may lick chocolate spreads, cocoa or drinks." }],
    sources: [S.aspcaFoods], tools: ["chocolate-toxicity-calculator", "toxic-food"], related: ["pet-first-aid-complete-guide"],
  },
  {
    slug: "grapes", food: "grapes", verdict: "no",
    answer: "No. Grapes and raisins are known to cause kidney failure in dogs, and while cases in cats are rare and less studied, vets advise keeping them away from cats too. If your cat ate any, call your vet.",
    why: "Pet Poison Helpline notes grape poisoning is mainly reported in dogs and the toxin isn't confirmed. With no known safe amount in dogs, it's sensible not to risk it in cats.",
    ifAte: ["Call your vet or a poison line for advice."],
    signs: ["Vomiting or diarrhoea", "Lethargy and not eating", "Drinking and peeing more, then less"],
    faqs: [{ q: "Are raisins worse than grapes?", a: "Raisins are concentrated, so a small handful is equivalent to more grapes." }],
    sources: [F.ppnRaisins, S.aspcaFoods], tools: ["toxic-food"], related: ["chronic-kidney-disease-in-cats"],
  },
  {
    slug: "onions", food: "onions and garlic", verdict: "no",
    answer: "No. Onions, garlic, leeks and chives are toxic to cats, and the ASPCA notes cats are more sensitive than dogs. They damage red blood cells and can cause anaemia. Watch for onion and garlic powder in baby food, gravy and leftovers.",
    why: "Onion family plants contain compounds that damage cats' red blood cells, leading to haemolytic anaemia. Repeated small amounts can add up, and concentrated powders are especially dangerous. Baby food has been a source of poisoning in cats because some contains onion or garlic powder.",
    ifAte: ["Use our onion and garlic calculator for a rough guide, and call your vet."],
    signs: ["Vomiting and drooling", "Pale gums", "Weakness and lethargy", "Fast breathing", "Red or brown urine", "Signs may be delayed by several days"],
    faqs: [{ q: "Can cats eat chicken cooked with garlic?", a: "It's best not to. Give plain, unseasoned chicken instead." }],
    sources: [S.aspcaFoods], tools: ["onion-garlic-toxicity-calculator", "toxic-food"], related: ["pet-first-aid-complete-guide"],
  },
  {
    slug: "bananas", food: "bananas", verdict: "limit",
    answer: "A small bite is safe, but bananas aren't a good food for cats. They're high in sugar and carbohydrate, which cats don't need, and cats can't taste sweetness anyway. Skip them for overweight or diabetic cats.",
    why: "Cats are obligate carnivores and get little benefit from fruit. Banana isn't toxic, but frequent sugary treats can contribute to weight gain and, in diabetic cats, upset blood sugar control.",
    safely: ["Offer no more than a small piece, occasionally.", "Not for diabetic or overweight cats."],
    faqs: [{ q: "Why does my cat like bananas?", a: "Probably the texture or curiosity. They can't taste the sugar." }],
    sources: [S.cornellCatNutrition], related: ["diabetes-in-dogs-and-cats"],
  },
  {
    slug: "cucumbers", food: "cucumber", verdict: "yes",
    answer: "Yes, a little plain cucumber is safe for cats and very low in calories. Most cats aren't interested. Please don't use cucumbers to scare cats for videos: sudden frights cause real stress.",
    why: "Cucumber is mostly water and isn't toxic to cats. As obligate carnivores, cats don't need vegetables, but a nibble does no harm.",
    safely: ["Offer a small, peeled piece if your cat is interested.", "Avoid pickles, which are salty and may contain garlic."],
    faqs: [{ q: "Why are cats scared of cucumbers?", a: "It's likely the surprise of something appearing silently behind them, not the cucumber. It causes stress, so don't do it." }],
    sources: [S.aspcaFoods], related: ["why-is-my-cat-hiding"],
  },
  {
    slug: "peanut-butter", food: "peanut butter", verdict: "avoid",
    answer: "It's best avoided. Peanut butter isn't toxic to cats, but it's very high in fat and calories, sticky enough to be a choking risk, and some brands contain xylitol. Cats get nothing from it nutritionally.",
    why: "A small lick of xylitol-free peanut butter is unlikely to cause harm, but it's an unhelpful treat for cats. The FDA says xylitol appears less dangerous for cats than dogs, but there's no reason to take the risk.",
    ifAte: ["A small lick: no action needed beyond watching for stomach upset."],
    faqs: [{ q: "Can I use peanut butter to give my cat a pill?", a: "Use a pill pocket made for cats or a lickable cat treat instead." }],
    sources: [F.fdaXylitol], related: ["how-to-give-a-pill-to-a-dog-or-cat"],
  },
  {
    slug: "yogurt", food: "yogurt", verdict: "limit",
    answer: "A small amount of plain, unsweetened yogurt is usually fine for cats. It contains less lactose than milk, but some cats still get diarrhoea. Avoid flavoured, sweetened or 'light' yogurts, which can contain sugar or sweeteners.",
    why: "Yogurt isn't toxic, but it isn't a necessary part of a cat's diet. The fermentation reduces lactose, which makes it gentler than milk.",
    safely: ["Offer a teaspoon of plain yogurt.", "Stop if your cat gets loose stools."],
    faqs: [{ q: "Is Greek yogurt better for cats?", a: "Plain Greek yogurt has less lactose, so it may be gentler, but keep it to a teaspoon." }],
    sources: [S.aspcaFoods], related: ["why-does-my-cat-have-diarrhea"],
  },
  {
    slug: "shrimp", food: "shrimp", verdict: "limit",
    answer: "Yes, cooked and plain. Peeled, cooked shrimp with the head, tail and legs removed is a tasty treat for cats in small amounts. Don't feed raw shrimp or shrimp with garlic or butter.",
    why: "Shrimp is high in protein, but also in cholesterol and sometimes sodium. Shells and tails can cause choking.",
    safely: ["Cook thoroughly without seasoning.", "Remove shell, head, tail and legs.", "One or two small pieces occasionally."],
    faqs: [{ q: "Can cats eat shrimp shells?", a: "No, they can be a choking hazard." }],
    sources: [S.aspcaFoods],
  },
  {
    slug: "salmon", food: "salmon", verdict: "limit",
    answer: "Yes, cooked, plain and boneless salmon is a good treat for cats. Don't feed raw salmon (or other raw fish) regularly: it contains an enzyme that destroys thiamine, and can carry bacteria and parasites. Smoked salmon is too salty.",
    why: "Fish is popular with cats, but diets high in fish can cause nutritional problems, and raw fish risks thiamine deficiency. Cooked salmon as an occasional treat is fine.",
    safely: ["Bake, poach or steam without seasoning.", "Remove all bones.", "Offer a small piece as a treat or topper."],
    faqs: [{ q: "Can cats eat canned salmon?", a: "Plain canned salmon in water, with bones removed, is fine occasionally." }],
    sources: [S.cornellCatNutrition, S.aspcaFoods], related: ["cat-nutrition-science-complete-guide"],
  },
  {
    slug: "dog-food", food: "dog food", verdict: "avoid",
    answer: "A few bites of dog food won't hurt a cat, but cats shouldn't eat it regularly. Dog food doesn't contain enough of the taurine, protein, vitamin A and arachidonic acid that cats need, and long-term it can cause heart disease and blindness.",
    why: "Cats are obligate carnivores with nutritional needs dogs don't share. Cornell Feline Health Center explains that cats need certain nutrients, including taurine, from animal tissue. A taurine deficiency can cause a serious heart condition (dilated cardiomyopathy) and retinal degeneration. Cat food is formulated for these needs.",
    ifAte: ["An occasional raid on the dog's bowl is nothing to worry about.", "Feed pets separately, or feed the cat somewhere high the dog can't reach."],
    faqs: [{ q: "Can dogs eat cat food?", a: "Occasionally, but cat food is richer in protein and fat and can cause stomach upset or weight gain in dogs." }],
    sources: [S.cornellCatNutrition], related: ["cat-nutrition-science-complete-guide", "how-to-introduce-new-pet-to-resident-pets"],
  },
];

export const FOODS: FoodPage[] = [
  ...dogs.map((f) => ({ ...f, species: "dogs" as const })),
  ...cats.map((f) => ({ ...f, species: "cats" as const })),
];

export const foodsFor = (species: Species) => FOODS.filter((f) => f.species === species);
export const findFood = (species: Species, slug: string) => FOODS.find((f) => f.species === species && f.slug === slug);
export const SPECIES_WORD: Record<Species, { one: string; many: string; Title: string }> = {
  dogs: { one: "dog", many: "dogs", Title: "Dogs" },
  cats: { one: "cat", many: "cats", Title: "Cats" },
};
export const GUT_GUIDES: Record<Species, string[]> = { dogs: DOG_GUT, cats: CAT_GUT };

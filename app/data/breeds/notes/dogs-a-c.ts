import type { BreedNote } from "./types";

/** Breed-specific editorial: origin and original job (p), one distinctive fact (k), known health predispositions (h). */
export const DOGS_A_C: Record<string, BreedNote> = {
  affenpinscher: {
    p: "Developed in 17th-century Germany to catch rats in stables, kitchens and shops, the Affenpinscher later moved indoors as a ladies' lapdog. Its name means \"monkey terrier\", a nod to its whiskered, expressive face.",
    k: "Despite toy size, it keeps a terrier's confidence and will stand its ground with much larger dogs.",
    h: ["patellar luxation", "Legg-Calvé-Perthes disease", "collapsing trachea", "dental crowding"],
  },
  "afghan-hound": {
    p: "An ancient sighthound from the mountains of Afghanistan, bred to course gazelle, hare and even snow leopard across rough terrain. The long silky coat protected it from cold mountain nights.",
    k: "It hunts by sight and will chase anything that runs, so recall off lead is rarely reliable.",
    h: ["hip dysplasia", "juvenile cataracts", "hypothyroidism", "sensitivity to anaesthesia"],
  },
  "airedale-terrier": {
    p: "Bred in the Aire Valley of Yorkshire in the mid-1800s by crossing Otterhounds with old working terriers, to hunt otters and rats along the river. At up to 23 inches it is the largest terrier, nicknamed the King of Terriers.",
    k: "Airedales served as messenger and sentry dogs in the First World War and were among the first police dogs in Britain.",
    h: ["hip dysplasia", "hypothyroidism", "skin allergies", "colonic disease"],
  },
  akbash: {
    p: "A Turkish livestock guardian from the Akbaş region, bred to live with flocks and drive off wolves and bears. Its white coat helped shepherds tell the dog apart from predators at night.",
    k: "It is an independent thinker built to make decisions without a handler, which makes formal obedience slow work.",
    h: ["hip dysplasia", "bloat (gastric dilatation-volvulus)", "hypothyroidism"],
  },
  akita: {
    p: "From the mountainous Akita prefecture of northern Japan, where it hunted bear, boar and deer and later guarded nobility. It is a national monument in Japan, and Hachikō, who waited years for his late owner at Shibuya Station, was an Akita.",
    k: "Akitas are often intolerant of other dogs of the same sex, so they usually do best as the only dog.",
    h: ["hip dysplasia", "progressive retinal atrophy", "autoimmune thyroiditis", "bloat", "sebaceous adenitis"],
  },
  "alaskan-klee-kai": {
    p: "Created in Alaska in the 1970s by Linda Spurlin, who set out to produce a companion-sized dog with the look of a Siberian Husky. It comes in toy, miniature and standard sizes.",
    k: "Klee Kai are often wary of strangers, unlike the friendly Husky they resemble.",
    h: ["patellar luxation", "factor VII deficiency", "juvenile cataracts", "cardiac issues"],
  },
  "alaskan-malamute": {
    p: "One of the oldest Arctic sled dogs, bred by the Mahlemut Inuit of north-western Alaska to haul heavy loads over long distances. It was built for strength and stamina rather than racing speed.",
    k: "Malamutes rarely bark but are known for howling and \"talking\".",
    h: ["hip dysplasia", "chondrodysplasia", "inherited polyneuropathy", "hypothyroidism", "cataracts"],
  },
  "american-bulldog": {
    p: "Descended from the working bulldogs brought to the American South by English settlers, where it caught loose cattle and hogs and guarded farms. Breeders such as John D. Johnson and Alan Scott revived it after the Second World War.",
    k: "It is far more athletic than the modern English Bulldog and can jump surprisingly high.",
    h: ["hip and elbow dysplasia", "neuronal ceroid lipofuscinosis", "ichthyosis", "cherry eye"],
  },
  "american-english-coonhound": {
    p: "Developed in the American South from English foxhounds brought by early settlers, adapted to trail raccoons and tree them at night. It was once called the Virginia Hound.",
    k: "It has a loud, ringing bay that carries for long distances, which is how hunters followed it at night.",
    h: ["hip dysplasia", "ear infections", "progressive retinal atrophy"],
  },
  "american-eskimo-dog": {
    p: "Descended from German Spitz dogs brought by immigrants to the United States. Despite the name, it has no Inuit link; the name changed during the First World War to avoid German associations, and the breed became a travelling circus star.",
    k: "It comes in toy, miniature and standard sizes, all with the same thick white double coat.",
    h: ["progressive retinal atrophy", "hip dysplasia", "patellar luxation", "juvenile diabetes"],
  },
  "american-foxhound": {
    p: "One of the oldest American breeds, developed in Virginia and Maryland from English hounds, with George Washington among its early breeders. It was bred lighter and faster than the English Foxhound to run the rougher American country.",
    k: "Bred to run in packs for hours, it can be noisy and frustrated when kept alone.",
    h: ["thrombocytopathy", "hip dysplasia", "ear infections"],
  },
  "american-hairless-terrier": {
    p: "Descends from a single hairless puppy born in a Rat Terrier litter in Louisiana in 1972. The Scott family bred from her, creating the only hairless breed developed in the United States.",
    k: "It is often tolerated by people with dog allergies, though no dog is truly allergen-free; it needs sunscreen and a coat in cold weather.",
    h: ["sunburn and skin irritation", "patellar luxation", "Legg-Calvé-Perthes disease"],
  },
  "american-leopard-hound": {
    p: "A treeing hound developed in the American South and Appalachia from dogs brought by Spanish and other settlers, used to tree raccoons, bobcats and bears. It is named for its leopard-like spotted (merle) coat.",
    k: "Dogs carrying two copies of the merle gene can be born deaf or with eye defects, so responsible breeders avoid merle-to-merle pairings.",
    h: ["hip dysplasia", "deafness and eye defects in double merles", "ear infections"],
  },
  "american-pit-bull-terrier": {
    p: "Descended from the bull-and-terrier dogs of 19th-century Britain and Ireland, brought to the United States, where it was used as a farm and catch dog. It is recognised by the UKC but not the AKC.",
    k: "Strongly people-oriented, it is one of the breeds most affected by breed-specific legislation, so check local rules and rental policies.",
    h: ["hip dysplasia", "skin allergies", "hypothyroidism", "cerebellar ataxia", "heart disease"],
  },
  "american-staffordshire-terrier": {
    p: "Shares its roots with the American Pit Bull Terrier but was registered separately by the AKC in 1936 and bred to a heavier, more uniform show standard.",
    k: "Breed-specific legislation in some places covers the AmStaff, so check local rules and rental policies before getting one.",
    h: ["hip dysplasia", "cerebellar ataxia", "skin allergies", "hypothyroidism"],
  },
  "american-water-spaniel": {
    p: "Developed in the Great Lakes region of Wisconsin and Michigan in the 1800s to retrieve ducks from small boats. It is the state dog of Wisconsin.",
    k: "Its curly, oily coat sheds water, and it is small enough to be lifted in and out of a canoe.",
    h: ["hip dysplasia", "progressive retinal atrophy", "allergies", "growth hormone-responsive alopecia"],
  },
  "anatolian-shepherd-dog": {
    p: "An ancient livestock guardian from the Anatolian plateau of Turkey, bred to protect sheep and goats from wolves and bears. Namibia's Cheetah Conservation Fund now uses it to protect herds, which keeps farmers from shooting cheetahs.",
    k: "It is territorial and protective by instinct, so early socialisation is essential.",
    h: ["hip dysplasia", "entropion", "hypothyroidism", "sensitivity to anaesthesia"],
  },
  "appenzeller-sennenhunde": {
    p: "One of the four Swiss mountain dogs, from the Appenzell region, used to herd cattle, pull carts and guard farms. It is the most agile and energetic of the four.",
    k: "Its tightly curled tail and loud bark set it apart from its Swiss cousins.",
    h: ["hip and elbow dysplasia", "bloat"],
  },
  "australian-cattle-dog": {
    p: "Developed in 19th-century New South Wales by crossing herding dogs with dingoes, to move cattle over vast, hot distances. It herds by nipping at heels, which is why it is also called the Heeler.",
    k: "Bluey, an Australian Cattle Dog, holds the Guinness record for the oldest dog at 29 years.",
    h: ["hereditary deafness", "progressive retinal atrophy", "hip dysplasia", "primary lens luxation"],
  },
  "australian-kelpie": {
    p: "Bred in Australia in the late 1800s from Scottish collies to work sheep across huge stations in heat and dust. It famously runs across the backs of tightly packed sheep to reach the front of the mob.",
    k: "Working Kelpies can cover dozens of kilometres a day, so pet homes need serious daily work for them.",
    h: ["hip dysplasia", "progressive retinal atrophy", "cerebellar abiotrophy"],
  },
  "australian-shepherd": {
    p: "Despite the name, the breed was developed in the western United States, from shepherd dogs that probably came with Basque herders via Australia. It became the cowboy's working dog on ranches and in rodeos.",
    k: "Many carry the MDR1 gene mutation, which makes common drugs such as ivermectin dangerous, so test before treatment.",
    h: ["MDR1 drug sensitivity", "hip dysplasia", "epilepsy", "collie eye anomaly", "hereditary cataracts"],
  },
  "australian-stumpy-tail-cattle-dog": {
    p: "An Australian working dog that probably shares early ancestry with the Australian Cattle Dog, bred for cattle work in tough conditions. It is born with a naturally short or absent tail.",
    k: "It is leaner and leggier than the Australian Cattle Dog and is rarely seen outside Australia.",
    h: ["hereditary deafness", "progressive retinal atrophy", "hip dysplasia"],
  },
  "australian-terrier": {
    p: "One of the first breeds developed in Australia, from British terriers brought by settlers, to kill snakes and rodents and guard homesteads. It is among the smallest working terriers.",
    k: "It keeps a ruff of longer hair around the neck and a soft topknot.",
    h: ["patellar luxation", "diabetes", "Legg-Calvé-Perthes disease", "allergies"],
  },
  azawakh: {
    p: "A sighthound from the Sahel region of West Africa, kept by Tuareg and Fulani nomads to hunt gazelle and hare and guard camps. Its very lean build and long legs help it cope with desert heat.",
    k: "It is aloof with strangers and deeply bonded to its own people, more guardian than social butterfly.",
    h: ["seizures", "hypothyroidism", "autoimmune disorders", "wobbler syndrome"],
  },
  barbet: {
    p: "A French water dog with a dense curly coat, used for centuries to retrieve waterfowl from marshes. Its name comes from barbe, French for beard.",
    k: "The Barbet is part of the ancestry of the Poodle and several other water dogs.",
    h: ["hip dysplasia", "ear infections", "epilepsy"],
  },
  basenji: {
    p: "An ancient hunting dog from the Congo basin of Central Africa, used to flush game into nets. Images of similar dogs appear in ancient Egyptian art.",
    k: "Known as the barkless dog: it makes a yodel-like sound called a barroo instead of barking, and it grooms itself like a cat.",
    h: ["Fanconi syndrome", "progressive retinal atrophy", "hypothyroidism", "immunoproliferative enteropathy"],
  },
  "basset-fauve-de-bretagne": {
    p: "A small French scenthound from Brittany, bred to hunt rabbit and hare in packs through dense undergrowth. Its name refers to its fawn colour and short legs.",
    k: "It is quicker and more agile than the better-known Basset Hound.",
    h: ["ear infections", "epilepsy"],
  },
  "basset-hound": {
    p: "Bred in France to trail rabbits and hares on foot, its short legs keep it slow enough for hunters to follow. Its scenting ability is second only to the Bloodhound's.",
    k: "Long ears sweep scent toward the nose, but they also trap moisture and need regular cleaning.",
    h: ["intervertebral disc disease", "ear infections", "glaucoma", "bloat", "obesity"],
  },
  "bavarian-mountain-scent-hound": {
    p: "Developed in Bavaria in the 1800s to track wounded deer and boar through mountain terrain, often days after the shot. It is still used mainly by hunters and foresters.",
    k: "It is a specialist tracker that bonds closely with one handler.",
    h: ["hip dysplasia", "ear infections"],
  },
  beagle: {
    p: "A pack hound developed in England to hunt rabbit and hare, followed by hunters on foot. Its excellent nose has made it the classic airport sniffer dog in the US Beagle Brigade.",
    k: "It follows its nose first and commands second, so a secure fence and lead are a must.",
    h: ["hypothyroidism", "epilepsy", "intervertebral disc disease", "cherry eye", "obesity"],
  },
  "bearded-collie": {
    p: "A Scottish herding dog descended from Polish Lowland Sheepdogs brought to Scotland in the 1500s, used to drive sheep and cattle in hill country. Its long shaggy coat suits wet Highland weather.",
    k: "Beardies are known for a bouncing, exuberant way of moving, and they herd with their voice as well as their body.",
    h: ["hip dysplasia", "hypothyroidism", "Addison's disease", "autoimmune skin disease"],
  },
  "bedlington-terrier": {
    p: "From the mining town of Bedlington in Northumberland, England, where it hunted rats, rabbits and badgers. Its arched back and speed hint at whippet in its ancestry.",
    k: "It looks like a lamb but has a true terrier's grit.",
    h: ["copper storage hepatopathy", "retinal dysplasia", "patellar luxation"],
  },
  "belgian-laekenois": {
    p: "The rarest of the four Belgian shepherds, named after the Château de Laeken, where it guarded linen left to bleach in the fields. It has a rough, tousled coat.",
    k: "Like its Malinois cousin, it is highly alert and needs a real job.",
    h: ["hip and elbow dysplasia", "epilepsy", "eye disease"],
  },
  "belgian-malinois": {
    p: "A Belgian herding dog from the Malines (Mechelen) region, now best known as the leading dog for police, military and special forces work worldwide.",
    k: "Its drive and intensity make it a poor fit for most family homes without serious daily training.",
    h: ["hip and elbow dysplasia", "progressive retinal atrophy", "epilepsy"],
  },
  "belgian-sheepdog": {
    p: "The long-haired black Belgian shepherd, also called the Groenendael after the village where it was refined. It served as a messenger, ambulance and sentry dog in the First World War.",
    k: "It is sensitive and highly bonded, and does not like being left out of family life.",
    h: ["hip and elbow dysplasia", "epilepsy", "hypothyroidism", "progressive retinal atrophy"],
  },
  "belgian-tervuren": {
    p: "The long-coated, fawn-to-mahogany Belgian shepherd from the village of Tervuren, bred to herd and guard flocks. It is a frequent winner in agility and herding trials.",
    k: "It is watchful and sensitive, so harsh training backfires.",
    h: ["epilepsy", "hip and elbow dysplasia", "hypothyroidism", "progressive retinal atrophy"],
  },
  "bergamasco-sheepdog": {
    p: "An Italian herding dog from the Alps around Bergamo, bred to work sheep in mountain pastures. Its coat forms flat felted mats, called flocks, that protect it from cold and predators.",
    k: "The mats are never brushed out; they are separated by hand while they form, then need little upkeep.",
    h: ["hip dysplasia", "bloat"],
  },
  "berger-picard": {
    p: "One of the oldest French herding breeds, from Picardy in the north. It nearly vanished after both World Wars were fought across its home region.",
    k: "It starred as Winn-Dixie in the film Because of Winn-Dixie.",
    h: ["hip dysplasia", "progressive retinal atrophy", "retinal dysplasia"],
  },
  "bernese-mountain-dog": {
    p: "A Swiss farm dog from the canton of Bern, used to pull carts of milk and cheese to market, drive cattle and guard farms. It is the only Swiss mountain dog with a long coat.",
    k: "Its life expectancy is short, often 7 to 9 years, mostly because of high cancer rates.",
    h: ["histiocytic sarcoma and other cancers", "hip and elbow dysplasia", "degenerative myelopathy", "bloat"],
  },
  "bichon-frise": {
    p: "Descended from Mediterranean water spaniels, it became a favourite of Spanish sailors, Italian nobles and the French court before working as a street and circus performer.",
    k: "Its curly coat sheds little but must be brushed often and clipped every 4 to 6 weeks to prevent mats.",
    h: ["allergies", "bladder stones", "patellar luxation", "dental disease", "cataracts"],
  },
  "biewer-terrier": {
    p: "Developed in Germany in 1984 by Werner and Gertrud Biewer from a piebald puppy born to their Yorkshire Terriers. DNA tests show it is a distinct breed.",
    k: "It is one of the newest breeds recognised by the AKC, which admitted it in 2021.",
    h: ["patellar luxation", "portosystemic shunt", "dental crowding"],
  },
  "black-and-tan-coonhound": {
    p: "An American scenthound developed from Bloodhounds and Foxhounds to trail raccoons at night and bay when the quarry is treed. It was the first coonhound recognised by the AKC, in 1945.",
    k: "Its deep bay is loud and carries, which neighbours notice.",
    h: ["hip dysplasia", "ear infections", "ectropion"],
  },
  "black-mouth-cur": {
    p: "A rugged farm and hunting dog from the American South, used to herd cattle and hogs, hunt squirrel and boar and guard the homestead. It is named for the black pigment around its muzzle.",
    k: "Old Yeller, in the novel and film, is widely thought to have been a Black Mouth Cur.",
    h: ["hip dysplasia", "ear infections", "epilepsy"],
  },
  "black-russian-terrier": {
    p: "Bred by the Soviet army's Red Star kennel in the 1950s from Giant Schnauzers, Rottweilers and other breeds, to guard military sites in harsh climates. It is a terrier in name only.",
    k: "It was bred to be a calm, steady guard, which suits experienced owners.",
    h: ["hip and elbow dysplasia", "juvenile laryngeal paralysis", "hyperuricosuria"],
  },
  bloodhound: {
    p: "Bred in medieval Europe, especially at the monastery of Saint-Hubert in Belgium, to track deer and boar by scent. Its tracking is reliable enough that its finds have been accepted as evidence in court.",
    k: "Its loose skin and long ears help trap scent, and it can follow a trail several days old.",
    h: ["bloat", "hip and elbow dysplasia", "entropion and ectropion", "ear infections"],
  },
  "blue-lacy": {
    p: "Developed in Texas in the 1850s by the Lacy brothers to herd hogs and cattle and to track game. It is the state dog of Texas.",
    k: "Despite the name, it can be blue, red or tri-coloured.",
    h: ["colour dilution alopecia", "hip dysplasia", "skin allergies"],
  },
  "bluetick-coonhound": {
    p: "An American coonhound from Louisiana and the Ozarks, descended from French and English hounds, bred to trail and tree raccoons. It is named for its black-ticked blue coat.",
    k: "It has a particularly loud bawl and tends to follow scent rather than calls.",
    h: ["hip dysplasia", "ear infections", "lysosomal storage disease"],
  },
  boerboel: {
    p: "A South African mastiff developed by Dutch, German and Huguenot settlers to guard isolated farms against leopards, lions and intruders. Boer means farmer.",
    k: "It is strong and territorial, and needs an experienced, consistent owner.",
    h: ["hip and elbow dysplasia", "entropion and ectropion", "vaginal hyperplasia"],
  },
  "bohemian-shepherd": {
    p: "An old herding and guard dog from the Chodsko region of Bohemia, now part of the Czech Republic. It guarded the Bohemian borders for centuries.",
    k: "It is smaller and lighter than the German Shepherd and known for being easy to train.",
    h: ["hip dysplasia", "allergies"],
  },
  bolognese: {
    p: "An Italian companion dog from Bologna, closely related to the Bichon Frise and kept by Renaissance nobles, including the Medici. It was given as a prized gift between royal courts.",
    k: "Calmer and more reserved than the Bichon, it has a fluffy coat without a tight curl.",
    h: ["patellar luxation", "dental disease", "eye problems"],
  },
  "border-collie": {
    p: "Developed in the border country between Scotland and England to herd sheep. It works by \"eye\", controlling sheep with an intense stare. Old Hemp, born in 1893, is regarded as the founder of the modern breed.",
    k: "A Border Collie named Chaser learned the names of more than 1,000 toys.",
    h: ["collie eye anomaly", "hip dysplasia", "epilepsy", "trapped neutrophil syndrome", "MDR1 drug sensitivity in some lines"],
  },
  "border-terrier": {
    p: "From the Cheviot Hills on the English–Scottish border, bred to run with foxhounds and bolt foxes from their dens. Its long legs keep pace with horses.",
    k: "It is one of the gentlest terriers with people but will chase small animals.",
    h: ["canine epileptoid cramping syndrome (Spike's disease)", "hip dysplasia", "hypothyroidism", "patellar luxation"],
  },
  borzoi: {
    p: "The Russian wolfhound, bred by the Russian aristocracy to hunt wolves in teams across open country. Large hunts could include more than a hundred Borzoi.",
    k: "It is quiet and catlike indoors but has explosive speed outside.",
    h: ["bloat", "dilated cardiomyopathy", "osteosarcoma", "sensitivity to anaesthesia"],
  },
  "boston-terrier": {
    p: "Created in Boston in the 1870s from a cross between an English Bulldog and a white English terrier. It is nicknamed the American Gentleman for its tuxedo markings.",
    k: "Its flat face makes it prone to breathing trouble and overheating, so take care in hot weather.",
    h: ["brachycephalic obstructive airway syndrome", "corneal ulcers", "cataracts", "patellar luxation", "deafness"],
  },
  "bouvier-des-flandres": {
    p: "A Flemish farm dog used to drive cattle, pull carts and guard property. It almost disappeared in the First World War, when it served as an ambulance and messenger dog.",
    k: "Its name means cow herder of Flanders, and it has a rough, weatherproof coat.",
    h: ["hip and elbow dysplasia", "glaucoma", "hypothyroidism", "subaortic stenosis"],
  },
  boxer: {
    p: "Developed in Munich in the late 1800s from the Bullenbeisser, a mastiff-type hunting dog, crossed with English Bulldogs. Boxers were among the first breeds used as police and military dogs in Germany.",
    k: "It is famously clownish and stays playful well past puppyhood.",
    h: ["boxer cardiomyopathy (ARVC)", "mast cell tumours and other cancers", "hip dysplasia", "degenerative myelopathy", "brachycephalic airway issues"],
  },
  "boykin-spaniel": {
    p: "Developed in South Carolina in the early 1900s to flush and retrieve wild turkey and waterfowl from small boats in the Wateree River swamps. It is the state dog of South Carolina.",
    k: "It is compact enough to share a small boat without tipping it.",
    h: ["exercise-induced collapse", "hip dysplasia", "collie eye anomaly", "patellar luxation"],
  },
  "bracco-italiano": {
    p: "An ancient Italian pointing dog depicted in Renaissance frescoes, bred to point and retrieve game birds. It nearly died out in the 1800s before Italian breeders revived it.",
    k: "It works at a distinctive extended trot with its nose held high.",
    h: ["hip and elbow dysplasia", "entropion and ectropion", "kidney disease"],
  },
  "braque-du-bourbonnais": {
    p: "A French pointing dog from the Bourbonnais region, known since the 1500s. It nearly died out after the Second World War and was rebuilt from a few dogs in the 1970s.",
    k: "Many are born with a naturally short tail.",
    h: ["hip dysplasia", "entropion", "ear infections"],
  },
  briard: {
    p: "A French herding and guard dog from the Brie region, depicted in tapestries from the 8th century. It served as a sentry and medic's helper in the First World War.",
    k: "Briards have double dewclaws on their hind legs, which the breed standard requires.",
    h: ["hip dysplasia", "bloat", "congenital stationary night blindness", "progressive retinal atrophy"],
  },
  brittany: {
    p: "A French gundog from Brittany, bred to point and retrieve game birds. It is one of the most versatile and popular hunting breeds in field trials.",
    k: "Many are born with a naturally short or absent tail.",
    h: ["hip dysplasia", "epilepsy", "hypothyroidism"],
  },
  broholmer: {
    p: "A Danish mastiff-type dog that guarded estates and farms and hunted deer for Danish nobility in the Middle Ages. It almost disappeared after the Second World War and was revived in the 1970s from a few dogs.",
    k: "It is a calm but watchful guardian, and its size and strength suit experienced owners.",
    h: ["hip and elbow dysplasia", "bloat", "heart disease"],
    g: "Working Dogs",
  },
  "brussels-griffon": {
    p: "Developed in Brussels in the 1800s to keep stables free of rats, then crossed with Pugs and toy spaniels to become a lapdog of Belgian royalty.",
    k: "Its expressive, almost human face is said to have inspired the look of Chewbacca.",
    h: ["brachycephalic airway issues", "syringomyelia", "patellar luxation", "eye injuries"],
  },
  "bull-terrier": {
    p: "Created in Birmingham, England, around 1860 by James Hinks from Bulldogs, terriers and Dalmatians, as a white \"gentleman's companion\". It has the only egg-shaped head among recognised breeds.",
    k: "Some develop compulsive behaviours such as tail chasing, so mental exercise matters.",
    h: ["hereditary deafness (especially in white dogs)", "polycystic kidney disease", "lethal acrodermatitis", "compulsive tail chasing", "mitral valve dysplasia"],
  },
  bulldog: {
    p: "Descends from the English bull-baiting dogs banned in 1835, then refined into a companion dog with a much gentler temperament. It is the mascot of countless schools and the US Marine Corps.",
    k: "Its flat face makes heat and hard exercise dangerous; most puppies are born by caesarean section.",
    h: ["brachycephalic obstructive airway syndrome", "hip dysplasia", "cherry eye", "skin fold dermatitis", "heat intolerance"],
  },
  bullmastiff: {
    p: "Developed in England in the 1800s by crossing Mastiffs with Bulldogs, to catch and hold poachers on large estates without mauling them. Gamekeepers called it the gamekeeper's night dog.",
    k: "It is quiet and calm indoors and rarely barks without reason.",
    h: ["hip and elbow dysplasia", "bloat", "lymphoma", "entropion", "hypothyroidism"],
  },
  "cairn-terrier": {
    p: "One of the oldest Scottish terriers, from the Isle of Skye and the Highlands, bred to dig out foxes and rodents from piles of stones called cairns. Toto in The Wizard of Oz was a Cairn.",
    k: "Cairns love to dig, so a garden needs secure fencing at ground level.",
    h: ["Legg-Calvé-Perthes disease", "craniomandibular osteopathy", "globoid cell leukodystrophy", "ocular melanosis"],
  },
  "canaan-dog": {
    p: "A pariah-type dog native to the Middle East that lived wild for centuries. Dr Rudolphina Menzel domesticated it in the 1930s to guard settlements and work with the Israeli army; it is Israel's national dog.",
    k: "It is naturally wary of strangers and a keen, loud watchdog.",
    h: ["hip dysplasia", "epilepsy", "hypothyroidism"],
  },
  "cane-corso": {
    p: "An Italian mastiff descended from Roman war dogs, used for centuries to guard farms, hunt wild boar and drive cattle. It nearly vanished in the mid-1900s before Italian breeders revived it.",
    k: "It is a serious guardian, so socialisation and an experienced owner are essential.",
    h: ["hip and elbow dysplasia", "bloat", "eyelid problems (entropion, ectropion, cherry eye)", "idiopathic epilepsy"],
  },
  "cardigan-welsh-corgi": {
    p: "The older of the two corgis, brought to Cardiganshire in Wales by Celtic tribes around 1200 BC. It drove cattle to market by nipping their heels and ducking their kicks.",
    k: "Unlike the Pembroke, it has a long, fox-like tail.",
    h: ["intervertebral disc disease", "degenerative myelopathy", "hip dysplasia", "progressive retinal atrophy", "obesity"],
  },
  "carolina-dog": {
    p: "A primitive dog found living wild in the swamps and pine forests of the south-eastern United States, sometimes called the American dingo. Genetic studies suggest roots in dogs that came with early people crossing from Asia.",
    k: "It is independent and pack-minded, and often reserved with strangers.",
    h: ["generally robust; few breed-specific conditions are recorded"],
  },
  "catahoula-leopard-dog": {
    p: "From Catahoula Parish in Louisiana, bred to round up wild hogs and cattle in swamps and forests. It is the state dog of Louisiana.",
    k: "Its merle coat and pale \"glass\" eyes are striking, but merle-to-merle pairings risk deafness and blindness.",
    h: ["hereditary deafness", "hip dysplasia", "eye defects in double merles"],
  },
  "caucasian-shepherd-dog": {
    p: "An ancient livestock guardian from the Caucasus mountains of Georgia, Armenia and Azerbaijan, bred to protect flocks from wolves and bears. It later guarded Soviet military sites and borders.",
    k: "It is extremely protective and suits only experienced owners with secure property.",
    h: ["hip and elbow dysplasia", "obesity", "heart disease"],
  },
  "cavalier-king-charles-spaniel": {
    p: "Named after King Charles II, who kept toy spaniels at court. The modern breed was recreated in the 1920s to match the longer-nosed spaniels in old paintings.",
    k: "Most Cavaliers develop mitral valve disease, so choose a breeder who heart-tests parents every year.",
    h: ["mitral valve disease", "syringomyelia", "hip dysplasia", "episodic falling", "dry eye"],
  },
  "central-asian-shepherd-dog": {
    p: "An ancient livestock guardian from the steppes of Central Asia, bred by nomads in Turkmenistan, Uzbekistan and Kazakhstan to protect herds from wolves. In Turkmenistan it is called the Alabai and is a national symbol.",
    k: "It is a powerful independent guardian and needs an experienced owner.",
    h: ["hip and elbow dysplasia", "obesity"],
  },
  "cesky-terrier": {
    p: "Created in Czechoslovakia in the 1940s by geneticist František Horák, who crossed Scottish and Sealyham Terriers for a lighter, pack-friendly hunting terrier.",
    k: "It is calmer and less combative than most terriers.",
    h: ["Scottie cramp", "patellar luxation", "lens luxation"],
  },
  "chesapeake-bay-retriever": {
    p: "Developed in Maryland in the 1800s from two Newfoundland-type puppies rescued from a shipwreck in 1807. It was bred to retrieve ducks from the cold, rough waters of Chesapeake Bay.",
    k: "Its oily, wavy coat is nearly waterproof, and it is more protective than other retrievers.",
    h: ["hip dysplasia", "degenerative myelopathy", "progressive retinal atrophy", "exercise-induced collapse"],
  },
  chihuahua: {
    p: "Named after the Mexican state of Chihuahua, where it was found in the 1800s. It probably descends from the Techichi, a small dog kept by the Toltec and Aztec peoples.",
    k: "It is the smallest recognised breed, and many have a soft spot on the skull (a molera).",
    h: ["patellar luxation", "dental crowding and disease", "collapsing trachea", "hydrocephalus", "mitral valve disease"],
  },
  "chinese-crested": {
    p: "A toy breed that may descend from African hairless dogs. It was carried on Chinese trading ships to catch rats. It comes in hairless and coated (Powderpuff) varieties, sometimes in the same litter.",
    k: "Hairless dogs need sunscreen and coats; they have often won the World's Ugliest Dog contest.",
    h: ["dental problems (especially in hairless dogs)", "primary lens luxation", "progressive retinal atrophy", "skin problems"],
  },
  "chinese-shar-pei": {
    p: "An ancient Chinese breed from Guangdong, used to guard, hunt and fight. It came close to extinction in the 1970s before a Hong Kong breeder appealed for help in an American magazine.",
    k: "It has a blue-black tongue and deep skin folds that need regular checks.",
    h: ["Shar-Pei autoinflammatory disease (familial Shar-Pei fever)", "entropion", "skin fold infections", "amyloidosis", "hypothyroidism"],
  },
  chinook: {
    p: "Bred in New Hampshire in 1917 by Arthur Walden, who crossed a mastiff-type dog with Greenland sled dogs. Chinooks pulled sleds on Admiral Byrd's 1929 Antarctic expedition; it is the state dog of New Hampshire.",
    k: "It is gentler and calmer than most sled dogs.",
    h: ["hip dysplasia", "seizures", "cryptorchidism"],
  },
  "chow-chow": {
    p: "One of the oldest dog breeds, from northern China, where it guarded temples, pulled carts and hunted. It is famous for its lion-like mane and blue-black tongue.",
    k: "It has a stilted gait and is often aloof, bonding mostly with one or two people.",
    h: ["entropion", "hip and elbow dysplasia", "hypothyroidism", "stomach cancer"],
  },
  "cirneco-dell-etna": {
    p: "An ancient Sicilian hound from the slopes of Mount Etna, used to hunt rabbits over rough lava ground by scent, sight and sound. Its ancestors may have come to Sicily with Phoenician traders.",
    k: "It hunts in the heat of the day and handles hot climates well.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    g: "Hound Dogs",
  },
  "clumber-spaniel": {
    p: "A heavy, slow-moving English spaniel named after Clumber Park, the Duke of Newcastle's estate. It was bred to flush game for hunters on foot.",
    k: "It is the largest of the flushing spaniels.",
    h: ["hip dysplasia", "entropion and ectropion", "pyruvate dehydrogenase phosphatase deficiency", "obesity"],
  },
  "cocker-spaniel": {
    p: "The American Cocker Spaniel was developed in the United States from the English Cocker, bred smaller with a rounder head and more coat. Its name comes from the woodcock it once flushed.",
    k: "Its long ears and coat need regular grooming and ear cleaning.",
    h: ["ear infections", "glaucoma", "cataracts", "progressive retinal atrophy", "immune-mediated haemolytic anaemia"],
  },
  collie: {
    p: "A Scottish herding dog, the rough-coated version made famous by Lassie. Queen Victoria's love of the breed made it fashionable in the 1800s.",
    k: "Many carry the MDR1 mutation, which makes some common drugs dangerous, so test before treatment.",
    h: ["collie eye anomaly", "MDR1 drug sensitivity", "dermatomyositis", "progressive retinal atrophy"],
  },
  "coton-de-tulear": {
    p: "The royal dog of Madagascar, named after the port of Tuléar. It descends from small dogs that probably arrived on ships and became favourites of the Merina nobility.",
    k: "Its cotton-textured coat sheds little but mats easily without regular brushing.",
    h: ["patellar luxation", "hip dysplasia", "progressive retinal atrophy"],
  },
  "croatian-sheepdog": {
    p: "An old herding breed from Croatia, documented in church records from 1374. It still works sheep and cattle in Slavonia.",
    k: "Its short curly black coat is a hallmark of the breed.",
    h: ["hip dysplasia"],
  },
  "curly-coated-retriever": {
    p: "One of the oldest retriever breeds, developed in England in the early 1800s, probably from old water dogs and retrieving setters. It was a favourite of English gamekeepers.",
    k: "Its tight curls are water-resistant and should not be brushed out.",
    h: ["hip and elbow dysplasia", "glycogen storage disease", "exercise-induced collapse", "pattern alopecia"],
  },
};

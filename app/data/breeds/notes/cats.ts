import type { BreedNote } from "./types";

/** `o` corrects or fills the origin shown on the page. */
export const CATS: Record<string, BreedNote> = {
  abyssinian: {
    p: "Despite the name, DNA studies point to roots in South-East Asia and the Indian Ocean coast. The breed was developed in Britain from a cat said to have come back from Abyssinia (Ethiopia) in the 1860s.",
    k: "Its ticked coat gives each hair several bands of colour, and it is one of the most active, curious breeds.",
    h: ["pyruvate kinase deficiency", "progressive retinal atrophy (rdAc)", "renal amyloidosis", "gingivitis"],
    o: "United Kingdom (ancestors from South-East Asia)",
  },
  "american-bobtail": {
    p: "Developed in the United States from a short-tailed tabby kitten found near an Arizona motel in the 1960s. The bobbed tail is a natural genetic mutation.",
    k: "It is known for being dog-like, playing fetch and walking on a lead.",
    h: ["hip dysplasia", "spinal issues in tailless individuals"],
  },
  "american-curl": {
    p: "Descends from Shulamith, a stray with curled-back ears adopted in Lakewood, California, in 1981. Kittens are born with straight ears that curl within a few days.",
    k: "The ear cartilage is firm, so ears should be handled gently.",
    h: ["ear canal narrowing and wax build-up", "generally healthy otherwise"],
  },
  "american-shorthair": {
    p: "Descended from cats that travelled with European settlers to North America to protect food stores from rats. It is one of the most popular pedigree breeds in the US.",
    k: "It is a sturdy, easygoing working cat that adapts to most homes.",
    h: ["hypertrophic cardiomyopathy", "hip dysplasia", "obesity"],
  },
  "american-wirehair": {
    p: "Began with a single kitten with a wiry coat born in a farm litter in upstate New York in 1966. All American Wirehairs trace back to him.",
    k: "Its crimped, springy coat is unique among cats.",
    h: ["skin sensitivity and oily coat", "hypertrophic cardiomyopathy"],
  },
  balinese: {
    p: "A long-haired Siamese developed in the United States in the 1950s. It was named for the graceful movement of Balinese dancers, not for Bali.",
    k: "It is often said to cause fewer allergy symptoms than many cats, though no cat is allergen-free.",
    h: ["progressive retinal atrophy", "amyloidosis", "dental disease"],
  },
  bengal: {
    p: "Developed in the United States by Jean Mill in the 1970s and 1980s by crossing domestic cats with the wild Asian leopard cat. Its spotted or marbled coat often has a glitter sheen.",
    k: "Bengals are very active, often love water and need plenty of play and climbing space.",
    h: ["hypertrophic cardiomyopathy", "progressive retinal atrophy (PRA-b)", "pyruvate kinase deficiency"],
  },
  birman: {
    p: "The sacred cat of Burma, according to legend kept by temple priests. The breed was developed in France in the 1920s.",
    k: "Every Birman has white \"gloves\" on all four paws.",
    h: ["hypertrophic cardiomyopathy", "congenital hypotrichosis", "kidney disease"],
  },
  bombay: {
    p: "Developed in Kentucky in the 1950s by Nikki Horner, who crossed sable Burmese with black American Shorthairs to create a mini panther.",
    k: "It has a jet-black coat and copper eyes, and is very people-oriented.",
    h: ["hypertrophic cardiomyopathy", "craniofacial defect (Burmese head defect) in some lines", "breathing issues from a shortened face"],
  },
  "british-shorthair": {
    p: "Descended from cats brought to Britain by the Romans, it was one of the first breeds shown at the 1871 Crystal Palace cat show. The blue variety is the best known.",
    k: "It is calm and undemanding, and usually prefers not to be picked up.",
    h: ["hypertrophic cardiomyopathy", "polycystic kidney disease", "obesity"],
  },
  burmese: {
    p: "Descends from Wong Mau, a brown cat brought from Burma to San Francisco in 1930 by Dr Joseph Thompson. The American and European lines have since diverged.",
    k: "It is very people-focused and often follows its owner around.",
    h: ["hypokalaemia", "diabetes mellitus", "Burmese head defect", "orofacial pain syndrome"],
  },
  chartreux: {
    p: "An old French breed associated with Carthusian monks, according to legend. It was a working cat that kept farms free of rodents.",
    k: "It is quiet, often chirping instead of meowing.",
    h: ["patellar luxation", "polycystic kidney disease"],
  },
  chausie: {
    p: "A hybrid breed developed in the United States from the jungle cat (Felis chaus) and domestic cats. Its name comes from the jungle cat's scientific name.",
    k: "It is very active and athletic, and early generations may be restricted by law in some places.",
    h: ["sensitive digestion (some need a low-grain diet)"],
    o: "United States (jungle cat hybrid)",
  },
  "cornish-rex": {
    p: "Began with Kallibunker, a curly-coated kitten born on a farm in Cornwall in 1950.",
    k: "It has no outer guard hairs, only a soft, wavy undercoat, so it feels warm to the touch and needs warmth.",
    h: ["hypertrophic cardiomyopathy", "patellar luxation", "skin sensitivity"],
  },
  cymric: {
    p: "The long-haired Manx, developed in Canada and the US in the 1960s and 1970s. Its name comes from Cymru, the Welsh word for Wales.",
    k: "Like the Manx, it can be born with a full tail, a stump or no tail.",
    h: ["Manx syndrome (spinal defects)", "arthritis in the tail stump"],
  },
  cyprus: {
    p: "Cats have lived on Cyprus for thousands of years; a 9,500-year-old burial shows a cat buried with a person. Legend says the island was stocked with cats to fight snakes.",
    k: "It is a hardy, landrace cat that adapts well to people.",
    h: ["generally robust; few breed-specific conditions are recorded"],
  },
  "devon-rex": {
    p: "Began with Kirlee, a curly-coated kitten born in Devon, England, in 1960, separately from the Cornish Rex.",
    k: "Its large ears and impish face earn it the nickname pixie cat.",
    h: ["hereditary myopathy", "hypertrophic cardiomyopathy", "patellar luxation", "skin yeast infections"],
  },
  donskoy: {
    p: "A hairless breed from Rostov-on-Don in Russia, starting from a rescued kitten in 1987. Its hairlessness is caused by a dominant gene, unlike the Sphynx.",
    k: "It needs warmth, sun protection and regular baths.",
    h: ["skin conditions", "sunburn", "dental problems"],
  },
  "egyptian-mau": {
    p: "A naturally spotted breed linked to the cats of ancient Egypt. Princess Nathalie Troubetskoy brought the first Maus from Egypt to the US in 1956.",
    k: "It is one of the fastest domestic cats, reaching about 30 mph.",
    h: ["hypertrophic cardiomyopathy", "leukodystrophy"],
  },
  "european-shorthair": {
    p: "A natural breed descended from the farm and street cats of Europe. In Scandinavia it was bred to keep the original look of these cats.",
    k: "It is robust, adaptable and a capable hunter.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "Europe (especially Scandinavia)",
  },
  "exotic-shorthair": {
    p: "Developed in the United States in the 1950s and 1960s by crossing Persians with American Shorthairs, giving a Persian cat with a short coat.",
    k: "It is often called the lazy man's Persian, because it needs far less grooming.",
    h: ["brachycephalic airway issues", "polycystic kidney disease", "tear staining", "dental problems"],
  },
  "german-rex": {
    p: "Began with Lämmchen, a curly-coated cat found in East Berlin in the late 1940s. It is the oldest of the rex breeds.",
    k: "It has a soft, curly coat and a playful nature.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "Germany",
  },
  "havana-brown": {
    p: "Developed in Britain in the 1950s from Siamese and black domestic cats to produce a solid chocolate-brown cat. It is now rare.",
    k: "It is often named after the colour of Havana cigars.",
    h: ["calcium oxalate bladder stones"],
  },
  himalayan: {
    p: "A Persian with the colourpoint pattern of the Siamese, developed in the United States and Britain from the 1930s. It is named after the colourpoint Himalayan rabbit.",
    k: "Its long coat needs daily grooming.",
    h: ["polycystic kidney disease", "brachycephalic airway issues", "eye problems", "hypertrophic cardiomyopathy"],
  },
  "japanese-bobtail": {
    p: "An ancient Japanese breed that appears in Japanese art. It is the cat on the maneki-neko, the beckoning cat figurine said to bring good luck.",
    k: "Each cat's short tail is unique, like a fingerprint.",
    h: ["generally robust; few breed-specific conditions are recorded"],
  },
  "karelian-bobtail": {
    p: "A natural breed from the Karelia region on the Russian–Finnish border, with a short pompom tail.",
    k: "It is hardy, with a coat built for cold winters.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "Russia (Karelia)",
  },
  "khao-manee": {
    p: "An ancient Thai breed, described in the Tamra Maew (Book of Cat Poems). Its name means white gem, and it was kept by Thai royalty.",
    k: "It often has odd-coloured eyes, one blue and one gold or green.",
    h: ["hereditary deafness (in blue-eyed or odd-eyed cats)"],
  },
  korat: {
    p: "An ancient Thai breed from the Korat plateau, described in the Tamra Maew. Silver-blue Korats are given as good-luck gifts at weddings in Thailand.",
    k: "Its green eyes and silver-tipped coat are hallmarks.",
    h: ["GM1 and GM2 gangliosidosis"],
  },
  "korean-bobtail": {
    p: "A natural short-tailed cat type from Korea and East Asia.",
    k: "It is little known outside its region.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "Korea",
  },
  kurilian: {
    p: "A natural breed from the Kuril Islands and Sakhalin, north of Japan, with a short, kinked tail.",
    k: "It is a strong hunter and often enjoys water.",
    h: ["generally robust; few breed-specific conditions are recorded"],
  },
  laperm: {
    p: "Began with Curly, a curly-coated barn kitten born on a cherry farm in Oregon in 1982.",
    k: "Its loose curls and ringlets are caused by a dominant gene.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "United States",
  },
  lykoi: {
    p: "Developed in Tennessee in 2010 from domestic cats with a natural partial-hair mutation, giving a patchy, werewolf-like look. Its name is Greek for wolves.",
    k: "Its coat can shed heavily and change through the seasons.",
    h: ["skin sensitivity", "sunburn"],
    o: "United States",
  },
  "maine-coon": {
    p: "One of the oldest North American breeds, from Maine, where it was a working farm and ship's cat. It is the official state cat of Maine.",
    k: "It is one of the largest domestic cats and has tufted ears and big snowshoe paws.",
    h: ["hypertrophic cardiomyopathy", "hip dysplasia", "spinal muscular atrophy", "polycystic kidney disease"],
  },
  manx: {
    p: "From the Isle of Man, where a natural genetic mutation produced tailless cats. Manx cats are thought to have been on the island for centuries.",
    k: "The tailless gene can cause spinal problems, so choose a breeder carefully.",
    h: ["Manx syndrome (spinal defects)", "arthritis in the tail stump", "megacolon"],
  },
  "mekong-bobtail": {
    p: "A short-tailed colourpoint cat from South-East Asia, developed in Russia from cats brought from the Mekong region.",
    k: "It is affectionate and dog-like.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "South-East Asia (developed in Russia)",
  },
  munchkin: {
    p: "Developed in the US from Blackberry, a short-legged stray found in Louisiana in 1983. Its short legs come from a natural mutation.",
    k: "Some cat registries refuse to recognise it over health concerns about the gene.",
    h: ["lordosis", "pectus excavatum", "osteoarthritis"],
  },
  nebelung: {
    p: "Developed in Denver in the 1980s by Cora Cobb from long-haired blue cats related to the Russian Blue. Nebelung means creature of the mist in German.",
    k: "It is shy with strangers but devoted to its own people.",
    h: ["generally robust; few breed-specific conditions are recorded"],
  },
  "norwegian-forest-cat": {
    p: "A natural breed from Norway's forests, appearing in Norse myths as the cats that pulled the goddess Freya's chariot. It is Norway's national cat.",
    k: "It has a waterproof double coat and is an excellent climber.",
    h: ["glycogen storage disease type IV", "hypertrophic cardiomyopathy", "hip dysplasia"],
  },
  ocicat: {
    p: "Developed in Michigan in 1964 by Virginia Daly from Siamese, Abyssinian and American Shorthair cats. It looks wild but has no wild cat ancestry.",
    k: "It is social and dog-like, and often learns tricks.",
    h: ["pyruvate kinase deficiency", "renal amyloidosis", "hypertrophic cardiomyopathy"],
  },
  "oregon-rex": {
    p: "A curly-coated cat discovered in Oregon in the 1940s. It is now extinct.",
    k: "Its lines were absorbed into other rex breeds.",
    h: ["no current population to assess"],
    o: "United States",
  },
  oriental: {
    p: "A Siamese relative developed in Britain and the US from the 1950s, in over 300 colours and patterns.",
    k: "It is one of the most vocal breeds and dislikes being alone.",
    h: ["progressive retinal atrophy", "amyloidosis", "dental disease", "dilated cardiomyopathy"],
  },
  persian: {
    p: "One of the oldest breeds, taken from Persia (Iran) to Europe in the 1600s. Queen Victoria kept Persians, and the breed dominated early cat shows.",
    k: "Its long coat needs daily grooming, and the flat face can cause breathing problems.",
    h: ["polycystic kidney disease", "brachycephalic airway issues", "eye problems", "hypertrophic cardiomyopathy"],
  },
  peterbald: {
    p: "Developed in St Petersburg in 1994 by crossing a Donskoy with an Oriental Shorthair. Its coat can range from fully hairless to a short brush.",
    k: "Hairless cats need warmth, sun protection and baths.",
    h: ["skin conditions", "sunburn"],
    o: "Russia",
  },
  "pixie-bob": {
    p: "Developed in Washington State in the 1980s by Carol Ann Brewer. Its founding cats were said to be bobcat hybrids, though DNA tests show only domestic cat ancestry.",
    k: "Many have extra toes (polydactyly), which the breed allows.",
    h: ["hypertrophic cardiomyopathy", "cryptorchidism"],
    o: "United States",
  },
  ragamuffin: {
    p: "Developed in the US in the 1990s from Ragdolls and other cats. It shares the Ragdoll's calm, floppy temperament.",
    k: "It often goes limp when picked up.",
    h: ["hypertrophic cardiomyopathy", "polycystic kidney disease", "obesity"],
  },
  ragdoll: {
    p: "Developed in Riverside, California, in the 1960s by Ann Baker. It was named for its tendency to go limp when held.",
    k: "It is large and gentle, and often follows people from room to room.",
    h: ["hypertrophic cardiomyopathy", "bladder stones", "obesity"],
  },
  "russian-blue": {
    p: "Said to come from the port of Arkhangelsk in northern Russia, it was taken to Britain by sailors in the 1860s.",
    k: "Its dense silver-blue coat and green eyes are its hallmarks.",
    h: ["obesity", "bladder stones"],
  },
  safari: {
    p: "A hybrid of the domestic cat and the wild Geoffroy's cat of South America, first bred in the US in the 1970s for research.",
    k: "It is very rare and early generations can be large.",
    h: ["limited data on breed health"],
    o: "United States (Geoffroy's cat hybrid)",
  },
  savannah: {
    p: "A hybrid of the domestic cat and the African serval, first bred in 1986. Early generations (F1 and F2) are large and wild-natured.",
    k: "Laws in some states and countries restrict or ban early generations, so check before buying.",
    h: ["hypertrophic cardiomyopathy", "taurine sensitivity", "fertility problems in males"],
  },
  "scottish-fold": {
    p: "Descends from Susie, a white barn cat with folded ears found in Scotland in 1961. The fold comes from a cartilage gene mutation.",
    k: "The same gene causes painful joint disease (osteochondrodysplasia) in every Fold, and breeding them is restricted in some countries.",
    h: ["osteochondrodysplasia", "polycystic kidney disease", "hypertrophic cardiomyopathy"],
  },
  "selkirk-rex": {
    p: "Began with Miss DePesto, a curly-coated kitten born in a Montana shelter in 1987.",
    k: "Its curly coat comes in long and short versions, and kittens may lose curls before they regrow.",
    h: ["polycystic kidney disease", "hypertrophic cardiomyopathy", "hip dysplasia"],
  },
  serengeti: {
    p: "Developed in California in 1994 by Karen Sausman, by crossing Bengals and Oriental Shorthairs to look like a serval without wild blood.",
    k: "It is active, vocal and confident.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "United States",
  },
  siamese: {
    p: "An ancient breed from Siam (Thailand), described in the Tamra Maew poems. The King of Siam gave the first Siamese to Britain in the 1880s.",
    k: "It is one of the most vocal breeds, with a loud, distinctive call.",
    h: ["progressive retinal atrophy", "amyloidosis", "asthma", "dental disease"],
  },
  siberian: {
    p: "A natural breed from the forests of Siberia, Russia's national cat. It was recognised in the US only in the 1990s.",
    k: "Some people with cat allergies report fewer symptoms around Siberians, which may relate to lower Fel d 1 levels, but no cat is allergen-free.",
    h: ["hypertrophic cardiomyopathy", "polycystic kidney disease"],
  },
  singapura: {
    p: "A small ticked cat said to come from the streets of Singapore, taken to the US in the 1970s.",
    k: "It is one of the smallest breeds and very curious.",
    h: ["pyruvate kinase deficiency", "uterine inertia"],
  },
  sokoke: {
    p: "A natural breed from the Arabuko-Sokoke forest in coastal Kenya, discovered in the 1970s.",
    k: "Its marbled coat is distinctive and it is very active.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "Kenya",
  },
  somali: {
    p: "The long-haired Abyssinian, developed in the US, Canada and Australia in the 1960s and 1970s. Its name is a nod to Somalia, Ethiopia's neighbour.",
    k: "It has a full, fox-like tail.",
    h: ["pyruvate kinase deficiency", "renal amyloidosis", "gingivitis"],
    o: "United States and Canada (from Abyssinian lines)",
  },
  sphynx: {
    p: "Developed in Toronto from Prune, a hairless kitten born in 1966, and later from hairless cats found in Minnesota.",
    k: "It needs regular baths to remove skin oils and protection from cold and sun.",
    h: ["hypertrophic cardiomyopathy", "skin conditions", "dental disease"],
  },
  tonkinese: {
    p: "A cross between the Siamese and Burmese developed in Canada and the US in the 1960s. Its blue-green eyes are often called aqua.",
    k: "It is very social and dislikes being alone.",
    h: ["gingivitis", "hypertrophic cardiomyopathy"],
  },
  toyger: {
    p: "Developed in California in the 1980s by Judy Sugden, who bred domestic cats to look like small tigers.",
    k: "It is affectionate and laid back, despite its wild look.",
    h: ["heart murmurs", "generally healthy otherwise"],
  },
  "turkish-angora": {
    p: "An ancient breed from the Ankara region of Turkey. Ankara Zoo began a breeding programme in the early 1900s to preserve it.",
    k: "White cats with blue eyes are at higher risk of deafness.",
    h: ["hereditary deafness (in white blue-eyed cats)", "hypertrophic cardiomyopathy", "ataxia"],
  },
  "turkish-van": {
    p: "A natural breed from the Lake Van region of eastern Turkey. It is known as the swimming cat because many enjoy water.",
    k: "Its coat has colour only on the head and tail, a pattern called the van pattern.",
    h: ["hypertrophic cardiomyopathy"],
  },
  "ukrainian-levkoy": {
    p: "Developed in Ukraine in the 2000s by Elena Biryukova from Donskoy and Scottish Fold cats, giving a hairless cat with folded ears.",
    k: "It is rare and not recognised by most major registries.",
    h: ["skin conditions", "possible joint problems linked to the fold gene"],
    o: "Ukraine",
  },
  "ural-rex": {
    p: "A curly-coated natural breed from the Ural mountains of Russia, discovered in the 1980s.",
    k: "Kittens are born with wavy coats that become fully curly by about two years.",
    h: ["generally robust; few breed-specific conditions are recorded"],
    o: "Russia",
  },
  vankedisi: {
    p: "The all-white cat of the Lake Van region in Turkey, often odd-eyed, and a local symbol of the city of Van.",
    k: "White cats with blue eyes are at higher risk of deafness.",
    h: ["hereditary deafness"],
    o: "Turkey",
  },
};

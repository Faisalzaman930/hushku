import re

parent_breed_map = {
    "afador": "Afghan Hound and Labrador Retriever",
    "affenhuahua": "Affenpinscher and Chihuahua",
    "akita-chow": "Akita and Chow Chow",
    "akita-pit": "Akita and American Pit Bull Terrier",
    "akita-shepherd": "Akita and German Shepherd Dog",
    "american-pugabull": "American Bulldog and Pug",
    "auggie": "Australian Shepherd and Pembroke Welsh Corgi",
    "aussiedoodle": "Australian Shepherd and Poodle",
    "aussiepom": "Australian Shepherd and Pomeranian",
    "australian-retriever": "Australian Shepherd and Golden Retriever",
    "australian-shepherd-husky": "Australian Shepherd and Siberian Husky",
    "australian-shepherd-lab-mix": "Australian Shepherd and Labrador Retriever",
    "australian-shepherd-pit-bull-mix": "Australian Shepherd and American Pit Bull Terrier",
    "bassador": "Basset Hound and Labrador Retriever",
    "basset-retriever": "Basset Hound and Golden Retriever",
    "beabull": "Beagle and English Bulldog",
    "beaglier": "Beagle and Cavalier King Charles Spaniel",
    "bernedoodle": "Bernese Mountain Dog and Poodle",
    "bocker": "Beagle and Cocker Spaniel",
    "boglen-terrier": "Boston Terrier and Beagle",
    "border-sheepdog": "Border Collie and Shetland Sheepdog",
    "bordoodle": "Border Collie and Poodle",
    "boshih": "Boston Terrier and Shih Tzu",
    "bossie": "Boston Terrier and Australian Shepherd",
    "boston-boxer": "Boston Terrier and Boxer",
    "boston-terrier-pekingese-mix": "Boston Terrier and Pekingese",
    "boxador": "Boxer and Labrador Retriever",
    "boxerdoodle": "Boxer and Poodle",
    "boxmatian": "Boxer and Dalmatian",
    "boxweiler": "Boxer and Rottweiler",
    "bugg": "Boston Terrier and Pug",
    "bull-pei": "English Bulldog and Chinese Shar-Pei",
    "bullador": "English Bulldog and Labrador Retriever",
    "bullboxer-pit": "American Pit Bull Terrier and Boxer",
    "bullmatian": "English Bulldog and Dalmatian",
    "catahoula-bulldog": "Catahoula Leopard Dog and American Bulldog",
    "cav-a-jack": "Cavalier King Charles Spaniel and Jack Russell Terrier",
    "cavachon": "Cavalier King Charles Spaniel and Bichon Frise",
    "cavador": "Cavalier King Charles Spaniel and Labrador Retriever",
    "cavapoo": "Cavalier King Charles Spaniel and Poodle",
    "chabrador": "Chow Chow and Labrador Retriever",
    "cheagle": "Chihuahua and Beagle",
    "chi-chi": "Chihuahua and Chinese Crested",
    "chi-poo": "Chihuahua and Poodle",
    "chigi": "Chihuahua and Pembroke Welsh Corgi",
    "chilier": "Chihuahua and Cavalier King Charles Spaniel",
    "chion": "Chihuahua and Papillon",
    "chipin": "Chihuahua and Miniature Pinscher",
    "chiweenie": "Chihuahua and Dachshund",
    "chorkie": "Chihuahua and Yorkshire Terrier",
    "chow-shepherd": "Chow Chow and German Shepherd Dog",
    "chug": "Chihuahua and Pug",
    "chusky": "Chow Chow and Siberian Husky",
    "cockalier": "Cocker Spaniel and Cavalier King Charles Spaniel",
    "corgi-inu": "Pembroke Welsh Corgi and Shiba Inu",
    "corgidor": "Pembroke Welsh Corgi and Labrador Retriever",
    "corman-shepherd": "Pembroke Welsh Corgi and German Shepherd Dog",
    "dachsador": "Dachshund and Labrador Retriever",
    "daniff": "Great Dane and Mastiff",
    "doberdor": "Doberman Pinscher and Labrador Retriever",
    "docker": "Dachshund and Cocker Spaniel",
    "dorgi": "Dachshund and Pembroke Welsh Corgi",
    "dorkie": "Dachshund and Yorkshire Terrier",
    "doxiepoo": "Dachshund and Poodle",
    "doxle": "Dachshund and Beagle",
    "french-bullhuahua": "French Bulldog and Chihuahua",
    "frenchton": "French Bulldog and Boston Terrier",
    "frengle": "French Bulldog and Beagle",
    "german-shepherd-pit-bull": "German Shepherd Dog and American Pit Bull Terrier",
    "german-shepherd-rottweiler-mix": "German Shepherd Dog and Rottweiler",
    "german-sheprador": "German Shepherd Dog and Labrador Retriever",
    "goberian": "Golden Retriever and Siberian Husky",
    "golden-cocker-retriever": "Golden Retriever and Cocker Spaniel",
    "golden-mountain-dog": "Golden Retriever and Bernese Mountain Dog",
    "golden-retriever-corgi": "Golden Retriever and Pembroke Welsh Corgi",
    "golden-shepherd": "Golden Retriever and German Shepherd Dog",
    "gollie": "Golden Retriever and Collie",
    "greyador": "Greyhound and Labrador Retriever",
    "havapoo": "Havanese and Poodle",
    "horgi": "Siberian Husky and Pembroke Welsh Corgi",
    "huskita": "Siberian Husky and Akita",
    "huskydoodle": "Siberian Husky and Poodle",
    "jack-a-poo": "Jack Russell Terrier and Poodle",
    "jack-chi": "Jack Russell Terrier and Chihuahua",
    "jackshund": "Jack Russell Terrier and Dachshund",
    "kyi-leo": "Maltese and Lhasa Apso",
    "lab-pointer": "Labrador Retriever and Pointer",
    "labernese": "Labrador Retriever and Bernese Mountain Dog",
    "labmaraner": "Labrador Retriever and Weimaraner",
    "labrabull": "Labrador Retriever and American Pit Bull Terrier",
    "labradane": "Labrador Retriever and Great Dane",
    "labrastaff": "Labrador Retriever and Staffordshire Bull Terrier",
    "labsky": "Labrador Retriever and Siberian Husky",
    "lhasapoo": "Lhasa Apso and Poodle",
    "mastador": "Mastiff and Labrador Retriever",
    "morkie": "Maltese and Yorkshire Terrier",
    "papipoo": "Papillon and Poodle",
    "pitsky": "American Pit Bull Terrier and Siberian Husky",
    "pomapoo": "Pomeranian and Poodle",
    "pomchi": "Pomeranian and Chihuahua",
    "pomeagle": "Pomeranian and Beagle",
    "pomsky": "Pomeranian and Siberian Husky",
    "poochon": "Poodle and Bichon Frise",
    "pugalier": "Pug and Cavalier King Charles Spaniel",
    "puginese": "Pug and Pekingese",
    "pyredoodle": "Great Pyrenees and Poodle",
    "rottador": "Rottweiler and Labrador Retriever",
    "rottle": "Rottweiler and Poodle",
    "saint-berdoodle": "Saint Bernard and Poodle",
    "samusky": "Samoyed and Siberian Husky",
    "sheepadoodle": "Old English Sheepdog and Poodle",
    "shepsky": "German Shepherd Dog and Siberian Husky",
    "shichon": "Shih Tzu and Bichon Frise",
    "shih-poo": "Shih Tzu and Poodle",
    "shiranian": "Shih Tzu and Pomeranian",
    "shollie": "German Shepherd Dog and Rough Collie",
    "shorkie": "Shih Tzu and Yorkshire Terrier",
    "springador": "English Springer Spaniel and Labrador Retriever",
    "terripoo": "Australian Terrier and Poodle",
    "texas-heeler": "Australian Cattle Dog and Australian Shepherd",
    "valley-bulldog": "English Bulldog and Boxer",
    "westiepoo": "West Highland White Terrier and Poodle",
    "whoodle": "Soft Coated Wheaten Terrier and Poodle",
}

file_path = "/Users/mac/Desktop/hushku/app/data/breeds/dogs.ts"
with open(file_path, "r") as f:
    content = f.read()

updated = 0
skipped = 0
not_found = []

for slug, parent_breeds in parent_breed_map.items():
    slug_pattern = f'slug: "{slug}"'
    idx = content.find(slug_pattern)
    if idx == -1:
        not_found.append(slug)
        continue

    zone = content[idx:idx+700]
    if "parentBreeds:" in zone:
        skipped += 1
        continue

    # Find the image line in this zone
    image_match = re.search(r'    image: "[^"]*",?\n', zone)
    if not image_match:
        print(f"No image line for: {slug}")
        continue

    insert_pos = idx + image_match.end()
    insertion = f'    parentBreeds: "{parent_breeds}",\n'
    content = content[:insert_pos] + insertion + content[insert_pos:]
    updated += 1

with open(file_path, "w") as f:
    f.write(content)

print(f"Updated: {updated}, Skipped (already had): {skipped}")
if not_found:
    print(f"Not found: {not_found}")

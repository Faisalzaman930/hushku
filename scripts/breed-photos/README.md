# Breed photos from Wikimedia Commons

Replaces the old breed photos (many duplicated across breeds, some the wrong breed, some from a
dataset not licensed for commercial use) with freely licensed photos, credited on each page.
Needs network access to en.wikipedia.org, commons.wikimedia.org and upload.wikimedia.org.

    W=/tmp/breed-photos && mkdir -p $W && cp scripts/breed-photos/fetch_lib.py $W/
    npx tsx scripts/breed-photos/dump.mts $W/breeds.json     # breed list
    python3 scripts/breed-photos/fetch.py $W                  # Wikipedia lead photo per breed -> found.json, missing.json
    python3 scripts/breed-photos/search.py $W                 # Commons search for the rest -> candidates.json
    # Review every photo on contact sheets; keep only photos that clearly show the breed.
    # Write the approved set to $W/final.json (slug -> info), then:
    python3 scripts/breed-photos/download.py $W .             # saves public/breeds/*, writes app/data/breeds/photos.generated.ts

Finally, in app/data/breeds/index.ts set each breed's `image` to `photoFor(animal, slug)` so breeds
without an approved photo show the placeholder instead of an unverified one.

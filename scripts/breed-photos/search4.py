"""Third pass: hand-picked Commons queries for pure breeds whose names differ on Commons, rejected
photos that need a better one, and a looser full-text search for mixes with no results yet."""
import json, sys
sys.path.insert(0, sys.argv[1])
OUT = sys.argv[1]
import fetch2_lib as L

breeds = {b["slug"]: b for b in json.load(open(OUT + "/breeds.json"))}
cands = json.load(open(OUT + "/candidates.json"))
extra = json.load(open(OUT + "/candidates2.json")) if __import__("os").path.exists(OUT + "/candidates2.json") else {}
Q = {
    "appenzeller-sennenhunde": 'intitle:"Appenzeller" dog',
    "bavarian-mountain-scent-hound": 'intitle:"Bavarian Mountain" hound',
    "cirneco-dell-etna": 'intitle:"Cirneco"',
    "small-munsterlander-pointer": 'intitle:"Kleiner Münsterländer" OR intitle:"Small Munsterlander"',
    "karelian-bobtail": '"Karelian Bobtail"',
    "korean-bobtail": '"Korean bobtail" cat',
    "ural-rex": '"Ural Rex"',
    "belgian-malinois": 'intitle:"Malinois" dog',
    "belgian-sheepdog": 'intitle:"Groenendael"',
    "belgian-tervuren": 'intitle:"Tervuren" dog',
    "belgian-laekenois": 'intitle:"Laekenois"',
    "akita": 'intitle:"Akita Inu"',
    "akita-shepherd": '"Akita" "German Shepherd" mix',
    "bassador": '"Bassador"',
    "catahoula-bulldog": '"Catahoula Bulldog"',
}
todo = list(Q) + [s for s, v in cands.items() if not v and s not in Q and s != "oregon-rex"]
for slug in todo:
    if slug in extra:
        continue
    b = breeds[slug]
    kind = "dog" if b["animal"] == "dogs" else "cat"
    q = Q.get(slug, f'"{b["name"]}" {kind}')
    r = L.get("https://commons.wikimedia.org/w/api.php", {"action": "query", "generator": "search", "gsrnamespace": 6, "gsrlimit": 8,
              "gsrsearch": q + " filetype:bitmap", "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1200})
    ps = sorted(r.get("query", {}).get("pages", []), key=lambda p: p.get("index", 99))
    extra[slug] = [x for x in (L.info_from(p) for p in ps if "imageinfo" in p) if x and (x["width"] or 0) >= 500][:4]
    json.dump(extra, open(OUT + "/candidates2.json", "w"), indent=1)
    print("search", slug, len(extra[slug]), flush=True)
print("done", sum(1 for v in extra.values() if v), "of", len(extra))

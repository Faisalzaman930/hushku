"""Find a freely licensed lead photo for every breed on Wikipedia/Wikimedia Commons.

Writes found.json: slug -> {file, thumb, license, licenseUrl, artist, source, title}
and missing.json for breeds with no usable free photo.
"""
import json, re, sys, time, urllib.parse, urllib.request, html
from concurrent.futures import ThreadPoolExecutor

OUT = sys.argv[1]
breeds = json.load(open(OUT + "/breeds.json"))  # [{slug, name, animal}]
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
FREE = re.compile(r"^(CC0|CC BY(-SA)? ?[0-9.]*|Public domain|PD|cc-by|cc-by-sa|No restrictions)", re.I)


sys.path.insert(0, OUT)
from fetch_lib import get, file_info  # noqa

def candidates(b):
    n = b["name"]
    kind = "dog" if b["animal"] == "dogs" else "cat"
    out = [n, f"{n} ({kind})", f"{n} {kind}"]
    if kind == "dog" and not n.lower().endswith(("dog", "hound", "terrier", "spaniel", "retriever")):
        out.append(f"{n} dog breed")
    return out


def lead_image(b):
    r = get("https://en.wikipedia.org/w/api.php", {"action": "query", "titles": "|".join(candidates(b)), "prop": "pageimages|pageprops|categories", "piprop": "name", "redirects": 1, "cllimit": 50})
    pages = r.get("query", {}).get("pages", [])
    kind = "dog" if b["animal"] == "dogs" else "cat"
    for p in pages:
        if p.get("missing") or "pageprops" in p and "disambiguation" in p["pageprops"]:
            continue
        cats = " ".join(c["title"] for c in p.get("categories", [])).lower()
        if kind not in cats and "breed" not in cats:
            continue  # wrong article (e.g. a place or person with the same name)
        if p.get("pageimage"):
            return p["title"], p["pageimage"]
    return None, None


def work(b):
    title, img = lead_image(b)
    if not img:
        return b["slug"], None, "no article image"
    info = file_info(img)
    if not info:
        return b["slug"], None, f"non-free or non-photo: {img}"
    info["title"] = title
    return b["slug"], info, None


found, missing = {}, {}
with ThreadPoolExecutor(6) as ex:
    for slug, info, why in ex.map(work, breeds):
        if info:
            found[slug] = info
        else:
            missing[slug] = why
json.dump(found, open(OUT + "/found.json", "w"), indent=1)
json.dump(missing, open(OUT + "/missing.json", "w"), indent=1)
print("found", len(found), "missing", len(missing))

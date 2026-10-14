"""Minimal-request second pass: batched Wikipedia lookup with continuation, then one Commons
generator=search request per breed that returns licences in the same response."""
import json, re, sys, html
sys.path.insert(0, sys.argv[1])
OUT = sys.argv[1]
import fetch2_lib as L

breeds = {b["slug"]: b for b in json.load(open(OUT + "/breeds.json"))}
found = json.load(open(OUT + "/found.json"))
missing = json.load(open(OUT + "/missing.json"))
try:
    cands = json.load(open(OUT + "/candidates.json"))
except Exception:
    cands = {}


def info_from(p):
    ii = p["imageinfo"][0]
    md = ii.get("extmetadata", {})
    val = lambda k: html.unescape(re.sub(r"<[^>]+>", "", md.get(k, {}).get("value", ""))).strip()
    lic = val("LicenseShortName")
    if not L.FREE.match(lic) or ii.get("mime") not in ("image/jpeg", "image/png", "image/webp"):
        return None
    return {"file": p["title"].removeprefix("File:"), "thumb": ii.get("thumburl") or ii["url"], "width": ii.get("width"), "height": ii.get("height"),
            "license": lic, "licenseUrl": val("LicenseUrl"), "artist": re.sub(r"\s+", " ", val("Artist"))[:120] or "Unknown author", "source": ii.get("descriptionurl")}


# 1. Batched Wikipedia lead images, following continuation.
if not cands:
    want = {}
    for slug in missing:
        b = breeds[slug]
        kind = "dog" if b["animal"] == "dogs" else "cat"
        for t in (b["name"], f"{b['name']} ({kind})"):
            want.setdefault(t, []).append(slug)
    titles = sorted(want)
    pages, alias = {}, {}
    for i in range(0, len(titles), 50):
        params = {"action": "query", "titles": "|".join(titles[i:i + 50]), "prop": "pageimages|description", "piprop": "name", "redirects": 1}
        while True:
            r = L.get("https://en.wikipedia.org/w/api.php", params)
            q = r.get("query", {})
            for n in q.get("normalized", []) + q.get("redirects", []):
                alias[n["from"]] = n["to"]
            for p in q.get("pages", []):
                pages.setdefault(p["title"], {}).update({k: v for k, v in p.items() if v})
            if "continue" not in r:
                break
            params = {**params, **r["continue"]}
        print("wiki batch", i, flush=True)
    leads = {}
    for t, slugs in want.items():
        x = t
        for _ in range(3):
            x = alias.get(x, x)
        p = pages.get(x, {})
        for slug in slugs:
            kind = "dog" if breeds[slug]["animal"] == "dogs" else "cat"
            if slug not in leads and p.get("pageimage") and re.search(rf"\b({kind}|breed|landrace|hybrid|crossbreed|mix)", (p.get("description") or "").lower()):
                leads[slug] = (p["title"], p["pageimage"])
    meta = L.meta_for(sorted({f for _, f in leads.values()})) if leads else {}
    for slug, (title, f) in leads.items():
        m = meta.get(f) or meta.get(f.replace("_", " "))
        if m:
            found[slug] = {**m, "title": title}
            missing.pop(slug, None)
    print("leads added", len(leads), flush=True)
    json.dump(found, open(OUT + "/found.json", "w"), indent=1)
    json.dump(missing, open(OUT + "/missing.json", "w"), indent=1)

# 2. One Commons request per remaining breed.
for slug in missing:
    if slug in cands:
        continue
    b = breeds[slug]
    r = L.get("https://commons.wikimedia.org/w/api.php", {"action": "query", "generator": "search", "gsrnamespace": 6, "gsrlimit": 8,
              "gsrsearch": f'intitle:"{b["name"]}" filetype:bitmap', "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1200})
    ps = sorted(r.get("query", {}).get("pages", []), key=lambda p: p.get("index", 99))
    ok = [x for x in (info_from(p) for p in ps if "imageinfo" in p) if x and (x["width"] or 0) >= 500][:5]
    cands[slug] = ok
    json.dump(cands, open(OUT + "/candidates.json", "w"), indent=1)
    print("search", slug, len(ok), flush=True)
print("found", len(found), "with candidates", sum(1 for v in cands.values() if v), "nothing", sum(1 for v in cands.values() if not v))

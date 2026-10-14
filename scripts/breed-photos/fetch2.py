"""Polite, batched version: ~50 titles per request, one request at a time, honours Retry-After."""
import json, re, sys, time, html, urllib.parse, urllib.request, urllib.error

OUT = sys.argv[1]
breeds = json.load(open(OUT + "/breeds.json"))
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app) python-urllib", "Accept-Encoding": "identity"}
FREE = re.compile(r"^(CC0|CC BY(-SA)? ?[0-9.]*|Public domain|PD|No restrictions)", re.I)


def get(url, params):
    q = url + "?" + urllib.parse.urlencode({**params, "format": "json", "formatversion": 2, "maxlag": 5})
    for attempt in range(8):
        try:
            with urllib.request.urlopen(urllib.request.Request(q, headers=UA), timeout=60) as r:
                time.sleep(1.5)
                return json.load(r)
        except urllib.error.HTTPError as e:
            wait = int(e.headers.get("Retry-After") or 0) or 30 * (attempt + 1)
            print("HTTP", e.code, "waiting", wait, flush=True)
            time.sleep(wait)
        except Exception as e:
            print("err", e, flush=True)
            time.sleep(10)
    raise SystemExit("gave up")


def chunks(xs, n):
    for i in range(0, len(xs), n):
        yield xs[i:i + n]


# 1. Wikipedia lead images for every candidate title.
cand = {}
for b in breeds:
    kind = "dog" if b["animal"] == "dogs" else "cat"
    cand[b["slug"]] = [b["name"], f"{b['name']} ({kind})", f"{b['name']} {kind}", f"{b['name']} (dog breed)" if kind == "dog" else f"{b['name']} (cat breed)"]
titles = sorted({t for v in cand.values() for t in v})
pages = {}
for ch in chunks(titles, 50):
    r = get("https://en.wikipedia.org/w/api.php", {"action": "query", "titles": "|".join(ch), "prop": "pageimages|description|pageprops", "piprop": "name", "redirects": 1})
    q = r.get("query", {})
    alias = {}
    for n in q.get("normalized", []):
        alias[n["from"]] = n["to"]
    for n in q.get("redirects", []):
        alias[n["from"]] = n["to"]
    for p in q.get("pages", []):
        pages[p["title"]] = p
    for t in ch:
        x = t
        for _ in range(3):
            x = alias.get(x, x)
        if x in pages:
            pages[t] = pages[x]
    print("titles", len(pages), flush=True)

lead = {}
for b in breeds:
    kind = "dog" if b["animal"] == "dogs" else "cat"
    for t in cand[b["slug"]]:
        p = pages.get(t)
        if not p or p.get("missing") or "disambiguation" in p.get("pageprops", {}):
            continue
        desc = (p.get("description") or "").lower()
        if not re.search(rf"\b({kind}|breed|landrace|hybrid|crossbreed|mix)", desc):
            continue
        if p.get("pageimage"):
            lead[b["slug"]] = (p["title"], p["pageimage"])
            break

# 2. Commons metadata for those files, 50 at a time.
files = sorted({f for _, f in lead.values()})
meta = {}
for ch in chunks(files, 50):
    r = get("https://commons.wikimedia.org/w/api.php", {"action": "query", "titles": "|".join("File:" + f for f in ch), "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1200})
    norm = {n["to"]: n["from"] for n in r.get("query", {}).get("normalized", [])}
    for p in r.get("query", {}).get("pages", []):
        if p.get("missing") or "imageinfo" not in p:
            continue
        ii = p["imageinfo"][0]
        md = ii.get("extmetadata", {})
        val = lambda k: html.unescape(re.sub(r"<[^>]+>", "", md.get(k, {}).get("value", ""))).strip()
        lic = val("LicenseShortName")
        if not FREE.match(lic) or ii.get("mime") not in ("image/jpeg", "image/png", "image/webp"):
            continue
        name = p["title"].removeprefix("File:")
        meta[name] = meta[norm.get(p["title"], p["title"]).removeprefix("File:")] = {
            "file": name, "thumb": ii.get("thumburl") or ii["url"], "width": ii.get("width"), "height": ii.get("height"),
            "license": lic, "licenseUrl": val("LicenseUrl"), "artist": re.sub(r"\s+", " ", val("Artist"))[:120] or "Unknown author",
            "source": ii.get("descriptionurl"),
        }
    print("files", len(meta), flush=True)

found, missing = {}, {}
for b in breeds:
    s = b["slug"]
    if s not in lead:
        missing[s] = "no article image"
        continue
    title, f = lead[s]
    m = meta.get(f) or meta.get(f.replace("_", " "))
    if m:
        found[s] = {**m, "title": title}
    else:
        missing[s] = "non-free or not a photo: " + f
json.dump(found, open(OUT + "/found.json", "w"), indent=1)
json.dump(missing, open(OUT + "/missing.json", "w"), indent=1)
print("found", len(found), "missing", len(missing))

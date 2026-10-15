"""Search Openverse for breeds without a photo. Only licences allowing commercial use and modification."""
import json, os, sys, time, urllib.parse, urllib.request, urllib.error
OUT = sys.argv[1]
breeds = json.load(open(OUT + "/breeds.json"))
pub = json.load(open(OUT + "/published.json"))
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
missing = [b for b in breeds if f"{b['animal']}/{b['slug']}" not in pub and b["slug"] != "oregon-rex"]
res = json.load(open(OUT + "/ov/results.json")) if os.path.exists(OUT + "/ov/results.json") else {}
for b in missing:
    if b["slug"] in res:
        continue
    kind = "dog" if b["animal"] == "dogs" else "cat"
    q = {"q": f'{b["name"]} {kind}', "license_type": "commercial,modification", "category": "photograph", "page_size": 8, "mature": "false"}
    url = "https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(q)
    for attempt in range(5):
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40)); break
        except urllib.error.HTTPError as e:
            w = int(e.headers.get("Retry-After") or 0) or 30; print("HTTP", e.code, "wait", w, flush=True); time.sleep(w)
    else:
        continue
    name = b["name"].lower()
    hits = []
    for r in d.get("results", []):
        text = (r.get("title") or "").lower() + " " + " ".join(t.get("name", "") for t in r.get("tags") or []).lower()
        if name.split()[0] not in text and name.replace(" ", "") not in text.replace(" ", ""):
            continue  # title/tags must name the breed
        if (r.get("width") or 0) and r["width"] < 500:
            continue
        hits.append({k: r.get(k) for k in ("id", "title", "creator", "license", "license_version", "license_url", "foreign_landing_url", "url", "thumbnail", "width", "height", "source")})
    res[b["slug"]] = {"animal": b["animal"], "hits": hits[:4]}
    json.dump(res, open(OUT + "/ov/results.json", "w"), indent=1)
    print(b["slug"], len(hits), flush=True)
    time.sleep(3.5)
print("done", sum(1 for v in res.values() if v["hits"]), "of", len(res))

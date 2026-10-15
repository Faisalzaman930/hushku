import io, json, os, re, sys, time, urllib.request, urllib.error
from PIL import Image, ImageOps
OUT = sys.argv[1]; src = json.load(open(OUT + "/" + sys.argv[2]))
breeds = {b["slug"]: b for b in json.load(open(OUT + "/breeds.json"))}
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
os.makedirs(OUT + "/staged", exist_ok=True)


def thumb_url(it):
    """A standard-size thumbnail (cached at Wikimedia's edge), never the full original."""
    u = it["thumb"].split("?")[0]
    m = re.match(r"https://upload\.wikimedia\.org/wikipedia/commons/(?:thumb/)?([0-9a-f])/([0-9a-f]{2})/([^/]+)", u)
    if not m:
        return u
    a, b, name = m.groups()
    w = it.get("width") or 960
    size = 960 if w > 960 else 640 if w > 640 else 500 if w > 500 else 330
    if w <= 330:
        return f"https://upload.wikimedia.org/wikipedia/commons/{a}/{b}/{name}"
    return f"https://upload.wikimedia.org/wikipedia/commons/thumb/{a}/{b}/{name}/{size}px-{name}"
for slug, info in sorted(src.items()):
    items = info if isinstance(info, list) else [info]
    for k, it in enumerate(items):
        dest = f"{OUT}/staged/{breeds[slug]['animal']}-{slug}" + (f"~{k}" if isinstance(info, list) else "") + ".jpg"
        if os.path.exists(dest): continue
        url = thumb_url(it)
        for attempt in range(6):
            try:
                data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
                im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert("RGB"); im.thumbnail((1200, 1200))
                im.save(dest, "JPEG", quality=82, optimize=True, progressive=True); print("ok", slug, k, flush=True); time.sleep(3); break
            except urllib.error.HTTPError as e:
                if e.code in (400, 404) and url != it["thumb"].split("?")[0]:
                    print("fallback to original", slug, flush=True); url = it["thumb"].split("?")[0]; continue
                w = int(e.headers.get("Retry-After") or 0) or 15 * (attempt + 1); print("HTTP", e.code, slug, "wait", w, flush=True); time.sleep(w)
            except Exception as e:
                print("err", slug, e, flush=True); time.sleep(5)
print("done", flush=True)

import io, json, os, sys, time, urllib.request, urllib.error
from PIL import Image, ImageOps
OUT = sys.argv[1]; src = json.load(open(OUT + "/" + sys.argv[2]))
breeds = {b["slug"]: b for b in json.load(open(OUT + "/breeds.json"))}
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
os.makedirs(OUT + "/staged", exist_ok=True)
for slug, info in sorted(src.items()):
    items = info if isinstance(info, list) else [info]
    for k, it in enumerate(items):
        dest = f"{OUT}/staged/{breeds[slug]['animal']}-{slug}" + (f"~{k}" if isinstance(info, list) else "") + ".jpg"
        if os.path.exists(dest): continue
        url = it["thumb"].split("?")[0].replace("/1200px-", "/960px-")
        for attempt in range(6):
            try:
                data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
                im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert("RGB"); im.thumbnail((1200, 1200))
                im.save(dest, "JPEG", quality=82, optimize=True, progressive=True); print("ok", slug, k, flush=True); time.sleep(3); break
            except urllib.error.HTTPError as e:
                w = int(e.headers.get("Retry-After") or 0) or 15 * (attempt + 1); print("HTTP", e.code, slug, "wait", w, flush=True); time.sleep(w)
            except Exception as e:
                print("err", slug, e, flush=True); time.sleep(5)
print("done", flush=True)

"""Download staged review copies from Wikimedia: standard thumbnail sizes only (originals carry a
10-minute rate-limit penalty), one request at a time, honouring Retry-After."""
import io, json, os, re, sys, time, urllib.request, urllib.error
from PIL import Image, ImageOps
OUT = sys.argv[1]; src = json.load(open(OUT + "/" + sys.argv[2]))
breeds = {b["slug"]: b for b in json.load(open(OUT + "/breeds.json"))}
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
MAXW = int(os.environ.get("MAXW", "960"))
os.makedirs(OUT + "/staged", exist_ok=True)


def urls(it):
    u = it["thumb"].split("?")[0]
    m = re.match(r"https://(?:upload|thumb)\.wikimedia\.org/wikipedia/commons/(?:thumb/)?([0-9a-f])/([0-9a-f]{2})/([^/]+)", u)
    if not m:
        return []
    a, b, name = m.groups()
    w = it.get("width") or 960
    return [f"https://upload.wikimedia.org/wikipedia/commons/thumb/{a}/{b}/{name}/{s}px-{name}" for s in (960, 640, 500, 330) if s <= MAXW and s < w]


for slug, info in sorted(src.items()):
    items = info if isinstance(info, list) else [info]
    for k, it in enumerate(items):
        dest = f"{OUT}/staged/{breeds[slug]['animal']}-{slug}" + (f"~{k}" if isinstance(info, list) else "") + ".jpg"
        if os.path.exists(dest):
            continue
        for url in urls(it):
            done = False
            for attempt in range(6):
                try:
                    data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
                    im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert("RGB")
                    im.save(dest, "JPEG", quality=84, optimize=True, progressive=True)
                    print("ok", slug, k, url.rsplit("/", 1)[1][:5], flush=True); time.sleep(2); done = True; break
                except urllib.error.HTTPError as e:
                    if e.code in (400, 404):
                        break  # this size isn't available; try the next smaller one
                    w = min(int(e.headers.get("Retry-After") or 0) or 15, 120); print("HTTP", e.code, slug, "wait", w, flush=True); time.sleep(w)
                except Exception as e:
                    print("err", slug, e, flush=True); time.sleep(5)
            if done:
                break
        else:
            print("skip", slug, k, flush=True)
print("done", flush=True)

import io, json, os, sys, time, urllib.request, urllib.error
from PIL import Image, ImageOps
OUT = sys.argv[1]; res = json.load(open(OUT + "/ov/results2.json"))
UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
os.makedirs(OUT + "/ov/staged", exist_ok=True)
for slug, v in sorted(res.items()):
    for k, h in enumerate(v["hits"][:4]):
        dest = f"{OUT}/ov/staged/{v['animal']}-{slug}~{k}.jpg"
        if os.path.exists(dest): continue
        for url in (h["url"], h["thumbnail"]):
            try:
                data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
                im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert("RGB"); im.thumbnail((1200, 1200))
                im.save(dest, "JPEG", quality=84, optimize=True, progressive=True); print("ok", slug, k, im.size, flush=True); break
            except Exception as e:
                print("fail", slug, k, url[:60], e, flush=True); time.sleep(2)
        time.sleep(1.5)
print("done")

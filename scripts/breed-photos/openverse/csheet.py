import json, os, sys
from PIL import Image, ImageDraw, ImageFont
OUT, start, end, tag = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
names = {b["animal"] + "-" + b["slug"]: b["name"] for b in json.load(open(OUT + "/breeds.json"))}
groups = {}
for f in sorted(os.listdir(OUT + "/ov/staged")):
    if "~" in f:
        groups.setdefault(f.split("~")[0], []).append(f)
keys = sorted(groups)[start:end]
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
W, H = 230, 190
sheet = Image.new("RGB", (W * 8, H * ((len(keys) + 1) // 2)), "white"); d = ImageDraw.Draw(sheet)
for i, k in enumerate(keys):
    x0, y = (i % 2) * W * 4, (i // 2) * H
    for j, f in enumerate(groups[k][:4]):
        im = Image.open(OUT + "/ov/staged/" + f).convert("RGB"); im.thumbnail((W - 6, H - 28))
        sheet.paste(im, (x0 + j * W + 3, y + 3))
        d.text((x0 + j * W + 3, y + H - 22), f"{start+i}.{f.split('~')[1][0]} {names.get(k, k)[:20]}", fill="black", font=font)
    d.line([(x0 + 4 * W - 2, y), (x0 + 4 * W - 2, y + H)], fill="red", width=2)
sheet.save(f"{OUT}/ov/cand-{tag}.jpg", quality=80)
print(len(keys), len(groups))

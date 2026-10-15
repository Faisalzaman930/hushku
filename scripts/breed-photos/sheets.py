import json, os, sys
from PIL import Image, ImageDraw, ImageFont
OUT, start, end, tag = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
names = {b["animal"] + "-" + b["slug"]: b["name"] for b in json.load(open(OUT + "/breeds.json"))}
done = set(open(OUT + "/reviewed.txt").read().split()) if os.path.exists(OUT + "/reviewed.txt") else set()
files = [f for f in sorted(os.listdir(OUT + "/staged")) if f.endswith(".jpg") and f not in done and ("~" in f) == tag.startswith("c")][start:end]
if tag.startswith("mark"):
    open(OUT + "/reviewed.txt", "a").write("\n" + "\n".join(files)); sys.exit()
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
W, H, C = 220, 200, 6
R = (len(files) + C - 1) // C
sheet = Image.new("RGB", (W * C, H * R), "white"); d = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    im = Image.open(OUT + "/staged/" + f).convert("RGB"); im.thumbnail((W - 6, H - 28))
    x, y = (i % C) * W, (i // C) * H
    sheet.paste(im, (x + 3, y + 3))
    key = f[:-4].split("~")[0]
    d.text((x + 3, y + H - 22), f"{start + i} {names.get(key, key)[:24]}", fill="black", font=font)
sheet.save(f"{OUT}/review-{tag}.jpg", quality=80)
print(len(files))

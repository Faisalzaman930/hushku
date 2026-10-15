import json, os, sys
OUT = sys.argv[1]; picks = json.loads(sys.argv[2])  # {"animal-slug": index}
c = {**json.load(open(OUT + "/cand3.json")), **json.load(open(OUT + "/cand2_3.json"))}
ch = json.load(open(OUT + "/chosen.json")) if os.path.exists(OUT + "/chosen.json") else {}
for key, k in picks.items():
    slug = key.split("-", 1)[1]
    ch[key] = {**c[slug][k], "staged": f"{key}~{k}"}
json.dump(ch, open(OUT + "/chosen.json", "w"), indent=1)
print(len(ch))

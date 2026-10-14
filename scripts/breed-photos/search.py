"""For breeds with no usable Wikipedia lead image, search Wikimedia Commons for candidate photos.
Writes candidates.json: slug -> [info, ...] (up to 4 freely licensed photos each)."""
import json, sys, time, urllib.parse
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, sys.argv[1])
from fetch_lib import get, file_info  # noqa: E402

OUT = sys.argv[1]
breeds = {b["slug"]: b for b in json.load(open(OUT + "/breeds.json"))}
missing = json.load(open(OUT + "/missing.json"))


def search(slug):
    b = breeds[slug]
    kind = "dog" if b["animal"] == "dogs" else "cat"
    seen, out = set(), []
    for q in (f'"{b["name"]}" {kind}', f'intitle:"{b["name"]}"', b["name"]):
        r = get("https://commons.wikimedia.org/w/api.php", {"action": "query", "list": "search", "srnamespace": 6, "srlimit": 12, "srsearch": q + " filetype:bitmap"})
        for hit in r.get("query", {}).get("search", []):
            name = hit["title"].removeprefix("File:")
            if name in seen:
                continue
            seen.add(name)
            info = file_info(name)
            if info and (info.get("width") or 0) >= 500:
                out.append(info)
            if len(out) >= 4:
                return slug, out
    return slug, out


with ThreadPoolExecutor(5) as ex:
    res = dict(ex.map(search, missing))
json.dump(res, open(OUT + "/candidates.json", "w"), indent=1)
print("with candidates", sum(1 for v in res.values() if v), "none", sum(1 for v in res.values() if not v))

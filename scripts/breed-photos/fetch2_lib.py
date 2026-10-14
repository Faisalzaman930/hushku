"""Polite, batched version: ~50 titles per request, one request at a time, honours Retry-After."""
import json, re, sys, time, html, urllib.parse, urllib.request, urllib.error

UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app) python-urllib", "Accept-Encoding": "identity"}
FREE = re.compile(r"^(CC0|CC BY(-SA)? ?[0-9.]*|Public domain|PD|No restrictions)", re.I)


def get(url, params):
    q = url + "?" + urllib.parse.urlencode({**params, "format": "json", "formatversion": 2, "maxlag": 5})
    for attempt in range(8):
        try:
            with urllib.request.urlopen(urllib.request.Request(q, headers=UA), timeout=60) as r:
                time.sleep(4)
                return json.load(r)
        except urllib.error.HTTPError as e:
            wait = int(e.headers.get("Retry-After") or 0) or 30 * (attempt + 1)
            print("HTTP", e.code, "waiting", wait, flush=True)
            time.sleep(wait)
        except Exception as e:
            print("err", e, flush=True)
            time.sleep(10)
    raise SystemExit("gave up")



def meta_for(files):
    out = {}
    for i in range(0, len(files), 50):
        ch = files[i:i + 50]
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
            info = {"file": p["title"].removeprefix("File:"), "thumb": ii.get("thumburl") or ii["url"], "width": ii.get("width"), "height": ii.get("height"),
                    "license": lic, "licenseUrl": val("LicenseUrl"), "artist": re.sub(r"\s+", " ", val("Artist"))[:120] or "Unknown author", "source": ii.get("descriptionurl")}
            out[info["file"]] = info
            out[norm.get(p["title"], p["title"]).removeprefix("File:")] = info
            out[info["file"].replace(" ", "_")] = info
    return out

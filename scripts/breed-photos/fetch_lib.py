"""Find a freely licensed lead photo for every breed on Wikipedia/Wikimedia Commons.

Writes found.json: slug -> {file, thumb, license, licenseUrl, artist, source, title}
and missing.json for breeds with no usable free photo.
"""
import json, re, sys, time, urllib.parse, urllib.request, html
from concurrent.futures import ThreadPoolExecutor

UA = {"User-Agent": "HushkuBreedImages/1.0 (https://hushku.app; hello@hushku.app)"}
FREE = re.compile(r"^(CC0|CC BY(-SA)? ?[0-9.]*|Public domain|PD|cc-by|cc-by-sa|No restrictions)", re.I)


def get(url, params):
    q = url + "?" + urllib.parse.urlencode({**params, "format": "json", "formatversion": 2})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(q, headers=UA), timeout=30) as r:
                return json.load(r)
        except Exception as e:
            time.sleep(2 * (attempt + 1))
    return {}


def file_info(name):
    r = get("https://commons.wikimedia.org/w/api.php", {"action": "query", "titles": "File:" + name, "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1200})
    pages = r.get("query", {}).get("pages", [])
    if not pages or pages[0].get("missing"):
        return None  # local, non-free file on en.wikipedia
    ii = pages[0]["imageinfo"][0]
    md = ii.get("extmetadata", {})
    val = lambda k: html.unescape(re.sub(r"<[^>]+>", "", md.get(k, {}).get("value", ""))).strip()
    lic = val("LicenseShortName")
    if not FREE.match(lic):
        return None
    if ii.get("mime") not in ("image/jpeg", "image/png", "image/webp"):
        return None
    return {
        "file": name,
        "thumb": ii.get("thumburl") or ii["url"],
        "width": ii.get("width"),
        "height": ii.get("height"),
        "license": lic,
        "licenseUrl": val("LicenseUrl"),
        "artist": re.sub(r"\s+", " ", val("Artist"))[:120] or "Unknown author",
        "source": ii.get("descriptionurl"),
    }



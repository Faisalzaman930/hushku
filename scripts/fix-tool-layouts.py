import os
import re

# Maps tool folder name → canonical slug
TOOLS = {
    "age-calculator":       "age-calculator",
    "best-cat-quiz":        "best-cat-quiz",
    "best-dog-quiz":        "best-dog-quiz",
    "birthday-countdown":   "birthday-countdown",
    "breed-compare":        "breed-compare",
    "feeding-calculator":   "feeding-calculator",
    "first-aid-quiz":       "first-aid-quiz",
    "insurance-cost":       "insurance-cost",
    "name-generator":       "name-generator",
    "packing-checklist":    "packing-checklist",
    "pet-bmi":              "pet-bmi",
    "pet-health-quiz":      "pet-health-quiz",
    "pet-owner-quiz":       "pet-owner-quiz",
    "pet-sitter-cost":      "pet-sitter-cost",
    "photo-tips":           "photo-tips",
    "sitting-comparison":   "sitting-comparison",
    "symptom-checker":      "symptom-checker",
    "toxic-food":           "toxic-food",
    "vaccine-tracker":      "vaccine-tracker",
}

BASE = "/Users/mac/Desktop/hushku/app/tools"
OG_IMAGE = "https://hushku.app/screenshots/app-playdates.png"

updated = 0
for folder, slug in TOOLS.items():
    path = os.path.join(BASE, folder, "layout.tsx")
    if not os.path.exists(path):
        print(f"Not found: {path}")
        continue

    with open(path) as f:
        content = f.read()

    canonical_url = f"https://hushku.app/tools/{slug}"

    # Skip if already has canonical
    if "alternates" in content:
        print(f"Already has alternates: {folder}")
        continue

    # Add alternates + keywords + fix OG to include url and images + fix twitter images
    # Insert alternates after description line
    content = re.sub(
        r'(  description: "[^"]+",\n)',
        lambda m: m.group(0) + f'  keywords: "{slug.replace("-", " ")}, dog breed quiz, find my dog breed, best dog breed for me, Hushku",\n  alternates: {{ canonical: "{canonical_url}" }},\n',
        content,
        count=1
    )

    # Add url to openGraph
    content = re.sub(
        r'(  openGraph: \{[^}]*?)(\n  \})',
        lambda m: m.group(1) + f'\n    url: "{canonical_url}",\n    images: [{{ url: "{OG_IMAGE}", width: 1200, height: 630, alt: "Hushku — {slug.replace("-", " ").title()}" }}],' + m.group(2),
        content,
        count=1,
        flags=re.DOTALL
    )

    # Add image to twitter
    content = re.sub(
        r'(  twitter: \{[^}]*?)(\n  \})',
        lambda m: m.group(1) + f'\n    images: ["{OG_IMAGE}"],' + m.group(2),
        content,
        count=1,
        flags=re.DOTALL
    )

    with open(path, "w") as f:
        f.write(content)
    updated += 1
    print(f"Updated: {folder}")

print(f"\nDone. Updated {updated} layouts.")

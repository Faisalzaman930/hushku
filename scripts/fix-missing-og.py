"""
Adds missing openGraph.url, openGraph.images, and twitter blocks
to pages that have a canonical but no OG images.
"""
import re, os

OG_IMG = "https://hushku.app/screenshots/app-playdates.png"

PAGES = {
    # path: (canonical_url, og_title_fallback)
    "app/help-center/page.tsx": (
        "https://hushku.app/help-center",
        "Help Center | How to Use Hushku",
        "Learn how to use every feature of the Hushku pet app.",
    ),
    "app/help-center/playdate-matching/page.tsx": (
        "https://hushku.app/help-center/playdate-matching",
        "How to Find Pet Playdates on Hushku",
        "Step-by-step guide to finding compatible playdate partners for your dog or cat on Hushku.",
    ),
    "app/help-center/adoption-fostering/page.tsx": (
        "https://hushku.app/help-center/adoption-fostering",
        "How to Adopt or Foster a Pet on Hushku",
        "Learn how to browse adoption and fostering listings and submit requests on Hushku.",
    ),
    "app/help-center/lost-and-found/page.tsx": (
        "https://hushku.app/help-center/lost-and-found",
        "How to Report a Lost or Found Pet on Hushku",
        "Step-by-step guide to reporting a missing pet and alerting your community on Hushku.",
    ),
    "app/help-center/health-care/page.tsx": (
        "https://hushku.app/help-center/health-care",
        "How to Use Hushku's Health & Care Tracker",
        "Complete guide to Hushku's health features — daily care logs, weight tracker, health records and more.",
    ),
    "app/help-center/social-feed/page.tsx": (
        "https://hushku.app/help-center/social-feed",
        "How to Use the Hushku Social Feed",
        "Learn how to post photos, interact with other pet owners, and follow your local pet community on Hushku.",
    ),
    "app/help-center/shelters/page.tsx": (
        "https://hushku.app/help-center/shelters",
        "How to Find & Contact Animal Shelters on Hushku",
        "Learn how to search for verified animal shelters near you and send admission requests on Hushku.",
    ),
    "app/help-center/messaging/page.tsx": (
        "https://hushku.app/help-center/messaging",
        "How to Message on Hushku",
        "Learn how to send messages, photos, voice notes, and make calls on Hushku.",
    ),
    "app/help-center/your-profile/page.tsx": (
        "https://hushku.app/help-center/your-profile",
        "How to Set Up Your Profile on Hushku",
        "Learn how to create your owner profile, add your pets, and manage account settings on Hushku.",
    ),
    "app/privacy/page.tsx": (
        "https://hushku.app/privacy",
        "Privacy Policy | Hushku",
        "Learn how Hushku collects, uses, and protects your personal data.",
    ),
    "app/terms/page.tsx": (
        "https://hushku.app/terms",
        "Terms & Conditions | Hushku",
        "Read the Terms and Conditions governing your use of the Hushku app.",
    ),
    "app/breeds/page.tsx": (
        "https://hushku.app/breeds",
        "Dog & Cat Breed Directory | Hushku",
        "Browse 450+ dog and cat breeds with temperament scores, care guides, and health information.",
    ),
    "app/templates/page.tsx": (
        "https://hushku.app/templates",
        "Free Pet Templates | Hushku",
        "Free editable pet templates — adoption contracts, vaccination records, pet sitting forms and more.",
    ),
    "app/about/editorial/page.tsx": (
        "https://hushku.app/about/editorial",
        "Editorial Standards & Review Process | Hushku",
        "How Hushku researches, writes, fact-checks, and updates its pet care content.",
    ),
}

BASE = "/Users/mac/Desktop/hushku"
updated = 0

for rel_path, (url, title, desc) in PAGES.items():
    path = os.path.join(BASE, rel_path)
    if not os.path.exists(path):
        print(f"Not found: {rel_path}")
        continue

    with open(path) as f:
        content = f.read()

    if "openGraph" in content and "images" in content:
        print(f"Already has OG images: {rel_path}")
        continue

    og_block = f"""  openGraph: {{
    title: "{title}",
    description: "{desc}",
    type: "website",
    url: "{url}",
    images: [{{ url: "{OG_IMG}", width: 1200, height: 630, alt: "{title}" }}],
  }},
  twitter: {{
    card: "summary_large_image",
    title: "{title}",
    description: "{desc}",
    images: ["{OG_IMG}"],
  }},"""

    # Insert after the alternates line
    content = re.sub(
        r'(  alternates: \{ canonical: "[^"]+?" \},)',
        lambda m: m.group(0) + "\n" + og_block,
        content,
        count=1,
    )

    with open(path, "w") as f:
        f.write(content)
    updated += 1
    print(f"Fixed: {rel_path}")

print(f"\nDone. Fixed {updated} pages.")

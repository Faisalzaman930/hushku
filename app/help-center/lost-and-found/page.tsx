import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Lost and Found Pet Reports: How It Works";
const DESC = "How to report a lost pet in Hushku, see lost, found and rescue alerts near you, and contact the person who posted a report.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/lost-and-found" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/lost-and-found", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="lost-and-found"
      tour="lost-and-found"
      title="Lost and found"
      lead="Report a lost pet in a minute. People nearby see it in the Alerts tab and can reach you in the app."
      sections={[
  {
    "id": "report",
    "title": "Report a lost pet",
    "steps": [
      "Open the Alerts tab and tap Report a lost pet.",
      "Choose whose pet it is: My pet, or A pet I’m helping (a stray, a rescue or a pet in your care).",
      "Add photos, the pet’s name, breed, and colour or markings.",
      "Set when and roughly where they were last seen. Choose Not sure if you don’t know the time.",
      "Add anything that helps, like how to approach your pet, and a reward if you want to offer one.",
      "Post the report."
    ],
    "note": "If you offer a reward, it’s between you and whoever helps. Hushku does not handle or guarantee payment."
  },
  {
    "id": "alerts",
    "title": "See alerts near you",
    "body": "The Alerts tab shows reports near you in three tabs: Lost, Found and Rescue. Each report shows photos and the approximate area where the pet was last seen, never an exact address."
  },
  {
    "id": "contact",
    "title": "Contact the person who posted",
    "body": "Open a report and tap to get in touch. Tell them what it’s about, then continue to chat."
  },
  {
    "id": "found",
    "title": "Mark your pet as found",
    "body": "When your pet is home, open your report and tap Mark as found. You can also edit or delete a report at any time."
  },
  {
    "id": "notifications",
    "title": "Lost alerts",
    "body": "Hushku tells you when someone reports a lost pet close by. You can turn Lost alerts off at any time."
  }
]}
      faqs={[
  {
    "q": "Who can see my report?",
    "a": "People on Hushku near the area you set. They see an approximate area, never your address."
  },
  {
    "q": "Can I post a pet I found?",
    "a": "Yes. Choose A pet I’m helping when you post, so the owner can find it."
  }
]}
    />
  );
}

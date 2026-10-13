import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Your Profile and Pets: Setup and Privacy";
const DESC = "How to set up your Hushku profile, add pets, choose a public or private account, manage your Circle, and block or report someone.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/your-profile" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/your-profile", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="your-profile"
      tour="your-profile"
      title="Your profile"
      lead="Set up your profile, add your pets and choose who can see them."
      sections={[
  {
    "id": "signup",
    "title": "Sign up",
    "steps": [
      "Download Hushku and create your account.",
      "Choose how you want to use Hushku: Pet owner, Shelter, or Explorer if you’re just browsing for now. You can change this later.",
      "Add a photo, your name and a username."
    ]
  },
  {
    "id": "pet",
    "title": "Add your pet",
    "steps": [
      "Choose the pet type and add a name, breed, age and gender.",
      "Say whether your pet is spayed or neutered. This helps keep mating requests safe.",
      "Add photos and a few traits that describe their personality.",
      "Pick what you’re looking for: walks, playdates, mating or adoption."
    ],
    "note": "You can add more pets later from your profile."
  },
  {
    "id": "privacy",
    "title": "Public or private",
    "body": "In Settings, choose your account privacy. Public means anyone on Hushku can see your profile and pets. Private means your personal pets are only visible to people in your Circle."
  },
  {
    "id": "circle",
    "title": "Your Circle",
    "body": "Your Circle is the people you’ve met through Hushku and want to keep close. Add people by username or from people you’ve met, and choose who can add you: anyone, approval required, or nobody."
  },
  {
    "id": "safety",
    "title": "Block and report",
    "body": "Open someone’s profile or chat options to block or report them. Manage blocked accounts in Settings. Your exact location is never shown; others see an approximate area."
  }
]}
      faqs={[
  {
    "q": "Can I edit my profile later?",
    "a": "Yes. Open your profile and tap Edit profile to change your photo and details."
  },
  {
    "q": "Can I remove a pet?",
    "a": "Yes. Removing a pet permanently deletes its reminders, weight, health records and care team. Your conversations stay."
  }
]}
    />
  );
}

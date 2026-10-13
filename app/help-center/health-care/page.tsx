import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Health and Care Tracking: How It Works | Hushku Help";
const DESC = "How to set care reminders, log meals, water, walks and potty breaks, track weight, store health records, flea and tick and heat cycles, and share care with your care team in Hushku.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/health-care" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/health-care" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="health-care"
      tour="health-care"
      title="Health and care"
      lead="Everything about your pet’s day lives on the Home tab: reminders, a quick log, weight, health records, flea and tick, heat cycles and your care team."
      sections={[
  {
    "id": "log",
    "title": "Log the day",
    "body": "On Home, tap to log when your pet is fed, watered, walked or has a potty break. Everyone on the care team sees the same log, so nobody feeds Bella twice."
  },
  {
    "id": "reminders",
    "title": "Set a care reminder",
    "steps": [
      "On Home, add a reminder.",
      "Choose a type: feeding, water, walk, meds, vaccine or other.",
      "Set a title, date and time.",
      "Choose how often it repeats: none, daily, weekly or monthly. Add a note if you like.",
      "Save it."
    ]
  },
  {
    "id": "weight",
    "title": "Track weight",
    "body": "Add a weight entry whenever you weigh your pet. Hushku keeps the history so you can see the trend."
  },
  {
    "id": "records",
    "title": "Health records",
    "steps": [
      "Open Health records and add a record.",
      "Choose the type: vaccination, vet visit, medication, lab report or other.",
      "Add a title (for example, Rabies vaccine), the date and, if there is one, the next due date.",
      "Attach a document or photo and add notes.",
      "Save it."
    ]
  },
  {
    "id": "flea",
    "title": "Flea and tick",
    "body": "Log the treatment (for example, NexGard), the date you gave it, and how often it repeats: every one, two or three months."
  },
  {
    "id": "heat",
    "title": "Heat cycles",
    "body": "For female pets, log the start date, an end date if you know it, symptoms like swelling, spotting or restlessness, and notes."
  },
  {
    "id": "team",
    "title": "Your care team",
    "body": "Share your pet’s care with family, a partner or a sitter.",
    "steps": [
      "Open Care team for your pet.",
      "Tap Invite and search by username or email.",
      "Choose a role: Caregiver or Viewer.",
      "Send the invite. You can cancel pending invites or remove members later."
    ],
    "note": "The owner manages the pet. Caregivers help with the daily care; viewers can see it."
  }
]}
      faqs={[
  {
    "q": "Can I track more than one pet?",
    "a": "Yes. Add more pets from your profile and switch between them on Home."
  },
  {
    "q": "What happens to records if I remove a pet?",
    "a": "Removing a pet permanently deletes its reminders, weight, health records and care team. Your conversations stay."
  }
]}
    />
  );
}

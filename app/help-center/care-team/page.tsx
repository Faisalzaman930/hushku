import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Care Team: Share a Pet’s Care, Step by Step";
const DESC =
  "How to invite your partner, family or sitter to your pet’s Care Team in Hushku, choose caregiver or viewer, send a reminder, and remove someone.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/care-team" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/care-team", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="care-team"
      tour="care-team"
      title="Care Team"
      lead="Share your pet’s day with the people who help look after them. Everyone sees the same checklist, records and reminders, with who did what."
      sections={[
        {
          id: "invite",
          title: "Invite someone",
          body: "Only the pet’s owner can invite people. The person you invite needs a Hushku account.",
          steps: [
            "On Home, tap Manage next to Care Team.",
            "Tap the + at the top right.",
            "Search by username or email and choose the person.",
            "Choose a role: Caregiver or Viewer.",
            "Tap Send Invite. They’ll get a notification to accept or decline.",
          ],
        },
        {
          id: "roles",
          title: "Roles",
          bullets: [
            "Owner: manages the pet and the team, and can invite, cancel or remove people.",
            "Caregiver: can help manage the pet’s care, such as ticking off tasks, logging care and adding records.",
            "Viewer: can see the pet’s care but not change it.",
          ],
        },
        {
          id: "accept",
          title: "Accept an invite",
          steps: ["Open Notifications from the bell on Home.", "Find the invite, for example “Jess invited you to help care for Pepper.”", "Tap Accept. The pet now appears in your pet switcher at the top of Home."],
        },
        {
          id: "together",
          title: "Care together",
          body: "Tick off tasks in Today’s Care and use Quick Log for meals, water, walks and potty breaks. Each task shows who did it, and changes appear on everyone’s phone straight away.",
        },
        {
          id: "remind",
          title: "Remind someone about a task",
          steps: ["On Home, tap the bell next to a task in Today’s Care.", "Choose who to remind.", "Tap Send reminder. They get a push notification, and the bell gives a little shake to confirm."],
        },
        {
          id: "manage",
          title: "Remove someone or cancel an invite",
          body: "Open Care Team from Home. As the owner, tap Remove next to a member, or Cancel next to a pending invite.",
          note: "Each pet has its own care team. Adding someone to your dog’s team doesn’t give them access to your other pets.",
        },
        {
          id: "notifications",
          title: "Notifications",
          body: "Care reminders and Care team notifications each have their own switch in Settings, under Notifications.",
        },
      ]}
      faqs={[
        { q: "Does it cost anything to add people?", a: "No. Hushku is free, and so is adding people to a care team." },
        { q: "Can a caregiver invite other people?", a: "No. Only the owner can invite, cancel invites or remove members." },
        { q: "Can I be on more than one care team?", a: "Yes. Every pet you help with appears in your pet switcher on Home." },
      ]}
    />
  );
}

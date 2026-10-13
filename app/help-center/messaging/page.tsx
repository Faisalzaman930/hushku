import type { Metadata } from "next";
import HelpArticle from "../../components/HelpArticle";

const TITLE = "Messaging: How Chats Work | Hushku Help";
const DESC = "How chats work in Hushku: chats open when a request is accepted, and you can send photos, video and voice notes, reply, unsend, block and report.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/messaging" },
  openGraph: { title: TITLE, description: DESC, type: "article", url: "https://hushku.app/help-center/messaging" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function Page() {
  return (
    <HelpArticle
      slug="messaging"
      title="Messaging"
      lead="Every conversation on Hushku starts with a request about a pet. When it’s accepted, a private chat opens in the Messages tab."
      sections={[
  {
    "id": "start",
    "title": "How a chat starts",
    "body": "Send a walk, playdate, mating or adoption request on a pet or listing. When the other person accepts, a chat opens between you. You can also start a new message with anyone you have an accepted request with."
  },
  {
    "id": "send",
    "title": "What you can send",
    "bullets": [
      "Text messages",
      "Photos, from your library or the camera",
      "Videos",
      "Voice notes: hold to record, then send"
    ]
  },
  {
    "id": "actions",
    "title": "Reply, copy and unsend",
    "body": "Press and hold a message to reply to it, copy it, unsend your own message or report one."
  },
  {
    "id": "context",
    "title": "See which pet it’s about",
    "body": "The top of each chat shows the pet and the request that connected you. Tap it to view the pet."
  },
  {
    "id": "safety",
    "title": "Block or report",
    "body": "Open the chat options to block or report someone. When you block someone, they can’t message you. You can unblock them later in settings."
  },
  {
    "id": "delete",
    "title": "Delete a conversation",
    "body": "Delete a chat from the Messages tab. This removes it from your inbox; the other person keeps their copy."
  }
]}
      faqs={[
  {
    "q": "Can I call someone in Hushku?",
    "a": "Not at the moment. Chats support text, photos, video and voice notes."
  },
  {
    "q": "Why can’t I message someone?",
    "a": "You can message people once a request between you has been accepted. If they’ve blocked you or deleted their account, you won’t be able to send messages."
  }
]}
    />
  );
}

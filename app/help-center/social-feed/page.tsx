import { permanentRedirect } from "next/navigation";

/** The social feed isn't in the app yet; its page explains what's planned. */
export default function Page() {
  permanentRedirect("/social");
}

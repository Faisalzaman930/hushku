import { permanentRedirect } from "next/navigation";

/** Old duplicate of /lost-and-found that said the feature was "coming soon". */
export default function LostFoundPage() {
  permanentRedirect("/lost-and-found");
}

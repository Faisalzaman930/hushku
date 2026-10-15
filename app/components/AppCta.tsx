import Link from "next/link";
import { ChevronRight } from "lucide-react";
import WaitingList from "./WaitingList";

/**
 * An inline, in-context waitlist box: one specific thing the app does for what the reader is doing
 * right now, and an email field. `source` tags the signup (e.g. "breed:pug") for analytics and Brevo.
 */
export default function AppCta({
  title,
  body,
  source,
  link,
  eyebrow = "In the Hushku app",
  className = "",
}: {
  title: string;
  body: string;
  source: string;
  link?: { href: string; label: string };
  eyebrow?: string;
  className?: string;
}) {
  return (
    <aside className={`flex flex-col gap-3 rounded-3xl bg-brand-tint p-6 md:p-8 ${className}`} aria-label={title}>
      <p className="text-[13px] font-semibold text-brand-text">{eyebrow}</p>
      <h2 className="text-[21px] leading-[1.25] font-semibold text-label md:text-[24px]">{title}</h2>
      <p className="max-w-[60ch] text-[17px] leading-[26px] text-label">{body}</p>
      <div className="pt-1">
        <WaitingList cta="Get it at launch" source={source} />
      </div>
      {link ? (
        <Link href={link.href} className="inline-flex items-center self-start text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">
          {link.label} <ChevronRight size={16} aria-hidden />
        </Link>
      ) : null}
    </aside>
  );
}

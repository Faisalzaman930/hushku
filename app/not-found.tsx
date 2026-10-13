import Link from "next/link";
import { BookOpen, Calculator, ChevronRight, LifeBuoy, PawPrint } from "lucide-react";
import { Section, SectionHeader } from "./components/ui";
import DocumentTitle from "./components/DocumentTitle";

/** Shown for every missing page (served with a 404 status and noindex). */
export default function NotFound() {
  const links = [
    { href: "/help-center", title: "Help center", body: "Answers and guides to the app.", icon: LifeBuoy },
    { href: "/breeds", title: "Breed directory", body: "450+ dog and cat breeds.", icon: PawPrint },
    { href: "/tools", title: "Free pet tools", body: "Calculators and checkers.", icon: Calculator },
    { href: "/resources", title: "Pet care guides", body: "How-tos, health and training.", icon: BookOpen },
  ];
  return (
    <>
      <DocumentTitle title="Page not found | Hushku" />
      <Section className="!pt-16 lg:!pt-24">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-10">
          <SectionHeader
            as="h1"
            size="l"
            eyebrow="404"
            title="We can’t find that page."
            lead="It may have moved, or the link may be wrong. Here are some good places to go instead."
          />
          <ul className="grid w-full gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group flex items-center gap-4 rounded-3xl bg-surface p-5 transition-colors hover:bg-separator">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-[14px] bg-white text-brand-text">
                    <l.icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[17px] font-semibold text-label">{l.title}</span>
                    <span className="block text-[15px] text-label-2">{l.body}</span>
                  </span>
                  <ChevronRight size={18} className="text-label-3" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">Back to the home page</Link>
        </div>
      </Section>
    </>
  );
}

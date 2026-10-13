import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AppTour from "./AppTour";
import { TOURS } from "./tours";
import { Section, SectionHeader } from "../ui";

/** Feature-page preview: the first few screens of a walkthrough, plus a link to the full guide. */
export default function SeeItInTheApp({
  tour,
  guide,
  steps = 3,
  title = "See it in the app.",
  lead = "Tap the numbers to see what each part of the screen does.",
  alt = false,
}: {
  tour: keyof typeof TOURS | string;
  guide: string;
  steps?: number;
  title?: string;
  lead?: string;
  alt?: boolean;
}) {
  const all = TOURS[tour];
  if (!all) return null;
  return (
    <Section alt={alt} id="see-it-in-the-app">
      <div className="flex flex-col gap-12">
        <SectionHeader eyebrow="In the app" title={title} lead={lead} />
        <AppTour steps={all.slice(0, steps)} compact label={`${title} Walkthrough`} />
        <div className="flex flex-col items-center gap-2 border-t border-separator pt-8 text-center">
          <p className="text-[17px] text-label-2">
            {all.length > steps ? `${all.length - steps} more screens in the full guide.` : "Every step, explained."}
          </p>
          <Link href={guide} className="inline-flex items-center gap-1 text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">
            Read the full step-by-step guide <ChevronRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { usePathname } from "next/navigation";
import WaitingList from "./WaitingList";
import { Device, StoreStatus } from "./ui";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** The one closing call to action at the foot of every page (except /join, which is the waitlist). */
export default function WaitlistBanner() {
  const pathname = usePathname();
  if (pathname === "/join") return null;
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 overflow-hidden rounded-[32px] bg-surface px-6 pt-10 md:grid-cols-[1.1fr_1fr] md:px-12 md:pt-16">
        <div className="flex flex-col items-start gap-3 pb-2 md:pb-16">
          <p className="text-[15px] font-semibold text-brand-text">Get the app</p>
          <h2 id="waitlist-title" className="text-[28px] leading-[1.16] font-semibold tracking-[-0.012em] text-balance text-label md:text-[34px] lg:text-[40px] lg:leading-[1.1]">
            Everything happens in the app.
          </h2>
          <p className="max-w-[52ch] text-[17px] leading-[26px] text-label-2">
            Playdates, adoption, lost and found alerts and your pet&apos;s care all live in Hushku for iPhone and Android. The app is built and on its way to the stores.
          </p>
          <div className="mt-4 w-full">
            <WaitingList />
          </div>
          <StoreStatus className="mt-4 !justify-start" />
          <p className="mt-4 text-[15px] text-label-2">
            Got a soft spot for animals?{" "}
            <Link href="/about#volunteer" className="inline-flex items-center font-medium text-brand-text hover:underline underline-offset-[3px]">
              Volunteer with us
              <ChevronRight size={14} strokeWidth={2.25} />
            </Link>
          </p>
        </div>
        <div className="flex justify-center pb-10 md:pb-16">
          <Device screen="welcome" />
        </div>
      </div>
    </section>
  );
}

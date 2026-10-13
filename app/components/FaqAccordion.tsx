import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs, title = "Questions." }: { faqs: FaqItem[]; title?: string }) {
  return (
    <section className="bg-bg-2 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[680px]">
        <h2 className="mb-10 text-center text-[32px] leading-[1.12] font-semibold tracking-[-0.015em] text-label md:text-[40px]">
          {title === "Frequently Asked Questions" ? "Questions." : title}
        </h2>
        <div className="border-t border-separator">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-b border-separator" open={i === 0}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[19px] leading-[26px] font-semibold tracking-[-0.005em] text-label [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown size={20} className="flex-none text-label-2 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pr-10 pb-6 text-[17px] leading-[26px] tracking-[-0.011em] text-label-2">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

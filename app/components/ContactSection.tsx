import { Mail } from "lucide-react";

/** Contact strip. The address is real and works today; there is no web form to fail. */
const ContactSection = () => (
  <section id="contact" className="px-4 py-12 md:px-8">
    <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 rounded-3xl bg-bg-2 p-6 md:flex-row md:items-center md:p-8">
      <div>
        <h2 className="text-[21px] leading-[1.25] font-semibold tracking-[-0.008em] text-label md:text-[24px]">Questions, partnerships or press?</h2>
        <p className="mt-1 text-[17px] leading-[26px] text-label-2">Shelters, rescues, vets and owners: write to us and a real person replies.</p>
      </div>
      <p className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-[17px] font-medium text-label ring-1 ring-separator select-all">
        <Mail size={18} strokeWidth={1.75} className="text-brand-text" />
        <a href="mailto:hello@hushku.app">hello@hushku.app</a>
      </p>
    </div>
  </section>
);

export default ContactSection;

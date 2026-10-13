import {
  BookOpen,
  Building2,
  Calculator,
  Check,
  FileText,
  Heart,
  Home as HomeIcon,
  MapPin,
  Minus,
  PawPrint,
  ShieldCheck,
  Syringe,
} from "lucide-react";
import WaitingList from "./components/WaitingList";
import FaqAccordion from "./components/FaqAccordion";
import { HushkuLogo } from "./components/Logo";
import {
  ButtonLink,
  Device,
  DeviceTrio,
  FeatureTile,
  LinkCard,
  Section,
  SectionHeader,
  Steps,
  TextLink,
} from "./components/ui";

const FAQS = [
  { q: "Is Hushku free?", a: "Yes. Hushku is free for dog and cat owners, shelters and rescues, with no subscription." },
  { q: "Can I use Hushku on the website?", a: "No. Every feature lives in the Hushku app for iPhone and Android. This website explains how it works and hosts free guides, tools and breed profiles." },
  { q: "When can I download it?", a: "The app is built and on its way to the App Store and Google Play. Join the waitlist and we’ll email you once, on launch day." },
  { q: "Can people see where I live?", a: "No. Others see your general area and an approximate distance, never your address. Lost pet reports show an approximate area too." },
  { q: "Is it for cats too?", a: "Yes. Everything in Hushku works for dogs and cats." },
  { q: "We’re a shelter. Is Hushku for us?", a: "Yes. Shelters and rescues get their own free accounts to list animals for adoption and fostering. Email hello@hushku.app to talk to us before launch." },
];

const COMPARE: { label: string; values: (boolean | string)[] }[] = [
  { label: "Adoption and fostering", values: [true, "Adoption only", false] },
  { label: "Playdates and walk buddies", values: [true, false, false] },
  { label: "Lost and found reports", values: [true, false, false] },
  { label: "Health and care tracking", values: [true, false, false] },
  { label: "Pet sitting and walking services", values: [false, false, true] },
  { label: "Price", values: ["Free", "Free", "Paid services"] },
];

function Cell({ v, us }: { v: boolean | string; us: boolean }) {
  if (v === true)
    return (
      <>
        <Check size={18} strokeWidth={2.25} className={`mx-auto ${us ? "text-brand-text" : "text-label-2"}`} aria-hidden />
        <span className="sr-only">Yes</span>
      </>
    );
  if (v === false)
    return (
      <>
        <Minus size={18} strokeWidth={2} className="mx-auto text-label-3" aria-hidden />
        <span className="sr-only">No</span>
      </>
    );
  return <>{v}</>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="px-4 pt-16 md:px-8 lg:pt-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
          <div className="flex max-w-[880px] flex-col items-center gap-4 text-center">
            <p className="text-[15px] font-semibold text-brand-text">Built. Coming soon to the App Store and Google Play.</p>
            <h1 id="hero-title" className="text-[44px] leading-[1.06] font-semibold tracking-[-0.022em] text-balance text-label md:text-[56px] lg:text-[80px] lg:leading-[1.05] lg:tracking-[-0.025em]">
              Every pet app. One quiet place.
            </h1>
            <p className="max-w-[620px] text-[19px] leading-[1.45] text-pretty text-label-2 lg:text-[21px]">
              Playdates, adoption, lost and found reports and your pet&apos;s daily care, for dogs and cats. Free.
            </p>
            <div className="mt-4 w-full">
              <WaitingList center />
            </div>
          </div>
          <div className="w-full">
            <DeviceTrio />
          </div>
        </div>
      </section>

      {/* Bento */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="One app" title="Everything your pet needs." lead="Owners juggle five apps for one pet. Hushku brings it together, and keeps it calm." />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <FeatureTile
              className="md:col-span-2"
              icon={Heart}
              eyebrow="Playdates"
              title="Meet their match."
              body="Dogs and cats nearby looking for a playdate or a walk buddy. Send an invite; when it’s a yes, a chat opens."
              href="/playdates"
              linkLabel="How playdates work"
            />
            <FeatureTile
              className="md:col-span-2 lg:col-span-1 lg:row-span-2"
              tone="brand"
              icon={MapPin}
              eyebrow="Lost & found"
              title="Lost, then found."
              body="Lost, found and rescue reports near you, with photos and roughly where each pet was last seen."
              href="/lost-and-found"
              linkLabel="Learn more"
            />
            <FeatureTile icon={Syringe} eyebrow="Health & care" title="Their whole health, in your pocket." href="/health" linkLabel="Learn more" />
            <FeatureTile icon={HomeIcon} eyebrow="Adoption & fostering" title="Find the one who’s looking for you." href="/adoption" linkLabel="Learn more" />
            <FeatureTile
              className="md:col-span-2 lg:col-span-3"
              icon={Building2}
              eyebrow="Shelters & rescues"
              title="Every rescue near you, in one place."
              body="Shelters get free accounts to list animals for adoption and fostering. Owners find them in Discover."
              href="/shelters"
              linkLabel="For shelters"
            />
          </div>
        </div>
      </Section>

      {/* Getting started */}
      <Section alt>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Getting started" title="Set up in two minutes." />
          <Steps
            items={[
              { title: "Tell us about you", body: "Pick an owner or shelter account and set your area. Your exact address is never shown." },
              { title: "Add your pet", body: "Photos, breed, age, personality and what you’re looking for: walks, playdates, mating or adoption." },
              { title: "Use it all, in one place", body: "Daily care, nearby pets, lost and found reports and chat, from the same five tabs." },
            ]}
          />
        </div>
      </Section>

      {/* Story: lost & found (dark) */}
      <Section dark>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <SectionHeader
            dark
            align="start"
            size="l"
            eyebrow="Lost & found"
            title="Lost, then found."
            lead="Post a report in a minute: photos, when and roughly where they were last seen, and a reward if you like. People nearby see it in the Alerts tab and can reach you in the app."
          >
            <TextLink href="/lost-and-found" className="!text-[#FF7A90]">How reports work</TextLink>
          </SectionHeader>
          <div className="flex justify-center">
            <Device screen="alerts" />
          </div>
        </div>
      </Section>

      {/* Story: care team */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <Device screen="home" />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeader
              align="start"
              size="l"
              eyebrow="Health & care"
              title="Care, shared."
              lead="Reminders, a quick log of meals and walks, weight, records, flea and tick and heat cycles. Invite family or a sitter, and see who fed Bella this morning."
            >
              <TextLink href="/health">Explore health & care</TextLink>
            </SectionHeader>
          </div>
        </div>
      </Section>

      {/* Story: requests and chat */}
      <Section alt>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <SectionHeader
            align="start"
            size="l"
            eyebrow="Requests & messages"
            title="Ask first. Then talk."
            lead="Every conversation starts with a request about a pet: a walk, a playdate, mating or adoption. When the owner accepts, a private chat opens. Photos, video and voice notes included."
          >
            <TextLink href="/help-center/messaging">How messaging works</TextLink>
          </SectionHeader>
          <div className="flex justify-center gap-6">
            <Device screen="pet-profile" size="sm" tilt="left" className="hidden lg:block" />
            <Device screen="chat" />
          </div>
        </div>
      </Section>

      {/* Compare */}
      <Section alt>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Compare" title="Five apps, or one." />
          <div className="relative w-full overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 text-[15px] leading-5">
              <caption className="sr-only">Hushku compared with Petfinder and Rover</caption>
              <thead>
                <tr>
                  <th scope="col" className="border-b border-separator p-4"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="rounded-t-[14px] border-b border-separator bg-brand-tint p-4 font-semibold text-label">
                    <span className="inline-flex items-center gap-1.5 text-brand">
                      <HushkuLogo variant="mark" className="h-5 w-auto" title="" />
                      <span className="text-label">Hushku</span>
                    </span>
                  </th>
                  <th scope="col" className="border-b border-separator p-4 font-semibold text-label">Petfinder</th>
                  <th scope="col" className="border-b border-separator p-4 font-semibold text-label">Rover</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r, ri) => (
                  <tr key={r.label}>
                    <th scope="row" className="border-b border-separator p-4 text-left font-medium text-label">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td
                        key={i}
                        className={`border-b border-separator p-4 text-center ${i === 0 ? `bg-brand-tint text-label ${ri === COMPARE.length - 1 ? "rounded-b-[14px]" : ""}` : "text-label-2"}`}
                      >
                        <Cell v={v} us={i === 0} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Free on the web */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Free for every owner" title="Guides, tools and breeds." lead="Free on the web, no sign-up needed." />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {[
              ["25+", "Free pet tools"],
              ["450+", "Dog and cat breeds"],
              ["50+", "Free templates"],
              ["200+", "Pet care guides"],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col-reverse gap-1">
                <dt className="text-[15px] leading-5 text-label-2">{l}</dt>
                <dd className="text-[40px] leading-[44px] font-semibold tracking-[-0.02em] text-label tabular-nums lg:text-[48px] lg:leading-[52px]">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <LinkCard icon={Calculator} title="Pet age calculator" body="Dog and cat years to human years." href="/tools/age-calculator" />
            <LinkCard icon={PawPrint} title="Breed directory" body="Size, temperament and care for 450+ breeds." href="/breeds" />
            <LinkCard icon={ShieldCheck} title="Toxic food checker" body="Is this food safe for your pet?" href="/tools/toxic-food" />
            <LinkCard icon={BookOpen} title="The 3-3-3 rule for rescue dogs" body="The first days, weeks and months." href="/resources/3-3-3-rule-for-rescue-dogs" />
            <LinkCard icon={BookOpen} title="How to crate train a puppy" body="A calm, step-by-step plan." href="/resources/how-to-crate-train-a-puppy" />
            <LinkCard icon={FileText} title="Free pet templates" body="Care sheets, records and contracts." href="/templates" />
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/tools" variant="secondary">All tools</ButtonLink>
            <ButtonLink href="/resources" variant="secondary">All guides</ButtonLink>
          </div>
        </div>
      </Section>

      <FaqAccordion faqs={FAQS} title="Questions." />
    </>
  );
}

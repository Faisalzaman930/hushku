import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hushku",
  description: "Read the Terms and Conditions governing your use of the Hushku app — covering pet matching, adoption, fostering, messaging, lost & found, vets, and premium features.",
  alternates: { canonical: "https://hushku.app/terms" },
  openGraph: {
    title: "Terms & Conditions | Hushku",
    description: "Read the Terms and Conditions governing your use of the Hushku app.",
    type: "website",
    url: "https://hushku.app/terms",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Terms & Conditions | Hushku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Hushku",
    description: "Read the Terms and Conditions governing your use of the Hushku app.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

const LAST_UPDATED = "May 20, 2026";

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-ebony py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-xs font-black text-white/70 uppercase tracking-widest mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">

            <Intro />

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using Hushku — including our mobile application on iOS or Android, our website at hushku.app, or any related services — you agree to be bound by these Terms and Conditions (&quot;Terms&quot;).</p>
              <p>If you do not agree to these Terms, do not use the Service. We may update these Terms at any time. We will notify you of material changes via the app or email. Continued use of Hushku after changes constitutes your acceptance of the revised Terms.</p>
            </Section>

            <Section title="2. Eligibility">
              <ul>
                <li>You must be at least <strong>13 years old</strong> to create an account.</li>
                <li>Users aged 13–17 must have explicit parental or guardian consent.</li>
                <li>By creating an account, you confirm that all information you provide is accurate and truthful.</li>
                <li>You may not create an account on behalf of another person without their consent.</li>
              </ul>
            </Section>

            <Section title="3. Your Account">
              <ul>
                <li>You are responsible for maintaining the confidentiality of your account credentials (email, password, OTP codes).</li>
                <li>You are responsible for all activity that occurs under your account.</li>
                <li>You must notify us immediately at <a href="mailto:hello@hushku.app">hello@hushku.app</a> if you suspect unauthorised access to your account.</li>
                <li>Each person may hold only one Hushku account. Creating multiple accounts to circumvent bans or restrictions is prohibited.</li>
                <li>We reserve the right to suspend or permanently terminate accounts that violate these Terms, at our sole discretion and without prior notice where necessary for user safety.</li>
              </ul>
            </Section>

            <Section title="4. Acceptable Use">
              <p>You agree to use Hushku only for lawful purposes and in a manner consistent with these Terms. You must not:</p>
              <ul>
                <li>Post false, misleading, or fraudulent pet listings, profiles, or lost & found reports.</li>
                <li>Harass, threaten, abuse, or harm other users.</li>
                <li>Post or transmit content that is illegal, defamatory, obscene, sexually explicit, hateful, or that promotes animal cruelty.</li>
                <li>Use Hushku to operate commercial breeding operations, pet mills, or any activity involving the sale of animals for profit without appropriate disclosure.</li>
                <li>Impersonate another person or entity, or misrepresent your affiliation with any person or organisation.</li>
                <li>Scrape, crawl, or harvest data from the platform without our written permission.</li>
                <li>Attempt to gain unauthorised access to our systems, databases, or other users' accounts.</li>
                <li>Use the platform to send spam, unsolicited messages, or distribute malware.</li>
                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                <li>Violate any applicable local, national, or international laws or regulations.</li>
              </ul>
              <p>We reserve the right to remove any content that violates these rules and to suspend or terminate accounts at our discretion.</p>
            </Section>

            <Section title="5. Pet Matching & Playdates">
              <p>Hushku's core matching feature connects pet owners for playdates and social meetups. By using this feature:</p>
              <ul>
                <li>You understand that Hushku facilitates introductions but is not responsible for the outcome of any playdate or in-person meeting.</li>
                <li>You accept full responsibility for the behaviour of your pet during any meetup arranged through the platform.</li>
                <li>You agree to meet in safe, public locations, particularly for first meetings with other users.</li>
                <li>You accept that pet interactions carry inherent risks including injury to pets or people, and you participate at your own risk.</li>
                <li>Identity verification helps improve safety but does not guarantee the identity or intentions of any user. Exercise your own judgement.</li>
              </ul>
            </Section>

            <Section title="6. Adoption & Fostering">
              <p>Hushku facilitates connections between pet owners, adopters, foster carers, shelters, and rescues. We are a technology platform, not an adoption or rescue organisation. We are not a party to any adoption or fostering arrangement and are not responsible for:</p>
              <ul>
                <li>The accuracy of any pet listing, health history, or temperament description posted by users or shelters.</li>
                <li>The outcome of any adoption, fostering, or rehoming arrangement.</li>
                <li>The health, behaviour, or welfare of any pet listed on the platform.</li>
                <li>Any fees charged by rescues, shelters, or individual pet owners in connection with an adoption.</li>
              </ul>
              <p>All adoption and fostering arrangements are solely between the parties involved. We strongly encourage due diligence, home checks, and proper documentation before completing any animal transfer.</p>
              <p>Posting a pet for adoption or fostering on Hushku does not constitute legal transfer of ownership. Legal ownership transfer requires appropriate documentation between the parties.</p>
            </Section>

            <Section title="7. Lost & Found">
              <p>The Lost & Found feature allows users to report missing pets and alert their local community. By using this feature:</p>
              <ul>
                <li>You confirm that reports you submit are truthful and relate to actual missing or found animals.</li>
                <li>False or misleading lost & found reports are a violation of these Terms and may result in account suspension.</li>
                <li>Hushku is not responsible for the recovery or welfare of any reported animal.</li>
                <li>If you find an animal, you are responsible for following local laws regarding stray animals, which may require contacting animal control authorities.</li>
                <li>Contact details you include in a lost & found report are visible to other users in your area. Only include information you are comfortable sharing publicly.</li>
              </ul>
            </Section>

            <Section title="8. Vet Discovery">
              <p>Hushku's vet directory helps users find veterinary clinics. Please note:</p>
              <ul>
                <li>Vet listings may be sourced from third-party directories or submitted by users. We do not guarantee the accuracy, availability, or quality of any listed veterinary service.</li>
                <li>Hushku is not a medical service. Nothing on the platform constitutes veterinary advice. Always consult a qualified veterinarian for your pet's health needs.</li>
                <li>Hushku is not responsible for any outcome resulting from a vet appointment arranged through the platform.</li>
                <li>In a pet emergency, contact your nearest emergency veterinary clinic directly — do not rely solely on in-app searches.</li>
              </ul>
            </Section>

            <Section title="9. Pet Health Records">
              <p>Hushku provides tools for storing pet health information including vaccination records, weight logs, care reminders, heat cycle tracking, and flea/tick schedules. By using these features:</p>
              <ul>
                <li>You are responsible for the accuracy of all health information you enter.</li>
                <li>Health records stored in Hushku are for your personal reference only and do not constitute official veterinary records.</li>
                <li>Hushku is not liable for any harm resulting from inaccurate health records, missed reminders, or reliance on app-stored data in lieu of professional veterinary advice.</li>
                <li>We recommend maintaining paper or official digital records with your veterinarian in addition to any records stored in Hushku.</li>
              </ul>
            </Section>

            <Section title="10. Messaging">
              <p>Hushku provides in-app messaging between matched users. By using messaging:</p>
              <ul>
                <li>You agree not to use messaging to harass, threaten, solicit, or engage in any prohibited activity under Section 4.</li>
                <li>Do not share sensitive personal information (home address, financial details) via Hushku messages until you have established sufficient trust with the other party.</li>
                <li>We may review messages if reported for abuse, in response to a legal requirement, or to protect user safety. We do not routinely read private messages.</li>
                <li>Messages are stored on our servers to deliver the conversation. They are deleted when you delete your account.</li>
              </ul>
            </Section>

            <Section title="11. Premium Features">
              <p>Hushku offers optional premium features available through a paid subscription (&quot;Hushku Premium&quot;). By purchasing Premium:</p>
              <ul>
                <li>Subscriptions are billed according to the pricing displayed at the time of purchase, via the Apple App Store or Google Play Store.</li>
                <li>Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date through your App Store or Google Play account settings.</li>
                <li>Refunds are subject to the refund policies of Apple App Store or Google Play Store respectively. We do not issue direct refunds for in-app purchases.</li>
                <li>We reserve the right to change premium pricing or features with reasonable notice to subscribers.</li>
                <li>Free core features (matching, messaging, adoption browsing, lost & found, vet search, basic health records) will remain available to all users regardless of subscription status.</li>
              </ul>
            </Section>

            <Section title="12. Push Notifications">
              <p>If you enable push notifications, Hushku will send you alerts as described in our Privacy Policy. You can disable push notifications at any time in your device settings or in the Hushku Settings screen. Disabling notifications does not affect your account or access to any features.</p>
            </Section>

            <Section title="13. User Content">
              <p>You retain ownership of content you post on Hushku — including photos, pet bios, adoption listings, messages, and comments. By posting content, you grant Hushku a non-exclusive, royalty-free, worldwide, transferable licence to use, display, reproduce, and distribute that content solely to operate and promote the Service.</p>
              <p>You are solely responsible for the content you post. Do not post content that is illegal, defamatory, obscene, or that infringes the intellectual property rights of others.</p>
              <p>We reserve the right to remove any content that violates these Terms without notice.</p>
            </Section>

            <Section title="14. Volunteer Programme">
              <p>Volunteers who contribute to Hushku (developers, designers, vets, shelter workers, and community members) do so without expectation of financial compensation unless a separate written agreement has been executed. We reserve the right to accept or decline volunteer applications. Volunteer contributions may be used within the platform at our discretion.</p>
            </Section>

            <Section title="15. Intellectual Property">
              <p>All Hushku branding, design, logos, code (excluding open-source components), and platform content are the intellectual property of Hushku and its founders. You may not reproduce, distribute, reverse-engineer, or create derivative works from our platform without written permission.</p>
              <p>The Hushku name, paw logo, and related marks are protected. The former name &quot;Furrly&quot; and associated assets remain the property of Hushku.</p>
            </Section>

            <Section title="16. Third-Party Services">
              <p>Hushku integrates with or links to third-party services including Supabase (database & auth), Geoapify (maps), Brevo (email), Apple App Store, Google Play Store, Apple Push Notification Service, and Firebase Cloud Messaging. We are not responsible for the content, privacy practices, uptime, or reliability of those services. Use them at your own discretion and review their respective terms and policies.</p>
            </Section>

            <Section title="17. Disclaimers">
              <p>Hushku is provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> without warranties of any kind, express or implied. We do not guarantee that:</p>
              <ul>
                <li>The Service will be uninterrupted, error-free, or free from bugs or security vulnerabilities.</li>
                <li>Pet listings, health information, lost & found reports, or vet details are accurate or current.</li>
                <li>Playdates, adoptions, or fostering arrangements arranged through the platform will be successful or safe.</li>
                <li>Push notifications will be delivered on time or at all.</li>
                <li>The Service will meet your specific requirements.</li>
              </ul>
            </Section>

            <Section title="18. Limitation of Liability">
              <p>To the fullest extent permitted by applicable law, Hushku and its founders, employees, and contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, including but not limited to:</p>
              <ul>
                <li>Pet injuries, illness, or death resulting from playdates, adoptions, or fostering arranged through the platform.</li>
                <li>Harm to users during in-person meetings arranged via the app.</li>
                <li>Lost or found animal outcomes.</li>
                <li>Reliance on health records, care reminders, or vet information stored or found in the app.</li>
                <li>Data loss, unauthorised access, or security incidents despite our reasonable security measures.</li>
              </ul>
              <p>Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months prior to the claim (which, for free features, is £0 / $0).</p>
            </Section>

            <Section title="19. Governing Law">
              <p>These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or your use of Hushku shall be subject to the exclusive jurisdiction of the courts of England and Wales, unless mandatory consumer protection laws in your country provide otherwise.</p>
            </Section>

            <Section title="20. Termination">
              <p>We reserve the right to suspend or terminate your access to Hushku at any time, with or without notice, for any reason including violation of these Terms or actions that harm other users or animals.</p>
              <p>You may delete your account at any time via Settings → Delete Account within the app, or by contacting us at <a href="mailto:hello@hushku.app">hello@hushku.app</a>. Account deletion removes your profile, pet data, listings, and messages from our systems within 30 days.</p>
            </Section>

            <Section title="21. Contact Us">
              <p>For questions about these Terms, to report abuse, or for any legal inquiries:</p>
              <ul>
                <li>Email: <a href="mailto:hello@hushku.app">hello@hushku.app</a></li>
                <li>Website: <a href="https://hushku.app">hushku.app</a></li>
              </ul>
            </Section>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link href="/privacy" className="text-sm font-bold text-brand-start hover:underline">
              Read our Privacy Policy →
            </Link>
            <Link href="/" className="text-sm font-bold text-slate-gray hover:text-ebony transition-colors">
              ← Back to Hushku
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Intro() {
  return (
    <div className="bg-gray-50 rounded-3xl p-6 mb-10 border border-gray-100">
      <p className="text-sm leading-7 text-slate-gray">
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of Hushku (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), including our mobile application on iOS and Android and our website at{" "}
        <a href="https://hushku.app" className="text-brand-start font-bold">hushku.app</a>{" "}
        (collectively, the &quot;Service&quot;). Please read these Terms carefully before using the Service.
      </p>
      <p className="text-sm leading-7 text-slate-gray mt-3">
        Hushku is a pet super-app offering playdate matching, direct messaging, adoption, fostering, shelter discovery, lost &amp; found alerts, vet discovery, pet health records, push notifications, and premium features. These Terms apply to all features of the Service.
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black text-ebony uppercase tracking-tight mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="text-sm leading-7 text-slate-gray space-y-3 [&_a]:text-brand-start [&_a]:font-bold [&_a:hover]:underline [&_strong]:text-ebony [&_ul]:mt-3 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}

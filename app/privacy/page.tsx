import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hushku",
  description: "Learn how Hushku collects, uses, and protects your personal data — including location, pet profiles, messaging, health records, and push notifications.",
  alternates: { canonical: "https://hushku.app/privacy" },
};

const LAST_UPDATED = "May 20, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-ebony py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-xs font-black text-white/70 uppercase tracking-widest mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">

            <Intro />

            <Section title="1. Information We Collect">
              <p>We collect information you provide directly and information generated automatically when you use Hushku.</p>

              <h4>Account & profile information</h4>
              <ul>
                <li><strong>Account credentials</strong> — name, email address, and password when you register. You may also sign up via OTP (one-time passcode) sent to your email.</li>
                <li><strong>Owner profile</strong> — display name, profile photo, bio, and your location (city/neighbourhood) used to show you nearby pets and owners.</li>
                <li><strong>Pet profiles</strong> — pet name, species, breed, age, gender, photos, personality tags, and any health notes you choose to add.</li>
              </ul>

              <h4>In-app activity</h4>
              <ul>
                <li><strong>Adoption & fostering listings</strong> — if you post a pet for adoption or fostering, we store the listing content including photos, description, and contact preferences.</li>
                <li><strong>Adoption & foster requests</strong> — when you submit or receive a request, we store the request details and status.</li>
                <li><strong>Messages</strong> — direct messages and playdate chat between matched users are stored on our servers to deliver and display them. We do not read your private messages for advertising purposes.</li>
                <li><strong>Lost & Found reports</strong> — pet descriptions, photos, last-known location, and contact details you submit for lost or found animals.</li>
                <li><strong>Vet interactions</strong> — vet searches, bookings, and any notes you attach to vet visits within the app.</li>
                <li><strong>Health records</strong> — vaccination records, weight logs, care reminders, heat cycle tracking, and flea/tick logs you choose to store in your pet's health wallet.</li>
                <li><strong>Votes and feature requests</strong> — your votes and submissions on the product roadmap.</li>
              </ul>

              <h4>Location data</h4>
              <ul>
                <li><strong>Approximate location</strong> — city or neighbourhood level, collected at registration and used to show you nearby pets, shelters, vets, lost animals, and playdate matches.</li>
                <li><strong>Precise GPS</strong> — only collected with your explicit permission on your device. Used for real-time proximity matching and map features. You can revoke this permission at any time in your device settings.</li>
                <li><strong>Location bias</strong> — when you search for vets or pets, we may use your stored location to bias search results toward your area via the Geoapify mapping service.</li>
              </ul>

              <h4>Device & usage data</h4>
              <ul>
                <li><strong>Device information</strong> — device type, operating system, app version, and unique device identifiers (including Capacitor device ID for push notifications).</li>
                <li><strong>Push notification tokens</strong> — if you grant notification permission, we store your push token to deliver alerts about new matches, messages, adoption requests, lost pet alerts, and app updates.</li>
                <li><strong>Usage analytics</strong> — screens visited, features used, session duration, and in-app events. Collected via analytics tools to improve the product.</li>
                <li><strong>Crash reports</strong> — anonymous error logs to help us fix bugs.</li>
                <li><strong>IP address</strong> — logged by our hosting provider (Vercel/Supabase) for security and abuse prevention.</li>
              </ul>

              <h4>Photos & media</h4>
              <ul>
                <li>Photos you upload (pet photos, profile photos, adoption listings) are stored in our cloud storage and served via CDN. We do not use your photos to train AI models.</li>
                <li>Video content uploaded for meet-and-greet or listing purposes is stored and processed solely to deliver the feature.</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Operate and deliver all core Hushku features — playdate matching, messaging, adoption, fostering, lost & found, vet discovery, and health records.</li>
                <li>Show you nearby pets, shelters, vets, and other owners based on your location.</li>
                <li>Send push notifications for new matches, messages, adoption request updates, lost pet alerts, and care reminders (only if you have granted notification permission).</li>
                <li>Send transactional emails — OTP codes for login, waitlist confirmation, and important account notices.</li>
                <li>Personalise your feed and discovery results based on your pet's profile and preferences.</li>
                <li>Power real-time features — live messaging, online presence indicators, and real-time adoption listing updates via Supabase Realtime.</li>
                <li>Maintain and improve the platform — fixing bugs, improving performance, and building new features based on usage patterns.</li>
                <li>Prevent fraud, abuse, and violations of our Terms of Service.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
              <p>We do <strong>not</strong> sell your personal data to third parties. We do not use your data for targeted advertising. We do not use your pet photos or messages to train AI models.</p>
            </Section>

            <Section title="3. How We Share Your Information">
              <p>We only share your data in the following limited circumstances:</p>
              <ul>
                <li><strong>Other users</strong> — your public profile (display name, pet name, breed, photos, location at neighbourhood level) is visible to other Hushku users as part of the core matching and discovery experience. Your precise GPS coordinates are never shared with other users.</li>
                <li><strong>Supabase</strong> — our backend database and authentication provider. All data is stored in Supabase-managed infrastructure. Supabase is contractually bound to protect your data and does not use it for their own purposes.</li>
                <li><strong>Geoapify</strong> — our mapping and location service provider. Location queries (city-level or GPS-biased searches) are sent to Geoapify to power map features and location search. No personally identifying information is sent beyond the query itself.</li>
                <li><strong>Brevo (formerly Sendinblue)</strong> — our email delivery provider, used for transactional emails (OTP, waitlist, account notices). Your email address is shared solely to deliver emails you request.</li>
                <li><strong>Vercel</strong> — our web hosting provider for hushku.app. Standard server logs including IP addresses are processed by Vercel.</li>
                <li><strong>Push notification providers</strong> — Apple Push Notification Service (APNs) and Firebase Cloud Messaging (FCM) are used to deliver push notifications to iOS and Android devices respectively. Your push token is shared with these services solely to deliver notifications.</li>
                <li><strong>Legal requirements</strong> — we may disclose your data if required by law, court order, or to protect the safety of our users or animals.</li>
                <li><strong>Business transfers</strong> — if Hushku is acquired or merges with another company, your data may be transferred. We will notify you before this happens.</li>
              </ul>
            </Section>

            <Section title="4. Data Retention">
              <p>We retain your data for as long as your account is active. Specific retention periods:</p>
              <ul>
                <li><strong>Account & profile data</strong> — retained until you delete your account.</li>
                <li><strong>Messages</strong> — retained to deliver your conversation history. Deleted when you delete your account.</li>
                <li><strong>Health records & logs</strong> — retained until you delete them or your account.</li>
                <li><strong>Adoption & foster listings</strong> — retained until you remove the listing or delete your account.</li>
                <li><strong>Lost & Found reports</strong> — retained for 90 days after the pet is marked as found, then automatically deleted.</li>
                <li><strong>Waitlist & volunteer submissions</strong> — retained until you opt out or request deletion.</li>
                <li><strong>Push tokens</strong> — retained while your account is active. Invalidated and deleted when you log out or revoke notification permissions.</li>
              </ul>
              <p>You may request deletion of your account and all associated data at any time by emailing <a href="mailto:hello@hushku.app">hello@hushku.app</a> or using the account deletion option in Settings.</p>
            </Section>

            <Section title="5. Push Notifications">
              <p>If you grant notification permission, Hushku will send you push notifications for:</p>
              <ul>
                <li>New playdate matches</li>
                <li>New messages from other users</li>
                <li>Adoption request updates (new requests, approvals, rejections)</li>
                <li>Lost pet alerts in your area</li>
                <li>Care reminders you have set (vaccinations, medications, vet appointments)</li>
                <li>Important account and safety notices</li>
              </ul>
              <p>You can manage notification preferences at any time in the Hushku Settings screen or your device's notification settings. Revoking notification permission does not affect your ability to use any other feature.</p>
            </Section>

            <Section title="6. Cookies & Analytics">
              <p>Our website (hushku.app) uses cookies and analytics tools:</p>
              <ul>
                <li><strong>Essential cookies</strong> — required for the website to function (session management, CSRF protection).</li>
                <li><strong>Analytics cookies</strong> — Google Analytics (GA4) is used to understand how visitors use hushku.app. This data is anonymised and aggregated. You can opt out via your browser's cookie settings or the Google Analytics opt-out extension.</li>
              </ul>
              <p>The mobile app does not use browser cookies. Analytics in the mobile app are collected via in-app event tracking without cookie storage.</p>
            </Section>

            <Section title="7. Your Rights">
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of all personal data we hold about you.</li>
                <li><strong>Correction</strong> — correct inaccurate data directly in the app or by contacting us.</li>
                <li><strong>Deletion</strong> — delete your account and all associated data via Settings → Delete Account, or by emailing us.</li>
                <li><strong>Portability</strong> — request your data in a portable format (JSON).</li>
                <li><strong>Opt-out of communications</strong> — unsubscribe from marketing emails via the link in any email. Disable push notifications via Settings.</li>
                <li><strong>Withdraw location consent</strong> — revoke GPS access at any time via your device settings. Approximate location (city level) may still be used for core functionality.</li>
                <li><strong>GDPR / UK GDPR</strong> — if you are in the UK or EU, you have additional rights including the right to object to processing and the right to lodge a complaint with your local data protection authority.</li>
                <li><strong>CCPA</strong> — if you are a California resident, you have the right to know what data we collect, request deletion, and opt out of sale (we do not sell data).</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:hello@hushku.app">hello@hushku.app</a>.</p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>Hushku is not directed at children under 13. We do not knowingly collect personal data from children under 13. Users aged 13–17 must have parental or guardian consent to use the platform.</p>
              <p>If you believe we have inadvertently collected data from a child under 13, contact us immediately at <a href="mailto:hello@hushku.app">hello@hushku.app</a> and we will delete it promptly.</p>
            </Section>

            <Section title="9. Security">
              <p>We take your data security seriously:</p>
              <ul>
                <li>All data in transit is encrypted via TLS/HTTPS.</li>
                <li>Passwords are hashed and never stored in plain text.</li>
                <li>Authentication uses Supabase Auth with industry-standard JWT tokens.</li>
                <li>Database access is controlled via Supabase Row Level Security (RLS) — users can only access their own data.</li>
                <li>Push tokens and sensitive identifiers are stored securely and never exposed in client-accessible responses.</li>
              </ul>
              <p>No system is 100% secure. We encourage you to use a strong, unique password and to report any suspected security issues to <a href="mailto:hello@hushku.app">hello@hushku.app</a>.</p>
            </Section>

            <Section title="10. Third-Party Links & Services">
              <p>Hushku may display links to or integrate with third-party services (shelter websites, vet clinic pages, app stores). We are not responsible for the privacy practices of those services. We encourage you to review their privacy policies before sharing information with them.</p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>We may update this Privacy Policy as the app evolves. We will notify you of significant changes by posting a notice in the app or sending an email to registered users. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of Hushku after changes constitutes acceptance of the updated policy.</p>
            </Section>

            <Section title="12. Contact Us">
              <p>For any questions, data requests, or concerns about this Privacy Policy:</p>
              <ul>
                <li>Email: <a href="mailto:hello@hushku.app">hello@hushku.app</a></li>
                <li>Website: <a href="https://hushku.app">hushku.app</a></li>
              </ul>
              <p>We aim to respond to all data requests within 30 days.</p>
            </Section>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link href="/terms" className="text-sm font-bold text-brand-start hover:underline">
              Read our Terms & Conditions →
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
        Hushku (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights when you use the Hushku mobile application (iOS &amp; Android) and our website at{" "}
        <a href="https://hushku.app" className="text-brand-start font-bold">hushku.app</a>{" "}
        (collectively, the &quot;Service&quot;).
      </p>
      <p className="text-sm leading-7 text-slate-gray mt-3">
        Hushku is a pet super-app that includes playdate matching, direct messaging, adoption, fostering, shelter discovery, lost &amp; found alerts, vet discovery, pet health records, push notifications, and a community social feed. Each of these features involves different types of data — this policy covers all of them.
      </p>
      <p className="text-sm leading-7 text-slate-gray mt-3">
        By using Hushku, you agree to the collection and use of information as described in this policy.
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
      <div className="text-sm leading-7 text-slate-gray space-y-3 [&_a]:text-brand-start [&_a]:font-bold [&_a:hover]:underline [&_strong]:text-ebony [&_ul]:mt-3 [&_ul]:space-y-2 [&_h4]:font-black [&_h4]:text-ebony [&_h4]:uppercase [&_h4]:tracking-wide [&_h4]:text-xs [&_h4]:mt-6 [&_h4]:mb-2">
        {children}
      </div>
    </div>
  );
}

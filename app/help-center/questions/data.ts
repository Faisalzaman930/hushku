import type { TourStep } from "../../components/tour/types";

export type Question = {
  slug: string;
  q: string;
  /** The answer in one or two sentences. Shown first, used for search snippets and FAQ schema. */
  short: string;
  /** Extra search words people might use. */
  keywords?: string;
  steps?: string[];
  more?: string;
  note?: string;
  demo?: TourStep[];
  guide?: { title: string; href: string };
  related?: string[];
};

export type Category = { id: string; title: string; questions: Question[] };

export const CATEGORIES: Category[] = [
  {
    id: "getting-started",
    title: "Getting started",
    questions: [
      {
        slug: "is-hushku-free",
        keywords: "cost price subscription pay premium money fee",
        q: "Is Hushku free?",
        short: "Yes. Hushku is free for pet owners, shelters and rescues, with no subscription and no listing fees.",
        more: "Every feature in the app is included: care tracking, Care Team, Discover, adoption and fostering, lost and found alerts and messaging.",
        related: ["can-i-add-multiple-pets", "does-everyone-need-the-app", "how-do-shelters-join"],
      },
      {
        slug: "can-i-add-multiple-pets",
        keywords: "two pets several more than one second pet another dog another cat switch pets add pet many",
        q: "Can I add multiple pets?",
        short: "Yes. Add as many dogs and cats as you like from your Profile, then switch between them at the top of Home.",
        steps: [
          "Open the Profile tab.",
          "Under Pets, tap Add Pet.",
          "Add photos, name, type, breed, age and what you’re looking for, then save.",
          "On Home, tap your pet’s name at the top to switch pets.",
        ],
        more: "Each pet has its own reminders, records, weight, care team and listings. Pets you help look after on someone else’s care team appear in the same switcher, marked Caregiver or Viewer.",
        demo: [
          {
            screen: "profile",
            path: ["Profile tab"],
            title: "Add a pet from your profile",
            spots: [
              { at: "tab-profile", start: true, label: "Profile tab" },
              { at: "pets", label: "Your pets", body: "Every pet you own. Tap one to edit it." },
              { at: "add-pet", next: true, label: "Add Pet" },
            ],
          },
          {
            screen: "add-pet",
            path: ["Profile tab", "Add Pet"],
            title: "Tell us about them",
            spots: [
              { at: "photos", label: "Photos" },
              { at: "basics", label: "Name, type and breed" },
              { at: "neutered", label: "Spayed or neutered" },
              { at: "looking-for", label: "What they’re looking for" },
            ],
          },
          {
            screen: "home",
            path: ["Home tab"],
            title: "Switch pets on Home",
            spots: [
              { at: "tab-home", start: true, label: "Home tab" },
              { at: "pet-switcher", next: true, label: "Tap your pet’s name", body: "Opens the pet switcher." },
            ],
          },
          {
            screen: "pet-switcher",
            path: ["Home tab", "Pet name"],
            title: "Choose whose day you’re looking at",
            spots: [
              { at: "own", label: "Your pets", body: "Pets you own." },
              { at: "helping", label: "Pets you help with", body: "Pets on someone else’s care team, with your role." },
            ],
          },
        ],
        guide: { title: "Your profile", href: "/help-center/your-profile" },
        related: ["how-do-i-sync-care-across-profiles", "can-my-sitter-see-my-other-pets", "does-it-work-for-cats"],
      },
      {
        slug: "does-it-work-for-cats",
        keywords: "cat kitten feline",
        q: "Does Hushku work for cats?",
        short: "Yes. Everything in Hushku works for dogs and cats, from care reminders to adoption and lost pet alerts.",
        more: "Choose Dogs or Cats in Discover filters to see only one or the other. Heat cycle tracking is available for female pets of both.",
        related: ["can-i-add-multiple-pets", "how-do-i-find-playdates"],
      },
      {
        slug: "owner-shelter-or-explorer",
        keywords: "account type role change account explorer",
        q: "What’s the difference between Pet owner, Shelter and Explorer?",
        short: "Pet owners create profiles for their pets. Shelters list animals and manage adoptions. Explorers browse pets and shelters without adding a pet.",
        more: "You choose when you sign up, and you can change it later.",
        demo: [
          {
            screen: "role",
            path: ["Sign up"],
            title: "Choose how you’ll use Hushku",
            spots: [
              { at: "roles", label: "Pet owner, Shelter or Explorer", body: "You can always change this later." },
              { at: "continue", label: "Continue" },
            ],
          },
        ],
        related: ["how-do-shelters-join", "can-i-add-multiple-pets"],
      },
      {
        slug: "can-i-use-hushku-on-the-web",
        keywords: "website browser computer desktop download",
        q: "Can I use Hushku on the website?",
        short: "No. Every feature lives in the Hushku app for iPhone and Android, coming soon to the App Store and Google Play.",
        more: "This website explains how the app works and has free guides, tools and breed profiles that work in your browser.",
        related: ["is-hushku-free"],
      },
    ],
  },
  {
    id: "care-team",
    title: "Care Team and sharing",
    questions: [
      {
        slug: "how-do-i-sync-care-across-profiles",
        keywords: "add someone add person sync share partner husband wife family kids sitter walker multiple profiles accounts household together invite care team co-parent",
        q: "How do I share and sync my pet’s care with someone else?",
        short: "Invite them to your pet’s Care Team. Their phone and yours then show the same checklist, reminders and records, and every task shows who did it.",
        steps: [
          "On Home, tap Manage next to Care Team.",
          "Tap +, then search for them by username or email.",
          "Choose Caregiver or Viewer and tap Send Invite.",
          "They accept from Notifications. From then on, everything stays in sync.",
        ],
        note: "Each person uses their own Hushku account. Changes appear on every phone on the team in seconds.",
        demo: [
          {
            screen: "home",
            path: ["Home tab"],
            title: "Start on Home",
            spots: [
              { at: "tab-home", start: true, label: "Home tab" },
              { at: "care-team", next: true, label: "Care Team", body: "Tap Manage." },
            ],
          },
          {
            screen: "care-team",
            path: ["Home tab", "Care Team", "Manage"],
            title: "Your pet’s care team",
            spots: [
              { at: "caregiver", label: "People already on the team" },
              { at: "header-action", next: true, label: "Invite", body: "Tap +." },
            ],
          },
          {
            screen: "invite-member",
            path: ["Home tab", "Care Team", "Manage", "+"],
            title: "Invite them",
            spots: [
              { at: "search", label: "Search by username or email" },
              { at: "role", label: "Caregiver or Viewer" },
              { at: "send", next: true, label: "Send Invite" },
            ],
          },
          {
            screen: "notifications",
            path: ["Their phone", "Home tab", "Bell"],
            title: "They accept",
            spots: [{ at: "invite", label: "Accept", body: "The pet now appears in their pet switcher." }],
          },
          {
            screen: "home-synced",
            path: ["Their phone", "Home tab"],
            title: "In sync",
            spots: [{ at: "done-by", label: "Done by", body: "What you tick shows on their phone, with your name." }],
          },
        ],
        guide: { title: "Care Team", href: "/help-center/care-team" },
        related: ["caregiver-vs-viewer", "can-my-sitter-see-my-other-pets", "does-everyone-need-the-app"],
      },
      {
        slug: "caregiver-vs-viewer",
        keywords: "roles permissions access edit",
        q: "What’s the difference between a caregiver and a viewer?",
        short: "Caregivers can help manage a pet’s care: tick off tasks, log care and add records. Viewers can see everything but can’t change it.",
        more: "Only the owner can invite people, cancel invites or remove members.",
        demo: [
          {
            screen: "invite-member",
            path: ["Home tab", "Care Team", "Manage", "+"],
            title: "Choosing a role",
            spots: [{ at: "role", label: "Caregiver or Viewer", body: "The hint under the buttons explains each role." }],
          },
          {
            screen: "care-team",
            path: ["Home tab", "Care Team", "Manage"],
            title: "Roles on the team",
            spots: [
              { at: "owner", label: "Owner" },
              { at: "caregiver", label: "Caregiver" },
              { at: "viewer", label: "Viewer" },
            ],
          },
        ],
        guide: { title: "Care Team", href: "/help-center/care-team" },
        related: ["how-do-i-sync-care-across-profiles", "how-do-i-remove-someone-from-my-care-team"],
      },
      {
        slug: "can-my-sitter-see-my-other-pets",
        keywords: "sitter walker access privacy other pets",
        q: "If I add my sitter to one pet, can they see my other pets?",
        short: "No. Each pet has its own care team, so your sitter only sees the pets you invite them to.",
        demo: [
          {
            screen: "pet-switcher",
            path: ["Their phone", "Home tab", "Pet name"],
            title: "What your sitter sees",
            spots: [{ at: "helping", label: "Only the pet they help with", body: "Shown with their role and whose pet it is." }],
          },
        ],
        related: ["how-do-i-sync-care-across-profiles", "how-do-i-remove-someone-from-my-care-team"],
      },
      {
        slug: "how-do-i-remind-someone",
        keywords: "nudge remind bell notify partner",
        q: "How do I remind someone on the care team to do a task?",
        short: "Tap the bell next to the task on Home and choose who to remind. They get a push notification.",
        demo: [
          {
            screen: "home",
            path: ["Home tab"],
            title: "Find the task",
            spots: [
              { at: "tab-home", start: true, label: "Home tab" },
              { at: "nudge", next: true, label: "The bell next to a task" },
            ],
          },
          {
            screen: "remind-sheet",
            path: ["Home tab", "Bell on a task"],
            title: "Choose who to remind",
            spots: [
              { at: "people", label: "Pick one or more people" },
              { at: "send", next: true, label: "Send reminder" },
            ],
          },
          {
            screen: "notifications",
            path: ["Their phone", "Notifications"],
            title: "What they see",
            spots: [{ at: "nudge", label: "“Sarah reminded you to give Bella medication.”" }],
          },
        ],
        related: ["how-do-i-sync-care-across-profiles", "how-do-i-turn-off-notifications"],
      },
      {
        slug: "how-do-i-remove-someone-from-my-care-team",
        keywords: "remove kick revoke cancel invite",
        q: "How do I remove someone from my pet’s care team?",
        short: "Open Care Team from Home and tap Remove next to their name. You can also cancel a pending invite.",
        note: "Only the pet’s owner can remove people.",
        demo: [
          {
            screen: "care-team",
            path: ["Home tab", "Care Team", "Manage"],
            title: "Remove or cancel",
            spots: [
              { at: "remove", label: "Remove", body: "Removes them from this pet’s team." },
              { at: "pending", label: "Cancel a pending invite" },
            ],
          },
        ],
        related: ["caregiver-vs-viewer", "can-my-sitter-see-my-other-pets"],
      },
      {
        slug: "does-everyone-need-the-app",
        keywords: "account download partner",
        q: "Does everyone on my care team need the app?",
        short: "Yes. Each person needs a free Hushku account, so their phone stays in sync with yours.",
        related: ["how-do-i-sync-care-across-profiles", "is-hushku-free"],
      },
    ],
  },
  {
    id: "health",
    title: "Health and daily care",
    questions: [
      {
        slug: "how-do-i-set-a-recurring-reminder",
        keywords: "reminder repeat daily weekly monthly medication meds feeding schedule alarm",
        q: "How do I set a recurring reminder?",
        short: "On Home, tap + next to Today’s Care, choose a type and time, and set it to repeat daily, weekly or monthly.",
        demo: [
          {
            screen: "home",
            path: ["Home tab"],
            title: "Start on Home",
            spots: [
              { at: "tab-home", start: true, label: "Home tab" },
              { at: "add-reminder", next: true, label: "+ next to Today’s Care" },
            ],
          },
          {
            screen: "add-reminder",
            path: ["Home tab", "Today’s Care", "+"],
            title: "Set it up",
            spots: [
              { at: "type", label: "Type", body: "Feeding, water, walk, meds, vaccine or other." },
              { at: "schedule", label: "Date and time" },
              { at: "repeat", label: "Repeat", body: "None, daily, weekly or monthly." },
              { at: "header-action", label: "Save" },
            ],
          },
        ],
        guide: { title: "Health and care", href: "/help-center/health-care" },
        related: ["how-do-i-log-a-walk-or-meal", "how-do-i-remind-someone"],
      },
      {
        slug: "how-do-i-log-a-walk-or-meal",
        keywords: "log walk fed food poop water quick log",
        q: "How do I log a walk or a meal?",
        short: "Scroll down on Home to Quick Log and tap Fed, Watered, Poop or Walk. It’s logged with your name for the whole care team.",
        demo: [
          {
            screen: "home-lower",
            path: ["Home tab", "Scroll down"],
            title: "Quick Log",
            spots: [
              { at: "tab-home", start: true, label: "Home tab" },
              { at: "quick-log", label: "One tap to log", body: "Fed, Watered, Poop or Walk." },
            ],
          },
        ],
        related: ["how-do-i-set-a-recurring-reminder", "how-do-i-sync-care-across-profiles"],
      },
      {
        slug: "where-do-i-store-vaccination-records",
        keywords: "vaccine vaccination vet records documents medical health upload",
        q: "Where do I keep vaccination and vet records?",
        short: "In Health Records, under Care & Health on Home. Add vaccinations, vet visits, medication and lab reports, with documents or photos attached.",
        demo: [
          {
            screen: "home-lower",
            path: ["Home tab", "Scroll down"],
            title: "Care & Health",
            spots: [{ at: "records-row", next: true, label: "Health Records" }],
          },
          {
            screen: "health-records",
            path: ["Home tab", "Care & Health", "Health Records"],
            title: "Your records",
            spots: [
              { at: "header-action", label: "Add a record" },
              { at: "filter", label: "Filter by type" },
              { at: "records", label: "Records with attachments and next due dates" },
              { at: "shared", label: "Shared with your care team" },
            ],
          },
        ],
        guide: { title: "Health and care", href: "/help-center/health-care" },
        related: ["how-do-i-track-weight", "how-do-i-track-flea-and-tick"],
      },
      {
        slug: "how-do-i-track-weight",
        keywords: "weight scale",
        q: "How do I track my pet’s weight?",
        short: "Open Weight Tracker under Care & Health on Home and tap + to add a weight. You’ll see the trend over time.",
        demo: [
          {
            screen: "home-lower",
            path: ["Home tab", "Scroll down"],
            title: "Care & Health",
            spots: [{ at: "weight-row", next: true, label: "Weight Tracker" }],
          },
          {
            screen: "weight",
            path: ["Home tab", "Care & Health", "Weight Tracker"],
            title: "Weight tracker",
            spots: [
              { at: "header-action", label: "Add a weight" },
              { at: "current", label: "Current weight and change" },
              { at: "chart", label: "Trend" },
              { at: "history", label: "History" },
            ],
          },
        ],
        related: ["where-do-i-store-vaccination-records"],
      },
      {
        slug: "how-do-i-track-flea-and-tick",
        keywords: "flea tick worming treatment nexgard",
        q: "How do I track flea and tick treatments?",
        short: "Open Flea & Tick under Care & Health on Home and add a treatment with the date and how often it repeats. Hushku shows when the next one is due.",
        demo: [
          {
            screen: "home-lower",
            path: ["Home tab", "Scroll down"],
            title: "Care & Health",
            spots: [{ at: "flea-row", next: true, label: "Flea & Tick" }],
          },
          {
            screen: "flea-tick",
            path: ["Home tab", "Care & Health", "Flea & Tick"],
            title: "Flea and tick",
            spots: [
              { at: "next", label: "Next treatment" },
              { at: "history", label: "Every dose, and who gave it" },
              { at: "add", label: "Add Treatment" },
            ],
          },
        ],
        related: ["where-do-i-store-vaccination-records", "how-do-i-track-heat-cycles"],
      },
      {
        slug: "how-do-i-track-heat-cycles",
        keywords: "heat season cycle female in heat",
        q: "How do I track my pet’s heat cycle?",
        short: "Open Heat / Season under Care & Health on Home and log each cycle’s dates and symptoms. Hushku estimates when the next one is due.",
        demo: [
          {
            screen: "home-lower",
            path: ["Home tab", "Scroll down"],
            title: "Care & Health",
            spots: [{ at: "heat-row", next: true, label: "Heat / Season" }],
          },
          {
            screen: "heat-cycle",
            path: ["Home tab", "Care & Health", "Heat / Season"],
            title: "Heat cycles",
            spots: [
              { at: "next", label: "Next estimated cycle" },
              { at: "history", label: "Past cycles and symptoms" },
              { at: "add", label: "Add Cycle" },
            ],
          },
        ],
        related: ["how-do-i-track-flea-and-tick"],
      },
    ],
  },
  {
    id: "playdates",
    title: "Playdates and requests",
    questions: [
      {
        slug: "how-do-i-find-playdates",
        keywords: "playdate walk buddy friends nearby dogs meet",
        q: "How do I find dogs nearby for a playdate or walk?",
        short: "Open Discover, stay on Pets, and use Filters to choose Playdate or Walk. Tap a pet, then send an invite.",
        demo: [
          {
            screen: "discover",
            path: ["Discover tab", "Pets"],
            title: "Pets near you",
            spots: [
              { at: "tab-discover", start: true, label: "Discover tab" },
              { at: "purpose", label: "What they’re looking for" },
              { at: "filters", next: true, label: "Filters" },
            ],
          },
          {
            screen: "filters",
            path: ["Discover tab", "Filters"],
            title: "Choose Playdate or Walk",
            spots: [
              { at: "looking-for", label: "Looking for" },
              { at: "distance", label: "Distance" },
              { at: "apply", next: true, label: "Show results" },
            ],
          },
          {
            screen: "pet-profile",
            path: ["Discover tab", "Tap a pet"],
            title: "Send an invite",
            spots: [{ at: "request", label: "Send playdate invite" }],
          },
        ],
        guide: { title: "Playdates", href: "/help-center/playdate-matching" },
        related: ["can-i-message-without-a-request", "how-do-i-withdraw-a-request"],
      },
      {
        slug: "can-i-message-without-a-request",
        keywords: "message chat dm contact",
        q: "Can I message someone without sending a request first?",
        short: "No. Every chat starts with a request about a pet, and opens when it’s accepted. That keeps messages wanted and relevant.",
        demo: [
          {
            screen: "notifications",
            path: ["Home tab", "Bell"],
            title: "A request arrives",
            spots: [{ at: "request", label: "Accept to open a chat" }],
          },
          {
            screen: "chat",
            path: ["Messages tab", "The new chat"],
            title: "The chat opens",
            spots: [{ at: "accepted", label: "How you connected" }],
          },
        ],
        guide: { title: "Messaging", href: "/help-center/messaging" },
        related: ["how-do-i-find-playdates", "how-do-i-block-or-report-someone"],
      },
      {
        slug: "how-do-i-withdraw-a-request",
        keywords: "cancel withdraw undo invite request",
        q: "Can I withdraw a request I sent?",
        short: "Yes. Open the pet’s profile and tap the request button again to withdraw it, any time before it’s accepted.",
        demo: [
          {
            screen: "pet-profile",
            path: ["Discover tab", "The pet"],
            title: "Withdraw from the profile",
            spots: [{ at: "request", label: "Your sent request", body: "Tap to withdraw it." }],
          },
        ],
        related: ["how-do-i-find-playdates"],
      },
      {
        slug: "how-are-mating-requests-kept-safe",
        keywords: "mating breeding stud safety",
        q: "How are mating requests kept safe?",
        short: "Owners say whether their pet is spayed or neutered, and nothing is shared or matched automatically. The owner reviews every mating request first.",
        demo: [
          {
            screen: "add-pet",
            path: ["Profile tab", "Add Pet"],
            title: "Spayed or neutered",
            spots: [{ at: "neutered", label: "Asked for every pet", body: "This helps keep mating requests safe." }],
          },
        ],
        related: ["how-do-i-find-playdates", "how-do-i-block-or-report-someone"],
      },
    ],
  },
  {
    id: "adoption",
    title: "Adoption and fostering",
    questions: [
      {
        slug: "how-do-i-adopt",
        keywords: "adopt adoption rescue get a dog get a cat",
        q: "How do I adopt a pet on Hushku?",
        short: "Open Discover and choose Adopt. Tap a pet and send an adoption request. If the owner or shelter accepts, a chat opens.",
        demo: [
          {
            screen: "discover-adopt",
            path: ["Discover tab", "Adopt"],
            title: "Pets looking for a home",
            spots: [
              { at: "tab-discover", start: true, label: "Discover tab" },
              { at: "tabs", label: "Adopt" },
              { at: "listing", next: true, label: "Tap a pet" },
            ],
          },
          {
            screen: "listing",
            path: ["Discover tab", "Adopt", "A pet"],
            title: "Send a request",
            spots: [
              { at: "why", label: "Their story" },
              { at: "posted-by", label: "Who posted it" },
              { at: "request", label: "Send adoption request" },
            ],
          },
        ],
        guide: { title: "Adoption and fostering", href: "/help-center/adoption-fostering" },
        related: ["how-do-i-rehome-my-pet", "can-i-foster"],
      },
      {
        slug: "how-do-i-rehome-my-pet",
        keywords: "rehome give away post listing foster need foster",
        q: "How do I rehome my pet or find a foster?",
        short: "Open Discover, go to Adopt or Foster, and tap + to post a listing. People send requests, and you choose who to talk to.",
        demo: [
          {
            screen: "discover-adopt",
            path: ["Discover tab", "Adopt"],
            title: "Start a listing",
            spots: [
              { at: "tab-discover", start: true, label: "Discover tab" },
              { at: "post", next: true, label: "+" },
            ],
          },
          {
            screen: "post-listing",
            path: ["Discover tab", "Adopt or Foster", "+"],
            title: "Fill in the listing",
            spots: [
              { at: "kind", label: "Adoption or foster" },
              { at: "photos", label: "Photos" },
              { at: "how-long", label: "How long (for fosters)" },
              { at: "special-care", label: "Special care" },
              { at: "header-action", label: "Post" },
            ],
          },
        ],
        guide: { title: "Adoption and fostering", href: "/help-center/adoption-fostering" },
        related: ["how-do-i-choose-an-adopter", "how-do-i-adopt"],
      },
      {
        slug: "how-do-i-choose-an-adopter",
        keywords: "adopter applicants choose accept",
        q: "How do I choose who adopts my pet?",
        short: "Open your listing from Your listings on your Profile. Accept people to chat with them, then tap Choose as adopter.",
        demo: [
          {
            screen: "profile",
            path: ["Profile tab"],
            title: "Your listings",
            spots: [
              { at: "tab-profile", start: true, label: "Profile tab" },
              { at: "listings", next: true, label: "Tap the listing" },
            ],
          },
          {
            screen: "listing-requests",
            path: ["Profile tab", "Your listings", "The listing", "Adoption"],
            title: "Choose the right home",
            spots: [
              { at: "new", label: "Accept or decline" },
              { at: "choose", label: "Choose as adopter" },
            ],
          },
        ],
        related: ["how-do-i-rehome-my-pet"],
      },
      {
        slug: "can-i-foster",
        keywords: "foster temporary",
        q: "Can I foster a pet?",
        short: "Yes. Open Discover and choose Foster to see pets that need a temporary home, then send a request.",
        related: ["how-do-i-adopt", "how-do-i-rehome-my-pet"],
      },
    ],
  },
  {
    id: "lost-found",
    title: "Lost and found",
    questions: [
      {
        slug: "my-pet-is-lost",
        keywords: "lost missing ran away escaped run off report gone",
        q: "My pet is lost. What do I do in the app?",
        short: "Open Alerts, tap +, and report your lost pet with photos and where they were last seen. People nearby see it and can contact you.",
        steps: [
          "Open the Alerts tab and tap +.",
          "Choose My pet and pick them, or add their details.",
          "Add photos, colour or markings, and roughly where and when they were last seen.",
          "Offer a reward if you want to, then post.",
        ],
        demo: [
          {
            screen: "alerts",
            path: ["Alerts tab"],
            title: "Start on Alerts",
            spots: [
              { at: "tab-alerts", start: true, label: "Alerts tab" },
              { at: "report", next: true, label: "+" },
            ],
          },
          {
            screen: "lost-report",
            path: ["Alerts tab", "+"],
            title: "Report a lost pet",
            spots: [
              { at: "whose", label: "My pet" },
              { at: "photos", label: "Photos" },
              { at: "last-seen", label: "Last seen" },
              { at: "reward", label: "Reward (optional)" },
              { at: "header-action", label: "Post" },
            ],
          },
        ],
        guide: { title: "Lost and found", href: "/help-center/lost-and-found" },
        related: ["i-found-a-pet", "how-do-i-mark-my-pet-as-found", "can-people-see-my-location"],
      },
      {
        slug: "i-found-a-pet",
        keywords: "found stray rescue report",
        q: "I found a pet. How do I report it?",
        short: "Open Alerts, tap + and choose A pet I’m helping. Add photos and where you found them so the owner can find you.",
        demo: [
          {
            screen: "lost-report",
            path: ["Alerts tab", "+"],
            title: "Report a pet you’re helping",
            spots: [
              { at: "whose", label: "A pet I’m helping", body: "A stray, a rescue, or a pet temporarily in your care." },
              { at: "photos", label: "Photos" },
              { at: "last-seen", label: "Where you found them" },
            ],
          },
        ],
        related: ["my-pet-is-lost", "can-people-see-my-location"],
      },
      {
        slug: "how-do-i-mark-my-pet-as-found",
        keywords: "found home safe close report",
        q: "How do I mark my pet as found?",
        short: "Open your report and tap Mark as found. You can also edit or delete a report at any time.",
        demo: [
          {
            screen: "lost-detail",
            path: ["Alerts tab", "Your report"],
            title: "Your report",
            spots: [
              { at: "found", label: "Mark as found" },
              { at: "options", label: "Edit or delete" },
            ],
          },
        ],
        related: ["my-pet-is-lost"],
      },
      {
        slug: "can-people-see-my-location",
        keywords: "location address privacy safe map",
        q: "Can people see where I live?",
        short: "No. Others see your general area and an approximate distance, never your address. Lost pet reports show an approximate area too.",
        demo: [
          {
            screen: "alerts",
            path: ["Alerts tab"],
            title: "Approximate areas only",
            spots: [{ at: "area", label: "General area and distance" }],
          },
        ],
        related: ["how-do-i-make-my-profile-private", "how-do-i-block-or-report-someone"],
      },
    ],
  },
  {
    id: "messages-privacy",
    title: "Messages, privacy and account",
    questions: [
      {
        slug: "can-i-send-photos-and-voice-notes",
        keywords: "photo picture video voice audio note",
        q: "Can I send photos, videos and voice notes?",
        short: "Yes. In any chat, use the camera for photos or video, and hold the microphone to record a voice note.",
        demo: [
          {
            screen: "chat",
            path: ["Messages tab", "A chat"],
            title: "In a chat",
            spots: [
              { at: "camera", label: "Photos and video" },
              { at: "voice", label: "Voice notes", body: "Hold to record." },
            ],
          },
        ],
        related: ["how-do-i-unsend-a-message"],
      },
      {
        slug: "how-do-i-unsend-a-message",
        keywords: "delete unsend message",
        q: "How do I unsend a message?",
        short: "Press and hold your message and tap Unsend. You can also reply to, copy or report a message.",
        demo: [
          {
            screen: "chat-actions",
            path: ["A chat", "Press and hold a message"],
            title: "Message actions",
            spots: [{ at: "actions", label: "Reply, Copy, Unsend, Report" }],
          },
        ],
        related: ["can-i-send-photos-and-voice-notes", "how-do-i-block-or-report-someone"],
      },
      {
        slug: "how-do-i-block-or-report-someone",
        keywords: "block report harass abuse spam safety",
        q: "How do I block or report someone?",
        short: "Open the chat or their profile, tap the options menu, and choose Block or Report. Manage blocked accounts in Settings.",
        demo: [
          {
            screen: "chat",
            path: ["Messages tab", "A chat"],
            title: "From a chat",
            spots: [{ at: "options", label: "Options", body: "Block or Report." }],
          },
          {
            screen: "settings",
            path: ["Profile tab", "Settings"],
            title: "Blocked accounts",
            spots: [{ at: "blocked-row", label: "Blocked Accounts", body: "Unblock people here." }],
          },
        ],
        related: ["how-do-i-make-my-profile-private", "can-people-see-my-location"],
      },
      {
        slug: "how-do-i-make-my-profile-private",
        keywords: "private privacy hide profile",
        q: "How do I make my profile private?",
        short: "Go to Profile, Settings, Account privacy and choose Private. Your personal pets are then only visible to people in your Circle.",
        demo: [
          {
            screen: "profile",
            path: ["Profile tab"],
            title: "Open Settings",
            spots: [
              { at: "tab-profile", start: true, label: "Profile tab" },
              { at: "settings", next: true, label: "Settings" },
            ],
          },
          {
            screen: "settings",
            path: ["Profile tab", "Settings"],
            title: "Settings",
            spots: [{ at: "privacy-row", next: true, label: "Account privacy" }],
          },
          {
            screen: "privacy",
            path: ["Profile tab", "Settings", "Account privacy"],
            title: "Choose Private",
            spots: [
              { at: "privacy", label: "Public or Private" },
              { at: "circle", label: "Who can add you to their Circle" },
            ],
          },
        ],
        related: ["what-is-the-circle", "can-people-see-my-location"],
      },
      {
        slug: "what-is-the-circle",
        keywords: "circle friends followers",
        q: "What is my Circle?",
        short: "Your Circle is the people you’ve met through Hushku and want to keep close. If your account is private, only your Circle sees your personal pets.",
        more: "You choose who can add you: anyone, approval required, or nobody.",
        demo: [
          {
            screen: "profile",
            path: ["Profile tab"],
            title: "Your Circle",
            spots: [{ at: "circle", label: "People in your Circle", body: "Tap to see and manage them." }],
          },
          {
            screen: "privacy",
            path: ["Profile tab", "Settings", "Account privacy"],
            title: "Who can add you",
            spots: [{ at: "circle", label: "Anyone, approval required, or nobody" }],
          },
        ],
        related: ["how-do-i-make-my-profile-private"],
      },
      {
        slug: "how-do-i-turn-off-notifications",
        keywords: "notifications push alerts mute turn off stop disable quiet",
        q: "How do I turn off some notifications?",
        short: "Go to Profile, Settings, Notifications. Each kind has its own switch: care reminders, care team, messages, requests, lost alerts and more.",
        demo: [
          {
            screen: "settings",
            path: ["Profile tab", "Settings"],
            title: "Settings",
            spots: [{ at: "notifications-row", next: true, label: "Notifications" }],
          },
          {
            screen: "notification-settings",
            path: ["Profile tab", "Settings", "Notifications"],
            title: "Choose what you get",
            spots: [{ at: "toggles", label: "A switch for each kind" }],
          },
        ],
        related: ["how-do-i-remind-someone"],
      },
      {
        slug: "how-do-i-delete-my-account",
        keywords: "delete account remove data close",
        q: "How do I delete my account?",
        short: "Go to Profile, Settings and tap Delete Account. This permanently deletes your account and all your data, including pets, care logs and Care Team access.",
        demo: [
          {
            screen: "settings",
            path: ["Profile tab", "Settings"],
            title: "Delete Account",
            spots: [
              { at: "delete-row", label: "Delete Account", body: "You’ll be asked to confirm. This can’t be undone." },
              { at: "logout", label: "Or just log out" },
            ],
          },
        ],
        related: ["how-do-i-make-my-profile-private"],
      },
    ],
  },
  {
    id: "shelters",
    title: "Shelters and rescues",
    questions: [
      {
        slug: "how-do-shelters-join",
        keywords: "shelter rescue organisation charity sign up",
        q: "We’re a shelter. How do we join?",
        short: "Choose Shelter when you sign up, add your shelter’s details and the services you offer, then post animals for adoption or fostering. It’s free.",
        demo: [
          {
            screen: "role",
            path: ["Sign up"],
            title: "Choose Shelter",
            spots: [{ at: "roles", label: "Shelter" }],
          },
          {
            screen: "shelter-signup",
            path: ["Sign up", "Shelter", "Shelter profile"],
            title: "Your shelter profile",
            spots: [
              { at: "logo", label: "Logo" },
              { at: "name", label: "Name and location" },
              { at: "services", label: "Services offered" },
            ],
          },
        ],
        guide: { title: "Shelters", href: "/help-center/shelters" },
        related: ["how-do-shelters-get-verified", "how-do-i-rehome-my-pet"],
      },
      {
        slug: "how-do-shelters-get-verified",
        keywords: "verified badge blue tick",
        q: "How does a shelter get the verified badge?",
        short: "Verified shelters show a blue badge on their profile and listings. Email hello@hushku.app and we’ll talk you through verification.",
        demo: [
          {
            screen: "shelters",
            path: ["Discover tab", "Shelters"],
            title: "The verified badge",
            spots: [{ at: "verified", label: "Verified" }],
          },
        ],
        related: ["how-do-shelters-join"],
      },
    ],
  },
];

export const ALL_QUESTIONS = CATEGORIES.flatMap((c) => c.questions.map((q) => ({ ...q, category: c })));
export const findQuestion = (slug: string) => ALL_QUESTIONS.find((q) => q.slug === slug);

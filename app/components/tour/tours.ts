import type { TourStep } from "./types";

/**
 * Walkthroughs of the real app, one per help topic. Each starts at the bottom tab bar and
 * follows the route through the app: `start` marks the tab, `next` marks what to tap to
 * reach the following screen, and `path` says how to get to each screen.
 * Feature pages show the first few steps.
 */
export const TOURS: Record<string, TourStep[]> = {
  "care-team": [
    {
      screen: "home",
      path: ["Home tab"],
      title: "Start on Home",
      body: "Care Team lives on the Home tab. Everyone on the team sees this same screen for the pet.",
      spots: [
        { at: "tab-home", start: true, label: "Home tab", body: "Tap Home in the bottom bar." },
        { at: "care-team", next: true, label: "Care Team", body: "Who’s looking after this pet. Tap Manage to see the team and invite people." },
        { at: "todays-care", label: "Today’s Care", body: "The day’s reminders as a shared checklist, with progress at the top." },
        { at: "done-by", label: "Done by", body: "Every ticked task shows who did it." },
        { at: "nudge", label: "Remind someone", body: "The bell sends a care team member a reminder about this task." },
        { at: "pet-switcher", label: "Switch pet", body: "Every pet you own or help with is here, each with its own team." },
      ],
    },
    {
      screen: "care-team",
      path: ["Home tab", "Care Team", "Manage"],
      title: "Your pet’s care team",
      body: "Everyone connected to this pet, and their role.",
      spots: [
        { at: "owner", label: "Owner", body: "Manages the pet and the team." },
        { at: "caregiver", label: "Caregiver", body: "Can help manage care: tick tasks, log care, add records." },
        { at: "viewer", label: "Viewer", body: "Can see the pet’s care but not change it." },
        { at: "remove", label: "Remove", body: "The owner can remove anyone, any time." },
        { at: "pending", label: "Pending invites", body: "Invites waiting for an answer. Cancel any time." },
        { at: "header-action", next: true, label: "Invite", body: "Tap + to add someone." },
      ],
    },
    {
      screen: "invite-member",
      path: ["Home tab", "Care Team", "Manage", "+"],
      title: "Invite someone",
      spots: [
        { at: "search", label: "Find them", body: "Search by username or email. They need a free Hushku account." },
        { at: "person", label: "Check it’s them", body: "Tap Change to pick someone else." },
        { at: "role", label: "Choose a role", body: "Caregiver to help, or Viewer to follow along." },
        { at: "send", next: true, label: "Send Invite", body: "They’re notified straight away." },
      ],
    },
    {
      screen: "notifications",
      path: ["Their phone", "Home tab", "Bell"],
      title: "They accept on their phone",
      body: "Invites and reminders from the team arrive in Notifications, opened from the bell on Home.",
      spots: [
        { at: "invite", label: "Care team invite", body: "Accept to join, or decline. The pet then appears in their pet switcher." },
        { at: "nudge", label: "A reminder from the team", body: "Also sent as a push notification." },
      ],
    },
    {
      screen: "remind-sheet",
      path: ["Home tab", "Today’s Care", "Bell on a task"],
      title: "Remind someone about a task",
      body: "Running late? Tap the bell next to any task on Home.",
      spots: [
        { at: "people", label: "Choose who to remind", body: "One or more people on the team." },
        { at: "send", next: true, label: "Send reminder", body: "They get: “Sarah reminded you to give Bella medication.”" },
      ],
    },
    {
      screen: "home-synced",
      path: ["Sarah’s phone", "Home tab"],
      title: "Done, and everyone knows",
      body: "Sarah’s phone, a moment after Faisal gave Bella her tablet.",
      spots: [{ at: "done-by", label: "Updated everywhere", body: "Ticked off on every phone on the team, with who did it." }],
    },
    {
      screen: "notification-settings",
      path: ["Profile tab", "Settings", "Notifications"],
      title: "Choose your care notifications",
      spots: [{ at: "toggles", label: "Care reminders and Care team", body: "Each has its own switch, along with messages, requests and lost alerts." }],
    },
  ],

  "health-care": [
    {
      screen: "home",
      path: ["Home tab"],
      title: "Start on Home",
      body: "Your pet’s day lives on the Home tab.",
      spots: [
        { at: "tab-home", start: true, label: "Home tab", body: "Tap Home in the bottom bar." },
        { at: "pet-switcher", label: "Switch pet", body: "More than one pet? Choose whose day you’re looking at." },
        { at: "todays-care", label: "Today’s Care", body: "Tick off reminders as you go. The bar shows how much is done." },
        { at: "upcoming", label: "Upcoming", body: "Vaccines, vet visits, treatments and heat cycles coming up." },
        { at: "add-reminder", next: true, label: "Add a reminder", body: "Tap + next to Today’s Care." },
      ],
    },
    {
      screen: "add-reminder",
      path: ["Home tab", "Today’s Care", "+"],
      title: "Set a reminder",
      spots: [
        { at: "type", label: "Type", body: "Feeding, water, walk, meds, vaccine or other." },
        { at: "title", label: "Title", body: "For example, Heartworm tablet." },
        { at: "schedule", label: "Date and time" },
        { at: "repeat", label: "Repeat", body: "None, daily, weekly or monthly." },
        { at: "notes", label: "Notes", body: "Anything the care team should know." },
        { at: "header-action", next: true, label: "Save", body: "It appears in Today’s Care for everyone on the team." },
      ],
    },
    {
      screen: "home-lower",
      path: ["Home tab", "Scroll down"],
      title: "Quick Log and Care & Health",
      body: "Scroll down on Home for one-tap logging and every health tracker.",
      spots: [
        { at: "quick-log", label: "Quick Log", body: "One tap to log Fed, Watered, Poop or Walk. Logged with your name." },
        { at: "weight-row", label: "Weight Tracker", body: "Current weight and this month’s change." },
        { at: "records-row", next: true, label: "Health Records", body: "Vaccinations, vet visits, medication and lab reports." },
        { at: "flea-row", label: "Flea & Tick", body: "When the next treatment is due." },
        { at: "heat-row", label: "Heat / Season", body: "For female pets: the next estimated cycle." },
      ],
    },
    {
      screen: "health-records",
      path: ["Home tab", "Care & Health", "Health Records"],
      title: "Health records",
      spots: [
        { at: "filter", label: "Filter by type" },
        { at: "records", label: "Every record", body: "With documents or photos attached and a next due date." },
        { at: "shared", label: "Shared with the care team" },
        { at: "header-action", label: "Add a record", body: "Vaccination, vet visit, medication, lab report or other." },
      ],
    },
    {
      screen: "weight",
      path: ["Home tab", "Care & Health", "Weight Tracker"],
      title: "Weight tracker",
      spots: [
        { at: "current", label: "Current weight", body: "With the change over the last 30 days." },
        { at: "chart", label: "Trend", body: "One, three, six or twelve months." },
        { at: "history", label: "History" },
        { at: "header-action", label: "Add a weight" },
      ],
    },
    {
      screen: "flea-tick",
      path: ["Home tab", "Care & Health", "Flea & Tick"],
      title: "Flea and tick treatments",
      spots: [
        { at: "next", label: "Next treatment", body: "The product, the date and how often it repeats: every one, two or three months." },
        { at: "history", label: "History", body: "Every dose, and who gave it." },
        { at: "add", label: "Add Treatment" },
      ],
    },
    {
      screen: "heat-cycle",
      path: ["Home tab", "Care & Health", "Heat / Season"],
      title: "Heat cycles",
      spots: [
        { at: "next", label: "Next cycle", body: "Estimated from past cycles." },
        { at: "history", label: "History", body: "Dates and symptoms like swelling, spotting or restlessness." },
        { at: "add", label: "Add Cycle" },
      ],
    },
  ],

  "playdate-matching": [
    {
      screen: "discover",
      path: ["Discover tab", "Pets"],
      title: "Start on Discover",
      body: "Pets near you that are looking for a walk, a playdate, mating or a home.",
      spots: [
        { at: "tab-discover", start: true, label: "Discover tab", body: "Tap Discover in the bottom bar." },
        { at: "tabs", label: "Pets, Adopt, Foster, Shelters", body: "Stay on Pets for playdates and walks." },
        { at: "purpose", label: "What they’re looking for", body: "Walk, playdate, mating or adoption." },
        { at: "distance", label: "Roughly how far", body: "A general area and distance, never an address." },
        { at: "search", label: "Search", body: "Find pets and people by name." },
        { at: "filters", next: true, label: "Filters", body: "Narrow what you see." },
      ],
    },
    {
      screen: "filters",
      path: ["Discover tab", "Filters"],
      title: "Filter what you see",
      spots: [
        { at: "looking-for", label: "Looking for", body: "Walk, playdate, mating or adoption." },
        { at: "location", label: "Location", body: "Where you are, or search a city or area." },
        { at: "distance", label: "Distance" },
        { at: "type", label: "Dogs or cats" },
        { at: "breed", label: "Breed" },
        { at: "apply", next: true, label: "Show results", body: "Then tap a pet to open its profile." },
      ],
    },
    {
      screen: "pet-profile",
      path: ["Discover tab", "Tap a pet"],
      title: "A pet’s profile",
      spots: [
        { at: "distance", label: "Where they are", body: "General area and distance." },
        { at: "owner", label: "The owner", body: "Tap to see their profile." },
        { at: "traits", label: "Personality" },
        { at: "request", next: true, label: "Send playdate invite", body: "The button matches what the owner is looking for: walk, playdate or mating." },
      ],
    },
    {
      screen: "request-confirm",
      path: ["Pet profile", "Send playdate invite"],
      title: "Confirm your invite",
      spots: [
        { at: "what-happens", label: "What happens next", body: "The owner sees your invite. If they accept, a chat opens." },
        { at: "send", next: true, label: "Send", body: "You can withdraw it any time before it’s accepted." },
      ],
    },
    {
      screen: "notifications",
      path: ["Their phone", "Home tab", "Bell"],
      title: "They accept",
      spots: [{ at: "request", label: "The invite", body: "The owner taps Accept or Decline." }],
    },
    {
      screen: "chat",
      path: ["Messages tab", "The new chat"],
      title: "Plan the playdate",
      spots: [
        { at: "accepted", label: "How you connected", body: "The accepted invite opened this chat." },
        { at: "context", label: "Who and which pet" },
        { at: "camera", label: "Photos and video" },
        { at: "voice", label: "Voice notes" },
      ],
    },
  ],

  "adoption-fostering": [
    {
      screen: "discover-adopt",
      path: ["Discover tab", "Adopt"],
      title: "Start on Discover, Adopt",
      body: "Pets looking for a home near you. Foster works the same way, in the Foster tab.",
      spots: [
        { at: "tab-discover", start: true, label: "Discover tab", body: "Tap Discover in the bottom bar." },
        { at: "tabs", label: "Adopt or Foster", body: "Switch between pets for adoption and pets that need a foster." },
        { at: "filters", label: "Filters", body: "Distance, type, breed and more." },
        { at: "post", label: "Post a listing", body: "Rehoming a pet, or need a foster? Tap +." },
        { at: "listing", next: true, label: "A listing", body: "Tap to see the full story." },
      ],
    },
    {
      screen: "listing",
      path: ["Discover tab", "Adopt", "Tap a pet"],
      title: "Meet the pet",
      spots: [
        { at: "type", label: "Adoption or foster" },
        { at: "why", label: "Their story", body: "Why they need a home, and what they’re like." },
        { at: "good-to-know", label: "Good to know", body: "Vaccinations, special care and other details." },
        { at: "posted-by", label: "Posted by", body: "A person or a shelter. Verified shelters show a badge." },
        { at: "request", label: "Send an adoption request", body: "The poster reviews requests and chooses who to talk to." },
      ],
    },
    {
      screen: "post-listing",
      path: ["Discover tab", "Adopt or Foster", "+"],
      title: "Post your own listing",
      spots: [
        { at: "kind", label: "Adoption or foster" },
        { at: "photos", label: "Photos" },
        { at: "basics", label: "The basics", body: "Name, type, breed, age, gender and size." },
        { at: "how-long", label: "How long", body: "For fosters: how long you need someone." },
        { at: "special-care", label: "Special care", body: "Medication, no stairs, anything a carer needs to know." },
        { at: "header-action", label: "Post", body: "It appears in Discover and on your profile." },
      ],
    },
    {
      screen: "profile",
      path: ["Profile tab"],
      title: "Find your listings",
      spots: [
        { at: "tab-profile", start: true, label: "Profile tab" },
        { at: "listings", next: true, label: "Your listings", body: "Each shows how many people are interested. Tap one to manage it." },
      ],
    },
    {
      screen: "listing-requests",
      path: ["Profile tab", "Your listings", "A listing", "Adoption"],
      title: "Choose who to talk to",
      spots: [
        { at: "summary", label: "Who’s interested" },
        { at: "new", label: "Accept or decline", body: "Accepting opens a chat so you can get to know each other." },
        { at: "choose", label: "Choose as adopter", body: "When you’ve found the right home, choose them. The listing closes." },
      ],
    },
  ],

  shelters: [
    {
      screen: "shelters",
      path: ["Discover tab", "Shelters"],
      title: "Start on Discover, Shelters",
      spots: [
        { at: "tab-discover", start: true, label: "Discover tab", body: "Tap Discover in the bottom bar." },
        { at: "tab", label: "Shelters", body: "Next to Pets, Adopt and Foster." },
        { at: "shelter", label: "A shelter or rescue", body: "Where they are, how far, and the services they offer." },
        { at: "verified", label: "Verified", body: "Verified shelters show a blue badge." },
      ],
    },
    {
      screen: "listing",
      path: ["Discover tab", "Adopt", "A shelter’s pet"],
      title: "Their animals",
      body: "Shelter animals appear in Adopt and Foster, with the shelter’s name on each listing.",
      spots: [
        { at: "posted-by", label: "Posted by the shelter", body: "Tap to see the shelter’s profile and all its animals." },
        { at: "request", label: "Send a request", body: "When the shelter accepts, a chat opens." },
      ],
    },
    {
      screen: "role",
      path: ["Sign up", "How will you use Hushku?"],
      title: "For shelters: choose Shelter",
      spots: [{ at: "roles", label: "Pet owner, Shelter or Explorer", body: "Shelter accounts list animals and manage adoptions. Free." }],
    },
    {
      screen: "shelter-signup",
      path: ["Sign up", "Shelter", "Shelter profile"],
      title: "Set up your shelter profile",
      spots: [
        { at: "logo", label: "Logo" },
        { at: "name", label: "Name and location", body: "Plus email, phone and a contact person." },
        { at: "services", label: "Services offered", body: "Adoption, fostering, vet care and more." },
      ],
    },
    {
      screen: "post-listing",
      path: ["Discover tab", "Adopt or Foster", "+"],
      title: "List your animals",
      spots: [
        { at: "kind", label: "Adoption or foster" },
        { at: "photos", label: "Photos" },
        { at: "special-care", label: "Special care" },
      ],
    },
  ],

  "lost-and-found": [
    {
      screen: "alerts",
      path: ["Alerts tab"],
      title: "Start on Alerts",
      body: "Lost, found and rescue reports near you.",
      spots: [
        { at: "tab-alerts", start: true, label: "Alerts tab", body: "Tap Alerts in the bottom bar." },
        { at: "tabs", label: "Lost, Found and Rescue" },
        { at: "area", label: "Approximate area", body: "Where the pet was last seen, never an exact address." },
        { at: "reward", label: "Reward", body: "If the owner offered one. Hushku doesn’t handle payment." },
        { at: "report", next: true, label: "Report a lost pet", body: "Tap +." },
      ],
    },
    {
      screen: "lost-report",
      path: ["Alerts tab", "+"],
      title: "Report a lost pet",
      spots: [
        { at: "whose", label: "Whose pet?", body: "Your pet, or a pet you’re helping: a stray or a rescue." },
        { at: "photos", label: "Photos" },
        { at: "markings", label: "Colour or markings" },
        { at: "last-seen", label: "Last seen", body: "Roughly where and when. Choose Not sure if you don’t know." },
        { at: "reward", label: "Offer a reward", body: "Optional." },
        { at: "header-action", label: "Post", body: "People nearby see it in Alerts and get a lost pet alert." },
      ],
    },
    {
      screen: "lost-contact",
      path: ["Alerts tab", "A report", "Get in touch"],
      title: "Seen a lost pet? Get in touch",
      spots: [
        { at: "intent", label: "Say what it’s about", body: "I found them, I saw them, or I have information." },
        { at: "continue", label: "Continue to chat", body: "Opens a chat with the person who posted." },
      ],
    },
    {
      screen: "lost-detail",
      path: ["Alerts tab", "Your report"],
      title: "Your report",
      spots: [
        { at: "when", label: "Last seen" },
        { at: "area", label: "Approximate area" },
        { at: "found", label: "Mark as found", body: "When your pet is home, close the report." },
        { at: "share", label: "Share", body: "Share outside Hushku too." },
        { at: "options", label: "Edit or delete" },
      ],
    },
    {
      screen: "notification-settings",
      path: ["Profile tab", "Settings", "Notifications"],
      title: "Lost alerts",
      spots: [{ at: "toggles", label: "Lost alerts", body: "On by default. Hushku tells you when a pet is reported lost nearby." }],
    },
  ],

  messaging: [
    {
      screen: "messages",
      path: ["Messages tab"],
      title: "Start on Messages",
      spots: [
        { at: "tab-messages", start: true, label: "Messages tab", body: "Tap Messages in the bottom bar. The badge shows unread chats." },
        { at: "new-message", label: "New message", body: "Message anyone you have an accepted request with." },
        { at: "conversation", next: true, label: "A conversation", body: "Unread chats show a blue dot." },
      ],
    },
    {
      screen: "chat",
      path: ["Messages tab", "A chat"],
      title: "Your chat",
      body: "Every chat starts with an accepted request: a walk, playdate, mating or adoption.",
      spots: [
        { at: "context", label: "Who and which pet", body: "Tap to see the pet you connected about." },
        { at: "accepted", label: "How you connected" },
        { at: "camera", label: "Photos and video", body: "From your camera or library." },
        { at: "voice", label: "Voice notes", body: "Hold to record." },
        { at: "options", label: "Block or report" },
      ],
    },
    {
      screen: "chat-actions",
      path: ["A chat", "Press and hold a message"],
      title: "Message actions",
      spots: [{ at: "actions", label: "Reply, Copy, Unsend, Report", body: "Unsend removes your message for both of you." }],
    },
    {
      screen: "notifications",
      path: ["Home tab", "Bell"],
      title: "Requests that start chats",
      spots: [{ at: "request", label: "Accept a request", body: "Accepting opens a chat in Messages." }],
    },
  ],

  "your-profile": [
    {
      screen: "role",
      path: ["Sign up"],
      title: "Choose how you’ll use Hushku",
      spots: [{ at: "roles", label: "Pet owner, Shelter or Explorer", body: "You can change this later." }],
    },
    {
      screen: "add-pet",
      path: ["Sign up", "Add your pet"],
      title: "Add your pet",
      spots: [
        { at: "photos", label: "Photos" },
        { at: "basics", label: "Name, type and breed" },
        { at: "neutered", label: "Spayed or neutered", body: "This helps keep mating requests safe." },
        { at: "looking-for", label: "What you’re looking for", body: "Walks, playdates, mating or adoption." },
      ],
    },
    {
      screen: "profile",
      path: ["Profile tab"],
      title: "Your profile",
      spots: [
        { at: "tab-profile", start: true, label: "Profile tab", body: "Tap Profile in the bottom bar." },
        { at: "edit", label: "Edit profile" },
        { at: "circle", label: "Your Circle", body: "People you’ve met on Hushku and want to keep close." },
        { at: "pets", label: "Your pets", body: "Tap a pet to edit it." },
        { at: "add-pet", label: "Add Pet" },
        { at: "listings", label: "Your listings", body: "Adoption and foster listings you’ve posted." },
        { at: "settings", next: true, label: "Settings" },
      ],
    },
    {
      screen: "settings",
      path: ["Profile tab", "Settings"],
      title: "Settings",
      spots: [
        { at: "privacy-row", next: true, label: "Account privacy" },
        { at: "blocked-row", label: "Blocked accounts", body: "Unblock people here." },
        { at: "notifications-row", label: "Notifications" },
      ],
    },
    {
      screen: "privacy",
      path: ["Profile tab", "Settings", "Account privacy"],
      title: "Choose who sees what",
      spots: [
        { at: "privacy", label: "Public or private", body: "Private means only your Circle sees your personal pets." },
        { at: "circle", label: "Who can add you to their Circle", body: "Anyone, approval required, or nobody." },
      ],
    },
    {
      screen: "notification-settings",
      path: ["Profile tab", "Settings", "Notifications"],
      title: "Choose your notifications",
      spots: [{ at: "toggles", label: "Turn each kind on or off", body: "Care reminders, care team, messages, requests, lost alerts and more." }],
    },
  ],
};

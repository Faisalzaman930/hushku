import type { TourStep } from "./AppTour";

/** Walkthroughs of the real app, one per help topic. Feature pages show the first steps. */
export const TOURS: Record<string, TourStep[]> = {
  "care-team": [
    {
      screen: "home",
      title: "Home: everyone’s day, in one place",
      body: "The Home tab is the same for everyone on the care team. What one person ticks, everyone sees.",
      spots: [
        { at: "care-team", label: "Your care team", body: "Who’s looking after this pet. Tap Manage to invite people or change who’s on the team." },
        { at: "todays-care", label: "Today’s care", body: "Today’s reminders as a shared checklist, with progress at the top." },
        { at: "done-by", label: "Done by", body: "Every task shows who did it, so nobody has to ask." },
        { at: "nudge", label: "Remind someone", body: "Tap the bell to send a care team member a reminder about this task." },
        { at: "pet-switcher", label: "Switch pet", body: "Caring for more than one pet? Switch between them here." },
      ],
    },
    {
      screen: "care-team",
      title: "The care team",
      body: "The owner sees everyone connected to the pet and can invite, cancel or remove people.",
      spots: [
        { at: "header-action", label: "Invite", body: "Add someone to the team. They need a Hushku account." },
        { at: "owner", label: "Owner", body: "The pet’s owner manages the team and the pet’s profile." },
        { at: "caregiver", label: "Caregiver", body: "Can help manage care: tick tasks, log meals and walks, add records." },
        { at: "viewer", label: "Viewer", body: "Can see the pet’s care but not change it. Good for a vet nurse or grandparent." },
        { at: "pending", label: "Pending invites", body: "Invites waiting for an answer. Cancel one any time." },
      ],
    },
    {
      screen: "invite-member",
      title: "Invite someone and choose a role",
      spots: [
        { at: "search", label: "Find them", body: "Search by username or email." },
        { at: "person", label: "Check it’s the right person", body: "Tap Change to pick someone else." },
        { at: "role", label: "Choose a role", body: "Caregiver to help with care, or Viewer to just see it." },
        { at: "send", label: "Send the invite", body: "They get a notification to accept or decline." },
      ],
    },
    {
      screen: "notifications",
      title: "They accept, and they’re in",
      body: "Invites, reminders from the team and requests all arrive in Notifications.",
      spots: [
        { at: "invite", label: "Care team invite", body: "Accept to join the pet’s care team, or decline." },
        { at: "nudge", label: "A reminder from the team", body: "When someone taps the bell on a task, it lands here and as a push notification." },
      ],
    },
    {
      screen: "remind-sheet",
      title: "Remind someone about a task",
      body: "Tap the bell next to any reminder on Home.",
      spots: [
        { at: "people", label: "Choose who to remind", body: "Pick one or more people on the care team." },
        { at: "send", label: "Send", body: "They get a gentle push: “Sarah reminded you to give Bella medication.”" },
      ],
    },
    {
      screen: "home-synced",
      title: "Done, and everyone knows",
      body: "This is Sarah’s phone a moment after Faisal gave Bella her tablet.",
      spots: [{ at: "done-by", label: "Updated for everyone", body: "The task is ticked off on every phone on the team, with who did it." }],
    },
  ],

  "health-care": [
    {
      screen: "home",
      title: "Home: today’s care at a glance",
      spots: [
        { at: "todays-care", label: "Today’s care", body: "Tick off reminders as you go. The bar shows how much is done." },
        { at: "upcoming", label: "Upcoming", body: "Vaccines, vet visits and other reminders that are coming up." },
        { at: "nudge", label: "Remind someone", body: "Tap the bell to remind someone on the care team." },
        { at: "care-team", label: "Care team", body: "Share all of this with family, a partner or a sitter." },
      ],
    },
    {
      screen: "add-reminder",
      title: "Set a reminder",
      spots: [
        { at: "type", label: "Choose a type", body: "Feeding, water, walk, meds, vaccine or other." },
        { at: "title", label: "Name it", body: "For example, Heartworm tablet." },
        { at: "schedule", label: "Pick a date and time" },
        { at: "repeat", label: "Repeat", body: "None, daily, weekly or monthly." },
        { at: "notes", label: "Add a note", body: "Anything the rest of the team should know." },
      ],
    },
    {
      screen: "health-records",
      title: "Keep health records together",
      spots: [
        { at: "header-action", label: "Add a record", body: "Vaccination, vet visit, medication, lab report or other." },
        { at: "filter", label: "Filter by type" },
        { at: "records", label: "Every record, with attachments", body: "Attach documents or photos, and set a next due date." },
        { at: "shared", label: "Shared with the care team" },
      ],
    },
    {
      screen: "weight",
      title: "Track weight over time",
      spots: [
        { at: "current", label: "Current weight", body: "With the change over the last 30 days." },
        { at: "chart", label: "The trend", body: "See how weight changes over one, three, six or twelve months." },
        { at: "history", label: "History", body: "Every entry, newest first." },
      ],
    },
  ],

  "playdate-matching": [
    {
      screen: "discover",
      title: "Find pets near you",
      spots: [
        { at: "tabs", label: "Pets, Adopt, Foster, Shelters", body: "Stay on Pets for playdates and walks." },
        { at: "purpose", label: "What they’re looking for", body: "Walk, playdate, mating or adoption." },
        { at: "distance", label: "Roughly how far", body: "An approximate area and distance, never an address." },
        { at: "filters", label: "Filters", body: "Narrow by distance, type, gender, breed and more." },
      ],
    },
    {
      screen: "filters",
      title: "Filter what you see",
      spots: [
        { at: "looking-for", label: "Looking for", body: "Walk, playdate, mating or adoption." },
        { at: "location", label: "Location", body: "Use where you are, or search a city or area." },
        { at: "distance", label: "Distance" },
        { at: "type", label: "Dogs or cats" },
        { at: "apply", label: "Show results" },
      ],
    },
    {
      screen: "pet-profile",
      title: "Open a profile and send an invite",
      spots: [
        { at: "distance", label: "Where they are", body: "General area and distance." },
        { at: "owner", label: "The owner" },
        { at: "request", label: "Send playdate invite", body: "The button matches what the owner is looking for." },
        { at: "traits", label: "Personality" },
      ],
    },
    {
      screen: "request-confirm",
      title: "Confirm, and wait for a yes",
      spots: [
        { at: "what-happens", label: "What happens next", body: "The owner sees your invite. If they accept, a chat opens." },
        { at: "send", label: "Send", body: "You can withdraw it any time before it’s accepted." },
      ],
    },
    {
      screen: "chat",
      title: "Accepted: plan the playdate",
      spots: [
        { at: "accepted", label: "How you connected", body: "The request that opened this chat." },
        { at: "context", label: "Who and which pet" },
      ],
    },
  ],

  "adoption-fostering": [
    {
      screen: "listing",
      title: "A pet looking for a home",
      spots: [
        { at: "type", label: "Adoption or foster" },
        { at: "why", label: "Their story", body: "Why they need a home, and what they’re like." },
        { at: "good-to-know", label: "Good to know", body: "Vaccinations, special care and other details." },
        { at: "posted-by", label: "Who posted it", body: "A person or a shelter. Verified shelters show a badge." },
        { at: "request", label: "Send an adoption request", body: "They review requests and choose who to talk to." },
      ],
    },
    {
      screen: "post-listing",
      title: "Post your own listing",
      spots: [
        { at: "kind", label: "Adoption or foster" },
        { at: "photos", label: "Photos" },
        { at: "basics", label: "The basics", body: "Name, type, breed, age, gender and size." },
        { at: "how-long", label: "How long", body: "For fosters: how long you need someone." },
        { at: "special-care", label: "Special care", body: "Medication, no stairs, anything a carer needs to know." },
      ],
    },
    {
      screen: "notifications",
      title: "Hear back",
      spots: [{ at: "request", label: "Requests and replies", body: "Accept a request to open a chat and arrange next steps." }],
    },
  ],

  shelters: [
    {
      screen: "shelters",
      title: "Shelters and rescues near you",
      spots: [
        { at: "tab", label: "The Shelters tab", body: "In Discover, next to Pets, Adopt and Foster." },
        { at: "shelter", label: "A shelter’s profile", body: "Where they are, how far, and the services they offer." },
        { at: "verified", label: "Verified", body: "Verified shelters show a blue badge." },
      ],
    },
    {
      screen: "listing",
      title: "Their animals, ready to meet",
      spots: [
        { at: "posted-by", label: "Posted by the shelter" },
        { at: "request", label: "Send a request", body: "When the shelter accepts, a chat opens." },
      ],
    },
    {
      screen: "role",
      title: "For shelters: choose Shelter when you sign up",
      spots: [{ at: "roles", label: "Pet owner, Shelter or Explorer", body: "Shelter accounts list animals and manage adoptions. Free." }],
    },
    {
      screen: "shelter-signup",
      title: "Set up your shelter profile",
      spots: [
        { at: "logo", label: "Your logo" },
        { at: "name", label: "Name and location" },
        { at: "services", label: "Services offered", body: "Adoption, fostering, vet care and more." },
      ],
    },
  ],

  "lost-and-found": [
    {
      screen: "alerts",
      title: "Alerts near you",
      spots: [
        { at: "tabs", label: "Lost, Found and Rescue" },
        { at: "area", label: "Approximate area", body: "Where the pet was last seen, never an exact address." },
        { at: "reward", label: "Reward", body: "If the owner offered one. Hushku doesn’t handle payment." },
        { at: "report", label: "Report a lost pet" },
      ],
    },
    {
      screen: "lost-report",
      title: "Report a lost pet in a minute",
      spots: [
        { at: "whose", label: "Whose pet is it?", body: "Your pet, or a pet you’re helping: a stray or a rescue." },
        { at: "photos", label: "Photos" },
        { at: "markings", label: "Colour or markings" },
        { at: "last-seen", label: "Last seen", body: "Roughly where and when. Choose Not sure if you don’t know." },
        { at: "reward", label: "Offer a reward", body: "Optional." },
      ],
    },
    {
      screen: "lost-contact",
      title: "Seen them? Get in touch",
      spots: [
        { at: "intent", label: "Say what it’s about", body: "I found them, I saw them, or I have information." },
        { at: "continue", label: "Continue to chat" },
      ],
    },
    {
      screen: "lost-detail",
      title: "Home safe",
      spots: [
        { at: "when", label: "When they were last seen" },
        { at: "area", label: "Approximate area" },
        { at: "found", label: "Mark as found", body: "When your pet is home, close the report." },
        { at: "share", label: "Share", body: "Share the report outside Hushku too." },
      ],
    },
  ],

  messaging: [
    {
      screen: "notifications",
      title: "Every chat starts with a request",
      spots: [{ at: "request", label: "Accept a request", body: "Walk, playdate, mating or adoption. Accepting opens a chat." }],
    },
    {
      screen: "chat",
      title: "Your chat",
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
      title: "Press and hold a message",
      spots: [{ at: "actions", label: "Reply, copy, unsend or report" }],
    },
    {
      screen: "messages",
      title: "All your chats",
      spots: [
        { at: "conversation", label: "Conversations", body: "Unread chats show a blue dot." },
        { at: "new-message", label: "New message", body: "Message anyone you have an accepted request with." },
      ],
    },
  ],

  "your-profile": [
    {
      screen: "role",
      title: "Choose how you’ll use Hushku",
      spots: [{ at: "roles", label: "Pet owner, Shelter or Explorer", body: "You can change this later." }],
    },
    {
      screen: "add-pet",
      title: "Add your pet",
      spots: [
        { at: "photos", label: "Photos" },
        { at: "basics", label: "Name, type and breed" },
        { at: "neutered", label: "Spayed or neutered", body: "This helps keep mating requests safe." },
        { at: "looking-for", label: "What you’re looking for", body: "Walks, playdates, mating or adoption." },
      ],
    },
    {
      screen: "privacy",
      title: "Choose who sees what",
      spots: [
        { at: "privacy", label: "Public or private", body: "Private means only your Circle sees your personal pets." },
        { at: "circle", label: "Who can add you to their Circle" },
        { at: "blocked", label: "Blocked accounts" },
      ],
    },
    {
      screen: "notification-settings",
      title: "Choose your notifications",
      spots: [{ at: "toggles", label: "Turn each kind on or off", body: "Care reminders, care team, messages, requests, lost alerts and more." }],
    },
  ],
};

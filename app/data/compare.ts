/**
 * "Alternatives to X" and "Hushku vs X" pages. Facts about other apps come from their US App Store
 * listings, checked on CHECKED. Keep claims to what the listings say; re-check before changing.
 */
export const CHECKED = "October 2026";
export const CHECKED_ISO = "2026-10-15";

export type Alt = {
  name: string;
  bestFor: string;
  body: string;
  price: string;
  href?: string;
};

export type ComparePage = {
  slug: string;
  kind: "alternatives" | "vs";
  /** The app being compared against. */
  rival: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  /** Why people look elsewhere, kept to what's in the listing or its reviews. */
  why?: string[];
  alternatives?: Alt[];
  /** Rows for vs pages: [feature, Hushku, rival]. */
  table?: [string, string, string][];
  verdict?: { pickRival: string; pickHushku: string };
  hushku: { title: string; body: string; link: { href: string; label: string } };
  faqs: { q: string; a: string }[];
  related: string[];
};

const DOGLOG: Alt = {
  name: "DogLog",
  bestFor: "A shared daily log for a dog",
  body: "Log food, water, walks, potty, sleep, grooming, training and medicine, and form a \"pack\" so everyone who cares for the dog sees the same history. Sitters and walkers can add photos and messages. Includes reminders, charts and export for your vet.",
  price: "Free with ads; Premium $3.99 a month or $39.99 a year",
};
const ELEVENPETS: Alt = {
  name: "11pets",
  bestFor: "Health records for one owner",
  body: "Medication reminders, appointments, weight and vital signs, and storage for documents such as vaccination records, with sharing of records with your vet. Works on iPhone, iPad and Mac.",
  price: "Free; in-app purchases listed at $1.99 and $17.99",
};
const PETDESK: Alt = {
  name: "PetDesk",
  bestFor: "Booking and reminders from your vet",
  body: "Request appointments, get reminders and to-dos that sync with your calendar, request prescription refills and keep your vets, groomers and boarders in one place. Many features depend on your clinic using PetDesk.",
  price: "Free",
};
const COZI: Alt = {
  name: "Cozi Family Organizer",
  bestFor: "Families who want pet chores in the family calendar",
  body: "Not a pet app: a shared, colour-coded family calendar with reminders, shopping and to-do lists. Useful for vet appointments and chore rotas, but it has no pet profiles or health records.",
  price: "Free with ads; Cozi Gold is a paid upgrade",
};
const PETFINDER_ALT: Alt = {
  name: "Petfinder",
  bestFor: "Searching shelters and rescues near you",
  body: "Browse adoptable dogs, cats and other animals from shelters and rescue groups, filter by location, breed, age, size and more, and contact the shelter to start an adoption. Includes a photo search for similar-looking pets.",
  price: "Free",
};
const REHOME: Alt = {
  name: "Rehome by Adopt-a-Pet",
  bestFor: "Owners rehoming a pet themselves (US)",
  body: "A free self-rehoming service: owners create a profile that's shown to local adopters on AdoptaPet.com, and adopters apply through a built-in application.",
  price: "Free for owners",
};
const SHELTERS: Alt = {
  name: "Your local shelter or breed rescue",
  bestFor: "Meeting pets and getting matched in person",
  body: "Many shelters and breed rescues list pets on their own websites first, and staff can match you with a pet whose needs fit your home. Visiting in person also lets you meet the animal before you apply.",
  price: "Adoption fees vary",
};

const HUSHKU_CARE = {
  title: "Hushku: built for sharing care",
  body: "In Hushku you add family members, roommates and your sitter to each pet's Care Team. Everyone sees the same reminders, feeding times, medication and notes, and can log what they've done. It also keeps health records, weight, flea and tick treatments and heat cycles. Free on iPhone and Android, launching soon, so you can't download it yet.",
  link: { href: "/care-team", label: "See the Care Team" },
};

export const COMPARE_PAGES: ComparePage[] = [
  {
    slug: "11pets-alternatives",
    kind: "alternatives",
    rival: "11pets",
    title: "11pets Alternatives",
    seoTitle: "11pets Alternatives: Pet Health Apps Compared",
    description: "Looking for an 11pets alternative? Compare DogLog, PetDesk and more on shared care, reminders, health records and price, from their App Store listings.",
    lead: "11pets is a pet health tracker for medication reminders, appointments, weight and documents. If you need something else, usually sharing with the rest of your household, these are the options worth comparing.",
    why: [
      "Its App Store listing describes sharing records with a vet, not with other people in your home.",
      "Its US App Store rating was 3.3 from 77 ratings in October 2026, with some reviewers reporting problems after a major update.",
    ],
    alternatives: [DOGLOG, PETDESK, COZI],
    hushku: HUSHKU_CARE,
    faqs: [
      { q: "Is 11pets free?", a: "It's free to download. Its App Store listing showed in-app purchases at $1.99 and $17.99 in October 2026; check the listing for what each unlocks." },
      { q: "Which 11pets alternative lets my family share care?", a: "Of the apps here, DogLog lets you form a \"pack\" with other carers. Cozi shares a family calendar but has no pet records. Hushku is built around a shared Care Team but hasn't launched yet." },
    ],
    related: ["hushku-vs-11pets", "doglog-alternatives", "petdesk-alternatives"],
  },
  {
    slug: "doglog-alternatives",
    kind: "alternatives",
    rival: "DogLog",
    title: "DogLog Alternatives",
    seoTitle: "DogLog Alternatives: Shared Pet Care Apps Compared",
    description: "Looking for a DogLog alternative? Compare 11pets, PetDesk, Cozi and more on shared care, health records, cats and price, from their App Store listings.",
    lead: "DogLog is a well-rated shared log for dogs. People usually look elsewhere because they have a cat too, want health records in the free version, or don't want ads.",
    why: [
      "It's built for dogs; the name and listing are dog-focused.",
      "Some reviewers note that features such as adding vaccinations and medical information need Premium.",
      "The free version shows ads; Premium was $3.99 a month or $39.99 a year in October 2026.",
    ],
    alternatives: [ELEVENPETS, PETDESK, COZI],
    hushku: HUSHKU_CARE,
    faqs: [
      { q: "Is DogLog free?", a: "Yes, with ads. Premium was listed at $3.99 a month or $39.99 a year on the US App Store in October 2026." },
      { q: "Can DogLog be shared with a dog walker?", a: "Yes. Its listing says you can form a pack with other carers, and sitters and walkers can add photos and messages." },
    ],
    related: ["hushku-vs-doglog", "11pets-alternatives", "petdesk-alternatives"],
  },
  {
    slug: "petdesk-alternatives",
    kind: "alternatives",
    rival: "PetDesk",
    title: "PetDesk Alternatives",
    seoTitle: "PetDesk Alternatives: Pet Reminder Apps Compared",
    description: "Looking for a PetDesk alternative that works whatever vet you use? Compare 11pets, DogLog and more on reminders, records and shared care.",
    lead: "PetDesk is a free app for booking and reminders from your vet, and it's very well rated. It works best when your clinic uses it. If yours doesn't, or you want to track daily care yourself, these are the alternatives.",
    why: [
      "Reviews suggest syncing and messaging depend on your clinic being set up with PetDesk.",
      "It's focused on appointments and provider reminders rather than daily care like meals and walks.",
    ],
    alternatives: [ELEVENPETS, DOGLOG, COZI],
    hushku: HUSHKU_CARE,
    faqs: [
      { q: "Do I need my vet to use PetDesk?", a: "PetDesk's App Store listing doesn't say so directly, but reviews suggest that syncing with your vet and messaging them depend on the clinic using PetDesk. Ask your clinic." },
      { q: "Is there a pet reminder app that doesn't need my vet?", a: "Yes. 11pets and DogLog both let you set your own reminders. Hushku will too when it launches, and shares them with your household." },
    ],
    related: ["11pets-alternatives", "doglog-alternatives", "hushku-vs-11pets"],
  },
  {
    slug: "petfinder-alternatives",
    kind: "alternatives",
    rival: "Petfinder",
    title: "Petfinder Alternatives",
    seoTitle: "Petfinder Alternatives: Other Ways to Adopt a Pet",
    description: "Other ways to find a pet to adopt besides Petfinder: Adopt-a-Pet's Rehome, local shelters and breed rescues, and adoption listings in apps.",
    lead: "Petfinder is one of the largest searches for adoptable pets in the US, it's free, and it's well rated. It's still worth looking beyond it, because not every shelter, rescue or owner lists there.",
    why: [
      "Some shelters and breed rescues post pets on their own sites first.",
      "Pets being rehomed directly by their owners are usually listed elsewhere.",
      "You contact each shelter separately to start an adoption.",
    ],
    alternatives: [REHOME, SHELTERS],
    hushku: {
      title: "Adoption in Hushku",
      body: "Shelters and owners will be able to list pets for adoption in Hushku, and adopters send an adoption request from the listing, with the conversation kept in the app. Free for shelters and adopters, launching soon, so it isn't available yet.",
      link: { href: "/adoption", label: "See adoption" },
    },
    faqs: [
      { q: "Is Petfinder free?", a: "Yes. The Petfinder app is free to use. Adoption fees are set by each shelter or rescue." },
      { q: "Where else can I find pets to adopt?", a: "Local shelters' and breed rescues' own websites, Adopt-a-Pet (including pets listed by their owners through Rehome), and community rehoming pages run by some humane societies." },
    ],
    related: ["11pets-alternatives", "doglog-alternatives"],
  },
  {
    slug: "hushku-vs-doglog",
    kind: "vs",
    rival: "DogLog",
    title: "Hushku vs DogLog",
    seoTitle: "Hushku vs DogLog: Which Shared Pet Care App?",
    description: "Hushku vs DogLog compared on shared care, health records, cats, extra features and price. An honest comparison: DogLog is available now, Hushku launches soon.",
    lead: "Both apps let several people share a pet's care. DogLog is a detailed daily log for dogs and you can download it today. Hushku covers dogs and cats, adds health records and community features, and hasn't launched yet.",
    table: [
      ["Available now", "No, launching soon", "Yes"],
      ["Platforms", "iPhone and Android", "iPhone; check Google Play for Android"],
      ["Pets", "Dogs and cats", "Built for dogs"],
      ["Share with family and sitters", "Yes, Care Team", "Yes, \"pack\""],
      ["Daily care log", "Yes", "Yes, very detailed"],
      ["Reminders", "Yes", "Yes"],
      ["Vaccinations and vet records", "Yes", "Yes; some need Premium"],
      ["Weight, flea and tick, heat cycles", "Yes", "Weight and custom events"],
      ["Playdates, adoption, fostering", "Yes", "No"],
      ["Price", "Free", "Free with ads; Premium $3.99/month"],
    ],
    verdict: {
      pickRival: "You want a shared dog log today, with detailed charts and an export for your vet.",
      pickHushku: "You have cats as well as dogs, want health records and shared care free, or want playdates and adoption in the same app, and can wait for launch.",
    },
    hushku: HUSHKU_CARE,
    faqs: [
      { q: "Is Hushku available yet?", a: "Not yet. Hushku is launching soon on iPhone and Android. Leave your email on this page and we'll send one message when it's out." },
      { q: "Can I move my DogLog history into Hushku?", a: "There's no import from DogLog. DogLog's listing says you can export data to share with your vet, which you can keep for your records." },
    ],
    related: ["doglog-alternatives", "hushku-vs-11pets"],
  },
  {
    slug: "hushku-vs-11pets",
    kind: "vs",
    rival: "11pets",
    title: "Hushku vs 11pets",
    seoTitle: "Hushku vs 11pets: Pet Health Apps Compared",
    description: "Hushku vs 11pets compared on health records, reminders, sharing with your household, platforms and price. Honest: 11pets is available now, Hushku launches soon.",
    lead: "Both keep a pet's health records and reminders. 11pets is available now on Apple devices. Hushku is built around sharing care with your household and sitter, runs on iPhone and Android, and hasn't launched yet.",
    table: [
      ["Available now", "No, launching soon", "Yes"],
      ["Platforms", "iPhone and Android", "iPhone, iPad and Mac"],
      ["Share with family and sitters", "Yes, Care Team", "Not described in listing; shares with vet"],
      ["Medication and care reminders", "Yes", "Yes"],
      ["Vaccinations and documents", "Yes", "Yes"],
      ["Weight tracking", "Yes", "Yes, plus vital signs"],
      ["Flea and tick, heat cycles", "Yes", "Not described in listing"],
      ["Playdates, adoption, fostering", "Yes", "No"],
      ["Price", "Free", "Free; in-app purchases $1.99 and $17.99"],
    ],
    verdict: {
      pickRival: "You need a health record app today, you're on Apple devices, and you're the only person who manages your pet's care.",
      pickHushku: "Several people look after your pet, someone in the house uses Android, or you want flea, tick and heat cycle tracking too, and you can wait for launch.",
    },
    hushku: HUSHKU_CARE,
    faqs: [
      { q: "Is Hushku available yet?", a: "Not yet. Hushku is launching soon on iPhone and Android. Leave your email on this page and we'll send one message when it's out." },
      { q: "Does 11pets work on Android?", a: "Its App Store listing covers iPhone, iPad and Mac. Check Google Play for an Android version in your country." },
    ],
    related: ["11pets-alternatives", "hushku-vs-doglog", "petdesk-alternatives"],
  },
];

export const findCompare = (slug: string) => COMPARE_PAGES.find((c) => c.slug === slug);

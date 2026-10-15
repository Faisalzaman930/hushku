import type { Guide } from "./guides";

const h = (t: string) => `<h4 class="text-xl font-bold text-ebony mb-4 mt-8">${t}</h4>`;
const p = (t: string) => `<p class="mb-6">${t}</p>`;
const ul = (items: string[]) => `<ul class="list-disc pl-6 mb-8 space-y-3">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const ol = (items: string[]) => `<ol class="list-decimal pl-6 mb-8 space-y-3">${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
const a = (href: string, text: string) => `<a href="${href}" class="text-brand-start font-bold hover:underline">${text}</a>`;

export const guideSharedPetCare: Guide = {
  slug: "how-to-share-pet-care-at-home",
  title: "How to Share Pet Care at Home Without Missed Meals or Double Doses",
  seoTitle: "How to Share Pet Care With Your Family",
  shortTitle: "Sharing Pet Care at Home",
  seoDescription: "A practical guide to splitting pet care between partners, kids, roommates and sitters: who does what, how to avoid double-feeding and missed medication, and what to write down.",
  category: "Expert Guides",
  tags: ["Daily Care", "Family", "Expert Guides"],
  publishDate: "October 2026",
  lastUpdated: "October 2026",
  readTime: "9 Min Read",
  introduction: `Most pets in shared homes are looked after by more than one person. That's good for the pet, right up until two people each feed the dog because neither knew the other had, or the evening tablet gets skipped because everyone assumed someone else gave it.

The fix isn't more effort, it's a clearer system: one agreed routine, one named person for each job, and one place where everyone records what they've done. This guide walks through setting that up for partners, children, roommates and the sitter who covers when you're away.`,
  chapters: [
    {
      title: "1. Write the routine down once",
      content:
        p("Start by writing out what actually happens in a normal day, not what should happen. Include the small things people forget to mention to a sitter.") +
        ul([
          "<strong>Meals:</strong> times, exact amounts (measured, not \"a scoop\") and which food.",
          "<strong>Walks and toilet breaks:</strong> times, rough length, lead rules.",
          "<strong>Medication and treatments:</strong> name, dose, time, how to give it, and the date of the next flea, tick or worming treatment.",
          "<strong>House rules:</strong> sofa or not, treats allowed, doors that must stay shut.",
          "<strong>Who to call:</strong> your vet, the nearest emergency vet and a backup contact.",
        ]) +
        p(`Our free ${a("/templates/dog-feeding-schedule-template", "feeding schedule")} and ${a("/templates/dog-walking-schedule-template", "walking schedule")} templates give you a ready-made layout.`),
    },
    {
      title: "2. Give every job one owner",
      content:
        p("\"Whoever's free\" is how jobs get missed. Put a name against each recurring task instead, and agree a backup for when that person is out.") +
        ul([
          "<strong>Split by time of day</strong> (one person does mornings, another evenings) rather than by task, so nobody has to check whether the other half of a job got done.",
          "<strong>Keep medication with one person</strong> where possible. If it has to be shared, use a tick chart or a shared log so a dose can't be given twice.",
          "<strong>Rotate the unpopular jobs</strong> (litter trays, the late walk) weekly so resentment doesn't build.",
        ]),
    },
    {
      title: "3. Children: match jobs to age",
      content:
        p("Children can take real responsibility for a pet, but an adult should stay accountable for anything that affects the animal's health.") +
        ul([
          "<strong>Younger children</strong> can refill water bowls, help measure food with an adult checking, and brush a calm pet.",
          "<strong>Older children</strong> can take on feeding and short walks once they can handle the dog safely, with an adult checking the log.",
          "<strong>Teenagers</strong> may manage full routines, but medication and anything involving a vet decision is best kept with an adult.",
        ]) +
        p("Never leave young children alone with a dog, however gentle it is."),
    },
    {
      title: "4. Record what's done, as it's done",
      content:
        p("A shared record is what stops double meals and missed doses. It only works if people fill it in at the moment they do the job, not at the end of the day.") +
        ul([
          "<strong>Paper:</strong> a chart on the fridge with a box for every meal, walk and dose. Cheap and visible, but only works for people in the house.",
          "<strong>Shared notes or group chat:</strong> easy, but entries get buried and there's no reminder when something's due.",
          "<strong>A shared pet care app:</strong> reminders go to everyone, and whoever does the job marks it done so the others see it straight away.",
        ]) +
        p(`If you're comparing apps for this, see our roundup of ${a("/resources/best-family-pet-care-apps", "family pet care apps")}.`),
    },
    {
      title: "5. Handing over to a sitter",
      content:
        p("A sitter or a relative covering for a weekend needs the same routine, plus the things you only know because you live with the pet.") +
        ul([
          "Walk them through the routine in person if you can, ideally with a practice visit.",
          "Leave the vet's details and a signed note authorising treatment if you can't be reached.",
          "Say what's normal for your pet (how much they usually eat, whether they hide from visitors) so they can tell when something isn't.",
          "Agree how they'll let you know everything's fine, and what counts as \"call me now\".",
        ]) +
        p(`Our ${a("/templates/pet-sitter-instructions-template", "pet sitter instructions template")} covers everything to leave behind.`),
    },
  ],
  appCta: {
    title: "One shared routine for everyone who helps",
    body: "In Hushku you add family members and your sitter to your pet's Care Team. Everyone sees the same feeding times, medication and notes, gets the reminders, and can log what they've done.",
    link: { href: "/care-team", label: "See the Care Team" },
  },
  conclusion: "Shared pet care works when the routine is written down, every job has a name next to it, and everyone records what they've done as they do it. Set it up once and it saves arguments, missed meals and double doses for years.",
  relatedSlugs: ["best-family-pet-care-apps", "first-time-dog-owner-complete-guide", "complete-guide-to-puppy-care"],
};

export const guideRehoming: Guide = {
  slug: "how-to-rehome-a-pet-without-a-shelter",
  title: "How to Rehome a Pet Without a Shelter: A Safe, Step-by-Step Guide",
  seoTitle: "How to Rehome a Dog or Cat Without a Shelter",
  shortTitle: "Rehoming Without a Shelter",
  seoDescription: "How to rehome your dog or cat yourself, safely: when to consider it, how to write the listing, screen adopters, meet safely, and hand over records. Plus free alternatives.",
  category: "Expert Guides",
  tags: ["Adoption", "Expert Guides"],
  publishDate: "October 2026",
  lastUpdated: "October 2026",
  readTime: "10 Min Read",
  introduction: `Sometimes, despite everything, a pet can't stay. A move, an allergy, a change in health or a pet who isn't safe with a new baby can all lead there. Rehoming the pet yourself, rather than surrendering to a shelter, means your pet goes straight from your home to a new one, and you get to choose who that is.

It also puts the responsibility on you to do it safely. This guide covers how to decide, how to find and screen the right adopter, and how to hand over without risk to you or your pet.`,
  chapters: [
    {
      title: "1. First, check whether the problem can be solved",
      content:
        p("Many rehomings happen because of a problem that has a fix. Before you list your pet, it's worth ruling these out:") +
        ul([
          "<strong>Behaviour:</strong> a qualified trainer or veterinary behaviourist can often help with problems like pulling, reactivity or house-soiling.",
          "<strong>Cost:</strong> some shelters and humane societies run pet food banks or low-cost vet clinics.",
          "<strong>Housing:</strong> a landlord may agree to a pet with a pet addendum and references. Our " + a("/templates/pet-resume-template", "pet resume template") + " helps.",
          "<strong>Short-term crisis:</strong> a friend, relative or foster may be able to take your pet for a few weeks while you recover or move.",
        ]),
    },
    {
      title: "2. Check your contract and the microchip",
      content:
        p("If you adopted from a rescue or bought from a breeder, read your contract. Many require you to return the pet to them rather than rehoming it yourself, and most good breeders want to know.") +
        p("Find your pet's microchip number and which database it's registered with. You'll need it to transfer ownership to the new family after the handover."),
    },
    {
      title: "3. Write an honest profile",
      content:
        p("The right home is the one that knows exactly what it's taking on. Include:") +
        ul([
          "Clear, recent photos and a short video if you can.",
          "Age, sex, size, whether neutered, vaccination status and any health conditions or medication.",
          "How they are with children, dogs, cats and strangers, and how long they can be left alone.",
          "Exercise needs and anything they find hard (fireworks, car trips, vet visits).",
          "The reason you're rehoming. People trust a profile that's honest about it.",
        ]) +
        p(`Our ${a("/templates/pet-profile-to-adopt-template", "pet adoption profile template")} lays this out for you.`),
    },
    {
      title: "4. Where to list your pet",
      content:
        p("Avoid \"free to good home\" ads on general marketplaces: they attract people who want an animal for the wrong reasons. Better options:") +
        ul([
          "<strong>People you know:</strong> friends, family, colleagues and your vet's practice. A known home is usually the safest.",
          "<strong>Breed rescues and clubs:</strong> many help owners rehome a dog of their breed, or will take it into their own foster network.",
          "<strong>Self-rehoming services:</strong> in the US, Rehome by Adopt-a-Pet is a free service where you create a profile, it's shown to local adopters on AdoptaPet.com, and they apply through a built-in application.",
          "<strong>Shelter rehoming programmes:</strong> many shelters run community rehoming pages or will advise you even if they can't take your pet.",
        ]),
    },
    {
      title: "5. Screen adopters properly",
      content:
        p("Ask the same questions a good rescue would. A genuine adopter won't mind.") +
        ul([
          "Who lives in the home, including children and other pets?",
          "Do they own or rent, and does the landlord allow pets? Ask to see it in writing.",
          "Who will care for the pet during the day and when they travel?",
          "Have they had this kind of pet before, and what happened to them?",
          "Can they give you their vet's details as a reference?",
        ]) +
        p("Charging a modest rehoming fee, or asking for a donation to a rescue, helps put off people looking for free animals. Trust your instinct: you can say no to anyone."),
    },
    {
      title: "6. Meet safely and hand over",
      content:
        ol([
          "Speak by phone or video first.",
          "Meet in a public place for the first meeting, and bring someone with you.",
          "If it goes well, let them visit your home or arrange a home visit to theirs before the handover.",
          "On the day, hand over food for a week, familiar bedding, toys, the lead and a copy of the vet records.",
          "Sign a simple adoption agreement. Our " + a("/templates/pet-adoption-contract-template", "adoption contract template") + " covers return terms, so the pet comes back to you rather than going on to someone else.",
          "Transfer the microchip registration to the new owner the same week.",
        ]) +
        p("Ask for an update after a few days and again after a few weeks. Most new owners are glad to send one."),
    },
  ],
  appCta: {
    title: "List your pet and talk to adopters in one place",
    body: "Owners and shelters can list pets for adoption in Hushku. Adopters send a request from the listing, and you decide who to talk to, with the whole conversation kept in the app.",
    link: { href: "/adoption", label: "See adoption" },
  },
  conclusion: "Rehoming a pet yourself can be the kindest option, as long as you do it carefully: rule out fixable problems, write an honest profile, screen adopters, meet safely and put the handover in writing.",
  relatedSlugs: ["3-3-3-rule-for-rescue-dogs", "how-to-share-pet-care-at-home", "best-pet-adoption-rescue-apps"],
};

export const guideLostPet: Guide = {
  slug: "lost-pet-first-24-hours",
  title: "Lost Dog or Cat? What to Do in the First 24 Hours",
  seoTitle: "Lost Dog or Cat? What to Do in the First 24 Hours",
  shortTitle: "Lost Pet: First 24 Hours",
  seoDescription: "Your pet is missing. A clear, hour-by-hour plan for the first 24 hours: where to search, who to call, how to use the microchip, flyers and social media, and what to do next.",
  category: "Expert Guides",
  tags: ["Lost Pets", "Safety", "Expert Guides"],
  publishDate: "October 2026",
  lastUpdated: "October 2026",
  readTime: "8 Min Read",
  introduction: `If your pet has just gone missing, start now and read the rest later. <strong>Search the immediate area on foot, call your pet's name calmly, and bring a treat or a favourite squeaky toy.</strong> Leave someone at home in case they come back on their own.

The first hours matter most: a lost pet is usually still close by. This guide sets out what to do, in order, through the first day.`,
  chapters: [
    {
      title: "The first hour: search close to home",
      content:
        ul([
          "<strong>Search on foot</strong>, starting where your pet was last seen. The American Kennel Club suggests starting within about a two-mile radius for dogs.",
          "<strong>Cats usually hide nearby</strong>, often within a few houses. Check sheds, garages, under decks and cars, and in bushes, ideally with a torch, and ask neighbours to check their outbuildings.",
          "<strong>Call calmly</strong> and use words your pet loves (\"dinner\", \"walk\"). Shake a treat tin. Don't chase a frightened dog; sit down, turn side-on and let them come to you.",
          "<strong>Leave someone at home</strong> with the door watched, and put out water and something that smells of home, such as their bed.",
        ]),
    },
    {
      title: "Hours 1 to 3: tell everyone who might see them",
      content:
        ol([
          "<strong>Call your microchip database</strong> to report your pet missing and check your phone number and address are up to date.",
          "<strong>Call local shelters, animal control and nearby vets</strong>, and give them a photo and description: breed, colour, markings, size, age, collar.",
          "<strong>Post on local lost and found pet groups</strong> and neighbourhood apps, with a clear photo and your phone number on the image.",
          "<strong>Knock on doors</strong> and ask people to check gardens and outbuildings. Delivery drivers, postal workers and dog walkers cover a lot of ground.",
        ]),
    },
    {
      title: "Hours 3 to 12: flyers and a wider search",
      content:
        p(`Print large, simple flyers: one big photo, \"LOST DOG\" or \"LOST CAT\" in letters readable from a car, the area, and your phone number. Our free ${a("/templates/lost-pet-flyer-template", "lost pet flyer template")} and ${a("/templates/lost-pet-poster-template", "poster template")} are ready to fill in and print.`) +
        ul([
          "Put them up at junctions, vets, pet shops, groomers, parks and community boards.",
          "Search again at dusk and dawn, when it's quiet and frightened pets are more likely to move.",
          "Widen your search area, and check busy roads with care.",
        ]),
    },
    {
      title: "Hours 12 to 24: keep going",
      content:
        ul([
          "<strong>Visit shelters in person</strong> rather than relying on phone calls, and keep visiting regularly. Staff and volunteers change, and descriptions get missed.",
          "<strong>Repost on social media</strong> every day so your post stays visible.",
          "<strong>Leave a scent trail:</strong> keep familiar bedding or worn clothing outside your home.",
          "<strong>Be careful with reward scams:</strong> never send money before you've seen your pet in person, and meet anyone claiming to have them in a public place.",
        ]),
    },
    {
      title: "Before it happens again",
      content:
        ul([
          "Microchip your pet and keep the registration up to date whenever you move or change number.",
          "Use a collar ID tag with your phone number.",
          "Keep clear, recent photos from several angles, including any unusual markings.",
          "Practise recall with your dog and check gates, fences and windows.",
          "A GPS collar can show roughly where your dog is if they escape.",
        ]),
    },
  ],
  appCta: {
    title: "Keep your pet's photos and records ready",
    body: "Hushku keeps an up-to-date profile, photos and health records for each pet, shared with your household. Lost and found alerts for nearby owners are planned but aren't in the app yet; we'll tell you when they are.",
    link: { href: "/templates/lost-pet-flyer-template", label: "Get the free lost pet flyer" },
  },
  conclusion: "Most lost pets are found close to home. Search early, tell the microchip database, shelters and vets, put up clear flyers, and keep checking in person. Don't give up after the first day.",
  relatedSlugs: ["best-lost-pet-recovery-apps", "how-to-share-pet-care-at-home", "complete-guide-to-pet-health"],
};

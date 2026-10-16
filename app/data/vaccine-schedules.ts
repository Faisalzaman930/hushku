import type { ArticleExtras } from "./article-extras";
import type { Source } from "./tools";
import { SRC as S } from "./article-extras-data";

/** Vaccine schedule pages, from the 2022 AAHA canine guidelines (with the 2024 leptospirosis update) and the 2020 AAHA/AAFP feline guidelines. */
export type VaccinePage = {
  slug: string;
  shortTitle: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  answer: string;
  sections: { id: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  extras: ArticleExtras;
};

const aahaDogTable: Source = { label: "AAHA: Recommendations for core and noncore canine vaccines (2022)", url: "https://aaha.org/aaha-guidelines/2022-aaha-canine-vaccination-guidelines/recommendations-for-core-and-noncore-canine-vaccines/" };
const aafpCore = S.aafpVax;

const RABIES_DOG = "Rabies is required by law in most US states and many countries. The first dose is usually given at 12 to 16 weeks, followed by a booster a year later, then every 1 or 3 years depending on the vaccine and local law.";

export const VACCINE_PAGES: VaccinePage[] = [
  {
    slug: "puppy-vaccine-schedule",
    shortTitle: "Puppy Vaccine Schedule",
    title: "Puppy Vaccine Schedule: Which Shots, When",
    seoTitle: "Puppy Shot Schedule: Vaccines by Age (Chart)",
    seoDescription: "Puppy vaccines week by week: distemper-parvo combo shots from 6 weeks, leptospirosis, rabies, and optional kennel cough, flu and Lyme vaccines. Based on AAHA guidelines.",
    answer: "Puppies need at least three doses of a combination vaccine (distemper, adenovirus, parvovirus, often with parainfluenza) given 2 to 4 weeks apart between 6 and 16 weeks of age, two doses of leptospirosis vaccine from 12 weeks, and rabies as required by law, usually at 12 to 16 weeks. A booster follows within a year, then distemper-parvo every 3 years and leptospirosis every year.",
    sections: [
      {
        id: "chart", title: "Puppy vaccine chart",
        body: `| Age | Vaccines |
| --- | --- |
| 6–8 weeks | Combination vaccine (DAPP): distemper, adenovirus, parvovirus, ± parainfluenza |
| 10–12 weeks | DAPP. Leptospirosis dose 1 from 12 weeks |
| 14–16 weeks | DAPP (keep going every 2–4 weeks until 16 weeks or older). Leptospirosis dose 2, 2–4 weeks after dose 1. Rabies, as required by law |
| 6–12 months | DAPP booster and leptospirosis booster, within a year of the last puppy dose |
| Adult | DAPP every 3 years · leptospirosis every year · rabies every 1 or 3 years |

Lifestyle vaccines (if your vet recommends them) are covered below. Exact timing depends on your puppy's age at the first visit and the products your vet uses, so always follow your vet's schedule.`,
      },
      {
        id: "core", title: "Core vaccines every puppy needs",
        body: `**Distemper, adenovirus and parvovirus (DAPP or DHPP).** Given as one combination injection. The American Animal Hospital Association (AAHA) recommends at least three doses between 6 and 16 weeks, 2 to 4 weeks apart. Antibodies from the mother can block vaccines in young puppies, which is why several doses are needed and the last one should be given at 16 weeks or older.

**Leptospirosis.** A bacterial infection spread in the urine of wildlife and other animals, often through puddles and standing water, that can damage the kidneys and liver and also infect people. AAHA updated its guidelines in 2024 to recommend leptospirosis as a core vaccine for all dogs. Puppies get two doses 2 to 4 weeks apart starting at 12 weeks, then a yearly booster.

**Rabies.** ${RABIES_DOG}`,
      },
      {
        id: "lifestyle", title: "Lifestyle (non-core) vaccines",
        body: `AAHA describes these as just as important for dogs at risk:

- **Bordetella (kennel cough):** for dogs that go to kennels, daycare, grooming, training classes or dog parks. Intranasal or oral vaccines need one dose; injectable ones need two doses 2–4 weeks apart. Boosted yearly.
- **Canine influenza:** for social dogs where flu is circulating. Two doses 2–4 weeks apart, then yearly.
- **Lyme disease:** for dogs in areas with blacklegged ticks. Two doses 2–4 weeks apart, then yearly, alongside tick prevention.`,
      },
      {
        id: "protected", title: "When is my puppy protected?",
        body: `Puppies aren't fully protected until about 1–2 weeks after their final puppy dose. Until then, avoid places where unknown dogs gather and their waste collects, such as dog parks, pet shop floors and busy walking routes.

That doesn't mean keeping your puppy indoors. The American Veterinary Society of Animal Behavior recommends starting puppy classes and safe socialisation as early as 7–8 weeks, at least 7 days after the first vaccines, because the socialisation window closes at around 14–16 weeks. Carry your puppy to new places, meet vaccinated adult dogs in clean homes, and join a well-run puppy class.`,
      },
    ],
    faqs: [
      { q: "How many shots does a puppy need?", a: "Usually three or four combination (DAPP) doses, two leptospirosis doses and one rabies dose in the first 16 weeks, plus any lifestyle vaccines, then boosters within a year." },
      { q: "Can my puppy go outside before vaccines are finished?", a: "Yes, with care. Your own garden is generally fine if unvaccinated dogs don't visit. Carry your puppy in public, avoid dog parks, and go to puppy classes that require vaccines." },
      { q: "What if my puppy missed a vaccine?", a: "Talk to your vet. Usually the series continues with a dose as soon as possible; very long gaps may need extra doses." },
      { q: "Are puppy vaccines safe?", a: "Serious reactions are rare. Mild tiredness or a sore spot for a day is common. Call your vet for facial swelling, hives, vomiting or collapse." },
    ],
    related: ["dog-vaccine-schedule", "what-is-parvo-in-dogs", "complete-guide-to-puppy-care", "puppy-socialization-masterclass"],
    extras: { topic: "puppies", keyFacts: ["At least 3 DAPP doses, 2–4 weeks apart, between 6 and 16 weeks.", "Leptospirosis is core for all dogs (AAHA 2024): 2 doses from 12 weeks.", "Rabies usually at 12–16 weeks, as required by law.", "Booster within 1 year, then DAPP every 3 years and lepto yearly."], sources: [S.aahaVaxDog, aahaDogTable, S.avsabSocial, S.merckParvo], tools: ["vaccine-tracker", "puppy-weight"], cta: { title: "Never miss a booster", body: "Hushku reminds you before each vaccine is due and keeps the record ready for your vet, groomer and sitter.", link: { href: "/health/reminders", label: "See reminders" } } },
  },
  {
    slug: "dog-vaccine-schedule",
    shortTitle: "Adult Dog Vaccine Schedule",
    title: "Dog Vaccine Schedule for Adults: Boosters and Catch-Up Shots",
    seoTitle: "Dog Vaccine Schedule: Adult Boosters and Catch-Up Shots",
    seoDescription: "How often adult dogs need vaccines: distemper-parvo every 3 years, leptospirosis yearly, rabies by law, plus catch-up shots for rescue dogs with unknown history.",
    answer: "After the puppy series and first-year booster, adult dogs need the distemper-parvo combination (DAPP) every 3 years, leptospirosis every year and rabies every 1 or 3 years depending on the vaccine and local law. Dogs with an unknown history, such as many rescues, usually get two doses of DAPP and leptospirosis 2–4 weeks apart.",
    sections: [
      {
        id: "chart", title: "Adult dog vaccine chart",
        body: `| Vaccine | How often (after the first-year booster) |
| --- | --- |
| DAPP (distemper, adenovirus, parvovirus, ± parainfluenza) | Every 3 years |
| Leptospirosis | Every year |
| Rabies | Every 1 or 3 years, by vaccine and local law |
| Bordetella (kennel cough) | Every year, if at risk |
| Canine influenza | Every year, if at risk |
| Lyme disease | Every year, if at risk |`,
      },
      {
        id: "catch-up", title: "Catch-up vaccines for dogs with unknown history",
        body: `AAHA advises that when a dog's vaccines are overdue or unknown, vaccinating is usually the safer choice. For dogs over 16 weeks old:

- **DAPP:** two doses 2–4 weeks apart, a booster within a year, then every 3 years.
- **Leptospirosis:** two doses 2–4 weeks apart, then yearly.
- **Rabies:** one dose (as required by law), a booster a year later, then every 1 or 3 years.

Bring any paperwork from the shelter or previous owner: it may save repeat doses.`,
      },
      {
        id: "lifestyle", title: "Does my dog need lifestyle vaccines?",
        body: `Your vet will ask about your dog's life: kennels, daycare and grooming (Bordetella and influenza), hiking, woodland and areas with ticks (Lyme), and where you live and travel. These vaccines don't replace good prevention, such as year-round tick control.`,
      },
      {
        id: "seniors", title: "Do older dogs still need vaccines?",
        body: `Yes. Older dogs' immune systems can be less effective, and rabies remains a legal requirement. Some vets offer antibody (titer) testing for distemper and parvovirus to help decide whether a booster is needed; titers can't replace rabies vaccination where it's required by law. Use your dog's annual or six-monthly check-up to review which vaccines are still needed.`,
      },
    ],
    faqs: [
      { q: "Does my dog really need a vaccine every year?", a: "Not all of them. DAPP is usually every 3 years, but leptospirosis and lifestyle vaccines like Bordetella and Lyme are yearly." },
      { q: "Can indoor dogs skip vaccines?", a: "No. Core vaccines protect against diseases that can be carried in on shoes and other animals, and rabies is a legal requirement in many places." },
      { q: "What are the side effects of dog vaccines?", a: "Mild tiredness or soreness for a day is common. Call your vet for facial swelling, hives, vomiting or collapse." },
    ],
    related: ["puppy-vaccine-schedule", "what-is-kennel-cough", "ticks-and-lyme-disease-in-dogs", "adopting-rescue-dog-complete-guide"],
    extras: { topic: "health", keyFacts: ["DAPP every 3 years after the first-year booster.", "Leptospirosis every year: AAHA made it core for all dogs in 2024.", "Rabies every 1 or 3 years, by vaccine and local law.", "Unknown history: two DAPP and two lepto doses, 2–4 weeks apart."], sources: [S.aahaVaxDog, aahaDogTable, S.avmaCirdc], tools: ["vaccine-tracker", "age-calculator"], cta: { title: "Never miss a booster", body: "Hushku reminds you before each vaccine is due and keeps the record ready for your vet, groomer and sitter.", link: { href: "/health/reminders", label: "See reminders" } } },
  },
  {
    slug: "kitten-vaccine-schedule",
    shortTitle: "Kitten Vaccine Schedule",
    title: "Kitten Vaccine Schedule: Which Shots, When",
    seoTitle: "Kitten Vaccine Schedule: Shots by Age (Chart)",
    seoDescription: "Kitten vaccines week by week: FVRCP from 6 weeks, feline leukaemia (FeLV) from 8 weeks, rabies and boosters. Based on the AAHA/AAFP feline vaccination guidelines.",
    answer: "Kittens get the FVRCP vaccine (feline panleukopenia, herpesvirus and calicivirus) from 6 weeks, every 3 to 4 weeks until 16 to 20 weeks old, plus two doses of feline leukaemia (FeLV) vaccine 3 to 4 weeks apart from 8 weeks, and rabies as required by law. Boosters follow at about 1 year old.",
    sections: [
      {
        id: "chart", title: "Kitten vaccine chart",
        body: `| Age | Vaccines |
| --- | --- |
| 6–8 weeks | FVRCP dose 1 (not before 6 weeks) |
| 9–12 weeks | FVRCP dose 2. FeLV dose 1 from 8 weeks, after a negative FeLV test |
| 12–16 weeks | FVRCP dose 3. FeLV dose 2, 3–4 weeks after dose 1. Rabies, following the label and local law |
| 16–20 weeks | Final FVRCP dose (FVRCP continues every 3–4 weeks until 16–20 weeks) |
| 6 months–1 year | FVRCP booster (at 1 year, or 6 months if your vet advises). FeLV booster 12 months after the last kitten dose |
| Adult | FVRCP every 3 years · rabies by label and law · FeLV by risk |

Your vet will tailor this to your kitten's age at the first visit and the vaccines they use.`,
      },
      {
        id: "core", title: "Core vaccines for kittens",
        body: `**FVRCP** protects against feline panleukopenia (a severe, often fatal virus) and the two main causes of cat flu, herpesvirus and calicivirus. The 2020 AAHA/AAFP guidelines recommend starting no earlier than 6 weeks and repeating every 3–4 weeks until 16–20 weeks of age, because maternal antibodies can block the vaccine in young kittens.

**Feline leukaemia (FeLV)** is core for all kittens and cats under 1 year, because young cats are most vulnerable. Your kitten should test negative first. Two doses are given 3–4 weeks apart from as early as 8 weeks, with a booster 12 months later.

**Rabies** is given according to the vaccine label and local law, often at around 12–16 weeks. Where allowed, the guidelines favour 3-year rabies vaccines for adult cats.`,
      },
      {
        id: "where", title: "Why vets inject low on the leg or tail",
        body: `Very rarely, cats develop a tumour at an injection site. The feline guidelines recommend giving vaccines low on the legs or on the tail, so that if it ever happens it can be treated more easily. Tell your vet about any lump at an injection site that's still there after 3 months, is larger than 2 cm, or is growing a month after the injection.`,
      },
    ],
    faqs: [
      { q: "Do indoor kittens need vaccines?", a: "Yes. Panleukopenia and cat flu viruses can be carried in on shoes and clothing, and kittens may escape or move outdoors later. FeLV is recommended for all kittens because their future lifestyle isn't known." },
      { q: "How many shots does a kitten need?", a: "Usually three or four FVRCP doses, two FeLV doses and one rabies dose, plus boosters at about a year old." },
      { q: "When can my kitten go outside?", a: "Wait until about a week or two after the final kitten vaccines and neutering, and microchip first. Many cats are happiest indoors or with a secure outdoor area." },
    ],
    related: ["cat-vaccine-schedule", "complete-guide-to-kitten-care", "fiv-and-felv-in-cats", "why-is-my-cat-sneezing"],
    extras: { topic: "cats", keyFacts: ["FVRCP from 6 weeks, every 3–4 weeks until 16–20 weeks.", "FeLV is core for kittens: 2 doses 3–4 weeks apart from 8 weeks, after a negative test.", "Rabies following the vaccine label and local law.", "Boosters at about 1 year, then FVRCP every 3 years."], sources: [aafpCore, { label: "Cornell Feline Health Center: Feline leukemia virus", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-leukemia-virus" }], tools: ["vaccine-tracker", "kitten-age-calculator"], cta: { title: "Never miss a booster", body: "Hushku reminds you before each vaccine is due and keeps your kitten's records in one place.", link: { href: "/health/reminders", label: "See reminders" } } },
  },
  {
    slug: "cat-vaccine-schedule",
    shortTitle: "Adult Cat Vaccine Schedule",
    title: "Cat Vaccine Schedule for Adults: Boosters and Catch-Up Shots",
    seoTitle: "Cat Vaccine Schedule: Adult Boosters and Catch-Up Shots",
    seoDescription: "How often adult cats need vaccines: FVRCP every 3 years, rabies by label and law, FeLV by risk, and catch-up shots for adopted cats with unknown history.",
    answer: "After the kitten series and first-year boosters, adult cats need FVRCP every 3 years and rabies according to the vaccine and local law (often every 3 years). Feline leukaemia (FeLV) boosters depend on risk: yearly for cats with regular exposure, every 2–3 years for lower risk, and often not at all for low-risk indoor adults.",
    sections: [
      {
        id: "chart", title: "Adult cat vaccine chart",
        body: `| Vaccine | How often (after the first-year booster) |
| --- | --- |
| FVRCP (injectable) | Every 3 years |
| FVRCP (intranasal) | Every year |
| Rabies | By vaccine label and local law, often every 3 years |
| FeLV, regular exposure | Every year |
| FeLV, occasional exposure | Every 2–3 years, where the vaccine allows |
| FeLV, low-risk indoor adults | Often not needed; ask your vet |`,
      },
      {
        id: "catch-up", title: "Catch-up vaccines for adopted adult cats",
        body: `For cats over 16 weeks with an unknown history, the AAHA/AAFP guidelines recommend one or two doses of a modified-live FVRCP vaccine, or two doses 3–4 weeks apart for an inactivated vaccine, then a booster in a year. Test for FeLV (and usually FIV) first, then vaccinate against FeLV if your cat goes outdoors, lives with cats of unknown status or is under 1 year old. Rabies follows local law.`,
      },
      {
        id: "indoor", title: "Do indoor cats need vaccines?",
        body: `Yes, at least the core vaccines. Panleukopenia virus survives for a long time in the environment and can be carried indoors, and cat flu viruses spread easily. Rabies vaccination is a legal requirement in many places, including for indoor cats, and protects them if a bat gets inside. Your vet will decide with you whether FeLV is needed.`,
      },
    ],
    faqs: [
      { q: "How often do cats need shots?", a: "Most adult cats need FVRCP every 3 years and rabies every 1 or 3 years depending on the vaccine. FeLV depends on lifestyle." },
      { q: "Do senior cats still need vaccines?", a: "Usually, yes, though your vet may adjust the plan for cats with health problems. Senior check-ups every 6 months are a good time to review it." },
      { q: "Can vaccines make my cat ill?", a: "Mild sleepiness or a slight fever for a day is common. Call your vet for vomiting, facial swelling, difficulty breathing or a lump that persists." },
    ],
    related: ["kitten-vaccine-schedule", "fiv-and-felv-in-cats", "why-is-my-cat-sneezing", "senior-pet-care-complete-guide"],
    extras: { topic: "cats", keyFacts: ["FVRCP every 3 years (injectable) after the first-year booster.", "Rabies by vaccine label and local law, often every 3 years.", "FeLV boosters depend on exposure risk.", "Adopted cats: test for FeLV and FIV before vaccinating."], sources: [aafpCore, { label: "Cornell Feline Health Center: Feline leukemia virus", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-leukemia-virus" }], tools: ["vaccine-tracker", "age-calculator"], cta: { title: "Never miss a booster", body: "Hushku reminds you before each vaccine is due and keeps your cat's records in one place.", link: { href: "/health/reminders", label: "See reminders" } } },
  },
];

export const findVaccinePage = (slug: string) => VACCINE_PAGES.find((v) => v.slug === slug);

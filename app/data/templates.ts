export interface TemplateSection {
  title: string;
  items: string[];
}

export interface TemplateDoc {
  slug: string;
  title: string;
  seoTitle: string;
  shortTitle: string;
  seoDescription: string;
  icon: string;
  tier: 1 | 2 | 3;
  category: string;
  targetKeywords: string[];
  publishDate: string;
  lastUpdated: string;
  readTime: string;
  /** One-sentence answer shown in the hero */
  quickAnswer: string;
  intro: string;
  whenYouNeedIt: string[];
  whatToInclude: TemplateSection[];
  stateNotes: string;
  templateText: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  downloadFormats: string[];
}

export const templateDocs: TemplateDoc[] = [
  // ─── TIER 1 ────────────────────────────────────────────────────────────────

  {
    slug: "pet-custody-agreement-template",
    title: "Pet Custody Agreement Template (Free, Editable)",
    seoTitle: "Pet Custody Agreement Template — Free Download 2026",
    shortTitle: "Pet Custody Agreement",
    seoDescription: "Free pet custody agreement template for separating couples, roommates, or co-owners. Covers visitation schedules, vet decision rights, expenses, and what happens if one party can't care for the pet.",
    icon: "⚖️",
    tier: 1,
    category: "Legal & Ownership",
    targetKeywords: ["pet custody agreement template", "free pet custody agreement template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "7 Min Read",
    quickAnswer: "A pet custody agreement is a written contract between two people who share ownership of a pet, covering who the pet lives with, visitation rights, who pays vet bills, and how disputes are resolved.",
    intro: `When couples separate, roommates part ways, or co-owners disagree about a pet's living arrangements, a written pet custody agreement prevents confusion, conflict, and expensive legal disputes. While pets are legally classified as personal property in most U.S. states, courts increasingly recognise the emotional bonds involved — and a signed agreement gives both parties clear, enforceable terms without going to court.

This free template covers every clause a complete pet custody agreement should include. It's written in plain language that non-lawyers can actually read and understand. Download it, fill in the highlighted fields, and both parties sign. For complex disputes involving significant assets or prior conflict, consult a family law attorney who handles pet custody — it's an increasingly specialised area.`,
    whenYouNeedIt: [
      "Separating couples who jointly own a pet",
      "Roommates who adopted a pet together and are moving apart",
      "Two households sharing care of a pet long-term (e.g., family members)",
      "Anyone who wants a written record of agreed-upon pet arrangements before a dispute arises",
    ],
    whatToInclude: [
      {
        title: "Pet identification",
        items: ["Name, species, breed, colour, date of birth", "Microchip number and registration details", "Current licence tag number", "Description of any distinguishing markings"],
      },
      {
        title: "Primary residence",
        items: ["Which party the pet lives with as their primary home", "Address of the primary residence", "What triggers a change in primary residence (e.g., relocation)"],
      },
      {
        title: "Visitation / parenting time schedule",
        items: ["Regular schedule (e.g., every other weekend, alternating weeks)", "Holiday schedule (Christmas, Thanksgiving, etc.)", "Notice required to request additional time", "Pickup and drop-off logistics"],
      },
      {
        title: "Veterinary care",
        items: ["Who is the primary decision-maker for routine care", "How emergency decisions are made when both parties must agree", "Which vet the pet sees (and who must be notified of changes)", "Who holds the medical records"],
      },
      {
        title: "Financial responsibilities",
        items: ["How routine vet costs are split", "How emergency vet costs are split", "Who pays for food, grooming, boarding", "What happens if one party cannot pay their share"],
      },
      {
        title: "Dispute resolution",
        items: ["Process for resolving disagreements (mediation before litigation)", "Governing state law", "What happens if a party relocates out of state"],
      },
    ],
    stateNotes: `**California:** Courts may award sole or joint custody based on the pet's best interest (AB 2274, effective 2019). A signed agreement is strong evidence of both parties' original intentions.\n\n**New York:** Pets remain personal property legally, but courts have discretion. Written agreements are enforceable as contracts.\n\n**All states:** This template is a civil contract, not a court order. For court-ordered custody (e.g., as part of a divorce decree), a family law attorney must file the agreement with the court.`,
    templateText: `PET CUSTODY AGREEMENT

This Pet Custody Agreement ("Agreement") is entered into as of [DATE] by and between:

Party A: [FULL LEGAL NAME], residing at [ADDRESS] ("Party A")
Party B: [FULL LEGAL NAME], residing at [ADDRESS] ("Party B")

collectively referred to as the "Parties."

1. PET IDENTIFICATION
The Parties are the co-owners of the following pet:
  Name: [PET NAME]
  Species / Breed: [SPECIES / BREED]
  Date of Birth (approx.): [DOB]
  Colour / Markings: [DESCRIPTION]
  Microchip Number: [MICROCHIP NUMBER]
  Licence Tag Number: [TAG NUMBER]

2. PRIMARY RESIDENCE
[PET NAME] shall reside primarily with [PARTY A / PARTY B] at the address listed above.
The non-primary party shall have the access and visitation rights described in Section 3.

3. VISITATION SCHEDULE
Regular Schedule: [PET NAME] shall spend time with [PARTY B / PARTY A] as follows:
  [e.g., Every other weekend, Friday 6pm to Sunday 6pm]
  [e.g., Every Wednesday overnight]

Holiday Schedule:
  [e.g., Christmas Eve with Party A; Christmas Day with Party B, alternating annually]
  [e.g., Thanksgiving with Party B in even years, Party A in odd years]

Pick-up and Drop-off: The non-primary party shall [pick up / receive delivery of] [PET NAME] at [LOCATION]. Travel costs are the responsibility of [SPECIFY].

Notice: Either party wishing to modify the schedule must provide [NUMBER] days' written notice.

4. VETERINARY CARE
Primary Veterinarian: [VET CLINIC NAME, ADDRESS, PHONE]

Routine Care: Decisions about routine veterinary care (vaccinations, check-ups, non-emergency procedures) shall be made by [PARTY A / PARTY B / jointly].

Emergency Care: In a medical emergency, the party currently in possession of [PET NAME] is authorised to seek emergency veterinary care immediately and shall notify the other party as soon as reasonably possible.

Major Procedures (estimated cost over $[AMOUNT]): Both Parties must agree in writing before proceeding, except in life-threatening emergencies.

Medical Records: Shall be held by [PARTY A / PARTY B] and made available to both parties upon request within [NUMBER] days.

5. FINANCIAL RESPONSIBILITIES
Routine veterinary costs: [SPLIT %] Party A / [SPLIT %] Party B
Emergency veterinary costs: [SPLIT %] Party A / [SPLIT %] Party B
Food and supplies: [SPECIFY ARRANGEMENT]
Grooming: [SPECIFY ARRANGEMENT]
Boarding (when required): [SPECIFY ARRANGEMENT]

Payment method: Each party shall pay their share directly to the provider / reimburse the other party within [NUMBER] days of receiving an invoice.

6. RELOCATION
If the primary party plans to relocate more than [DISTANCE] miles from their current address, they shall provide [NUMBER] days' written notice to the other party. The Parties agree to renegotiate the visitation schedule in good faith within [NUMBER] days of such notice.

7. DEATH OR INCAPACITY
If [PET NAME] passes away, both Parties shall be notified promptly. Decisions regarding remains, memorial services, and costs shall be [specify arrangement].

If either party is unable to care for [PET NAME] temporarily, the other party shall have first right of temporary care before a third party is engaged.

If either party permanently relinquishes care, full ownership transfers to the remaining party.

8. DISPUTE RESOLUTION
The Parties agree to attempt mediation before initiating legal proceedings. If mediation fails, disputes shall be resolved under the laws of the State of [STATE].

9. AMENDMENTS
This Agreement may be amended only by a written document signed by both Parties.

10. ENTIRE AGREEMENT
This Agreement constitutes the entire understanding between the Parties with respect to [PET NAME]'s custody and care and supersedes any prior verbal agreements.

IN WITNESS WHEREOF, the Parties have signed this Agreement as of the date first written above.

Party A Signature: _________________________ Date: __________
Print Name: _________________________________

Party B Signature: _________________________ Date: __________
Print Name: _________________________________

Witness (optional): _________________________ Date: __________`,
    faqs: [
      { q: "Is a pet custody agreement legally binding?", a: "Yes — as a civil contract between two parties, it is legally enforceable. Courts treat it like any other property agreement. For it to be held up, both parties must have signed voluntarily, the terms must be clear, and it must not violate state law. Having it notarised strengthens its enforceability." },
      { q: "What if my ex refuses to follow the agreement?", a: "You can take the matter to small claims court (for financial disputes under your state's limit) or file a civil lawsuit for breach of contract. In states like California where courts consider the pet's best interest, you may also request a modified custody order through family court." },
      { q: "Do I need a lawyer to write a pet custody agreement?", a: "Not for a straightforward shared-care arrangement between two cooperative parties. This template covers all standard clauses. If your situation involves significant assets, prior restraining orders, or contested ownership, consult a family law attorney." },
      { q: "Can this template be used for cats, rabbits, birds, or other pets?", a: "Yes. The template works for any domesticated pet. Simply fill in the correct species and breed information in Section 1. Note that some states have specific regulations for certain exotic animals — verify ownership legality separately." },
    ],
    relatedSlugs: ["pet-medical-history-template", "pet-adoption-contract-template", "pet-trust-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)"],
  },

  {
    slug: "pet-medical-history-template",
    title: "Pet Medical History Template (Free, Printable)",
    seoTitle: "Pet Medical History Template — Free Printable & Editable 2026",
    shortTitle: "Pet Medical History",
    seoDescription: "Free pet medical history template covering vaccinations, medications, allergies, surgeries, and vet visits. Printable PDF and editable Word/Google Docs version for dogs, cats, and all pets.",
    icon: "🏥",
    tier: 1,
    category: "Health Records",
    targetKeywords: ["pet medical history template", "pet health record template", "pet medical record template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "6 Min Read",
    quickAnswer: "A pet medical history template is a single document that records your pet's vaccinations, medications, allergies, surgeries, weight history, and vet contacts — giving any vet, boarder, or emergency clinic instant access to your pet's complete health picture.",
    intro: `Every vet visit, vaccination, medication, and health event in your pet's life is a data point. When those data points are scattered across multiple clinics, scribbled on appointment cards, or stored only in your memory, gaps emerge — and gaps in medical history can lead to duplicate treatments, missed drug interactions, or misdiagnosis in emergencies.

A pet medical history document consolidates everything in one place. It travels with your pet to new vets, boarding facilities, pet sitters, and emergency clinics. It's the single most useful document a pet owner can maintain — and this free template makes it straightforward to keep updated.`,
    whenYouNeedIt: [
      "Moving to a new city and registering with a new vet",
      "Boarding your pet or using a pet sitter",
      "Visiting an emergency vet clinic that doesn't have your records",
      "Adopting a pet with an unknown medical history",
      "Managing a pet with a chronic condition, allergies, or multiple medications",
    ],
    whatToInclude: [
      {
        title: "Pet identification",
        items: ["Name, species, breed, sex, date of birth", "Microchip number, licence number", "Owner name and emergency contact", "Insurance policy number (if applicable)"],
      },
      {
        title: "Vaccination record",
        items: ["Vaccine name, date administered, lot number, administering vet", "Next due date for each vaccine", "Rabies certificate number and expiry"],
      },
      {
        title: "Medications & supplements",
        items: ["Current medications: name, dose, frequency, prescribing vet", "Past medications with dates", "Supplements and dosages"],
      },
      {
        title: "Allergies & adverse reactions",
        items: ["Known drug allergies", "Food allergies or intolerances", "Environmental allergies", "Reaction to anaesthesia or specific procedures"],
      },
      {
        title: "Medical history",
        items: ["Surgeries with dates and outcomes", "Major illnesses or diagnoses", "Hospitalisations", "Weight history (useful for dosing and condition tracking)"],
      },
      {
        title: "Vet contacts",
        items: ["Primary vet name, clinic, phone, address", "Specialist contacts (cardiologist, dermatologist, etc.)", "Emergency clinic name and address"],
      },
    ],
    stateNotes: `**Rabies certificates:** All states require a current rabies vaccination certificate. Keep the original and include a copy in this document. Many boarding facilities and groomers require it on file.\n\n**Heartworm prevention:** Year-round prevention is recommended in all U.S. states by the American Heartworm Society. Document monthly preventative dosing here.\n\n**Interstate travel:** If you cross state lines with your pet, a Certificate of Veterinary Inspection (CVI or health certificate) is often required — separate from this document, but your medical history makes obtaining it much faster.`,
    templateText: `PET MEDICAL HISTORY RECORD

━━━━━━━━━━━━━━━━━━━━━━━━
PET INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━
Name: ___________________________
Species: _____________ Breed: _____________
Sex: _______ Neutered/Spayed: Yes / No
Date of Birth: ___________________________
Colour / Markings: ___________________________
Microchip Number: ___________________________
Licence Number: ___________________________

Owner Name: ___________________________
Phone: ___________________________
Emergency Contact: ___________________________
Pet Insurance Provider & Policy #: ___________________________

━━━━━━━━━━━━━━━━━━━━━━━━
VACCINATION RECORD
━━━━━━━━━━━━━━━━━━━━━━━━
Vaccine | Date Given | Due Date | Vet/Clinic | Lot #
---------|------------|----------|------------|------
Rabies   |            |          |            |
Distemper (DHPP / FVRCP) | | | |
Bordetella (Kennel Cough) | | | |
Leptospirosis | | | |
Lyme      |            |          |            |
Influenza |            |          |            |
Other: ___ |           |          |            |
Other: ___ |           |          |            |

Rabies Certificate Number: _____________________ Expiry: ____________

━━━━━━━━━━━━━━━━━━━━━━━━
CURRENT MEDICATIONS & SUPPLEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━
Medication / Supplement | Dose | Frequency | Start Date | Prescribing Vet
------------------------|------|-----------|------------|----------------
                        |      |           |            |
                        |      |           |            |
                        |      |           |            |

Flea / Tick Prevention: ___________________ Monthly / Quarterly
Heartworm Prevention: ____________________ Monthly

━━━━━━━━━━━━━━━━━━━━━━━━
ALLERGIES & ADVERSE REACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━
Known drug allergies: ___________________________
Food allergies / intolerances: ___________________________
Environmental allergies: ___________________________
Reaction to anaesthesia or procedures: ___________________________
Other: ___________________________

━━━━━━━━━━━━━━━━━━━━━━━━
MEDICAL HISTORY
━━━━━━━━━━━━━━━━━━━━━━━━
Date | Condition / Procedure | Treatment / Notes | Vet/Clinic
-----|----------------------|-------------------|----------
     |                      |                   |
     |                      |                   |
     |                      |                   |
     |                      |                   |
     |                      |                   |

━━━━━━━━━━━━━━━━━━━━━━━━
WEIGHT HISTORY
━━━━━━━━━━━━━━━━━━━━━━━━
Date | Weight | Notes
-----|--------|------
     |        |
     |        |
     |        |

━━━━━━━━━━━━━━━━━━━━━━━━
VETERINARY CONTACTS
━━━━━━━━━━━━━━━━━━━━━━━━
Primary Vet: _______________________________
Clinic: _______________________________
Phone: _______________________________
Address: _______________________________

Specialist (if any): _______________________________
Specialty: _______________________________
Phone: _______________________________

Emergency Clinic: _______________________________
Address: _______________________________
24hr Phone: _______________________________

━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━
_______________________________________________
_______________________________________________
_______________________________________________

Last updated: _____________ By: _____________`,
    faqs: [
      { q: "How often should I update my pet's medical history?", a: "After every vet visit, vaccination, new medication, or health event. Set a reminder to review the full document every 6 months to ensure it's current. If your pet has a chronic condition, review it at every vet appointment." },
      { q: "Should I share this with my pet sitter or boarder?", a: "Yes. Give your sitter or boarder a copy with current vaccinations, medications, allergies, and your emergency vet contact highlighted. You don't need to share your pet's full surgical history — a one-page summary with critical current information is usually sufficient." },
      { q: "Does this replace vet records?", a: "No — your vet maintains official clinical records. This template is your personal copy and summary, useful for reference, travel, emergencies, and changing vets. Always request official records from your vet when changing clinics." },
      { q: "What's the difference between a medical history and a vaccination record?", a: "A vaccination record covers only vaccines. A medical history is comprehensive — it includes vaccines, medications, allergies, diagnoses, surgeries, weight, and vet contacts. This template covers all of it." },
    ],
    relatedSlugs: ["pet-vaccination-record-template", "pet-health-record-template", "pet-sitting-contract-template-free"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)", "Printable A4"],
  },

  {
    slug: "pet-sitting-contract-template-free",
    title: "Free Pet Sitting Contract Template (Editable PDF & Word)",
    seoTitle: "Free Pet Sitting Contract Template — Editable 2026",
    shortTitle: "Pet Sitting Contract",
    seoDescription: "Free pet sitting contract template for professional pet sitters and dog walkers. Covers services, rates, cancellation policy, emergency authorisation, liability, and payment terms. Editable PDF and Word.",
    icon: "🐾",
    tier: 1,
    category: "Pet Sitting & Care",
    targetKeywords: ["pet sitter contract template free", "pet sitting contract template free", "pet sitting contract template", "free pet sitting contract template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "8 Min Read",
    quickAnswer: "A pet sitting contract is a written agreement between a pet owner and a pet sitter specifying the services to be provided, rates, cancellation policy, emergency authorisation, and liability terms. It protects both parties and professionalises the arrangement.",
    intro: `Pet sitting is a business, even when it's done by a neighbour or a friend-of-a-friend. A written contract protects the pet sitter from liability for pre-existing conditions and unclear instructions, and protects the owner by confirming exactly what services were agreed upon and what happens in an emergency.

Whether you're a professional pet sitter growing your business or a pet owner hiring someone for the first time, this free contract template establishes clear, professional terms that prevent the most common disputes: unclear scope of service, liability for injuries, payment disagreements, and emergency decision-making authority.`,
    whenYouNeedIt: [
      "Hiring a pet sitter for in-home pet sitting",
      "Hiring a dog walker for regular or one-off walks",
      "Running a pet sitting business and formalising client agreements",
      "Using a neighbour or acquaintance (a written agreement prevents misunderstandings)",
    ],
    whatToInclude: [
      {
        title: "Parties and dates",
        items: ["Owner full name, address, phone, email", "Pet sitter full name, address, phone, email", "Service start and end dates"],
      },
      {
        title: "Services",
        items: ["Specific services agreed (in-home sitting, walks, feeding, medication administration)", "Visit frequency and duration", "Overnight arrangements (if applicable)"],
      },
      {
        title: "Rates and payment",
        items: ["Rate per visit / per day / per week", "Payment due date and method", "Late payment terms", "Holiday surcharge (if applicable)"],
      },
      {
        title: "Cancellation policy",
        items: ["Notice period required for cancellation", "Refund or credit policy", "Last-minute cancellation fee"],
      },
      {
        title: "Emergency authorisation",
        items: ["Authority to seek emergency vet care", "Emergency vet contact details", "Spending limit authorised without owner approval"],
      },
      {
        title: "Liability",
        items: ["Pet sitter liability for injury or illness", "Owner acknowledgement of pet's health status", "Liability for damage to property"],
      },
    ],
    stateNotes: `**Business licensing:** Some states and municipalities require pet sitters to hold a business licence. Check your local requirements before operating professionally.\n\n**Insurance:** Professional pet sitters should carry pet sitter liability insurance (providers include Pet Sitters International and NAPPS). This contract should reference your insurance policy number if you carry it.\n\n**Medication administration:** Some states require that administering prescription medication (including insulin injections) be done only by a licensed vet tech or under vet supervision. Verify your state's requirements if medication administration is part of the service.`,
    templateText: `PET SITTING SERVICE AGREEMENT

This Pet Sitting Service Agreement ("Agreement") is entered into as of [DATE] between:

Pet Owner: [OWNER FULL NAME]
Address: [ADDRESS]
Phone: [PHONE] | Email: [EMAIL]

Pet Sitter: [SITTER FULL NAME]
Business Name (if applicable): [BUSINESS NAME]
Address: [ADDRESS]
Phone: [PHONE] | Email: [EMAIL]

1. PET INFORMATION
Pet Name: _____________ Species/Breed: _____________
Age: _____ Sex: _____ Neutered/Spayed: Yes / No
Microchip #: _____________ Vet Clinic: _____________
Vet Phone: _____________ Last Vet Visit: _____________
Known medical conditions: _________________________________
Current medications: _________________________________
Dietary restrictions / allergies: _________________________________
Behavioural notes (aggression, anxiety, escape risk): _________________________________

2. SERVICES
Service Dates: From [START DATE] to [END DATE]
Services to be provided:
  ☐ In-home pet sitting (owner's home)
  ☐ Dog walking: [NUMBER] walks per day, [DURATION] minutes each
  ☐ Feeding: [NUMBER] times per day — food and amount: [DETAILS]
  ☐ Medication administration: [DETAILS]
  ☐ Overnight stay: ☐ Yes ☐ No
  ☐ Other: _________________________________

Key / access arrangements: _________________________________

3. RATES AND PAYMENT
Rate: $[AMOUNT] per [day / visit / week]
Estimated total: $[TOTAL]
Holiday surcharge: $[AMOUNT] per day (applicable dates: [DATES])
Payment due: [DATE / upon return / weekly]
Payment method: ☐ Cash ☐ Venmo ☐ PayPal ☐ Bank transfer ☐ Other: _____
Late payment fee: $[AMOUNT] after [NUMBER] days overdue

4. CANCELLATION POLICY
Owner cancellations: [NUMBER] days' notice required for full refund.
  Cancellations with less than [NUMBER] days' notice: [REFUND / CREDIT POLICY]
Sitter cancellations: [NUMBER] days' notice will be provided. Owner will receive a full refund.

5. EMERGENCY AUTHORISATION
Owner authorises the Pet Sitter to seek emergency veterinary care from the vet listed above or, if unavailable, from the nearest emergency clinic, if the Pet Sitter reasonably believes the pet requires immediate treatment.

Emergency spending limit (without owner approval): $[AMOUNT]
Owner acknowledges responsibility for all approved emergency veterinary costs.

Owner emergency contact (while away):
Name: ______________________ Phone: ______________________
Alternate contact: ______________________ Phone: ______________________

6. OWNER REPRESENTATIONS
Owner represents that:
(a) The pet is in good health and has not exhibited symptoms of illness in the past [NUMBER] days.
(b) The pet's vaccinations are current (records attached: ☐ Yes ☐ No).
(c) The pet has not bitten, scratched, or shown aggression toward a person in the past [NUMBER] months, except as noted in Section 2.
(d) Owner has disclosed all known behavioural issues that could pose a risk.

7. LIABILITY
The Pet Sitter agrees to provide care with reasonable diligence and good judgement. The Pet Sitter shall not be held liable for illness, injury, or death resulting from:
  - A pre-existing medical condition not disclosed by the Owner
  - An accident or injury that could not reasonably have been prevented
  - Escape by a pet with a known or unknown escape history not disclosed to the Sitter

Owner agrees to indemnify the Pet Sitter against claims arising from bites, scratches, or injuries caused by the pet to third parties while in the Sitter's care, where such behaviour was not disclosed in advance.

8. ENTIRE AGREEMENT
This Agreement constitutes the entire understanding between the Parties and supersedes any prior verbal arrangements.

Owner Signature: _______________________ Date: ___________
Print Name: _______________________

Pet Sitter Signature: _______________________ Date: ___________
Print Name: _______________________`,
    faqs: [
      { q: "Do I need a new contract for every client as a pet sitter?", a: "Yes — or at minimum a new signed service agreement form for each booking period. Some sitters use a master contract with a supplemental booking form for each new visit. Either approach is fine as long as the key terms (services, dates, rates, emergency authorisation) are documented and signed for each engagement." },
      { q: "What if the pet sitter is a friend — do I still need a contract?", a: "Yes. Informal arrangements are the most common source of disputes. Even a simple signed agreement prevents misunderstandings about payment, what's expected, and who's responsible if something goes wrong. Protect the friendship by being clear in writing." },
      { q: "Should the contract mention pet insurance?", a: "If the pet has insurance, include the policy number and insurer in Section 1 so the sitter can reference it in an emergency. If the sitter has professional liability insurance, they should include their policy details in their header." },
      { q: "What's a reasonable emergency spending limit?", a: "Most owners set this between $200 and $500 — enough to cover an emergency consultation and basic stabilising treatment without requiring the sitter to spend beyond their means. For pets with known health conditions, a higher limit may be appropriate." },
    ],
    relatedSlugs: ["pet-sitting-invoice-template", "pet-medical-history-template", "pet-addendum-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)"],
  },

  {
    slug: "pet-sitting-invoice-template",
    title: "Pet Sitting Invoice Template (Free, Professional)",
    seoTitle: "Pet Sitting Invoice Template — Free Download 2026",
    shortTitle: "Pet Sitting Invoice",
    seoDescription: "Free professional pet sitting invoice template for dog walkers and pet sitters. Itemises walks, overnight stays, holiday rates, and add-on services. Editable PDF, Word, and Google Docs.",
    icon: "🧾",
    tier: 1,
    category: "Pet Sitting & Care",
    targetKeywords: ["pet sitting invoice template", "pet sitter invoice template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet sitting invoice is a professional billing document that itemises services rendered (walks, sitting visits, overnights), rates, dates, applicable holiday surcharges, and payment terms. It gives clients a clear record and makes your business look professional.",
    intro: `Issuing invoices is one of the fastest ways to look professional as a pet sitter or dog walker — and one of the fastest ways to get paid reliably. Clients who receive itemised invoices pay faster and dispute less than clients billed verbally or by message.

This free template covers every line item a pet sitting invoice typically needs: per-visit or per-day rates, overnight charges, medication administration fees, holiday surcharges, and a clear payment terms section. Download it in the format you prefer, add your branding, and issue it to every client after every service period.`,
    whenYouNeedIt: [
      "Running a professional pet sitting or dog walking business",
      "Billing clients after a pet sitting period (especially multi-day or complex bookings)",
      "Needing a record of services for your tax filings",
      "Clients who request an itemised receipt",
    ],
    whatToInclude: [
      { title: "Header", items: ["Your business name, logo, address, phone, email", "Invoice number (sequential for accounting)", "Invoice date and payment due date"] },
      { title: "Client details", items: ["Client full name, address, phone, email", "Pet name(s) and species"] },
      { title: "Itemised services", items: ["Service description (e.g., '30-min dog walk', 'Overnight pet sitting')", "Date(s) of service", "Quantity (number of visits/days)", "Unit rate", "Line total"] },
      { title: "Additional fees", items: ["Holiday surcharge", "Medication administration fee", "Additional pet fee", "Key copy/return fee if applicable"] },
      { title: "Payment total and terms", items: ["Subtotal, any applicable tax, grand total", "Accepted payment methods", "Due date and late fee policy"] },
    ],
    stateNotes: `**Self-employment tax:** In the U.S., pet sitting income is self-employment income. Issue yourself a record of every invoice for quarterly estimated tax purposes (IRS Form 1040-ES). Keep invoices for 3 years minimum.\n\n**Sales tax:** Most states do not tax pet sitting services, but a few do. Check your state's department of revenue if you operate in CA, TX, OH, or PA.`,
    templateText: `────────────────────────────────
[YOUR BUSINESS NAME]
[ADDRESS] | [CITY, STATE, ZIP]
[PHONE] | [EMAIL] | [WEBSITE]
────────────────────────────────

                                    INVOICE

Invoice #: ________________
Date: ________________
Due Date: ________________

BILL TO:
[CLIENT FULL NAME]
[ADDRESS]
[CITY, STATE, ZIP]
[PHONE] | [EMAIL]

PET(S): [PET NAME(S)]

────────────────────────────────
SERVICE DETAILS
────────────────────────────────
Description              | Dates          | Qty | Rate   | Total
------------------------|----------------|-----|--------|--------
Dog walk (30 min)        | [DATE RANGE]   |     | $      | $
Dog walk (60 min)        | [DATE RANGE]   |     | $      | $
In-home pet sitting      | [DATE RANGE]   |     | $      | $
Overnight stay           | [DATE RANGE]   |     | $      | $
Medication administration| [DATE RANGE]   |     | $      | $
Additional pet           | [DATE RANGE]   |     | $      | $
Holiday surcharge        | [DATES]        |     | $      | $
Other: _______________   |                |     | $      | $

────────────────────────────────
Subtotal:                                              $
Tax ([   ]%):                                          $
────────────────────────────────
TOTAL DUE:                                             $
────────────────────────────────

PAYMENT TERMS
Payment is due by [DUE DATE].
Accepted methods: ☐ Cash ☐ Venmo (@________) ☐ PayPal (__________) ☐ Zelle ☐ Bank transfer
Late payment fee: $[AMOUNT] per [NUMBER] days after due date.

Please reference Invoice #[NUMBER] with your payment.

NOTES / SUMMARY OF VISIT:
_________________________________________________________
_________________________________________________________

Thank you for trusting us with [PET NAME]!`,
    faqs: [
      { q: "How often should I invoice clients?", a: "For recurring clients (weekly walks), invoice weekly or biweekly. For one-off bookings (holiday sitting), invoice at the end of the service period or, for bookings over $200, request a deposit up front with the balance due on completion." },
      { q: "Should I charge tax on pet sitting services?", a: "In most U.S. states, pet sitting and dog walking are not subject to sales tax. However, some states do tax personal services. Check your state's revenue department. You should always report pet sitting income as self-employment income on your federal taxes." },
      { q: "What's a reasonable late payment fee?", a: "Most freelance service businesses charge 1.5–3% of the outstanding amount per month (or a flat fee of $10–$25 per week). Whatever you set, it must be disclosed in your contract or on your invoice before services are rendered." },
    ],
    relatedSlugs: ["pet-sitting-contract-template-free", "pet-medical-history-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)", "Excel (.xlsx)"],
  },

  {
    slug: "pet-adoption-contract-template",
    title: "Pet Adoption Contract Template (Free, Editable)",
    seoTitle: "Pet Adoption Contract Template — Free Download 2026",
    shortTitle: "Pet Adoption Contract",
    seoDescription: "Free pet adoption contract template for rescues, shelters, and private rehomers. Covers adoption fees, spay/neuter requirements, return policy, care standards, and home visit rights.",
    icon: "🏠",
    tier: 1,
    category: "Adoption & Rehoming",
    targetKeywords: ["pet adoption contract template", "simple pet adoption contract template", "pet adoption agreement template", "pet adoption form template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "8 Min Read",
    quickAnswer: "A pet adoption contract is a legally binding agreement between an adopter and a rescue or rehomer specifying the adoption fee, care requirements, spay/neuter obligations, return policy if the adoption doesn't work out, and the rehomer's right to reclaim the animal if welfare standards aren't met.",
    intro: `Whether you're a rescue organisation processing dozens of adoptions per year, a private individual rehoming a litter, or a foster family transitioning a pet to their forever home, a written adoption contract protects the animal first and both parties second.

The sites ranking for this search query today are generic legal template services with no specialisation in animal welfare. Their templates miss critical clauses that are standard in professional rescue practice: return obligations, welfare check rights, and breed-specific restrictions. This template is written for pet people, by pet people.`,
    whenYouNeedIt: [
      "A rescue or shelter organisation processing adoptions",
      "A private individual rehoming a pet from a litter or unexpected situation",
      "A foster family transitioning their foster pet to an adopter",
      "Anyone who wants written commitment from an adopter before surrendering an animal",
    ],
    whatToInclude: [
      { title: "Pet identification", items: ["Name, species, breed, age, sex, microchip number", "Vaccination and health status at time of adoption", "Known behavioural characteristics"] },
      { title: "Adoption fee", items: ["Amount and what it covers (spay/neuter, vaccines, microchip)", "Refund policy", "Receipt acknowledgement"] },
      { title: "Adopter obligations", items: ["Minimum care standards (food, shelter, vet care)", "Spay/neuter requirement and deadline", "No-rehome clause (must return to rescue, not surrender to shelter)", "Prohibition on commercial use (no breeding, no resale)"] },
      { title: "Return policy", items: ["Adopter's obligation to return the pet to this rescue/rehomer", "Process for requesting a return", "What happens if the rescue cannot accept immediately"] },
      { title: "Rescue rights", items: ["Right to conduct home visits", "Right to reclaim if welfare standards aren't met", "Right of first refusal if adopter can no longer keep the pet"] },
    ],
    stateNotes: `**Enforceable provisions:** Return-to-rescue clauses and no-resale clauses are generally enforceable as contract terms in all states. Courts have upheld rescues' rights to reclaim animals when adopters violated care obligations.\n\n**Dangerous breed restrictions:** Some states or municipalities have breed-specific legislation (BSL) that may affect your ability to adopt out certain breeds. Verify local laws before placing pit bull type dogs, Rottweilers, or other regulated breeds.\n\n**Tax-deductible donations:** If your rescue is a 501(c)(3), adoption fees may be partially tax-deductible (the portion exceeding the fair market value of the animal). Consult a tax professional for specifics.`,
    templateText: `PET ADOPTION CONTRACT

This Pet Adoption Contract ("Agreement") is entered into as of [DATE] by and between:

Rescue / Rehomer: [ORGANISATION OR INDIVIDUAL NAME] ("Rescue")
Address: [ADDRESS] | Phone: [PHONE] | Email: [EMAIL]

Adopter: [FULL NAME] ("Adopter")
Address: [ADDRESS] | Phone: [PHONE] | Email: [EMAIL]

1. PET IDENTIFICATION
Name: _____________ Species / Breed: _____________
Date of Birth (approx.): _____________ Sex: _____________
Microchip Number: _____________ Tag/Licence #: _____________
Vaccinations current as of: _____________ (records attached: ☐ Yes ☐ No)
Spayed / Neutered: ☐ Yes ☐ No — if No, required by: [DATE]
Known health conditions: _________________________________
Known behavioural characteristics: _________________________________

2. ADOPTION FEE
Adoption fee: $[AMOUNT]
This fee covers: ☐ Microchip ☐ Vaccines ☐ Spay/Neuter ☐ Deworming ☐ Flea treatment ☐ Other: ___
This fee is ☐ refundable / ☐ non-refundable in the event of return.

Adopter acknowledges receipt of the pet described above and has paid the adoption fee in full.

3. ADOPTER OBLIGATIONS
The Adopter agrees to:
(a) Provide adequate food, clean water, shelter, exercise, and veterinary care for the pet's lifetime.
(b) Keep the pet as an indoor pet / allowed outdoors only under supervision [select as applicable].
(c) Have the pet spayed / neutered by [DATE] if not already done, and provide proof to the Rescue within [NUMBER] days.
(d) Keep the pet's microchip registration updated with current contact information.
(e) Not sell, give away, re-home, or surrender the pet to any shelter, pound, or third party without first contacting the Rescue and offering to return the pet.
(f) Not use the pet for commercial breeding, dogfighting, or any form of commercial exploitation.
(g) Notify the Rescue of any change of address within [NUMBER] days.

4. RETURN POLICY
If the Adopter is unable or unwilling to continue caring for the pet for any reason, the Adopter agrees to contact the Rescue first. The Rescue will make reasonable efforts to accept the return within [NUMBER] days.

The Adopter shall not surrender the pet to any animal control facility or shelter without first exhausting the return process with the Rescue.

5. RESCUE RIGHTS
The Rescue reserves the right to:
(a) Conduct a courtesy home visit within [NUMBER] days of adoption, by appointment.
(b) Reclaim the pet if the Adopter fails to meet the care obligations in Section 3, with [NUMBER] days' written notice and an opportunity to remedy the issue.
(c) Exercise the right of first refusal if the Adopter can no longer keep the pet.

6. HEALTH DISCLOSURE
The Rescue represents that the pet is in the best health known at the time of adoption and has disclosed all known health conditions. The Rescue does not warrant against hidden or undiscovered conditions. Adopter is encouraged to schedule a vet examination within [NUMBER] days of adoption.

7. LIABILITY
The Adopter assumes full responsibility for any injury, damage, or loss caused by the pet from the date of adoption. The Rescue shall not be liable for any costs arising from undisclosed or subsequent health or behavioural issues beyond what is stated in Section 6.

8. GOVERNING LAW
This Agreement is governed by the laws of the State of [STATE].

Rescue Representative: _______________________ Date: ___________
Print Name / Title: _______________________

Adopter Signature: _______________________ Date: ___________
Print Name: _______________________

Co-Adopter Signature (if applicable): _______________________ Date: ___________`,
    faqs: [
      { q: "What is a no-rehome clause and is it enforceable?", a: "A no-rehome clause requires the adopter to return the pet to the rescue rather than rehoming or surrendering it independently. These clauses are generally enforceable as contract terms. Courts have ruled in rescues' favour in cases where adopters violated them, particularly when the rescue sought to reclaim the animal from unsafe or neglectful situations." },
      { q: "Can a rescue legally take back an adopted pet?", a: "Yes, if the adoption contract includes a reclaim provision that the adopter signed. The rescue must typically give written notice and an opportunity to remedy the issue first, unless the animal's welfare is in immediate danger. Consult a local attorney if you need to invoke this clause." },
      { q: "Do private individuals rehoming a pet need a contract?", a: "It's strongly recommended. Even for a single litter rehoming, a signed contract creates a paper trail, confirms the adopter's commitments, and provides a return path if the placement doesn't work. It also protects you from liability if the animal causes injury after placement." },
    ],
    relatedSlugs: ["pet-adoption-certificate-template", "pet-medical-history-template", "pet-custody-agreement-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)"],
  },

  {
    slug: "pet-obituary-template",
    title: "Pet Obituary Template (Free, Heartfelt)",
    seoTitle: "Pet Obituary Template — Free Download & Examples 2026",
    shortTitle: "Pet Obituary",
    seoDescription: "Free pet obituary template with examples and writing guidance. Honour your dog, cat, or any beloved pet with a meaningful tribute. Printable, shareable, and completely free.",
    icon: "🌿",
    tier: 1,
    category: "Pet Loss & Memorial",
    targetKeywords: ["pet obituary template", "dog obituary template", "cat obituary template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "6 Min Read",
    quickAnswer: "A pet obituary is a written tribute that honours your pet's life — their personality, the joy they brought, the memories they created. It doesn't need to follow a formal structure. This template gives you a framework so that even in grief, you have a starting point.",
    intro: `Losing a pet is losing a family member. The grief is real, the void is immediate, and the instinct to honour them — to put into words what they meant — is one of the most human responses to loss.

A pet obituary doesn't need to follow the formal conventions of a human obituary. It can be as personal, as funny, as specific, and as emotional as you need it to be. What matters is that it captures something true about who they were.

This template gives you a framework and examples to draw from. Use as much or as little as serves you. There is no wrong way to write about someone you loved.`,
    whenYouNeedIt: [
      "After the loss of a pet, to process grief through writing",
      "To share a tribute on social media, a memorial page, or with family",
      "To include in a memorial service programme",
      "To submit to a local newspaper's pet loss section",
      "To preserve in a memory box or scrapbook",
    ],
    whatToInclude: [
      { title: "The opening", items: ["Their name, species, breed", "Dates (born and passed)", "One sentence that captures who they were"] },
      { title: "Their personality", items: ["Signature quirks and habits", "Favourite things (people, toys, places, foods)", "What they were afraid of, what made them brave", "How they made people feel"] },
      { title: "The story", items: ["How you found each other", "A favourite memory or two", "What they meant to the family", "How they changed your life"] },
      { title: "The goodbye", items: ["Who they leave behind", "Where they are buried or their ashes are kept", "A line about what you'll miss most", "A message to them"] },
    ],
    stateNotes: `Grief is universal and this template has no state-specific considerations. If you are struggling with the loss of a pet, the Association for Pet Loss and Bereavement (aplb.org) offers free counselling resources and online support groups.`,
    templateText: `IN LOVING MEMORY OF [PET NAME]

[PET NAME] — [BREED / SPECIES]
[BIRTH DATE (or approximate year)] – [DATE OF PASSING]

─────────────────────────────────

[PET NAME] came into our lives on [DATE / YEAR] and left a mark on our hearts that no words can fully capture.

[He / She / They] was [describe their personality in 2–3 sentences — their quirks, their spirit, what made them uniquely themselves].

Example: "Milo was a 12-year-old Golden Retriever who approached every single day as though it were the best day he'd ever had. He believed every person he met had come specifically to see him. He was wrong about very little."

─────────────────────────────────

[Write 2–3 sentences about how you found each other or how they came into your life.]

Example: "We found each other at the city shelter on a Tuesday afternoon. She had been there for six weeks and no one had chosen her yet. She chose us."

─────────────────────────────────

[Share 1–2 specific memories that capture their essence.]

Example: "He spent the last three summers convinced he could catch the neighbourhood squirrel. He couldn't. He never stopped trying. We admired that about him."

─────────────────────────────────

[Write about what they meant to the family and how they changed your life.]

Example: "Luna taught our children what it means to love something wholly and without condition. She was gentle with our youngest when words were hard and patience was needed. She knew before we did when someone was sad."

─────────────────────────────────

[PET NAME] is survived by [list family members, other pets, etc.].

[He / She / They] is buried [location] / [His / Her / Their] ashes rest [location].

We will miss [specific thing] most of all. We are better for having known [him / her / them].

Until we meet again, [PET NAME].

─────────────────────────────────
[FAMILY NAME(S)]
[DATE]`,
    faqs: [
      { q: "Can I submit a pet obituary to a newspaper?", a: "Many local newspapers accept pet obituaries, sometimes in a dedicated pets section or as a paid classified. Contact your local paper's editorial or classified department. Some online publications like The Dodo and BringFido also accept pet tributes." },
      { q: "How long should a pet obituary be?", a: "As long as it needs to be. Newspaper submissions typically run 150–300 words. A tribute for family and friends, a memorial page, or a personal record can be as long as feels right. Some of the most powerful pet obituaries are a single paragraph." },
      { q: "Is it okay to include humour in a pet obituary?", a: "Absolutely. Celebrating your pet's personality — including the funny, the ridiculous, the absurd — is one of the most honest ways to honour them. Many of the most beloved pet obituaries are funny, because they capture a real animal, not a sentimentalised idea of one." },
    ],
    relatedSlugs: ["pet-medical-history-template", "pet-custody-agreement-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)", "Printable A5"],
  },

  {
    slug: "pet-addendum-to-lease-agreement-template",
    title: "Pet Addendum to Lease Agreement Template (Free)",
    seoTitle: "Pet Addendum to Lease Agreement Template — Free 2026",
    shortTitle: "Pet Lease Addendum",
    seoDescription: "Free pet addendum to lease agreement template for landlords and tenants. Covers pet deposit, monthly pet rent, approved pets, damage liability, noise and nuisance clauses, and removal conditions.",
    icon: "🏢",
    tier: 1,
    category: "Legal & Ownership",
    targetKeywords: ["pet addendum to lease agreement template", "pet addendum template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "7 Min Read",
    quickAnswer: "A pet addendum is a legal supplement to a residential lease agreement that specifies the terms under which a tenant may keep a pet: which pets are permitted, the pet deposit amount, monthly pet rent, damage liability, and conditions under which the pet must be removed from the property.",
    intro: `Standard lease agreements are silent on pets — or prohibit them outright. A pet addendum is the middle path: it gives tenants the right to keep specific pets under defined conditions, and gives landlords documented protections against damage, liability, and nuisance.

For tenants, a signed pet addendum is the written proof that your pet is allowed — essential if there's ever a dispute with a new property manager. For landlords, it clarifies exactly which pets are permitted, documents the deposit, and establishes the conditions for removal. Without it, both parties are operating on verbal assumptions.`,
    whenYouNeedIt: [
      "A tenant wants to add a pet to an existing lease",
      "A landlord is updating their lease package to include pet terms",
      "A new tenant has a pet and wants written permission before signing",
      "A tenant is adding a second or third pet not covered by the original lease terms",
    ],
    whatToInclude: [
      { title: "Approved pets", items: ["Species, breed, and name of approved pet(s)", "Weight limit (common: under 25 lbs, under 50 lbs)", "Number of pets permitted"] },
      { title: "Financial terms", items: ["Pet security deposit amount and refund conditions", "Monthly pet rent (if any)", "Damage liability in excess of deposit"] },
      { title: "Tenant obligations", items: ["Waste disposal requirements", "Noise and nuisance standards", "Vaccination and licence requirements", "Flea treatment before vacating"] },
      { title: "Removal conditions", items: ["Conditions triggering required removal of the pet", "Notice period given before removal is enforced", "What happens if tenant refuses to comply"] },
    ],
    stateNotes: `**Service animals and ESAs:** Under the Fair Housing Act, landlords must permit service animals and emotional support animals (ESAs) regardless of a no-pets policy. They cannot charge pet deposits for service animals or ESAs. This addendum is for pets — not service animals or ESAs.\n\n**Security deposit limits:** Many states cap total security deposits (including pet deposits). CA: 2 months' rent (unfurnished), TX: no statutory cap but must be reasonable, NY: 1 month's rent maximum for most residential leases. Check your state law before setting deposit amounts.\n\n**Breed restrictions:** Landlords may prohibit specific breeds in most states, but some cities (e.g., Denver) have repealed local breed bans. Verify local law.`,
    templateText: `PET ADDENDUM TO RESIDENTIAL LEASE AGREEMENT

This Pet Addendum ("Addendum") supplements the Residential Lease Agreement dated [ORIGINAL LEASE DATE] between:

Landlord: [LANDLORD/PROPERTY MANAGEMENT NAME]
Address: [PROPERTY ADDRESS]

Tenant(s): [TENANT FULL NAME(S)]
Property: [FULL RENTAL ADDRESS, UNIT NUMBER]

Lease Term: [ORIGINAL LEASE START DATE] to [ORIGINAL LEASE END DATE]

1. APPROVED PETS
The following pet(s) are approved to reside at the property:

Pet 1: Name: ________ Species: ________ Breed: ________ Approx. Weight: ________ lbs
Pet 2: Name: ________ Species: ________ Breed: ________ Approx. Weight: ________ lbs

No additional pets are permitted without written approval from the Landlord.
Weight limit per pet: ________ lbs. Pets exceeding this limit are not approved.

2. PET SECURITY DEPOSIT
A non-refundable pet fee / refundable pet deposit of $[AMOUNT] is due upon signing this Addendum.
  ☐ This is a non-refundable pet fee.
  ☐ This is a refundable pet deposit, subject to deductions for pet-related damages as outlined in Section 4.

3. MONTHLY PET RENT
Tenant agrees to pay an additional monthly pet rent of $[AMOUNT] per pet / for all approved pets.
This amount is included in / added to the monthly rent of $[AMOUNT].

4. TENANT OBLIGATIONS
Tenant agrees to:
(a) Keep all pet waste promptly cleaned up from the property, common areas, and surrounding grounds.
(b) Ensure pets do not cause noise disturbances (excessive barking, howling) that unreasonably disturb other tenants or neighbours.
(c) Keep pets up to date on all vaccinations required by local ordinance and provide proof to Landlord upon request.
(d) Ensure pets are licensed with the city/county as required by law.
(e) Keep pets on a leash in all common areas.
(f) Treat the property for fleas prior to vacating, at Tenant's expense, regardless of whether fleas are present at move-out.

5. DAMAGE LIABILITY
Tenant is responsible for all damage caused by the pet(s) exceeding normal wear and tear. If damage costs exceed the pet deposit, Tenant agrees to pay the balance owed within [NUMBER] days of receiving an itemised statement.

6. REMOVAL OF PET
The Landlord may require the pet(s) to be permanently removed from the property if:
(a) The pet causes documented damage exceeding $[AMOUNT].
(b) The pet causes a verified noise complaint or aggression incident.
(c) Tenant fails to maintain vaccinations, licences, or leash requirements after written notice.
(d) Tenant brings an additional unapproved pet onto the property.

The Landlord will provide [NUMBER] days' written notice before requiring removal, except in the case of an emergency (e.g., pet bite incident).

7. ENTIRE AGREEMENT
This Addendum is incorporated into and made part of the original Lease Agreement. All other terms of the Lease remain in full force and effect.

Landlord Signature: _______________________ Date: ___________
Print Name: _______________________

Tenant Signature: _______________________ Date: ___________
Print Name: _______________________

Tenant Signature (if multiple tenants): _______________________ Date: ___________`,
    faqs: [
      { q: "Can my landlord charge a pet deposit on top of my security deposit?", a: "In most states, yes — but total deposits (security + pet) are often capped by state law. California caps total deposits at 2 months' rent for unfurnished units. New York caps at 1 month's rent total. Check your state's landlord-tenant statutes for your specific limit." },
      { q: "Can my landlord refuse to allow my ESA or service animal?", a: "No. Under the Fair Housing Act, landlords must accommodate service animals and ESAs regardless of no-pets policies and cannot charge pet deposits for them. This addendum is for pets — service animals and ESAs are governed by the FHA and ADA, not a lease addendum." },
      { q: "What happens if I get a pet without telling my landlord?", a: "This likely violates your lease, which can result in a formal notice to remove the pet or, ultimately, eviction proceedings. Most landlords prefer to negotiate a pet addendum than go through eviction — if you already have a pet, approaching your landlord proactively with a proposed addendum is a better outcome for everyone." },
    ],
    relatedSlugs: ["pet-custody-agreement-template", "pet-medical-history-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)"],
  },

  // ─── TIER 2 ────────────────────────────────────────────────────────────────

  {
    slug: "pet-vaccination-record-template",
    title: "Pet Vaccination Record Template (Free, Printable)",
    seoTitle: "Pet Vaccination Record Template — Free Printable 2026",
    shortTitle: "Vaccination Record",
    seoDescription: "Free pet vaccination record template for dogs and cats. Track all vaccines, due dates, lot numbers, and vet details. Covers both the 'pet vaccination record template' and 'pet shot record template' keywords.",
    icon: "💉",
    tier: 2,
    category: "Health Records",
    targetKeywords: ["pet vaccination record template", "pet shot record template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet vaccination record template tracks every vaccine your pet has received — the name, date, due date, lot number, and administering vet — in a single printable document you can take to any vet, boarder, or groomer.",
    intro: `Boarding facilities, groomers, daycares, and dog parks increasingly require proof of up-to-date vaccinations before admitting your pet. A complete vaccination record in hand means instant access to that proof — and ensures you never miss a due date.

This template covers all core vaccines for dogs and cats, with columns for lot numbers (useful in the event of a vaccine recall), administering vet, and next due date. Download, print, and take it to your next vet appointment to fill in your pet's history.`,
    whenYouNeedIt: [
      "Booking a boarding facility or groomer that requires vaccination proof",
      "Taking your pet across state lines (many states require current rabies cert)",
      "Switching vets and needing a personal copy of vaccine history",
      "Monitoring due dates to avoid lapses in coverage",
    ],
    whatToInclude: [
      { title: "Core vaccines — dogs", items: ["Rabies (required by law in all states)", "Distemper-Parvovirus (DHPP)", "Bordetella (Kennel Cough)", "Leptospirosis", "Canine Influenza", "Lyme (if applicable by region)"] },
      { title: "Core vaccines — cats", items: ["Rabies", "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)", "FeLV (Feline Leukaemia — for outdoor cats)"] },
      { title: "Record fields per vaccine", items: ["Vaccine name and brand", "Date administered", "Due date / expiry", "Lot number", "Administering vet and clinic", "Certificate number (rabies)"] },
    ],
    stateNotes: `**Rabies law:** All 50 U.S. states legally require rabies vaccination for dogs. Most require it for cats. Some require a 3-year vaccine (not all clinics carry it — ask specifically). Your rabies certificate is a separate legal document; keep the original and record the number here.\n\n**AAHA guidelines:** The AAHA Canine Vaccination Guidelines (2022) classify vaccines as core (all dogs should receive) and non-core (based on risk). Distemper combo (DHPP) and rabies are core. Bordetella, leptospirosis, Lyme, and influenza are non-core — discuss with your vet based on your dog's lifestyle.`,
    templateText: `PET VACCINATION RECORD

Pet Name: _____________________  Species: _______________
Breed: _____________________  Sex: ___  DOB: ___________
Microchip #: _____________________
Owner: _____________________  Phone: ___________________

PRIMARY VETERINARIAN
Clinic: _____________________  Phone: ___________________
Address: _____________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOG VACCINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vaccine         | Date     | Due Date | Lot #   | Vet/Clinic
----------------|----------|----------|---------|------------
Rabies (1yr)    |          |          |         |
Rabies (3yr)    |          |          |         |
DHPP (1yr)      |          |          |         |
DHPP (3yr)      |          |          |         |
Bordetella      |          |          |         |
Leptospirosis   |          |          |         |
Lyme            |          |          |         |
Canine Influenza|          |          |         |
Other:          |          |          |         |

Rabies Certificate #: ___________________  Expiry: ____________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CAT VACCINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vaccine         | Date     | Due Date | Lot #   | Vet/Clinic
----------------|----------|----------|---------|------------
Rabies (1yr)    |          |          |         |
Rabies (3yr)    |          |          |         |
FVRCP (1yr)     |          |          |         |
FVRCP (3yr)     |          |          |         |
FeLV            |          |          |         |
FIV             |          |          |         |
Other:          |          |          |         |

Rabies Certificate #: ___________________  Expiry: ____________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UPCOMING DUE DATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vaccine: ___________________  Due: ___________________
Vaccine: ___________________  Due: ___________________
Vaccine: ___________________  Due: ___________________

Notes: ________________________________________

Last updated: ____________  By: ____________`,
    faqs: [
      { q: "How often does my dog need vaccines?", a: "Core vaccines (rabies, DHPP) are typically given at 1 year after puppy series, then every 3 years for most adult dogs. Non-core vaccines like Bordetella may require annual or biannual boosters depending on exposure. Always follow your vet's recommendation — AAHA publishes updated vaccination guidelines every few years." },
      { q: "What is a rabies certificate and where do I get one?", a: "A rabies certificate is an official document signed by the administering vet confirming your pet received a rabies vaccination. You receive it at the time of vaccination. Keep the original — boarding facilities, groomers, and some states require the signed original, not a photocopy." },
      { q: "My boarding facility requires vaccines — is this form sufficient?", a: "This template is for your personal records. Boarding facilities typically want to see official vet-issued certificates (especially the signed rabies certificate) or a letter from your vet confirming current vaccination status. Bring both this record (for your reference) and your official certificates." },
    ],
    relatedSlugs: ["pet-medical-history-template", "pet-health-record-template", "pet-sitting-contract-template-free"],
    downloadFormats: ["PDF", "Google Docs", "Printable A4"],
  },

  {
    slug: "pet-health-record-template",
    title: "Pet Health Record Template (Free, Comprehensive)",
    seoTitle: "Pet Health Record Template — Free Download 2026",
    shortTitle: "Pet Health Record",
    seoDescription: "Free comprehensive pet health record template. Tracks vet visits, weight, medications, diagnoses, and preventative care for dogs and cats. Editable PDF and Word.",
    icon: "📋",
    tier: 2,
    category: "Health Records",
    targetKeywords: ["pet health record template", "pet medical record template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet health record template is an ongoing log of every vet visit, diagnosis, weight measurement, and preventative care event in your pet's life — a complete health timeline in one document.",
    intro: `A vaccination record tells you when your pet last had their shots. A health record tells you everything. Weight trends over time. When that recurring ear infection first appeared. Which antibiotic worked last time and which caused a stomach upset. What the vet said at the last annual and what they recommended for follow-up.

This information is invaluable when you switch vets, move cities, or face a complex health situation where history matters. Keep this record updated after every vet visit.`,
    whenYouNeedIt: [
      "Managing a pet with a chronic condition (allergies, diabetes, arthritis)",
      "Switching vets or moving to a new city",
      "Tracking a puppy or kitten's growth and development",
      "Preparing for senior pet appointments where history is especially important",
    ],
    whatToInclude: [
      { title: "Visit log", items: ["Date, clinic, vet name, reason for visit", "Findings / diagnosis", "Treatment prescribed", "Follow-up required"] },
      { title: "Weight log", items: ["Date, weight in lbs/kg", "Trend note (stable, gaining, losing)", "BCS (Body Condition Score) if recorded by vet"] },
      { title: "Preventative care", items: ["Flea/tick prevention: product, dose, dates", "Heartworm prevention: product, dose, dates", "Dental cleanings with dates"] },
      { title: "Test results", items: ["Bloodwork dates and summary findings", "Urinalysis, faecal, or imaging results", "Heartworm test dates and results"] },
    ],
    stateNotes: `No state-specific legal requirements. Keep this document alongside your official vet records — request copies of bloodwork and imaging reports from your vet to attach here.`,
    templateText: `PET HEALTH RECORD

Pet Name: _____________________  Breed: _______________
DOB: _________  Sex: ___  Microchip #: _______________
Owner: _____________________  Phone: ___________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VET VISIT LOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date | Clinic / Vet | Reason | Findings / Diagnosis | Treatment | Follow-up
-----|-------------|--------|---------------------|-----------|----------
     |             |        |                     |           |
     |             |        |                     |           |
     |             |        |                     |           |
     |             |        |                     |           |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEIGHT LOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date | Weight | BCS (1–9) | Notes
-----|--------|-----------|------
     |        |           |
     |        |           |
     |        |           |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREVENTATIVE CARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Flea/Tick Product: _______________  Dose: ___  Dates applied: ___________
Heartworm Product: _______________  Dose: ___  Dates given: ___________
Last dental cleaning: _______________  Next due: _______________
Last faecal test: _______________  Result: _______________
Last heartworm test: _______________  Result: _______________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLOODWORK & TEST RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date | Test | Key Findings | Vet Recommendation
-----|------|-------------|--------------------
     |      |             |
     |      |             |

Notes / Ongoing conditions: ________________________________
________________________________`,
    faqs: [
      { q: "What's the difference between this and a vaccination record?", a: "A vaccination record tracks only vaccines. This health record tracks the full picture: every vet visit, weight trend, preventative care, and test result. Use both — the vaccination record for quick reference and this for comprehensive history." },
      { q: "Should I keep digital or paper records?", a: "Both. Keep a printed copy in your pet's folder at home (useful for emergencies when phones die or apps are unavailable) and a digital copy in your email or cloud storage for easy sharing with vets. Some vet clinics also offer client portals — check whether yours does." },
    ],
    relatedSlugs: ["pet-vaccination-record-template", "pet-medical-history-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)", "Printable A4"],
  },

  {
    slug: "pet-adoption-certificate-template",
    title: "Pet Adoption Certificate Template (Free, Printable)",
    seoTitle: "Pet Adoption Certificate Template — Free Printable 2026",
    shortTitle: "Adoption Certificate",
    seoDescription: "Free pet adoption certificate template for rescues, shelters, and foster families. Beautiful printable certificate commemorating a pet's adoption day. Editable PDF and Word.",
    icon: "🎓",
    tier: 2,
    category: "Adoption & Rehoming",
    targetKeywords: ["pet adoption certificate template", "pet adoption agreement template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "4 Min Read",
    quickAnswer: "A pet adoption certificate is a commemorative document given to adopters at the time of adoption — a meaningful keepsake marking the day their pet officially joined the family. Rescues and shelters often issue them alongside the legal adoption contract.",
    intro: `An adoption certificate is not a legal document — it's a gift. It marks the moment a pet's life changed, and it gives adopters something tangible to celebrate and keep. Rescues that issue beautiful, well-designed certificates report that adopters share them on social media, frame them, and remember the rescue fondly for years.

If you're running a rescue, this small gesture generates word-of-mouth, builds emotional connection to your organisation, and celebrates the lives you're changing. If you're an adopter whose rescue didn't issue one, print one yourself.`,
    whenYouNeedIt: [
      "A rescue issuing a commemorative certificate at adoption",
      "A foster family celebrating a successful placement",
      "An adopter wanting a personal keepsake of adoption day",
    ],
    whatToInclude: [
      { title: "Certificate fields", items: ["Pet's name", "Adoption date", "Adopter's name(s)", "Rescue or shelter name", "Optional: a short message or pledge from the adopter"] },
    ],
    stateNotes: `This is a commemorative document only and has no legal weight. For the legally binding adoption agreement, use our Pet Adoption Contract Template.`,
    templateText: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

          CERTIFICATE OF ADOPTION

          This certifies that on this day,

          [ADOPTION DATE]

          [PET NAME]

          [Breed / Species]

          was officially adopted by

          [ADOPTER NAME(S)]

          and welcomed into a loving forever home.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

          Issued by:
          [RESCUE / SHELTER NAME]

          Authorised by: _________________________

          "Every pet deserves a family. Every family deserves the right pet."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADOPTER'S PLEDGE (OPTIONAL):

I, [ADOPTER NAME], pledge to provide [PET NAME] with a loving home, proper veterinary care,
and a life full of joy for as long as I am able.

Signature: _________________________ Date: ____________`,
    faqs: [
      { q: "Is an adoption certificate a legal document?", a: "No. It is a commemorative keepsake only. The legal agreement is a separate pet adoption contract (signed by both parties) that covers adoption fees, return policy, and care obligations. Both documents should be issued at adoption." },
      { q: "Can I make this certificate look more professional?", a: "Yes — open the Word or Google Docs version and add your rescue's logo, change the fonts, and add a border or graphic. Canva also has free certificate templates that you can customise. The more beautiful the certificate, the more likely adopters are to frame it and share it." },
    ],
    relatedSlugs: ["pet-adoption-contract-template", "pet-medical-history-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)", "Printable landscape"],
  },

  {
    slug: "pet-trust-template",
    title: "Pet Trust Template: Protecting Your Pet in Your Will",
    seoTitle: "Pet Trust Template — Free Guide & Template 2026",
    shortTitle: "Pet Trust",
    seoDescription: "Free pet trust template with guidance on how to legally provide for your pet after you die. Covers trustee selection, care instructions, funding, and what happens to remaining assets.",
    icon: "📜",
    tier: 2,
    category: "Legal & Ownership",
    targetKeywords: ["pet trust template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "9 Min Read",
    quickAnswer: "A pet trust is a legally recognised trust that sets aside funds for a named pet's care and designates a trustee to manage those funds and a caregiver to provide daily care — all continuing after the pet owner's death. Pet trusts are now recognised in all 50 U.S. states.",
    intro: `Your dog or cat will almost certainly outlive their current living situation — whether through your death, incapacity, or a life change you haven't anticipated. Without a legal plan, your pet becomes personal property in your estate: subject to distribution according to a will that may not reflect your wishes, or worse, surrendered to a shelter.

A pet trust is the most legally robust way to ensure your pet is cared for by someone you trust, with adequate funds, according to instructions you've left behind. This guide explains how pet trusts work and provides a template you can take to an estate attorney to formalise.`,
    whenYouNeedIt: [
      "Estate planning — anyone who owns a pet should have a plan",
      "Elderly pet owners or those with a health condition",
      "Owners of long-lived pets (parrots, tortoises, horses) who may outlive multiple owners",
      "Anyone who wants to ensure their pet is not surrendered to a shelter in the event of their incapacity or death",
    ],
    whatToInclude: [
      { title: "Trust funding", items: ["How much money is set aside for the pet's care", "Where the funds are held", "What happens to remaining funds when the pet dies"] },
      { title: "Trustee", items: ["Who manages the money", "Trustee compensation (if any)", "What the trustee can and cannot spend funds on", "Successor trustee if primary cannot serve"] },
      { title: "Caregiver", items: ["Who provides daily care", "Whether caregiver and trustee are the same person (not recommended)", "Caregiver compensation", "Backup caregiver"] },
      { title: "Care instructions", items: ["Diet and feeding routine", "Vet contacts and medical history", "Exercise and enrichment needs", "Any behavioural notes"] },
      { title: "Enforcement", items: ["Who monitors compliance", "What happens if caregiver is not meeting the pet's needs", "How disputes are resolved"] },
    ],
    stateNotes: `**All 50 states:** Pet trusts are legally recognised in all U.S. states and the District of Columbia under the Uniform Trust Code or equivalent state statutes. They are enforceable by a court.\n\n**Recommended funding:** A common rule of thumb is 3–5 years of annual pet care costs. For a healthy dog costing $1,500/year, a $5,000–$7,500 trust is reasonable. For exotic, long-lived, or high-need animals, fund proportionally more.\n\n**Do not rely on a will alone:** Leaving your pet "to" someone in a will is not a pet trust. A will can be contested, takes months to probate, and provides no ongoing enforcement. A trust takes effect immediately upon your incapacity or death.`,
    templateText: `PET TRUST AGREEMENT

This Pet Trust Agreement ("Trust") is established by [YOUR FULL NAME] ("Grantor"), residing at [ADDRESS], effective [DATE / upon the Grantor's death or incapacity].

1. PURPOSE
The purpose of this Trust is to provide for the care, maintenance, and welfare of the Grantor's pet(s) described in Section 2, during each pet's lifetime.

2. COVERED PETS
This Trust covers the following pets:
  Name: _____________ Species/Breed: _____________ DOB: _____________
  Microchip #: _____________ Current Vet: _____________

Additional pets may be added by written amendment during the Grantor's lifetime.

3. TRUSTEE
Primary Trustee: [FULL NAME], residing at [ADDRESS]
Phone: [PHONE] | Email: [EMAIL]

Successor Trustee (if primary cannot serve): [FULL NAME], residing at [ADDRESS]

The Trustee shall hold and manage Trust assets for the benefit of the pet(s) and shall make distributions to the Caregiver as needed for the pet(s)' care.

Trustee compensation: $[AMOUNT] per [month/year] / None.

4. CAREGIVER
Primary Caregiver: [FULL NAME], residing at [ADDRESS]
Phone: [PHONE] | Email: [EMAIL]
Relationship to Grantor: [RELATIONSHIP]

Backup Caregiver: [FULL NAME], residing at [ADDRESS]

The Caregiver shall provide daily care for the pet(s) in accordance with Section 6. The Trustee shall reimburse or pay directly for reasonable expenses incurred by the Caregiver on behalf of the pet(s).

Caregiver compensation: $[AMOUNT] per [month/year] / None.

5. TRUST FUNDING
Initial Trust assets: $[AMOUNT] / [describe asset: e.g., "the sum of $10,000 from account ending in ####"]
Ongoing funding: [Describe any additional sources, e.g., life insurance proceeds]
Disbursement limit: The Trustee may disburse up to $[AMOUNT] per [month/year] for routine care without further authorisation.
Emergency expenditures over $[AMOUNT] require notification to [PERSON].

6. CARE INSTRUCTIONS
Veterinarian: [VET CLINIC NAME] | Phone: [PHONE] | Address: [ADDRESS]
Emergency Vet: [CLINIC NAME] | Phone: [PHONE]

Diet: [BRAND, AMOUNT, FREQUENCY]
Exercise: [ROUTINE]
Medications: [LIST CURRENT MEDICATIONS AND DOSES]
Behavioural notes: [RELEVANT BEHAVIOURS, FEARS, PREFERENCES]
Special care needs: [ANY SPECIFIC REQUIREMENTS]

Full care instructions are attached as Exhibit A (recommended).

7. TERMINATION
This Trust terminates upon the death of the last surviving pet named herein. Upon termination, remaining Trust assets shall be distributed to: [NAME OF PERSON OR CHARITY].

If the Grantor wishes remaining assets to benefit an animal rescue, suggested organisations include: [NAME AND EIN OF PREFERRED CHARITY].

8. ENFORCEMENT
[NAME OF ENFORCER OR REMAINDERMAN] shall have the right to petition a court of competent jurisdiction to enforce the terms of this Trust if the Trustee or Caregiver fails to meet their obligations.

9. GOVERNING LAW
This Trust is governed by the laws of the State of [STATE].

Grantor Signature: _______________________ Date: ___________
Print Name: _______________________

Notary (recommended): _______________________ Date: ___________`,
    faqs: [
      { q: "Do I need a lawyer to create a pet trust?", a: "To create a legally binding, court-enforceable pet trust, yes — working with an estate attorney is strongly recommended. This template is a starting-point document for your attorney consultation, not a substitute for legal advice. The drafting cost is typically $300–$800 as part of an overall estate plan." },
      { q: "Can I just leave my pet to someone in my will?", a: "You can name a beneficiary for your pet in a will, but a will alone has significant limitations: it takes months to probate, it can be contested, and it provides no ongoing enforcement or care instructions. A pet trust is more robust and takes effect immediately upon your incapacity." },
      { q: "How much should I fund a pet trust?", a: "A common guideline is to estimate annual care costs × (expected remaining lifespan + 2 buffer years). A healthy 3-year-old dog with ~10 years remaining, costing $1,500/year, would suggest a $18,000 trust minimum. Over-funding is generally better than under-funding — remaining assets can go to a named charity." },
    ],
    relatedSlugs: ["pet-custody-agreement-template", "pet-adoption-contract-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)"],
  },

  {
    slug: "lost-pet-poster-template",
    title: "Lost Pet Poster Template (Free, Printable & Digital)",
    seoTitle: "Lost Pet Poster Template — Free Printable & Digital 2026",
    shortTitle: "Lost Pet Poster",
    seoDescription: "Free lost pet poster template for missing dogs and cats. Printable flyer + digital version for social media. Designed to include the right information to maximise your chance of finding your pet.",
    icon: "🔍",
    tier: 2,
    category: "Lost & Found",
    targetKeywords: ["lost pet poster template", "lost pet flyer template free", "free lost pet template", "free missing pet flyer template"],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "6 Min Read",
    quickAnswer: "An effective lost pet poster needs four things above everything else: a clear recent photo, your contact phone number in large text, the last known location and date, and a reward mention (even 'reward offered' without an amount increases response rates significantly).",
    intro: `Every hour matters when a pet goes missing. The fastest action you can take is getting a well-designed poster up in the neighbourhood and shared digitally — but a poorly designed poster (blurry photo, too much text, tiny contact number) gets ignored.

This template is designed based on what actually generates tips: maximum visual impact, minimum reading friction. The phone number is the largest element. The photo is high-contrast. The key details are scannable at a distance.

Download, fill in your pet's details, print in colour at A4 or letter size, and post at eye level in a 1-mile radius of the last sighting. Share the digital version to Nextdoor, local Facebook groups, and Instagram.`,
    whenYouNeedIt: [
      "Your pet has escaped or gone missing",
      "You need something to print and post in your neighbourhood immediately",
      "You need a digital version to share on social media and Nextdoor",
      "You found someone else's pet and need a 'found pet' version (simply change the header)",
    ],
    whatToInclude: [
      { title: "Must-haves (above the fold)", items: ["Large bold header: LOST DOG / LOST CAT / FOUND PET", "Clear recent photo (cropped close to the pet's face)", "Phone number in the largest font on the page", "Reward mentioned (even without amount)"] },
      { title: "Key details", items: ["Pet name, species, breed, colour", "Age, sex, weight (approx.)", "Distinguishing features (markings, missing eye, limps)", "Last seen: date, time, specific location"] },
      { title: "Context that helps", items: ["Collar / tag / microchip details", "Whether the pet is fearful and may hide", "Any medical needs that create urgency", "Last known direction of travel if known"] },
    ],
    stateNotes: `**Microchip reunions:** If your pet is microchipped, call the microchip registry immediately and flag them as missing — this is separate from postering and takes 2 minutes. Also contact local vets, groomers, and shelters directly (don't assume they check online registries). In the U.S., HomeAgain and PetLink are the largest registries.\n\n**Nextdoor and Facebook:** Posting in local neighbourhood groups dramatically extends reach beyond physical posters. Include your location, pet name, and contact number in every post.`,
    templateText: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     ██╗      ██████╗ ███████╗████████╗
     ██║     ██╔═══██╗██╔════╝╚══██╔══╝
     ██║     ██║   ██║███████╗   ██║
     ██║     ██║   ██║╚════██║   ██║
     ███████╗╚██████╔╝███████║   ██║
     ╚══════╝ ╚═════╝ ╚══════╝   ╚═╝

     [LOST DOG / LOST CAT / FOUND PET]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     [ATTACH CLEAR, CLOSE-UP PHOTO HERE]
     — print in colour for best results —

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     CALL OR TEXT:
     📞 [YOUR PHONE NUMBER — LARGE FONT]

     REWARD OFFERED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PET DETAILS:
Name: [PET NAME] — responds to "[CALL NAME]"
Species/Breed: [BREED AND COLOUR]
Age: [AGE]   Sex: [M/F]   Weight: ~[WEIGHT] lbs

Distinguishing features:
[e.g., White spot on chest / Missing left ear / Limps on right front leg]

Collar: [COLOUR AND TYPE / No collar]
Microchipped: Yes / No

LAST SEEN:
Date & Time: [DATE], approximately [TIME]
Location: [STREET, NEAREST CROSS STREET, NEIGHBOURHOOD]
Direction: [If known — e.g., "heading north on Oak Street"]

IMPORTANT:
[PET NAME] is [friendly / shy and may hide from strangers / has a medical condition and needs medication — please do not delay calling].

If you see [PET NAME], please do not chase — call or text immediately.
Email: [YOUR EMAIL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Also posted on Nextdoor · [LOCAL FB GROUP] · Hushku Lost & Found
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    faqs: [
      { q: "Should I include the reward amount on the poster?", a: "It's generally recommended to say 'Reward offered' without specifying the amount. Specifying a large amount can attract dishonest responses; specifying a small amount may reduce response rate. 'Reward offered' captures the motivational benefit without anchoring the amount." },
      { q: "What size should I print lost pet posters?", a: "A4 (210x297mm) or US Letter (8.5x11in) for general posting. Consider printing a few in A3/11x17 for high-traffic spots. Laminate posters at key locations (traffic lights, park entrances) to protect them from weather." },
      { q: "Where should I post lost pet flyers?", a: "Within 1 mile of the last sighting: telephone poles, community boards, pet store windows, vet clinic notice boards. Also post at local shelters, groomers, daycares, and dog parks. Digitally: Nextdoor, local Facebook community groups, Instagram with your location tagged, and PetFBI.org." },
      { q: "My pet is shy and might not come when called. What should I note on the poster?", a: "Include a note like 'Very shy — please do not chase, just call us immediately.' Include your emergency contact prominently. Ask callers to observe and report the location rather than attempting to catch the pet — a frightened pet will run from strangers, and a tip about their location is more useful than a failed catch attempt." },
    ],
    relatedSlugs: ["pet-medical-history-template", "pet-custody-agreement-template"],
    downloadFormats: ["PDF (print)", "PNG (social media)", "Google Docs", "Word (.docx)"],
  },

  // ─── TIER 3 ────────────────────────────────────────────────────────────────

  {
    slug: "pet-adoption-application-template",
    title: "Pet Adoption Application Form Template (Free, Editable)",
    seoTitle: "Pet Adoption Application Form Template — Free Download 2026",
    shortTitle: "Adoption Application Form",
    seoDescription: "Free pet adoption application form template for rescues and shelters. Covers adopter background, household, experience, references, and pet preferences. Editable PDF and Google Docs. Targets: pet adoption application form template, free pet adoption application template, pet adoption forms template.",
    icon: "📝",
    tier: 3,
    category: "Adoption & Rehoming",
    targetKeywords: [
      "pet adoption application form template",
      "free pet adoption application template",
      "pet adoption forms template",
      "pet adoption application template",
    ],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "7 Min Read",
    quickAnswer: "A pet adoption application is the first screening tool rescues use before committing to a home visit or approval. A good application captures household composition, living situation, experience with pets, references, and the applicant's expectations — giving you enough to pre-screen before investing time in a deeper conversation.",
    intro: `The adoption application is the first line of defence in responsible pet placement. Done well, it screens out obviously unsuitable matches early, gives you a paper trail if a placement goes wrong, and shows serious applicants that your rescue operates professionally.

Done poorly — a form that's too short to be useful, or so long that good adopters give up — it actively works against you. This template hits the right balance: comprehensive enough to surface red flags, short enough that motivated adopters complete it in under ten minutes.

The form covers six areas: contact details, household, living situation, current and past pets, experience and lifestyle, and references. A notes section at the end lets applicants explain anything unusual. Use it as a starting point and customise the questions to your organisation's specific criteria.`,
    whenYouNeedIt: [
      "Running a rescue or shelter that places animals with approved adopters",
      "A private individual rehoming a litter or a single pet",
      "A foster network screening potential adopters before placement",
      "Any situation where you want a documented record of the adopter's representations",
    ],
    whatToInclude: [
      {
        title: "Applicant information",
        items: [
          "Full legal name, address, phone, email",
          "Date of birth (to confirm adult applicant)",
          "Current employer and occupation (stability indicator)",
          "Government ID type — not the number, just confirmation they have one",
        ],
      },
      {
        title: "Household composition",
        items: [
          "Number of adults and children in the household, ages of children",
          "Whether all household members have agreed to the adoption",
          "Whether anyone in the household has allergies to pets",
        ],
      },
      {
        title: "Living situation",
        items: [
          "Own or rent — if renting, landlord contact and written permission required",
          "House, apartment, condo, or other",
          "Presence of a yard and whether it is fenced",
          "Approximate square footage or size of outdoor space",
        ],
      },
      {
        title: "Current and past pets",
        items: [
          "Current pets: species, breed, age, sex, spayed/neutered status",
          "Past pets: how the relationship ended (died of old age vs. surrendered is a major red flag signal)",
          "Whether current pets are up to date on vaccinations",
          "Vet name and contact for reference check",
        ],
      },
      {
        title: "Experience and lifestyle",
        items: [
          "Hours per day the pet would be alone",
          "Exercise routine and activity level",
          "Where the pet will sleep",
          "Prior experience with this species/breed",
          "Why they want this specific animal",
          "What they would do if the pet developed a serious or expensive health condition",
        ],
      },
      {
        title: "References",
        items: [
          "Two personal references (non-family) with phone numbers",
          "Vet reference (required if they have had prior pets)",
          "Landlord reference (required if renting)",
        ],
      },
    ],
    stateNotes: `**Privacy:** Adoption applications collect personal information. Clearly state in your form how applicant data will be stored and used. Don't share applications with third parties. If you operate in California, CCPA may apply to your data practices even as a non-profit.\n\n**Discrimination:** Non-profits placing animals must not discriminate in adoption decisions on the basis of race, religion, national origin, disability, or other protected characteristics unrelated to the ability to care for the pet. Rejection decisions should be documented with pet-welfare-specific reasons.\n\n**Retaining applications:** Keep declined applications for at least 12 months in case of disputes.`,
    templateText: `PET ADOPTION APPLICATION

Organisation: [RESCUE / SHELTER NAME]
Date received: _____________ Application #: _____________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: APPLICANT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: _________________________________
Date of Birth: _____________
Address: _________________________________
City / State / ZIP: _________________________________
Phone (primary): _____________  (secondary): _____________
Email: _________________________________
Occupation / Employer: _________________________________
Do you have a valid government-issued ID? ☐ Yes ☐ No

Pet you are applying to adopt (if specific): _________________________________
If no specific pet, describe what you're looking for: _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: HOUSEHOLD
━━━━━━━━━━━━━━━━━━━━━━━━
Number of adults in household: _____  Ages: _________________________________
Number of children in household: _____  Ages: _________________________________
Are all adults in the household aware of and in agreement with this adoption? ☐ Yes ☐ No
Does anyone in the household have pet allergies? ☐ Yes ☐ No
If yes, explain: _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: LIVING SITUATION
━━━━━━━━━━━━━━━━━━━━━━━━
Do you: ☐ Own your home  ☐ Rent  ☐ Other: _____________

If renting:
  Landlord name: _____________  Phone: _____________
  Does your lease permit pets? ☐ Yes ☐ No ☐ With permission
  Are you willing to provide written landlord permission? ☐ Yes ☐ No

Type of home: ☐ House  ☐ Apartment  ☐ Condo  ☐ Townhouse  ☐ Other: _____________
Do you have a yard? ☐ Yes ☐ No
If yes, is it fenced? ☐ Fully  ☐ Partially  ☐ No fence
Fence height (if applicable): _____________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: CURRENT & PAST PETS
━━━━━━━━━━━━━━━━━━━━━━━━
Current pets:
Pet 1: Name _________ Species _________ Breed _________ Age ___  Spayed/Neutered ☐
Pet 2: Name _________ Species _________ Breed _________ Age ___  Spayed/Neutered ☐
Pet 3: Name _________ Species _________ Breed _________ Age ___  Spayed/Neutered ☐

Are current pets up to date on vaccinations? ☐ Yes ☐ No
Current vet name & phone: _________________________________

Past pets (last 5 years): _________________________________
How did each past pet's time with you end? _________________________________

Have you ever surrendered or rehomed a pet? ☐ Yes ☐ No
If yes, explain: _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: LIFESTYLE & EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━
Approximately how many hours per day would the pet be alone? _____
Where will the pet sleep? _________________________________
Describe your typical daily exercise routine: _________________________________
How much time per day can you dedicate to the pet? _________________________________

Prior experience with this species / breed: _________________________________
Why are you interested in adopting this specific animal / type of animal? _________________________________

If the pet developed a serious health condition requiring ongoing or expensive treatment, what would you do?
_________________________________
_________________________________

What would you do if the adoption wasn't working out for any reason?
_________________________________

Do you travel frequently? ☐ Yes ☐ No
If yes, what arrangements would you make for the pet? _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: REFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━
Personal Reference 1 (non-family):
Name: _________________________________  Phone: _____________
Relationship: _________________________________

Personal Reference 2 (non-family):
Name: _________________________________  Phone: _____________
Relationship: _________________________________

Veterinary Reference (required if you have had prior pets):
Vet / Clinic Name: _________________________________  Phone: _____________

Landlord Reference (required if renting without documented permission):
Name: _________________________________  Phone: _____________

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━
Is there anything else you'd like us to know about your household or situation?
_________________________________
_________________________________
_________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
DECLARATION
━━━━━━━━━━━━━━━━━━━━━━━━
I confirm that the information provided in this application is accurate and complete to the best of my knowledge. I understand that providing false information may result in the cancellation of any adoption agreement.

Signature: _________________________________  Date: _____________
Print Name: _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
FOR RESCUE USE ONLY
━━━━━━━━━━━━━━━━━━━━━━━━
References checked: ☐ Personal 1  ☐ Personal 2  ☐ Vet  ☐ Landlord
Home visit completed: ☐ Yes ☐ No  Date: _____________
Decision: ☐ Approved  ☐ Declined  ☐ Pending
Notes: _________________________________
Approved by: _________________________________  Date: _____________`,
    faqs: [
      {
        q: "How long should a pet adoption application be?",
        a: "Long enough to surface red flags, short enough that motivated adopters complete it willingly. The sweet spot is 2–3 pages covering the six areas above. If your application takes more than 10 minutes, completion rates drop. A shorter pre-screening call can supplement rather than replace a long form.",
      },
      {
        q: "What are the biggest red flags on an adoption application?",
        a: "History of surrendering or rehoming pets without a clear reason, no prior vet relationship, renting without landlord permission, children under 5 for certain animal types (breed-dependent), hours alone exceeding 8–10 hours daily for dogs, no fenced yard for high-energy breeds, and evasive answers about what happens if they can no longer keep the pet.",
      },
      {
        q: "Should I check all references?",
        a: "Yes — at minimum the vet reference and landlord reference. Personal references are useful but rarely disqualifying on their own (applicants won't list hostile references). The vet reference is the most valuable: a vet who hesitates or gives a lukewarm reference for a prior pet is significant. A non-existent vet reference (claiming prior pets with no vet history) is a red flag.",
      },
      {
        q: "Can I reject an applicant who seems financially unstable?",
        a: "You can factor in the applicant's stated ability to provide veterinary care as a pet welfare consideration — but asking for income documentation or employment verification is sensitive territory. Most rescues ask the open-ended question 'What would you do if the pet required expensive treatment?' and evaluate the response qualitatively.",
      },
    ],
    relatedSlugs: ["pet-adoption-contract-template", "pet-adoption-certificate-template", "pet-medical-history-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)"],
  },

  {
    slug: "pet-travel-documents-template",
    title: "Pet Travel Documents: Passport & Health Certificate Templates",
    seoTitle: "Pet Passport Template & Pet Health Certificate Template — Free 2026",
    shortTitle: "Pet Travel Documents",
    seoDescription: "Free editable pet passport template and blank pet health certificate template. Everything you need to travel with your pet — what's required by country, how to get an official health certificate, and a personal pet passport to keep your records organised.",
    icon: "✈️",
    tier: 3,
    category: "Travel & Documents",
    targetKeywords: [
      "editable pet passport template",
      "blank pet health certificate template",
      "pet passport template",
      "pet travel document template",
    ],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "9 Min Read",
    quickAnswer: "A pet passport is a personal record document — not a legal government document — that consolidates your pet's identification, vaccinations, microchip, and vet contacts for travel. An official health certificate (USDA APHIS Form 7001 or equivalent) is a separate, vet-issued legal document required for international and some interstate travel, and cannot be self-issued.",
    intro: `Travelling with a pet involves two distinct documents that are frequently confused:

**1. The personal pet passport** — a consolidated record of your pet's ID, microchip number, vaccinations, vet contacts, and entry requirements for your destination. This is a personal organisational tool, not a legal document. You can create and print it yourself using this template.

**2. The official health certificate** — a legally required document signed and issued by a licensed veterinarian, often endorsed by your national or state veterinary authority (USDA APHIS in the U.S.). This cannot be self-issued. It has strict validity windows (typically 10 days from issuance for international travel). You must book a vet appointment specifically to obtain one before each trip.

This page covers both: a template for your personal pet passport, a guide to what the official health certificate must contain, and country-specific requirements for the most common destinations.`,
    whenYouNeedIt: [
      "International travel with a pet (all countries require documentation)",
      "Domestic U.S. air travel (airlines require a vet health certificate, usually within 10 days of travel)",
      "Interstate travel (some states require a Certificate of Veterinary Inspection)",
      "Boarding, kennelling, or grooming away from home",
      "Keeping an organised record for any future travel or emergency",
    ],
    whatToInclude: [
      {
        title: "Personal pet passport — your record document",
        items: [
          "Pet name, species, breed, sex, date of birth, colour/markings",
          "Microchip number and ISO standard (ISO 11784/11785 required for EU/UK entry)",
          "Owner name, address, emergency contact",
          "Vaccination history with dates, lot numbers, and expiry dates",
          "Rabies titre test results (required for entry to UK, EU, Australia, Japan, and others)",
          "Parasites treatment records (tapeworm treatment required for UK/Ireland entry)",
          "Destination country entry requirements checklist",
          "Emergency vet contacts at destination",
        ],
      },
      {
        title: "Official health certificate — vet must complete",
        items: [
          "Pet identification (must match microchip)",
          "Veterinarian licence number and signature",
          "Statement of fitness to travel",
          "Vaccination status confirmation",
          "Parasite treatment confirmation",
          "USDA APHIS endorsement (required for international travel from U.S.)",
          "Validity: typically 10 days from issuance for international, 30 days for domestic air",
        ],
      },
      {
        title: "Country-specific requirements (selected)",
        items: [
          "EU/UK: microchip → rabies vaccine → 21-day wait → health cert → tapeworm treatment within 1–5 days of entry (UK only)",
          "Australia/New Zealand: 6+ months preparation, rabies titre test, import permit required — start 6 months before travel",
          "Japan: approximately 180-day preparation timeline, rabies titre test required",
          "Canada: valid rabies certificate required, health cert for air travel",
          "Mexico: current rabies and distemper vaccines, health certificate",
          "U.S. domestic air: health certificate within 10 days, airline-specific carrier requirements",
        ],
      },
    ],
    stateNotes: `**USDA APHIS endorsement:** For international travel from the U.S., most countries require your vet's health certificate to be endorsed (stamped and signed) by a USDA-accredited veterinarian and then by the USDA APHIS Veterinary Services office for your region. This process takes 1–5 business days and must be factored into your timeline. Find your regional APHIS office at aphis.usda.gov.\n\n**EU Pet Passport:** The official EU Pet Passport (a physical blue booklet issued by an EU vet) is no longer valid for UK entry post-Brexit. UK entry requires an Animal Health Certificate (AHC) issued by an Official Veterinarian within 10 days of travel.\n\n**Microchip standard:** The U.S. uses 15-digit ISO 11784/11785 microchips. If your pet has an older 9-digit or 10-digit chip, bring your own universal scanner when travelling internationally, as some foreign scanners may not read non-ISO chips.`,
    templateText: `PET TRAVEL PASSPORT
Personal Record Document — Not an Official Government Document

━━━━━━━━━━━━━━━━━━━━━━━━
PET IDENTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━
Name: _________________________________
Species: _____________ Breed: _____________
Sex: _______  Neutered/Spayed: ☐ Yes ☐ No
Date of Birth: _____________
Colour / Markings: _________________________________
Photo: [ATTACH CLEAR PHOTO]

MICROCHIP
Number: _________________________________
ISO Standard: ☐ ISO 11784/11785 (15-digit)  ☐ Other: _____________
Implant date: _____________  Location: _____________
Registered with: _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
OWNER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━
Owner Name: _________________________________
Address: _________________________________
Phone: _____________  Email: _________________________________
Emergency contact (while travelling): _________________________________
Pet insurance: Policy # _____________  Insurer: _____________

━━━━━━━━━━━━━━━━━━━━━━━━
VACCINATION RECORD
━━━━━━━━━━━━━━━━━━━━━━━━
Rabies:
  Date: _____________ Brand/Lot #: _____________
  Expiry: _____________  Certificate #: _____________
  Administering vet: _________________________________

Other vaccines:
Vaccine | Date | Expiry | Vet | Lot #
--------|------|--------|-----|------
        |      |        |     |
        |      |        |     |
        |      |        |     |

━━━━━━━━━━━━━━━━━━━━━━━━
RABIES TITRE TEST (required for EU, UK, AU, JP)
━━━━━━━━━━━━━━━━━━━━━━━━
Test date: _____________  Lab: _________________________________
Result: _____________  (Minimum required: 0.5 IU/ml)
Eligible for travel from: _____________  (21-day wait from passing result)

━━━━━━━━━━━━━━━━━━━━━━━━
PARASITE TREATMENTS
━━━━━━━━━━━━━━━━━━━━━━━━
Tapeworm treatment (required for UK/Ireland entry):
  Product: _____________  Dose: _____________
  Date/time administered: _____________  Vet: _____________
  Note: Must be given 24–120 hours before arrival in UK/Ireland

Flea/tick treatment:
  Product: _____________  Date: _____________

━━━━━━━━━━━━━━━━━━━━━━━━
HEALTH CERTIFICATES ISSUED
━━━━━━━━━━━━━━━━━━━━━━━━
Date issued | Destination | Issuing vet | APHIS endorsed | Valid until
------------|-------------|------------|----------------|------------
            |             |            | ☐ Yes ☐ No     |
            |             |            | ☐ Yes ☐ No     |

━━━━━━━━━━━━━━━━━━━━━━━━
DESTINATION REQUIREMENTS CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━
Destination: _________________________________
Entry requirements verified on (date): _____________
Source: _________________________________

Requirements:
☐ Microchip (ISO standard)
☐ Rabies vaccination (current)
☐ Rabies titre test (result: _______ IU/ml)
☐ 21-day post-titre wait
☐ Import permit obtained
☐ Health certificate (within ___ days of travel)
☐ USDA APHIS endorsement
☐ Tapeworm treatment (within ___ hours of arrival)
☐ Airline health certificate (within ___ days)
☐ Other: _________________________________

━━━━━━━━━━━━━━━━━━━━━━━━
VETERINARY CONTACTS
━━━━━━━━━━━━━━━━━━━━━━━━
Home vet: _________________________________  Phone: _____________
USDA-accredited vet: ___________________  Phone: _____________
Emergency vet at destination: ___________  Phone: _____________

━━━━━━━━━━━━━━━━━━━━━━━━
TRAVEL HISTORY
━━━━━━━━━━━━━━━━━━━━━━━━
Date | Destination | Mode | Notes
-----|-------------|------|------
     |             |      |
     |             |      |

Last updated: _____________`,
    faqs: [
      {
        q: "Can I make my own pet passport?",
        a: "Yes — as a personal organisational document, you can create and print your own pet passport using this template. However, the official EU Pet Passport (a government-issued blue booklet) and official health certificates must be issued by a licensed veterinarian and, for international travel, endorsed by the relevant government authority. The personal passport template here complements those official documents — it doesn't replace them.",
      },
      {
        q: "How far in advance do I need to prepare to travel internationally with my pet?",
        a: "It depends on the destination. For most of Europe: 3–4 weeks minimum (rabies vaccine needs 21-day wait after titre test). For the UK specifically: add an additional appointment for tapeworm treatment within 24–120 hours of arrival. For Australia, New Zealand, or Japan: 6 months minimum — these countries have strict quarantine protocols and lengthy preparation timelines. Always check the official government website of your destination country, as requirements change.",
      },
      {
        q: "What is a USDA APHIS-accredited vet and do I need one?",
        a: "For international travel from the U.S., your health certificate must be signed by a USDA-accredited veterinarian (not just any licensed vet). Most general practice vets are USDA-accredited — ask specifically when booking. The certificate then needs to be endorsed by your regional USDA APHIS office, which typically takes 1–5 business days. Factor this into your planning.",
      },
      {
        q: "What if my pet's microchip doesn't meet the ISO standard?",
        a: "If your pet has an older non-ISO chip (common in dogs chipped before 2014 in the U.S.), bring a universal microchip scanner when travelling to ensure it can be read. Some countries require ISO-standard chips as a condition of entry — check your specific destination. You can have a second ISO-compliant chip implanted alongside the existing one.",
      },
    ],
    relatedSlugs: ["pet-vaccination-record-template", "pet-medical-history-template", "pet-health-record-template"],
    downloadFormats: ["PDF", "Google Docs", "Word (.docx)", "Printable A5 booklet"],
  },

  {
    slug: "lost-pet-flyer-template",
    title: "Lost Pet Flyer Template (Free, Printable & Social Media Ready)",
    seoTitle: "Lost Pet Flyer Template — Free Printable & Digital Download 2026",
    shortTitle: "Lost Pet Flyer",
    seoDescription: "Free lost pet flyer template in printable and social media formats. Designed to maximise response rates — large phone number, clear photo placement, reward call-out. Targets: lost pet flyer template free, free lost pet template, free missing pet flyer template.",
    icon: "📢",
    tier: 3,
    category: "Lost & Found",
    targetKeywords: [
      "lost pet flyer template free",
      "free lost pet template",
      "free missing pet flyer template",
      "missing pet flyer template",
      "lost dog flyer template",
      "lost cat flyer template",
    ],
    publishDate: "April 2026",
    lastUpdated: "April 2026",
    readTime: "6 Min Read",
    quickAnswer: "An effective lost pet flyer has one job: make someone who sees it immediately pick up the phone. That means one dominant photo, one dominant phone number, and a reward mention — all visible from 10 feet away. Everything else is secondary.",
    intro: `The difference between a lost pet flyer that generates tips and one that doesn't comes down to three things: photo quality, phone number size, and where it's posted.

Most lost pet flyers fail because owners try to include too much information. A person driving past a telephone pole has 1–2 seconds to register your flyer. In that time, they can process: the animal's face, the word LOST, and a phone number. That's it.

This page provides two versions — a **print flyer** for physical posting in a 1-mile radius, and a **digital/social version** sized for Facebook, Instagram, and Nextdoor sharing. Both are free and designed for maximum impact in the moments when every hour matters.

For a longer-format printable with full details, see our [Lost Pet Poster template](/templates/lost-pet-poster-template).`,
    whenYouNeedIt: [
      "Your pet has just gone missing — post within the first 2 hours",
      "You need a shareable image for Nextdoor, Facebook groups, or Instagram",
      "You found someone else's pet and need a FOUND PET version",
      "You want a high-contrast version for night posting or laminating outdoors",
    ],
    whatToInclude: [
      {
        title: "Above everything: the non-negotiables",
        items: [
          "LOST [SPECIES] in the largest font on the page",
          "A clear, recent, close-up photo — the animal's face fills the frame",
          "Your phone number in the second-largest font — readable from 15 feet",
          "REWARD OFFERED — even without an amount, this doubles response rates",
        ],
      },
      {
        title: "Supporting details (smaller, below the photo)",
        items: [
          "Pet name and whether they respond to it (shy pets often won't come to strangers)",
          "Breed, colour, approximate weight",
          "Any distinctive markings (white chest, torn ear, limps on left front leg)",
          "Last seen: date and specific location (cross streets)",
          "Whether the pet is friendly or fearful (this matters — people need to know not to chase)",
        ],
      },
      {
        title: "For digital/social versions",
        items: [
          "High contrast design — white text on dark background performs well on mobile screens",
          "Your location/neighbourhood in the caption, not just on the image",
          "Tag the post with your city name and local hashtags",
          "Include a specific ask: 'Please share — every share extends our reach'",
        ],
      },
    ],
    stateNotes: `**Microchip first:** Before posting flyers, call your microchip registry (HomeAgain, PetLink, AKC Reunite) and mark your pet as missing. Also call every shelter, rescue, and vet clinic within 10 miles — phone calls beat flyers for shelter reunions because staff may not check online registries. File a report at PetFBI.org and NextDoor.\n\n**Flyer placement:** Telephone poles, community notice boards, pet store windows, vet clinic boards, dog park entrances, and the entrance/exit of any grocery store within 1 mile. Aim for 50–100 flyers posted within the first 6 hours. Laminate at high-value locations (park entrances) to weather-proof them.`,
    templateText: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERSION A — PRINT FLYER (Letter / A4)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Print in colour. Aim for 50–100 copies. Laminate at key locations.]


  ██╗      ██████╗ ███████╗████████╗    ██████╗  ██████╗  ██████╗
  ██║     ██╔═══██╗██╔════╝╚══██╔══╝    ██╔══██╗██╔═══██╗██╔════╝
  ██║     ██║   ██║███████╗   ██║       ██║  ██║██║   ██║██║  ███╗
  ██║     ██║   ██║╚════██║   ██║       ██║  ██║██║   ██║██║   ██║
  ███████╗╚██████╔╝███████║   ██║       ██████╔╝╚██████╔╝╚██████╔╝
  ╚══════╝ ╚═════╝ ╚══════╝   ╚═╝       ╚═════╝  ╚═════╝  ╚═════╝

  ▶ LOST [DOG / CAT / OTHER] ◀
  ─────────────────────────────

  [  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ]
  [                                       ]
  [     ATTACH BEST PHOTO HERE            ]
  [     — cropped close to face —         ]
  [     — print in COLOUR —               ]
  [                                       ]
  [  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ]

  CALL OR TEXT — ANY TIME:

        📞 [YOUR NUMBER — VERY LARGE]

  💰 REWARD OFFERED

─────────────────────────────────────────
Name: [PET NAME]   Breed: [BREED]
Colour: [COLOUR]   Weight: ~[WEIGHT] lbs
Age: [AGE]   Sex: [M/F]   Collar: [YES/NO — COLOUR]

LAST SEEN: [DATE], [TIME], near [STREET + CROSS STREET]
Direction heading (if known): [DIRECTION]

[PET NAME] is [friendly / shy — please do NOT chase, just call us].
[Any urgent note: "needs daily medication" / "may hide under cars"]

Also posted on: Nextdoor · [LOCAL FB GROUP] · PetFBI.org
─────────────────────────────────────────


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERSION B — DIGITAL / SOCIAL MEDIA
(1080 × 1080 px — Instagram / Facebook / Nextdoor)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Use Canva, Google Slides, or any image editor. Dark background, white/bright text.]

LAYOUT (top to bottom):

  [Dark background — black or dark navy]

  ── TOP BANNER (bold, all caps, max 3 words) ──
  LOST DOG  /  LOST CAT  /  MISSING PET

  ── PHOTO (takes 50% of image height) ──
  [Close crop of pet's face — fill the frame]

  ── LARGE TEXT ──
  📞 [PHONE NUMBER]

  ── SMALLER TEXT ──
  [PET NAME] · [BREED] · [COLOUR]
  Last seen: [DATE], [NEIGHBOURHOOD]
  REWARD OFFERED

  ── BOTTOM ──
  Please share. Tag anyone in [NEIGHBOURHOOD].

── CAPTION FOR POST ──────────────────────────────
LOST [DOG / CAT] in [NEIGHBOURHOOD / CITY] 😢

[PET NAME] has been missing since [DATE] near [STREET / AREA].
[He/She/They] is [friendly / shy and may hide from strangers].

📞 Please call or text [YOUR NUMBER] if you see [him/her/them].
💰 Reward offered.

Please share this post — every share extends our reach to someone
who may have seen [PET NAME].

#Lost[Dog/Cat] #[YourCity] #[YourNeighbourhood] #LostPet #MissingPet


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMMEDIATE ACTION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Call microchip registry — mark as MISSING now
☐ Call all shelters and rescues within 10 miles
☐ Post to Nextdoor immediately
☐ Post to local Facebook community groups
☐ File report at PetFBI.org
☐ Print and post 50+ flyers within 1 mile radius
☐ Inform neighbours directly — knock on doors
☐ Leave an unwashed item of your clothing near the escape point
☐ Set a humane trap near last sighting if appropriate
☐ Check back at shelters in person every 48 hours`,
    faqs: [
      {
        q: "Should I include the reward amount on the flyer?",
        a: "No. 'Reward offered' is enough — it motivates people without anchoring to a specific amount. Listing a large amount can attract dishonest responses or theft attempts. Listing a small amount can reduce motivation. Let callers know the amount when they phone.",
      },
      {
        q: "What size should I print the flyers?",
        a: "Standard letter (8.5x11) or A4 for general posting. Print a few in A3/tabloid (11x17) for high-traffic spots — park entrances, community boards, grocery store entrances. Larger format = visible from further away. Always print in colour; black and white significantly reduces recognisability.",
      },
      {
        q: "My pet is shy and won't approach strangers. What should I say on the flyer?",
        a: "Include a clear note: 'Very shy — please do NOT approach or chase. Call us immediately with the location.' A frightened pet will run from strangers attempting to catch them, and a tip about location is far more valuable than a failed catch attempt. Also mention any food they respond to (e.g., 'will come for cheese').",
      },
      {
        q: "How is this different from the Lost Pet Poster template?",
        a: "This page focuses on two flyer formats — a print version optimised for telephone pole posting and a digital/social version optimised for sharing online. The Lost Pet Poster template is a longer-format document with more fields for detailed information. Use this flyer for rapid deployment in the first hours; use the poster for more complete information at community boards and vet clinics.",
      },
    ],
    relatedSlugs: ["lost-pet-poster-template", "pet-medical-history-template", "pet-vaccination-record-template"],
    downloadFormats: ["PDF (print)", "PNG (social media)", "Google Docs", "Word (.docx)"],
  },

  // ─── NEW TIER 1 ────────────────────────────────────────────────────────────

  {
    slug: "pet-sitting-agreement-template",
    title: "Pet Sitting Agreement Template (Free, Printable)",
    seoTitle: "Pet Sitting Agreement Template — Free Download 2026",
    shortTitle: "Pet Sitting Agreement",
    seoDescription: "Free pet sitting agreement template covering rates, schedule, emergency contacts, medications, liability, and cancellation policy. Download as PDF, Word, or Google Docs.",
    icon: "🐾",
    tier: 1,
    category: "Pet Sitting & Care",
    targetKeywords: ["pet sitting agreement template", "pet sitter template", "pet sitting template", "free pet sitting templates"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "6 Min Read",
    quickAnswer: "A pet sitting agreement is a written contract between a pet owner and a pet sitter covering visit schedule, rates, pet care instructions, emergency procedures, and liability — signed before the first visit.",
    intro: `Handing your pet's care to someone else requires trust. A signed pet sitting agreement protects both sides: owners get written confirmation their pet's needs will be met; sitters get clear instructions, agreed rates, and legal protection if something unexpected happens.

This free template works for in-home overnight sitting, daily drop-in visits, house-sitting arrangements, and dog walking. It's written in plain English — fill in the highlighted fields, both parties sign, and you're protected. For professional pet sitters taking on multiple clients, consider having a solicitor review your standard agreement once.`,
    whenYouNeedIt: [
      "Hiring a pet sitter for holidays or travel",
      "Arranging regular daily dog walks or drop-in visits",
      "Using a friend or neighbour to care for your pet",
      "Professional pet sitters building a client intake process",
      "House-sitting where pet care is included",
    ],
    whatToInclude: [
      {
        title: "Pet & owner information",
        items: ["Owner full name, address, phone, email", "Emergency contact (different from owner)", "Pet name, species, breed, age, sex", "Microchip number and vet contact"],
      },
      {
        title: "Service details",
        items: ["Type of service (overnight, drop-in, dog walk)", "Start and end dates/times", "Visit frequency and duration", "Agreed daily/nightly rate", "Overtime or holiday surcharge"],
      },
      {
        title: "Pet care instructions",
        items: ["Feeding schedule: amounts, food brand, times", "Medication: name, dose, method, frequency", "Exercise requirements", "Behavioural notes (anxious, reactive, etc.)", "House rules (furniture, garden access)"],
      },
      {
        title: "Emergency & vet procedures",
        items: ["Primary vet name, address, phone", "Emergency/out-of-hours vet", "Authorisation to seek emergency care", "Spending limit before owner must be reached"],
      },
      {
        title: "Liability & cancellation",
        items: ["Liability waiver for accidents or injury", "Cancellation notice period (e.g. 48 hours)", "Refund policy for cancellations", "Key/access return procedure"],
      },
    ],
    stateNotes: "This template is general-purpose and valid across all U.S. states. For professional pet sitters, your state may require a business licence and liability insurance — check with your state's Department of Consumer Affairs.",
    templateText: `PET SITTING AGREEMENT

Between: [OWNER NAME] ("Owner") and [SITTER NAME] ("Sitter")
Service address: [PET'S HOME ADDRESS]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — PET INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pet name: ______________________
Species/Breed: ______________________
Date of birth / age: ______________________
Sex (M/F): ___  Spayed/Neutered: Y / N
Microchip #: ______________________
Distinguishing markings: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — SERVICE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service type:  ☐ Overnight  ☐ Drop-in visit  ☐ Dog walk  ☐ House-sit
Start date & time: ______________________
End date & time: ______________________
Visit frequency: ______________________  Duration per visit: ______
Agreed rate: $_______ per [ day / night / visit / walk ]
Holiday surcharge: $_______ (dates: _______________)
Total estimated cost: $_______
Payment due: ☐ Before service  ☐ After service  ☐ Weekly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — FEEDING & CARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Food brand & type: ______________________
Morning feed: _______ amount at _______ time
Evening feed: _______ amount at _______ time
Treats allowed: Y / N   Type: ______________________
Fresh water: ☐ Always available  ☐ With meals only
Special dietary restrictions: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — MEDICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Medication 1: ________  Dose: ______  Time: ______  Method: ______
Medication 2: ________  Dose: ______  Time: ______  Method: ______
Medications stored at: ______________________
Additional notes: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — BEHAVIOURAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Temperament: ☐ Friendly  ☐ Shy  ☐ Anxious  ☐ Reactive on leash
OK with strangers: Y / N   OK with other dogs: Y / N
OK with cats: Y / N   OK with children: Y / N
Known triggers or fears: ______________________
Escape risk: Y / N   Notes: ______________________
Favourite toys/activities: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — VETERINARY & EMERGENCY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary vet: ______________________  Phone: ______________________
Address: ______________________
Emergency/out-of-hours vet: ______________________  Phone: ____________

AUTHORISATION: In the event I cannot be reached and my pet requires
emergency veterinary care, I authorise [SITTER NAME] to transport my
pet to the nearest emergency veterinary clinic and consent to
necessary treatment up to $_______ without prior owner approval.
All costs beyond this amount will be discussed with the owner before
treatment proceeds where possible.

Emergency contact (not the sitter): ______________________
Phone: ______________________  Relationship: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — LIABILITY & CANCELLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The Owner acknowledges that [SITTER NAME] is not liable for illness,
injury, death, or loss resulting from pre-existing conditions,
escapes due to faulty fencing or equipment not reported to the Sitter,
or events beyond the Sitter's reasonable control.

Cancellation by Owner: Full refund if cancelled more than [48] hours
before service start. [50%] refund if cancelled within 48 hours.
No refund for same-day cancellations.

Cancellation by Sitter: Full refund of any deposit paid.
Sitter will assist in finding alternative care where possible.

Key/access: The Owner will provide [key / code / lockbox] access.
The Sitter will return all keys/access at the end of service.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIGNATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Owner signature: _____________________  Date: ____________
Printed name: _____________________

Sitter signature: _____________________  Date: ____________
Printed name: _____________________`,
    faqs: [
      {
        q: "Is a pet sitting agreement legally binding?",
        a: "Yes. A signed pet sitting agreement is a binding contract in all U.S. states. It doesn't need to be notarised to be enforceable — both parties signing and dating it is sufficient. Keep a copy each.",
      },
      {
        q: "What's the difference between a pet sitting agreement and a pet sitting contract?",
        a: "The terms are interchangeable. 'Agreement' is slightly more informal; 'contract' is more common in professional/commercial contexts. Both create the same legal obligations.",
      },
      {
        q: "Do I need a new agreement for each stay?",
        a: "For repeat clients with the same sitter, you can use a standing agreement with an attached 'Service Confirmation' showing dates and rate. Only re-sign the full agreement if the pet's health, medications, or care needs change significantly.",
      },
      {
        q: "Should I include a photo of the pet?",
        a: "Yes — attach a recent clear photo. It's especially useful if the pet escapes, and it confirms both parties agree on which pet the contract covers. Keep it in the agreement file.",
      },
    ],
    relatedSlugs: ["pet-sitting-contract-template-free", "pet-sitting-invoice-template", "pet-care-instructions-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },

  {
    slug: "pet-profile-to-adopt-template",
    title: "Pet Profile to Adopt Template (Free, Printable)",
    seoTitle: "Pet Profile to Adopt Template — Free Download 2026",
    shortTitle: "Pet Adoption Profile",
    seoDescription: "Free pet profile to adopt template for shelters, rescues, and private rehomers. A well-written adoption profile doubles enquiry rates. Download and fill in under 10 minutes.",
    icon: "🐶",
    tier: 1,
    category: "Adoption & Rehoming",
    targetKeywords: ["pet profile to adopt template", "pet adoption profile template", "pet bio template", "pet cv template"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet adoption profile is a one-page document (or online listing) that describes a pet's personality, background, health status, and ideal home — used by shelters, rescues, and private rehomers to find the right match.",
    intro: `A great adoption profile gets pets adopted faster. Shelters and rescues with compelling, honest profiles see higher enquiry rates, better adoption matches, and fewer returns. This template guides you through every section — from personality and quirks to medical history and ideal home requirements.

Whether you're a shelter staff member, foster carer, or rehoming a personal pet, fill in this template with honest, specific detail. Vague descriptions like "good dog" or "loves cuddles" don't help adopters self-select. Specific ones like "would thrive in a quiet adult household with a garden" do.`,
    whenYouNeedIt: [
      "Shelters and rescues listing pets for adoption",
      "Foster carers writing profiles for their foster animals",
      "Private owners rehoming a pet",
      "Anyone creating an Adopt-a-Pet, Petfinder, or Facebook listing",
    ],
    whatToInclude: [
      {
        title: "Basic information",
        items: ["Name, species, breed (or mix)", "Age, sex, weight", "Colour and markings", "Microchip number (if applicable)", "Intake / in-care date"],
      },
      {
        title: "Personality & temperament",
        items: ["Energy level (low / medium / high)", "Affectionate vs independent", "Playful vs calm", "Confidence level", "Quirks and funny habits"],
      },
      {
        title: "Compatibility",
        items: ["Dogs: good / needs slow intro / no dogs", "Cats: good / untested / no cats", "Children: good / older children only / adults only", "Strangers: friendly / shy / needs time"],
      },
      {
        title: "Training & behaviour",
        items: ["House-trained: Y / N / in progress", "Leash-trained: Y / N / needs work", "Known commands", "Known behavioural challenges", "Separation anxiety level"],
      },
      {
        title: "Health & medical",
        items: ["Spayed / neutered", "Up-to-date vaccinations", "Current medications", "Known health conditions", "Date of last vet check"],
      },
      {
        title: "Ideal home",
        items: ["House or flat — garden preferred?", "Activity level of ideal owner", "Experience level required", "Household composition (adults only, family, etc.)", "Near-term commitment (travel, hours away)"],
      },
    ],
    stateNotes: "No legal requirements for adoption profiles, but shelters should ensure health disclosures are accurate — misrepresenting a pet's medical or behavioural history can expose organisations to liability.",
    templateText: `PET ADOPTION PROFILE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEET [PET NAME]!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[2–3 sentence introduction. Write in a warm, direct voice. Lead with the most appealing quality, then add a realistic note. Example: "Bella is a social, playful 2-year-old who will have you laughing every day. She needs a confident owner who can help her build trust with new dogs — but once she's comfortable, she's the most loyal companion you'll find."]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE BASICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ______________________
Species: ______________________
Breed / mix: ______________________
Age: ______________________
Sex: M / F     Spayed/Neutered: Y / N
Weight: _______ lbs / kg
Colour: ______________________
Microchip: Y / N   #: ______________________
In care since: ______________________
Listing reference: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERSONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Energy level:   ☐ Low   ☐ Medium   ☐ High
Affection level: ☐ Independent   ☐ Moderate   ☐ Very affectionate
Play style: ______________________
Confidence: ☐ Bold   ☐ Moderate   ☐ Shy / nervous
Favourite activities: ______________________
Funny quirks or habits: ______________________
What [PET NAME] loves most: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPATIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Other dogs:    ☐ Yes   ☐ Slow intro needed   ☐ No dogs
Cats:          ☐ Yes   ☐ Untested   ☐ No cats
Young children (under 10): ☐ Yes   ☐ 10+ only   ☐ Adults only
Strangers:     ☐ Friendly   ☐ Warms up slowly   ☐ Needs time

Notes on compatibility: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRAINING & BEHAVIOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
House-trained:      ☐ Yes   ☐ In progress   ☐ No
Leash manners:      ☐ Good   ☐ Needs work   ☐ Not leash-trained
Known commands: ______________________
Crate-trained:      ☐ Yes   ☐ No
Separation anxiety: ☐ None   ☐ Mild   ☐ Moderate   ☐ Severe
Behavioural challenges: ______________________
Training history: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEALTH & MEDICAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vaccinations:    ☐ Up to date   ☐ Partial   ☐ Not vaccinated
Flea/tick treatment: ☐ Current   ☐ Overdue
Heartworm (dogs): ☐ Negative   ☐ Positive   ☐ Not tested
Current medications: ______________________
Known health conditions: ______________________
Last vet check: ______________________
Vet notes: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDEAL HOME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Home type:   ☐ House with garden   ☐ Flat/apartment OK   ☐ Rural preferred
Owner activity level: ☐ Active (daily exercise)   ☐ Moderate   ☐ Calm lifestyle
Experience required: ☐ First-time owner OK   ☐ Some experience   ☐ Experienced only
Household: ☐ Adults only   ☐ Family with children   ☐ Single person   ☐ Any
Other requirements: ______________________

[PET NAME] would NOT be suitable for: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADOPTION REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Adoption fee: $_______
What's included: ☐ Vaccinations  ☐ Microchip  ☐ Spay/neuter  ☐ Starter pack
Home check required: Y / N
Trial period offered: Y / N   Duration: _______
Contact: ______________________   Phone/Email: ______________________`,
    faqs: [
      {
        q: "How long should a pet adoption profile be?",
        a: "One page for print; 150–300 words for online listings. Online adopters scan quickly — lead with personality, highlight the ideal home, and be specific about any challenges upfront. Hiding issues leads to returns.",
      },
      {
        q: "Should I mention behavioural challenges in the profile?",
        a: "Yes, always. Shelters that disclose challenges honestly see fewer returns and better long-term outcomes. Frame them constructively: 'Needs an owner with leash training experience' rather than 'pulls on leash badly.'",
      },
      {
        q: "What makes an adoption profile stand out?",
        a: "Specific details over generic ones. 'Loves chasing a ball in the garden and falls asleep across your feet every evening' is far more compelling than 'playful and affectionate.' Mention one funny or endearing quirk — it makes the pet memorable.",
      },
      {
        q: "Can I use this template for cats?",
        a: "Yes. Remove dog-specific fields (heartworm, leash manners) and add cat-specific ones if needed: indoor/outdoor preference, litter box status, declawed or not. All other sections apply directly.",
      },
    ],
    relatedSlugs: ["pet-adoption-contract-template", "pet-adoption-certificate-template", "pet-adoption-application-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },

  {
    slug: "pet-sitter-instructions-template",
    title: "Pet Sitter Instructions Template (Free, Printable)",
    seoTitle: "Pet Sitter Instructions Template — Free Download 2026",
    shortTitle: "Pet Sitter Instructions",
    seoDescription: "Free pet sitter instructions template covering feeding, medications, walking, emergencies, house rules, and vet contacts. Printable one-page format. Download in PDF, Word, or Google Docs.",
    icon: "📋",
    tier: 1,
    category: "Pet Sitting & Care",
    targetKeywords: ["pet sitter instructions template", "instructions for pet sitter template", "pet sitting instructions template", "house and pet sitting instructions template"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet sitter instructions sheet is a one-page reference document left for whoever is caring for your pet — covering feeding times, medications, walking routine, emergency contacts, house access, and anything else the sitter needs to know.",
    intro: `Leaving a clear, printed instructions sheet for your pet sitter reduces panicked phone calls, prevents missed medications, and gives your sitter the confidence to handle anything that comes up. This template covers everything in a logical order — your sitter can stick it on the fridge and refer to it throughout their stay.

Fill it in completely, even the sections that seem obvious. What seems obvious to you (the pet's feeding routine, how the back door lock works) is new information to your sitter. The more detail you provide upfront, the less stress for everyone.`,
    whenYouNeedIt: [
      "Leaving a pet sitter in charge while you travel",
      "Arranging a neighbour or friend to check in on your pet",
      "Dropping a pet at a boarding facility",
      "Hiring a dog walker or drop-in visitor",
    ],
    whatToInclude: [
      {
        title: "Pet information",
        items: ["Name, age, breed", "Microchip number", "Any medical conditions", "Vet name and number"],
      },
      {
        title: "Feeding",
        items: ["Food brand and type", "Amount per meal", "Feeding times", "Treats allowed"],
      },
      {
        title: "Medications",
        items: ["Drug name and dose", "Time and method of administration", "Where medications are stored", "What to do if a dose is missed"],
      },
      {
        title: "Exercise and toileting",
        items: ["Walk frequency and duration", "Where to walk", "Leash or off-leash", "Toileting frequency"],
      },
      {
        title: "House access and rules",
        items: ["Key / lockbox code / alarm code", "WiFi password", "Rooms that are off-limits", "Bin collection / mail collection"],
      },
      {
        title: "Emergency contacts",
        items: ["Owner primary contact", "Backup emergency contact", "Vet name, address, phone", "Out-of-hours vet"],
      },
    ],
    stateNotes: "No legal requirements apply to this document. It's an operational guide, not a contract. Use alongside a signed pet sitting agreement for full legal coverage.",
    templateText: `PET SITTER INSTRUCTIONS
For: [PET'S NAME]   Dates: [START DATE] – [END DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EMERGENCY CONTACTS  (keep this section visible)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Owner: ______________________   Phone: ______________________
Backup contact: ______________________   Phone: ______________________
Primary vet: ______________________   Phone: ______________________
Emergency vet (24hr): ______________________   Phone: ______________________
Vet address: ______________________

If [PET NAME] is in distress and I am unreachable, go directly to
the emergency vet listed above. I authorise emergency treatment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABOUT [PET NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Breed: ______________________   Age: ______________________
Microchip #: ______________________
Medical conditions: ______________________
Allergies: ______________________
Important personality notes: ______________________
(e.g. "Barks at other dogs on leash — keep moving calmly." / "Hides if scared — don't force interaction.")

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEEDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Food: ______________________   Stored: ______________________
Morning: _______ cups / grams   at _______ am
Evening: _______ cups / grams   at _______ pm
Fresh water: ☐ Always full   ☐ Refresh with each meal
Treats: ______________________
DO NOT feed: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEDICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Medication 1: ________   Dose: ______   Time: ______   How: ______
Medication 2: ________   Dose: ______   Time: ______   How: ______
Stored at: ______________________
Tip for giving meds: ______________________
(e.g. "Hide in a small piece of cheese." / "Mix into wet food.")
If a dose is missed: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WALKS & EXERCISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Number of walks per day: ______   Duration: ______
Preferred route: ______________________
Leash required: ☐ Always   ☐ Off-leash in park OK   ☐ Off-leash everywhere
Leash/harness stored at: ______________________
Potty breaks (non-walk): ______________________
Garden access: ☐ Safe, unsupervised OK   ☐ Supervised only   ☐ No garden

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SLEEPING & ROUTINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sleeps: ☐ Own bed/crate   ☐ Sofa OK   ☐ Owner bedroom
Crate: ☐ Used at night   ☐ Used when alone   ☐ Not used
Favourite toy: ______________________
Usual bedtime routine: ______________________
Separation anxiety: ☐ None   ☐ Mild   ☐ Needs gradual departure

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOUSE & ACCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key location: ______________________
Alarm code: ______   Alarm notes: ______________________
WiFi: Network: ________________   Password: ________________
Rooms off-limits: ______________________
Bin collection day: ______________________
Mail: ☐ Leave in box   ☐ Bring inside   ☐ Not expected
Parking: ______________________
Any other house notes: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANYTHING ELSE TO KNOW?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
______________________

Thank you for caring for [PET NAME]. Please text/call any time:
Owner mobile: ______________________`,
    faqs: [
      {
        q: "How detailed should I be?",
        a: "As detailed as possible. Err on the side of too much information. A section your sitter doesn't need is easy to skip; a piece of missing information (where the medications are, what to do if the pet won't eat) can cause real stress.",
      },
      {
        q: "Should I leave this as a physical sheet or send it digitally?",
        a: "Both. Print a copy and stick it on the fridge or leave it on the kitchen counter — it should be visible without needing to unlock a phone. Also send a digital copy so your sitter can reference it easily when out walking.",
      },
      {
        q: "Do I need a separate contract as well?",
        a: "Yes. Instructions tell the sitter what to do; a pet sitting agreement (contract) covers payment, liability, and legal obligations. They work together — instructions for day-to-day care, contract for the formal arrangement.",
      },
      {
        q: "What if my pet needs special care?",
        a: "Add a dedicated section at the end with detailed notes. For diabetic pets or those on complex medication schedules, consider also creating a daily medication log the sitter can tick off so doses are never missed or doubled.",
      },
    ],
    relatedSlugs: ["pet-sitting-agreement-template", "pet-sitting-contract-template-free", "pet-care-instructions-template"],
    downloadFormats: ["PDF (printable A4)", "Word (.docx)", "Google Docs"],
  },

  {
    slug: "missing-pet-poster-template",
    title: "Missing Pet Poster Template (Free, Printable)",
    seoTitle: "Missing Pet Poster Template — Free Download 2026",
    shortTitle: "Missing Pet Poster",
    seoDescription: "Free missing pet poster template — printable and social media formats. Designed to be spotted quickly and shared widely. Download as PDF, Word, or Canva-ready PNG.",
    icon: "🔍",
    tier: 1,
    category: "Lost & Found",
    targetKeywords: ["missing pet poster template", "missing pet template", "missing pet flyer template", "found pet poster template", "missing pet sign template"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "5 Min Read",
    quickAnswer: "A missing pet poster is a flyer distributed in the local area and online when a pet goes missing — it needs a clear photo, the word MISSING in large type, your phone number, and the last known location.",
    intro: `The first 24 hours after a pet goes missing are the most critical. A well-designed missing pet poster, distributed quickly, dramatically increases your chances of getting your pet home. This template gives you two formats: a print version for telephone poles, community boards, and letterbox drops, and a digital version optimised for social media sharing.

Act fast — post online before printing. A shared post on Nextdoor or a local Facebook group can reach thousands of neighbours in minutes. Print and post the physical version to extend reach to people who aren't online.`,
    whenYouNeedIt: [
      "Your pet has escaped, gone missing, or not returned home",
      "You want to create posters immediately after realising your pet is missing",
      "A community member has found a pet and wants to locate the owner",
      "You're a shelter or rescue assisting with a community missing pet alert",
    ],
    whatToInclude: [
      {
        title: "Print poster essentials",
        items: ['"MISSING" in the largest possible font', "Clear, close-up photo of the pet", "Pet name, species, breed, colour, markings", "Phone number — large enough to read while driving", "Last seen: date, time, location"],
      },
      {
        title: "Optional but helpful",
        items: ["Reward offered (amount optional — see FAQ)", "Microchip number for shelters", "Personality note if shy (do not chase)", "Mention of any medical needs"],
      },
      {
        title: "Digital / social version",
        items: ["Square format (1080×1080) for Instagram and Facebook", "Dark background for high contrast", "Phone number as the largest text element", "Brief caption with hashtags"],
      },
    ],
    stateNotes: "Physical poster placement is subject to local ordinances. Avoid posting on utility poles or public property where prohibited — use community boards, vet clinic windows, and shop fronts instead. Always ask permission before posting on private property.",
    templateText: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRINT VERSION (A4 / Letter)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────────────────────────┐
│                                      │
│    ██  MISSING  ██                   │
│    [ DOG / CAT / RABBIT / OTHER ]    │
│                                      │
│    ┌────────────────────────┐        │
│    │                        │        │
│    │   [CLEAR PHOTO HERE]   │        │
│    │   (close crop, face)   │        │
│    │                        │        │
│    └────────────────────────┘        │
│                                      │
│  Name:  [PET NAME]                   │
│  Breed: [BREED]   Colour: [COLOUR]   │
│  Weight: ~[WEIGHT] lbs               │
│  Sex: M/F   Collar: [YES/NO]         │
│                                      │
│  LAST SEEN                           │
│  [DATE]  [TIME]                      │
│  Near: [STREET / INTERSECTION]       │
│                                      │
│  [PET NAME] is [FRIENDLY / SHY —     │
│  please DO NOT chase, call us]        │
│                                      │
│  ████████████████████████            │
│  📞 [YOUR PHONE NUMBER]              │
│  ████████████████████████            │
│                                      │
│  REWARD OFFERED                      │
│  Also on: Nextdoor · PetFBI.org      │
│  Microchip: [NUMBER]                 │
└──────────────────────────────────────┘


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOCIAL MEDIA VERSION (1080 × 1080)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use Canva, Google Slides, or any image editor.
Recommended: dark background, white/bold text.

Layout (top to bottom):
  ── BOLD BANNER ── "MISSING DOG" / "MISSING CAT" / "MISSING PET"
  ── PHOTO ── (takes 50% of image, close crop)
  ── LARGE TEXT ── 📞 [PHONE NUMBER]
  ── SMALLER TEXT ── [PET NAME] · [BREED] · [COLOUR]
  Last seen: [DATE], [NEIGHBOURHOOD]
  REWARD OFFERED

── POST CAPTION ───────────────────────
MISSING [DOG/CAT] in [NEIGHBOURHOOD/CITY] 😢

[PET NAME] has been missing since [DATE] near [STREET/AREA].
[He/She] is [friendly / shy and may hide from strangers].

📞 Please call or text [YOUR NUMBER] if you see [him/her].
💰 Reward offered.

Please share — every share reaches someone who may have seen [PET NAME].

#Missing[Dog/Cat] #Lost[Dog/Cat] #[City] #[Neighbourhood] #MissingPet #LostPet


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMMEDIATE ACTION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Mark as MISSING with microchip registry NOW
☐ Call all shelters within 10 miles
☐ Post to Nextdoor immediately
☐ Post to local Facebook community groups
☐ File report at PetFBI.org
☐ Print 50+ flyers and post within 1 mile radius
☐ Knock on neighbours' doors directly
☐ Leave unwashed clothing near escape point
☐ Check shelters in person every 48 hours`,
    faqs: [
      {
        q: "Should I include a reward amount?",
        a: "Omit the specific amount. 'Reward offered' motivates people without attracting dishonest claims or anchoring expectations. Tell genuine callers the amount when they phone.",
      },
      {
        q: "What size should I print the poster?",
        a: "A4 or Letter for general posting. Print a few at A3/tabloid for high-traffic spots — park entrances, shop fronts. Always print in colour; a pet's markings are impossible to identify in black and white.",
      },
      {
        q: "My pet is shy and hides from strangers. What should I say?",
        a: "Add a clear note in bold: 'Very shy — please DO NOT approach. Call us with the location immediately.' A frightened pet will run from well-meaning strangers. A location tip is far more valuable than a failed catch attempt.",
      },
      {
        q: "What's the difference between this and the Lost Pet Poster template?",
        a: "This template is optimised for rapid, short-form deployment — grab-and-go poster format and a social media square. The Lost Pet Poster template is a longer, more detailed document for community boards and vet clinics. Use both.",
      },
    ],
    relatedSlugs: ["lost-pet-poster-template", "lost-pet-flyer-template", "pet-medical-history-template"],
    downloadFormats: ["PDF (print)", "PNG (social media)", "Word (.docx)", "Google Docs"],
  },

  // ─── TIER 2 ────────────────────────────────────────────────────────────────

  {
    slug: "pet-care-instructions-template",
    title: "Pet Care Instructions Template (Free, Printable)",
    seoTitle: "Pet Care Instructions Template — Free Printable 2026",
    shortTitle: "Pet Care Instructions",
    seoDescription: "Free pet care instructions template covering feeding, walking, medications, schedule, and emergency contacts. Perfect for vets, boarding, sitters, and family members.",
    icon: "📝",
    tier: 2,
    category: "Pet Sitting & Care",
    targetKeywords: ["pet care instructions template", "pet care checklist template", "pet care plan template", "pet care schedule template", "pet care sheet template"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "4 Min Read",
    quickAnswer: "A pet care instructions sheet is a reference document summarising everything someone needs to know to look after your pet — feeding, medications, routine, emergency contacts, and house access — left for sitters, vets, family, or boarding facilities.",
    intro: `A pet care instructions sheet is the single most useful document you can prepare before leaving your pet with anyone. Whether it's your neighbour checking in, a boarding facility, or a family member covering for a week, a clear printed sheet means fewer phone calls and better care.

This template is shorter and more flexible than a full pet sitting agreement — it's purely operational: what to do, when, and who to call if something goes wrong.`,
    whenYouNeedIt: [
      "Leaving your pet with a boarding facility",
      "A family member is caring for your pet",
      "Emergency situations where someone needs immediate instructions",
      "Regular dog walkers who need a reference sheet",
    ],
    whatToInclude: [
      { title: "Pet details", items: ["Name, breed, age, weight", "Microchip number", "Any allergies or medical conditions"] },
      { title: "Daily schedule", items: ["Feeding times and amounts", "Walk/exercise times", "Medication schedule", "Bedtime routine"] },
      { title: "Emergency info", items: ["Owner phone number", "Backup contact", "Vet name and phone", "Emergency vet"] },
    ],
    stateNotes: "No legal requirements. Use alongside a pet sitting agreement for formal arrangements.",
    templateText: `PET CARE INSTRUCTIONS — [PET NAME]

Owner: ______________________   Phone: ______________________
Backup: ______________________   Phone: ______________________
Vet: ______________________   Phone: ______________________
Emergency vet (24hr): ______________________   Phone: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABOUT [PET NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Breed: _____________  Age: _____  Weight: _____  Microchip #: ___________
Medical conditions: ______________________
Allergies/do not feed: ______________________
Personality notes: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DAILY SCHEDULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Morning feed: _______ at _______am  |  Evening feed: _______ at _______pm
Food: ______________________   Stored at: ______________________
Walks: _______ times/day  |  Duration: _______  |  Off-leash OK: Y / N
Potty breaks: ______________________
Bedtime: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEDICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Medication: ________  Dose: ______  Time: ______  How: ______
Stored at: ______________________
Tip: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
______________________`,
    faqs: [
      { q: "Is this the same as a pet sitting instructions template?", a: "Very similar. Pet sitter instructions are slightly longer and include house access and host-specific info. This care sheet is a shorter, general-purpose version suitable for any caregiver." },
      { q: "Should I laminate this?", a: "If it's for regular use (e.g. a boarding kit you use every year), yes. Laminate a copy and keep it with your pet's documents folder." },
    ],
    relatedSlugs: ["pet-sitter-instructions-template", "pet-sitting-agreement-template", "pet-medical-history-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },

  {
    slug: "pet-resume-template",
    title: "Pet Resume Template for Rental (Free, Printable)",
    seoTitle: "Pet Resume Template for Rental — Free Download 2026",
    shortTitle: "Pet Resume",
    seoDescription: "Free pet resume template to help pet owners rent with pets. Includes pet profile, vaccination records, references, and landlord letter. Download as PDF or Word.",
    icon: "🏠",
    tier: 2,
    category: "Legal & Ownership",
    targetKeywords: ["pet resume template", "pet resume for rental template", "pet reference letter template", "pet reference for rental property template", "pet resume template word"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet resume is a one-page document submitted to a landlord alongside a rental application — it introduces your pet, demonstrates responsible ownership, provides references, and pre-empts concerns about damage or noise.",
    intro: `Finding a pet-friendly rental is hard. A pet resume gives you a real edge. Landlords are weighing risk — a well-presented pet resume reduces that risk by showing you're a responsible, organised pet owner who has thought about their concerns before they even raise them.

A strong pet resume includes a clear photo, vaccination and training records, prior tenancy references (or character references if this is a first rental), and a brief personal statement about your commitment to the property.`,
    whenYouNeedIt: [
      "Applying for a rental property that allows pets",
      "Requesting a pet clause be added to an existing tenancy",
      "Providing a reference package for a new landlord",
      "Reassuring a hesitant landlord about your pet",
    ],
    whatToInclude: [
      { title: "Pet profile", items: ["Photo (clear, well-behaved pose)", "Name, breed, age, sex, weight", "Desexed: Y/N", "Microchip number"] },
      { title: "Health & training", items: ["Vaccination status", "Flea/tick treatment up to date", "Training: obedience school, certificates", "Grooming routine"] },
      { title: "Behaviour notes", items: ["Indoor vs outdoor habits", "Destructive behaviour history (honest)", "Noise level (barking)", "Previous rental history"] },
      { title: "References", items: ["Previous landlord contact", "Vet reference", "Character reference (trainer, neighbour)"] },
      { title: "Owner commitment", items: ["Pet insurance policy details", "Agreement to professional cleaning on exit", "Willingness to pay pet bond/deposit"] },
    ],
    stateNotes: "In most U.S. states, landlords can legally reject pets except for verified service animals and emotional support animals (which have different legal protections). A strong pet resume doesn't guarantee approval but significantly improves your chances.",
    templateText: `PET RESUME

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTRODUCING [PET NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ATTACH CLEAR PHOTO — a calm, well-composed shot helps]

Name: ______________________
Species/Breed: ______________________
Age: ______   Sex: M / F   Desexed: Y / N
Weight: _______ lbs   Colour: ______________________
Microchip #: ______________________

[2–3 sentence description. Be warm but factual. Example:
"Biscuit is a 4-year-old desexed male Labrador. He is calm indoors,
house-trained, and has lived in rented accommodation for 3 years
without incident. His vaccinations are current and he is enrolled
in ongoing obedience classes."]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEALTH & VACCINATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vaccinations: ☐ Fully up to date   Last done: ______________________
Vet name: ______________________   Phone: ______________________
Flea/tick treatment: ☐ Current   Frequency: ______________________
Heartworm prevention: ☐ Yes   ☐ No
Pet insurance: ☐ Yes   Provider: ______________________   Policy #: ______

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRAINING & BEHAVIOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
House-trained: ☐ Yes   ☐ In progress
Obedience training: ☐ Yes   School/trainer: ______________________
Certificates: ______________________
Barking: ☐ Rarely   ☐ When left alone   ☐ At strangers
Indoor habits: ______________________
Destructive behaviour history: ______________________
Grooming: ______________________   Frequency: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RENTAL HISTORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Previous rental address: ______________________
Landlord/agent name: ______________________   Phone: ______________________
Years at property: ______   Any damage caused: Y / N   Notes: ______

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ref 1 (vet/trainer/previous landlord):
Name: ______________________   Role: ______________________
Phone/Email: ______________________

Ref 2:
Name: ______________________   Role: ______________________
Phone/Email: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OWNER COMMITMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I, [OWNER NAME], commit to:
☐ Professional carpet and flea-treatment clean on vacating
☐ Prompt repair of any pet-related damage during tenancy
☐ Maintaining [PET NAME]'s vaccinations, parasite treatment, and registration
☐ Not permitting additional pets without written landlord approval
☐ Keeping [PET NAME] on leash in all common areas

Owner signature: _____________________   Date: ____________`,
    faqs: [
      { q: "Do pet resumes actually work?", a: "Yes. Landlords reject unknown risks. A pet resume turns your pet from a risk into a known, documented, well-managed animal. Many tenants report that submitting one is the deciding factor in pet-friendly applications." },
      { q: "Should I attach vaccination records?", a: "Yes. Attach the most recent vet vaccination certificate. It takes 30 seconds to include and signals serious, responsible ownership." },
      { q: "What if my pet has caused damage in a previous rental?", a: "Disclose it briefly and frame it with the resolution: 'Biscuit chewed a door frame in 2022 — we repaired it professionally before vacating, confirmed by the landlord reference above.' Honesty builds more trust than concealment." },
    ],
    relatedSlugs: ["pet-addendum-to-lease-agreement-template", "pet-custody-agreement-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },

  {
    slug: "pet-boarding-contract-template",
    title: "Pet Boarding Contract Template (Free, Printable)",
    seoTitle: "Pet Boarding Contract Template — Free Download 2026",
    shortTitle: "Pet Boarding Contract",
    seoDescription: "Free pet boarding contract template for boarding facilities, home boarders, and owners. Covers drop-off/pickup, care instructions, emergency authorisation, liability, and fees.",
    icon: "🏡",
    tier: 2,
    category: "Pet Sitting & Care",
    targetKeywords: ["pet boarding contract template", "pet boarding agreement template", "pet boarding form template", "pet boarding report card template"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "5 Min Read",
    quickAnswer: "A pet boarding contract is an agreement between a boarding facility (or home boarder) and a pet owner that covers care instructions, fees, emergency authorisation, liability, and vaccination requirements.",
    intro: `Whether you run a professional boarding kennel, home boarding service, or are simply looking after a friend's pet, a written boarding contract protects everyone. It sets clear expectations, documents care requirements, authorises emergency vet treatment, and protects the boarder from liability for pre-existing conditions.

This template works for overnight boarding, day care, and extended stays.`,
    whenYouNeedIt: [
      "Running a home boarding or kennel business",
      "Leaving your pet at a boarding facility",
      "Informally boarding a friend or family member's pet",
      "Setting up a day care or doggy daycare business",
    ],
    whatToInclude: [
      { title: "Pet & owner info", items: ["Pet name, breed, age, vaccination status", "Owner name, address, emergency contact", "Vet name and phone"] },
      { title: "Stay details", items: ["Drop-off and pickup date/time", "Boarding fee and payment terms", "Cancellation policy"] },
      { title: "Care instructions", items: ["Feeding schedule and food", "Medications", "Exercise requirements", "Behavioural notes"] },
      { title: "Emergency & liability", items: ["Authorisation for emergency vet care", "Spending limit", "Liability waiver for pre-existing conditions"] },
    ],
    stateNotes: "Professional pet boarding facilities may require a business licence and liability insurance in your state. Home boarders should check local regulations. All U.S. states recognise this type of service agreement.",
    templateText: `PET BOARDING CONTRACT

Boarding provider: ______________________   Phone: ______________________
Address: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OWNER & PET INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Owner name: ______________________   Phone: ______________________
Email: ______________________   Address: ______________________
Emergency contact (different person): ______________________   Phone: ______

Pet name: ______________________   Breed: ______________________
Age: ______   Sex: M/F   Spayed/Neutered: Y/N   Weight: _____ lbs
Microchip #: ______________________
Vaccinations up to date: Y / N   Last updated: ______________________
Primary vet: ______________________   Phone: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STAY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Drop-off: _____________ at _______ am/pm
Pickup: _____________ at _______ am/pm
Total nights/days: _______
Daily/nightly rate: $_______ x _______ = Total: $_______
Deposit paid: $_______   Balance due at: ☐ Drop-off  ☐ Pickup
Payment method: ______________________
Holiday surcharge: $_______

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CARE INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Food brand: ______________________   Stored: ______________________
Morning: _______ cups at _______ am   Evening: _______ cups at _______ pm
Medication: ________  Dose: ______  Time: ______  How: ______
Treats: ______________________   Do NOT feed: ______________________
Walks per day: _______   Off-leash OK: Y / N
Sleeps in: ☐ Crate  ☐ Own bed  ☐ Sofa OK
Behavioural notes: ______________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VACCINATION REQUIREMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Required vaccinations confirmed: ______________________
(Dogs: DHPP, Rabies, Bordetella minimum. Cats: FVRCP, Rabies minimum.)
Proof attached: Y / N

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EMERGENCY AUTHORISATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I authorise [BOARDING PROVIDER] to seek emergency veterinary care for my
pet if I cannot be reached. Emergency treatment authorised up to $_______.
I agree to reimburse all veterinary costs on pickup.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIABILITY & CANCELLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[BOARDING PROVIDER] is not liable for illness or injury resulting from
pre-existing conditions, contagious illness from other animals, or
events beyond reasonable control.

Cancellation policy: Full refund if cancelled [72] hours+ before drop-off.
[50%] refund within 72 hours. No refund same-day.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIGNATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Owner: _____________________   Date: ____________
Provider: _____________________   Date: ____________`,
    faqs: [
      { q: "Do I need this for home boarding as well as kennels?", a: "Yes. Home boarders have the same legal exposure as commercial facilities. A signed contract is especially important for home boarders who may lack the insurance and regulatory framework of a licensed kennel." },
      { q: "Can I require vaccination records before accepting a booking?", a: "Absolutely, and you should. Requiring up-to-date vaccinations before accepting a pet protects your other boarders. State this clearly in your contract and ask for proof at drop-off." },
    ],
    relatedSlugs: ["pet-sitting-agreement-template", "pet-sitter-instructions-template", "pet-care-instructions-template"],
    downloadFormats: ["PDF", "Word (.docx)", "Google Docs"],
  },

  {
    slug: "pet-id-card-template",
    title: "Pet ID Card Template (Free, Printable)",
    seoTitle: "Pet ID Card Template — Free Printable 2026",
    shortTitle: "Pet ID Card",
    seoDescription: "Free printable pet ID card template. Wallet-size and tag-size formats. Includes pet photo, owner contact, vet number, microchip number, and medical notes. Download as PDF.",
    icon: "🪪",
    tier: 2,
    category: "Legal & Ownership",
    targetKeywords: ["pet id card template", "pet id card template free", "blank pet id card template", "pet identification card template", "pet id tag template", "printable pet id card template"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "4 Min Read",
    quickAnswer: "A pet ID card is a wallet-size or tag-size card listing your pet's name, your contact details, vet number, microchip number, and any critical medical information — carried by owners and attached to travel crates.",
    intro: `A pet ID card complements a microchip and collar tag — it gives anyone who finds your lost pet a wallet-size card with everything they need to help them get home. It's also essential for travel, boarding drop-off, and vet emergencies.

This template provides two formats: a standard credit-card size (85×54mm / 3.4×2.1in) and a smaller tag size that can be laminated and attached to a carrier or crate.`,
    whenYouNeedIt: [
      "Travelling with your pet by car, plane, or train",
      "Dropping a pet at boarding or daycare",
      "Keeping an ID card in your wallet for emergencies",
      "Attaching an ID to a travel crate or carrier",
    ],
    whatToInclude: [
      { title: "Pet side", items: ["Pet name", "Species, breed, colour", "Microchip number", "Photo (optional but very helpful)"] },
      { title: "Owner side", items: ["Owner name", "Primary phone", "Secondary phone", "Vet name and phone", "Critical medical info (e.g. 'On daily medication')"] },
    ],
    stateNotes: "No legal requirements. Laminate for durability — standard credit card laminating pouches work perfectly.",
    templateText: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WALLET CARD  (credit card size: 3.4 × 2.1 in / 85 × 54 mm)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FRONT:
┌────────────────────────────────────┐
│  [PET PHOTO — small, 1×1 in]       │
│                                    │
│  🐾  [PET NAME]                    │
│  [BREED] · [COLOUR] · [AGE]        │
│  Microchip: [NUMBER]               │
└────────────────────────────────────┘

BACK:
┌────────────────────────────────────┐
│  OWNER: [NAME]                     │
│  📞 [PRIMARY PHONE]                │
│  📞 [BACKUP PHONE]                 │
│                                    │
│  VET: [VET NAME]  [VET PHONE]      │
│                                    │
│  ⚠ [MEDICAL NOTE IF ANY]          │
│  e.g. "On daily heart medication"  │
└────────────────────────────────────┘


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRATE TAG  (laminated, 2.5 × 1.5 in)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌──────────────────────────┐
│ 🐾 [PET NAME]            │
│ Microchip: [NUMBER]      │
│ Owner: [NAME]            │
│ 📞 [PHONE]               │
│ Vet: [VET PHONE]         │
└──────────────────────────┘


HOW TO PRINT:
1. Open this template in Word, Canva, or Google Docs
2. Insert your pet's photo into the front field
3. Fill in all text fields
4. Print on standard card stock (or plain paper + laminate)
5. Cut to size and laminate for durability`,
    faqs: [
      { q: "Is a pet ID card a replacement for a microchip?", a: "No — it complements it. A microchip requires a scanner to read. An ID card provides contact information immediately to any person who finds your pet, without any equipment." },
      { q: "What medical information should I include?", a: "Include only critical, time-sensitive information: 'On daily insulin injections', 'Severe bee sting allergy', 'Heart medication — must not miss doses.' Routine vaccinations don't need to be on the card." },
      { q: "Can I make one for my cat?", a: "Yes — the template works for any pet. For indoor-only cats who escape occasionally, a wallet ID card is especially useful since they may not wear a collar regularly." },
    ],
    relatedSlugs: ["pet-medical-history-template", "pet-health-record-template", "pet-vaccination-record-template"],
    downloadFormats: ["PDF (printable, crop marks)", "Word (.docx)", "Canva template"],
  },

  {
    slug: "pet-birth-certificate-template",
    title: "Pet Birth Certificate Template (Free, Printable)",
    seoTitle: "Pet Birth Certificate Template — Free Printable 2026",
    shortTitle: "Pet Birth Certificate",
    seoDescription: "Free printable pet birth certificate template for dogs, cats, and other pets. Personalised, editable, and ready to print. Download as PDF or Word.",
    icon: "🎀",
    tier: 2,
    category: "Celebration & Milestones",
    targetKeywords: ["pet birth certificate template", "customizable pet birth certificate template", "free pet birth certificate template", "free printable pet birth certificate templates"],
    publishDate: "May 2026",
    lastUpdated: "May 2026",
    readTime: "3 Min Read",
    quickAnswer: "A pet birth certificate is a personalised keepsake document recording a pet's name, date of birth, breed, parents (if known), and owner — a fun tradition for new pet owners and breeders.",
    intro: `A pet birth certificate is a charming tradition — breeders issue them with litters, adopters create them for their new arrivals, and foster carers use them to mark an animal's beginning of life in a loving home. It's a keepsake, not a legal document.

This template is simple, printable, and fully editable. Print it on card stock, frame it, or include it in a new pet owner welcome pack.`,
    whenYouNeedIt: [
      "Welcoming a new puppy, kitten, or pet to the family",
      "Breeders presenting a certificate to puppy/kitten buyers",
      "Foster carers marking a pet's first day in care",
      "Creating a keepsake for a pet adoption celebration",
    ],
    whatToInclude: [
      { title: "Certificate fields", items: ["Pet's full name", "Date of birth (or adoption date)", "Species and breed", "Parent names (if known)", "Owner name", "Issued by / date"] },
    ],
    stateNotes: "This is a keepsake document only — it has no legal status. It does not replace a microchip registration, vaccination record, or breeder's KC/AKC registration papers.",
    templateText: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PET BIRTH CERTIFICATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

           ✦ CERTIFICATE OF BIRTH ✦

This certifies that

         ___________________________
                [PET'S NAME]

a [BREED] [DOG / CAT / RABBIT / OTHER]

was born on  ___________________________
             [DATE OF BIRTH]

at  ___________________________
    [CITY, STATE — or "at home"]


Mother's name: ______________________
Father's name: ______________________

Colour/markings: ______________________
Weight at birth: ______________________


Lovingly welcomed by

         ___________________________
              [OWNER'S NAME]


Issued by: ______________________
Date: ______________________

[Optional: add paw print here]`,
    faqs: [
      { q: "Is a pet birth certificate a legal document?", a: "No. It's a keepsake only. It does not replace AKC/CFA registration papers, microchip records, or vaccination certificates. For official breed registration, contact the relevant kennel club." },
      { q: "What if I don't know the exact birth date?", a: "Use an approximate date or the adoption date. Many rescue pets have an estimated birth month — 'approximately May 2023' is perfectly fine for a keepsake certificate." },
      { q: "Can I use this for all animals?", a: "Yes. Adjust the species/breed field accordingly. The template works for dogs, cats, rabbits, guinea pigs, birds, and any other pet." },
    ],
    relatedSlugs: ["pet-adoption-certificate-template", "pet-medical-history-template"],
    downloadFormats: ["PDF (A4 / Letter)", "Word (.docx)", "Google Docs"],
  },
];

export const templatesByTier = {
  tier1: templateDocs.filter(t => t.tier === 1),
  tier2: templateDocs.filter(t => t.tier === 2),
  tier3: templateDocs.filter(t => t.tier === 3),
};

export const templateCategories = [...new Set(templateDocs.map(t => t.category))];

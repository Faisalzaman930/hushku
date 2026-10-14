import type { BreedDoc, CatBreedDoc } from "./types";
import { dogs } from "./index";
import { dogNote, catNote, parentSlugs, type BreedNote } from "./notes";

/**
 * Breed page copy. Specific facts come from the hand-written notes (notes/*.ts); the 1–5 ratings
 * only shape the practical guidance. Phrasing varies by breed so pages don't read as one template,
 * and nothing claims more than the data supports.
 */

export interface BreedSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ParentInfo {
  name: string;
  slug: string | null;
  summary?: string;
}

export interface BreedContent {
  lead: string;
  sections: BreedSection[];
  goodFit: string[];
  thinkTwice: string[];
  health: string[];
  parents: ParentInfo[];
  faqs: { q: string; a: string }[];
  /** First-time-owner rating shown on the page, capped for giant guardians and high-drive dogs. */
  noviceScore: number | null;
}

// ── helpers ─────────────────────────────────────────────────────────────────

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Deterministic choice between phrasings, salted per sentence so pages vary independently. */
function vary(slug: string, salt: string, options: string[]) {
  return options[hash(slug + salt) % options.length];
}

type Level = "low" | "mid" | "high";
function lvl(n: number | null | undefined): Level | null {
  if (n === null || n === undefined) return null;
  return n <= 2 ? "low" : n >= 4 ? "high" : "mid";
}

const firstSentence = (t?: string) => (t ? (t.match(/^.*?[.!?](\s|$)/)?.[0] ?? t).trim() : "");
const an = (w: string) => (/^[aeiou]/i.test(w) ? "an" : "a");
const theList = (items: string[]) => sentenceList(items.map((i) => `the ${i}`));
const sentenceList = (items: string[]) =>
  items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function groupNoun(group: string | null | undefined) {
  if (!group) return "dog";
  const g = group.toLowerCase().replace(/ dogs$/, "");
  if (g === "mixed breed" || g === "hybrid") return "mixed-breed dog";
  if (g === "companion") return "companion breed";
  return `${g} breed`;
}

// ── dogs ────────────────────────────────────────────────────────────────────

const knownDogs = new Set(dogs.map((d) => d.slug));

function dogParents(b: BreedDoc): ParentInfo[] {
  return parentSlugs(b.parentBreeds, knownDogs).map((p) => ({
    ...p,
    summary: p.slug ? firstSentence(dogNote(p.slug)?.p) : undefined,
  }));
}

/** A mix inherits risks from both sides; conditions both parents share come first. */
function mixHealth(parents: ParentInfo[]): string[] {
  const lists = parents.map((p) => (p.slug ? dogNote(p.slug)?.h ?? [] : [])).filter((l) => l.length);
  const usable = (h: string) => !/^generally robust/.test(h);
  const counts = new Map<string, number>();
  for (const l of lists) for (const h of l.filter(usable)) counts.set(h, (counts.get(h) ?? 0) + 1);
  const shared = [...counts].filter(([, n]) => n > 1).map(([h]) => h);
  const rest = lists.flatMap((l) => l.filter(usable).slice(0, 3)).filter((h) => !shared.includes(h));
  const clean = (h: string) => h.replace(/\s*\((in standards|in smaller sizes|in some lines|in hairless dogs)\)/, "");
  const out = [...new Set([...shared, ...rest].map(clean))];
  return out.filter((h) => !(h === "hip dysplasia" && out.includes("hip and elbow dysplasia"))).slice(0, 6);
}

export function generateBreedContent(b: BreedDoc): BreedContent {
  const s = b.scores;
  const name = b.name;
  const slug = b.slug;
  const note: BreedNote | undefined = dogNote(slug);
  const parents = dogParents(b);
  const isMix = parents.length > 0;
  const size = (b.size ?? "medium").toLowerCase();
  const kind = groupNoun(b.group);
  const health = note?.h?.length ? note.h : isMix ? mixHealth(parents) : [];

  /** Giant guardians and high-drive working dogs are never pitched as beginner dogs, whatever the rating says. */
  const demanding =
    (b.size === "Very Large" && /Working/.test(b.group ?? "")) ||
    (s.intensity ?? 0) >= 4 ||
    (s.exerciseNeeds ?? 0) >= 5;
  const novice: Level | null = demanding && lvl(s.goodForNovice) === "high" ? "mid" : lvl(s.goodForNovice);
  const apartment: Level | null = (s.exerciseNeeds ?? 0) >= 4 && lvl(s.apartmentFriendly) === "high" ? "mid" : lvl(s.apartmentFriendly);

  // Lead: one sentence a reader (or a search snippet) can stand on.
  const parentLine = isMix ? `a cross between ${theList(parents.map((p) => p.name))}` : `${an(size)} ${size} ${kind}`;
  const lead = isMix
    ? `The ${name} is ${parentLine}, usually ${size} in size${b.lifeSpan ? ` and living ${b.lifeSpan}` : ""}.`
    : `The ${name} is ${parentLine}${b.lifeSpan ? ` with a typical lifespan of ${b.lifeSpan}` : ""}.`;

  // ── About ──
  const about: string[] = [];
  if (isMix) {
    about.push(
      `The ${name} is a cross between ${theList(parents.map((p) => p.name))}.${note?.p ? ` ${note.p}` : ""} ${vary(slug, "mix", ["As with any mix, puppies can take after either parent, so size, coat and temperament vary more than in a pedigree breed.", `No two ${name}s are quite alike: a puppy may lean towards one parent in looks and the other in temperament.`, `Because it is a cross rather than a fixed breed, the best guide to a puppy is meeting both parents.`])}`
    );
  } else if (note?.p) {
    about.push(note.p);
  }
  const build: string[] = [];
  if (b.height) build.push(`stands ${b.height}`);
  if (b.weight) build.push(`weighs ${b.weight}`);
  if (build.length) about.push(`${vary(slug, "build", [`A typical adult ${build.join(" and ")}.`, `An adult ${name} usually ${build.join(" and ")}.`, `Fully grown, the ${name} ${build.join(" and ")}.`])}${note?.k ? ` ${note.k}` : ""}`);
  else if (note?.k) about.push(note.k);

  // ── Temperament ──
  const family = {
    low: vary(slug, "fam", [`The ${name} is loyal but not clingy, and shows affection on its own terms.`, `Affection is quiet and understated with this ${isMix ? "mix" : "breed"}; it bonds closely but isn't a lap dog.`]),
    mid: vary(slug, "fam", [`The ${name} is affectionate with its family while keeping some independence.`, `Expect a dog that enjoys company but is also happy to settle on its own.`]),
    high: vary(slug, "fam", [`The ${name} is very affectionate and likes to be close to its people.`, `This is a people-focused dog that wants to be part of whatever the family is doing.`, `Most ${name}s attach strongly to their family and follow them from room to room.`]),
  };
  const kids = {
    low: `With children it can be less tolerant, so it suits homes with older, calm kids and supervised contact.`,
    mid: vary(slug, "kidm", [`It generally does well with children when it has been raised around them and play is supervised.`, `Around children it is usually fine, especially if it grew up with them.`, `It can live happily with children who know to give a dog space.`]),
    high: vary(slug, "kids", [`It is usually patient with children, though supervision is still wise with any dog.`, `Families with children often find it gentle and tolerant, provided kids learn to respect its space.`, `Children tend to be a highlight for the ${name}, which is usually tolerant of noise and fuss.`, `With kids it is generally easygoing, and many ${name}s become a child's constant shadow.`]),
  };
  const strangers = {
    low: vary(slug, "str", [`It tends to be wary of strangers, which makes it a natural watchdog but means socialisation matters from puppyhood.`, `New people are met with caution rather than enthusiasm.`]),
    mid: `With strangers it is polite rather than effusive and warms up given time.`,
    high: vary(slug, "str", [`Most ${name}s greet visitors as friends, so don't count on it as a guard dog.`, `It is outgoing with new people and rarely shy.`]),
  };
  const otherDogs = {
    low: `It can be selective with other dogs, so introductions should be slow and on neutral ground.`,
    mid: `It usually gets along with other dogs it has been introduced to properly.`,
    high: `It generally enjoys the company of other dogs.`,
  };
  const bark = { low: `It is a fairly quiet dog.`, mid: `It barks to alert you but isn't usually a nuisance barker.`, high: `It can be vocal, so teach a quiet cue early, especially in apartments.` };
  const prey = { low: "", mid: `Keep an eye on it around small pets until you know how it reacts.`, high: `A strong prey drive means it may chase cats, squirrels and small pets, so use a lead near wildlife.` };
  const t1 = [lvl(s.affectionate) && family[lvl(s.affectionate)!], lvl(s.kidFriendly) && kids[lvl(s.kidFriendly)!], lvl(s.dogFriendly) && otherDogs[lvl(s.dogFriendly)!]].filter(Boolean).join(" ");
  const t2 = [lvl(s.strangerFriendly) && strangers[lvl(s.strangerFriendly)!], lvl(s.barkiness) && bark[lvl(s.barkiness)!], lvl(s.preyDrive) && prey[lvl(s.preyDrive)!]].filter(Boolean).join(" ");

  // ── Care ──
  const exercise = {
    low: vary(slug, "ex", [`Exercise needs are modest: two short walks and some play each day are usually enough.`, `A couple of relaxed walks a day keeps it fit; it is not built for long runs.`]),
    mid: vary(slug, "ex", [`Plan on about an hour of activity a day, split between walks and play.`, `Around 45 to 60 minutes of exercise a day, plus some games, keeps it settled.`]),
    high: vary(slug, "ex", [`It needs 1 to 2 hours of vigorous exercise a day; without it, expect boredom and destructive habits.`, `This is an athletic dog that needs a lot of daily exercise, ideally with a job such as fetch, scent games or dog sports.`, `A tired ${name} is a well-behaved one: count on long daily outings plus training or games that work its brain.`, `Daily exercise is not optional for the ${name}. Most need a long walk or run every day, and more on weekends.`]),
  };
  const groom = {
    low: `Its coat needs regular work: frequent brushing and, for many coats, professional grooming every few weeks.`,
    mid: vary(slug, "grm", [`Brushing once or twice a week keeps the coat in good order.`, `Expect to brush it a couple of times a week.`, `Its coat needs moderate care: regular brushing plus the odd bath.`]),
    high: vary(slug, "grh", [`Grooming is easy, with a quick brush every week or so.`, `Its coat is low-maintenance; a weekly once-over with a brush is plenty.`, `Coat care is simple, mostly a weekly brush and the occasional bath.`]),
  };
  const shed = { low: vary(slug, "shl", [`It sheds very little.`, `Shedding is minimal.`]), mid: vary(slug, "shm", [`Shedding is moderate.`, `It sheds a moderate amount year-round.`]), high: vary(slug, "shh", [`It sheds heavily, especially in spring and autumn, so expect hair around the house.`, `Expect plenty of loose hair, with heavier moults twice a year.`, `It is a heavy shedder, so a good vacuum helps.`]) };
  const drool = { low: "", mid: "", high: `It drools a fair amount.` };
  const train = {
    low: vary(slug, "tr", [`Training takes patience; it responds to short, reward-based sessions far better than to pressure.`, `It can be stubborn, so keep training sessions short, consistent and rewarding.`]),
    mid: vary(slug, "trm", [`It learns readily with consistent, reward-based training.`, `Training goes smoothly with clear rules and plenty of rewards.`, `It is reasonably biddable; short daily sessions work better than long ones.`]),
    high: vary(slug, "tr", [`It is quick to learn and enjoys training, so it does well in obedience and dog sports.`, `It picks up new cues quickly and benefits from regular mental challenges.`, `Training is usually a pleasure: the ${name} learns fast and likes having something to do.`, `It responds well to reward-based training and often enjoys learning tricks.`]),
  };
  const alone = { low: vary(slug, "al", [`It struggles when left alone for long periods and can develop separation anxiety.`, `Long days alone don't suit it; it is happiest when someone is home.`, `Left alone too long, it may bark, chew or fret, so build up time alone gradually from puppyhood.`]), mid: `It copes with a few hours alone once it is used to it.`, high: `It handles time alone better than many dogs.` };
  const c1 = [lvl(s.exerciseNeeds) && exercise[lvl(s.exerciseNeeds)!], lvl(s.toleratesAlone) && alone[lvl(s.toleratesAlone)!]].filter(Boolean).join(" ");
  const c2 = [lvl(s.easyToGroom) && groom[lvl(s.easyToGroom)!], lvl(s.shedding) && shed[lvl(s.shedding)!], lvl(s.drooling) && drool[lvl(s.drooling)!]].filter(Boolean).join(" ");
  const c3 = [lvl(s.easyToTrain) && train[lvl(s.easyToTrain)!], (s.mouthiness ?? 0) >= 4 ? `Puppies are especially mouthy, so provide chew toys and teach bite inhibition early.` : ""].filter(Boolean).join(" ");
  const climate = [
    (s.toleratesHot ?? 3) <= 2 ? `It copes poorly with heat, so walk it in the cool of the day and watch for overheating.` : "",
    (s.toleratesCold ?? 3) <= 2 ? `It feels the cold and may need a coat in winter.` : "",
  ].filter(Boolean).join(" ");

  // ── Health ──
  const healthPara: string[] = [];
  if (health.length && !/^generally robust/.test(health[0])) {
    healthPara.push(
      isMix && !note?.h
        ? `The ${name} can inherit conditions from either parent breed. The ones most worth knowing about are ${sentenceList(health.slice(0, 4))}.`
        : `${vary(slug, "hl", [`Conditions seen more often in the ${name} include`, `Health problems known in the breed include`, `Owners and breeders watch for`])} ${sentenceList(health.slice(0, 4))}.`
    );
  } else {
    healthPara.push(`The ${name} has no well-documented breed-specific health problems, but routine vet checks still matter.`);
  }
  const screening = [
    (b.size === "Large" || b.size === "Very Large" || health.some((h) => /hip|elbow/i.test(h))) && "hip and elbow scores",
    health.some((h) => /retina|eye|cataract|collie eye|lens/i.test(h)) && "eye test results",
    health.some((h) => /cardio|mitral|heart|aortic/i.test(h)) && "heart screening results",
    health.some((h) => /deaf/i.test(h)) && "BAER hearing test results",
  ].filter(Boolean) as string[];
  healthPara.push(
    `${b.lifeSpan ? `Typical life expectancy is ${b.lifeSpan}. ` : ""}${screening.length ? `If you buy a puppy, ask to see the parents' ${sentenceList(screening)}.` : `If you buy a puppy, ask the breeder what health testing the parents have had.`}${(s.weightGain ?? 0) >= 4 ? ` The ${name} puts on weight easily, so measure meals and go easy on treats.` : ""}`
  );

  // ── Fit ──
  const goodFit: string[] = [];
  const thinkTwice: string[] = [];
  const push = (cond: boolean, list: string[], text: string) => cond && list.push(text);
  push(novice === "high", goodFit, "First-time owners willing to train consistently");
  push(novice === "low" || demanding, thinkTwice, "First-time owners");
  push(lvl(s.exerciseNeeds) === "high", goodFit, "Active people who hike, run or do dog sports");
  push(lvl(s.exerciseNeeds) === "high", thinkTwice, "Homes that can manage only short daily walks");
  push(lvl(s.exerciseNeeds) === "low", goodFit, "Quieter households and less active owners");
  push(apartment === "high", goodFit, "Apartment living, with daily outings");
  push(apartment === "low", thinkTwice, "Small apartments without a garden");
  push(lvl(s.kidFriendly) === "high", goodFit, "Families with children");
  push(lvl(s.kidFriendly) === "low", thinkTwice, "Homes with young children");
  push(lvl(s.toleratesAlone) === "low", thinkTwice, "Owners who are out all day");
  push(lvl(s.toleratesAlone) === "high", goodFit, "Owners who work some days away from home");
  push(lvl(s.shedding) === "low", goodFit, "People who want a dog that sheds little");
  push(lvl(s.shedding) === "high", thinkTwice, "People who don't want dog hair around the house");
  push(lvl(s.preyDrive) === "high", thinkTwice, "Homes with cats or small pets, unless raised together");
  push(lvl(s.strangerFriendly) === "low", goodFit, "Owners who want a natural watchdog");

  const sections: BreedSection[] = [
    { id: "about", title: isMix ? `About the ${name}` : `History and purpose`, paragraphs: about },
    { id: "temperament", title: "Temperament", paragraphs: [t1, t2].filter(Boolean) },
    { id: "care", title: "Exercise, grooming and training", paragraphs: [c1, c2, c3, climate].filter(Boolean) },
    { id: "health", title: "Health and lifespan", paragraphs: healthPara },
  ];

  const faqs: { q: string; a: string }[] = [];
  const rated = (label: string, v: number | null) => (v === null ? "" : `${label} ${v} out of 5`);
  const kg = b.weightKg ? ` (about ${Math.round(b.weightKg)} kg on average)` : "";
  const heavy = (b.weightKg ?? 0) >= 30;
  if (note?.p) faqs.push({ q: isMix ? `Why was the ${name} bred?` : `What was the ${name} originally bred for?`, a: firstSentence(note.p) + (isMix ? ` Puppies can take after either the ${parents.map((p) => p.name).join(" or the ")}.` : note.k ? ` Today, ${note.k.charAt(0).toLowerCase()}${note.k.slice(1)}` : "") });
  else if (isMix) faqs.push({ q: `What two breeds make ${an(name)} ${name}?`, a: `The ${name} is a cross between ${theList(parents.map((p) => p.name))}. ${parents.filter((p) => p.summary).map((p) => `About the ${p.name}: ${p.summary}`).join(" ")}`.trim() });
  if (health.length && !/^generally robust/.test(health[0])) faqs.push({ q: `What health problems do ${name}s have?`, a: `${cap(sentenceList(health.slice(0, 5)))} are the conditions most associated with the ${isMix ? `${name} and its parent breeds` : name}.${screening.length ? ` Ask a breeder for the parents' ${sentenceList(screening)} before you commit.` : ""}` });
  if (lvl(s.kidFriendly)) {
    const k = lvl(s.kidFriendly)!;
    const sizeNote = heavy && (s.energy ?? 0) >= 4 ? ` At ${b.weight ?? "its size"}, an excited adult can knock over a small child, so teach calm greetings early.` : heavy ? ` Its size means play with small children should be supervised.` : (b.size === "Small") ? ` Small dogs can be hurt by rough handling, so teach children to sit on the floor to hold it.` : "";
    faqs.push({ q: `Is the ${name} good with kids?`, a: `${k === "high" ? `Usually, yes. The ${name} is rated ${s.kidFriendly} out of 5 for getting along with children.` : k === "mid" ? `It can be. The ${name} scores ${s.kidFriendly} out of 5 with children, and does best when raised around them.` : `It is not the easiest choice. The ${name} scores ${s.kidFriendly} out of 5 with children and suits homes with older, calm kids.`}${sizeNote}` });
  }
  if (lvl(s.exerciseNeeds)) {
    const e = lvl(s.exerciseNeeds)!;
    const mins = e === "high" ? "90 minutes to 2 hours" : e === "mid" ? "about an hour" : "30 to 45 minutes";
    const activity = /Herding/.test(b.group ?? "") ? "herding games, agility or long walks" : /Sporting/.test(b.group ?? "") ? "retrieving, swimming or running" : /Hound/.test(b.group ?? "") ? "scent games and long, varied walks on a lead" : /Terrier/.test(b.group ?? "") ? "tug, digging games and brisk walks" : /Working/.test(b.group ?? "") ? "hiking, pulling sports or structured training" : "walks and play";
    faqs.push({ q: `How much exercise does ${an(name)} ${name} need?`, a: `Plan on ${mins} a day. With ${[rated("energy", s.energy), rated("exercise needs", s.exerciseNeeds)].filter(Boolean).join(" and ")}, it ${e === "low" ? "is happy with gentle outings" : `does well with ${activity}`}.${(s.toleratesHot ?? 3) <= 2 ? " Exercise it in the cool of the day in summer." : ""}` });
  }
  if (lvl(s.shedding)) faqs.push({ q: `Does the ${name} shed?`, a: `${lvl(s.shedding) === "high" ? "Yes, a lot" : lvl(s.shedding) === "mid" ? "A moderate amount" : "Very little"}: it rates ${s.shedding} out of 5 for shedding${s.easyToGroom !== null ? ` and ${s.easyToGroom} out of 5 for ease of grooming` : ""}. ${lvl(s.shedding) === "high" ? "Brush several times a week, and daily in shedding season." : lvl(s.shedding) === "low" ? "Low shedding doesn't mean no grooming; many low-shedding coats need clipping." : "A weekly brush keeps loose hair under control."}` });
  if (novice) {
    const reasons = [
      heavy && `its size${kg}`,
      (s.energy ?? 0) >= 4 && "its energy",
      (s.easyToTrain ?? 3) <= 2 && "an independent streak in training",
      (s.strangerFriendly ?? 3) <= 2 && "its wariness of strangers",
      (s.preyDrive ?? 3) >= 4 && "a strong prey drive",
    ].filter(Boolean) as string[];
    faqs.push({ q: `Is the ${name} a good dog for first-time owners?`, a: novice === "low" || demanding ? `It is usually better with an experienced owner${reasons.length ? `, because of ${sentenceList(reasons)}` : ""}. A first-time owner who still wants one should budget for a training class from day one.` : novice === "high" ? `It can be. ${reasons.length ? `Plan for ${sentenceList(reasons)}, but` : "Like any dog, it needs consistent training, but"} it is one of the easier ${isMix ? "mixes" : "breeds"} to start with.` : `It can work for a well-prepared first-time owner.${reasons.length ? ` The main challenges are ${sentenceList(reasons)}.` : ""}` });
  }
  if (b.height || b.weight) faqs.push({ q: `How big does ${an(name)} ${name} get?`, a: `Adults typically ${[b.height && `stand ${b.height}`, b.weight && `weigh ${b.weight}`].filter(Boolean).join(" and ")}${kg}, which makes it ${an(size)} ${size} dog. ${isMix ? "Mixes vary more than pedigrees, so the parents' size is the best guide." : "Males are usually larger than females."}` });

  return { lead, sections, goodFit, thinkTwice, health: /^generally robust/.test(health[0] ?? "") ? [] : health, parents, faqs, noviceScore: demanding && s.goodForNovice !== null ? Math.min(s.goodForNovice, 3) : s.goodForNovice };
}

// ── cats ────────────────────────────────────────────────────────────────────

export function generateCatContent(b: CatBreedDoc): BreedContent {
  const s = b.scores;
  const name = b.name;
  const slug = b.slug;
  const note = catNote(slug);
  const health = (note?.h ?? []).filter((h) => !/^generally robust|no current|limited data/.test(h));

  const place = b.origin?.replace(/\s*\(.*\)$/, "");
  const where = place ? (/^(United|Isle|Netherlands|Czech)/.test(place) ? `the ${place}` : place) : "";
  const lead = `The ${name} is ${where ? `a cat breed from ${where}` : "a cat breed"}${b.temperament ? `, known for being ${b.temperament.split(", ").slice(0, 3).map((t) => t.toLowerCase()).join(", ")}` : ""}${b.lifeSpan ? `, with a typical lifespan of ${b.lifeSpan}` : ""}.`;

  const about = [note?.p, [b.weight && vary(slug, "w", [`Adults usually weigh ${b.weight}.`, `A typical adult weighs ${b.weight}.`]), note?.k].filter(Boolean).join(" ")].filter(Boolean) as string[];

  const aff = { low: `It is independent and affectionate on its own terms.`, mid: `It is affectionate without being demanding.`, high: vary(slug, "aff", [`It is very affectionate and likes to be involved in everything you do.`, `Expect a cat that seeks out laps and company.`]) };
  const energy = { low: `It is calm and happy to spend much of the day resting.`, mid: `It has moderate energy and enjoys daily play.`, high: vary(slug, "en", [`It is very active and needs climbing space and daily interactive play.`, `This is an energetic, athletic cat that gets bored without things to climb and chase.`]) };
  const social = { low: `It copes well with quiet homes and time alone.`, mid: `It enjoys company but tolerates a working day alone.`, high: `It dislikes being alone for long periods and may do best with a companion animal.` };
  const kids = { low: `It prefers calm homes and may avoid young children.`, mid: vary(slug, "ck", [`It gets along with considerate children.`, `Gentle, older children usually suit it best.`]), high: vary(slug, "ckh", [`It is usually tolerant and playful with children.`, `Children are often its favourite playmates.`, `It copes well with the noise of family life.`]) };
  const dogsL = { low: `It may not welcome a dog in the house.`, mid: `It can live with a dog after slow introductions.`, high: `It usually accepts dogs well.` };
  const voc = { low: `It is quiet.`, mid: `It is moderately vocal.`, high: `It is very talkative.` };
  const groom = { low: vary(slug, "cg", [`A weekly brush is enough.`, `Its coat needs little care beyond a weekly brush.`]), mid: vary(slug, "cgm", [`Brush it a few times a week.`, `Plan on brushing two or three times a week.`]), high: vary(slug, "cgh", [`Its coat needs daily brushing to prevent mats.`, `Daily brushing is a must to keep mats away.`]) };

  const t1 = [lvl(s.affectionLevel) && aff[lvl(s.affectionLevel)!], lvl(s.energyLevel) && energy[lvl(s.energyLevel)!], lvl(s.socialNeeds) && social[lvl(s.socialNeeds)!]].filter(Boolean).join(" ");
  const t2 = [lvl(s.childFriendly) && kids[lvl(s.childFriendly)!], lvl(s.dogFriendly) && dogsL[lvl(s.dogFriendly)!], lvl(s.vocalisation) && voc[lvl(s.vocalisation)!]].filter(Boolean).join(" ");
  const shed = { low: `It sheds little.`, mid: `Shedding is moderate.`, high: `It sheds a lot, especially in spring.` };
  const mind = { low: "", mid: `Rotate toys and use puzzle feeders to keep it interested.`, high: vary(slug, "iq", [`It is clever enough to learn tricks and open cupboards, so puzzle feeders and clicker games help.`, `It is quick to learn and needs mental challenges as well as play.`]) };
  const care = [
    lvl(s.energyLevel) === "high" ? `Give it cat trees, window perches and two or more play sessions a day with wand toys.` : lvl(s.energyLevel) === "low" ? `A couple of short play sessions a day and a comfortable perch keep it content.` : `Daily play with wand toys and somewhere to climb keep it fit.`,
    [lvl(s.intelligence) && mind[lvl(s.intelligence)!]].filter(Boolean).join(" "),
    [lvl(s.grooming) && groom[lvl(s.grooming)!], lvl(s.sheddingLevel) && shed[lvl(s.sheddingLevel)!], b.hypoallergenic ? `It is often described as hypoallergenic, but no cat is allergen-free, so spend time with the breed before committing.` : ""].filter(Boolean).join(" "),
    b.indoor ? `It is well suited to indoor life, which also protects it from traffic and disease.` : "",
  ].filter(Boolean);

  const healthPara = [
    health.length ? `${vary(slug, "hl", [`Conditions seen more often in the ${name} include`, `Health issues known in the breed include`])} ${sentenceList(health.slice(0, 4))}.` : `The ${name} has no well-documented breed-specific health problems, but yearly vet checks still matter.`,
    `${b.lifeSpan ? `Typical life expectancy is ${b.lifeSpan}. ` : ""}${health.some((h) => /cardiomyopathy/i.test(h)) ? `Ask breeders whether parents are screened for heart disease by echocardiogram.` : health.some((h) => /kidney/i.test(h)) ? `Ask breeders for the parents' DNA or ultrasound results for kidney disease.` : `Ask breeders what health testing the parents have had.`}`,
  ];

  const goodFit: string[] = [];
  const thinkTwice: string[] = [];
  if (lvl(s.childFriendly) === "high") goodFit.push("Families with children");
  if (lvl(s.dogFriendly) === "high") goodFit.push("Homes with a dog");
  if (lvl(s.socialNeeds) === "low") goodFit.push("Owners out at work during the day");
  if (lvl(s.socialNeeds) === "high") thinkTwice.push("Homes where it would be alone all day");
  if (lvl(s.energyLevel) === "low") goodFit.push("Quiet homes and apartments");
  if (lvl(s.energyLevel) === "high") thinkTwice.push("Small spaces without climbing room");
  if (lvl(s.grooming) === "high") thinkTwice.push("Owners without time for daily grooming");
  if (lvl(s.vocalisation) === "high") thinkTwice.push("People who want a quiet cat");
  if (lvl(s.vocalisation) === "low") goodFit.push("People who want a quiet cat");

  const faqs: { q: string; a: string }[] = [];
  if (note?.p) faqs.push({ q: `Where does the ${name} come from?`, a: note.p });
  if (health.length) faqs.push({ q: `What health problems do ${name}s have?`, a: `${cap(sentenceList(health.slice(0, 4)))} are the conditions most associated with the breed.` });
  faqs.push({ q: `Is the ${name} hypoallergenic?`, a: b.hypoallergenic ? `It is often described as hypoallergenic, but no cat is completely allergen-free. Spend time with the breed before deciding.` : `No. It produces the usual cat allergens, so it isn't a good choice for people with cat allergies.` });
  if (lvl(s.childFriendly)) faqs.push({ q: `Is the ${name} good with children?`, a: `${lvl(s.childFriendly) === "high" ? "Usually, yes" : lvl(s.childFriendly) === "mid" ? "With considerate children, yes" : "It prefers calmer homes"}: it scores ${s.childFriendly} out of 5 with children${s.dogFriendly !== null ? ` and ${s.dogFriendly} out of 5 with dogs` : ""}. Give it a high perch or a room where it can retreat from noise.` });
  if (lvl(s.grooming)) faqs.push({ q: `How much grooming does the ${name} need?`, a: `${groom[lvl(s.grooming)!]} It rates ${s.grooming} out of 5 for grooming needs${s.sheddingLevel !== null ? ` and ${s.sheddingLevel} out of 5 for shedding` : ""}.${note?.k && /coat|hair|bath|groom/i.test(note.k) ? ` ${note.k}` : ""}` });
  if (lvl(s.energyLevel)) faqs.push({ q: `Is the ${name} an active cat?`, a: `${lvl(s.energyLevel) === "high" ? "Yes" : lvl(s.energyLevel) === "mid" ? "Moderately" : "Not especially"}. It scores ${s.energyLevel} out of 5 for energy${s.intelligence !== null ? ` and ${s.intelligence} out of 5 for intelligence` : ""}, so ${lvl(s.energyLevel) === "high" ? "plan on climbing space and daily interactive play" : lvl(s.energyLevel) === "mid" ? "a couple of play sessions a day suit it" : "short, gentle play sessions are enough"}.` });
  if (b.lifeSpan) faqs.push({ q: `How long do ${name}s live?`, a: `Typically ${b.lifeSpan}${b.indoor ? ", and indoor cats tend to live longest" : ""}. ${health.length ? `Regular checks for ${health[0]} help catch problems early.` : "Yearly vet checks help catch problems early."}` });

  return {
    lead,
    sections: [
      { id: "about", title: "History and origin", paragraphs: about },
      { id: "temperament", title: "Personality", paragraphs: [t1, t2].filter(Boolean) },
      { id: "care", title: "Care and grooming", paragraphs: care },
      { id: "health", title: "Health and lifespan", paragraphs: healthPara },
    ],
    goodFit,
    thinkTwice,
    health,
    parents: [],
    faqs,
    noviceScore: null,
  };
}

"use client";

import { usePathname } from "next/navigation";
import AppCta from "./AppCta";

type Offer = { title: string; body: string; link?: { href: string; label: string } };

const HEALTH = { href: "/health", label: "See health and care" };
const TEAM = { href: "/care-team", label: "See the Care Team" };

/** What the app does next for someone who just used each tool. Only features that are in the app. */
const OFFERS: Record<string, Offer> = {
  "calorie-calculator": { title: "Turn this into a feeding routine the whole house follows", body: "Set feeding reminders in Hushku and share them with everyone who feeds your pet, so meals aren't missed or doubled up.", link: TEAM },
  "feeding-calculator": { title: "Turn this into a feeding routine the whole house follows", body: "Set feeding reminders in Hushku and share them with everyone who feeds your pet, so meals aren't missed or doubled up.", link: TEAM },
  "water-calculator": { title: "Keep everyone on the same routine", body: "Hushku shares your pet's daily reminders and care notes with your household and sitter.", link: TEAM },
  "exercise-calculator": { title: "Share the walking routine", body: "Add family members or your walker to your pet's Care Team in Hushku so everyone sees the routine and can log what they've done.", link: TEAM },
  "puppy-weight": { title: "Log weigh-ins as your puppy grows", body: "Record each weigh-in in Hushku and see the trend over time, alongside vaccinations and vet visits.", link: HEALTH },
  "pet-bmi": { title: "Track weight over time, not just today", body: "Log weigh-ins in Hushku and watch the trend, with your pet's health records in the same place.", link: HEALTH },
  "vaccine-tracker": { title: "Get a reminder before the next vaccine is due", body: "Store vaccinations in Hushku and set reminders for boosters, flea and tick treatments and vet visits. Share them with your household.", link: HEALTH },
  "whelping-calculator": { title: "Keep track of heat cycles and health records", body: "Hushku logs heat cycles, vet visits and weight for each pet, and shares them with whoever helps care for them.", link: HEALTH },
  "pet-sitter-cost": { title: "Give your sitter everything in one place", body: "Add your sitter to your pet's Care Team in Hushku. They see feeding times, medication and notes, and can log what they've done.", link: TEAM },
  "sitting-comparison": { title: "Give your sitter everything in one place", body: "Add your sitter to your pet's Care Team in Hushku. They see feeding times, medication and notes, and can log what they've done.", link: TEAM },
  "packing-checklist": { title: "Bring your pet's records with you", body: "Hushku keeps vaccinations, medication and vet details on your phone, and shares them with anyone looking after your pet while you travel.", link: HEALTH },
  "symptom-checker": { title: "Keep a record to show your vet", body: "Note symptoms, medication and vet visits in Hushku so you have the history to hand when you call the vet.", link: HEALTH },
  "insurance-cost": { title: "Keep the records insurers ask for", body: "Hushku stores vaccinations and vet records for each pet, so they're ready when you need them.", link: HEALTH },
  "age-calculator": { title: "Keep up with care as your pet gets older", body: "Set recurring reminders in Hushku for check-ups, medication and treatments, and log weight over time.", link: HEALTH },
  "birthday-countdown": { title: "Keep your pet's profile and records together", body: "Hushku holds each pet's profile, reminders and health records, and shares them with your household.", link: HEALTH },
  "best-dog-quiz": { title: "Thinking of adopting?", body: "Shelters and owners list pets for adoption in Hushku, and you can send an adoption request straight from the listing.", link: { href: "/adoption", label: "See adoption" } },
  "best-cat-quiz": { title: "Thinking of adopting?", body: "Shelters and owners list pets for adoption in Hushku, and you can send an adoption request straight from the listing.", link: { href: "/adoption", label: "See adoption" } },
  "breed-compare": { title: "Thinking of adopting?", body: "Shelters and owners list pets for adoption in Hushku, and you can send an adoption request straight from the listing.", link: { href: "/adoption", label: "See adoption" } },
};

const DEFAULT: Offer = { title: "Everyday care, shared with your household", body: "Hushku keeps your pet's reminders and health records in one place and shares them with everyone who helps care for your pet.", link: TEAM };

export default function ToolAppCta() {
  const slug = (usePathname() ?? "").split("/").filter(Boolean)[1] ?? "";
  const o = OFFERS[slug] ?? DEFAULT;
  return <AppCta title={o.title} body={o.body} link={o.link} source={`tool:${slug || "unknown"}`} className="mt-12" />;
}

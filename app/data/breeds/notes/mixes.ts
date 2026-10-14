import type { BreedNote } from "./types";

/**
 * Mixes and hybrids. Most mix pages are built from their parent breeds' notes (see notes/index.ts).
 * These entries add what is specifically known about a cross: who started it and why, and
 * parent breeds where the data file has none (`parents`).
 */
export const MIXES: Record<string, BreedNote & { parents?: string }> = {
  labradoodle: {
    parents: "Labrador Retriever and Poodle",
    p: "First bred deliberately in 1989 by Wally Conron for Guide Dogs Victoria in Australia, who wanted a guide dog for a blind woman whose husband was allergic to dogs. Conron later said he regretted starting the designer-dog craze.",
    k: "Coats vary from flat to curly even within one litter, so low shedding isn't guaranteed.",
  },
  goldendoodle: {
    parents: "Golden Retriever and Poodle",
    p: "Bred in North America and Australia from the 1990s, following the Labradoodle, as a family dog with the Golden's temperament and a lower-shedding coat.",
    k: "Size depends on whether a standard, miniature or toy Poodle is the parent.",
  },
  cockapoo: {
    parents: "Cocker Spaniel and Poodle",
    p: "One of the oldest designer crosses, bred in the United States since the 1950s. In the UK it is usually an English Cocker cross, and it has become one of Britain's most popular dogs.",
    k: "Its coat can be straight, wavy or curly and needs regular clipping.",
  },
  maltipoo: {
    parents: "Maltese and Poodle",
    p: "A small companion cross popular in the United States since the 1990s, bred for a low-shedding lapdog.",
    k: "It is affectionate and often vocal, and does best with company most of the day.",
  },
  puggle: {
    parents: "Pug and Beagle",
    p: "First bred in Wisconsin in the 1980s by Wallace Havens, who registered the name. It became very popular in the US in the 2000s.",
    k: "Its longer muzzle can mean easier breathing than a Pug, but not always.",
  },
  schnoodle: {
    parents: "Miniature Schnauzer and Poodle",
    p: "Bred in the United States from the 1980s as a low-shedding family dog.",
    k: "It is lively and clever, and can inherit the Schnauzer's alert barking.",
  },
  yorkipoo: {
    parents: "Yorkshire Terrier and Poodle",
    p: "A small companion cross bred in the US since the late 1990s.",
    k: "It is lively and affectionate, and tends to bark at visitors.",
  },
  peekapoo: {
    parents: "Pekingese and Poodle",
    p: "One of the earliest designer crosses, bred in the United States in the 1950s and 1960s as a low-shedding companion.",
    k: "It is devoted to its family and often wary of strangers.",
  },
  "maltese-shih-tzu": {
    parents: "Maltese and Shih Tzu",
    p: "Also called the Mal-Shi, a small companion cross bred in the US from around 1990.",
    k: "It is gentle and adaptable and suits apartment life.",
  },
  borador: {
    parents: "Border Collie and Labrador Retriever",
    p: "A cross of two working breeds that often appears on farms, combining herding drive with a retriever's friendliness.",
    k: "It is very energetic and needs work or sport, not just walks.",
  },
  goldador: {
    parents: "Golden Retriever and Labrador Retriever",
    p: "Bred by assistance dog organisations, including Guide Dogs in the UK, because the cross combines two steady, trainable retrievers.",
    k: "Many work as guide and assistance dogs.",
  },
  "bull-arab": {
    parents: "Bull Terrier, Greyhound and German Shorthaired Pointer",
    p: "Developed in Australia in the 1970s by Mike Hodgens as a pig-hunting dog, combining scent, speed and grip.",
    k: "It has a strong prey drive and is still used mainly by hunters.",
  },
  "king-shepherd": {
    parents: "German Shepherd Dog and Alaskan Malamute or Shiloh Shepherd",
    p: "Developed in the United States in the 1990s by David Turkheimer and Shelley Watts-Cross, aiming for a larger, calmer, healthier shepherd.",
    k: "It is very large and needs training from puppyhood.",
  },
  "northern-inuit-dog": {
    parents: "Siberian Husky, Alaskan Malamute and German Shepherd Dog",
    p: "Developed in the UK in the late 1980s to look like a wolf while being a family dog. Northern Inuits played the direwolves in the TV series Game of Thrones.",
    k: "Their popularity after the show led to many being given up, so research carefully.",
  },
  "staffy-bull-bullmastiff": {
    parents: "Staffordshire Bull Terrier and Bullmastiff",
    p: "A cross of two English bull breeds that combines the Staffy's energy with the Bullmastiff's size.",
    k: "It is strong and loyal and needs a confident owner.",
  },
  cavapoo: { p: "Popular in Australia and the UK since the 1990s as a small, low-shedding family dog.", k: "Heart screening of the Cavalier parent matters, because Cavaliers are prone to mitral valve disease." },
  cavachon: { p: "First bred in the United States in the 1990s as a small companion.", k: "Heart screening of the Cavalier parent matters, because Cavaliers are prone to mitral valve disease." },
  aussiedoodle: { p: "Bred in North America since the late 1990s, combining a herding breed's drive with a lower-shedding coat.", k: "Both parents are high-energy, so this is not a low-exercise dog." },
  bernedoodle: { p: "First intentionally bred in 2003 by Sherry Rupke of SwissRidge Kennels in Ontario, Canada.", k: "It was bred partly to offset the Bernese Mountain Dog's short lifespan, though crossing doesn't guarantee that." },
  sheepadoodle: { p: "Bred in the United States since the 2000s, combining two herding-type dogs with long coats.", k: "Its fluffy coat needs regular grooming." },
  pomsky: { p: "A cross that became popular online in the 2010s for its Husky look in a small size. Most are bred by artificial insemination, with a Husky mother.", k: "Size varies widely, and it can inherit the Husky's escape skills." },
  chiweenie: { p: "A small cross that became popular in the US in the 1990s.", k: "Its long back means jumping and weight should be managed to protect the spine." },
  whoodle: { p: "Bred in the United States as a low-shedding family dog, crossing the Soft Coated Wheaten Terrier with the Poodle.", k: "It is bouncy and friendly, and inherits the Wheaten's jumping greeting." },
  shichon: { p: "Also called the Teddy Bear dog, it was bred in the United States from the 1990s as a low-shedding companion.", k: "It is calm and gentle with families." },
  morkie: { p: "A small companion cross popular in the US since the 2000s.", k: "It is affectionate and lively, and needs gentle handling because of its size." },
  "shih-poo": { p: "A companion cross bred in the United States since the 1990s for a small, low-shedding dog.", k: "It is affectionate and adapts well to apartments." },
  pitsky: { p: "A cross of two strong, high-energy breeds that has become common in shelters.", k: "It needs lots of exercise and a secure garden." },
  "german-sheprador": { p: "A cross of two working breeds sometimes used as a service and search dog.", k: "It is intelligent and very active." },
  shepsky: { p: "A cross of the German Shepherd and the Siberian Husky, also called the Gerberian Shepsky.", k: "It is energetic and vocal, and can be an escape artist." },
};

import type { MetadataRoute } from "next";
import { ALL_QUESTIONS } from "./help-center/questions/data";
import { COMPARISONS } from "./data/breeds/comparisons";
import { articles } from "./data/articles";
import { guides } from "./data/guides";
import { howToArticles } from "./data/howto";
import { symptomArticles } from "./data/symptom-articles";
import { breedArticles } from "./data/breed-articles";
import { definitionArticles } from "./data/definition-articles";
import { pillarPages } from "./data/pillars";
import { templateDocs } from "./data/templates";
import { COMPARE_PAGES, CHECKED_ISO } from "./data/compare";
import { TOOLS, TOOLS_REVIEWED_ISO } from "./data/tools";
import { breedsByAnimal, BREED_CONTENT_UPDATED } from "./data/breeds";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hushku.app";
/** When the site's own pages last changed. Update it when they change, not on every build. */
const TODAY = new Date("2026-10-14");

/** An article's last-updated date from its data ("April 2026", "2026-03-02"), else the site date. */
function contentDate(item: { lastUpdated?: string; updatedDate?: string; publishDate?: string }): Date {
  for (const raw of [item.lastUpdated, item.updatedDate, item.publishDate]) {
    if (!raw) continue;
    const d = new Date(/^[A-Za-z]+ \d{4}$/.test(raw) ? `1 ${raw}` : raw);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return TODAY;
}

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  // ── Core ─────────────────────────────────────────────────────────────────
  { url: BASE_URL,                              changeFrequency: "weekly",  priority: 1.0, lastModified: TODAY },
  { url: `${BASE_URL}/about`,                   changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/about/editorial`,          changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/roadmap`,                 changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/join`,                    changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/privacy`,                 changeFrequency: "yearly",  priority: 0.4, lastModified: TODAY },
  { url: `${BASE_URL}/terms`,                   changeFrequency: "yearly",  priority: 0.4, lastModified: TODAY },

  // ── Feature pages ────────────────────────────────────────────────────────
  { url: `${BASE_URL}/adoption`,                changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/playdates`,               changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/social`,                  changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/vets`,                  changeFrequency: "weekly",  priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/fostering`,               changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/shelters`,                changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/lost-and-found`,          changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/health`,                  changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/care-team`,                  changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/health/daily-care`,       changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/health/reminders`,        changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/health/weight-tracker`,   changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/health/records`,          changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/health/flea-tick`,        changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/health/heat-cycle`,       changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },

  // ── Help Center ──────────────────────────────────────────────────────────
  { url: `${BASE_URL}/help-center`,                          changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/playdate-matching`,        changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/adoption-fostering`,       changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/shelters`,                 changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/lost-and-found`,           changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/health-care`,              changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/care-team`,              changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/questions`,              changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/messaging`,                changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/help-center/your-profile`,             changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },

  // ── Content hubs ─────────────────────────────────────────────────────────
  { url: `${BASE_URL}/resources`,               changeFrequency: "daily",   priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/tools`,                   changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/templates`,               changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/breeds`,                  changeFrequency: "weekly",  priority: 0.9, lastModified: TODAY },
  { url: `${BASE_URL}/breeds/dogs`,             changeFrequency: "weekly",  priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/breeds/cats`,             changeFrequency: "weekly",  priority: 0.8, lastModified: TODAY },

  // ── Tools ────────────────────────────────────────────────────────────────
  { url: `${BASE_URL}/tools/calorie-calculator`,  changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/water-calculator`,    changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/exercise-calculator`, changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/puppy-weight`,        changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/heat-cycle-calculator`, changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/whelping-calculator`, changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/symptom-checker`,     changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/toxic-food`,          changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/vaccine-tracker`,     changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/breed-compare`,       changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/tools/feeding-calculator`,  changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/age-calculator`,      changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/pet-bmi`,             changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/insurance-cost`,      changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/pet-health-quiz`,     changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/first-aid-quiz`,      changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/best-dog-quiz`,       changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/best-cat-quiz`,       changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/pet-sitter-cost`,     changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/sitting-comparison`,  changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/tools/packing-checklist`,   changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/tools/name-generator`,      changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/tools/photo-tips`,          changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/tools/birthday-countdown`,  changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },
  { url: `${BASE_URL}/tools/pet-owner-quiz`,      changeFrequency: "monthly", priority: 0.6, lastModified: TODAY },

  // ── New template static entries ──────────────────────────────────────────
  { url: `${BASE_URL}/templates/pet-sitting-agreement-template`,  changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-profile-to-adopt-template`,   changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-sitter-instructions-template`,changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/templates/missing-pet-poster-template`,     changeFrequency: "monthly", priority: 0.8, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-care-instructions-template`,  changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-resume-template`,             changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-boarding-contract-template`,  changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-id-card-template`,            changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
  { url: `${BASE_URL}/templates/pet-birth-certificate-template`,  changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Resource articles ───────────────────────────────────────────────────
  const resourceRoutes: MetadataRoute.Sitemap = [
    ...pillarPages.map((p) => ({
      url: `${BASE_URL}/resources/${p.slug}`,
      lastModified: contentDate(p as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...guides.map((g) => ({
      url: `${BASE_URL}/resources/${g.slug}`,
      lastModified: contentDate(g as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...breedArticles.map((b) => ({
      url: `${BASE_URL}/resources/${b.slug}`,
      lastModified: contentDate(b as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...howToArticles.map((h) => ({
      url: `${BASE_URL}/resources/${h.slug}`,
      lastModified: contentDate(h as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...symptomArticles.map((s) => ({
      url: `${BASE_URL}/resources/${s.slug}`,
      lastModified: contentDate(s as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...definitionArticles.map((d) => ({
      url: `${BASE_URL}/resources/${d.slug}`,
      lastModified: contentDate(d as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${BASE_URL}/resources/${a.slug}`,
      lastModified: contentDate(a as { lastUpdated?: string; publishDate?: string }),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ── Templates ───────────────────────────────────────────────────────────
  const templateRoutes: MetadataRoute.Sitemap = templateDocs.map((t) => ({
    url: `${BASE_URL}/templates/${t.slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
    priority: t.tier === 1 ? 0.8 : t.tier === 2 ? 0.7 : 0.6,
  }));

  // ── Breed pages ──────────────────────────────────────────────────────────
  const breedRoutes: MetadataRoute.Sitemap = Object.entries(breedsByAnimal).flatMap(
    ([animal, breeds]) =>
      breeds.map((b) => ({
        url: `${BASE_URL}/breeds/${animal}/${b.slug}`,
        lastModified: new Date(BREED_CONTENT_UPDATED),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  );

  const questionRoutes: MetadataRoute.Sitemap = ALL_QUESTIONS.map((q) => ({
    url: `${BASE_URL}/help-center/questions/${q.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: TODAY,
  }));

  const compareRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/breeds/compare`, changeFrequency: "monthly", priority: 0.7, lastModified: TODAY },
    ...COMPARISONS.map((c) => ({ url: `${BASE_URL}/breeds/compare/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: TODAY })),
    { url: `${BASE_URL}/compare`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date(CHECKED_ISO) },
    ...TOOLS.map((t) => ({ url: `${BASE_URL}/tools/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: new Date(TOOLS_REVIEWED_ISO) })),
    ...COMPARE_PAGES.map((c) => ({ url: `${BASE_URL}/compare/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: new Date(CHECKED_ISO) })),
  ];

  // One entry per URL: the generated routes win over any hand-listed duplicate.
  const all = [...STATIC_ROUTES, ...resourceRoutes, ...templateRoutes, ...breedRoutes, ...questionRoutes, ...compareRoutes];
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of all) byUrl.set(entry.url, entry);
  return [...byUrl.values()];
}

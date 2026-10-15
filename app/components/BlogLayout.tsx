import Link from "next/link";
import { Check, ChevronRight, Minus } from "lucide-react";
import { Article, METHODOLOGY_SECTION, HUSHKU_FIT } from "../data/articles";
import RelatedTools from "./RelatedTools";
import WaitingList from "./WaitingList";

/** Paragraphs from the article's light markup: blank-line paragraphs, **bold**, and our own inline links. */
function Rich({ text, className = "" }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i} className={className} dangerouslySetInnerHTML={{ __html: p.trim().replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/class="[^"]*"/g, 'class="font-medium text-brand-text underline underline-offset-[3px]"') }} />
      ))}
    </>
  );
}

const articleToolMap: Record<string, string[]> = {
  "best-dog-walking-apps":          ["pet-sitter-cost", "sitting-comparison", "pet-owner-quiz"],
  "best-pet-sitting-apps":          ["pet-sitter-cost", "sitting-comparison", "packing-checklist"],
  "best-pet-social-media-apps":     ["photo-tips", "pet-owner-quiz", "birthday-countdown"],
  "best-pet-dating-playdate-apps":  ["best-dog-quiz", "breed-compare", "age-calculator"],
  "best-pet-health-parenting-apps": ["symptom-checker", "pet-health-quiz", "vaccine-tracker"],
  "best-virtual-vet-telehealth-apps":["symptom-checker", "first-aid-quiz", "vaccine-tracker"],
  "best-pet-adoption-rescue-apps":  ["best-dog-quiz", "best-cat-quiz", "breed-compare", "name-generator"],
  "best-pet-fostering-network-apps":["best-dog-quiz", "best-cat-quiz", "insurance-cost"],
  "best-gps-pet-tracking-apps":     ["symptom-checker", "first-aid-quiz", "pet-health-quiz"],
  "best-lost-pet-recovery-apps":    ["symptom-checker", "first-aid-quiz", "vaccine-tracker"],
  "best-dog-training-apps":         ["age-calculator", "feeding-calculator", "pet-owner-quiz"],
  "best-pet-camera-monitoring-apps":["symptom-checker", "first-aid-quiz", "pet-health-quiz"],
  "best-pet-diet-nutrition-apps":   ["feeding-calculator", "pet-bmi", "toxic-food", "age-calculator"],
  "best-pet-first-aid-apps":        ["first-aid-quiz", "symptom-checker", "vaccine-tracker", "toxic-food"],
  "best-pet-insurance-estimators":  ["insurance-cost", "pet-health-quiz", "vaccine-tracker"],
  "best-pet-photography-apps":      ["photo-tips", "birthday-countdown", "pet-owner-quiz"],
  "best-pet-travel-hotel-finder-apps":["packing-checklist", "pet-sitter-cost", "insurance-cost"],
  "best-pet-ecommerce-shopping-apps":["feeding-calculator", "pet-bmi", "toxic-food"],
  "best-dog-park-finder-apps":      ["breed-compare", "best-dog-quiz", "age-calculator"],
  "best-all-in-one-pet-super-apps": ["symptom-checker", "feeding-calculator", "breed-compare", "insurance-cost"],
};

const firstSentence = (t: string) => (t.match(/^.*?[.!?](\s|$)/)?.[0] ?? t).trim();

export default function BlogLayout({ article, allArticles }: { article: Article; allArticles: Article[] }) {
  const related = allArticles.filter((a) => article.relatedSlugs.includes(a.slug));
  const fit = HUSHKU_FIT[article.slug];
  const apps = article.competitors;
  const h2 = "text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label";
  const body = "text-[17px] leading-[28px] text-label-2";

  return (
    <div className="bg-white">
      <section className="px-4 pt-10 pb-12 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/resources" className="hover:text-label hover:underline underline-offset-[3px]">Resources</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">{article.shortTitle}</li>
            </ol>
          </nav>
          <p className="text-[15px] font-semibold text-brand-text">App roundup</p>
          <h1 className="text-[36px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-label md:text-[48px] md:leading-[1.08]">{article.title}</h1>
          <p className="text-[19px] leading-[1.45] text-label-2 md:text-[21px]">{article.seoDescription}</p>
          <p className="text-[13px] text-label-2">
            Updated {article.lastUpdated} · {apps.length} apps compared · <a href="#how-we-compare" className="underline underline-offset-[3px] hover:text-label">How we compare apps</a>
          </p>
          <p className="rounded-2xl bg-bg-2 px-5 py-4 text-[15px] leading-[22px] text-label-2">
            <strong className="font-semibold text-label">Disclosure:</strong> {METHODOLOGY_SECTION.disclaimer}
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto flex max-w-[880px] flex-col gap-14">
          <div className="flex flex-col gap-4"><Rich text={article.introduction} className={body} /></div>

          {apps.length ? (
            <div className="flex flex-col gap-4">
              <h2 className={h2}>At a glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-separate border-spacing-0 text-[15px] leading-[22px]">
                  <thead>
                    <tr>
                      <th scope="col" className="border-b border-separator p-3 text-left font-semibold text-label">App</th>
                      <th scope="col" className="border-b border-separator p-3 text-left font-semibold text-label">What it is</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apps.map((a) => (
                      <tr key={a.name}>
                        <th scope="row" className="border-b border-separator p-3 text-left align-top font-medium text-label"><a href={`#${a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="hover:underline underline-offset-[3px]">{a.name}</a></th>
                        <td className="border-b border-separator p-3 text-label-2">{firstSentence(a.description)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-10">
            <h2 className={h2}>The apps</h2>
            {apps.map((a) => (
              <article key={a.name} id={a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="flex scroll-mt-24 flex-col gap-4 border-t border-separator pt-8">
                <h3 className="text-[21px] font-semibold text-label">{a.name}</h3>
                <p className={body}>{a.description}</p>
                {a.preTestHype ? <p className={body}>{a.preTestHype}</p> : null}
                {a.costAnalysis ? (
                  <div className="rounded-2xl bg-bg-2 p-5">
                    <h4 className="text-[15px] font-semibold text-label">Pricing</h4>
                    <p className="mt-1 text-[15px] leading-[24px] text-label-2">{a.costAnalysis}</p>
                    <p className="mt-2 text-[13px] text-label-2">Check the app&apos;s own site for current prices.</p>
                  </div>
                ) : null}
                {a.pros.length || a.cons.length ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-[15px] font-semibold text-label">Strengths</h4>
                      <ul className="flex flex-col gap-2">{a.pros.map((p) => <li key={p} className="flex gap-2 text-[15px] leading-[22px] text-label-2"><Check size={18} className="mt-0.5 flex-none text-success" aria-hidden />{p}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-[15px] font-semibold text-label">Drawbacks</h4>
                      <ul className="flex flex-col gap-2">{a.cons.map((c) => <li key={c} className="flex gap-2 text-[15px] leading-[22px] text-label-2"><Minus size={18} className="mt-0.5 flex-none text-label-3" aria-hidden />{c}</li>)}</ul>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          {fit ? (
            <aside className="flex flex-col gap-4 rounded-3xl bg-brand-tint p-6 md:p-8" aria-labelledby="hushku-fit">
              <p className="text-[13px] font-semibold text-brand-text">Our app · not ranked</p>
              <h2 id="hushku-fit" className="text-[24px] leading-[1.25] font-semibold text-label">{fit.title}</h2>
              <p className="text-[17px] leading-[26px] text-label">{fit.body}</p>
              <WaitingList cta="Tell me when it launches" source={`roundup:${article.slug}`} />
              <Link href={fit.href} className="inline-flex items-center gap-1 text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">{fit.feature} <ChevronRight size={16} aria-hidden /></Link>
            </aside>
          ) : null}

          {article.buyersGuide ? (
            <div className="flex flex-col gap-4">
              <h2 className={h2}>{article.buyersGuide.title}</h2>
              <Rich text={article.buyersGuide.intro} className={body} />
              <div className="flex flex-col gap-5">
                {article.buyersGuide.points.map((pt) => (
                  <div key={pt.h}>
                    <h3 className="text-[19px] font-semibold text-label">{pt.h}</h3>
                    <p className={`mt-1 ${body}`}>{pt.p}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {article.faqs?.length ? (
            <div className="flex flex-col gap-4">
              <h2 className={h2}>Questions</h2>
              <div className="flex flex-col divide-y divide-separator border-y border-separator">
                {article.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <h3 className="text-[17px] font-semibold text-label">{f.q}</h3>
                    <p className="mt-2 text-[17px] leading-[26px] text-label-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-3">
            <h2 className={h2}>Bottom line</h2>
            <Rich text={article.conclusion} className={body} />
          </div>

          <div id="how-we-compare" className="flex scroll-mt-24 flex-col gap-3 rounded-3xl bg-bg-2 p-6 md:p-8">
            <h2 className="text-[21px] font-semibold text-label">{METHODOLOGY_SECTION.title}</h2>
            <ul className="flex flex-col gap-3">
              {METHODOLOGY_SECTION.points.map((pt) => (
                <li key={pt} className="text-[15px] leading-[24px] text-label-2" dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-label">$1</strong>') }} />
              ))}
            </ul>
            <p className="text-[15px] text-label-2">See also our <Link href="/about/editorial" className="font-medium text-brand-text hover:underline underline-offset-[3px]">editorial standards</Link>.</p>
          </div>

          <RelatedTools slugs={articleToolMap[article.slug] ?? ["symptom-checker", "feeding-calculator", "breed-compare"]} />

          {related.length ? (
            <div className="flex flex-col gap-4">
              <h2 className={h2}>More roundups</h2>
              <ul className="flex flex-col border-t border-separator">
                {related.map((r) => (
                  <li key={r.slug} className="border-b border-separator">
                    <Link href={`/resources/${r.slug}`} className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                      <span className="flex-1 group-hover:underline underline-offset-[3px]">{r.title}</span>
                      <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

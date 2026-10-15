import type { Guide } from "../data/guides";
import ArticleShell, { ArticleSection, Prose, slugify } from "./ArticleShell";

export default function GuideLayout({ guide: g }: { guide: Guide }) {
  const clean = (t: string) => t.replace(/^Chapter \d+:\s*/i, "").replace(/^\d+\.\s*/, "");
  const toc = g.chapters.map((c) => ({ id: slugify(clean(c.title)), label: clean(c.title) }));
  const isHtml = (s: string) => /<(p|h4|ul|ol|div)[\s>]/.test(s);
  return (
    <ArticleShell slug={g.slug} kind="In-depth guide" h1={g.title} lead={g.seoDescription} answer={g.quickAnswer} updated={g.lastUpdated} readTime={g.readTime} toc={toc} faqs={g.faqs ?? []} relatedSlugs={g.relatedSlugs} cta={g.appCta}>
      <section aria-label="Introduction">{isHtml(g.introduction) ? <Prose html={g.introduction} /> : <Prose text={g.introduction} />}</section>
      {g.chapters.map((c) => (
        <ArticleSection key={c.title} id={slugify(clean(c.title))} title={clean(c.title)}>
          {isHtml(c.content) ? <Prose html={c.content} /> : <Prose text={c.content} />}
        </ArticleSection>
      ))}
      <ArticleSection id="summary" title="The bottom line">{isHtml(g.conclusion) ? <Prose html={g.conclusion} /> : <Prose text={g.conclusion} />}</ArticleSection>
    </ArticleShell>
  );
}

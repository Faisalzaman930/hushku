import type { DefinitionArticle } from "../data/definition-articles";
import ArticleShell, { ArticleSection, Prose, slugify } from "./ArticleShell";
import { md } from "../utils/markdown";

const list = (items: string[]) => (
  <ul className="article-body">{items.map((x) => <li key={x} dangerouslySetInnerHTML={{ __html: md(x).replace(/^<p>|<\/p>$/g, "") }} />)}</ul>
);

export default function DefinitionLayout({ article: a }: { article: DefinitionArticle }) {
  const blocks = [
    { id: "symptoms", label: "Signs and symptoms", items: a.symptoms },
    { id: "causes-and-risk", label: "Causes and risk factors", items: a.causes },
    { id: "treatment", label: "Treatment", items: a.treatment },
    { id: "prevention", label: "Prevention", items: a.prevention },
  ].filter((b) => b.items?.length);
  const toc = [{ id: "definition", label: "Definition" }, ...blocks.map((b) => ({ id: b.id, label: b.label })), ...a.sections.map((s) => ({ id: slugify(s.title), label: s.title }))];
  const medical = /health|parvo|bloat|dysplasia|kennel|anxiety/.test(a.slug);
  return (
    <ArticleShell slug={a.slug} kind="Explainer" h1={a.title} lead={a.seoDescription} answer={a.quickAnswer} updated={a.lastUpdated} readTime={a.readTime} toc={toc} faqs={a.faqs} relatedSlugs={a.relatedSlugs} medical={medical}>
      <ArticleSection id="definition" title="Definition">
        <p className="rounded-2xl border-l-4 border-brand bg-bg-2 px-5 py-4 text-[17px] leading-[27px] text-label" dangerouslySetInnerHTML={{ __html: md(a.definition).replace(/^<p>|<\/p>$/g, "") }} />
        <Prose text={a.introduction} />
      </ArticleSection>
      {blocks.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map((b) => (
            <section key={b.id} id={b.id} aria-labelledby={`${b.id}-h`} className="scroll-mt-24 rounded-3xl bg-bg-2 p-5">
              <h2 id={`${b.id}-h`} className="mb-2 text-[19px] font-semibold text-label">{b.label}</h2>
              {list(b.items!)}
            </section>
          ))}
        </div>
      ) : null}
      {a.sections.map((s) => (
        <ArticleSection key={s.title} id={slugify(s.title)} title={s.title}><Prose text={s.content} /></ArticleSection>
      ))}
    </ArticleShell>
  );
}

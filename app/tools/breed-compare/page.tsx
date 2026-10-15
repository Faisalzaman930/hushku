import Link from "next/link";
import ToolPage from "../../components/ToolPage";
import BreedCompareTool from "./BreedCompareTool";
import { COMPARISONS } from "../../data/breeds/comparisons";

export default function Page() {
  return (
    <ToolPage
      slug="breed-compare"
      after={
        <section aria-labelledby="popular-h" className="flex flex-col gap-4">
          <h2 id="popular-h" className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Popular comparisons</h2>
          <ul className="flex flex-wrap gap-2">
            {COMPARISONS.slice(0, 18).map((c) => (
              <li key={c.slug}>
                <Link href={`/breeds/compare/${c.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label hover:bg-separator">
                  {c.a.name} vs {c.b.name}
                </Link>
              </li>
            ))}
            <li><Link href="/breeds/compare" className="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium text-brand-text ring-1 ring-separator hover:bg-surface">All comparisons</Link></li>
          </ul>
        </section>
      }
    >
      <BreedCompareTool />
    </ToolPage>
  );
}

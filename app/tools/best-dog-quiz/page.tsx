import Link from "next/link";
import ToolPage from "../../components/ToolPage";
import BestDogQuizClient from "./BestDogQuizClient";

const BREEDS = [
  { name: "Labrador Retriever", slug: "labrador-retriever", trait: "First-time owners" },
  { name: "Golden Retriever", slug: "golden-retriever", trait: "Families" },
  { name: "Cavalier King Charles Spaniel", slug: "cavalier-king-charles-spaniel", trait: "Companionship" },
  { name: "French Bulldog", slug: "french-bulldog", trait: "Apartments" },
  { name: "Poodle", slug: "poodle", trait: "Low shedding" },
  { name: "Border Collie", slug: "border-collie", trait: "Very active owners" },
  { name: "Australian Shepherd", slug: "australian-shepherd", trait: "Active homes with space" },
  { name: "German Shepherd Dog", slug: "german-shepherd-dog", trait: "Experienced owners" },
  { name: "Beagle", slug: "beagle", trait: "Families" },
  { name: "Dachshund", slug: "dachshund", trait: "Moderate lifestyles" },
  { name: "Chihuahua", slug: "chihuahua", trait: "Small homes" },
  { name: "Bernese Mountain Dog", slug: "bernese-mountain-dog", trait: "Gentle giants" },
];

export default function Page() {
  return (
    <ToolPage
      slug="best-dog-quiz"
      after={
        <section aria-labelledby="breeds-h" className="flex flex-col gap-4">
          <h2 id="breeds-h" className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Breeds the quiz often recommends</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {BREEDS.map((b) => (
              <li key={b.slug}>
                <Link href={`/breeds/dogs/${b.slug}`} className="flex flex-col rounded-2xl bg-bg-2 px-4 py-3 hover:bg-surface">
                  <span className="text-[17px] font-semibold text-label">{b.name}</span>
                  <span className="text-[15px] text-label-2">Often suits: {b.trait}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      }
    >
      <BestDogQuizClient />
    </ToolPage>
  );
}

import { dogs, cats } from "../../app/data/breeds/index";
import { writeFileSync } from "fs";
writeFileSync(process.argv[2], JSON.stringify([...dogs, ...cats].map(b => ({ slug: b.slug, name: b.name, animal: b.animal, image: b.image }))));

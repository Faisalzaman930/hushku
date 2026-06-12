/**
 * Fixes data quality issues across all dog breeds in dogs.ts:
 *
 * 1. SIZE labels — systematically inflated (breeds are one category too high).
 *    Corrects based on actual weightKg using AKC-aligned thresholds:
 *    Small ≤10kg | Medium 10–22kg | Large 22–45kg | Very Large >45kg
 *
 * 2. FRIEND_STRANGER_GAP — 6 breeds where overall friendliness is 3+ points
 *    above strangerFriendly, producing contradictory "outgoing" overview text.
 *
 * 3. Doberman Pinscher TRAIN_GAP — trainability=2 but easyToTrain=5 (inverted).
 *
 * 4. Dogue de Bordeaux ENERGY_EXERCISE_GAP — energy=2 but exerciseNeeds=5.
 *
 * 5. NOVICE_TRAIN errors — Shiba Inu and Basenji marked goodForNovice=4
 *    despite being notoriously difficult for first-time owners.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../app/data/breeds/dogs.ts');
let src = fs.readFileSync(filePath, 'utf8');

let sizeFixed = 0;
let scoreFixed = 0;

// ── 1. SIZE CORRECTIONS ──────────────────────────────────────────────────────
// Parse each breed block: find weightKg, compute correct size, replace size field.
// Strategy: split into breed blocks, fix each, rejoin.

function correctSize(weightKg) {
  if (weightKg === null || isNaN(weightKg)) return null;
  if (weightKg <= 10) return 'Small';
  if (weightKg <= 22) return 'Medium';
  if (weightKg <= 45) return 'Large';
  return 'Very Large';
}

// Process block by block — split on top-level breed object openings
// We work line by line to be safe with the large file
const lines = src.split('\n');
const out = [];
let inBreed = false;
let currentWeightKg = null;
let pendingSizeLine = null;
let pendingSizeIdx = null;

// Two-pass: first collect all (slug, weightKg, currentSize) tuples,
// then do targeted string replacements.

// Extract breed data for fixes
const breeds = [];
const re = /slug:\s*"([^"]+)"/;
const weightRe = /weightKg:\s*([\d.]+|null)/;
const sizeRe = /size:\s*"([^"]+)"/;

// Find each breed block by locating slug lines, then reading forward for size/weightKg
let i = 0;
while (i < lines.length) {
  const slugMatch = lines[i].match(re);
  if (slugMatch) {
    const slug = slugMatch[1];
    // Look ahead up to 20 lines for size and weightKg
    let size = null, weightKg = null, sizeLine = -1;
    for (let j = i; j < Math.min(i + 25, lines.length); j++) {
      if (size === null) {
        const sm = lines[j].match(sizeRe);
        if (sm) { size = sm[1]; sizeLine = j; }
      }
      if (weightKg === null) {
        const wm = lines[j].match(weightRe);
        if (wm) { weightKg = wm[1] === 'null' ? null : parseFloat(wm[1]); }
      }
      if (size !== null && weightKg !== null) break;
    }
    if (size !== null && weightKg !== null) {
      breeds.push({ slug, size, weightKg, sizeLine });
    }
  }
  i++;
}

console.log('Breeds found: ' + breeds.length);

// Apply size corrections
for (const b of breeds) {
  if (b.weightKg === null) continue;
  const correct = correctSize(b.weightKg);
  if (correct && correct !== b.size) {
    const oldLine = lines[b.sizeLine];
    const newLine = oldLine.replace(`"${b.size}"`, `"${correct}"`);
    if (oldLine !== newLine) {
      lines[b.sizeLine] = newLine;
      sizeFixed++;
      // console.log('SIZE: ' + b.slug + ' ' + b.size + ' -> ' + correct + ' (' + b.weightKg + 'kg)');
    }
  }
}

src = lines.join('\n');

// ── 2. SPECIFIC SCORE FIXES ──────────────────────────────────────────────────
// Each fix targets a known breed block by slug and replaces a specific score value.

function fixScore(slug, field, oldVal, newVal) {
  // Find the slug line, then within the next 60 lines find the field and replace
  const slugIdx = src.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) { console.warn('Breed not found: ' + slug); return; }

  // Find the closing }  of the scores block
  const breedEnd = src.indexOf('\n  },', slugIdx + 100);
  const breedBlock = src.substring(slugIdx, breedEnd);

  const fieldRe = new RegExp('(' + field + ':\\s*)' + oldVal + '(,)');
  if (!fieldRe.test(breedBlock)) {
    console.warn('Field not matched: ' + slug + '.' + field + '=' + oldVal);
    return;
  }

  const fixedBlock = breedBlock.replace(fieldRe, '$1' + newVal + '$2');
  src = src.substring(0, slugIdx) + fixedBlock + src.substring(slugIdx + breedBlock.length);
  scoreFixed++;
  console.log('SCORE fixed: ' + slug + '.' + field + ' ' + oldVal + ' -> ' + newVal);
}

// FRIEND_STRANGER_GAP — reduce overall friendliness to be consistent with strangerFriendly
// Dachshund: friendliness 4->3 (suspicious of strangers is a breed characteristic)
fixScore('dachshund', 'friendliness', 4, 3);
// Maremma Sheepdog: friendliness 4->2 (livestock guardian, very wary of strangers)
fixScore('maremma-sheepdog', 'friendliness', 4, 2);
// Puli: friendliness 5->3 (devoted to family but aloof with strangers)
fixScore('puli', 'friendliness', 5, 3);
// Pyrenean Mastiff: friendliness 4->2 (classic guardian breed, aloof with strangers)
fixScore('pyrenean-mastiff', 'friendliness', 4, 2);
// Saluki: friendliness 4->2 (reserved and aloof — a defining characteristic)
fixScore('saluki', 'friendliness', 4, 2);
// Tibetan Mastiff: friendliness 5->3 (loyal to family, strongly aloof with strangers)
fixScore('tibetan-mastiff', 'friendliness', 5, 3);

// TRAIN_GAP — Doberman: trainability was 2 (should be 5), easyToTrain is correctly 5
fixScore('doberman-pinscher', 'trainability', 2, 5);

// ENERGY_EXERCISE_GAP — Dogue de Bordeaux: exerciseNeeds 5 -> 2 (low energy, low exercise needs)
fixScore('dogue-de-bordeaux', 'exerciseNeeds', 5, 2);

// NOVICE_TRAIN — Shiba Inu and Basenji are notoriously NOT for novice owners
fixScore('shiba-inu', 'goodForNovice', 4, 1);
fixScore('basenji', 'goodForNovice', 4, 1);

// Write the file
fs.writeFileSync(filePath, src, 'utf8');
console.log('\nDone.');
console.log('  Size labels corrected: ' + sizeFixed);
console.log('  Score fields corrected: ' + scoreFixed);

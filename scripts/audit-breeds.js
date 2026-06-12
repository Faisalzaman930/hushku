const fs = require('fs');
const src = fs.readFileSync('app/data/breeds/dogs.ts', 'utf8');

// Parse breeds by splitting on slug: markers
const blocks = src.split(/(?=\{\s*\n\s*slug:)/);
const breeds = [];

for (const block of blocks) {
  const g = (key) => {
    const m = block.match(new RegExp(key + ':\\s*([^,\\n]+)'));
    return m ? m[1].trim().replace(/[\"']/g, '') : null;
  };
  const n = (key) => {
    const v = g(key);
    return v === 'null' || v === null ? null : parseFloat(v);
  };
  const slug = g('slug');
  if (!slug) continue;
  breeds.push({
    slug, name: g('name'), size: g('size'),
    weightKg: n('weightKg'), heightCm: n('heightCm'),
    apartmentFriendly: n('apartmentFriendly'), exerciseNeeds: n('exerciseNeeds'),
    energy: n('energy'), strangerFriendly: n('strangerFriendly'),
    friendliness: n('friendliness'), affectionate: n('affectionate'),
    trainability: n('trainability'), easyToTrain: n('easyToTrain'),
    intelligence: n('intelligence'), goodForNovice: n('goodForNovice'),
    preyDrive: n('preyDrive'), kidFriendly: n('kidFriendly'),
    shedding: n('shedding'), easyToGroom: n('easyToGroom'),
  });
}

console.log('Total breeds parsed: ' + breeds.length);

const issues = [];

// 1. Size vs actual weight
// Based on AKC/Kennel Club size classifications
const sizeExpected = {
  'Small': [0, 12],
  'Medium': [8, 28],
  'Large': [22, 50],
  'Very Large': [36, 999],
};
for (const b of breeds) {
  if (!b.weightKg || !b.size || !sizeExpected[b.size]) continue;
  const [lo, hi] = sizeExpected[b.size];
  if (b.weightKg < lo - 5 || b.weightKg > hi + 8) {
    issues.push({ type: 'SIZE', breed: b.name, detail: 'declared=' + b.size + ', weightKg=' + b.weightKg });
  }
}

// 2. Apartment friendly=4/5 but exerciseNeeds=4/5 (contradictory claim)
for (const b of breeds) {
  if (b.apartmentFriendly >= 4 && b.exerciseNeeds >= 4) {
    issues.push({ type: 'APT_EXERCISE', breed: b.name, detail: 'apt=' + b.apartmentFriendly + ', exercise=' + b.exerciseNeeds });
  }
}

// 3. Overall friendliness much higher than strangerFriendly (>=3 gap)
// Flags breeds that look "outgoing overall" but are actually aloof with strangers
for (const b of breeds) {
  if (b.friendliness !== null && b.strangerFriendly !== null && b.friendliness - b.strangerFriendly >= 3) {
    issues.push({ type: 'FRIEND_STRANGER_GAP', breed: b.name, detail: 'friendliness=' + b.friendliness + ', strangerFriendly=' + b.strangerFriendly });
  }
}

// 4. trainability vs easyToTrain large gap (>=3)
for (const b of breeds) {
  if (b.trainability !== null && b.easyToTrain !== null && Math.abs(b.trainability - b.easyToTrain) >= 3) {
    issues.push({ type: 'TRAIN_GAP', breed: b.name, detail: 'trainability=' + b.trainability + ', easyToTrain=' + b.easyToTrain });
  }
}

// 5. Energy vs exerciseNeeds large gap (>=3) — energy and exercise should correlate
for (const b of breeds) {
  if (b.energy !== null && b.exerciseNeeds !== null && Math.abs(b.energy - b.exerciseNeeds) >= 3) {
    issues.push({ type: 'ENERGY_EXERCISE_GAP', breed: b.name, detail: 'energy=' + b.energy + ', exerciseNeeds=' + b.exerciseNeeds });
  }
}

// 6. goodForNovice=4/5 but easyToTrain=1/2 — contradictory for a novice recommendation
for (const b of breeds) {
  if (b.goodForNovice !== null && b.goodForNovice >= 4 && b.easyToTrain !== null && b.easyToTrain <= 2) {
    issues.push({ type: 'NOVICE_TRAIN', breed: b.name, detail: 'goodForNovice=' + b.goodForNovice + ', easyToTrain=' + b.easyToTrain });
  }
}

// 7. preyDrive=5 but strangerFriendly=5 (unusual combination — most high-prey dogs are at least somewhat alert)
// Only flag when combined with low barkiness too — likely data error
// Actually skip this — it can be valid

// Group and print
const grouped = {};
for (const issue of issues) {
  if (!grouped[issue.type]) grouped[issue.type] = [];
  grouped[issue.type].push(issue.breed + ' — ' + issue.detail);
}

const typeDescriptions = {
  SIZE: 'Size label does not match weight',
  APT_EXERCISE: 'Apartment-friendly=4/5 but exerciseNeeds=4/5 (contradiction)',
  FRIEND_STRANGER_GAP: 'Overall friendliness 3+ points above strangerFriendly',
  TRAIN_GAP: 'trainability and easyToTrain differ by 3+',
  ENERGY_EXERCISE_GAP: 'energy and exerciseNeeds differ by 3+',
  NOVICE_TRAIN: 'Recommended for novice owners but hard to train',
};

for (const type of Object.keys(grouped)) {
  const list = grouped[type];
  console.log('\n=== ' + type + ' — ' + typeDescriptions[type] + ' (' + list.length + ') ===');
  list.forEach((l) => console.log('  ' + l));
}

console.log('\nTotal issues: ' + issues.length);

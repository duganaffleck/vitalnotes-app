const fs = require("fs");
const path = require("path");

const sectionsPath = path.join(__dirname, "..", "src", "content", "sections.ts");
const glossaryPath = path.join(__dirname, "..", "src", "content", "glossary.ts");

const sections = fs.readFileSync(sectionsPath, "utf8");
const glossary = fs.readFileSync(glossaryPath, "utf8");

const glossaryIdRegex = /id:\s*['"`]([^'"`]+)['"`]/g;
const glossaryIds = new Set();

let glossaryMatch;
while ((glossaryMatch = glossaryIdRegex.exec(glossary)) !== null) {
  glossaryIds.add(glossaryMatch[1]);
}

const referencedTerms = new Map();

const sectionRegex =
  /id:\s*['"`]([^'"`]+)['"`][\s\S]*?glossaryTerms:\s*\[([\s\S]*?)\]/g;

let sectionMatch;
while ((sectionMatch = sectionRegex.exec(sections)) !== null) {
  const sectionId = sectionMatch[1];
  const termsBlock = sectionMatch[2];

  const termRegex = /['"`]([^'"`]+)['"`]/g;
  let termMatch;

  while ((termMatch = termRegex.exec(termsBlock)) !== null) {
    const term = termMatch[1];

    if (!referencedTerms.has(term)) {
      referencedTerms.set(term, []);
    }

    referencedTerms.get(term).push(sectionId);
  }
}

const referencedIds = [...referencedTerms.keys()].sort();
const existingIds = [...glossaryIds].sort();

const missing = referencedIds.filter((id) => !glossaryIds.has(id));
const unused = existingIds.filter((id) => !referencedTerms.has(id));

console.log("\nGlossary Audit\n==============");

console.log(`\nReferenced glossary terms in sections.ts: ${referencedIds.length}`);
console.log(`Existing glossary entries in glossary.ts: ${existingIds.length}`);

console.log("\nMissing glossary entries\n------------------------");

if (missing.length === 0) {
  console.log("None. Every referenced glossary term exists.");
} else {
  for (const id of missing) {
    console.log(`\n${id}`);
    console.log(`  referenced by: ${referencedTerms.get(id).join(", ")}`);
  }
}

console.log("\nUnused glossary entries\n-----------------------");

if (unused.length === 0) {
  console.log("None. Every glossary entry is currently referenced.");
} else {
  for (const id of unused) {
    console.log(id);
  }
}

console.log("\nDone.\n");
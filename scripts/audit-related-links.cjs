const fs = require("fs");
const path = require("path");

const sectionsPath = path.join(__dirname, "..", "src", "content", "sections.ts");
const toolsPath = path.join(__dirname, "..", "src", "content", "tools.ts");

const sectionsSource = fs.readFileSync(sectionsPath, "utf8");
const toolsSource = fs.readFileSync(toolsPath, "utf8");

function findTopLevelObjectsById(source) {
  const starts = [];
  const startRegex = /^\s*\{\s*(?:\r?\n\s*)?id:\s*['"`]([^'"`]+)['"`]/gm;

  let match;
  while ((match = startRegex.exec(source)) !== null) {
    starts.push({
      index: match.index,
      id: match[1],
    });
  }

  return starts.map((start, index) => {
    const nextStart = starts[index + 1]?.index ?? source.length;
    return {
      id: start.id,
      block: source.slice(start.index, nextStart),
    };
  });
}

function extractProperty(objectBlock, propertyName) {
  const regex = new RegExp(`${propertyName}:\\s*['"\`]([^'"\`]+)['"\`]`);
  const match = objectBlock.match(regex);
  return match ? match[1] : "";
}

function extractStringArray(objectBlock, propertyName) {
  const propertyIndex = objectBlock.indexOf(`${propertyName}:`);
  if (propertyIndex === -1) return [];

  const firstBracket = objectBlock.indexOf("[", propertyIndex);
  if (firstBracket === -1) return [];

  let depth = 0;

  for (let i = firstBracket; i < objectBlock.length; i += 1) {
    const char = objectBlock[i];

    if (char === "[") depth += 1;
    if (char === "]") depth -= 1;

    if (depth === 0) {
      const arrayContent = objectBlock.slice(firstBracket + 1, i);
      const items = [];
      const itemRegex = /['"`]([^'"`]+)['"`]/g;

      let match;
      while ((match = itemRegex.exec(arrayContent)) !== null) {
        items.push(match[1]);
      }

      return items;
    }
  }

  return [];
}

const sectionRows = findTopLevelObjectsById(sectionsSource).map((object) => ({
  id: object.id,
  title: extractProperty(object.block, "title"),
  relatedSections: extractStringArray(object.block, "relatedSections"),
  relatedTools: extractStringArray(object.block, "relatedTools"),
}));

const toolRows = findTopLevelObjectsById(toolsSource).map((object) => ({
  id: object.id,
  title: extractProperty(object.block, "title"),
}));

const sectionIds = new Set(sectionRows.map((section) => section.id));
const toolIds = new Set(toolRows.map((tool) => tool.id));

const missingRelatedSections = [];
const missingRelatedTools = [];

for (const section of sectionRows) {
  for (const relatedSection of section.relatedSections) {
    if (!sectionIds.has(relatedSection)) {
      missingRelatedSections.push({
        sectionId: section.id,
        title: section.title,
        missingId: relatedSection,
      });
    }
  }

  for (const relatedTool of section.relatedTools) {
    if (!toolIds.has(relatedTool)) {
      missingRelatedTools.push({
        sectionId: section.id,
        title: section.title,
        missingId: relatedTool,
      });
    }
  }
}

console.log("\nRelated Links Audit");
console.log("===================");

console.log(`\nSections found: ${sectionRows.length}`);
console.log(`Tools found: ${toolRows.length}`);

console.log("\nMissing related sections");
console.log("------------------------");

if (missingRelatedSections.length === 0) {
  console.log("None. Every related section ID exists.");
} else {
  for (const item of missingRelatedSections) {
    console.log(
      `- ${item.sectionId} references missing section: ${item.missingId}`
    );
  }
}

console.log("\nMissing related tools");
console.log("---------------------");

if (missingRelatedTools.length === 0) {
  console.log("None. Every related tool ID exists.");
} else {
  for (const item of missingRelatedTools) {
    console.log(`- ${item.sectionId} references missing tool: ${item.missingId}`);
  }
}

console.log("\nPer-section review");
console.log("------------------");

for (const row of sectionRows) {
  console.log(`\n${row.title || row.id}`);
  console.log(`  id: ${row.id}`);
  console.log(
    `  relatedSections: ${
      row.relatedSections.length ? row.relatedSections.join(", ") : "none"
    }`
  );
  console.log(
    `  relatedTools: ${
      row.relatedTools.length ? row.relatedTools.join(", ") : "none"
    }`
  );
}

console.log("\nTool IDs");
console.log("--------");

for (const tool of toolRows) {
  console.log(`- ${tool.id}`);
}

console.log("\nDone.\n");
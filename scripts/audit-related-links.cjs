const fs = require("fs");
const path = require("path");

const sectionsPath = path.join(__dirname, "..", "src", "content", "sections.ts");
const toolsPath = path.join(__dirname, "..", "src", "content", "tools.ts");

const sectionsSource = fs.readFileSync(sectionsPath, "utf8");
const toolsSource = fs.readFileSync(toolsPath, "utf8");

function findArrayStart(source, constName) {
  const declarationRegex = new RegExp(`(?:export\\s+)?const\\s+${constName}\\b`);
  const declarationMatch = declarationRegex.exec(source);

  if (!declarationMatch) {
    throw new Error(`Could not find const ${constName}.`);
  }

  const equalsIndex = source.indexOf("=", declarationMatch.index);

  if (equalsIndex === -1) {
    throw new Error(`Could not find assignment for ${constName}.`);
  }

  const firstBracket = source.indexOf("[", equalsIndex);

  if (firstBracket === -1) {
    throw new Error(`Could not find array start for ${constName}.`);
  }

  return firstBracket;
}

function extractTopLevelArray(source, constName) {
  const firstBracket = findArrayStart(source, constName);
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = firstBracket; i < source.length; i += 1) {
    const char = source[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }

      continue;
    }

    if (char === "'" || char === '"' || char === "`") {
      quote = char;
      continue;
    }

    if (char === "[") depth += 1;
    if (char === "]") depth -= 1;

    if (depth === 0) {
      return source.slice(firstBracket + 1, i);
    }
  }

  throw new Error(`Could not find array end for ${constName}.`);
}

function splitTopLevelObjects(arraySource) {
  const objects = [];
  let depth = 0;
  let quote = null;
  let escaped = false;
  let objectStart = -1;

  for (let i = 0; i < arraySource.length; i += 1) {
    const char = arraySource[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }

      continue;
    }

    if (char === "'" || char === '"' || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{") {
      if (depth === 0) objectStart = i;
      depth += 1;
    }

    if (char === "}") {
      depth -= 1;

      if (depth === 0 && objectStart !== -1) {
        objects.push(arraySource.slice(objectStart, i + 1));
        objectStart = -1;
      }
    }
  }

  return objects;
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
  let quote = null;
  let escaped = false;

  for (let i = firstBracket; i < objectBlock.length; i += 1) {
    const char = objectBlock[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }

      continue;
    }

    if (char === "'" || char === '"' || char === "`") {
      quote = char;
      continue;
    }

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

function getRows(source, constName) {
  return splitTopLevelObjects(extractTopLevelArray(source, constName)).map(
    (block) => ({
      id: extractProperty(block, "id"),
      title: extractProperty(block, "title"),
      relatedSections: extractStringArray(block, "relatedSections"),
      relatedTools: extractStringArray(block, "relatedTools"),
    }),
  );
}

const sectionRows = getRows(sectionsSource, "sectionSeeds");
const toolRows = getRows(toolsSource, "tools");

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
      `- ${item.sectionId} references missing section: ${item.missingId}`,
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
    }`,
  );
  console.log(
    `  relatedTools: ${
      row.relatedTools.length ? row.relatedTools.join(", ") : "none"
    }`,
  );
}

console.log("\nTool IDs");
console.log("--------");

for (const tool of toolRows) {
  console.log(`- ${tool.id}`);
}

console.log("\nDone.\n");
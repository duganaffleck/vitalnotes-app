# Content Schema

This note defines the current first-slice app content structure for VitalNotes.

The schema exists to keep app content separate from layout components while preserving the guide structure maintained in Obsidian.

Obsidian remains the source of truth.

The app renders the guide.

The app does not reinvent the guide.

---

## Current Status

The first app vertical slice has been implemented.

The approved first-slice content migration is complete and pushed.

The app now renders real student-facing content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current cleanup focus:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]

---

## Current Content Files

The app currently uses manually maintained TypeScript content files.

Current app content lives in files such as:

- `src/content/sections.ts`
- `src/content/tools.ts`
- `src/content/glossary.ts`

This manual TypeScript content model is acceptable for the first vertical slice.

Do not add [[Obsidian Import Pipeline]], MDX, CMS, automated sync, or a complex content import system during first-slice cleanup.

A future content pipeline should only be considered if manual migration becomes a real maintenance problem.

---

## Current Section Object Shape

Each section object should contain enough information to render the section page, support navigation, connect related sections, and expose relevant tools or glossary terms.

Representative structure:

```ts
{
  id: "cognitive-load",
  title: "Cognitive Load",
  subtitle: "Why structure protects thinking under pressure",
  cluster: "Why Learning Feels Hard",
  clusterOrder: 1,
  sectionOrder: 1,
  studentProblem: "I know the material, but I lose track of simple things during scenarios, labs, or OSCEs.",
  sectionPurpose: "Help students understand cognitive load as a normal part of paramedic learning.",
  pageType: "core-concept",
  status: "draft-v2",
  body: [
    {
      type: "heading",
      text: "Why this matters"
    },
    {
      type: "paragraph",
      text: "Section text here."
    },
    {
      type: "list",
      items: [
        "First list item",
        "Second list item"
      ]
    }
  ],
  glossaryTerms: [
    "cognitive-load",
    "working-memory"
  ],
  relatedTools: [],
  relatedSections: [
    "why-studying-feels-productive-but-fails-under-pressure",
    "learning-strain-is-not-always-a-personal-problem"
  ],
  previous: "where-to-begin",
  next: "why-studying-feels-productive-but-fails-under-pressure"
}
```

---

## Section Field Notes

### `id`

Stable app-facing identifier.

Use lowercase kebab-case.

Example:

```ts
"directives-through-purpose"
```

Do not change IDs casually once sections are connected through navigation, glossary terms, or related links.

### `title`

Student-facing section title.

This should match the Obsidian section title unless there is a clear display reason to shorten it.

### `subtitle`

Short purpose or orientation line.

This helps the student understand why the section matters before reading.

### `cluster`

The learning path cluster the section belongs to.

Current first-slice clusters:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Later planned clusters should not be marked as migrated until they are actually built into the app.

### `clusterOrder` and `sectionOrder`

Used for app sorting and previous / next navigation.

These should follow the locked learning path unless deliberately changed in [[New VitalNotes Learning Path]] and [[Decisions]].

### `studentProblem`

Plain-language student problem the section addresses.

This preserves the VitalNotes rule that sections exist because students experience real friction.

### `sectionPurpose`

Purpose field for clarity and maintenance.

This can support review and future editing.

It does not need to become a prominent student-facing course-objective box.

### `pageType`

Broad page category.

Possible values may include:

```ts
"orientation"
"core-concept"
"practical-system"
"tool-supporting-section"
"tool-page"
"reflection"
"performance"
```

Do not overbuild this taxonomy.

Add values only if the app actually needs different rendering behavior.

### `status`

Draft or approval status from Obsidian.

Examples:

```ts
"draft-v1"
"draft-v2"
"draft-v3"
"approved"
```

Status helps with internal tracking.

It should not dominate the student-facing reader.

### `body`

The student-facing section content.

The body should contain app-facing content only.

Do not include:

- planning notes
- source-handling notes
- review notes
- quality checks
- placeholder scaffolding
- internal comments
- prompt fragments

Those belong in Obsidian control files, not in the app reader.

### `glossaryTerms`

Array of glossary IDs used in the section.

Only include terms that reduce reading friction.

Glossary support should follow:

- [[Glossary and Popup Map]]
- [[Popup and Glossary Rules]]
- [[Glossary Term Audit]]

### `relatedTools`

Array of active tool IDs connected to the section.

Only include active drafted tools.

Current active first-slice tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Do not include planned tools unless they have been explicitly promoted into the active slice.

### `relatedSections`

Array of section IDs that connect conceptually.

This supports non-linear navigation without disrupting the main learning path.

Do not use related sections as a dumping ground for every possible connection.

Three strong related sections are usually better than eight weak ones.

### `previous` and `next`

Stable IDs for linear navigation through the guide.

These should match the intended learning path.

---

## Current Section Body Block Types

The section body renderer currently supports:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

Representative structure:

```ts
type SectionBodyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "placeholder"; text: string }
  | { type: "list"; items: string[] };
```

---

## List Block Rule

Use a `list` block when source content is clearly functioning as a grouped list.

Use list blocks for:

- grouped examples
- workflow steps
- prompt sets
- repeated questions
- option sets
- short grouped distinctions
- tool-style instructions
- repeated “do / do not” items
- visually flattened content that clearly reads as a list

Do not force every short paragraph into a list.

Some VitalNotes paragraphs are intentionally short for rhythm and emphasis.

Current cleanup task:

- [[Retro Fix 01 - Bullet List Cleanup]]

Primary early targets:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

---

## Current Glossary Object Shape

Glossary entries should stay short.

They should support reading flow, not replace section content.

Representative structure:

```ts
{
  id: "cognitive-load",
  term: "Cognitive Load",
  shortDefinition: "The amount of mental work your brain is trying to manage at one time.",
  paramedicRelevance: "It rises quickly when assessment, communication, decision-making, memory, and procedures compete for attention.",
  relatedSections: [
    "cognitive-load",
    "learning-strain-is-not-always-a-personal-problem",
    "performance-under-pressure"
  ]
}
```

Use [[Glossary and Popup Map]] as the source for glossary language.

Do not add long definitions to the app schema.

If a term needs a long explanation, it belongs in a section or tool.

---

## Glossary Audit Needs

Some first-slice glossary IDs may be missing or inconsistent.

Potential terms to audit:

- `reflection`
- `performance-under-pressure`
- `directive-intent`
- `recognition`
- `spacing`
- `clinical-recall`
- `anki`
- `links`
- `obsidian`
- `capture-notes`
- `working-notes`
- `transfer`
- `pathophysiology`
- `perfusion`
- `reassessment`

Current cleanup task:

- [[Glossary Term Audit]]

The audit should compare `glossaryTerms` values in `src/content/sections.ts` against entries in `src/content/glossary.ts`.

Only first-slice glossary terms should be added or normalized during this pass.

---

## Current Tool Object Shape

Tools should stay simple.

Representative structure:

```ts
{
  id: "directive-meaning-check",
  title: "Directive Meaning Check",
  status: "draft-v1",
  toolType: "thinking-check",
  purpose: "Help students understand what a directive is protecting, supporting, or preventing.",
  whenToUse: "Use when learning or applying a directive.",
  steps: [
    "What clinical risk is this directive protecting against?",
    "What physiology is being supported or protected?",
    "Where are the firm boundaries?",
    "What would make me withhold, stop, patch, or change course?",
    "What should I reassess afterward?"
  ],
  relatedSections: [
    "directives-through-purpose",
    "meaning-before-memorization",
    "pathophysiology-through-patterns"
  ]
}
```

---

## Tool Field Notes

### `id`

Stable app-facing identifier.

Use lowercase kebab-case.

### `title`

Student-facing tool title.

Should match the [[Tools Library]] title.

### `status`

Tool status from Obsidian.

Only tools with drafted pages should be active in the app.

### `toolType`

A broad category that helps the interface render the tool simply.

Current first-slice tool types:

```ts
"thinking-check"
"template"
"prompt-builder"
```

Do not overbuild tool types.

Add only when the interface needs different rendering.

### `purpose`

What the tool helps the student do.

### `whenToUse`

A short use-case statement.

### `steps`, `fields`, or `builderStructure`

Use the simplest field that fits the tool.

Examples:

- `steps` for a check or workflow
- `fields` for a template
- `builderStructure` for a prompt builder

### `relatedSections`

Sections where the tool may be relevant.

Do not attach tools everywhere.

---

## Active Tool Objects for First Slice

Only these tools are active in the first slice.

### [[Directive Meaning Check]]

```ts
{
  id: "directive-meaning-check",
  title: "Directive Meaning Check",
  status: "draft-v1",
  toolType: "thinking-check",
  purpose: "Help students understand what a directive is protecting, supporting, or preventing.",
  whenToUse: "Use when learning or applying a directive.",
  steps: [
    "What clinical risk is this directive protecting against?",
    "What physiology is being supported or protected?",
    "Where are the firm boundaries?",
    "What would make me withhold, stop, patch, or change course?",
    "What should I reassess afterward?"
  ],
  relatedSections: [
    "directives-through-purpose",
    "meaning-before-memorization",
    "pathophysiology-through-patterns"
  ]
}
```

### [[Smart Note Template]]

```ts
{
  id: "smart-note-template",
  title: "Smart Note Template",
  status: "draft-v1",
  toolType: "template",
  purpose: "Help students turn a concept, scenario error, confusing idea, or repeated feedback point into one reusable thinking note.",
  whenToUse: "Use when an idea needs to become clearer, more connected, and easier to return to later.",
  fields: [
    "Claim",
    "Explanation",
    "Clinical signals",
    "Common confusion",
    "Links"
  ],
  relatedSections: [
    "smart-notes-for-paramedic-students",
    "types-of-notes-and-idea-maturation",
    "obsidian-for-learning-paramedicine",
    "meaning-before-memorization"
  ]
}
```

### [[Clinical Recall Prompt Builder]]

```ts
{
  id: "clinical-recall-prompt-builder",
  title: "Clinical Recall Prompt Builder",
  status: "draft-v1",
  toolType: "prompt-builder",
  purpose: "Help students turn facts, notes, scenario errors, directive details, and confusing concepts into recall prompts that support clinical use.",
  whenToUse: "Use when you want knowledge to help you notice, decide, avoid harm, reassess, or explain something during a call, lab, scenario, or OSCE.",
  builderStructure: [
    "What am I trying to remember?",
    "What clinical job does this knowledge do?",
    "Make one basic fact prompt.",
    "Make one clinical cue prompt.",
    "Make one decision or boundary prompt.",
    "Make one reassessment prompt.",
    "Optional: make one communication prompt."
  ],
  relatedSections: [
    "retrieval-and-spaced-learning",
    "clinical-recall-without-trivia",
    "anki-for-paramedic-learning",
    "smart-notes-for-paramedic-students",
    "types-of-notes-and-idea-maturation",
    "directives-through-purpose"
  ]
}
```

[[Clinical Recall Prompt Builder]] may support better Anki use, but it must not become [[Anki Integration]], deck management, automated flashcard generation, or a flashcard platform inside VitalNotes.

---

## Planned Tool Objects

Planned tools should remain planning references only.

Do not treat planned tools as live app content.

Example future tool:

```ts
{
  id: "clinical-reasoning-check",
  title: "Clinical Reasoning Check",
  status: "planned-core-tool",
  toolType: "thinking-check",
  purpose: "Help students keep a working explanation active while information is incomplete.",
  whenToUse: "Use when the call feels unclear and you need to stay oriented.",
  steps: [
    "What do I think is happening right now?",
    "What supports that explanation?",
    "What does not fit?",
    "What would make me change my mind?",
    "What is safest while I clarify?"
  ],
  relatedSections: [
    "clinical-reasoning",
    "pattern-recognition",
    "avoiding-premature-closure",
    "performance-under-pressure"
  ]
}
```

Planned tools should remain parked in [[Tool Library Map]] or [[Deferred Ideas]] until the related section work earns them.

---

## Current Learning Path Object Shape

Learning path objects should keep clusters simple.

Representative structure:

```ts
{
  id: "build-understanding",
  title: "Build Understanding",
  order: 2,
  purpose: "Show how facts become usable through meaning, mechanisms, patterns, directive purpose, risk, boundaries, and reassessment.",
  sections: [
    "meaning-before-memorization",
    "pathophysiology-through-patterns",
    "directives-through-purpose"
  ],
  relatedTools: [
    "directive-meaning-check"
  ],
  status: "migrated-to-first-slice"
}
```

---

## Migrated First-Slice Sections

### [[00 Start Here]]

```ts
[
  "start-here-what-vitalnotes-is",
  "how-to-use-this-guide",
  "where-to-begin"
]
```

### [[01 Why Learning Feels Hard]]

```ts
[
  "cognitive-load",
  "why-studying-feels-productive-but-fails-under-pressure",
  "learning-strain-is-not-always-a-personal-problem"
]
```

### [[02 Build Understanding]]

```ts
[
  "meaning-before-memorization",
  "pathophysiology-through-patterns",
  "directives-through-purpose"
]
```

Active tool connected to this cluster:

```ts
[
  "directive-meaning-check"
]
```

### [[03 Build Usable Notes]]

```ts
[
  "smart-notes-for-paramedic-students",
  "types-of-notes-and-idea-maturation",
  "obsidian-for-learning-paramedicine"
]
```

Active tool connected to this cluster:

```ts
[
  "smart-note-template"
]
```

### [[04 Build Recall]]

```ts
[
  "retrieval-and-spaced-learning",
  "clinical-recall-without-trivia",
  "anki-for-paramedic-learning"
]
```

Active tool connected to this cluster:

```ts
[
  "clinical-recall-prompt-builder"
]
```

Status:

```ts
"migrated-to-first-slice"
```

---

## Current First-Slice Boundary

The first vertical slice includes:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[Learning Path]]
- [[Section Reader]]
- [[Glossary]]
- [[Tools Library]]
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- previous and next navigation
- problem-based entry through [[Where to Begin]]
- simple tool drawer support
- simple glossary popup support
- list block support

The first vertical slice does not include:

- accounts
- dashboards
- quizzes
- badges
- grading
- simulations
- AI reflection
- AI feedback
- complex personalization
- [[Obsidian Import Pipeline]]
- MDX
- CMS
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- progress tracking
- analytics

---

## Current Notes

- Rebuilt content files should stay clean.
- App-facing content should remain separate from internal planning notes.
- Glossary entries belong in [[Glossary and Popup Map]] and `src/content/glossary.ts`.
- Tool decisions belong in [[Tool Library Map]] and `src/content/tools.ts`.
- Project decisions belong in [[Decisions]].
- Open app questions belong in [[Open Questions]].
- Active tools should be included only when drafted and earned by completed sections.
- Planned tools can remain visible in planning notes, but should not be treated as live app content.
- The first app slice currently uses manual TypeScript content objects.
- Do not let the content schema imply [[Anki Integration]], deck management, automated flashcard generation, or flashcard-platform behavior.
- Do not add new schema fields unless the current reader experience clearly needs them.

---

## Next Review

Review this file after:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. first-slice reader-quality testing

Do not broaden the content schema before those are complete.
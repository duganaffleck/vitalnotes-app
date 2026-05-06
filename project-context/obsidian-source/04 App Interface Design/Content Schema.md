# Content Schema

This note defines a possible structure for app content.

This is not final code.  
It is a planning schema for the VS Code build.

The goal is to keep app content separate from layout components while preserving the structure already being built in Obsidian.

The first app content model should stay simple.

Use manual JavaScript objects or JSON-like data first. Do not build a complex Obsidian-to-app Markdown import pipeline until the interface, glossary behavior, section structure, and tool behavior are tested against real content.

---

## Section Object Draft

```js
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
  body: "...",
  glossaryTerms: [
    "cognitive-load",
    "working-memory",
    "overload",
    "structure",
    "reassessment",
    "performance-under-pressure"
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

### id

Stable app-facing identifier.

Use lowercase kebab-case.

Example:

```js
"directives-through-purpose"
```

### title

Student-facing section title.

Should match the Obsidian section title unless there is a clear reason to shorten for display.

### subtitle

Short purpose or orientation line.

Should help the student understand why the section matters before reading.

### cluster

The learning path cluster the section belongs to.

Current clusters:

- Start Here
- Why Learning Feels Hard
- Build Understanding
- Build Usable Notes
- Build Recall
- Think Clinically
- Practice Better
- Perform Under Pressure
- Reflect and Improve

### clusterOrder and sectionOrder

Used for app sorting and previous / next navigation.

These should follow the locked learning path unless deliberately changed in the content architecture.

### studentProblem

Plain-language student problem the section addresses.

This helps preserve the VitalNotes structure: sections exist because students experience real friction.

### sectionPurpose

Internal-facing purpose field.

This can help with app planning, review, and future editing. It does not necessarily need to render on the student-facing page.

### pageType

Possible values:

```js
"orientation"
"core-concept"
"practical-system"
"tool-supporting-section"
"tool-page"
"reflection"
"performance"
```

Do not overbuild this taxonomy. Add values only if they help the app behave differently.

### status

Draft status from Obsidian.

Examples:

```js
"draft-v1"
"draft-v2"
"draft-v3"
"approved"
```

### body

The student-facing section content.

For the first app slice, this may be stored directly as structured content inside a JavaScript object or as a string. Choose the simplest approach that allows clean rendering.

The first app slice should use the App-Ready Section Draft content, not internal planning notes, source-handling notes, review notes, or placeholder scaffolding.

### glossaryTerms

Array of glossary IDs used in the section.

Only include terms that reduce reading friction.

### relatedTools

Array of active tool IDs connected to the section.

Do not include planned tools unless they already exist as drafted tool pages.

### relatedSections

Array of section IDs that connect conceptually.

This supports non-linear navigation without disrupting the main learning path.

### previous and next

Stable IDs for linear navigation through the guide.

---

## Glossary Object Draft

```js
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

---

## Glossary Field Notes

Glossary entries should stay short.

They should support reading flow, not replace section content.

Use the current [[Glossary and Popup Map]] as the source for glossary language.

Do not add long definitions to the app schema. If a term needs a long explanation, it probably belongs in a section or tool.

---

## Tool Object Draft

```js
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
    "pathophysiology-through-patterns",
    "clinical-reasoning",
    "osce-preparation"
  ]
}
```

---

## Tool Field Notes

### id

Stable app-facing identifier.

Use lowercase kebab-case.

### title

Student-facing tool title.

Should match the Tools Library title.

### status

Tool status from Obsidian.

Only tools with drafted pages should be active in the app.

### toolType

A broad category that helps the interface render the tool simply.

Possible values:

```js
"thinking-check"
"template"
"prompt-builder"
"reset"
"reflection"
```

Do not overbuild tool types. Add only when the interface needs different rendering.

### purpose

What the tool helps the student do.

### whenToUse

A short use-case statement.

### steps, fields, or builderStructure

Use the simplest field that fits the tool.

Examples:

- `steps` for a check or workflow
- `fields` for a template
- `builderStructure` for a prompt builder

### relatedSections

Sections where the tool may be relevant.

Do not attach tools everywhere.

---

## Active Tool Objects for First Slice

### Directive Meaning Check

```js
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

### Smart Note Template

```js
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

### Clinical Recall Prompt Builder

```js
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

Clinical Recall Prompt Builder may support Anki use, but it should not become Anki integration, deck management, automated flashcard generation, or a flashcard platform inside VitalNotes.

---

## Planned Tool Object Example

```js
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

Planned tools should remain in the schema only as planning examples until the related section work earns them.

---

## Learning Path Object Draft

```js
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
  status: "drafted"
}
```

---

## Current Real Test Sections

Use these drafted sections to test whether the schema is enough before building the app.

### Start Here Cluster

```js
[
  "start-here-what-vitalnotes-is",
  "how-to-use-this-guide",
  "where-to-begin"
]
```

### Why Learning Feels Hard Cluster

```js
[
  "cognitive-load",
  "why-studying-feels-productive-but-fails-under-pressure",
  "learning-strain-is-not-always-a-personal-problem"
]
```

### Build Understanding Cluster

```js
[
  "meaning-before-memorization",
  "pathophysiology-through-patterns",
  "directives-through-purpose"
]
```

Active tool connected to this cluster:

```js
[
  "directive-meaning-check"
]
```

### Build Usable Notes Cluster

```js
[
  "smart-notes-for-paramedic-students",
  "types-of-notes-and-idea-maturation",
  "obsidian-for-learning-paramedicine"
]
```

Active tool connected to this cluster:

```js
[
  "smart-note-template"
]
```

### Build Recall Cluster

```js
[
  "retrieval-and-spaced-learning",
  "clinical-recall-without-trivia",
  "anki-for-paramedic-learning"
]
```

Active tool connected to this cluster:

```js
[
  "clinical-recall-prompt-builder"
]
```

Status:

```js
"drafted"
```

---

## Likely First Content Files

The first app slice should probably use a simple content structure such as:

```text
src/content/sections.js
src/content/glossary.js
src/content/tools.js
src/content/learningPath.js
```

Possible later additions:

```text
src/content/clusters.js
src/content/routes.js
```

Do not add more files until the first slice proves they are needed.

---

## Early Recommendation

Start with JavaScript objects or JSON-like data before building a more complex Markdown import pipeline.

Keep the first app slice simple.

The first useful vertical slice should include:

- Start Here cluster
- Why Learning Feels Hard cluster
- Build Understanding cluster
- Build Usable Notes cluster
- Build Recall cluster
- Learning Path page
- Section Reader
- Glossary support
- simple Tools Library
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- previous and next navigation
- problem-based entry through [[Where to Begin]]

The first useful vertical slice should not include:

- accounts
- dashboards
- quizzes
- badges
- grading
- simulations
- AI reflection
- complex personalization
- Obsidian import pipeline
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior

Do not build a complex content import system until the writing structure is stable across several clusters and the first app slice proves the manual content model works.

---

## Current Notes

- Rebuilt content files should stay clean: App Metadata plus App-Ready Section Draft.
- The first app slice should extract only app-facing content, not internal planning notes or placeholder scaffolding.
- Glossary entries belong in [[Glossary and Popup Map]].
- Tool decisions belong in [[Tool Library Map]].
- Project decisions belong in [[Decisions]].
- Open app questions belong in [[Open Questions]].
- The app schema should be tested against real drafted sections before development begins.
- Active tools should be included only when drafted and earned by completed sections.
- Planned tools can remain visible in planning notes, but should not be treated as live app content.
- The first app slice should use manual JavaScript objects or JSON-like data before any Obsidian-to-app import pipeline is considered.
- Do not let the content schema imply Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior.
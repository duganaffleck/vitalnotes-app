# Codex Component Prompt

Use this style of prompt for a bounded React component task.

This prompt is for one component at a time.

Do not use it to redesign the app, restructure the content model, add new features, or change the learning path.

```text
# Codex Component Prompt

You are helping build one component in the VitalNotes app.

VitalNotes is a student-facing learning guide for paramedic students.

The app is a calm, guided reading interface, not a game, quiz app, LMS, dashboard, protocol reference, simulation engine, flashcard platform, or heavy interactive platform.

Your task is to build or update one bounded component.

Do not redesign the app.

Do not change the content map.

Do not invent new content.

Do not modify unrelated files.

## Source of Truth

Follow the Obsidian vault notes and app structure already defined.

Relevant files may include:

- `04 App Interface Design/App Vision.md`
- `04 App Interface Design/Navigation Model.md`
- `04 App Interface Design/Section Reader Design.md`
- `04 App Interface Design/Popup and Glossary Rules.md`
- `04 App Interface Design/Tool Drawer Design.md`
- `04 App Interface Design/Content Schema.md`
- `04 App Interface Design/UI Tone and Style.md`
- `05 Build Prompts/App Anti-Drift Rules.md`

The Obsidian vault remains the project source of truth.

The component should support the established VitalNotes structure.

## Task

Build or update this component:

[COMPONENT NAME]

Target file:

[FILE PATH]

Component purpose:

[COMPONENT PURPOSE]

Related page or parent component:

[RELATED PAGE OR PARENT COMPONENT]

## Inputs / Props

The component should accept:

[PROPS OR DATA SHAPE]

Example section object:

```js
{
  id: "cognitive-load",
  title: "Cognitive Load",
  subtitle: "Why simple structure protects thinking under pressure",
  cluster: "Why Learning Feels Hard",
  clusterOrder: 1,
  sectionOrder: 1,
  studentProblem: "I know the material, but I lose track of simple things during scenarios, labs, or OSCEs.",
  sectionPurpose: "Help students recognize overload as a structural learning problem rather than a personal failure.",
  pageType: "core-concept",
  status: "draft-v2",
  body: [],
  glossaryTerms: [],
  relatedTools: [],
  relatedSections: [],
  previous: "where-to-begin",
  next: "why-studying-feels-productive-but-fails-under-pressure"
}
```

Example thinking-check tool object:

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

Example template tool object:

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

Example prompt-builder tool object:

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

Example glossary object:

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

## Functional Requirements

The component should:

- do only the stated task
- accept data through props
- avoid hard-coded student-facing content unless specifically requested
- render cleanly with missing or empty optional fields
- avoid crashing when arrays are empty
- support active tool types currently used in the first slice when relevant:
  - thinking-check
  - template
  - prompt-builder
- use clear semantic HTML where appropriate
- remain reusable
- stay readable and easy to maintain
- follow the existing project style

Specific requirements for this component:

[COMPONENT-SPECIFIC REQUIREMENTS]

## Styling Requirements

Follow the VitalNotes UI tone:

- calm
- readable
- grounded
- practical
- mobile-friendly
- lightly guided

Use:

- readable spacing
- clear labels
- subtle cards where helpful
- simple navigation
- accessible contrast
- responsive layout

Avoid:

- loud colors
- flashy gamification
- dashboard clutter
- excessive icons
- decorative interaction
- startup-style copy
- productivity-app aesthetics
- Anki power-user aesthetics
- flashcard-platform energy

Do not add a new styling system unless explicitly requested.

Use the existing CSS or styling approach already present in the project.

## Interaction Requirements

Only add interaction if it is part of the stated component task.

Examples of acceptable simple interactions:

- opening and closing a glossary popup
- opening and closing a tool drawer
- expanding a small section card
- navigating to previous or next section

Do not add:

- animations for decoration
- badges
- scores
- quizzes
- tracking
- accounts
- AI features
- dashboards
- unrelated controls
- Anki integration
- deck management
- automated flashcard generation

## Accessibility Requirements

The component should support tired students reading on different devices.

Use:

- readable text
- clear button labels
- keyboard-accessible controls where applicable
- meaningful link text
- adequate tap targets
- basic ARIA attributes where useful

Avoid icon-only controls unless they also have accessible labels.

## What Not to Change

Do not change:

- the content map
- section names
- cluster names
- tool names
- glossary language
- unrelated components
- unrelated routes
- unrelated styling files
- package dependencies unless explicitly requested

If the task requires a change outside the target file, explain why before making broad changes.

## Acceptance Criteria

The component is acceptable if:

- it builds without errors
- it performs the requested function
- it handles missing optional data safely
- it stays visually calm and readable
- it does not introduce unrelated features
- it does not hard-code content that belongs in content files
- it does not alter the educational structure
- it remains aligned with VitalNotes tone and app direction
- it does not make Anki or flashcards structurally central to the app
- it supports the active first-slice tool types if the component renders tools

## Output

Return:

- the full updated component file
- any small related CSS changes, only if required
- a brief note explaining what changed
- any assumptions made

Do not include unrelated refactors.
```
# Tool Drawer Design

The Tool Drawer defines how active VitalNotes tools appear inside the app without interrupting the reading experience.

Tools should support the guide.

They should not overpower the section.

A tool drawer exists so a student can use a reusable process at the moment it becomes helpful, then return to the section without feeling pulled into a second lesson.

---

## Current Status

The first-slice app shell includes simple tool drawer support.

The first-slice content migration is complete and pushed.

The current reader includes real student-facing content across:

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

The Tool Drawer should remain simple during cleanup.

Do not expand tool behavior before the first-slice reader has been tested.

---

## Purpose

The Tool Drawer gives students access to active tools when those tools directly support the section they are reading.

It should help students:

- apply a concept
- reduce cognitive load
- turn understanding into action
- use a reusable structure
- return to a tool without rereading the full section

The Tool Drawer should not make VitalNotes feel like a dashboard, worksheet platform, quiz app, productivity system, or flashcard platform.

---

## Core Principle

A tool drawer should be easy to open, easy to close, and easy to ignore.

The section remains the main experience.

The tool is a support beside the reading, not the centre of the page.

A section does not need a tool to be useful.

A tool should appear only when the section clearly earns it.

---

## Current Active Tools

Only these tools are active in the first vertical slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

These are the only tools that should be treated as active in the first-slice app.

Planned tools should not appear as live tools yet.

Potential future tools may remain in [[Tool Library Map]] or [[Deferred Ideas]], but they should not be exposed as active student-facing tools until drafted, stable, and earned by section use.

---

## Planned Tools

These tools remain planned or deferred until their related sections are drafted and stable:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Do not show planned tools inside the app as usable tools.

They may appear only in internal planning notes until drafted and explicitly promoted.

---

## Current Tool Drawer Behaviour

The current first-slice tool drawer support should stay simple.

The drawer should:

- open clearly
- close clearly
- preserve the reader’s place
- avoid covering too much of the section
- avoid requiring setup
- avoid saving data
- avoid making the student feel assessed
- keep the section as the main experience

The drawer does not need:

- accounts
- saved responses
- progress tracking
- scoring
- completion states
- AI feedback
- complex animation
- automatic exports

The simplest useful version is still preferred.

---

## Tool Drawer Placement

A tool drawer may appear when a tool directly supports the section.

It should not appear just because a related tool exists somewhere in the guide.

Tool access should be contextual, earned, and easy to ignore.

---

## Current Tool Placements

### [[Directive Meaning Check]]

Primary section connection:

- [[Directives Through Purpose]]

Possible later connections:

- [[Clinical Reasoning]]
- [[OSCE Preparation]]

Primary use:

Help students understand directive purpose, clinical risk, boundaries, withholding, stopping, patching, and reassessment.

Placement note:

This is a strong drawer candidate for [[Directives Through Purpose]].

It does not need to appear everywhere directives are mentioned.

---

### [[Smart Note Template]]

Primary section connections:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

Possible secondary connections:

- [[Meaning Before Memorization]]
- [[Clinical Recall Without Trivia]]

Primary use:

Help students turn a concept, scenario error, confusing idea, or repeated feedback point into one reusable thinking note.

Placement note:

This is a strong drawer candidate for [[Smart Notes for Paramedic Students]].

It may appear more lightly in the other [[03 Build Usable Notes]] sections.

Do not make the drawer feel like an Obsidian workflow or productivity system.

---

### [[Clinical Recall Prompt Builder]]

Primary section connections:

- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Possible secondary connections:

- [[Retrieval and Spaced Learning]]
- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Directives Through Purpose]]

Primary use:

Help students turn facts, notes, scenario errors, directive details, and confusing concepts into recall prompts that support clinical use.

Placement note:

This is a strong drawer candidate for [[Clinical Recall Without Trivia]] and [[Anki for Paramedic Learning]].

It may be referenced from [[Retrieval and Spaced Learning]], but it does not need to appear as a primary drawer there.

Do not turn this into [[Anki Integration]], deck management, automated flashcard generation, or a flashcard platform.

---

## Sections That May Remain Tool-Free

Some first-slice sections should remain tool-free unless testing shows a clear need.

Examples:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]
- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Retrieval and Spaced Learning]]

This is intentional.

A tool-free section is not incomplete.

---

## Tool Drawer Content Model

Each drawer should use the tool object from the app content schema.

A tool object may include:

- id
- title
- status
- toolType
- purpose
- whenToUse
- steps
- fields
- builderStructure
- relatedSections

Current first-slice tool types:

- `thinking-check`
- `template`
- `prompt-builder`

Do not create more tool types unless the interface clearly needs them.

This should remain aligned with [[Content Schema]].

---

## Tool Type Behaviours

### Thinking Check

Used for:

- [[Directive Meaning Check]]

Recommended display:

- short purpose statement
- when to use
- list of questions
- optional link to full tool page

Avoid:

- long explanation
- scoring
- checklist completion pressure
- protocol reinterpretation

---

### Template

Used for:

- [[Smart Note Template]]

Recommended display:

- short purpose statement
- when to use
- fields with brief labels
- optional copyable structure later, if genuinely useful

Avoid:

- making Obsidian feel mandatory
- turning the note template into a productivity workflow
- adding too many fields
- making the tool feel like homework

---

### Prompt Builder

Used for:

- [[Clinical Recall Prompt Builder]]

Recommended display:

- short purpose statement
- when to use
- builder structure
- optional example later, if useful
- optional copy support later, if useful

Avoid:

- [[Anki Integration]]
- deck management
- automated flashcard generation
- making the app feel like a flashcard platform
- implying that every piece of knowledge needs a card

---

## Drawer Copy Tone

Drawer copy should be direct, practical, and calm.

Good examples:

- “Use this when a directive feels heavy or unclear.”
- “Open the Smart Note Template.”
- “Build a clinical recall prompt.”
- “Use this to turn one confusing idea into a reusable note.”
- “Use this when you want recall to support assessment, decisions, reassessment, or communication.”

Avoid:

- “Master your learning workflow.”
- “Unlock better performance.”
- “Supercharge your Anki deck.”
- “Optimize your study system.”
- “Complete this activity to level up.”

Tool drawer copy should sound like VitalNotes, not software marketing.

---

## Interaction Boundaries

The first-slice Tool Drawer should not include:

- saved student answers
- accounts
- dashboards
- progress tracking
- badges
- scores
- quizzes
- AI-generated feedback
- AI-generated tools
- automatic exports
- [[Anki Integration]]
- deck management
- automated flashcard generation
- complex personalization

Later, some features may be reconsidered if they clearly support student learning without changing the app’s purpose.

For now, the drawer should display tools, not become a tool platform.

---

## Mobile Behaviour

On mobile, the Tool Drawer should be easy to use without blocking the section.

Possible acceptable mobile behaviour:

- open below the related section
- open as a simple full-width panel
- use a clear close button
- keep text short
- avoid tiny controls
- avoid covering too much of the reading area

The mobile drawer should not feel like a modal trap.

A tired student should be able to open it, use it, close it, and keep reading.

---

## Accessibility

Tool drawers should use accessible controls.

Use:

- clear button labels
- keyboard-accessible open and close controls
- readable font size
- sufficient contrast
- adequate tap targets
- meaningful headings
- simple structure

Avoid:

- icon-only controls without labels
- hidden close actions
- tiny text
- low contrast
- interaction that only works on hover

---

## Relationship to [[Tools Library]]

The Tool Drawer is contextual.

The [[Tools Library]] is central.

A student may encounter a tool inside a section, then return to it later through the [[Tools Library]].

The [[Tools Library]] should show active drafted tools only during the first app slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Planned tools should stay hidden from the student-facing [[Tools Library]] until drafted and earned.

---

## Relationship to [[Section Reader]]

The Tool Drawer belongs inside or beside the [[Section Reader]].

The [[Section Reader]] should decide whether a section has a related active tool.

The drawer should not appear globally on every page.

The drawer should not interrupt sections where no tool is needed.

Examples:

- [[Directives Through Purpose]] may show [[Directive Meaning Check]].
- [[Smart Notes for Paramedic Students]] may show [[Smart Note Template]].
- [[Clinical Recall Without Trivia]] may show [[Clinical Recall Prompt Builder]].
- [[Anki for Paramedic Learning]] may show [[Clinical Recall Prompt Builder]].

Sections such as [[Cognitive Load]] and [[Retrieval and Spaced Learning]] may remain tool-free even if they relate to future or active tools.

---

## Current First-Slice Tool Drawer Test

The first app slice should test whether Tool Drawer behaviour works with three tool types:

1. thinking-check  
   [[Directive Meaning Check]]

2. template  
   [[Smart Note Template]]

3. prompt-builder  
   [[Clinical Recall Prompt Builder]]

The test should answer:

- Can the student open a tool without losing the section?
- Does the tool feel optional?
- Does the tool reduce friction?
- Does the drawer avoid becoming a second lesson?
- Does the drawer avoid feeling like homework?
- Does the drawer preserve the calm reading experience?
- Does the prompt-builder stay broader than Anki?
- Does the app avoid flashcard-platform behavior?

---

## Acceptance Criteria

The Tool Drawer is ready for first-slice reader testing if:

- it supports the three active tools
- it handles missing tools safely
- it does not show planned tools as active
- it can open and close clearly
- it does not interrupt reading flow
- it keeps the tool short and usable
- it keeps the writing central
- it keeps Anki from becoming a product direction
- it does not add accounts, tracking, quizzes, dashboards, AI, or flashcard automation

The Tool Drawer fails if it makes VitalNotes feel like an app full of assignments, widgets, flashcards, or productivity workflows.

---

## Current No-Go List

Do not add during first-slice cleanup:

- accounts
- dashboards
- badges
- streaks
- scores
- quizzes
- simulations
- instructor dashboards
- LMS integration
- AI feedback
- AI reflection
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- progress tracking
- analytics
- CMS
- MDX
- [[Obsidian Import Pipeline]]

---

## Design Rule

A tool drawer should reduce friction.

If opening the drawer makes the section harder to read, the drawer is not helping.

---

## Next Review

Review this file after:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. first-slice reader-quality testing

Do not expand drawer behaviour before those are complete.
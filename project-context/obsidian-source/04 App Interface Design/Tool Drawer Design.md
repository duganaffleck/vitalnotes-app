# Tool Drawer Design

The Tool Drawer defines how active VitalNotes tools may appear inside the app without interrupting the reading experience.

Tools should support the guide.

They should not overpower the section.

A tool drawer exists so a student can use a reusable process at the moment it becomes helpful, then return to the section without feeling pulled into a second lesson.

---

## Purpose

The Tool Drawer should give students access to active tools when those tools directly support the section they are reading.

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

The current active drafted tools are:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] - Draft v1

These are the only tools that should be treated as active in the first app slice.

Planned tools should not appear as live tools yet.

---

## Planned Tools

These tools remain planned until their related sections are drafted and stable:

- [[../03 Rebuilt Content/Tools Library/Clinical Reasoning Check]]
- [[../03 Rebuilt Content/Tools Library/Pattern Recognition Safety Check]]
- [[../03 Rebuilt Content/Tools Library/Scenario Day Reset]]
- [[../03 Rebuilt Content/Tools Library/OSCE Reset]]
- [[../03 Rebuilt Content/Tools Library/Five Whys Tool]]
- [[../03 Rebuilt Content/Tools Library/Reflection Without Journaling Tool]]

Do not show planned tools inside the app as usable tools.

They may appear only in internal planning notes until drafted.

---

## Tool Drawer Behaviour

The first version should stay simple.

Possible behaviour:

- a small “Open tool” button near a relevant section
- a drawer that slides in or opens below the section
- a compact tool card near the end of the section
- a link to the full Tools Library page

The simplest useful version is preferred.

The drawer should:

- open clearly
- close clearly
- preserve the reader’s place
- avoid covering too much of the section
- avoid requiring setup
- avoid saving data in the first version
- avoid making the student feel assessed

The drawer does not need:

- accounts
- saved responses
- progress tracking
- scoring
- completion states
- AI feedback
- complex animation
- automatic exports

---

## Tool Drawer Placement

A tool drawer may appear when a tool directly supports the section.

It should not appear just because a related tool exists somewhere in the guide.

Current likely placements:

### Directive Meaning Check

May appear with:

- [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]]

May also be related to:

- [[../03 Rebuilt Content/02 Build Understanding/Meaning Before Memorization]]
- [[../03 Rebuilt Content/02 Build Understanding/Pathophysiology Through Patterns]]

Primary use:

Help students understand directive purpose, clinical risk, boundaries, withholding, stopping, patching, and reassessment.

Placement note:

This is a strong drawer candidate for [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]].

It does not need to appear everywhere directives are mentioned.

---

### Smart Note Template

May appear with:

- [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]]
- [[../03 Rebuilt Content/03 Build Usable Notes/Types of Notes and Idea Maturation]]
- [[../03 Rebuilt Content/03 Build Usable Notes/Obsidian for Learning Paramedicine]]

May also be related to:

- [[../03 Rebuilt Content/02 Build Understanding/Meaning Before Memorization]]
- [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]]

Primary use:

Help students turn a concept, scenario error, confusing idea, or repeated feedback point into one reusable thinking note.

Placement note:

This is a strong drawer candidate for [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]].

It may appear more lightly in the other Build Usable Notes sections.

Do not make the drawer feel like an Obsidian workflow or productivity system.

---

### Clinical Recall Prompt Builder

May appear with:

- [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]]
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]]

May also be related to:

- [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]]
- [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]]
- [[../03 Rebuilt Content/03 Build Usable Notes/Types of Notes and Idea Maturation]]
- [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]]

Primary use:

Help students turn facts, notes, scenario errors, directive details, and confusing concepts into recall prompts that support clinical use.

Placement note:

This is a strong drawer candidate for [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]] and [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]].

It may be referenced from [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]], but it does not need to appear as a primary drawer there.

Do not turn this into Anki integration, deck management, automated flashcard generation, or a flashcard platform.

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

- thinking-check
- template
- prompt-builder

Do not create more tool types unless the interface clearly needs them.

---

## Tool Type Behaviours

### Thinking Check

Used for tools such as:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]

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

Used for tools such as:

- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]

Recommended display:

- short purpose statement
- when to use
- fields with brief labels
- optional copyable structure later

Avoid:

- making Obsidian feel mandatory
- turning the note template into a productivity workflow
- adding too many fields
- making the tool feel like homework

---

### Prompt Builder

Used for tools such as:

- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Recommended display:

- short purpose statement
- when to use
- builder structure
- optional example later
- optional copy support later, if useful

Avoid:

- Anki integration
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

The first version of the Tool Drawer should not include:

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
- Anki integration
- deck management
- automated flashcard generation
- complex personalization

Later, some features may be reconsidered if they clearly support student learning without changing the app’s purpose.

For now, the drawer should display tools, not become a tool platform.

---

## Mobile Behaviour

On mobile, the Tool Drawer should be easy to use without blocking the section.

Possible mobile behaviour:

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

## Relationship to Tools Library

The Tool Drawer is contextual.

The Tools Library is central.

A student may encounter a tool inside a section, then return to it later through the Tools Library.

The Tools Library should show active drafted tools only during the first app slice:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Planned tools should stay hidden from the student-facing Tools Library until drafted and earned.

---

## Relationship to Section Reader

The Tool Drawer belongs inside or beside the Section Reader.

The Section Reader should decide whether a section has a related active tool.

The drawer should not appear globally on every page.

The drawer should not interrupt sections where no tool is needed.

Examples:

- [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]] may show [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]].
- [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]] may show [[../03 Rebuilt Content/Tools Library/Smart Note Template]].
- [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]] may show [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]].
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] may show [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]].

Sections such as [[../03 Rebuilt Content/01 Why Learning Feels Hard/Cognitive Load]] and [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]] may remain tool-free even if they relate to future or active tools.

---

## First Vertical Slice Test

The first app slice should test whether Tool Drawer behaviour works with three tool types:

1. thinking-check  
   [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]

2. template  
   [[../03 Rebuilt Content/Tools Library/Smart Note Template]]

3. prompt-builder  
   [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

The test should answer:

- Can the student open a tool without losing the section?
- Does the tool feel optional?
- Does the tool reduce friction?
- Does the drawer avoid becoming a second lesson?
- Does the drawer avoid feeling like homework?
- Does the drawer preserve the calm reading experience?
- Does the prompt-builder stay broader than Anki?
- Does the app avoid flashcard-platform behaviour?

---

## Acceptance Criteria

The Tool Drawer is ready for first-slice testing if:

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

## Design Rule

A tool drawer should reduce friction.

If opening the drawer makes the section harder to read, the drawer is not helping.
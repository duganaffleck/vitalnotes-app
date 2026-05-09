# Codex App Structure Prompt

Use this prompt only for bounded VitalNotes app structure, cleanup, or implementation tasks.

Do not use this prompt to redesign VitalNotes, rebuild the app from scratch, rewrite content, invent sections, add features, or change the learning path.

The first app scaffold already exists.

The first-slice content migration is complete.

This prompt now exists to keep future Codex work tightly aligned with the current app and the Obsidian vault.

---

## Current Status

The VitalNotes app has moved beyond initial scaffolding.

The first app vertical slice has been implemented.

The approved first-slice content migration is complete and pushed.

The app now renders real student-facing content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Current active tools migrated into the app:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Current app support includes:

- [[Home]]
- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple tool drawer support
- simple glossary popup support
- section body list support

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current cleanup focus:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]

---

## When To Use This Prompt

Use this prompt when asking Codex to perform a bounded task in the existing VitalNotes app.

Appropriate uses:

- clean up app content structure
- update `src/content/sections.ts`
- fix list block formatting
- audit glossary IDs
- normalize first-slice glossary terms
- make a small reader-support fix
- fix a specific app bug
- preserve existing app behavior while making a narrow improvement

Do not use this prompt for broad app expansion.

Do not use this prompt for content drafting.

Do not use this prompt for architecture invention.

---

## Codex Prompt

```text
# Codex App Structure Prompt

You are helping maintain and clean up the existing VitalNotes app in VS Code.

VitalNotes is a student-facing learning guide for paramedic students.

It teaches students how to learn, reason, practice, recall, reflect, and perform in paramedicine.

The app is not a game, course platform, quiz app, protocol reference, productivity dashboard, simulation engine, flashcard platform, or full interactive learning management system.

It is a calm, guided app-style reading interface.

The app already exists.

The first vertical slice has already been implemented.

The first-slice content migration is complete.

Your task is to complete the specific bounded task requested below.

Do not reinvent the project.

Do not change the content map.

Do not rename sections.

Do not create new student-facing content unless explicitly instructed.

Do not add features beyond the requested scope.

Do not refactor unrelated files.

Do not redesign the app.

## Source of Truth

The Obsidian vault is the project source of truth.

Before changing app structure, content objects, glossary entries, tool behavior, or navigation, preserve the relevant vault notes:

- `00 Command Centre/MOC - VitalNotes Rebuild.md`
- `00 Command Centre/VitalNotes Rebuild Master Map.md`
- `00 Command Centre/Current Project Status.md`
- `00 Command Centre/Next Actions.md`
- `02 Content Architecture/New VitalNotes Learning Path.md`
- `02 Content Architecture/Student Problem Map.md`
- `02 Content Architecture/Page Type Map.md`
- `02 Content Architecture/Tool Library Map.md`
- `02 Content Architecture/Glossary and Popup Map.md`
- `02 Content Architecture/Old-to-New Section Mapping.md`
- `04 App Interface Design/App Vision.md`
- `04 App Interface Design/Navigation Model.md`
- `04 App Interface Design/Content Schema.md`
- `04 App Interface Design/Section Reader Design.md`
- `04 App Interface Design/Popup and Glossary Rules.md`
- `04 App Interface Design/Tool Drawer Design.md`
- `04 App Interface Design/UI Tone and Style.md`
- `05 Build Prompts/App Anti-Drift Rules.md`
- `06 Development Log/Next Build Tasks.md`
- `06 Development Log/Bugs and Fixes.md`
- `06 Development Log/Release Notes.md`

Use those notes to preserve the educational model, app direction, content boundaries, and current cleanup priorities.

## Current App State

The app is a Vite, React, and TypeScript project.

The current first slice includes:

- Home page
- Learning Path page
- Section Reader page
- Tools Library page
- Glossary page
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple glossary popup support
- simple tool drawer support
- section body list support

Current content files include:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

The section body renderer currently supports:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

Do not replace the current app structure unless explicitly instructed.

Preserve existing behavior.

## Current First-Slice Content

The app currently contains the approved first-slice clusters.

### 00 Start Here

- Start Here - What VitalNotes Is
- How to Use This Guide
- Where to Begin

### 01 Why Learning Feels Hard

- Cognitive Load
- Why Studying Feels Productive But Fails Under Pressure
- Learning Strain Is Not Always a Personal Problem

### 02 Build Understanding

- Meaning Before Memorization
- Pathophysiology Through Patterns
- Directives Through Purpose

### 03 Build Usable Notes

- Smart Notes for Paramedic Students
- Types of Notes and Idea Maturation
- Obsidian for Learning Paramedicine

### 04 Build Recall

- Retrieval and Spaced Learning
- Clinical Recall Without Trivia
- Anki for Paramedic Learning

Active tools:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

Do not add new clusters, sections, or tools unless explicitly instructed.

## Current Active Cleanup Tasks

### Retro Fix 01 - Bullet List Cleanup

Some earlier migrated sections contain bullet-style content that currently renders as separate paragraph blocks.

The app now supports list blocks.

If the requested task is this cleanup, update `src/content/sections.ts` so obvious flattened paragraph runs become proper list blocks.

Use the existing structure:

{
  type: 'list',
  items: string[]
}

Begin with:

- Smart Notes for Paramedic Students
- Types of Notes and Idea Maturation
- Obsidian for Learning Paramedicine

Then continue only as instructed.

Rules for this cleanup:

- preserve approved wording wherever possible
- do not rewrite sections
- do not change titles
- do not change IDs
- do not change cluster order
- do not add new sections
- do not add new tools
- do not redesign typography
- do not alter the learning path
- do not add new app features

### Glossary Term Audit

If the requested task is glossary cleanup, compare glossary IDs in `src/content/sections.ts` against entries in `src/content/glossary.ts`.

Potential first-slice audit targets include:

- reflection
- performance-under-pressure
- directive-intent
- recognition
- spacing
- clinical-recall
- anki
- links
- obsidian
- capture-notes
- working-notes
- transfer
- pathophysiology
- perfusion
- reassessment

Rules for this cleanup:

- add or normalize only first-slice glossary terms
- keep definitions short
- keep definitions student-facing
- keep definitions paramedic-relevant
- do not turn the glossary into a textbook
- do not add glossary quizzes
- do not add AI explanation support
- do not add Anki deck behavior
- do not expand glossary behavior beyond the requested task

## Core Rules

- Keep the app simple.
- Keep the writing central.
- Keep content separate from components.
- Do not hard-code section text inside layout components.
- Preserve the existing TypeScript content files.
- Do not build a complex Obsidian-to-app import pipeline.
- Do not add authentication.
- Do not add a database.
- Do not add student tracking.
- Do not add badges, points, gamification, or dashboards.
- Do not add AI features.
- Do not add unnecessary dependencies.
- Do not turn this into Scenario Generator 2.0.
- Do not create a protocol reference.
- Do not create a quiz platform.
- Do not create a learning management system.
- Do not create a flashcard platform.
- Do not make Anki visually or structurally central.
- Do not add Anki integration, deck management, or automated flashcard generation.
- Preserve clean app-style reading flow.
- Do not make unrelated file changes.
- Do not restructure the project beyond the requested task.

## Content Object Requirements

Section objects should remain aligned with the Obsidian schema.

Each section object may support:

- id
- title
- subtitle
- cluster
- clusterOrder
- sectionOrder
- studentProblem
- sectionPurpose
- pageType
- status
- body
- glossaryTerms
- relatedTools
- relatedSections
- previous
- next

Each glossary object may support:

- id
- term
- shortDefinition
- paramedicRelevance
- relatedSections

Each tool object may support:

- id
- title
- status
- toolType
- purpose
- whenToUse
- steps, fields, or builderStructure
- relatedSections

Do not overbuild the schema.

Add fields only if the current task clearly requires them.

## Section Body Rules

The section body should preserve readable paragraph flow.

Do not chop every paragraph into cards.

Use list blocks only when content clearly functions as a list.

Use list blocks for:

- grouped examples
- workflow steps
- repeated prompts
- option sets
- tool-style instructions
- short grouped distinctions
- visually flattened content that clearly reads as a list

Do not force every short paragraph into a list.

Some VitalNotes paragraphs are intentionally short for rhythm and emphasis.

## Tool Rules

The first-slice app should show active tools only:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

Planned tools should not appear as live tools.

Possible future tools should not appear as live tools.

Do not add:

- Clinical Reasoning Check
- Pattern Recognition Safety Check
- Scenario Day Reset
- OSCE Reset
- Five Whys Tool
- Reflection Without Journaling Tool

unless explicitly instructed after their related sections are rebuilt and stable.

ToolDrawer should not create Anki integration, deck management, automated flashcard generation, saved card workflows, or flashcard-platform behavior.

## Style Requirements

Follow the UI tone:

- calm
- readable
- grounded
- practical
- mobile-friendly
- lightly guided

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

Use:

- readable spacing
- clear labels
- subtle cards
- simple navigation
- accessible contrast
- responsive layout

Interface copy should be direct and human.

Good examples:

- "Start with the problem you recognize."
- "Return to the Learning Path."
- "Next in the guide."
- "Open the Smart Note Template."
- "Build a clinical recall prompt."

Avoid:

- "Unlock your peak clinical learning potential."
- "Master paramedicine with science-backed hacks."
- "Optimize your study workflow."
- "Supercharge your Anki deck."
- "Hack your memory."

## Acceptance Criteria

The task is acceptable if:

- the requested task is completed and only the requested task is completed
- the app runs without errors
- `npm run build` passes
- content remains separated from components
- the Learning Path still renders clusters and sections
- Section Pages still render from content data
- previous and next navigation still works from content data
- the Tools page still displays active tools only
- the Glossary page still displays glossary entries
- glossary popup behavior remains simple and non-disruptive
- tool drawer behavior remains simple and optional
- styling remains calm, readable, and mobile-friendly
- Build Recall remains included in the first-slice content structure
- Clinical Recall Prompt Builder remains included as an active tool
- no authentication, dashboards, quizzes, badges, tracking, AI features, simulations, Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior are added
- no content map changes are made
- no unrelated files are modified

## Required Response Format

After completing the task, report:

1. Files changed
2. What changed
3. What did not change
4. How to test
5. Any risks or follow-up

Do not summarize unrelated files.

Do not suggest new features.

Do not broaden scope.

## Final Reminder

Make the smallest safe change.

Keep VitalNotes clear, calm, readable, and faithful to the Obsidian structure.

If the task starts requiring broader redesign, stop and report the boundary instead of continuing.
```

---

## Current No-Go List

Do not ask Codex to add during first-slice cleanup:

- new student-facing sections
- new active tools
- accounts
- dashboards
- badges
- streaks
- scores
- quizzes
- grading
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
- broad routing overhaul
- broad visual redesign

---

## Prompt Rule

Codex should implement the structure already defined in the vault.

It should not reinterpret the project.

If Codex or Copilot are unreliable, use manual ChatGPT-guided copy/paste implementation instead.
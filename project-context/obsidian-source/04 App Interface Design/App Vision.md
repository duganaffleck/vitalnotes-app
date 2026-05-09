# App Vision

## Working Name

VitalNotes Learning Guide

---

## Core Idea

VitalNotes is a calm, content-driven app interface for paramedic students.

It helps students move through a structured guide about learning, reasoning, practice, OSCE preparation, retrieval, note-making, and reflection.

The app is not primarily interactive at this stage.

Its first job is navigation, flow, clarity, and support.

The app should render the VitalNotes guide well before it tries to become anything else.

The writing is the main experience.

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

Current active cleanup:

- [[Retro Fix 01 - Bullet List Cleanup]]

Next cleanup:

- [[Glossary Term Audit]]

Current phase:

- first-slice cleanup
- reader-quality testing preparation
- vault alignment

Do not expand app scope yet.

---

## Product Position

VitalNotes is not a course platform.

It is not a quiz app.

It is not a productivity system.

It is not a simulation engine.

It is not a flashcard platform.

It is not an Anki platform.

It is a student-facing learning guide that helps paramedic students understand how to learn, think, practice, and improve in ways that transfer to labs, scenarios, OSCEs, and real clinical decision-making.

The app should make the guide easier to use than a traditional blog.

It should not make the project feel larger, louder, or more complicated than the content requires.

---

## What the App Should Do

The app should:

- organize the guide into clear learning paths
- make sections easier to move through
- preserve previous and next flow between sections
- support short glossary popups or cards for key concepts
- provide optional tool drawers where a reusable tool is justified
- collect active tools in a simple [[Tools Library]]
- allow students to find help based on the problem they are experiencing
- keep reading calm, spacious, and focused
- make the guide feel more usable than a traditional blog
- support the Obsidian-based content structure without exposing internal project architecture

The current first slice already supports the core version of this vision.

The next work is cleanup and testing, not expansion.

---

## What the App Should Not Do Yet

The app should not:

- require accounts
- grade students
- track performance
- become a simulation engine
- become a full quiz platform
- overuse gamification
- become a dashboard
- become a learning management system
- turn Smart Notes into a productivity identity
- make Obsidian feel mandatory
- make Anki feel like the core learning system
- become an Anki platform
- include [[Anki Integration]]
- include deck management
- include automated flashcard generation
- include flashcard-platform behavior
- bury the writing under interaction
- create tools that have not been earned by the content

---

## Current Content Foundation

The following clusters are drafted and migrated into the first app slice.

### [[00 Start Here]]

- [[Start Here - What VitalNotes Is]] - Draft v3, migrated to first-slice app
- [[How to Use This Guide]] - Draft v3, migrated to first-slice app
- [[Where to Begin]] - Draft v2, migrated to first-slice app

### [[01 Why Learning Feels Hard]]

- [[Cognitive Load]] - Draft v2, migrated to first-slice app
- [[Why Studying Feels Productive But Fails Under Pressure]] - Draft v2, migrated to first-slice app
- [[Learning Strain Is Not Always a Personal Problem]] - Draft v2, migrated to first-slice app

### [[02 Build Understanding]]

- [[Meaning Before Memorization]] - Draft v2, migrated to first-slice app
- [[Pathophysiology Through Patterns]] - Draft v2, migrated to first-slice app
- [[Directives Through Purpose]] - Draft v2, migrated to first-slice app

### [[03 Build Usable Notes]]

- [[Smart Notes for Paramedic Students]] - Draft v2, migrated to first-slice app
- [[Types of Notes and Idea Maturation]] - Draft v2, migrated to first-slice app
- [[Obsidian for Learning Paramedicine]] - Draft v2, migrated to first-slice app

Cleanup note:

[[03 Build Usable Notes]] is an early target for [[Retro Fix 01 - Bullet List Cleanup]] because some app-migrated list-like content may still be flattened into paragraph blocks.

### [[04 Build Recall]]

- [[Retrieval and Spaced Learning]] - Draft v2, migrated to first-slice app
- [[Clinical Recall Without Trivia]] - Draft v2, migrated to first-slice app
- [[Anki for Paramedic Learning]] - Draft v2, migrated to first-slice app

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as excluded, undecided, pending, or future-facing.

---

## Current Active Tools

Only these tools are active in the first app slice:

- [[Directive Meaning Check]] - Draft v1, migrated to first-slice app
- [[Smart Note Template]] - Draft v1, migrated to first-slice app
- [[Clinical Recall Prompt Builder]] - Draft v1, migrated to first-slice app

These tools may appear in:

- [[Tools Library]]
- related tool cards
- contextual tool drawers where justified

Do not treat planned tools as active app features.

Do not add new active tools during first-slice cleanup unless explicitly approved.

---

## Next Possible Content Direction

Next possible content cluster:

- [[05 Think Clinically]]

Next possible student-facing section:

- [[Clinical Reasoning]]

Do not begin this cluster during first-slice cleanup unless Dugan explicitly chooses to return to content drafting.

The current active work is app reader cleanup.

---

## First App Slice

The first app slice has been implemented.

Its job is to test whether VitalNotes works as a calm reading interface before expanding features.

Current first slice:

- [[Home]]
- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- next and previous navigation
- related section cards
- related tool cards
- simple glossary popup support
- simple tool drawer support
- section body list support
- clean responsive layout
- problem-based entry through [[Where to Begin]]

Reason for including [[04 Build Recall]]:

- it gives the first slice a fuller learning arc from understanding, to usable notes, to reliable access
- it allows tool behavior to be tested with three different tool types: thinking check, note template, and prompt builder
- it helps test whether a practical system page like [[Anki for Paramedic Learning]] can sit inside the guide without making the app feel like a flashcard platform

Current status:

- implemented
- migrated
- pushed
- in cleanup

---

## Current Cleanup Priorities

### [[Retro Fix 01 - Bullet List Cleanup]]

Purpose:

Update `src/content/sections.ts` so obvious flattened paragraph runs become proper `list` blocks.

Primary early targets:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

This cleanup should:

- preserve approved wording wherever possible
- improve presentation fidelity
- keep the current content map intact
- avoid broad visual redesign
- avoid adding new features

### [[Glossary Term Audit]]

Purpose:

Compare glossary IDs in `src/content/sections.ts` against entries in `src/content/glossary.ts`.

Potential audit targets:

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

Only first-slice glossary terms should be added or normalized during this pass.

---

## Current Build Philosophy

Start with the smallest working structure that can test the actual reading experience.

Current content files include:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

The app currently uses manual TypeScript content objects.

This is acceptable for the first vertical slice.

Do not build a complex [[Obsidian Import Pipeline]] during first-slice cleanup.

Do not add MDX, CMS, automated sync, or a publishing pipeline yet.

Obsidian remains the source of truth.

The app content folder may mirror or import from the vault later if needed, but that should not be solved before the first reading experience is cleaned up and tested.

---

## Relationship to Obsidian

Obsidian is the project source of truth.

The app should render the best parts of the Obsidian content structure:

- student-facing sections
- learning path
- glossary terms
- active tools
- previous and next navigation
- related sections

The app should not expose:

- internal project maps
- development logs
- source material indexes
- planning notes
- draft review notes
- old-to-new mapping files
- private architecture decisions

The student should see a guide, not the workshop behind it.

---

## Relationship to Scenario Generator

Scenario Generator helps instructors create better practice.

VitalNotes helps students learn from practice.

The two products should feel related in values:

- realism
- clinical reasoning
- practical learning
- low tolerance for shallow educational design
- respect for students under pressure

But VitalNotes should remain calmer, simpler, and more guide-like.

It should not become Scenario Generator for students.

---

## Design Feel

The app should feel:

- quiet
- readable
- grounded
- practical
- lightly guided
- student-facing
- paramedicine-specific
- serious without being stiff

It should avoid:

- motivational startup energy
- productivity-app aesthetics
- gamified learning pressure
- dashboard clutter
- flashy interactions
- generic education-platform language
- Anki power-user aesthetics
- flashcard-platform behavior

The student should feel like they are moving through a thoughtful guide built by someone who understands how paramedic school actually feels.

---

## App Success Test

The first app version succeeds if a student can:

- understand what VitalNotes is
- move through the learning path without confusion
- read a section calmly
- use glossary support without losing the thread
- open a tool only when it helps
- move to the next section naturally
- enter through a current learning problem
- feel that the app is lighter and clearer than the blog format

The app fails if the interface becomes more interesting than the learning.

---

## Current No-Go List

Do not add during first-slice cleanup:

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

## Vision Rule

The app should render the guide clearly.

It should not make VitalNotes larger, louder, or more complex than the student learning problem requires.
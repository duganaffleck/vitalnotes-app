# Next Build Tasks

This file tracks active technical build tasks for the VitalNotes app.

It should not be used for content drafting, broad architecture debates, or feature brainstorming.

Those belong in:

- [[Open Questions]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Decisions]]

---

## Current Build Phase

The first vertical slice has been implemented, migrated, cleaned up, audited, smoke tested, and pushed.

The app-readiness checkpoint is complete.

The first working app shell exists and runs locally.

The approved first-slice content migration is complete.

[[UI Pass 02 - Shared VitalNotes Brand System]] is complete, shipped, and locked.

Slice 02 - Think Clinically Foundations is complete, migrated, tested, pushed, and live in the app.

The app now renders real student-facing guide content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[05 Think Clinically]]

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Completed stabilization and migration work includes:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]
- related section and related tool audit
- reader typography and spacing pass
- [[UI Pass 02 - Shared VitalNotes Brand System]]
- [[Slice 02 Migration Decisions - Think Clinically Foundations]]

The app is currently stable, demo-ready, and visually aligned with the shared VitalNotes / Scenario Generator brand system.

---

## Active Task

### Choose the next bounded project step

There is no active app migration task right now.

Slice 02 is complete.

The next task is to decide the next bounded project step before editing app files again.

Possible next directions:

- pause for a post-Slice 02 review after living with the app
- continue into [[06 Practice Better]]
- consider whether [[Clinical Reasoning Check]] has earned activation
- update any remaining supporting Obsidian status files
- prepare the next bounded content migration slice

Do not jump directly into `src/content/sections.ts`.

Do not begin [[06 Practice Better]] migration until the next slice is explicitly chosen.

Do not activate a new tool unless it clearly adds value beyond the existing section prose.

---

## Current App Content

### First App Slice

The first app slice includes:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

### Slice 02 - Think Clinically Foundations

Status: complete, migrated, tested, pushed, and live in the app

Slice 02 includes:

- [[05 Think Clinically/Clinical Reasoning]]
- [[05 Think Clinically/Pattern Recognition]]
- [[05 Think Clinically/Avoiding Premature Closure]]

Updated app files:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/learningPath.ts`

Completed checks:

- glossary audit passed
- related links audit passed
- build passed
- Learning Path smoke test passed
- previous and next navigation passed
- glossary chip behavior passed
- related-section cards passed
- visual scan passed

Commit:

`Add Think Clinically foundations slice`

No new active tools were added during Slice 02 migration.

---

## Tool Status

### Active Tools

Only these tools are active:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Do not add extra active tools unless explicitly approved.

### Planned Tools

The following tools remain planned, not active:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

The most likely next tool candidate is:

- [[Clinical Reasoning Check]]

Do not activate it automatically.

Activation should happen only if the tool clearly adds value beyond the section prose.

Current decision:

- keep [[Clinical Reasoning Check]] planned for now
- keep [[Pattern Recognition Safety Check]] planned for now
- do not update `src/content/tools.ts` unless a tool is explicitly approved

---

## Next Migration Candidates

No next migration slice has been chosen yet.

Potential next content direction:

### [[06 Practice Better]]

Possible future slice:

- [[06 Practice Better/Scenario Days as Learning Tools]]
- [[06 Practice Better/Common Errors and What They Reveal]]
- [[06 Practice Better/Focused Practice After Feedback]]

This is not approved yet.

Before choosing this slice, review:

- current Obsidian source text
- section sequence
- overlap with [[05 Think Clinically]]
- whether [[Clinical Reasoning Check]] should be activated first or kept parked
- whether any Practice Better tool has earned activation

Do not expand into [[07 Perform Under Pressure]] or [[08 Reflect and Improve]] yet.

---

## Required Preparation Before Any Future Migration

Before migrating another slice:

- confirm the current Obsidian source text for each section
- confirm stable section titles
- confirm stable section IDs
- confirm cluster placement
- confirm previous and next navigation
- confirm related section links conservatively
- confirm whether glossary terms need to be added
- confirm whether any planned tool has earned activation
- confirm whether the Learning Path file needs updating
- confirm whether app content files are the only files that need changes

Do not assume a planned tool becomes active just because its related section is being migrated.

Planned tools remain parked unless explicitly approved.

Use:

- [[Repeatable Content Migration Checklist]]

---

## Expected App Files for Future Migration

Future migration may touch:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/learningPath.ts`
- `src/content/tools.ts`, only if a new tool is explicitly approved

Do not change tool data unless a tool is being activated.

Do not change app routes.

Do not change navigation structure.

Do not change component architecture unless a real migration issue appears.

Do not change CSS or visual branding unless a separate UI pass is explicitly approved.

---

## Required Checks During Future Migration

Use the repeatable checklist.

Run:

- `node scripts/audit-glossary.cjs`
- `node scripts/audit-related-links.cjs`
- `npm run build`

Then smoke test:

- [[Home]]
- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- previous and next navigation
- related section cards
- related tool cards, if relevant
- glossary chips and popup behavior
- narrow browser width

Local development address:

`http://localhost:5173/`

---

## Completed First-Slice Migration

The approved first-slice clusters have been migrated into the app.

### [[00 Start Here]]

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

### [[01 Why Learning Feels Hard]]

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

### [[02 Build Understanding]]

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

### [[03 Build Usable Notes]]

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

### [[04 Build Recall]]

- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Build Recall is included in the first vertical slice.

Do not revert to older language that treats [[04 Build Recall]] as undecided, excluded, future-facing, or not yet migrated.

---

## Completed Slice 02 Migration

### [[05 Think Clinically]]

- [[Clinical Reasoning]]
- [[Pattern Recognition]]
- [[Avoiding Premature Closure]]

Status: complete, migrated, tested, pushed, and live in the app

Migration files updated:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/learningPath.ts`

No new active tools were added.

Planned tools remain parked:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]

---

## Completed First-Slice Stabilization

### [[Retro Fix 01 - Bullet List Cleanup]]

Status: complete

Flattened paragraph runs were converted into proper list blocks where appropriate.

### [[Glossary Term Audit]]

Status: complete

The glossary audit script exists and passes.

Script:

- `scripts/audit-glossary.cjs`

Most recent audit result:

- no missing glossary entries
- every referenced glossary term exists

Known unused glossary entries:

- `metacognition`
- `recall`

Leave these alone for now.

### Related Section and Related Tool Audit

Status: complete

The related-link audit script exists and passes.

Script:

- `scripts/audit-related-links.cjs`

Most recent audit result:

- no missing related sections
- no missing related tools

### Reader Typography and Spacing Pass

Status: complete

Reader spacing, list rendering, glossary panel spacing, related panels, previous and next navigation, and tool drawer readability were refined.

### [[UI Pass 02 - Shared VitalNotes Brand System]]

Status: complete, shipped, and locked

The app now uses the shared VitalNotes brand system aligned with Scenario Generator.

Completed changes included:

- strengthened shared colour system
- aligned typography direction
- refined page headers and section headers
- normalized Home page styling with other pages
- changed section headers to use a left cue with right-side fade
- changed student-problem panels to match the same left cue with right-side fade
- removed the redundant "Open related section" action from the Tools page
- replaced the temporary VN mark with the shared VitalNotes logo asset

---

## Hold

Do not work on the following yet:

- new features
- app routing overhaul
- [[Obsidian Import Pipeline]]
- MDX
- [[Anki Integration]]
- quizzes
- dashboards
- accounts
- progress tracking
- analytics
- AI feedback
- AI reflection
- instructor tools
- LMS integration
- CMS

The app is still a calm reading interface.

The writing is the main experience.

---

## Current Technical Notes

External Windows PowerShell is being used for terminal commands because the VS Code integrated terminal has a ConPTY launch issue.

Codex and Copilot are unreliable and should not be part of the critical path.

Manual ChatGPT-guided copy/paste implementation is the current build workflow.

Reliable commands:

- `npm run build`
- `npm run dev`
- `node scripts/audit-glossary.cjs`
- `node scripts/audit-related-links.cjs`
- `git status`
- `git add .`
- `git commit -m "..."`
- `git push`

Local development address:

`http://localhost:5173/`
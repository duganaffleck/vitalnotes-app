# Current Project Status

## Current Phase

VitalNotes is in active app implementation.

The app-readiness checkpoint is complete.

The first vertical slice is approved, migrated, tested, pushed, and live.

[[UI Pass 02 - Shared VitalNotes Brand System]] is complete, shipped, and locked.

[[Slice 02 Migration Decisions - Think Clinically Foundations]] is complete.

Slice 02 - Think Clinically Foundations is complete, migrated, tested, pushed, and live in the app.

The current phase is:

- first vertical slice stable
- Slice 02 live in the app
- shared brand system aligned with Scenario Generator
- relevant Obsidian status files being updated
- next bounded content direction not yet chosen

The current priority is not feature expansion.

The current priority is closing the Slice 02 documentation loop, then choosing the next bounded project step deliberately.

---

## Current App Status

The app is currently built with:

- Vite
- React
- TypeScript
- VS Code
- external Windows PowerShell
- Git
- GitHub

The app currently runs locally in the browser.

Local development address:

`http://localhost:5173/`

Reliable commands:

- `npm run build`
- `npm run dev`
- `node scripts/audit-glossary.cjs`
- `node scripts/audit-related-links.cjs`
- `git status`
- `git add .`
- `git commit -m "..."`
- `git push`

External Windows PowerShell is being used because the VS Code integrated terminal has a ConPTY launch issue.

Codex and Copilot are unreliable at this stage, so manual ChatGPT-guided copy/paste implementation remains the current build workflow.

---

## Current Working App Shell

The app currently includes:

- [[Home]] page
- [[Learning Path]] page
- [[Section Reader]] page
- [[Tools Library]] page
- [[Glossary]] page
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple tool drawer
- glossary term panel and popup
- first-slice content model
- Slice 02 content model
- active tools model
- glossary model
- section body list support
- shared VitalNotes brand styling aligned with Scenario Generator

The section body renderer currently supports:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

The app remains intentionally simple.

It is a calm, content-driven reading interface.

The writing is the main experience.

---

## Content Migration Status

The approved first-slice content migration is complete.

The approved Slice 02 content migration is complete.

The app now renders real student-facing guide content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[05 Think Clinically]]

First-slice status is recorded in:

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]
- [[App Build Checkpoint 03 - First Slice Demo Ready]]

Slice 02 status is recorded in:

- [[Slice 02 Migration Decisions - Think Clinically Foundations]]

The first-slice reader has completed its demo-readiness cleanup pass.

Slice 02 has completed migration, audit, build, smoke test, and push.

---

## Migrated First-Slice Clusters

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

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as excluded, undecided, future-facing, or not yet migrated.

---

## Slice 02 - Think Clinically Foundations

Status: complete, migrated, tested, pushed, and live in the app

Included sections:

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

Planned tools remain parked:

- [[Tools Library/Clinical Reasoning Check]]
- [[Tools Library/Pattern Recognition Safety Check]]

Current tool decision:

- do not activate Slice 02 tools yet
- consider [[Tools Library/Clinical Reasoning Check]] first if one tool clearly earns activation later
- keep [[Tools Library/Pattern Recognition Safety Check]] planned unless repeated use justifies it

---

## Active First-Slice Tools

Only these tools are currently active:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Supported tool types:

- `thinking-check`
- `template`
- `prompt-builder`

Planned tools should not be treated as live tools yet.

Do not add additional active tools unless explicitly approved.

---

## Planned Tools

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

Activation should happen only if a tool clearly adds value beyond the section prose.

---

## Completed Cleanup and UI Passes

### [[Retro Fix 01 - Bullet List Cleanup]]

Status: complete

Flattened bullet-style paragraph runs were cleaned up where appropriate.

Updated app file:

- `src/content/sections.ts`

Completed clusters:

- [[03 Build Usable Notes]]
- [[02 Build Understanding]]
- [[01 Why Learning Feels Hard]]

Confirmed no changes were needed in:

- [[00 Start Here]]

The first-slice section bodies now use proper list blocks where appropriate.

### [[Glossary Term Audit]]

Status: complete

Created audit script:

- `scripts/audit-glossary.cjs`

The audit checks glossary terms referenced in:

- `src/content/sections.ts`

against glossary entries in:

- `src/content/glossary.ts`

Added missing first-slice glossary entries:

- `directive-intent`
- `performance-under-pressure`
- `perfusion`
- `reflection`

Added or updated Slice 02 glossary support for terms including:

- `clinical-reasoning`
- `working-explanation`
- `uncertainty`
- `reassessment`
- `pattern-recognition`
- `cue`
- `hypothesis`
- `premature-closure`
- `fixation`
- `disconfirming-cue`
- `cognitive-narrowing`

Most recent audit result:

- no missing glossary entries
- every referenced glossary term exists

Known unused glossary entries:

- `metacognition`
- `recall`

Leave these alone for now. They are valid glossary entries, just not referenced in the current app content.

### Related Links Audit

Status: complete

Created audit script:

- `scripts/audit-related-links.cjs`

The audit checks:

- every related section ID exists
- every related tool ID exists
- related sections and related tools per section

First-slice fix completed:

- removed `scenario-days-as-learning-tools` from `learning-strain-is-not-always-a-personal-problem`
- replaced it with `retrieval-and-spaced-learning`

Slice 02 related links were added conservatively.

Most recent audit result:

- no missing related sections
- no missing related tools

Human related-link review has been completed across the first slice and Slice 02.

### Reader Typography and Spacing Pass

Status: complete

Updated app file:

- `src/styles/index.css`

This was a bounded demo-readiness pass.

Refined:

- section body spacing
- section heading rhythm
- section list spacing
- glossary panel spacing
- related panel spacing
- previous / next navigation spacing
- tool drawer readability

No behavior changes were made.

No content changes were made.

No color redesign was done.

No navigation redesign was done.

No component architecture changes were made.

### [[UI Pass 02 - Shared VitalNotes Brand System]]

Status: complete, shipped, and locked

Updated app files included:

- `src/styles/index.css`
- `public/vitalnotes-mark.svg`
- Tools page component

Completed changes:

- strengthened shared colour system
- aligned typography direction
- refined page headers and section headers
- added warmer orange cue styling
- normalized Home page styling with other pages
- changed section headers to use a left cue with right-side fade
- changed student-problem panels to match the same left cue with right-side fade
- removed the redundant "Open related section" action from the Tools page
- replaced the temporary VN mark with the shared VitalNotes logo asset
- preserved the existing app structure, routes, content model, tools, glossary data, and section data

This was primarily a CSS and visual identity pass.

No new features were added.

No content migration was performed during the UI pass.

No navigation redesign was performed.

No app architecture changes were made.

---

## Current Audit Scripts

Keep these scripts in the app project:

- `scripts/audit-glossary.cjs`
- `scripts/audit-related-links.cjs`

Use them after future content migrations and before commits.

Useful commands:

- `node scripts/audit-glossary.cjs`
- `node scripts/audit-related-links.cjs`
- `npm run build`
- `npm run dev`
- `git status`

---

## Demo-Readiness Smoke Test

Status: passed

The first-slice smoke test checked:

- global navigation
- Home page
- Learning Path page
- Tools page
- Glossary page
- active navigation state
- hash-based navigation
- section reader pages
- previous and next navigation
- related section cards
- related tool drawer
- glossary chips and popup behavior
- reader typography and spacing
- list rendering
- mobile-ish browser width behavior

Representative first-slice reader pages checked:

- [[Start Here - What VitalNotes Is]]
- [[Cognitive Load]]
- [[Meaning Before Memorization]]
- [[Smart Notes for Paramedic Students]]
- [[Retrieval and Spaced Learning]]
- [[Anki for Paramedic Learning]]

Tools checked:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Glossary page checked, including added entries:

- Directive intent
- Performance under pressure
- Perfusion
- Reflection

Assessment:

- local app appears clean and appropriate for demo purposes
- live/deployment state appears stable based on review
- first vertical slice can be treated as demo-ready

---

## Slice 02 Smoke Test

Status: passed

Slice 02 smoke test checked:

- [[05 Think Clinically]] appears in Learning Path after [[04 Build Recall]]
- [[Clinical Reasoning]] appears under [[05 Think Clinically]]
- [[Pattern Recognition]] appears under [[05 Think Clinically]]
- [[Avoiding Premature Closure]] appears under [[05 Think Clinically]]
- previous and next navigation from [[Anki for Paramedic Learning]] to [[Clinical Reasoning]]
- previous and next navigation from [[Clinical Reasoning]] to [[Pattern Recognition]]
- previous and next navigation from [[Pattern Recognition]] to [[Avoiding Premature Closure]]
- [[Avoiding Premature Closure]] ends cleanly
- glossary chips open correctly where they appear
- related-section cards look normal
- lists display properly
- no wall-of-text rendering
- no broken spacing
- new pages visually match the existing section pattern

One visual issue was found and fixed before committing:

- the three Slice 02 pages initially began with an extra heading immediately after the page header
- those opening body headings were removed from `src/content/sections.ts`
- the pages now begin consistently with the page title/header, student problem box, and first paragraph

---

## Current Known Issues and Deferred Notes

### VS Code integrated terminal ConPTY failure

Status: workaround active

External Windows PowerShell is currently being used for terminal commands.

App functionality is not affected.

Verified working through external PowerShell:

- `npm run build`
- `npm run dev`
- Git commands

### Codex and Copilot unreliable

Status: workaround active

Manual implementation through ChatGPT-guided copy/paste is the current critical path.

The app should not depend on Codex or Copilot availability.

### Button versus text-link consistency

Status: partially addressed

UI Pass 01 and [[UI Pass 02 - Shared VitalNotes Brand System]] addressed several redundant action treatments.

Completed cleanup included:

- Learning Path section cards now behave more cleanly
- redundant open-section affordances were removed where unnecessary
- the Tools page no longer displays the redundant "Open related section" action

Future UI review may still revisit button versus text-link consistency if a real issue appears.

This does not block the next bounded content slice.

### Possible source filename typo

Status: needs confirmation only if it appears in the actual vault

A copied source file previously appeared as:

- `Where to Being.md`

Expected title:

- `Where to Begin.md`

Confirm whether this typo exists in the real Obsidian vault before renaming anything.

Do not rename files based on memory alone.

---

## App Boundaries

The current app phase does not include:

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
- MDX pipeline
- [[Obsidian Import Pipeline]]

The app remains a calm reading interface.

The writing is the main experience.

---

## Next Planned Slice

No next content migration slice has been chosen yet.

Slice 02 - Think Clinically Foundations is complete and live.

Possible next directions:

- continue into [[06 Practice Better]]
- pause for a post-Slice 02 review after living with the app
- update remaining supporting Obsidian status files
- prepare the next bounded migration slice
- consider whether [[Clinical Reasoning Check]] has earned activation later

Do not expand into [[06 Practice Better]], [[07 Perform Under Pressure]], or [[08 Reflect and Improve]] until the next bounded slice is explicitly chosen.

Before any future migration, use:

- [[Repeatable Content Migration Checklist]]

Do not jump directly into app expansion.

Do not add new active tools unless explicitly approved.

---

## Current Status Assessment

The project is on track.

The app has moved from planning, to shell implementation, to first-slice content rendering, to first-slice demo readiness, to shared brand alignment, to Slice 02 migration.

The next risk is no longer missing first-slice content, unresolved visual identity, or pending Think Clinically migration.

The next risk is uncontrolled expansion.

Immediate work should remain focused on:

1. finishing Obsidian status updates for Slice 02
2. deciding whether to pause for review or choose the next bounded slice
3. using [[Repeatable Content Migration Checklist]] before any future app migration
4. keeping planned tools parked unless one clearly earns activation
5. avoiding feature expansion unless explicitly approved

Do not expand scope yet.
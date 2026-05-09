# Next Build Tasks

## Immediate Priority

The first vertical slice is stable and demo-ready.

The immediate goal is no longer migration, bullet cleanup, glossary cleanup, or first-slice reader spacing.

Those passes are complete.

The current priority is to preserve the stable first slice while choosing the next bounded app-development step.

Do not expand scope yet.

---

## Current First-Slice Status

The approved first-slice content migration is complete and pushed.

The app now renders real student-facing guide content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as pending, excluded, undecided, or future-facing.

The first-slice demo-readiness smoke test has passed.

The first slice can now be treated as a stable foundation for future work.

---

## Completed First-Slice Cleanup Passes

### [[Retro Fix 01 - Bullet List Cleanup]]

Status: complete

Flattened bullet-style paragraph runs were cleaned up where appropriate.

Updated app file:

- `src/content/sections.ts`

Completed clusters:

- [[03 Build Usable Notes]]
- [[02 Build Understanding]]
- [[01 Why Learning Feels Hard]]

Confirmed no list cleanup was needed in:

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

Final audit result:

- no missing glossary entries
- every referenced glossary term exists

Known unused glossary entries:

- `metacognition`
- `recall`

Leave these alone for now. They are valid glossary entries, just not referenced in the current first slice.

### Related Links Audit

Status: complete

Created audit script:

- `scripts/audit-related-links.cjs`

The audit checks:

- every related section ID exists
- every related tool ID exists
- related sections and related tools per section

Fixed one broken future-facing related section reference:

- removed `scenario-days-as-learning-tools` from `learning-strain-is-not-always-a-personal-problem`
- replaced it with `retrieval-and-spaced-learning`

Final audit result:

- no missing related sections
- no missing related tools

Human related-link review was completed across the first slice.

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

### Demo-Readiness Smoke Test

Status: complete

Checked:

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

Representative reader pages checked:

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

## Current First-Slice Content

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

---

## Active First-Slice Tools

Only these tools are active:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Supported tool types:

- `thinking-check`
- `template`
- `prompt-builder`

Do not add more tools unless explicitly approved.

Planned tools should not be treated as live tools yet.

---

## Current Useful Commands

Use these commands after future app changes:

- `npm run build`
- `npm run dev`
- `node scripts/audit-glossary.cjs`
- `node scripts/audit-related-links.cjs`
- `git status`

Local address:

- `http://localhost:5173/`

External Windows PowerShell remains the reliable terminal path because the VS Code integrated terminal previously had a ConPTY launch issue.

---

## Next Appropriate Actions

The next useful move is not more content yet.

The next useful move is to choose one bounded app-development pass.

Appropriate next actions, in order:

1. Confirm deployment status and verify Vercel build if needed.
2. Finish updating only the Obsidian files that need the new first-slice stable status.
3. Decide the next bounded app-development pass.
4. Only then consider the next content slice.

Possible next bounded app-development passes include:

- deployment verification cleanup, if needed
- small design consistency pass for button versus text-link affordances
- future repeatable migration checklist
- next content-slice planning
- next content-slice migration

Do not begin the next content slice automatically.

---

## Deferred Design Task

### Button versus text-link consistency

Status: deferred

Later UI review should decide which navigation actions should render as buttons versus text links.

Specific item to revisit:

- Learning Path `Open section` affordance compared with full button treatments

Do not handle this as part of first-slice demo readiness.

This belongs in a later design consistency pass.

---

## Hold For Now

Do not prioritize:

- broad visual redesign
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

## Current Known Constraints

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

Manual implementation through ChatGPT-guided copy/paste remains the current critical path.

The app should not depend on Codex or Copilot availability.

### Possible source filename typo

Status: needs confirmation only if it appears in the actual vault

A copied source file previously appeared as:

- `Where to Being.md`

Expected title:

- [[Where to Begin]]

Confirm whether this typo exists in the real Obsidian vault before renaming anything.

Do not rename files based on memory alone.

---

## Build Rhythm From Here

Use small controlled passes.

For each future app pass:

1. define the bounded issue
2. update only the necessary app content or support file
3. run local build
4. run glossary and related-link audits when content or links change
5. check affected reader sections
6. commit once stable
7. document meaningful fixes in the appropriate vault file only when needed

The app should stay boring and reliable.

That is the point.

---

## Current Rule

Do not expand scope yet.

The first slice is stable.

The next useful move is choosing the next bounded step deliberately.
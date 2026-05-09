# App Build Checkpoint 03 - First Slice Demo Ready

Date: 2026-05-06

## Status

The first VitalNotes app vertical slice is stable and demo-ready.

This checkpoint records the completion of first-slice cleanup, audit, smoke testing, and stability review after the initial shell and content migration checkpoints.

This is not a public release.

It is an internal app-development checkpoint confirming that the first approved vertical slice can now be treated as a stable foundation for future work.

---

## Related Checkpoints

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Checkpoint 01 recorded the first working shell.

Checkpoint 02 recorded the completion of first-slice content migration.

Checkpoint 03 records demo-readiness stabilization.

---

## First-Slice Scope Confirmed

The first vertical slice includes real student-facing guide content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Build Recall remains part of the first app slice.

Do not revert to older language that treats [[04 Build Recall]] as excluded, undecided, pending, or future-facing.

---

## Current First-Slice Sections

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

Only these tools are active in the first slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

No additional tools have been promoted into the active first slice.

Planned tools should not be treated as live tools yet.

---

## Completed Demo-Readiness Work

### Bullet and List Cleanup

Status: complete

[[Retro Fix 01 - Bullet List Cleanup]] has been completed for the first vertical slice.

Updated app file:

- `src/content/sections.ts`

Completed clusters:

- [[03 Build Usable Notes]]
- [[02 Build Understanding]]
- [[01 Why Learning Feels Hard]]

Confirmed no list cleanup was needed in:

- [[00 Start Here]]

Result:

- first-slice section bodies now use proper list blocks where appropriate
- flattened paragraph runs were corrected where needed
- wording remained stable

---

### Glossary Term Audit

Status: complete

[[Glossary Term Audit]] has been completed for the first vertical slice.

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

These should remain for now. They are valid glossary entries, just not referenced in the current first slice.

---

### Related Section and Related Tool Audit

Status: complete

Created audit script:

- `scripts/audit-related-links.cjs`

The audit checks:

- every related section ID exists
- every related tool ID exists
- related sections and related tools per section

One broken future-facing related section reference was fixed.

Removed from `learning-strain-is-not-always-a-personal-problem`:

- `scenario-days-as-learning-tools`

Replaced with:

- `retrieval-and-spaced-learning`

Final audit result:

- no missing related sections
- no missing related tools

Human related-link review was completed across the first slice.

---

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

---

## Smoke Test Status

Status: passed

The first-slice smoke test checked:

- global navigation
- [[Home]] page
- [[Learning Path]] page
- [[Tools Library]] page
- [[Glossary]] page
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

## Current Useful Scripts

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

## Boundaries Still Active

Do not add:

- accounts
- dashboards
- quizzes
- scores
- badges
- streaks
- progress tracking
- analytics
- instructor dashboards
- LMS integration
- AI feedback
- AI reflection
- Anki integration
- deck management
- automated flashcard generation
- CMS
- MDX
- Obsidian import pipeline

The current app remains a bounded first vertical slice.

The app is still a calm reading interface.

The writing is still the main experience.

---

## Known Issues and Deferred Notes

### VS Code integrated terminal ConPTY failure

Status: workaround active

External Windows PowerShell remains the reliable terminal path.

This does not affect app functionality.

### Codex and Copilot unreliable

Status: workaround active

Manual ChatGPT-guided copy/paste remains the reliable implementation workflow.

Do not make Codex or Copilot part of the critical build path yet.

### Button versus text-link consistency

Status: deferred

Later UI review should decide which navigation actions should render as buttons versus text links.

Specific item to revisit:

- Learning Path `Open section` affordance compared with full button treatments

This is not part of first-slice demo readiness.

Track in [[Deferred Ideas]].

### Possible source filename typo

Status: monitoring only if confirmed in vault

A copied source file previously appeared as:

- `Where to Being.md`

Expected title:

- [[Where to Begin]]

Do not rename anything based on memory alone.

Confirm whether this typo exists in the real Obsidian vault before changing anything.

---

## Next App Step

The next app-development pass has not been chosen yet.

Do not jump directly into new content expansion.

Appropriate next actions, in order:

1. finish updating only the Obsidian files that need the new first-slice stable status
2. confirm deployment status and verify Vercel build if needed
3. decide the next bounded app-development pass
4. only then consider the next content slice

Possible bounded passes include:

- deployment verification cleanup, if needed
- small design consistency pass for button versus text-link affordances
- future repeatable migration checklist
- next content-slice planning
- next content-slice migration

---

## Checkpoint Assessment

The first VitalNotes app vertical slice is stable and demo-ready.

The app now proves that real VitalNotes content can live inside a calm reader interface, connect to related sections and tools, support glossary behavior, and preserve the student-facing reading experience.

The next risk is no longer missing first-slice content.

The next risk is uncontrolled expansion.

Continue with small controlled passes.

Do not expand scope yet.
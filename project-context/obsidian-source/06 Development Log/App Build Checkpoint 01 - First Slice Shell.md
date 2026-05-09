# App Build Checkpoint 01 - First Slice Shell

Date: 2026-05-06

## Checkpoint Summary

The first VitalNotes app vertical slice is stable and demo-ready.

This checkpoint records the completion of the first-slice app shell, content migration, cleanup passes, audits, local testing, and live stability review.

The app has moved from initial shell implementation into a working first-slice demonstration of the VitalNotes learning guide.

This does not mean the full app is complete.

It means the approved first vertical slice is now stable enough to use as the foundation for future app development.

## Current App Status

The app has been created as a Vite, React, and TypeScript project.

It runs locally in the browser and builds successfully with:

```powershell
npm run build
```

The app is being developed manually through ChatGPT-guided copy/paste implementation in VS Code.

Codex and Copilot are not part of the critical path at this stage because they were unreliable during earlier build attempts.

External Windows PowerShell remains the reliable terminal path because the VS Code integrated terminal previously had a ConPTY launch issue.

Local development address:

```text
http://localhost:5173/
```

Local development command:

```powershell
npm run dev
```

GitHub repository:

```text
https://github.com/duganaffleck/vitalnotes-app.git
```

## Current Working Features

The first-slice app currently includes:

- Home page
- Learning Path page
- Section Reader page
- Tools Library page
- Glossary page
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple tool drawer
- glossary term panel and popup
- first-slice content model
- active tools model
- glossary model
- list support in the section body renderer

The section body renderer currently supports:

- headings
- paragraphs
- placeholders
- lists

The app is intentionally still a calm, content-driven reading interface.

The writing remains the main experience.

## First-Slice Content Migration Status

First-slice content migration is complete.

The app currently includes real content for the first five approved clusters:

- `00 Start Here`
- `01 Why Learning Feels Hard`
- `02 Build Understanding`
- `03 Build Usable Notes`
- `04 Build Recall`

## Current First-Slice Sections

### 00 Start Here

- `start-here-what-vitalnotes-is`
- `how-to-use-this-guide`
- `where-to-begin`

### 01 Why Learning Feels Hard

- `cognitive-load`
- `why-studying-feels-productive-but-fails-under-pressure`
- `learning-strain-is-not-always-a-personal-problem`

### 02 Build Understanding

- `meaning-before-memorization`
- `pathophysiology-through-patterns`
- `directives-through-purpose`

### 03 Build Usable Notes

- `smart-notes-for-paramedic-students`
- `types-of-notes-and-idea-maturation`
- `obsidian-for-learning-paramedicine`

### 04 Build Recall

- `retrieval-and-spaced-learning`
- `clinical-recall-without-trivia`
- `anki-for-paramedic-learning`

Build Recall remains part of the first app slice.

Do not revert to older planning language that treats Build Recall as outside the first slice or as a later undecided phase.

## Active Tools in First Slice

Only these tools are active:

- `Directive Meaning Check`
- `Smart Note Template`
- `Clinical Recall Prompt Builder`

Supported tool types:

- `thinking-check`
- `template`
- `prompt-builder`

Planned tools should not be treated as live tools yet.

## Explicit Boundaries

The first app slice does not include:

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
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior
- progress tracking
- analytics
- CMS
- MDX pipeline
- Obsidian import pipeline

The app remains a calm reading interface.

The writing is the main experience.

## Cleanup Passes Completed

### Bullet and List Cleanup

Retroactive cleanup of flattened paragraph runs has been completed in earlier migrated sections.

Updated list structures in:

```text
src/content/sections.ts
```

Completed clusters:

- `03 Build Usable Notes`
- `02 Build Understanding`
- `01 Why Learning Feels Hard`

Confirmed no list cleanup was needed in:

- `00 Start Here`

The first-slice section bodies now use proper list blocks where appropriate.

### Glossary Term Cleanup

Created audit script:

```text
scripts/audit-glossary.cjs
```

The script checks `section.glossaryTerms` in:

```text
src/content/sections.ts
```

against entries in:

```text
src/content/glossary.ts
```

Added missing first-slice glossary entries:

- `directive-intent`
- `performance-under-pressure`
- `perfusion`
- `reflection`

Final audit result:

```text
Missing glossary entries
------------------------
None. Every referenced glossary term exists.
```

Known unused glossary entries:

- `metacognition`
- `recall`

Leave these alone for now. They are valid glossary entries, just not referenced in the current first slice.

### Reader Typography and Spacing Pass

Updated:

```text
src/styles/index.css
```

This pass touched only demo-readiness readability spacing.

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

### Related Section and Related Tool Cleanup

Created audit script:

```text
scripts/audit-related-links.cjs
```

The script imports TypeScript content through `esbuild` and checks related links against actual exports.

It verifies:

- every related section ID exists
- every related tool ID exists
- per-section related sections and related tools can be reviewed

Fixed one broken related section reference:

- Removed future-facing `scenario-days-as-learning-tools` from `learning-strain-is-not-always-a-personal-problem`
- Replaced it with `retrieval-and-spaced-learning`

Final audit result:

```text
Missing related sections
------------------------
None. Every related section ID exists.

Missing related tools
---------------------
None. Every related tool ID exists.
```

Human related-link review completed.

Changed:

- `how-to-use-this-guide`
- `where-to-begin`
- `cognitive-load`
- `learning-strain-is-not-always-a-personal-problem`
- `smart-notes-for-paramedic-students`
- `types-of-notes-and-idea-maturation`
- `obsidian-for-learning-paramedicine`
- `retrieval-and-spaced-learning`
- `clinical-recall-without-trivia`

Kept unchanged:

- `start-here-what-vitalnotes-is`
- `why-studying-feels-productive-but-fails-under-pressure`
- `meaning-before-memorization`
- `pathophysiology-through-patterns`
- `directives-through-purpose`
- `anki-for-paramedic-learning`

## Current Useful Scripts

Keep both audit scripts.

```text
scripts/audit-glossary.cjs
scripts/audit-related-links.cjs
```

Useful commands:

```powershell
node scripts/audit-glossary.cjs
node scripts/audit-related-links.cjs
npm run build
npm run dev
git status
```

These scripts should remain part of the app workflow for future content slices.

## Smoke Test Status

A first-slice smoke test has been completed.

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

- `Start Here - What VitalNotes Is`
- `Cognitive Load`
- `Meaning Before Memorization`
- `Smart Notes for Paramedic Students`
- `Retrieval and Spaced Learning`
- `Anki for Paramedic Learning`

Tools checked:

- `Directive Meaning Check`
- `Smart Note Template`
- `Clinical Recall Prompt Builder`

Glossary page checked, including added entries:

- `Directive intent`
- `Performance under pressure`
- `Perfusion`
- `Reflection`

Assessment:

- Local app appears clean and appropriate for demo purposes.
- Live/deployment state appears stable based on review.
- First vertical slice can be treated as demo-ready.

## Known Issues and Deferred Notes

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

Status: deferred design consistency task

Later UI review should decide which navigation actions should render as buttons versus text links.

Specific item to revisit:

- Learning Path `Open section` affordance compared with full button treatments

Do not handle this as part of the first-slice demo-readiness pass.

This belongs in a later design consistency pass.

### Possible source filename typo

Status: needs confirmation only if it appears in the actual vault

A copied source file previously appeared as:

- `Where to Being.md`

Expected title:

- `Where to Begin.md`

Confirm whether this typo exists in the real Obsidian vault before renaming anything.

Do not rename files based on memory alone.

## Current Decisions Confirmed

### Manual migration remains appropriate

Approved Obsidian drafts were migrated manually into TypeScript content objects for the first slice.

This kept the first build simple and avoided premature infrastructure work.

Manual migration remains appropriate for the next bounded slice unless a repeated technical burden clearly justifies a different approach.

### Hash-based navigation remains acceptable

The current app shell uses hash-based navigation.

This remains acceptable for the first-slice app and avoids routing complexity before the content model has been proven further.

### Visual polish should remain bounded

A reader spacing and typography pass has already been completed.

Do not redesign the interface.

Future visual changes should be small, local, and tied to readability or consistency issues found during actual use.

### Audit scripts should stay in the workflow

The glossary and related-link audit scripts are now useful safeguards.

Run them after future content migrations and before commits.

## Next Build Tasks

The first vertical slice is stable.

Do not jump directly into new content expansion before deciding the next bounded step.

Appropriate next actions, in order:

1. Confirm deployment status and verify Vercel build if needed.
2. Update relevant Obsidian development-log and status files.
3. Decide the next bounded app-development pass.
4. Only then consider the next content slice.

Possible next bounded app passes include:

- deployment verification cleanup, if needed
- small design consistency pass for button versus text-link affordances
- next content-slice planning
- future repeatable migration checklist

Do not add new features without checking them against the approved app boundaries.

## Checkpoint Assessment

The first VitalNotes vertical slice is stable and demo-ready.

The app now proves that real VitalNotes content can live inside a calm reader interface, connect to related tools and glossary terms, support basic section navigation, and preserve the guide’s instructional tone.

The current priority is not expansion.

The current priority is protecting this stability while choosing the next bounded app step deliberately.

## Related Vault Notes

- [[Current Project Status]]
- [[Next Build Tasks]]
- [[App Readiness Checkpoint]]
- [[Tool Library Map]]
- [[MOC - Rebuilt Content]]
- [[MOC - App Interface Design]]
- [[Bugs and Fixes]]
- [[Decisions]]
- [[Deferred Ideas]]
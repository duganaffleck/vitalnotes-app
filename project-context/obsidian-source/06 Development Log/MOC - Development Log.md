# MOC - Development Log

This folder tracks project decisions, bugs, feature ideas, deferred ideas, next tasks, open questions, internal checkpoints, and releases.

Use it so the rebuild does not rely on memory alone.

The development log should preserve project continuity without becoming cluttered.

Do not use this folder to track every wording change.

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

## Logs

- [[Decisions]]
- [[Next Build Tasks]]
- [[Open Questions]]
- [[Bugs and Fixes]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Release Notes]]

---

## Purpose of Each File

### [[Decisions]]

Use for major structural, workflow, content architecture, app direction, or future development decisions.

Do not use for minor wording edits.

Current major decisions include:

- Obsidian remains the source of truth.
- Content comes before code.
- The app renders the guide.
- The app does not reinvent the guide.
- The first app should be content-driven and calm.
- [[Start Here - What VitalNotes Is]], [[How to Use This Guide]], and [[Where to Begin]] remain separate.
- The early retrieval problem and later retrieval system remain separate.
- [[02 Build Understanding]] is drafted and migrated.
- [[03 Build Usable Notes]] is drafted and migrated.
- [[04 Build Recall]] is drafted and migrated.
- [[Directive Meaning Check]] is an active drafted tool.
- [[Smart Note Template]] is an active drafted tool.
- [[Clinical Recall Prompt Builder]] is an active drafted tool.
- [[Recognition vs Access Check]] is folded into the broader [[Clinical Recall Prompt Builder]] direction for now.
- The first app slice includes [[04 Build Recall]].
- The first app vertical slice has been implemented.
- The approved first-slice content migration is complete.
- Broad app expansion is deferred until first-slice cleanup and reader-quality testing are complete.

---

### [[Next Build Tasks]]

Use for active and upcoming work.

This is the main operational task list.

It should answer:

- what is complete
- what is in progress
- what comes next
- what must wait

Current focus:

1. complete [[Retro Fix 01 - Bullet List Cleanup]]
2. complete [[Glossary Term Audit]]
3. complete first-slice reader-quality testing
4. then decide whether to continue app polish, prepare deployment, or return to drafting [[Clinical Reasoning]]

Do not let this file become a broad wishlist.

---

### [[Open Questions]]

Use for unresolved decisions that matter but should not interrupt the current phase.

Open questions should stay visible without becoming active work.

Current open-question areas include:

- total final guide size
- how much of Obsidian should eventually be represented in the app
- whether [[Where to Begin]] should later become an interactive selector
- whether active tools should remain both standalone pages and contextual drawers
- whether local reading progress should ever be added
- whether instructor-facing content belongs in a later version
- whether app content should eventually use Markdown, MDX, JSON, or generated TypeScript objects

Do not use [[Open Questions]] for active tasks.

Active tasks belong in [[Next Build Tasks]].

---

### [[Bugs and Fixes]]

Use now that app development has begun.

Track:

- bugs
- rendering issues
- known technical issues
- error messages
- file paths
- fixes made
- testing notes
- unresolved technical issues

Current known issues include:

- VS Code integrated terminal ConPTY failure
- Codex and Copilot access unreliable
- flattened bullet lists in earlier migrated app content
- possible missing or inconsistent glossary IDs

Do not use this file for content drafting issues, broad architecture questions, or feature ideas.

Those belong in:

- [[Next Build Tasks]]
- [[Open Questions]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Decisions]]

---

### [[Feature Ideas]]

Use for possible app or content features that may be useful but are not yet decisions.

Examples might include:

- local progress tracking
- printable tool cards
- glossary drawer
- problem-based entry cards
- optional student-facing downloads
- future simple app enhancements that support reading

Feature ideas should remain parked until they are clearly needed.

Do not treat feature ideas as build tasks.

Do not promote feature ideas during first-slice cleanup.

---

### [[Deferred Ideas]]

Use for ideas that are interesting but not appropriate for the current phase.

Examples include:

- AI-guided reflection
- instructor-facing version
- advanced tool interactions
- Scenario Generator integration
- downloadable PDFs
- gamified progress systems
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- dashboards
- accounts
- quizzes
- analytics
- [[Obsidian Import Pipeline]]
- MDX
- CMS

Deferred ideas are not rejected permanently.

They are protected from interrupting the current rebuild.

---

### [[Release Notes]]

Use for meaningful app-facing or public-facing changes.

This file now includes internal app checkpoints.

Current internal checkpoints include:

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Use [[Release Notes]] for:

- internal app slices
- app versions
- major content releases
- first public slices
- major feature additions
- important fixes after app launch
- known limitations for a release

Do not use release notes for routine section edits, prompt changes, minor glossary changes, or unfinished drafts.

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

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as excluded, undecided, pending, or future-facing.

---

## Current Active Tools

Only these tools are active in the first app slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Planned tools should remain planned until their related sections are rebuilt, stable, and clearly earn tool support.

Planned tools include:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Do not add new active tools during first-slice cleanup unless explicitly approved.

---

## Current App Cleanup

### [[Retro Fix 01 - Bullet List Cleanup]]

Purpose:

Update `src/content/sections.ts` so obvious flattened paragraph runs become proper `list` blocks.

Primary early targets:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

This cleanup should preserve approved wording wherever possible.

It should not rewrite sections, change titles, change IDs, add tools, add features, or redesign the interface.

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

## Current Technical Notes

External Windows PowerShell is being used because the VS Code integrated terminal has a ConPTY launch issue.

Reliable commands:

- `npm run build`
- `npm run dev`
- `git add .`
- `git commit -m "..."`
- `git push`

Local development address:

`http://localhost:5173/`

Codex and Copilot are currently unreliable, so manual ChatGPT-guided copy/paste implementation remains the reliable workflow.

Codex can be reconsidered later, but only for bounded tasks using:

- [[Codex App Structure Prompt]]
- [[Codex Bugfix Prompt]]

---

## Development Log Rules

- Keep decisions separate from tasks.
- Keep tasks separate from feature ideas.
- Keep bugs separate from content notes.
- Keep deferred ideas visible but inactive.
- Keep open questions visible without making them active.
- Do not log every small rewrite.
- Do not turn this folder into a second command centre.
- Update this folder after major cluster progress, app-planning decisions, app checkpoints, or technical changes.
- Use [[Bugs and Fixes]] only for real technical issues, rendering issues, or development environment issues.
- Use [[Release Notes]] only for meaningful app-facing or public-facing changes.
- Use [[Next Build Tasks]] for current operational work.

---

## Current Boundary

Do not expand app scope during first-slice cleanup.

Do not add:

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

The next active move is:

1. complete [[Retro Fix 01 - Bullet List Cleanup]]
2. complete [[Glossary Term Audit]]
3. complete first-slice reader-quality testing

After that, decide between:

- continuing app polish
- deployment preparation
- returning to content drafting with [[Clinical Reasoning]]
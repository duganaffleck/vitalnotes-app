# Open Questions

Use this note to hold unresolved decisions without letting them interrupt the current rebuild.

Questions belong here when they matter, but do not need to be solved immediately.

The goal is to keep uncertainty visible without letting it derail the current phase.

Do not use this note for active tasks.

Active tasks belong in [[Next Build Tasks]].

Decisions that have already been made belong in [[Decisions]].

Deferred ideas belong in [[Deferred Ideas]].

---

## Current Status

The first app vertical slice has been implemented and pushed.

The first-slice content migration is complete.

The first-slice cleanup pass is complete.

The first-slice smoke test has passed.

The app now renders real student-facing content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Completed cleanup passes:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]
- related-link audit
- reader typography and spacing pass
- demo-readiness smoke test

The first slice is stable and demo-ready.

Most earlier app-readiness questions are now resolved, implemented, or superseded.

This note should now focus on questions that remain genuinely open after first-slice stabilization.

---

## Current Open Questions

### What should the next bounded app-development pass be?

Current thought:

The next move should not be automatic content expansion.

The first slice is stable, so the next pass should be chosen deliberately.

Possible next bounded passes include:

- deployment verification cleanup, if needed
- small design consistency pass for button versus text-link affordances
- future repeatable migration checklist
- next content-slice planning
- next content-slice migration

Status:

Open

Review soon:

After the Obsidian status update pass is complete.

Related notes:

- [[Next Build Tasks]]
- [[Deferred Ideas]]
- [[Decisions]]
- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

---

### Does deployment need a separate verification pass?

Current thought:

The live/deployment state appears stable based on review, but deployment may still deserve its own small verification pass if the app is going to be shown to anyone else.

This pass should remain narrow.

It would check:

- Vercel build status
- live URL behavior
- navigation outside localhost
- first-slice reader pages
- tools
- glossary
- related links
- mobile-ish browser width

Status:

Open

Review soon:

Before treating the first slice as externally shareable.

---

### Should button versus text-link consistency be the next UI pass?

Current thought:

Maybe, but not urgently.

The current app is usable and demo-ready.

Later UI review should decide which navigation actions should render as buttons versus text links.

Specific item to revisit:

- Learning Path `Open section` affordance compared with full button treatments

Status:

Deferred, but open for a future design consistency pass

Review later:

Only after the next bounded app-development pass is chosen.

Related note:

- [[Deferred Ideas]]

---

### Should there be a repeatable migration checklist before the next content slice?

Current thought:

Probably useful.

The first slice revealed a pattern:

- migrate content
- check list blocks
- check glossary IDs
- check related links
- run build
- run audit scripts
- smoke test reader pages
- update Obsidian status files

A simple checklist could reduce drift during the next slice.

Status:

Open

Review soon:

Before migrating the next content slice.

Possible location:

- [[Next Build Tasks]]
- [[MOC - Build Prompts]]
- [[ChatGPT App Development Prompt]]
- [[ChatGPT Obsidian Update Prompt]]

Do not create this unless it clearly helps the next bounded pass.

---

### How many total student-facing sections should the rebuilt VitalNotes guide contain?

Current thought:

The guide should remain smaller and cleaner than the old version, but not so reduced that important learning problems get flattened.

The current app-tested path now includes:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Status:

Open

Review later:

After the next content clusters begin to reveal whether the overall guide still feels navigable.

Do not change the locked learning path casually.

---

### How much of Obsidian should eventually be represented in the app?

Current thought:

Only the student-facing guide, glossary support, learning path, and active tools should appear in the app.

Obsidian remains the source of truth.

The app should not expose internal planning files, development notes, mapping documents, source indexes, draft notes, or vault architecture.

Status:

Open for later app design review

Review later:

When refining [[Content Schema]], [[Navigation Model]], and any future content pipeline decisions.

---

### Should [[Where to Begin]] become an interactive selector later?

Current thought:

Possibly.

For now, [[Where to Begin]] remains a written routing page.

Later, it may translate into simple app navigation cards or a low-friction entry selector.

Status:

Open for later interface review

Review later:

Only if the written routing page stops feeling sufficient.

Do not build this as part of the current stable first-slice phase.

---

### Should active tools remain both standalone pages and contextual drawers?

Current thought:

The first slice currently supports simple tool drawer access and a [[Tools Library]].

This appears sufficient for the current phase.

Active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Likely contextual relationships:

- [[Directive Meaning Check]] with [[Directives Through Purpose]]
- [[Smart Note Template]] with [[Smart Notes for Paramedic Students]], [[Types of Notes and Idea Maturation]], and [[Obsidian for Learning Paramedicine]]
- [[Clinical Recall Prompt Builder]] with [[Clinical Recall Without Trivia]] and [[Anki for Paramedic Learning]]

Status:

Open for later reader testing

Review later:

Only if tool drawers feel too cramped, too hidden, or disruptive to reading.

---

### Should the app track reading progress locally?

Current thought:

Not for the current first slice.

Reading progress should remain deferred unless there is a clear student need and the implementation stays simple, local, and low-friction.

Status:

Deferred, but open for later review

Review later:

Only after the student-facing guide experience is more complete.

Related note:

- [[Deferred Ideas]]

---

### Should there be an instructor-facing section in version one?

Current thought:

Probably not.

VitalNotes should remain student-facing until the core guide experience is stable.

Instructor-facing notes may come later, but they should not be added to the first slice.

Status:

Mostly deferred

Review later:

After the student-facing app experience is usable.

Related note:

- [[Deferred Ideas]]

---

### Should Anki-related support ever go beyond guidance and copyable prompts?

Current thought:

Probably not in the first app phase.

The current boundary is that VitalNotes may mention Anki and may support better clinical recall prompt design through [[Clinical Recall Prompt Builder]], but the app should not become an Anki platform.

Do not include:

- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior
- Anki-specific tools

Status:

Mostly resolved for first slice, open for later review only if repeated student need appears

Review later:

Only if students repeatedly need limited copy support or card-quality guidance.

Related notes:

- [[Anki for Paramedic Learning]]
- [[Clinical Recall Prompt Builder]]
- [[Deferred Ideas]]
- [[Decisions]]

---

### Should Obsidian remain the long-term source of truth, or should the app content folder eventually become the source?

Current thought:

Obsidian remains the source of truth for now.

The app content folder currently holds manually migrated first-slice content in `src/content/sections.ts`.

This is acceptable for the first vertical slice.

The app content folder may eventually mirror or import from the vault, but this should not be solved before manual migration becomes a real maintenance burden.

Status:

Open for later workflow review

Review later:

After the next slice shows whether manual migration remains sustainable.

---

### Should a future content pipeline use Markdown, MDX, JSON, or generated TypeScript objects?

Current thought:

Manual TypeScript content objects were appropriate for the first vertical slice.

A full [[Obsidian Import Pipeline]], MDX setup, or CMS should remain deferred.

Status:

Open for later workflow review

Review later:

Only after manual migration becomes either proven sustainable or clearly burdensome.

Related notes:

- [[Deferred Ideas]]
- [[Decisions]]
- [[Content Schema]]

---

## Cleanup Questions

### Which files still contain stale pre-stable-first-slice language?

Current thought:

Some vault files may still contain stale language such as:

- app build not started
- app-readiness checkpoint pending
- Build Recall not included in the first slice
- only two active tools
- content not migrated
- first slice undecided
- app production deferred
- bullet cleanup still active
- glossary audit still active
- first-slice reader testing still pending
- visual polish still waiting for cleanup

Status:

Open during current vault update pass

Review soon:

Continue checking only files that are likely to need updating.

Likely locations:

- [[Project Dashboard]]
- [[Active Sprint]]
- [[Section Reader Design]]
- [[Content Schema]]
- [[Navigation Model]]
- [[First Vertical Slice]]
- [[MOC - Rebuilt Content]]
- [[MOC - App Interface Design]]
- [[ChatGPT App Development Prompt]]
- [[ChatGPT Obsidian Update Prompt]]
- [[App Continuation Prompt]]

Do not update files just because they exist.

Update only files with stale project-state language or genuinely useful checkpoint information.

---

## Resolved or Mostly Resolved

### How much routing belongs in [[How to Use This Guide]]?

Status:

Resolved

Resolution:

General use guidance belongs in [[How to Use This Guide]].

Problem-based routing belongs in [[Where to Begin]].

---

### Should Start Here explain the full guide navigation?

Status:

Resolved

Resolution:

No.

[[Start Here - What VitalNotes Is]] explains purpose.

[[How to Use This Guide]] explains general approach.

[[Where to Begin]] handles problem-based entry.

---

### Should the early retrieval problem and later retrieval system be separated?

Status:

Resolved

Resolution:

[[Why Studying Feels Productive But Fails Under Pressure]] introduces the problem of familiarity, recognition, and weak access.

[[Retrieval and Spaced Learning]] teaches the fuller retrieval and spacing system.

This separation is working.

---

### Should [[Learning Strain Is Not Always a Personal Problem]] remain as its own section?

Status:

Resolved for now

Resolution:

Yes.

The section completes [[01 Why Learning Feels Hard]] by helping students distinguish useful difficulty from wasted difficulty without treating every struggle as personal failure.

Revisit later:

Only if future reader testing shows a functional gap.

---

### Should old sections be directly rewritten or only mined for ideas?

Status:

Mostly resolved

Resolution:

Old sections should be treated as source material, not fixed structure.

Strong ideas, examples, and explanations should be preserved when useful, but the old section order and wording do not need to be protected.

Related decision:

See [[Decisions]].

---

### How much should the Build Understanding cluster diagnose learning problems versus teach understanding directly?

Status:

Resolved for now

Resolution:

The [[02 Build Understanding]] cluster shifted appropriately from diagnosing difficulty to teaching usable understanding through meaning, mechanisms, pathophysiology patterns, directive purpose, risk, boundaries, and reassessment.

Related sections:

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

---

### How much of the original Smart Notes material should remain student-facing?

Status:

Resolved for now

Resolution:

The core Smart Notes ideas remain student-facing, but the rebuilt cluster is smaller, more practical, and more clearly tied to paramedic learning.

The current split is:

- [[Smart Notes for Paramedic Students]] introduces notes as thinking supports.
- [[Types of Notes and Idea Maturation]] explains how notes change as understanding matures.
- [[Obsidian for Learning Paramedicine]] explains a simple workspace without making Obsidian mandatory.
- [[Smart Note Template]] provides the reusable tool.

Revisit later:

Only if app tool placement creates friction.

---

### Should the first version include Anki?

Status:

Resolved for now

Resolution:

Yes, but carefully.

[[Anki for Paramedic Learning]] is included in [[04 Build Recall]].

The section positions Anki as a support for retrieval and spacing, not as the learning system.

It avoids turning VitalNotes into a flashcard-first guide.

Revisit later:

Only if Anki becomes visually or structurally overemphasized in the app.

---

### Should the Build Recall cluster create a new active tool?

Status:

Resolved

Resolution:

Yes.

[[04 Build Recall]] earned [[Clinical Recall Prompt Builder]] as an active drafted tool.

This tool is broader and more useful than [[Recognition vs Access Check]]. It helps students turn facts, Smart Notes, directive details, scenario errors, and confusing concepts into recall prompts that support clinical use.

---

### Should [[Recognition vs Access Check]] be created?

Status:

Resolved for now

Resolution:

No.

The useful pieces of [[Recognition vs Access Check]] have been folded into [[04 Build Recall]] and [[Clinical Recall Prompt Builder]].

Revisit later:

Only if app testing shows students need a smaller access-check tool separate from clinical recall prompt building.

---

### Should the Build Recall cluster lean more toward weekly study rhythm or scenario transfer?

Status:

Resolved for now

Resolution:

Scenario transfer should remain central.

[[04 Build Recall]] teaches retrieval, spacing, clinical recall, and Anki in a way that supports access during labs, scenarios, OSCEs, and patient care.

It does not become a generic weekly study schedule.

---

### Should the first app slice begin after Build Usable Notes or after Build Recall?

Status:

Resolved and implemented

Resolution:

The first app slice begins after [[04 Build Recall]].

Reason:

[[04 Build Recall]] gives the first app slice a stronger learning arc:

- understand why learning feels hard
- build understanding
- preserve understanding in usable notes
- practice accessing knowledge through retrieval and clinical recall

This is a better test of the app than stopping after [[03 Build Usable Notes]].

Related checkpoint:

[[App Build Checkpoint 02 - First Slice Content Migration Complete]]

---

### Should the next content cluster be drafted before app development?

Status:

Resolved

Resolution:

No.

The project moved into app implementation after [[04 Build Recall]], rather than continuing immediately into [[Clinical Reasoning]].

This allowed the first vertical slice to be tested with real content.

---

### When should the VS Code app build begin?

Status:

Resolved and implemented

Resolution:

The app build began after the app-readiness checkpoint.

The first shell exists, the first-slice content migration is complete, and the first slice is now stable and demo-ready.

Related checkpoints:

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

---

### Should the first app version use manual JavaScript objects, JSON-like data, or Markdown import?

Status:

Resolved for first slice

Resolution:

The first app slice uses manually migrated TypeScript content objects.

A full [[Obsidian Import Pipeline]], MDX setup, or CMS remains deferred.

Related decision:

[[Decisions]]

---

### Should glossary popups appear inline or as side-panel cards?

Status:

Resolved for first slice

Resolution:

The first app shell includes glossary term panel and popup support.

Revisit later:

Only if reader testing shows that glossary behavior disrupts the calm reading experience.

---

### Should tools open in drawers, modals, or separate pages?

Status:

Resolved for first slice

Resolution:

The first app shell includes simple tool drawer support and a [[Tools Library]] page.

Revisit later:

Only if reader testing shows the tool drawer interrupts reading or does not provide enough space for tool use.

---

### Should Codex tasks be logged manually in [[Decisions]]?

Status:

Mostly resolved

Resolution:

No, not usually.

Codex implementation work should be tracked in [[Next Build Tasks]], [[Bugs and Fixes]], or a future development log entry.

[[Decisions]] should only record major structural or strategic choices.

Codex and Copilot are currently unreliable, so they are not part of the critical path.

---

### Should [[Retro Fix 01 - Bullet List Cleanup]] remain active?

Status:

Resolved

Resolution:

No.

[[Retro Fix 01 - Bullet List Cleanup]] is complete for the first vertical slice.

Run a similar cleanup after future migrations only if the issue reappears.

---

### Should [[Glossary Term Audit]] remain active?

Status:

Resolved

Resolution:

No.

[[Glossary Term Audit]] is complete for the first vertical slice.

The reusable audit script should remain in the app workflow:

- `scripts/audit-glossary.cjs`

Run it after future content migrations and before commits.

---

### Should related links be audited manually only?

Status:

Resolved

Resolution:

No.

A related-link audit script now exists:

- `scripts/audit-related-links.cjs`

The audit should be run after future related-link changes and before commits.

Human review still matters, but the script protects against broken IDs.

---

## Parking Lot

These ideas are interesting, but not active.

- Should there eventually be a student-facing downloadable PDF version?
- Should there eventually be instructor-facing notes?
- Should Scenario Generator eventually export VitalNotes-linked student reflection prompts?
- Should tools become printable cards?
- Should the app eventually include light local progress tracking?
- Should the app eventually include optional AI-guided reflection?
- Should there eventually be an Anki card quality check, separate from [[Clinical Recall Prompt Builder]]?
- Should there ever be limited copy support for recall prompts without creating Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior?
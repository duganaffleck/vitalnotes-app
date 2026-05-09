# Decisions

Use this note to record major project decisions once they are made.

This file should not track every wording change.

It is for decisions that affect structure, workflow, content architecture, app direction, or future development.

---

## Decision Template

### YYYY-MM-DD - Decision Title

Status: Active

#### Decision

What was decided?

#### Reason

Why was this decision made?

#### Impact

What does this affect?

#### Revisit?

Should this be revisited later?

---

## Decision Log

### 2026-05-01 - Build VitalNotes as a content-driven app interface first

Status: Active

#### Decision

VitalNotes will be rebuilt first as a content-driven app interface, not as a Godot game, heavy interactive app, quiz platform, or simulation game.

#### Reason

The strongest immediate need is better content structure, navigation, reading flow, popups, tools, and student usability.

VitalNotes should become a guided learning interface before becoming anything more interactive.

#### Impact

This affects:

- [[App Vision]]
- [[Navigation Model]]
- [[Section Reader Design]]
- [[Content Schema]]
- [[New VitalNotes Learning Path]]
- future app development

#### Revisit?

Godot or simulation-style modules may be reconsidered later as a separate Scenario Lab concept.

---

### 2026-05-02 - Use the Obsidian vault as the project source of truth

Status: Active

#### Decision

The Obsidian vault is the source of truth for the VitalNotes rebuild.

Any new files, texts, maps, prompts, app plans, or development documents must either fit inside the established vault structure or deliberately build on it with a clear reason.

#### Reason

This prevents drift, loose documents, repeated restructuring, and disconnected planning.

#### Impact

This affects:

- [[MOC - VitalNotes Rebuild]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[MOC - Content Architecture]]
- [[MOC - App Interface Design]]
- [[MOC - Build Prompts]]
- future app development

#### Revisit?

Only if the vault structure becomes too limiting.

---

### 2026-05-02 - Keep Start Here and How to Use This Guide separate

Status: Active

#### Decision

[[Start Here - What VitalNotes Is]] should orient students to the purpose of VitalNotes, but should not fully explain how to navigate or use the guide.

Detailed navigation and use instructions belong in [[How to Use This Guide]].

#### Reason

This prevents repetition and keeps the opening page from becoming bloated.

#### Impact

This affects:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[00 Start Here]]

#### Revisit?

Only if the [[00 Start Here]] cluster becomes too fragmented.

---

### 2026-05-02 - Keep How to Use This Guide and Where to Begin separate

Status: Active

#### Decision

[[How to Use This Guide]] explains how students should approach VitalNotes generally: reading lightly, using the learning path, entering through current friction, and not turning the guide into another burden.

[[Where to Begin]] handles specific problem-based routing, helping students choose a starting point based on what they are currently experiencing.

#### Reason

This prevents [[How to Use This Guide]] from becoming too long or overly functional, and allows [[Where to Begin]] to act as the practical entry page.

#### Impact

This affects:

- [[How to Use This Guide]]
- [[Where to Begin]]
- [[Navigation Model]]
- [[Student Problem Map]]

#### Revisit?

Only if later app navigation makes the distinction unnecessary.

---

### 2026-05-02 - Where to Begin is the problem-based routing page

Status: Active

#### Decision

[[Where to Begin]] will serve as the practical routing page for students who want to enter VitalNotes through a current learning problem rather than reading strictly in order.

#### Reason

This keeps [[Start Here - What VitalNotes Is]] focused on purpose and [[How to Use This Guide]] focused on general use.

It also supports the app interface by giving the guide a clear problem-based navigation page.

#### Impact

This affects:

- [[Where to Begin]]
- [[Navigation Model]]
- [[Student Problem Map]]
- [[New VitalNotes Learning Path]]

#### Revisit?

This may eventually become a set of navigation cards or a simple entry selector.

---

### 2026-05-02 - Cognitive Load begins the first foundation cluster

Status: Active

#### Decision

[[Cognitive Load]] is the first section in the rebuilt foundation cluster.

#### Reason

It gives students language for why capable people lose access to simple steps under scenario, lab, or OSCE pressure.

This sets up later sections on studying, retrieval, notes, meaning, clinical reasoning, and performance.

#### Impact

This affects:

- [[New VitalNotes Learning Path]]
- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

#### Revisit?

Unlikely.

This section is functioning well as the first foundation page.

---

### 2026-05-02 - Separate the early retrieval problem from the later retrieval system

Status: Active

#### Decision

[[Why Studying Feels Productive But Fails Under Pressure]] will introduce the problem of familiarity, recognition, and weak access.

[[Retrieval and Spaced Learning]] will later teach the fuller retrieval and spacing system.

#### Reason

This prevents the early foundation section from becoming too technical or duplicating the later recall section.

The early section should help students understand why studying can feel productive but fail under pressure.

The later section should teach how to practice retrieval and spacing deliberately.

#### Impact

This affects:

- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Old-to-New Section Mapping]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]

#### Revisit?

Review during future reader testing to make sure the sections remain distinct.

---

### 2026-05-03 - First two content clusters are drafted

Status: Complete

#### Decision

The first six rebuilt sections were complete enough to move forward without rewriting them at that stage.

The rebuild proceeded into [[Meaning Before Memorization]] rather than polishing the opening clusters further.

#### Reason

The [[00 Start Here]] cluster and [[01 Why Learning Feels Hard]] cluster were serving their roles.

The [[00 Start Here]] cluster orients the student, explains how to approach the guide, and provides problem-based routing.

The [[01 Why Learning Feels Hard]] cluster explains why capable students struggle before introducing deeper tools or systems.

Further revision at that stage would likely have become premature polishing rather than useful structural improvement.

#### Impact

This affected:

- [[MOC - VitalNotes Rebuild]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Meaning Before Memorization]]
- [[New VitalNotes Learning Path]]

#### Revisit?

Revisit only if reader testing reveals a functional gap.

---

### 2026-05-05 - Build Understanding cluster is drafted

Status: Complete

#### Decision

The [[02 Build Understanding]] cluster was complete enough to move forward without rewriting it at that stage.

Completed sections:

- [[Meaning Before Memorization]] - Draft v2
- [[Pathophysiology Through Patterns]] - Draft v2
- [[Directives Through Purpose]] - Draft v2

#### Reason

The cluster is serving its role in the guide arc.

It shifts the rebuild from explaining why learning feels hard into showing students how usable understanding is built through meaning, mechanisms, clinical patterns, directive purpose, risk, boundaries, and reassessment.

#### Impact

This affected:

- [[MOC - Content Architecture]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[New VitalNotes Learning Path]]
- [[Directive Meaning Check]]

#### Revisit?

Revisit only if reader testing or later content reveals a continuity gap.

---

### 2026-05-05 - Directive Meaning Check is an earned active tool

Status: Active

#### Decision

[[Directive Meaning Check]] is an active drafted tool page.

Status:

- Draft v1
- Active core tool

#### Reason

[[Directives Through Purpose]] created a repeated need for a reusable process students can use when learning or applying directives.

The tool supports the section by helping students ask what a directive is protecting, what physiology is being supported, where boundaries are firm, what would require withholding or changing course, and what must be reassessed afterward.

#### Impact

This affects:

- [[Tool Library Map]]
- [[Glossary and Popup Map]]
- [[Directives Through Purpose]]
- [[Clinical Reasoning]]
- app tool placement
- [[Tool Drawer Design]]

#### Revisit?

Revisit when [[Clinical Reasoning]], [[OSCE Preparation]], or app tool drawers are being tested.

---

### 2026-05-05 - Build Usable Notes cluster is drafted

Status: Complete

#### Decision

The [[03 Build Usable Notes]] cluster was complete enough to move forward without rewriting it at that stage.

Completed sections:

- [[Smart Notes for Paramedic Students]] - Draft v2
- [[Types of Notes and Idea Maturation]] - Draft v2
- [[Obsidian for Learning Paramedicine]] - Draft v2

#### Reason

The cluster is serving its role in the guide arc.

It shows students how to turn understanding into usable notes, how different note types support different stages of learning, and how Obsidian can function as a simple workspace without becoming the point of the system.

#### Impact

This affected:

- [[MOC - Content Architecture]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[New VitalNotes Learning Path]]
- [[Smart Note Template]]

#### Revisit?

Revisit during reader testing or if [[Anki for Paramedic Learning]] needs clearer boundaries between notes and retrieval.

---

### 2026-05-05 - Smart Note Template is an earned active tool

Status: Active

#### Decision

[[Smart Note Template]] is an active drafted tool page.

Status:

- Draft v1
- Active core tool

#### Reason

The [[03 Build Usable Notes]] cluster repeatedly uses the same structure for turning concepts, scenario errors, confusing ideas, and feedback points into reusable thinking notes.

The tool gives students a stable template without forcing them into a heavy note-making system.

#### Impact

This affects:

- [[Tool Library Map]]
- [[Glossary and Popup Map]]
- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]
- app tool placement
- [[Tool Drawer Design]]

#### Revisit?

Revisit during first-slice reader testing, especially when deciding whether tools appear as standalone pages, section drawers, or both.

---

### 2026-05-05 - Complete architecture update pass before Build Recall

Status: Complete

#### Decision

Before drafting [[Retrieval and Spaced Learning]], the project completed an architecture update pass across the necessary Obsidian control files.

#### Reason

The [[02 Build Understanding]] and [[03 Build Usable Notes]] clusters added enough new structure, glossary terms, mapping decisions, and active tools that the vault needed to be brought current before the next content cluster began.

This protected continuity and prevented the rebuild from drifting as it entered the [[04 Build Recall]] cluster.

#### Impact

This affected:

- [[MOC - Content Architecture]]
- [[Next Build Tasks]]
- [[Current Project Status]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[Decisions]]
- [[Open Questions]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]

#### Revisit?

Complete.

Continue using bounded architecture verification or update passes after major content progress.

---

### 2026-05-05 - App build remains deferred until content architecture is clean

Status: Superseded

#### Decision

The VS Code app build was deferred until the architecture verification pass was complete and the first vertical slice was checked against real drafted content.

#### Reason

VitalNotes is being rebuilt from content outward.

Starting the app too early risked turning the project into interface brainstorming before the guide structure, section roles, glossary support, and tool behavior were stable.

#### Impact

This affected:

- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Next Build Tasks]]
- app-development handoff planning

#### Revisit?

Superseded by:

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

The app build has now begun, the first shell exists, and the first-slice content migration is complete.

---

### 2026-05-05 - Build Recall cluster is drafted

Status: Complete

#### Decision

The [[04 Build Recall]] cluster was complete enough to move forward without rewriting it at that stage.

Completed sections:

- [[Retrieval and Spaced Learning]] - Draft v2
- [[Clinical Recall Without Trivia]] - Draft v2
- [[Anki for Paramedic Learning]] - Draft v2

#### Reason

The cluster is serving its role in the guide arc.

It shifts the rebuild from building and storing understanding toward accessing knowledge reliably.

It explains retrieval and spacing, defines clinical recall as something different from isolated trivia, and positions Anki as a support for spaced retrieval rather than the centre of the learning system.

#### Impact

This affected:

- [[MOC - Content Architecture]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[New VitalNotes Learning Path]]
- [[Clinical Recall Prompt Builder]]
- first app vertical slice planning

#### Revisit?

Revisit during reader testing, especially to check whether the Build Recall sections feel distinct enough in the [[Section Reader]] and whether tool placement is appropriate.

---

### 2026-05-05 - Clinical Recall Prompt Builder is an earned active tool

Status: Active

#### Decision

[[Clinical Recall Prompt Builder]] is an active drafted tool page.

Status:

- Draft v1
- Active core tool

#### Reason

The [[04 Build Recall]] cluster repeatedly created the same student need: students need help turning facts, Smart Notes, directive details, scenario errors, and confusing concepts into recall prompts that support clinical use.

The tool helps students shape recall around:

- basic facts
- clinical cues
- decisions and boundaries
- reassessment
- communication

It is broader and more useful than a narrow [[Recognition vs Access Check]].

#### Impact

This affects:

- [[Tool Library Map]]
- [[Glossary and Popup Map]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]
- [[Smart Notes for Paramedic Students]]
- app tool placement
- [[Tool Drawer Design]]

#### Revisit?

Revisit during app tool-drawer testing.

Do not create an Anki-specific tool unless a repeated need appears later.

---

### 2026-05-05 - Recognition vs Access Check is folded into Clinical Recall Prompt Builder direction

Status: Active

#### Decision

[[Recognition vs Access Check]] should not be created as a separate active tool right now.

Its useful pieces are folded into the [[04 Build Recall]] sections and the broader [[Clinical Recall Prompt Builder]].

#### Reason

After drafting the full [[04 Build Recall]] cluster, the repeated need became clearer.

The issue is not only whether students can recognize or retrieve material.

The more useful student-facing process is helping them turn knowledge into recall prompts that support clinical use.

A separate [[Recognition vs Access Check]] would likely be narrower and partly redundant.

#### Impact

This affects:

- [[Tool Library Map]]
- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]
- [[Clinical Recall Prompt Builder]]
- future [[Tools Library]] design

#### Revisit?

Revisit only if app testing shows students need a smaller access-check tool separate from clinical recall prompt building.

---

### 2026-05-05 - Anki remains a support, not a product direction

Status: Active

#### Decision

VitalNotes may explain how Anki can support retrieval and spacing, but the guide and app should not become Anki-centered.

The first app slice should not include:

- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- Anki-specific tools

#### Reason

The [[04 Build Recall]] cluster established that the real learning need is clinical recall, not flashcard productivity.

Anki can be useful, but only when prompts are shaped around assessment, decisions, boundaries, reassessment, communication, and transfer.

If the app begins supporting Anki workflows directly, VitalNotes risks becoming a flashcard platform instead of a student-facing paramedic learning guide.

#### Impact

This affects:

- [[Anki for Paramedic Learning]]
- [[Clinical Recall Without Trivia]]
- [[Clinical Recall Prompt Builder]]
- [[Tool Library Map]]
- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[UI Tone and Style]]
- [[App Anti-Drift Rules]]
- future app prompts

#### Revisit?

Revisit only after the first app slice is built and tested, and only if students repeatedly need limited copy support for prompts.

Even then, avoid deck management or automated flashcard generation unless the project direction is explicitly changed.

---

### 2026-05-05 - First app slice should include Build Recall

Status: Implemented

#### Decision

The first app vertical slice should include the [[04 Build Recall]] cluster rather than stopping after [[03 Build Usable Notes]].

The first app slice includes:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- [[Learning Path]]
- [[Section Reader]]
- [[Glossary]]
- [[Tools Library]]
- previous and next navigation

#### Reason

Including [[04 Build Recall]] gives the first app slice a fuller learning arc:

- orientation
- why learning feels hard
- understanding
- usable notes
- reliable access

This is enough real content to test the app interface honestly without waiting for the entire guide to be rebuilt.

#### Impact

This affects:

- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Next Build Tasks]]
- [[Codex App Structure Prompt]]

#### Revisit?

Implemented in [[App Build Checkpoint 02 - First Slice Content Migration Complete]].

Revisit only if first-slice testing shows the slice is too large or confusing for the reader experience.

---

### 2026-05-05 - Complete Build Recall architecture verification before app-readiness checkpoint

Status: Complete

#### Decision

Before moving into app development, the project completed a bounded [[04 Build Recall]] architecture verification pass.

#### Reason

The [[04 Build Recall]] cluster added three completed sections and one new active tool.

The vault needed to accurately reflect those changes before the app process began.

This protected continuity and ensured the app-development prompt was based on the current source of truth.

#### Impact

This affected:

- [[MOC - Content Architecture]]
- [[Next Build Tasks]]
- [[Current Project Status]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[Decisions]]
- [[Open Questions]]
- [[New VitalNotes Learning Path]]
- [[Student Problem Map]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[App Vision]]
- [[MOC - App Interface Design]]
- [[Next Actions]]
- [[VitalNotes Rebuild Master Map]]

#### Revisit?

Complete.

Superseded by the app-readiness checkpoint and app implementation checkpoints.

---

### 2026-05-06 - Continue manual content migration for the first slice

Status: Implemented for first slice

#### Decision

For the first vertical slice, approved Obsidian drafts were migrated manually into TypeScript content objects.

#### Reason

Manual migration was the best choice for the first slice because it:

- kept the app simple
- avoided premature MDX work
- avoided premature [[Obsidian Import Pipeline]] work
- made the content structure explicit
- reduced the risk of app bloat
- preserved Obsidian as the source of truth
- allowed the app reader to be tested with real content sooner

The goal of the first slice was to prove the reader experience, not to build a publishing pipeline.

#### Impact

This affected:

- [[Content Schema]]
- [[Section Reader Design]]
- [[Next Build Tasks]]
- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

#### Revisit?

Revisit after the first slice has completed cleanup and reader-quality testing.

A future import or content pipeline should only be considered if manual migration becomes a real maintenance problem.

---

### 2026-05-06 - Keep hash-based navigation for the first slice

Status: Active

#### Decision

The first working app shell will continue using hash-based navigation for the first slice.

#### Reason

Hash-based navigation is acceptable at this stage because it:

- requires no additional routing dependency
- works for local first-slice testing
- keeps implementation simple
- supports the current [[Home]], [[Learning Path]], [[Section Reader]], [[Tools Library]], and [[Glossary]] pages
- avoids routing complexity before the content model is fully tested

The current priority is content fit and reading flow, not routing architecture.

#### Impact

This affects:

- [[Navigation Model]]
- [[Section Reader Design]]
- [[Next Build Tasks]]

#### Revisit?

Revisit after the first slice has completed reader-quality testing.

A routing change should only happen if the app’s structure, deployment needs, or navigation requirements make hash-based navigation insufficient.

---

### 2026-05-06 - Keep visual polish bounded and tied to readability

Status: Active

#### Decision

Broad visual redesign remains deferred.

A bounded reader typography and spacing pass has been completed for demo readiness, but future visual changes should stay small, local, and tied to readability or consistency issues found during actual use.

#### Reason

The app’s purpose is still to render the VitalNotes guide clearly and calmly.

The first-slice spacing pass improved:

- section body spacing
- section heading rhythm
- section list spacing
- glossary panel spacing
- related panel spacing
- previous / next navigation spacing
- tool drawer readability

This was appropriate because real content had been migrated and readability could be judged honestly.

Further polish should not become redesign.

#### Impact

This affects:

- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Popup and Glossary Rules]]
- [[Next Build Tasks]]
- [[Current Project Status]]
- future app cleanup passes

#### Revisit?

Revisit only when a specific readability, navigation, or consistency issue appears.

Do not begin broad visual redesign without a clear reason.

---

### 2026-05-06 - First-slice content migration is complete and pushed

Status: Active

#### Decision

The approved first vertical slice content has been migrated into the app content model and pushed.

The migrated clusters are:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

#### Reason

The first slice now has enough real content to test the actual reading experience, navigation model, related sections, related tools, glossary popups, and content density.

This moves the project from app-shell validation into reader-quality testing and cleanup.

#### Impact

This affects:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]
- [[Next Build Tasks]]
- [[Current Project Status]]
- [[Release Notes]]
- [[Section Reader Design]]
- [[Content Schema]]
- [[MOC - Content Architecture]]
- [[New VitalNotes Learning Path]]

#### Revisit?

Do not reopen first-slice scope unless reader testing shows a functional problem.

The next work is cleanup, not expansion.

---

### 2026-05-06 - Bullet list cleanup completed before broader visual polish

Status: Complete

#### Decision

[[Retro Fix 01 - Bullet List Cleanup]] has been completed for the first vertical slice.

The cleanup updated `src/content/sections.ts` so obvious flattened paragraph runs became proper `list` blocks where appropriate.

#### Reason

The section body renderer supports `list` blocks, but list support was added late in migration.

Several earlier migrated sections had list-like content rendered as separate paragraph blocks.

This was a presentation fidelity issue and needed to be fixed before judging reader spacing and typography.

#### Impact

This affected:

- [[Next Build Tasks]]
- [[Current Project Status]]
- [[Section Reader Design]]
- [[Content Schema]]
- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]
- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

#### Revisit?

Complete.

Run a similar cleanup after future content migrations if list support problems appear again.

---

### 2026-05-06 - Glossary audit completed for first slice

Status: Complete

#### Decision

[[Glossary Term Audit]] has been completed for the first vertical slice.

The audit now compares first-slice section glossary IDs in `src/content/sections.ts` against glossary entries in `src/content/glossary.ts`.

A reusable audit script was created:

- `scripts/audit-glossary.cjs`

#### Reason

Some glossary IDs were referenced in sections before their matching glossary entries existed.

The audit made glossary support safer and more repeatable.

Added first-slice glossary entries:

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

#### Impact

This affects:

- [[Glossary]]
- [[Glossary and Popup Map]]
- [[Popup and Glossary Rules]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Next Build Tasks]]
- [[Current Project Status]]
- future first-slice and next-slice audits

#### Revisit?

Run the glossary audit after future content migrations and before committing content changes.

Do not expand the glossary beyond actual app-reader needs.

---

### 2026-05-06 - Keep first-slice tools limited to three active tools

Status: Active

#### Decision

Only three tools are active in the first vertical slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

No other tools should be promoted into the active first slice unless explicitly approved.

#### Reason

The first slice needs enough tool support to test the interface without turning the app into a tool catalogue.

The active tools each directly support a major section cluster:

- [[Directive Meaning Check]] supports [[Directives Through Purpose]]
- [[Smart Note Template]] supports [[Smart Notes for Paramedic Students]]
- [[Clinical Recall Prompt Builder]] supports [[Clinical Recall Without Trivia]] and [[Anki for Paramedic Learning]]

Adding more tools now would increase complexity before the reader experience has been tested.

#### Impact

This affects:

- [[Tool Library Map]]
- [[Tool Drawer Design]]
- [[Tools Library]]
- [[Content Schema]]
- [[Next Build Tasks]]

#### Revisit?

Revisit after first-slice reader testing.

Potential future tools may be tracked in [[Deferred Ideas]], but should not be listed as active.

---

### 2026-05-06 - Create a separate ChatGPT Obsidian Update Prompt

Status: Active

#### Decision

Create [[ChatGPT Obsidian Update Prompt]] as a separate build prompt for vault maintenance.

[[ChatGPT Content Rewrite Prompt]] should remain focused on drafting and revising student-facing VitalNotes sections.

#### Reason

Vault maintenance is a different task from section drafting.

The Obsidian update workflow needs different rules:

- update actual files that exist
- do not invent files
- work one file at a time
- choose Replace, Append, Create, or No action
- use `[[Obsidian links]]`
- remove stale project-state language
- preserve architecture
- avoid changing the learning path
- avoid expanding app scope

Keeping this as a separate prompt prevents content-rewrite rules from drifting into architecture and development-log updates.

#### Impact

This affects:

- [[MOC - Build Prompts]]
- [[ChatGPT Obsidian Update Prompt]]
- [[ChatGPT Content Rewrite Prompt]]
- [[App Anti-Drift Rules]]
- future vault update passes
- fresh chat continuation prompts

#### Revisit?

Update [[ChatGPT Obsidian Update Prompt]] whenever the project phase changes significantly.

Examples:

- after [[Retro Fix 01 - Bullet List Cleanup]] is complete
- after [[Glossary Term Audit]] is complete
- after first-slice reader-quality testing
- after deployment preparation begins
- after a new content cluster is drafted

---

### 2026-05-06 - Manual ChatGPT-guided copy/paste remains the reliable app workflow for now

Status: Active

#### Decision

Manual ChatGPT-guided copy/paste implementation remains the reliable workflow for the current first-slice app cleanup phase.

Codex and Copilot should not be treated as part of the critical path yet.

#### Reason

Codex, ChatGPT extension behavior, and GitHub Copilot Chat were unreliable or unavailable during early implementation.

The app can still be built, tested, committed, and pushed through the current workflow using VS Code and external Windows PowerShell.

The priority is controlled, visible changes over tool-assisted speed.

#### Impact

This affects:

- [[Next Build Tasks]]
- [[Bugs and Fixes]]
- [[Codex App Structure Prompt]]
- [[Codex Bugfix Prompt]]
- [[App Anti-Drift Rules]]
- [[MOC - Build Prompts]]
- future app cleanup prompts

#### Revisit?

Revisit after the first slice is stable enough that tool-assisted implementation does not create drift or hidden changes.

Codex may be used later only for bounded tasks with clear file targets, acceptance criteria, and anti-drift rules.

---

---

### 2026-05-06 - Related-link audit added to the app workflow

Status: Active

#### Decision

A related-link audit is now part of the app workflow.

A reusable audit script was created:

- `scripts/audit-related-links.cjs`

The audit checks:

- every related section ID exists
- every related tool ID exists
- related sections and related tools per section

#### Reason

Related links are part of the first-slice reader experience.

Broken related links would weaken navigation, confuse the learning path, and create drift between the app and the approved content structure.

During the first-slice cleanup pass, one future-facing related section reference was removed:

- `scenario-days-as-learning-tools`

It was replaced in `learning-strain-is-not-always-a-personal-problem` with:

- `retrieval-and-spaced-learning`

#### Impact

This affects:

- [[Section Reader Design]]
- [[Content Schema]]
- [[Navigation Model]]
- [[Next Build Tasks]]
- [[Current Project Status]]
- future content-slice migration passes

#### Revisit?

Keep this script in the workflow.

Run it after future related-link changes and before committing app content updates.

---

### 2026-05-06 - First vertical slice is stable and demo-ready

Status: Active

#### Decision

The first VitalNotes app vertical slice is stable and demo-ready.

The first slice includes:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- [[Learning Path]]
- [[Section Reader]]
- [[Glossary]]
- [[Tools Library]]
- previous and next navigation
- related sections
- related tools
- glossary term support
- tool drawer support

#### Reason

The first slice has completed:

- content migration
- bullet list cleanup
- glossary audit
- related-link audit
- reader typography and spacing pass
- local smoke testing
- live stability review based on current deployment review

The app now proves that real VitalNotes content can live inside a calm reader interface without expanding into dashboards, quizzes, simulations, AI feedback, Anki integration, or other unapproved features.

#### Impact

This affects:

- [[Current Project Status]]
- [[Next Build Tasks]]
- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]
- [[MOC - App Interface Design]]
- [[MOC - Content Architecture]]
- future app-development prompts

#### Revisit?

Revisit only if a functional problem appears during further testing.

Do not reopen first-slice scope casually.

The next app work should be chosen as a bounded pass.

---

### 2026-05-06 - Choose bounded app passes before expanding content

Status: Active

#### Decision

After the first vertical slice became stable, the project should not automatically move into the next content slice.

The next move should be chosen deliberately as a bounded app-development pass.

Appropriate next actions include:

- deployment verification cleanup, if needed
- small design consistency pass for button versus text-link affordances
- future repeatable migration checklist
- next content-slice planning
- next content-slice migration

#### Reason

The main risk after first-slice stability is uncontrolled expansion.

The app should stay boring and reliable.

New content, new interface behavior, or new tools should not be added until the current stable state is protected and the next pass is clearly defined.

#### Impact

This affects:

- [[Next Build Tasks]]
- [[Current Project Status]]
- [[App Anti-Drift Rules]]
- [[MOC - App Interface Design]]
- [[MOC - Build Prompts]]
- future continuation prompts

#### Revisit?

Revisit after the next bounded app pass is chosen and completed.

Do not treat this as permission to expand scope.
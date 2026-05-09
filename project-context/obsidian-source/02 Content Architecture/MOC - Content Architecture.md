# MOC - Content Architecture

This folder defines the rebuilt VitalNotes structure.

Use this folder to protect the guide from drift.

The content architecture should keep VitalNotes organized around student problems, learning needs, and the app-ready guide structure.

Obsidian remains the source of truth.

The app renders the guide.

The app does not reinvent the guide.

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

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current cleanup focus:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]

The current architecture task is not reorganization.

The current architecture task is keeping the vault aligned while the first-slice app reader is cleaned up and tested.

---

## Core Maps

- [[New VitalNotes Learning Path]]
- [[Student Problem Map]]
- [[Page Type Map]]
- [[Tool Library Map]]
- [[Glossary and Popup Map]]
- [[Old-to-New Section Mapping]]

---

## Supporting Architecture Files

These files help connect the content structure to app planning, source handling, and future development:

- [[Source Material Index]]
- [[Reading Influence Pool]]
- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Popup and Glossary Rules]]
- [[App Anti-Drift Rules]]

Some of these may live outside this folder depending on the vault structure.

Do not duplicate their full contents here.

This MOC should point to them and preserve the role of each file.

---

## Working Principle

VitalNotes should be organized around student problems and learning needs.

Concepts matter, but the student should enter through the problem they recognize.

The structure should help students move from:

- confusion to orientation
- effort to usable learning
- facts to meaning
- notes to thinking
- review to retrieval
- recall to clinical use
- scenarios to improvement
- pressure to steadier performance
- reflection to action

---

## Current Learning Path Status

### [[00 Start Here]]

Status:

- drafted
- migrated to first-slice app

Pages:

- [[Start Here - What VitalNotes Is]] - Draft v3, migrated to first-slice app
- [[How to Use This Guide]] - Draft v3, migrated to first-slice app
- [[Where to Begin]] - Draft v2, migrated to first-slice app

Role:

- orient the student
- explain what VitalNotes is
- explain how to use the guide lightly
- provide problem-based entry points

---

### [[01 Why Learning Feels Hard]]

Status:

- drafted
- migrated to first-slice app

Pages:

- [[Cognitive Load]] - Draft v2, migrated to first-slice app
- [[Why Studying Feels Productive But Fails Under Pressure]] - Draft v2, migrated to first-slice app
- [[Learning Strain Is Not Always a Personal Problem]] - Draft v2, migrated to first-slice app

Role:

- explain why capable students lose access under pressure
- explain recognition versus access
- explain why strain is not automatically personal failure
- distinguish useful difficulty from wasted difficulty

---

### [[02 Build Understanding]]

Status:

- drafted
- migrated to first-slice app

Pages:

- [[Meaning Before Memorization]] - Draft v2, migrated to first-slice app
- [[Pathophysiology Through Patterns]] - Draft v2, migrated to first-slice app
- [[Directives Through Purpose]] - Draft v2, migrated to first-slice app

Role:

- show how facts become usable through meaning
- show how pathophysiology creates recognizable clinical patterns
- show how directives become safer and easier to apply when students understand purpose, risk, boundaries, and reassessment

Connected tool:

- [[Directive Meaning Check]] - Draft v1, active core tool, migrated to first-slice app

---

### [[03 Build Usable Notes]]

Status:

- drafted
- migrated to first-slice app
- needs app-format cleanup for flattened list content

Pages:

- [[Smart Notes for Paramedic Students]] - Draft v2, migrated to first-slice app
- [[Types of Notes and Idea Maturation]] - Draft v2, migrated to first-slice app
- [[Obsidian for Learning Paramedicine]] - Draft v2, migrated to first-slice app

Role:

- show students how notes support thinking, not storage
- explain Smart Notes as reusable clinical distinctions and explanations
- explain capture notes, working notes, Smart Notes, and idea maturation
- explain Obsidian as a simple optional workspace, not a productivity project or app tutorial

Connected tool:

- [[Smart Note Template]] - Draft v1, active core tool, migrated to first-slice app

Cleanup note:

This cluster is an early target for [[Retro Fix 01 - Bullet List Cleanup]].

---

### [[04 Build Recall]]

Status:

- drafted
- migrated to first-slice app

Pages:

- [[Retrieval and Spaced Learning]] - Draft v2, migrated to first-slice app
- [[Clinical Recall Without Trivia]] - Draft v2, migrated to first-slice app
- [[Anki for Paramedic Learning]] - Draft v2, migrated to first-slice app

Role:

- shift from building and storing understanding to accessing it reliably
- teach retrieval and spacing without turning recall into trivia
- clarify clinical recall as memory shaped around assessment, decisions, boundaries, reassessment, and communication
- explain how Anki can support paramedic learning without replacing reasoning or becoming the learning system

Connected tool:

- [[Clinical Recall Prompt Builder]] - Draft v1, active core tool, migrated to first-slice app

Guardrail:

Keep Anki as a support for recall, not as the centre of the system.

Do not create [[Anki Integration]], deck management, automated flashcard generation, or flashcard-platform behavior.

---

### [[05 Think Clinically]]

Status:

- not started in rebuilt app path
- planned for later content work
- not part of current first-slice cleanup

Pages:

- [[Clinical Reasoning]] - Not started
- [[Pattern Recognition]] - Not started
- [[Avoiding Premature Closure]] - Not started

Role:

- show clinical reasoning as a moving explanation rather than a final answer
- help students reason while information is incomplete, changing, and sometimes misleading
- show how pattern recognition develops and where it can mislead
- help students keep fast thinking accountable through reassessment and disconfirming cues

Likely connected tools later:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]

Do not begin this cluster unless Dugan explicitly moves the project back into content drafting.

---

## Active Tools

These tools are drafted, active, and migrated into the first app slice:

- [[Directive Meaning Check]] - Draft v1
- [[Smart Note Template]] - Draft v1
- [[Clinical Recall Prompt Builder]] - Draft v1

These tools are earned by completed sections.

They should be available through [[Tools Library]] and may appear as contextual tool drawers where they directly support a section.

Do not add additional active tools during first-slice cleanup unless explicitly approved.

---

## Planned Tools

These tools are planned but not active yet:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Do not draft or build these until the related sections are rebuilt and the tool is clearly earned.

Possible future tools should remain parked in [[Tool Library Map]] or [[Deferred Ideas]].

Do not create a separate Anki tool unless a repeated need appears later.

---

## Content Rhythm

Most sections should move through some version of:

1. student problem
2. explanation
3. paramedic relevance
4. example, if useful
5. tool or action, if justified
6. forward orientation

Do not force this as a template.

Use only what the section needs.

Conceptual sections may not need tools.

Practical sections may need clearer workflows.

Examples should reduce abstraction or clarify decisions.

They should not appear for decoration.

---

## Architecture Rules

- Keep the student problem explicit.
- Keep the paramedic context explicit.
- Preserve useful source thinking without preserving old structure unnecessarily.
- Use learning science implicitly.
- Avoid turning sections into book summaries.
- Avoid creating tools before the content earns them.
- Keep glossary support selective.
- Keep app metadata separate from student-facing prose.
- Keep planning notes out of content files.
- Do not change the learning path without an explicit decision in [[Decisions]].
- Do not add new student-facing sections during first-slice cleanup.
- Keep Anki as a support for recall, not as the centre of the system.
- Do not expand the app into dashboards, quizzes, simulations, AI feedback, or progress tracking during first-slice cleanup.

---

## Current Architecture Check

The content architecture is holding.

The guide currently moves from orientation, to learning difficulty, to understanding, to usable notes, to recall and access.

The first app slice is now strong enough to test with real content because it includes:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- active glossary support
- three active tools

The current app cleanup should focus on:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]
- first-slice reader-quality testing

The next content cluster, if drafting continues later, should move into clinical reasoning under uncertainty.

Do not let first-slice cleanup become a redesign.

---

## Current First-Slice App Status

Implemented and pushed:

- app shell
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
- first-slice content migration

Known cleanup:

- some earlier migrated list-like content may still be flattened into paragraph blocks
- some glossary IDs may need audit or normalization
- broad visual polish is deferred

Related files:

- [[Current Project Status]]
- [[Next Actions]]
- [[Next Build Tasks]]
- [[Bugs and Fixes]]
- [[Release Notes]]
- [[Section Reader Design]]
- [[Content Schema]]
- [[Tool Drawer Design]]
- [[Popup and Glossary Rules]]
- [[Navigation Model]]

---

## Current No-Go List

Do not add during first-slice cleanup:

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

---

## Current Check

The content architecture is holding.

The current first app slice is now suitable for cleanup and reader-quality testing.

The next risk is not the learning path.

The next risk is presentation fidelity inside the app reader.

The architecture should keep protecting the rebuild from becoming:

- a generic study skills guide
- a productivity system
- a protocol reference
- an app brainstorm
- an Anki platform
- a collection of unrelated tools
- a course outline
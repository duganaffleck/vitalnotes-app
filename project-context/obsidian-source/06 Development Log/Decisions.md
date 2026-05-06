# Decisions

Use this note to record major project decisions once they are made.

This file should not track every wording change. It is for decisions that affect structure, workflow, content architecture, app direction, or future development.

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
- future VS Code app build

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
- future VS Code development

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
- Start Here content cluster

#### Revisit?

Only if the Start Here cluster becomes too fragmented.

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

This keeps [[Start Here - What VitalNotes Is]] focused on purpose and [[How to Use This Guide]] focused on general use. It also supports the future app interface by giving the guide a clear problem-based navigation page.

#### Impact

This affects:

- [[Where to Begin]]
- [[Navigation Model]]
- [[Student Problem Map]]
- [[New VitalNotes Learning Path]]

#### Revisit?

When building the app interface, this may become a set of navigation cards or a simple entry selector.

---

### 2026-05-02 - Cognitive Load begins the first foundation cluster

Status: Active

#### Decision

[[Cognitive Load]] is the first section in the rebuilt foundation cluster.

#### Reason

It gives students language for why capable people lose access to simple steps under scenario, lab, or OSCE pressure. This sets up later sections on studying, retrieval, notes, meaning, clinical reasoning, and performance.

#### Impact

This affects:

- [[New VitalNotes Learning Path]]
- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

#### Revisit?

Unlikely. This section is functioning well as the first foundation page.

---

### 2026-05-02 - Separate the early retrieval problem from the later retrieval system

Status: Active

#### Decision

[[Why Studying Feels Productive But Fails Under Pressure]] will introduce the problem of familiarity, recognition, and weak access.

[[Retrieval and Spaced Learning]] will later teach the fuller retrieval and spacing system.

#### Reason

This prevents the early foundation section from becoming too technical or duplicating the later recall section.

The early section should help students understand why studying can feel productive but fail under pressure. The later section should teach how to practice retrieval and spacing deliberately.

#### Impact

This affects:

- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Old-to-New Section Mapping]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]

#### Revisit?

Review during Build Recall and later app-readiness checks to make sure the sections remain distinct.

---

### 2026-05-03 - First two content clusters are drafted

Status: Active

#### Decision

The first six rebuilt sections are complete enough to move forward without rewriting them now.

The rebuild will proceed into [[Meaning Before Memorization]] rather than polishing the opening clusters further.

#### Reason

The Start Here cluster and Why Learning Feels Hard cluster are serving their roles.

The Start Here cluster orients the student, explains how to approach the guide, and provides problem-based routing.

The Why Learning Feels Hard cluster explains why capable students struggle before introducing deeper tools or systems.

Further revision now would likely become premature polishing rather than useful structural improvement.

#### Impact

This affects:

- [[MOC - Rebuilt Content]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Meaning Before Memorization]]
- [[New VitalNotes Learning Path]]

#### Revisit?

Revisit during the first full app-readiness pass.

---

### 2026-05-05 - Build Understanding cluster is drafted

Status: Active

#### Decision

The Build Understanding cluster is complete enough to move forward without rewriting it now.

Completed sections:

- [[Meaning Before Memorization]] - Draft v2
- [[Pathophysiology Through Patterns]] - Draft v2
- [[Directives Through Purpose]] - Draft v2

#### Reason

The cluster is serving its role in the guide arc.

It shifts the rebuild from explaining why learning feels hard into showing students how usable understanding is built through meaning, mechanisms, clinical patterns, directive purpose, risk, boundaries, and reassessment.

#### Impact

This affects:

- [[MOC - Rebuilt Content]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[New VitalNotes Learning Path]]
- [[Directive Meaning Check]]

#### Revisit?

Revisit during the first full app-readiness pass or if the Build Recall cluster reveals a continuity gap.

---

### 2026-05-05 - Directive Meaning Check is an earned active tool

Status: Active

#### Decision

[[Directive Meaning Check]] is now an active drafted tool page.

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
- future app tool placement
- future Tools Library design

#### Revisit?

Revisit when [[Clinical Reasoning]], [[OSCE Preparation]], or app tool drawers are being planned.

---

### 2026-05-05 - Build Usable Notes cluster is drafted

Status: Active

#### Decision

The Build Usable Notes cluster is complete enough to move forward without rewriting it now.

Completed sections:

- [[Smart Notes for Paramedic Students]] - Draft v2
- [[Types of Notes and Idea Maturation]] - Draft v2
- [[Obsidian for Learning Paramedicine]] - Draft v2

#### Reason

The cluster is serving its role in the guide arc.

It shows students how to turn understanding into usable notes, how different note types support different stages of learning, and how Obsidian can function as a simple workspace without becoming the point of the system.

#### Impact

This affects:

- [[MOC - Rebuilt Content]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[New VitalNotes Learning Path]]
- [[Smart Note Template]]

#### Revisit?

Revisit during the first full app-readiness pass or if [[Anki for Paramedic Learning]] needs clearer boundaries between notes and retrieval.

---

### 2026-05-05 - Smart Note Template is an earned active tool

Status: Active

#### Decision

[[Smart Note Template]] is now an active drafted tool page.

Status:

- Draft v1
- Active core tool

#### Reason

The Build Usable Notes cluster repeatedly uses the same structure for turning concepts, scenario errors, confusing ideas, and feedback points into reusable thinking notes.

The tool gives students a stable template without forcing them into a heavy note-making system.

#### Impact

This affects:

- [[Tool Library Map]]
- [[Glossary and Popup Map]]
- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]
- future app tool placement
- future Tools Library design

#### Revisit?

Revisit when planning the first app vertical slice, especially when deciding whether tools appear as standalone pages, section drawers, or both.

---

### 2026-05-05 - Complete architecture update pass before Build Recall

Status: Complete

#### Decision

Before drafting [[Retrieval and Spaced Learning]], the project would complete an architecture update pass across the necessary Obsidian control files.

#### Reason

The Build Understanding and Build Usable Notes clusters added enough new structure, glossary terms, mapping decisions, and active tools that the vault needed to be brought current before the next content cluster began.

This protected continuity and prevented the rebuild from drifting as it entered the Build Recall cluster.

#### Impact

This affected:

- [[MOC - Rebuilt Content]]
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

Complete. Continue using bounded architecture verification or update passes after major content progress.

---

### 2026-05-05 - App build remains deferred until content architecture is clean

Status: Active

#### Decision

The VS Code app build remains deferred.

App planning can be clarified lightly, but app production should not begin until the current architecture verification pass is complete and the first vertical slice is checked against real drafted content.

#### Reason

VitalNotes is being rebuilt from content outward.

Starting the app too early risks turning the project into interface brainstorming before the guide structure, section roles, glossary support, and tool behavior are stable.

#### Impact

This affects:

- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Next Build Tasks]]
- future VS Code development

#### Revisit?

Revisit after the Build Recall architecture verification pass and app-readiness checkpoint.

---

### 2026-05-05 - Build Recall cluster is drafted

Status: Active

#### Decision

The Build Recall cluster is complete enough to move forward without rewriting it now.

Completed sections:

- [[Retrieval and Spaced Learning]] - Draft v2
- [[Clinical Recall Without Trivia]] - Draft v2
- [[Anki for Paramedic Learning]] - Draft v2

#### Reason

The cluster is serving its role in the guide arc.

It shifts the rebuild from building and storing understanding toward accessing knowledge reliably. It explains retrieval and spacing, defines clinical recall as something different from isolated trivia, and positions Anki as a support for spaced retrieval rather than the centre of the learning system.

#### Impact

This affects:

- [[MOC - Rebuilt Content]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[New VitalNotes Learning Path]]
- [[Clinical Recall Prompt Builder]]
- first app vertical slice planning

#### Revisit?

Revisit during the first app-readiness pass, especially to check whether the Build Recall sections feel distinct enough in the Section Reader and whether tool placement is appropriate.

---

### 2026-05-05 - Clinical Recall Prompt Builder is an earned active tool

Status: Active

#### Decision

[[Clinical Recall Prompt Builder]] is now an active drafted tool page.

Status:

- Draft v1
- Active core tool

#### Reason

The Build Recall cluster repeatedly created the same student need: students need help turning facts, Smart Notes, directive details, scenario errors, and confusing concepts into recall prompts that support clinical use.

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
- future app tool placement
- future Tools Library design

#### Revisit?

Revisit during app tool-drawer planning.

Do not create an Anki-specific tool unless a repeated need appears later.

---

### 2026-05-05 - Recognition vs Access Check is folded into Clinical Recall Prompt Builder direction

Status: Active

#### Decision

[[Recognition vs Access Check]] should not be created as a separate active tool right now.

Its useful pieces are folded into the Build Recall sections and the broader [[Clinical Recall Prompt Builder]].

#### Reason

After drafting the full Build Recall cluster, the repeated need became clearer.

The issue is not only whether students can recognize or retrieve material. The more useful student-facing process is helping them turn knowledge into recall prompts that support clinical use.

A separate Recognition vs Access tool would likely be narrower and partly redundant.

#### Impact

This affects:

- [[Tool Library Map]]
- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]
- [[Clinical Recall Prompt Builder]]
- future Tools Library design

#### Revisit?

Revisit only if app testing shows students need a smaller access-check tool separate from clinical recall prompt building.

---

### 2026-05-05 - Anki remains a support, not a product direction

Status: Active

#### Decision

VitalNotes may explain how Anki can support retrieval and spacing, but the guide and app should not become Anki-centered.

The first app slice should not include:

- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior
- Anki-specific tools

#### Reason

The Build Recall cluster established that the real learning need is clinical recall, not flashcard productivity.

Anki can be useful, but only when prompts are shaped around assessment, decisions, boundaries, reassessment, communication, and transfer. If the app begins supporting Anki workflows directly, VitalNotes risks becoming a flashcard platform instead of a student-facing paramedic learning guide.

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
- future VS Code app prompts

#### Revisit?

Revisit only after the first app slice is built and tested, and only if students repeatedly need limited copy support for prompts. Even then, avoid deck management or automated flashcard generation unless the project direction is explicitly changed.

---

### 2026-05-05 - First app slice should include Build Recall

Status: Active

#### Decision

The first app vertical slice should include the Build Recall cluster rather than stopping after Build Usable Notes.

Likely first app slice includes:

- Start Here cluster
- Why Learning Feels Hard cluster
- Build Understanding cluster
- Build Usable Notes cluster
- Build Recall cluster
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- Learning Path page
- Section Reader
- Glossary support
- simple Tools Library
- previous and next navigation

#### Reason

Including Build Recall gives the first app slice a fuller learning arc:

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
- future app-development handoff prompt

#### Revisit?

Revisit during the app-readiness checkpoint before starting VS Code work.

---

### 2026-05-05 - Complete Build Recall architecture verification before app-readiness checkpoint

Status: Active

#### Decision

Before moving into app development, the project will complete a bounded Build Recall architecture verification pass.

#### Reason

The Build Recall cluster added three completed sections and one new active tool. The vault needs to accurately reflect those changes before the app process begins.

This protects continuity and ensures the app-development prompt is based on the current source of truth.

#### Impact

This affects:

- [[MOC - Rebuilt Content]]
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

This is the active workflow decision for the current phase. Once complete, proceed to the app-readiness checkpoint.
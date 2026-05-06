# MOC - Content Architecture

This folder defines the rebuilt VitalNotes structure.

Use this folder to protect the guide from drift.

Do not begin rewriting major sections until this folder is stable enough to guide the work.

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

- [[../01 Source Library/Source Material Index]]
- [[../01 Source Library/Reading Influence Pool]]
- [[../04 App Interface Design/App Vision]]
- [[../04 App Interface Design/Navigation Model]]
- [[../04 App Interface Design/Content Schema]]
- [[../04 App Interface Design/Section Reader Design]]
- [[../04 App Interface Design/Tool Drawer Design]]
- [[../04 App Interface Design/Popup and Glossary Rules]]
- [[../05 Build Prompts/App Anti-Drift Rules]]

Some of these may live outside this folder depending on the vault structure.

Do not duplicate their full contents here. This MOC should point to them and preserve the role of each file.

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

### 00 Start Here

Status: Drafted

Pages:

- [[../03 Rebuilt Content/00 Start Here/Start Here - What VitalNotes Is]] - Draft v3
- [[../03 Rebuilt Content/00 Start Here/How to Use This Guide]] - Draft v3
- [[../03 Rebuilt Content/00 Start Here/Where to Begin]] - Draft v2

Role:

- orient the student
- explain what VitalNotes is
- explain how to use the guide lightly
- provide problem-based entry points

---

### 01 Why Learning Feels Hard

Status: Drafted

Pages:

- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Cognitive Load]] - Draft v2
- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Why Studying Feels Productive But Fails Under Pressure]] - Draft v2
- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Learning Strain Is Not Always a Personal Problem]] - Draft v2

Role:

- explain why capable students lose access under pressure
- explain recognition versus access
- explain why strain is not automatically personal failure
- distinguish useful difficulty from wasted difficulty

---

### 02 Build Understanding

Status: Drafted

Pages:

- [[../03 Rebuilt Content/02 Build Understanding/Meaning Before Memorization]] - Draft v2
- [[../03 Rebuilt Content/02 Build Understanding/Pathophysiology Through Patterns]] - Draft v2
- [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]] - Draft v2

Role:

- show how facts become usable through meaning
- show how pathophysiology creates recognizable clinical patterns
- show how directives become safer and easier to apply when students understand purpose, risk, boundaries, and reassessment

Connected tool:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] - Draft v1, active core tool

---

### 03 Build Usable Notes

Status: Drafted

Pages:

- [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]] - Draft v2
- [[../03 Rebuilt Content/03 Build Usable Notes/Types of Notes and Idea Maturation]] - Draft v2
- [[../03 Rebuilt Content/03 Build Usable Notes/Obsidian for Learning Paramedicine]] - Draft v2

Role:

- show students how notes support thinking, not storage
- explain Smart Notes as reusable clinical distinctions and explanations
- explain capture notes, working notes, Smart Notes, and idea maturation
- explain Obsidian as a simple optional workspace, not a productivity project or app tutorial

Connected tool:

- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] - Draft v1, active core tool

---

### 04 Build Recall

Status: Drafted

Pages:

- [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]] - Draft v2
- [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]] - Draft v2
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] - Draft v2

Role:

- shift from building and storing understanding to accessing it reliably
- teach retrieval and spacing without turning recall into trivia
- clarify clinical recall as memory shaped around assessment, decisions, boundaries, reassessment, and communication
- explain how Anki can support paramedic learning without replacing reasoning or becoming the learning system

Connected tool:

- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] - Draft v1, active core tool

---

### 05 Think Clinically

Status: Not started

Pages:

- [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]] - Not started
- [[../03 Rebuilt Content/05 Think Clinically/Pattern Recognition]] - Not started
- [[../03 Rebuilt Content/05 Think Clinically/Avoiding Premature Closure]] - Not started

Role:

- show clinical reasoning as a moving explanation rather than a final answer
- help students reason while information is incomplete, changing, and sometimes misleading
- show how pattern recognition develops and where it can mislead
- help students keep fast thinking accountable through reassessment and disconfirming cues

---

## Active Tools

These tools are drafted and active:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] - Draft v1

These tools are earned by completed sections.

They should be available through the Tools Library and may appear as contextual tool drawers where they directly support a section.

---

## Planned Tools

These tools are planned but not active yet:

- [[../03 Rebuilt Content/Tools Library/Clinical Reasoning Check]]
- [[../03 Rebuilt Content/Tools Library/Pattern Recognition Safety Check]]
- [[../03 Rebuilt Content/Tools Library/Scenario Day Reset]]
- [[../03 Rebuilt Content/Tools Library/OSCE Reset]]
- [[../03 Rebuilt Content/Tools Library/Five Whys Tool]]
- [[../03 Rebuilt Content/Tools Library/Reflection Without Journaling Tool]]

Do not draft or build these until the related sections are rebuilt and the tool is clearly earned.

Possible future tools should remain parked in [[Tool Library Map]].

Do not create a separate Anki tool unless a repeated need appears later.

---

## Content Rhythm

Most sections should move through some version of:

1. Student problem
2. Explanation
3. Paramedic relevance
4. Example, if useful
5. Tool or action, if justified
6. Forward orientation

Do not force this as a template.

Use only what the section needs.

Conceptual sections may not need tools.

Practical sections may need clearer workflows.

Examples should reduce abstraction or clarify decisions. They should not appear for decoration.

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
- Do not change the learning path without an explicit decision.
- Do not start app production until the architecture verification pass and app-readiness checkpoint are complete.
- Keep Anki as a support for recall, not as the centre of the system.

---

## Current Architecture Verification Pass

Status: In progress

Purpose:

Verify that the Obsidian control files accurately reflect:

- completed Build Recall cluster
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]
- three active drafted tools
- first app slice including Build Recall
- app-readiness checkpoint as the next major project step
- no stale “Build Recall not started” language
- no broken `App Anti-Drift Rules` links
- no accidental Anki platform drift

This pass should prepare the vault for:

- app-readiness checkpoint
- first app vertical slice decision
- possible fresh app-development handoff prompt

---

## Current Check

The content architecture is holding.

The guide currently moves from orientation, to learning difficulty, to understanding, to usable notes, to recall and access.

The current first app slice is now strong enough to test with real content:

- Start Here
- Why Learning Feels Hard
- Build Understanding
- Build Usable Notes
- Build Recall
- active glossary support
- three active tools

The next content cluster, if drafting continues, should move into clinical reasoning under uncertainty.

The architecture should keep protecting the rebuild from becoming:

- a generic study skills guide
- a productivity system
- a protocol reference
- an app brainstorm
- an Anki platform
- a collection of unrelated tools
- a course outline
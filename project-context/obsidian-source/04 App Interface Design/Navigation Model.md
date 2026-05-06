# Navigation Model

The VitalNotes app should give students a simple way to move through the guide without making navigation feel like another learning task.

Navigation should help students answer:

- Where am I?
- Why does this section matter?
- What should I read next?
- What can I use right now?
- Where do I go if I am struggling with a specific problem?

---

## Primary Navigation

Recommended top-level navigation:

- Start Here
- Learning Path
- Tools
- Glossary
- About

The first version should stay simple.

Do not add dashboards, accounts, progress systems, quizzes, badges, or heavy interaction at the navigation level.

VitalNotes should feel like a calm guide, not a learning management system.

---

## Learning Path Navigation

The learning path should be grouped into clusters:

1. Start Here
2. Why Learning Feels Hard
3. Build Understanding
4. Build Usable Notes
5. Build Recall
6. Think Clinically
7. Practice Better
8. Perform Under Pressure
9. Reflect and Improve
10. Tools Library

Each cluster should contain a small number of sections.

The goal is not to make students feel like they are entering a large course. The goal is to help them find the next useful section without getting lost.

---

## Current Drafted Learning Path Status

### 00 Start Here

Status: Drafted

Sections:

- [[Start Here - What VitalNotes Is]] - Draft v3
- [[How to Use This Guide]] - Draft v3
- [[Where to Begin]] - Draft v2

Role:

- orient the student
- explain the purpose of VitalNotes
- explain how to use the guide without turning it into another burden
- provide problem-based entry points

---

### 01 Why Learning Feels Hard

Status: Drafted

Sections:

- [[Cognitive Load]] - Draft v2
- [[Why Studying Feels Productive But Fails Under Pressure]] - Draft v2
- [[Learning Strain Is Not Always a Personal Problem]] - Draft v2

Role:

- explain why capable students lose access under pressure
- distinguish recognition from usable access
- help students interpret strain without turning it into self-blame

---

### 02 Build Understanding

Status: Drafted

Sections:

- [[Meaning Before Memorization]] - Draft v2
- [[Pathophysiology Through Patterns]] - Draft v2
- [[Directives Through Purpose]] - Draft v2

Role:

- show how facts become usable through meaning
- connect pathophysiology to mechanisms and clinical patterns
- help students understand directives through purpose, risk, boundaries, and reassessment

Active connected tool:

- [[Directive Meaning Check]] - Draft v1

---

### 03 Build Usable Notes

Status: Drafted

Sections:

- [[Smart Notes for Paramedic Students]] - Draft v2
- [[Types of Notes and Idea Maturation]] - Draft v2
- [[Obsidian for Learning Paramedicine]] - Draft v2

Role:

- show how notes support thinking rather than storage
- explain how Smart Notes preserve reusable clinical distinctions and explanations
- explain capture notes, working notes, Smart Notes, and idea maturation
- present Obsidian as an optional simple workspace, not the point of the system

Active connected tool:

- [[Smart Note Template]] - Draft v1

---

### 04 Build Recall

Status: Drafted

Sections:

- [[Retrieval and Spaced Learning]] - Draft v2
- [[Clinical Recall Without Trivia]] - Draft v2
- [[Anki for Paramedic Learning]] - Draft v2

Role:

- shift from building and storing understanding to accessing it reliably
- explain retrieval and spacing without turning recall into trivia
- clarify clinical recall as memory shaped around patient care
- explain where Anki helps and where it can mislead
- keep Anki as a support for retrieval and spacing, not the learning system

Active connected tool:

- [[Clinical Recall Prompt Builder]] - Draft v1

---

### 05 Think Clinically

Status: Not started

Sections:

- [[Clinical Reasoning]]
- [[Pattern Recognition]]
- [[Avoiding Premature Closure]]

Role:

- show clinical reasoning as a moving explanation rather than a final answer
- help students reason while information is incomplete, changing, and sometimes misleading
- explain how pattern recognition develops and where it can mislead
- help students keep fast thinking accountable through reassessment and disconfirming cues

Likely connected tools later:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]

---

## Section Navigation

Each section should include:

- title
- subtitle or purpose line
- cluster label
- student problem
- section body
- optional glossary terms
- optional related tool or tool drawer
- related sections
- previous section
- next section

Every section should make the next move obvious.

Previous and next navigation should support the intended learning path, but related sections can support students who enter through a problem.

---

## Start Here Navigation

The Start Here cluster has three distinct jobs:

- [[Start Here - What VitalNotes Is]] explains the purpose of VitalNotes.
- [[How to Use This Guide]] explains how students should approach the guide without turning it into another burden.
- [[Where to Begin]] helps students choose a starting point based on the problem they are currently experiencing.

These pages should stay separate.

Do not make the opening page carry all navigation responsibilities.

---

## Problem-Based Navigation

[[Where to Begin]] is the primary problem-based routing page for the guide.

For now, it remains a written orientation page.

Later, it may translate into app cards, buttons, or simple entry prompts.

Possible student problem entries:

- I study, but blank in scenarios.
- My notes are organized, but not useful.
- I know facts, but cannot connect them during calls.
- Directives make me hesitate.
- Scenarios keep exposing the same mistakes.
- OSCEs make me rush or freeze.
- Feedback stays with me too long.
- I cannot tell whether I am improving.

This should not become a quiz or diagnostic tool.

It should function as simple navigation support.

---

## Tools Navigation

Tools should be available in two ways:

1. Connected to relevant sections when they support the reading.
2. Collected in a central Tools Library for later return.

A tool should not appear just because the interface allows it.

Active drafted tools:

- [[Directive Meaning Check]] - Draft v1
- [[Smart Note Template]] - Draft v1
- [[Clinical Recall Prompt Builder]] - Draft v1

Planned tools:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Possible future tools should remain tracked in [[Tool Library Map]] until repeated section use proves they are needed.

The Tools Library should not make VitalNotes feel like an app full of widgets. Tools should feel earned, practical, and easy to return to.

---

## Glossary Navigation

Glossary terms should support reading flow.

Students should be able to access short explanations without leaving the section.

Possible formats to test later:

- inline popup
- side-panel card
- glossary drawer
- separate glossary page

The glossary should not become a textbook.

If a term needs a long explanation, it probably belongs in a section.

---

## First Vertical Slice Direction

The first useful app slice should be small enough to build cleanly and rich enough to test whether VitalNotes works as an interface.

Likely first vertical slice:

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
- problem-based entry through [[Where to Begin]]

Reason to include Build Recall:

- the first slice now includes the arc from understanding, to notes, to recall
- retrieval and spacing clarify how glossary and related sections should work
- [[Clinical Recall Prompt Builder]] gives the first slice a third active tool to test tool placement without overbuilding
- [[Anki for Paramedic Learning]] helps test how the app handles a practical system page without becoming a flashcard platform

Do not start app production until the architecture verification pass and app-readiness checkpoint are complete.

---

## App Build Notes

The first app version should prioritize:

- clear learning path navigation
- readable section pages
- simple previous and next movement
- glossary support
- basic Tools Library access
- problem-based entry through [[Where to Begin]]

Do not build heavy app features until the content structure is stable.

Do not add Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior.

The likely early content structure should remain simple:

- `src/content/sections.js`
- `src/content/glossary.js`
- `src/content/tools.js`
- `src/content/learningPath.js`

Use manual content objects or JSON-like content first.

Do not build a complex Obsidian-to-app import pipeline for the first slice.

---

## Navigation Rule

Navigation should reduce cognitive load.

If navigation requires explanation, it is too complex.
# Navigation Model

The VitalNotes app should give students a simple way to move through the guide without making navigation feel like another learning task.

Navigation should help students answer:

- Where am I?
- Why does this section matter?
- What should I read next?
- What can I use right now?
- Where do I go if I am struggling with a specific problem?

Navigation should reduce cognitive load.

If navigation requires much explanation, it is too complex.

---

## Current Status

The first app vertical slice has been implemented.

The first-slice content migration is complete and pushed.

The current app includes:

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

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current cleanup focus:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]

Do not expand navigation before first-slice cleanup and reader-quality testing are complete.

---

## Primary Navigation

Current top-level navigation:

- [[Start Here]]
- [[Learning Path]]
- [[Tools Library]]
- [[Glossary]]
- [[About]]

The first-slice navigation should stay simple.

Do not add:

- dashboards
- accounts
- progress systems
- quizzes
- badges
- streaks
- scores
- heavy interaction
- instructor dashboards
- AI feedback
- AI reflection

VitalNotes should feel like a calm guide, not a learning management system.

---

## Learning Path Navigation

The learning path is grouped into clusters.

Current first-slice clusters:

1. [[00 Start Here]]
2. [[01 Why Learning Feels Hard]]
3. [[02 Build Understanding]]
4. [[03 Build Usable Notes]]
5. [[04 Build Recall]]

Later planned clusters may include:

6. [[05 Think Clinically]]
7. [[06 Practice Better]]
8. [[07 Perform Under Pressure]]
9. [[08 Reflect and Improve]]

The current app should not mark later clusters as migrated until they are actually built into the app.

Each cluster should contain a small number of sections.

The goal is not to make students feel like they are entering a large course.

The goal is to help them find the next useful section without getting lost.

---

## Current Migrated Learning Path Status

### [[00 Start Here]]

Status:

- drafted
- migrated to first-slice app

Sections:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

Role:

- orient the student
- explain the purpose of VitalNotes
- explain how to use the guide without turning it into another burden
- provide problem-based entry points

---

### [[01 Why Learning Feels Hard]]

Status:

- drafted
- migrated to first-slice app

Sections:

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

Role:

- explain why capable students lose access under pressure
- distinguish recognition from usable access
- help students interpret strain without turning it into self-blame

---

### [[02 Build Understanding]]

Status:

- drafted
- migrated to first-slice app

Sections:

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

Role:

- show how facts become usable through meaning
- connect pathophysiology to mechanisms and clinical patterns
- help students understand directives through purpose, risk, boundaries, and reassessment

Active connected tool:

- [[Directive Meaning Check]]

---

### [[03 Build Usable Notes]]

Status:

- drafted
- migrated to first-slice app
- needs possible list cleanup in app content

Sections:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

Role:

- show how notes support thinking rather than storage
- explain how Smart Notes preserve reusable clinical distinctions and explanations
- explain capture notes, working notes, Smart Notes, and idea maturation
- present Obsidian as an optional simple workspace, not the point of the system

Active connected tool:

- [[Smart Note Template]]

Cleanup note:

This cluster is an early target for [[Retro Fix 01 - Bullet List Cleanup]].

---

### [[04 Build Recall]]

Status:

- drafted
- migrated to first-slice app

Sections:

- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Role:

- shift from building and storing understanding to accessing it reliably
- explain retrieval and spacing without turning recall into trivia
- clarify clinical recall as memory shaped around patient care
- explain where Anki helps and where it can mislead
- keep Anki as a support for retrieval and spacing, not the learning system

Active connected tool:

- [[Clinical Recall Prompt Builder]]

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as pending, excluded, undecided, or future-facing.

---

## Later Planned Learning Path Status

### [[05 Think Clinically]]

Status:

- not started in current app slice
- planned for later content work

Likely sections:

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

Do not treat this cluster as active app content yet.

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

Previous and next navigation should support the intended learning path.

Related sections can support students who enter through a problem or want a useful connection.

Related sections should not become a long list of everything.

---

## Current First-Slice Section Sequence

Current first-slice sequence:

1. [[Start Here - What VitalNotes Is]]
2. [[How to Use This Guide]]
3. [[Where to Begin]]
4. [[Cognitive Load]]
5. [[Why Studying Feels Productive But Fails Under Pressure]]
6. [[Learning Strain Is Not Always a Personal Problem]]
7. [[Meaning Before Memorization]]
8. [[Pathophysiology Through Patterns]]
9. [[Directives Through Purpose]]
10. [[Smart Notes for Paramedic Students]]
11. [[Types of Notes and Idea Maturation]]
12. [[Obsidian for Learning Paramedicine]]
13. [[Retrieval and Spaced Learning]]
14. [[Clinical Recall Without Trivia]]
15. [[Anki for Paramedic Learning]]

Likely next planned sequence:

16. [[Clinical Reasoning]]
17. [[Pattern Recognition]]
18. [[Avoiding Premature Closure]]

The previous and next links should make the main path obvious.

Problem-based navigation can exist separately through [[Where to Begin]].

---

## Start Here Navigation

The [[00 Start Here]] cluster has three distinct jobs:

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
2. Collected in a central [[Tools Library]] for later return.

A tool should not appear just because the interface allows it.

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Planned tools:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Possible future tools should remain tracked in [[Tool Library Map]] or [[Deferred Ideas]] until repeated section use proves they are needed.

The [[Tools Library]] should not make VitalNotes feel like an app full of widgets.

Tools should feel earned, practical, and easy to return to.

---

## Glossary Navigation

Glossary terms should support reading flow.

The current app includes simple glossary popup support and a [[Glossary]] page.

Students should be able to access short explanations without losing the section.

Current glossary cleanup task:

- [[Glossary Term Audit]]

The glossary should not become a textbook.

If a term needs a long explanation, it probably belongs in a section.

Do not expand glossary behavior before [[Glossary Term Audit]] and first-slice reader-quality testing are complete.

---

## Hash-Based Navigation

The current first-slice app uses hash-based navigation.

This is acceptable for the first slice because it:

- keeps the app simple
- avoids routing dependency too early
- supports local testing
- supports current pages and section movement
- avoids routing complexity before reader-quality testing is complete

Do not overhaul routing during first-slice cleanup.

Revisit only if the app’s structure, deployment needs, or navigation requirements make hash-based navigation insufficient.

Related decision:

- [[Decisions]]

---

## Current App Build Notes

The current app version prioritizes:

- clear learning path navigation
- readable section pages
- simple previous and next movement
- glossary support
- basic [[Tools Library]] access
- problem-based entry through [[Where to Begin]]
- simple tool drawer support
- simple glossary popup support
- list block support

Current content files include:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

The current app uses manual TypeScript content objects.

Do not build a complex [[Obsidian Import Pipeline]], MDX setup, CMS, or automated content sync during first-slice cleanup.

---

## First Vertical Slice Status

The first vertical slice includes:

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
- problem-based entry through [[Where to Begin]]
- simple tool drawer support
- simple glossary popup support
- list block support

Reason to include [[04 Build Recall]]:

- the first slice includes the arc from understanding, to notes, to recall
- retrieval and spacing clarify how glossary and related sections should work
- [[Clinical Recall Prompt Builder]] gives the first slice a third active tool to test tool placement without overbuilding
- [[Anki for Paramedic Learning]] helps test how the app handles a practical system page without becoming a flashcard platform

Current status:

- implemented
- migrated
- pushed
- needs cleanup and reader-quality testing

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
- complex personalization
- [[Obsidian Import Pipeline]]
- MDX
- CMS
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- progress tracking
- analytics

Do not build heavy app features until the first-slice reading experience is stable.

---

## Navigation Acceptance Criteria

Navigation works when students can answer:

- Where am I?
- What cluster am I in?
- What should I read next?
- What can I use right now?
- Where do I go if I am struggling with a specific problem?
- How do I return to the [[Learning Path]]?
- How do I return to the [[Tools Library]]?

Navigation fails if:

- students need too much explanation to move around
- the app feels like a dashboard
- tools feel like assignments
- the glossary becomes a second textbook
- [[04 Build Recall]] feels like an Anki product direction
- navigation becomes more interesting than the guide

---

## Navigation Rule

Navigation should reduce cognitive load.

If navigation requires explanation, it is too complex.

---

## Next Review

Review this file after:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. first-slice reader-quality testing

Do not broaden navigation before those are complete.
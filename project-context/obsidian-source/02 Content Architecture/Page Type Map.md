# Page Type Map

The rebuilt VitalNotes app should not treat every page the same.

Different pages serve different functions.

This map helps preserve page intent during drafting, review, app cleanup, and future development.

Do not force every page into the same structure.

Page type should clarify function, not impose a template.

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

- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- simple glossary popup support
- simple tool drawer support
- related sections
- related tools
- previous and next navigation
- list block support

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current cleanup focus:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]

Do not add new page types during first-slice cleanup unless the current reader clearly requires them.

---

## 1. Orientation Page

Purpose:

Help students understand what the guide is, how to use it, and where to begin.

Examples:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

Expected features:

- clear opening
- low cognitive load
- simple navigation
- plain student-facing purpose
- no heavy tools
- no dense theory
- no pressure to implement a system immediately

App behavior:

- should support simple movement into [[Learning Path]]
- may include problem-based navigation through [[Where to Begin]]
- should not feel like course onboarding
- should not push tools too early

Current status:

- drafted
- migrated to first-slice app

Notes:

The [[00 Start Here]] cluster is the active orientation set.

Do not collapse these three pages into one page unless an explicit decision is made in [[Decisions]].

---

## 2. Core Concept Page

Purpose:

Explain a major learning, memory, reasoning, or performance concept in paramedic context.

Examples:

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]
- [[Retrieval and Spaced Learning]]
- [[Clinical Reasoning]]
- [[Performance Under Pressure]]

Expected features:

- student problem
- layered explanation
- paramedic relevance
- optional example when it clarifies the concept
- selective glossary support
- forward orientation
- no unnecessary tool

App behavior:

- should preserve paragraph-level explanation
- should avoid chopping the section into too many cards
- may include glossary popups
- may include a related tool only if the section earns it

Current status:

- drafted and migrated through first-slice core concepts
- later core concept pages remain planned but not active in the app

First-slice core concept examples include:

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]
- [[Retrieval and Spaced Learning]]

Notes:

[[Retrieval and Spaced Learning]] functions as a core concept page with practical implications.

Do not add a tool to a core concept page unless there is a repeated student action that clearly earns tool support.

---

## 3. Practical System Page

Purpose:

Teach a usable student learning system without turning it into a productivity project.

Examples:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Expected features:

- clear student problem
- practical explanation
- boundaries around what the system is and is not for
- paramedic examples where useful
- optional workflow or tool
- common traps if relevant
- forward orientation

App behavior:

- may connect to active tools
- should avoid dashboard or productivity-app feel
- should support simple action without overwhelming the reader
- should not make Anki feel like the centre of the learning system

Current status:

- [[03 Build Usable Notes]] practical system pages drafted and migrated
- [[04 Build Recall]] practical system pages drafted and migrated

Cleanup note:

Practical system pages are likely to contain list-like content.

They are an important target for [[Retro Fix 01 - Bullet List Cleanup]], especially:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

Guardrail:

[[Anki for Paramedic Learning]] should stay guide-like.

It should not become:

- an Anki tutorial
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior

---

## 4. Tool Page

Purpose:

Provide a reusable process or template students can return to.

Examples:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- [[Clinical Reasoning Check]]
- [[Five Whys Tool]]
- [[OSCE Reset]]

Expected features:

- what the tool is for
- when to use it
- steps, questions, fields, or builder structure
- one short example if useful
- common mistakes only if they reduce misuse
- related sections

App behavior:

- should live in [[Tools Library]]
- may appear as a section-linked drawer
- should be easy to open, close, and ignore
- should not feel like an assignment
- should not require accounts, saved responses, scoring, or progress tracking

Current active tools:

- [[Directive Meaning Check]] - Draft v1, migrated to first-slice app
- [[Smart Note Template]] - Draft v1, migrated to first-slice app
- [[Clinical Recall Prompt Builder]] - Draft v1, migrated to first-slice app

Planned tools should not appear as live app tools until drafted and earned.

---

## 5. Practice Support Page

Purpose:

Help students use scenarios, feedback, labs, repetition, and OSCE preparation more effectively.

Examples:

- [[Scenario Days as Learning Tools]]
- [[Common Errors and What They Reveal]]
- [[Focused Practice After Feedback]]
- [[OSCE Preparation]]
- [[Resetting When Thinking Narrows]]

Expected features:

- realistic student experience
- what instructors are likely watching for
- what to extract from practice
- how to carry one adjustment forward
- emotional realism without generic reassurance
- next action or forward orientation

App behavior:

- may connect strongly to tools later
- should support scenario transfer
- should avoid making students feel they have failed because performance is uneven
- should not become scoring, simulation, LMS, or dashboard behavior

Current status:

- not yet drafted in rebuilt app path
- not part of current first-slice cleanup

Notes:

Do not create practice support tools during first-slice cleanup.

Likely future tools remain parked in [[Tool Library Map]] and [[Deferred Ideas]].

---

## 6. Reflection and Feedback Page

Purpose:

Help students turn experience, feedback, and errors into future action without overthinking.

Examples:

- [[Reflection Without Journaling]]
- [[The Five Whys]]
- [[Turning Feedback Into Action]]

Expected features:

- one meaningful moment
- brief interpretation
- one actionable adjustment
- protection against rumination
- clear connection to future practice

App behavior:

- may connect to future tools
- should not become journaling software
- should not over-expand reflection into emotional processing unless directly useful
- should not become AI reflection, saved journals, or progress tracking

Current status:

- not yet drafted in rebuilt app path
- not part of current first-slice cleanup

Notes:

Reflection should remain brief, specific, and tied to action.

Future reflection tools should not be activated until the related sections earn them.

---

## 7. Glossary Popup

Purpose:

Provide plain-language support without interrupting section flow.

Examples:

- cognitive load
- retrieval
- spacing
- clinical recall
- recall prompt
- clinical cue
- boundary
- Anki
- premature closure
- directive intent
- working memory
- pathophysiology
- mechanism
- Smart Notes
- clinical risk

Expected features:

- short
- student-facing
- plain-language
- paramedic-relevant
- no academic clutter
- linked to one or more sections where useful

App behavior:

- should help the student keep reading
- should not become a mini-section
- should not define every term
- should follow [[Glossary and Popup Map]] and [[Popup and Glossary Rules]]

Current status:

- glossary map updated through [[04 Build Recall]]
- glossary popup support exists in the first-slice app
- [[Glossary]] page exists in the first-slice app
- [[Glossary Term Audit]] is the next glossary cleanup task

Notes:

The glossary should support the reader.

It should not become a textbook, learning science dictionary, quiz layer, or hidden lesson system.

---

## 8. App Design Note

Purpose:

Guide app development, cleanup, and future build decisions.

Examples:

- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Popup and Glossary Rules]]
- [[App Anti-Drift Rules]]

Expected features:

- component purpose
- behavior
- content needs
- acceptance criteria
- anti-drift guidance
- clear development boundaries

App behavior:

- these notes are not student-facing
- these notes should guide the build and cleanup
- they should not leak into the app experience

Current status:

- active planning and alignment documents
- updated to reflect first-slice app implementation
- should continue protecting the app from drift during cleanup

Notes:

App design notes are no longer only pre-build planning documents.

They now guide:

- first-slice cleanup
- reader-quality testing
- future app decisions
- anti-drift protection

---

## Current Page Type Notes

- Orientation pages are drafted and migrated.
- Core concept pages are drafted and migrated through the first slice.
- Practical system pages are drafted and migrated through [[03 Build Usable Notes]] and [[04 Build Recall]].
- Three tool pages are active and migrated: [[Directive Meaning Check]], [[Smart Note Template]], and [[Clinical Recall Prompt Builder]].
- Practice support pages are not yet drafted in the rebuilt app path.
- Reflection and feedback pages are not yet drafted in the rebuilt app path.
- Glossary popup support exists in the app and now needs [[Glossary Term Audit]].
- App design notes are active control documents for current cleanup.
- Do not create an Anki-specific page type.
- [[Anki for Paramedic Learning]] fits inside the existing practical system page type.

---

## Current No-Go List

Do not add during first-slice cleanup:

- new page types unless clearly necessary
- new active tools
- new student-facing sections
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

## Design Rule

Page type should clarify function, not force structure.

A page should include only what it needs to serve its role in the guide.

During first-slice cleanup, preserve page intent and improve rendering fidelity.
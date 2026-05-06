# Page Type Map

The rebuilt VitalNotes app should not treat every page the same.

Different pages serve different functions.

This map helps preserve page intent during drafting, review, and eventual app design.

Do not force every page into the same structure.

---

## 1. Orientation Page

Purpose:  
Help students understand what the guide is, how to use it, and where to begin.

Examples:

- [[../03 Rebuilt Content/00 Start Here/Start Here - What VitalNotes Is]]
- [[../03 Rebuilt Content/00 Start Here/How to Use This Guide]]
- [[../03 Rebuilt Content/00 Start Here/Where to Begin]]

Expected features:

- clear opening
- low cognitive load
- simple navigation
- plain student-facing purpose
- no heavy tools
- no dense theory
- no pressure to implement a system immediately

App behavior:

- should support simple movement into the Learning Path
- may include problem-based navigation through [[../03 Rebuilt Content/00 Start Here/Where to Begin]]
- should not feel like course onboarding

Current status:

- drafted

---

## 2. Core Concept Page

Purpose:  
Explain a major learning, memory, reasoning, or performance concept in paramedic context.

Examples:

- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Cognitive Load]]
- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Why Studying Feels Productive But Fails Under Pressure]]
- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Learning Strain Is Not Always a Personal Problem]]
- [[../03 Rebuilt Content/02 Build Understanding/Meaning Before Memorization]]
- [[../03 Rebuilt Content/02 Build Understanding/Pathophysiology Through Patterns]]
- [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]]
- [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]]
- [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]
- [[../03 Rebuilt Content/07 Perform Under Pressure/Performance Under Pressure]]

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

- drafted through Build Understanding
- [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]] is drafted and may function as a core concept page with practical implications
- more to come in later clusters

---

## 3. Practical System Page

Purpose:  
Teach a usable student learning system without turning it into a productivity project.

Examples:

- [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]]
- [[../03 Rebuilt Content/03 Build Usable Notes/Types of Notes and Idea Maturation]]
- [[../03 Rebuilt Content/03 Build Usable Notes/Obsidian for Learning Paramedicine]]
- [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]]
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]]

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

- Build Usable Notes practical system pages drafted
- Build Recall practical system pages drafted
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] should stay guide-like and should not become an Anki tutorial or flashcard platform

---

## 4. Tool Page

Purpose:  
Provide a reusable process or template students can return to.

Examples:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]
- [[../03 Rebuilt Content/Tools Library/Clinical Reasoning Check]]
- [[../03 Rebuilt Content/Tools Library/Five Whys Tool]]
- [[../03 Rebuilt Content/Tools Library/OSCE Reset]]

Expected features:

- what the tool is for
- when to use it
- steps, questions, fields, or builder structure
- one short example if useful
- common mistakes only if they reduce misuse
- related sections

App behavior:

- should live in the Tools Library
- may appear as a section-linked drawer
- should be easy to open, close, and ignore
- should not feel like an assignment

Current active tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] - Draft v1

Planned tools should not appear as live app tools until drafted and earned.

---

## 5. Practice Support Page

Purpose:  
Help students use scenarios, feedback, labs, repetition, and OSCE preparation more effectively.

Examples:

- [[../03 Rebuilt Content/06 Practice Better/Scenario Days as Learning Tools]]
- [[../03 Rebuilt Content/06 Practice Better/Common Errors and What They Reveal]]
- [[../03 Rebuilt Content/06 Practice Better/Focused Practice After Feedback]]
- [[../03 Rebuilt Content/07 Perform Under Pressure/OSCE Preparation]]
- [[../03 Rebuilt Content/07 Perform Under Pressure/Resetting When Thinking Narrows]]

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

Current status:

- not yet drafted in rebuilt structure

---

## 6. Reflection and Feedback Page

Purpose:  
Help students turn experience, feedback, and errors into future action without overthinking.

Examples:

- [[../03 Rebuilt Content/08 Reflect and Improve/Reflection Without Journaling]]
- [[../03 Rebuilt Content/08 Reflect and Improve/The Five Whys]]
- [[../03 Rebuilt Content/08 Reflect and Improve/Turning Feedback Into Action]]

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

Current status:

- not yet drafted in rebuilt structure

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

- glossary map updated through Build Recall cluster
- glossary terms from [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] have been added

---

## 8. App Design Note

Purpose:  
Guide the eventual VS Code app build.

Examples:

- [[../04 App Interface Design/App Vision]]
- [[../04 App Interface Design/Navigation Model]]
- [[../04 App Interface Design/Content Schema]]
- [[../04 App Interface Design/Section Reader Design]]
- [[../04 App Interface Design/Tool Drawer Design]]
- [[../04 App Interface Design/Popup and Glossary Rules]]
- [[../05 Build Prompts/App Anti-Drift Rules]]

Expected features:

- component purpose
- behavior
- content needs
- acceptance criteria
- anti-drift guidance
- clear development boundaries

App behavior:

- these notes are not student-facing
- these notes should guide the build later
- they should not leak into the app experience

Current status:

- being checked during the current architecture verification pass
- app production should not begin until the architecture verification pass and app-readiness checkpoint are complete

---

## Current Page Type Notes

- Orientation pages are drafted.
- Core concept pages are drafted through Build Understanding, with [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]] now drafted as part of Build Recall.
- Practical system pages are drafted through Build Usable Notes and Build Recall.
- Three tool pages are active: [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]], [[../03 Rebuilt Content/Tools Library/Smart Note Template]], and [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]].
- Practice support pages are not yet drafted in the rebuilt structure.
- Reflection and feedback pages are not yet drafted in the rebuilt structure.
- Glossary support is active in architecture planning, but app behavior has not been built.
- App design notes remain planning documents only.
- Do not create an Anki-specific page type. [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] should fit inside the existing practical system page type.

---

## Design Rule

Page type should clarify function, not force structure.

A page should include only what it needs to serve its role in the guide.
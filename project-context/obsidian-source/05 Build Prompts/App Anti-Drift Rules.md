# App Anti-Drift Rules

Use this note before major planning, prompting, coding, or app-development decisions.

The purpose of this file is to keep VitalNotes from becoming larger, louder, more generic, or more app-first than it needs to be.

This version is especially for build prompts. Use it when preparing ChatGPT or Codex tasks.

---

## VitalNotes Is

- a student-facing guide
- a learning system
- a calm app interface
- a way to make learning, reasoning, practice, recall, and reflection more usable
- grounded in paramedicine
- built from the Obsidian content structure outward
- designed to support students under real training pressure
- practical before it is impressive
- content-driven before it is feature-driven

---

## VitalNotes Is Not

- a generic study skills app
- a full simulation game
- a protocol reference
- a quiz platform
- a productivity dashboard
- a motivational blog
- a learning management system
- a gamified habit tracker
- an Obsidian tutorial site
- an Anki platform
- a place for every idea
- a replacement for labs, scenarios, instruction, or clinical judgment
- an app project that happens to contain learning content

---

## Core Development Rules

1. Obsidian remains the source of truth.
2. Map before rewriting.
3. Rewrite before coding.
4. Complete architecture verification before expanding.
5. Build one vertical slice before expanding.
6. Keep content separate from components.
7. Add interaction only when it improves learning flow.
8. Keep the app useful before making it impressive.
9. Codex gets bounded tasks only.
10. Student problems drive structure.
11. The paramedic context must stay central.
12. Tools appear only when earned by repeated content need.
13. The app renders the guide. It does not reinvent the guide.
14. Prompts must preserve the current content map unless explicitly instructed otherwise.
15. Do not use coding prompts to quietly redesign the educational system.
16. Do not let Anki become visually or structurally central.
17. Do not create an Anki-specific tool unless a repeated student need appears later.

---

## Current Build Boundary

Do not start VS Code app production yet.

The current phase is still:

- content rebuild
- Build Recall architecture verification pass
- app-readiness checking
- first-slice definition

The app build should begin only after the Build Recall architecture verification pass is complete and the first vertical slice is checked against real drafted sections.

Current drafted clusters:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]
- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]
- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]
- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Next possible content target if content drafting continues:

- [[Clinical Reasoning]]

Current recommended next phase:

- complete app-readiness checkpoint
- define first app vertical slice
- move app development into a fresh chat with a strong handoff prompt

---

## Content Rules

- Preserve source thinking.
- Reduce repetition.
- Avoid bloated sections.
- Avoid thin explanations.
- Keep the student problem explicit.
- Keep the paramedic context explicit.
- Use learning science implicitly.
- Do not turn sections into book summaries.
- Do not name-drop source texts in student-facing content unless explicitly requested.
- Avoid em dashes.
- Avoid generic motivation.
- Avoid aphorisms and polished slogan endings.
- Avoid excessive one-line paragraphs.
- Make tools reusable.
- Keep examples when they clarify decisions.
- End sections by orienting forward.
- Keep planning notes out of student-facing content.
- Keep Anki as a support for retrieval and spacing, not as the learning system.

---

## App Content Rules

The app should preserve:

- section title
- subtitle or purpose line
- cluster label
- student problem
- section body
- relevant glossary terms
- active related tools
- related sections
- previous and next navigation

The app should not expose:

- internal project maps
- development logs
- source indexes
- old-to-new mapping notes
- review notes
- draft reasoning
- architecture commentary
- private planning structure

The student should see a calm guide, not the workshop behind it.

---

## Tool Rules

A tool should exist only when it gives students a structure they can return to more than once.

Active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Planned tools should not be treated as live app features until the relevant sections are drafted and stable.

Possible future tools should remain parked in [[Tool Library Map]] until repeated use proves they are needed.

Do not create tools to make the app feel interactive.

A tool should reduce friction, not add homework.

The [[Clinical Recall Prompt Builder]] should remain a recall-shaping tool, not an Anki deck-management system.

---

## Glossary Rules

Glossary support should reduce reading friction.

Use glossary popups for short, plain-language reminders only.

Do not define every technical word.

Do not use glossary entries to carry the main teaching.

If a popup needs several paragraphs, the idea probably belongs in a section or tool.

Use [[Glossary and Popup Map]] as the source of truth for glossary language.

---

## First Vertical Slice Rules

The first vertical slice should test the reading experience before the app expands.

Likely first slice:

- Home page
- Learning Path page
- Section Reader
- Start Here cluster
- Why Learning Feels Hard cluster
- Build Understanding cluster
- Build Usable Notes cluster
- Build Recall cluster
- glossary support
- simple Tools Library
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- previous and next navigation
- problem-based entry through [[Where to Begin]]

Reason for including Build Recall:

- the app can test the fuller arc from understanding, to usable notes, to reliable access
- retrieval and spacing clarify how glossary support, related sections, and tool drawers should behave
- [[Clinical Recall Prompt Builder]] gives the first slice a third active tool without making the app tool-heavy
- [[Anki for Paramedic Learning]] helps test whether a practical system page can stay guide-like without turning VitalNotes into a flashcard platform

The first slice should not include:

- accounts
- dashboards
- badges
- grading
- heavy tracking
- quizzes
- simulations
- complex personalization
- AI-guided reflection
- Obsidian import pipeline
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior

---

## ChatGPT Prompt Rules

When using ChatGPT for VitalNotes, prompts should clearly state:

- the exact file or section being worked on
- the current cluster role
- the relevant source material
- what should be preserved
- what should not be changed
- whether the output is student-facing or architecture-facing
- whether the task is drafting, review, mapping, or app planning
- whether tools or glossary terms should be considered
- the required output format

ChatGPT should not be asked to broadly “improve VitalNotes” without boundaries.

Good prompt language:

- “Update this Obsidian file only.”
- “Preserve the current content map.”
- “Do not rename sections.”
- “Return the full file in clean Markdown.”
- “Review for AI slop, drift, repetition, and tone.”
- “Do not create new tools unless the section clearly earns one.”

Bad prompt language:

- “Make this better.”
- “Rework the whole system.”
- “Modernize it.”
- “Add whatever seems useful.”
- “Turn this into an app plan.”
- “Create a new structure.”

---

## Codex Prompt Rules

Codex must receive bounded implementation tasks only.

A Codex task should include:

- exact file paths
- exact task scope
- current relevant files
- what not to change
- expected output
- acceptance criteria
- anti-drift reminders

Do not ask Codex to:

- build the whole app
- redesign the content structure
- invent sections
- invent glossary terms
- invent tools
- add dashboards
- add accounts
- add gamification
- add quizzes
- refactor unrelated files
- change the educational model
- replace the Obsidian structure
- add Anki integration
- add deck management
- add automated flashcard generation

Codex should implement the structure already defined in the vault.

It should not reinterpret the project.

---

## Coding Rules for Later

When VS Code work begins:

- start with simple manual content objects or JSON-like data
- avoid complex Markdown import at first
- keep components small
- keep content files readable
- keep styling calm
- build only the first vertical slice
- test with real sections, not placeholder content
- do not create architecture in code that contradicts the Obsidian structure
- do not add Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior
- log major structural decisions in [[Decisions]]
- track build tasks in [[Next Build Tasks]]

Likely early files:

- `src/content/sections.js`
- `src/content/glossary.js`
- `src/content/tools.js`
- `src/content/learningPath.js`

Likely early components:

- `Layout`
- `LearningPath`
- `SectionPage`
- `SectionHeader`
- `SectionBody`
- `SectionNavigation`
- `GlossaryPopup`
- `ToolDrawer`
- `ToolsLibrary`

Do not add more structure until the first slice proves it is needed.

---

## Drift Warning Signs

Stop and reassess if VitalNotes starts becoming:

- a productivity system
- a generic learning app
- an app-first project
- a dashboard
- a quiz product
- a protocol lookup tool
- a simulation platform
- a flashcard platform
- an Anki workflow project
- a collection of unrelated tools
- a polished interface with weak content
- a place where every interesting idea gets added

Also reassess if:

- the app needs too much explanation to use
- the tools feel like assignments
- glossary popups interrupt the reading
- Obsidian structure starts leaking into the student experience
- Anki becomes the centre of the recall cluster
- the paramedic context becomes decorative rather than central
- learning science starts being announced instead of used
- prompts invite broad invention instead of bounded execution
- coding work starts solving problems the content has not created yet

---

## Final Check Before Any Major Decision

Before rewriting, planning, coding, prompting, or adding features, ask:

- Does this help paramedic students learn, reason, practice, recall, or reflect better?
- Does this fit the current content map?
- Does this preserve Obsidian as the source of truth?
- Does this reduce friction?
- Does this keep the student-facing experience calm?
- Is this needed now, or is it interesting but premature?
- Would this make VitalNotes clearer, or just larger?
- Would this make a future Codex task more bounded or more vague?

If the answer is unclear, park the idea rather than building around it.
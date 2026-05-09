# App Anti-Drift Rules

Use this note before major planning, prompting, coding, cleanup, or app-development decisions.

The purpose of this file is to keep VitalNotes from becoming larger, louder, more generic, or more app-first than it needs to be.

This version is especially for build prompts, ChatGPT continuation prompts, Codex tasks, and app cleanup passes.

Use it when preparing work in VS Code, ChatGPT, Codex, or Obsidian.

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

The current phase is not app expansion.

The current phase is first-slice cleanup and reader-quality testing.

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
2. The app renders the guide. It does not reinvent the guide.
3. Preserve the current content map unless explicitly instructed otherwise.
4. Keep content separate from components.
5. Keep app-facing content separate from internal planning notes.
6. Add interaction only when it improves learning flow.
7. Keep the app useful before making it impressive.
8. Build and clean up one bounded slice before expanding.
9. Student problems drive structure.
10. The paramedic context must stay central.
11. Tools appear only when earned by repeated content need.
12. Prompts must not quietly redesign the educational system.
13. Coding work must not solve problems the content has not created yet.
14. Do not let Anki become visually or structurally central.
15. Do not create an Anki-specific tool unless a repeated student need appears later.
16. Do not add new active tools during first-slice cleanup unless explicitly approved.
17. Do not add new student-facing sections during first-slice cleanup unless explicitly approved.
18. Do not broaden visual polish before presentation fidelity issues are fixed.

---

## Current Build Boundary

The app build has begun.

The first-slice app exists.

The first-slice content migration is complete.

The current boundary is first-slice cleanup.

Immediate active work:

1. complete [[Retro Fix 01 - Bullet List Cleanup]]
2. complete [[Glossary Term Audit]]
3. complete first-slice reader-quality testing
4. only then decide whether to continue app polish, prepare deployment, or return to drafting [[Clinical Reasoning]]

Do not treat this phase as permission to add features.

The first-slice app should remain bounded to:

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
- [[Tools Library]]
- [[Glossary]]
- previous and next navigation
- problem-based entry through [[Where to Begin]]
- simple glossary popup support
- simple tool drawer support
- list block support

Do not expand beyond this without an explicit decision in [[Decisions]].

---

## Current Migrated Clusters

### [[00 Start Here]]

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

### [[01 Why Learning Feels Hard]]

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

### [[02 Build Understanding]]

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

### [[03 Build Usable Notes]]

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

### [[04 Build Recall]]

- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as pending, excluded, undecided, or future-facing.

---

## Current Active Tools

Only these tools are active in the first app slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Planned tools should not be treated as live app features until the relevant sections are drafted, stable, and clearly earn them.

Possible future tools should remain parked in [[Tool Library Map]] or [[Deferred Ideas]].

Do not create tools to make the app feel interactive.

A tool should reduce friction, not add homework.

[[Clinical Recall Prompt Builder]] should remain a recall-shaping tool, not an Anki deck-management system.

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

## Current Cleanup Rules

### [[Retro Fix 01 - Bullet List Cleanup]]

This cleanup should:

- update `src/content/sections.ts`
- convert obvious flattened paragraph runs into proper `list` blocks
- preserve approved wording wherever possible
- begin with [[Smart Notes for Paramedic Students]]
- continue through [[Types of Notes and Idea Maturation]]
- review [[Obsidian for Learning Paramedicine]]
- continue through first-slice sections where needed
- run `npm run build`
- check affected sections in the browser
- commit once stable

This cleanup should not:

- rewrite sections
- change section titles
- change cluster order
- add new sections
- add new tools
- redesign typography broadly
- alter the learning path
- add new app features

### [[Glossary Term Audit]]

This cleanup should:

- compare glossary IDs in `src/content/sections.ts` against `src/content/glossary.ts`
- add or normalize only first-slice glossary terms
- keep definitions short and student-facing
- preserve paramedic relevance
- test glossary popup behavior
- run `npm run build`
- commit once stable

This cleanup should not:

- turn the glossary into a textbook
- add long learning science definitions
- add glossary quizzes
- create Anki glossary behavior
- add AI explanation support
- broaden the glossary beyond first-slice needs

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

Do not add:

- saved tool responses
- tool scoring
- tool completion states
- tool dashboards
- AI-generated tool feedback
- automatic exports
- Anki deck behavior

---

## Glossary Rules

Glossary support should reduce reading friction.

Use glossary popups for short, plain-language reminders only.

Do not define every technical word.

Do not use glossary entries to carry the main teaching.

If a popup needs several paragraphs, the idea probably belongs in a section or tool.

Use [[Glossary and Popup Map]] as the source of truth for glossary language.

Use [[Popup and Glossary Rules]] for behavior guidance.

Complete [[Glossary Term Audit]] before expanding glossary behavior.

---

## First Vertical Slice Rules

The first vertical slice tests the reading experience before the app expands.

Current first slice:

- [[Home]]
- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- glossary support
- simple tool drawer support
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- previous and next navigation
- problem-based entry through [[Where to Begin]]

Reason for including [[04 Build Recall]]:

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
- [[Obsidian Import Pipeline]]
- [[Anki Integration]]
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
- whether the task is drafting, review, mapping, app planning, cleanup, or coding support
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
- “Do not add features.”
- “Use the existing app structure.”
- “Keep this as a bounded cleanup pass.”

Bad prompt language:

- “Make this better.”
- “Rework the whole system.”
- “Modernize it.”
- “Add whatever seems useful.”
- “Turn this into an app plan.”
- “Create a new structure.”
- “Add some interactive features.”
- “Polish everything.”

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
- add [[Anki Integration]]
- add deck management
- add automated flashcard generation
- add flashcard-platform behavior

Codex should implement the structure already defined in the vault.

It should not reinterpret the project.

If Codex or Copilot are unreliable, use manual ChatGPT-guided copy/paste implementation.

---

## Coding Rules

Current workflow:

- use VS Code
- use external Windows PowerShell
- use manual ChatGPT-guided copy/paste implementation
- keep tasks bounded
- run builds before committing
- document meaningful fixes in [[Bugs and Fixes]]
- document meaningful internal app checkpoints in [[Release Notes]]

Reliable commands:

- `npm run build`
- `npm run dev`
- `git add .`
- `git commit -m "..."`
- `git push`

Local development address:

`http://localhost:5173/`

Current content files:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

Current app development rules:

- keep components small
- keep content files readable
- keep styling calm
- keep hash-based navigation for first-slice cleanup
- test with real sections, not placeholder content
- do not create architecture in code that contradicts the Obsidian structure
- do not add [[Anki Integration]], deck management, automated flashcard generation, or flashcard-platform behavior
- log major structural decisions in [[Decisions]]
- track build tasks in [[Next Build Tasks]]
- track real bugs and fixes in [[Bugs and Fixes]]

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
- cleanup turns into redesign
- visual polish starts before presentation fidelity issues are fixed

---

## Current No-Go List

Do not add during first-slice cleanup:

- new student-facing sections
- new active tools
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
- broad routing overhaul
- broad visual redesign

---

## Final Check Before Any Major Decision

Before rewriting, planning, coding, prompting, cleanup, or adding features, ask:

- Does this help paramedic students learn, reason, practice, recall, or reflect better?
- Does this fit the current content map?
- Does this preserve Obsidian as the source of truth?
- Does this reduce friction?
- Does this keep the student-facing experience calm?
- Is this needed now, or is it interesting but premature?
- Would this make VitalNotes clearer, or just larger?
- Would this make a future Codex task more bounded or more vague?
- Does this preserve the first-slice boundary?
- Does this avoid Anki platform drift?
- Does this avoid turning cleanup into redesign?

If the answer is unclear, park the idea rather than building around it.
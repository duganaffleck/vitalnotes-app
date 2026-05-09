# Section Reader Design

The Section Reader is the core reading experience of the VitalNotes app.

Its job is to display one student-facing section in a clean, calm, navigable format.

The reader should support the guide without making the page feel like a course module, textbook chapter, productivity dashboard, flashcard platform, or interactive study platform.

The app renders the guide.

The app does not reinvent the guide.

---

## Current Status

The first Section Reader implementation exists.

The first vertical slice content has been migrated and pushed.

The reader currently displays real student-facing content across:

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

---

## Purpose

The Section Reader displays one rebuilt VitalNotes section at a time.

It should help students understand:

- where they are
- why the section matters
- what problem the section is helping them solve
- what connects next
- whether a related tool is available
- how to return to the learning path

The Section Reader should preserve the calm, instructional reading flow of the rebuilt VitalNotes content.

The writing remains the main experience.

---

## Current Reader Features

The current first-slice reader supports:

- section title
- subtitle or purpose line
- cluster label
- student problem
- section body
- glossary popup support
- related tool cards
- simple tool drawer
- related sections
- previous section navigation
- next section navigation
- hash-based navigation
- return movement through the app shell

The reader is functional enough for first-slice cleanup and reader-quality testing.

---

## Current Section Body Support

The section body renderer currently supports:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

The `list` block type was added late in content migration.

Because of that, some earlier migrated sections still contain bullet-style content rendered as separate paragraph blocks.

This is not an Obsidian source-content problem.

It is an app content-structure cleanup problem in `src/content/sections.ts`.

Current fix:

- [[Retro Fix 01 - Bullet List Cleanup]]

Primary early targets:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

---

## Required Elements

Each section page should include:

- section title
- subtitle or purpose line
- cluster label
- student problem
- section content
- optional glossary support
- optional related tool or tool drawer
- related sections when useful
- previous section link
- next section link

Optional elements should remain optional.

A section does not need a tool, glossary term, card, callout, or interaction to be useful.

---

## Desired Feel

The reader should feel:

- calm
- focused
- readable
- lightly guided
- easy to scan
- not crowded
- mobile-friendly
- connected to the rest of the guide

It should not feel like:

- a quiz interface
- a dashboard
- a learning management system
- a game menu
- a dense textbook page
- a pile of disconnected blog posts
- a productivity app
- a flashcard platform

---

## Content Structure

The app currently uses manually migrated TypeScript content objects.

Obsidian remains the source of truth.

The app content currently lives in:

- `src/content/sections.ts`
- `src/content/tools.ts`
- `src/content/glossary.ts`

This manual structure is acceptable for the first vertical slice.

Do not add [[Obsidian Import Pipeline]], MDX, CMS, or automated content sync during first-slice cleanup.

The first-slice reader should render only app-facing content.

Planning notes, source handling, quality checks, internal review notes, and development decisions should not appear inside the student-facing Section Reader.

Those belong in:

- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[Current Project Status]]
- [[Decisions]]
- [[Open Questions]]
- [[Bugs and Fixes]]
- [[Next Build Tasks]]

---

## Section Header

The header should include:

- title
- cluster label
- subtitle or purpose line
- student problem

Example:

**Cognitive Load**

Cluster: [[01 Why Learning Feels Hard]]

Purpose line: Why simple structure protects thinking under pressure.

Student problem: I know the material, but I lose track of simple things during scenarios, labs, or OSCEs.

The student problem should be visible enough to orient the reader, but not so prominent that the page feels clinical or overdesigned.

The header should not feel like a course objective box.

It should feel like a quiet orientation before the section begins.

---

## Section Body

The body should prioritize reading flow.

It should support:

- headings
- paragraphs
- bullet lists where appropriate
- links to related sections
- simple callouts later only if needed

The body should not be chopped into excessive cards.

VitalNotes writing depends on paragraph-level explanation.

The app should preserve that.

Do not turn every paragraph into a card, tile, accordion, or interaction.

The writing should remain the main experience.

---

## List Rendering Rule

Lists should be used when the source content is clearly functioning as a list.

Use list blocks for:

- grouped examples
- workflow steps
- repeated prompts
- option sets
- tool-style instructions
- short grouped distinctions
- repeated “do / do not” items
- section lists that are visually flattened when rendered as paragraphs

Do not force every short paragraph into a list.

Some VitalNotes paragraphs are intentionally short for pacing.

The cleanup should preserve meaning and cadence.

Current cleanup task:

- [[Retro Fix 01 - Bullet List Cleanup]]

---

## Glossary Support

Glossary terms should reduce friction.

The current first-slice reader includes simple glossary popup support.

Glossary support should follow:

- [[Glossary and Popup Map]]
- [[Popup and Glossary Rules]]
- [[Glossary Term Audit]]

Do not define every term.

Do not interrupt the section with too many popups.

Glossary support should be especially useful for terms such as:

- cognitive load
- working memory
- retrieval
- recognition
- access
- spacing
- clinical recall
- recall prompt
- clinical cue
- boundary
- meaning
- pathophysiology
- mechanism
- compensation
- directive intent
- clinical risk
- contraindication
- Smart Notes
- capture notes
- working notes
- idea maturation
- Anki

A glossary popup should help a student keep reading.

It should not become the place where the teaching happens.

---

## Tool Support

Tools should appear only when justified.

The current first-slice reader includes simple tool drawer support and related tool cards.

If a section has a related tool, the reader may show:

- a small tool button
- a tool drawer
- a related tool card near the end
- a link to the full [[Tools Library]]

Do not place a tool in a section just because the interface allows it.

Some sections should have no tool.

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Do not show planned tools as live tools in the reader.

Planned tools can remain internal until the relevant sections are drafted, stable, and clearly earn tool support.

Tool access should feel supportive, not like an assignment.

Tool access should not become [[Anki Integration]], deck management, automated flashcard generation, or flashcard-platform behavior.

---

## Current Active Tool Relationships

### [[Directive Meaning Check]]

Primary connection:

- [[Directives Through Purpose]]

Possible later connections:

- [[Clinical Reasoning]]
- [[OSCE Preparation]]

### [[Smart Note Template]]

Primary connections:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

Possible secondary connection:

- [[Meaning Before Memorization]]

### [[Clinical Recall Prompt Builder]]

Primary connections:

- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Possible secondary connections:

- [[Retrieval and Spaced Learning]]
- [[Smart Notes for Paramedic Students]]

---

## Sections Without Active Tools

Some first-slice sections should not have active tools right now.

Examples:

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Retrieval and Spaced Learning]]

This is intentional.

A section does not fail because it lacks a tool.

A tool should appear only when it supports a repeated student action.

---

## Related Sections

Related sections should help students continue without feeling trapped in a linear path.

Use related sections when they genuinely help.

Related sections should not become a long list of everything.

Three useful related links are usually better than eight weak ones.

Related tools should be handled separately through the `relatedTools` field.

Do not mix tool links into `relatedSections`.

Examples:

- [[Cognitive Load]] may connect to [[Why Studying Feels Productive But Fails Under Pressure]], [[Learning Strain Is Not Always a Personal Problem]], [[Scenario Days as Learning Tools]], and [[Performance Under Pressure]].
- [[Meaning Before Memorization]] may connect to [[Pathophysiology Through Patterns]], [[Directives Through Purpose]], and [[Smart Notes for Paramedic Students]].
- [[Directives Through Purpose]] may connect to [[Pathophysiology Through Patterns]], [[Clinical Recall Without Trivia]], [[Clinical Reasoning]], and [[OSCE Preparation]].
- [[Smart Notes for Paramedic Students]] may connect to [[Types of Notes and Idea Maturation]], [[Obsidian for Learning Paramedicine]], and [[Clinical Recall Without Trivia]].
- [[Retrieval and Spaced Learning]] may connect to [[Clinical Recall Without Trivia]], [[Anki for Paramedic Learning]], and [[Why Studying Feels Productive But Fails Under Pressure]].
- [[Clinical Recall Without Trivia]] may connect to [[Retrieval and Spaced Learning]], [[Anki for Paramedic Learning]], and [[Smart Notes for Paramedic Students]].
- [[Anki for Paramedic Learning]] may connect to [[Retrieval and Spaced Learning]], [[Clinical Recall Without Trivia]], and [[Smart Notes for Paramedic Students]].
- [[Where to Begin]] may connect broadly across the learning path because it is a routing page.

---

## Previous and Next Navigation

Every section should include previous and next navigation based on the intended learning path.

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

## Current Cluster Support

The Section Reader currently supports these first-slice clusters.

### [[00 Start Here]]

Sections:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

Primary reader need:

- gentle orientation
- clear routing
- low friction
- no tool pressure

### [[01 Why Learning Feels Hard]]

Sections:

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

Primary reader need:

- clean explanation
- strong glossary support
- no unnecessary tools
- clear movement toward understanding

### [[02 Build Understanding]]

Sections:

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

Primary reader need:

- preserve paragraph-level explanation
- support terms like mechanism, compensation, clinical risk, and directive intent
- connect [[Directives Through Purpose]] to [[Directive Meaning Check]]

### [[03 Build Usable Notes]]

Sections:

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

Primary reader need:

- prevent the app from feeling like a productivity system
- keep Obsidian optional
- connect relevant sections to [[Smart Note Template]]
- preserve the difference between notes as storage and notes as thinking support
- clean up flattened lists where needed

### [[04 Build Recall]]

Sections:

- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Primary reader need:

- preserve the shift from understanding and notes into access
- support glossary terms like retrieval, spacing, recognition, access, clinical recall, recall prompt, and Anki
- keep Anki from becoming visually or structurally dominant
- connect [[Clinical Recall Without Trivia]] and [[Anki for Paramedic Learning]] to [[Clinical Recall Prompt Builder]]
- preserve the difference between retrieving facts and practicing clinical recall

---

## Current Content Object Needs

Each section object currently needs enough structure to support:

- id
- title
- subtitle
- cluster
- cluster order
- section order
- student problem
- section purpose
- page type
- status
- body
- glossary terms
- related tools
- related sections
- previous section
- next section

This should remain aligned with [[Content Schema]].

Do not add new schema fields unless the interface clearly needs them.

---

## First-Slice Reader Test

The first-slice reader should now test whether the Section Reader can handle:

- orientation pages
- conceptual sections
- practical system sections
- glossary terms
- sections with no tools
- sections with active tools
- previous and next navigation
- related sections
- return to [[Learning Path]]
- return to [[Tools Library]]
- list rendering
- section density
- student-facing reading flow

Current first-slice content:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

This slice tests the arc from orientation, to learning difficulty, to understanding, to notes, to recall.

It should not try to solve:

- clinical reasoning
- scenario practice
- OSCE pressure
- reflection
- AI feedback
- progress tracking
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior

---

## Acceptance Criteria

A student should always know:

- where they are
- why the section matters
- what problem the section helps with
- what connects next
- whether a tool is available
- how to return to the learning path

The Section Reader succeeds when the student can read calmly, move clearly, and use support only when it helps.

The Section Reader fails if the interface becomes more interesting than the learning.

---

## Current No-Go List

Do not add during first-slice cleanup:

- accounts
- dashboards
- badges
- streaks
- scores
- quizzes
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

## Next Review

Review this file after:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. first-slice reader-quality testing

Do not broaden the reader design before those are complete.
# Section Reader Design

The Section Reader is the core reading experience of the VitalNotes app.

Its job is to display one student-facing section in a clean, calm, navigable format.

The reader should support the guide without making the page feel like a course module, textbook chapter, productivity dashboard, flashcard platform, or interactive study platform.

---

## Purpose

Display one rebuilt VitalNotes section at a time.

The Section Reader should help students understand:

- where they are
- why the section matters
- what the section is helping them solve
- what connects next
- whether a related tool is available
- how to return to the learning path

The Section Reader should render the guide, not reinvent it.

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

## Content Structure Assumption

Current rebuilt content files contain:

- App Metadata
- App-Ready Section Draft

The app should eventually pull or map from that structure into a section object.

Planning notes, glossary entries, tool decisions, source handling, and quality checks should not appear inside the student-facing section reader.

Those belong in:

- [[Glossary and Popup Map]]
- [[Tool Library Map]]
- [[Old-to-New Section Mapping]]
- [[Current Project Status]]
- [[Decisions]]
- [[Open Questions]]

The first app slice should extract only app-facing content, not placeholder scaffolding, review notes, source-handling notes, or internal planning text.

---

## Possible Component Structure

Keep the first version simple.

Possible early components:

- `SectionPage`
- `SectionHeader`
- `SectionBody`
- `GlossaryTerm`
- `GlossaryPopup`
- `ToolDrawer`
- `RelatedSections`
- `SectionNavigation`

Possible later components:

- `ClusterLabel`
- `StudentProblemCard`
- `ToolCard`
- `GlossaryDrawer`
- `LearningPathReturn`

Do not add complex interaction until the reading flow works.

The first test is whether a student can read a section calmly and move to the next useful section without needing instructions.

---

## Section Header

The header should include:

- title
- cluster label
- subtitle or purpose line
- student problem

Example:

**Cognitive Load**

Cluster: Why Learning Feels Hard

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
- simple callouts later if needed

The body should not be chopped into excessive cards.

VitalNotes writing depends on paragraph-level explanation. The app should preserve that.

Do not turn every paragraph into a card, tile, accordion, or interaction.

The writing should remain the main experience.

---

## Glossary Support

Glossary terms should reduce friction.

Possible designs:

- inline popup
- side-panel card
- glossary drawer
- link to glossary page

The first version should use the simplest approach that keeps reading smooth.

Glossary support should follow:

- [[Glossary and Popup Map]]
- [[Popup and Glossary Rules]]

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

If a section has a related tool, the reader may show:

- a small tool button
- a tool drawer
- a related tool card near the end
- a link to the full Tools Library

Do not place a tool in a section just because the interface allows it.

Some sections should have no tool.

Current active tool examples:

- [[Directives Through Purpose]] may connect to [[Directive Meaning Check]].
- [[Smart Notes for Paramedic Students]] may connect to [[Smart Note Template]].
- [[Types of Notes and Idea Maturation]] may connect to [[Smart Note Template]].
- [[Obsidian for Learning Paramedicine]] may connect to [[Smart Note Template]].
- [[Clinical Recall Without Trivia]] may connect to [[Clinical Recall Prompt Builder]].
- [[Anki for Paramedic Learning]] may connect to [[Clinical Recall Prompt Builder]].

Current no-active-tool examples:

- [[Cognitive Load]] has no active tool yet, but may later connect to a possible [[Cognitive Load Check]].
- [[Why Studying Feels Productive But Fails Under Pressure]] has no active tool yet. The earlier possible [[Recognition vs Access Check]] has been folded into the broader [[Clinical Recall Prompt Builder]] direction.
- [[Learning Strain Is Not Always a Personal Problem]] does not need a tool right now.
- [[Meaning Before Memorization]] may relate to [[Smart Note Template]], but the section itself does not require an active tool.
- [[Pathophysiology Through Patterns]] has no active tool yet. A possible [[Mechanism Study Check]] remains parked in [[Tool Library Map]].
- [[Retrieval and Spaced Learning]] relates to [[Clinical Recall Prompt Builder]], but does not need the tool as a primary drawer because the tool is earned more strongly by [[Clinical Recall Without Trivia]].

Tool access should feel supportive, not like an assignment.

Tool access should not become Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior.

---

## Active Tools in the Current First-Slice Planning

The current active drafted tools are:

- [[Directive Meaning Check]] - Draft v1
- [[Smart Note Template]] - Draft v1
- [[Clinical Recall Prompt Builder]] - Draft v1

These tools should be available through the Tools Library.

They may also appear in relevant section readers when they directly support the section.

Do not show planned tools as live tools in the reader.

Planned tools can remain internal until the relevant sections are drafted and stable.

---

## Related Sections

Related sections should help students continue without feeling trapped in a linear path.

Use related sections when they genuinely help.

Examples:

- [[Cognitive Load]] may connect to [[Why Studying Feels Productive But Fails Under Pressure]], [[Learning Strain Is Not Always a Personal Problem]], [[Scenario Days as Learning Tools]], and [[Performance Under Pressure]].
- [[Meaning Before Memorization]] may connect to [[Pathophysiology Through Patterns]], [[Directives Through Purpose]], and [[Smart Notes for Paramedic Students]].
- [[Directives Through Purpose]] may connect to [[Pathophysiology Through Patterns]], [[Clinical Recall Without Trivia]], [[Clinical Reasoning]], and [[OSCE Preparation]].
- [[Smart Notes for Paramedic Students]] may connect to [[Types of Notes and Idea Maturation]], [[Obsidian for Learning Paramedicine]], and [[Clinical Recall Without Trivia]].
- [[Retrieval and Spaced Learning]] may connect to [[Clinical Recall Without Trivia]], [[Anki for Paramedic Learning]], and [[Why Studying Feels Productive But Fails Under Pressure]].
- [[Clinical Recall Without Trivia]] may connect to [[Retrieval and Spaced Learning]], [[Anki for Paramedic Learning]], and [[Smart Notes for Paramedic Students]].
- [[Anki for Paramedic Learning]] may connect to [[Retrieval and Spaced Learning]], [[Clinical Recall Without Trivia]], and [[Smart Notes for Paramedic Students]].
- [[Where to Begin]] may connect broadly across the learning path because it is a routing page.

Related tools should be handled separately through the `relatedTools` field.

Do not mix tool links into `relatedSections`.

Related sections should not become a long list of everything.

Three useful related links are usually better than eight weak ones.

---

## Previous and Next Navigation

Every section should include previous and next navigation based on the intended learning path.

Current drafted sequence:

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

Next planned sequence:

16. [[Clinical Reasoning]]
17. [[Pattern Recognition]]
18. [[Avoiding Premature Closure]]

The previous and next links should make the main path obvious.

Problem-based navigation can exist separately through [[Where to Begin]].

---

## Current Cluster Support

The Section Reader should currently support these drafted clusters:

### 00 Start Here

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

Primary reader need:

- gentle orientation
- clear routing
- low friction
- no tool pressure

---

### 01 Why Learning Feels Hard

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

Primary reader need:

- clean explanation
- strong glossary support
- no unnecessary tools
- clear movement toward understanding

---

### 02 Build Understanding

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

Primary reader need:

- preserve paragraph-level explanation
- support terms like mechanism, compensation, clinical risk, and directive intent
- connect [[Directives Through Purpose]] to [[Directive Meaning Check]]

---

### 03 Build Usable Notes

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

Primary reader need:

- prevent the app from feeling like a productivity system
- keep Obsidian optional
- connect relevant sections to [[Smart Note Template]]
- preserve the difference between notes as storage and notes as thinking support

---

### 04 Build Recall

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

## Content Needs

Each section object may eventually need:

- id
- title
- subtitle
- cluster
- clusterOrder
- sectionOrder
- studentProblem
- sectionPurpose
- pageType
- status
- body
- glossaryTerms
- relatedTools
- relatedSections
- previous
- next

This should remain aligned with [[Content Schema]].

Do not add new schema fields unless the interface clearly needs them.

---

## First Vertical Slice Reader Test

The first useful vertical slice should test whether the Section Reader can handle:

- orientation pages
- conceptual sections
- practical system sections
- glossary terms
- sections with no tools
- sections with active tools
- previous and next navigation
- related sections
- return to Learning Path
- return to Tools Library

Likely first-slice content:

- Start Here cluster
- Why Learning Feels Hard cluster
- Build Understanding cluster
- Build Usable Notes cluster
- Build Recall cluster
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

This slice should test the arc from orientation, to learning difficulty, to understanding, to notes, to recall.

It should not try to solve clinical reasoning, scenario practice, OSCE pressure, or reflection yet.

It should not add Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior.

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
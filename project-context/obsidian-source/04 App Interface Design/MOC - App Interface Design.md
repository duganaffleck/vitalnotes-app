# MOC - App Interface Design

This folder defines how the rebuilt content should eventually appear in the VitalNotes app interface.

The app should support the guide.

It should not overpower the guide.

VitalNotes should first become a calm, readable, navigable student-facing interface. More complex features can wait.

---

## Core Notes

- [[App Vision]]
- [[Navigation Model]]
- [[Section Reader Design]]
- [[Popup and Glossary Rules]]
- [[Tool Drawer Design]]
- [[UI Tone and Style]]
- [[Content Schema]]
- [[../05 Build Prompts/App Anti-Drift Rules]]

---

## App Philosophy

VitalNotes should feel like a calm, structured learning interface.

Not a course shell.

Not a video game.

Not a productivity dashboard.

Not a quiz app.

Not a learning management system.

Not an Obsidian tutorial.

Not an Anki platform.

The app should help students move through the guide with less friction and more clarity.

The interface should make the writing easier to use, not compete with it.

---

## Current App Planning Status

Status: App-readiness planning next

Do not begin VS Code app production yet.

Current work remains:

- complete Build Recall architecture verification pass
- complete app-readiness checkpoint
- define the first vertical slice
- create a fresh app-development handoff prompt

The app build should wait until the architecture verification pass is complete and the first slice is checked against real drafted content.

---

## Current Drafted Content Available for App Testing

### 00 Start Here

- [[../03 Rebuilt Content/00 Start Here/Start Here - What VitalNotes Is]] - Draft v3
- [[../03 Rebuilt Content/00 Start Here/How to Use This Guide]] - Draft v3
- [[../03 Rebuilt Content/00 Start Here/Where to Begin]] - Draft v2

### 01 Why Learning Feels Hard

- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Cognitive Load]] - Draft v2
- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Why Studying Feels Productive But Fails Under Pressure]] - Draft v2
- [[../03 Rebuilt Content/01 Why Learning Feels Hard/Learning Strain Is Not Always a Personal Problem]] - Draft v2

### 02 Build Understanding

- [[../03 Rebuilt Content/02 Build Understanding/Meaning Before Memorization]] - Draft v2
- [[../03 Rebuilt Content/02 Build Understanding/Pathophysiology Through Patterns]] - Draft v2
- [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]] - Draft v2

### 03 Build Usable Notes

- [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]] - Draft v2
- [[../03 Rebuilt Content/03 Build Usable Notes/Types of Notes and Idea Maturation]] - Draft v2
- [[../03 Rebuilt Content/03 Build Usable Notes/Obsidian for Learning Paramedicine]] - Draft v2

### 04 Build Recall

- [[../03 Rebuilt Content/04 Build Recall/Retrieval and Spaced Learning]] - Draft v2
- [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]] - Draft v2
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] - Draft v2

Active drafted tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] - Draft v1

---

## Likely First Vertical Slice

The likely first app slice should test:

- Home page
- Learning Path page
- Section Reader
- glossary support
- simple Tools Library
- previous and next navigation
- problem-based entry through [[../03 Rebuilt Content/00 Start Here/Where to Begin]]
- section-linked tool access where justified

Likely included content:

- Start Here cluster
- Why Learning Feels Hard cluster
- Build Understanding cluster
- Build Usable Notes cluster
- Build Recall cluster
- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Reason for including Build Recall:

- the first slice can test the fuller arc from understanding, to usable notes, to reliable access
- it gives the app enough content variety to test conceptual, practical, and tool-supported sections
- it allows the interface to test three active tools without becoming tool-heavy
- [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] helps test whether practical system pages can remain guide-like instead of becoming platform tutorials

---

## Early App Structure

Likely early content files:

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

Use manual JavaScript objects or JSON-like data first.

Do not build a complex Obsidian-to-app import pipeline for the first slice.

Do not add dashboards, accounts, tracking, quizzes, badges, gamified systems, Anki integration, deck management, or automated flashcard generation.

---

## Interface Priorities

The interface should prioritize:

- readability
- orientation
- clear section flow
- calm navigation
- selective glossary help
- simple tool access
- previous and next movement
- problem-based entry
- mobile-friendly reading

The interface should not prioritize:

- novelty
- feature count
- animation
- interactivity for its own sake
- dashboard complexity
- customization
- productivity aesthetics
- flashcard-platform behavior

---

## Design Boundaries

The app should not expose:

- internal project maps
- source material notes
- old-to-new mapping files
- development logs
- review notes
- draft commentary
- architecture decisions

The student should see the guide, not the workshop.

---

## Current App Design Check

The app interface direction is aligned if:

- the writing remains central
- tools remain optional
- glossary support reduces friction
- navigation feels obvious
- the app feels calmer than the blog
- paramedic learning remains central
- Anki remains a support mentioned inside content, not a platform direction
- the interface does not become more interesting than the learning

If a proposed feature does not help the student read, understand, navigate, or use the guide, park it.
# MOC - VitalNotes Rebuild

VitalNotes is being rebuilt as a student-facing learning guide with an app-quality interface.

The goal is not to preserve the old site structure.

The goal is to preserve the strongest thinking and reorganize it into something clearer, smaller, more usable, and more navigable.

Obsidian is the source of truth.

Content comes before code.

---

## Current Project Phase

The content rebuild is underway.

Drafted clusters:

- [[../03 Rebuilt Content/00 Start Here]]
- [[../03 Rebuilt Content/01 Why Learning Feels Hard]]
- [[../03 Rebuilt Content/02 Build Understanding]]
- [[../03 Rebuilt Content/03 Build Usable Notes]]
- [[../03 Rebuilt Content/04 Build Recall]]

Active drafted tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Current work:

- Build Recall architecture update pass
- app-readiness checkpoint preparation

Next possible phase:

- first app vertical slice

Possible next content cluster if app development is deferred:

- [[../03 Rebuilt Content/05 Think Clinically]]

Next possible student-facing section if continuing content:

- [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

Do not start app production until the Build Recall architecture update pass and app-readiness checkpoint are complete.

---

## Current Focus

- [[VitalNotes Rebuild Master Map]]
- [[Current Project Status]]
- [[Next Actions]]
- [[Open Questions]]
- [[../06 Development Log/Next Build Tasks]]

Use these files to understand where the project is, what is active, what is parked, and what should happen next.

---

## Source Material

- [[../01 Source Library/MOC - Source Library]]
- [[../01 Source Library/Source Material Index]]
- [[../01 Source Library/Reading Influence Pool]]
- [[../01 Source Library/Prior VitalNotes Sections]]
- [[../01 Source Library/Teaching Observations]]
- [[../01 Source Library/Scenario Generator Influence]]
- [[../01 Source Library/Concepts to Preserve]]

Source material should be used to preserve strong thinking, examples, tone, and learning architecture.

It should not force the rebuild to preserve old section order, old wording, or old structure.

The reading influence pool should shape the guide quietly. It should not turn student-facing pages into book summaries or academic commentary.

---

## Content Architecture

- [[../02 Content Architecture/MOC - Content Architecture]]
- [[../02 Content Architecture/New VitalNotes Learning Path]]
- [[../02 Content Architecture/Student Problem Map]]
- [[../02 Content Architecture/Page Type Map]]
- [[../02 Content Architecture/Tool Library Map]]
- [[../02 Content Architecture/Glossary and Popup Map]]
- [[../02 Content Architecture/Old-to-New Section Mapping]]

These files define the structure of the rebuilt guide.

Use them to protect:

- the learning path
- student problem orientation
- page roles
- tool boundaries
- glossary selectivity
- old-to-new continuity

Do not change the learning path or content map without an explicit decision.

---

## Rebuilt Content

- [[../03 Rebuilt Content/MOC - Rebuilt Content]]

Completed drafted clusters:

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

### Tools Library

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] - Draft v1
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] - Draft v1

Next possible content target:

- [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

---

## App Interface

- [[../04 App Interface Design/MOC - App Interface Design]]
- [[../04 App Interface Design/App Vision]]
- [[../04 App Interface Design/Navigation Model]]
- [[../04 App Interface Design/Section Reader Design]]
- [[../04 App Interface Design/Popup and Glossary Rules]]
- [[../04 App Interface Design/Content Schema]]
- [[../04 App Interface Design/Tool Drawer Design]]
- [[../04 App Interface Design/UI Tone and Style]]

The app should be a calm, content-driven interface that renders the guide well.

It should not become:

- a quiz platform
- a learning management system
- a productivity dashboard
- a simulation engine
- a gamified study app
- an Obsidian tutorial site
- an Anki platform

Likely first app slice:

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
- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]
- previous and next navigation
- problem-based entry through [[../03 Rebuilt Content/00 Start Here/Where to Begin]]

Reason for including Build Recall:

- the first slice can test the fuller arc from understanding, to usable notes, to reliable access
- it provides enough content variety to test conceptual, practical, and tool-supported sections
- it allows the app to test three active tools without becoming tool-heavy
- it tests whether [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]] can remain guide-like without making Anki central

No app production yet.

---

## Build Support

- [[../05 Build Prompts/MOC - Build Prompts]]
- [[../05 Build Prompts/App Anti-Drift Rules]]
- [[../05 Build Prompts/ChatGPT Content Rewrite Prompt]]
- [[../05 Build Prompts/ChatGPT Section Review Prompt]]
- [[../05 Build Prompts/Codex App Structure Prompt]]
- [[../05 Build Prompts/Codex Component Prompt]]
- [[../05 Build Prompts/Codex Bugfix Prompt]]

Build prompts should stay bounded.

ChatGPT should support:

- drafting
- review
- architecture updates
- anti-drift checks
- app planning

Codex should later receive:

- small scoped implementation tasks
- clear file targets
- no broad product reinvention
- no content restructuring unless explicitly requested

---

## Development Log

- [[../06 Development Log/MOC - Development Log]]
- [[../06 Development Log/Decisions]]
- [[../06 Development Log/Next Build Tasks]]
- [[../06 Development Log/Bugs and Fixes]]
- [[../06 Development Log/Deferred Ideas]]
- [[../06 Development Log/Feature Ideas]]
- [[../06 Development Log/Release Notes]]

Use the development log to track:

- major decisions
- active next tasks
- deferred ideas
- bugs and fixes once app development begins
- release notes once versions exist

Do not use [[../06 Development Log/Decisions]] for minor wording changes.

---

## Current Working Rule

This vault is the planning spine for VitalNotes.

When new ideas appear, place them somewhere in this vault before they become content or code.

When the project feels scattered, return here.

If a file does not fit the vault structure, pause before creating it.

The rebuild should stay organized around:

- student problems
- paramedic learning
- usable understanding
- retrieval and access
- clinical reasoning
- scenario transfer
- performance under pressure
- reflection tied to action

The app exists to support that guide, not replace it.
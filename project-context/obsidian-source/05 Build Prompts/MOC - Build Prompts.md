# MOC - Build Prompts

This folder holds reusable prompts for ChatGPT and Codex.

Use these prompts to keep the project consistent and reduce drift.

Prompts in this folder should protect the VitalNotes rebuild from becoming generic, overbuilt, or app-first.

---

## Purpose

Build prompts should help with:

- student-facing section drafting
- section review and anti-slop checks
- Obsidian architecture updates
- app planning
- future Codex implementation tasks
- bug fixes once development begins

They should not replace the source of truth.

The Obsidian vault remains the planning spine for VitalNotes.

---

## ChatGPT Prompts

Use ChatGPT prompts for content, review, planning, and architecture work.

Core prompts:

- [[ChatGPT Content Rewrite Prompt]]
- [[ChatGPT Section Review Prompt]]

Likely future prompt needs:

- cluster review prompt
- glossary update prompt
- tool page review prompt
- app-readiness review prompt
- fresh chat continuity prompt
- first app vertical slice handoff prompt

ChatGPT should help with:

- drafting sections
- reviewing for tone and drift
- checking section role in the learning path
- updating architecture files
- preserving continuity
- identifying when a tool is earned
- preparing bounded Codex prompts later

ChatGPT should not:

- reinvent the content map
- rename sections without explicit approval
- start app production early
- turn student-facing content into academic explanation
- create loose files outside the vault structure

---

## Codex Prompts

Use Codex prompts later for bounded implementation tasks.

Core prompts:

- [[Codex Component Prompt]]
- [[Codex Bugfix Prompt]]
- [[Codex App Structure Prompt]]

Codex should receive:

- specific file targets
- clear scope
- exact requirements
- acceptance criteria
- anti-drift reminders
- instructions not to restructure unrelated files
- instructions not to invent content

Codex should not receive broad prompts such as:

- "Build the app"
- "Make VitalNotes better"
- "Redesign the whole interface"
- "Add whatever features seem useful"
- "Create a complete learning platform"

Codex work should begin only after the architecture verification pass is complete and the first vertical slice is defined clearly.

---

## Guardrails

Use these guardrail files before creating or using build prompts:

- [[App Anti-Drift Rules]]
- [[../04 App Interface Design/App Vision]]
- [[../04 App Interface Design/Navigation Model]]
- [[../04 App Interface Design/Content Schema]]
- [[../04 App Interface Design/Section Reader Design]]
- [[../04 App Interface Design/Tool Drawer Design]]
- [[../04 App Interface Design/UI Tone and Style]]

The app should stay:

- content-driven
- calm
- student-facing
- paramedicine-specific
- simple before it is impressive
- aligned with the Obsidian vault

---

## Current Build Boundary

Do not start VS Code app production yet.

Current phase:

- content rebuild
- Build Recall architecture verification pass
- app-readiness planning
- first vertical slice definition

Current drafted clusters:

- [[../03 Rebuilt Content/00 Start Here]]
- [[../03 Rebuilt Content/01 Why Learning Feels Hard]]
- [[../03 Rebuilt Content/02 Build Understanding]]
- [[../03 Rebuilt Content/03 Build Usable Notes]]
- [[../03 Rebuilt Content/04 Build Recall]]

Current active tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Next project move:

- complete the Build Recall architecture verification pass
- complete the app-readiness checkpoint
- define the first app vertical slice
- prepare a fresh app-development handoff prompt if app work begins

Possible next content target if content drafting continues:

- [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

---

## First App Slice Direction

When app work eventually begins, the likely first slice should test:

- Home page
- Learning Path page
- Section Reader
- glossary support
- simple Tools Library
- previous and next navigation
- problem-based entry through [[../03 Rebuilt Content/00 Start Here/Where to Begin]]
- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]
- Start Here cluster
- Why Learning Feels Hard cluster
- Build Understanding cluster
- Build Usable Notes cluster
- Build Recall cluster

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

Use manual JavaScript objects or JSON-like content first.

Do not build a complex Obsidian-to-app import pipeline for the first version.

Do not add Anki integration, deck management, or automated flashcard generation.

---

## Prompt Standards

A strong prompt should include:

- project context
- exact task
- file path or target
- source files to preserve
- constraints
- what not to change
- expected output format
- acceptance criteria
- anti-drift rules

A weak prompt asks for broad improvement without boundaries.

Avoid weak prompt language such as:

- "make this better"
- "improve the app"
- "clean it up however you think"
- "add features"
- "modernize it"
- "optimize everything"

Use bounded language such as:

- "Update only this file."
- "Do not change section names."
- "Preserve the current content map."
- "Return the full file."
- "Do not add new dependencies."
- "Do not modify unrelated components."
- "Use the existing Obsidian architecture as source of truth."

---

## Rule

Do not ask Codex to "build the app" broadly.

Give Codex bounded tasks with file targets, requirements, and acceptance criteria.

If a task cannot be described clearly, it is not ready for Codex yet.
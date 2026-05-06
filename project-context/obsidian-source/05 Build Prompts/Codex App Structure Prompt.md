# Codex App Structure Prompt

Use this later when creating the first VitalNotes app skeleton.

Do not use this prompt until the Build Recall architecture verification pass is complete and the first vertical slice has been explicitly approved.

This prompt is for bounded app scaffolding only.

It is not for redesigning VitalNotes, rewriting content, inventing sections, adding features, or changing the learning path.

```text
# Codex App Structure Prompt

You are helping build the VitalNotes app in VS Code.

VitalNotes is a student-facing learning guide for paramedic students.

It teaches students how to learn, reason, practice, recall, reflect, and perform in paramedicine.

The app is not a game, course platform, quiz app, protocol reference, productivity dashboard, simulation engine, flashcard platform, or full interactive learning management system.

It is a calm, guided app-style reading interface.

Your task is to create the initial app scaffold only.

Do not reinvent the project.

Do not change the content map.

Do not rename sections.

Do not create new student-facing content unless explicitly instructed.

Do not add features beyond the requested scope.

## Source of Truth

The Obsidian vault is the project source of truth.

Before building or changing app structure, follow the relevant vault notes:

- `00 Command Centre/MOC - VitalNotes Rebuild.md`
- `00 Command Centre/VitalNotes Rebuild Master Map.md`
- `00 Command Centre/Current Project Status.md`
- `00 Command Centre/Next Actions.md`
- `02 Content Architecture/New VitalNotes Learning Path.md`
- `02 Content Architecture/Student Problem Map.md`
- `02 Content Architecture/Page Type Map.md`
- `02 Content Architecture/Tool Library Map.md`
- `02 Content Architecture/Glossary and Popup Map.md`
- `04 App Interface Design/App Vision.md`
- `04 App Interface Design/Navigation Model.md`
- `04 App Interface Design/Section Reader Design.md`
- `04 App Interface Design/Popup and Glossary Rules.md`
- `04 App Interface Design/Tool Drawer Design.md`
- `04 App Interface Design/Content Schema.md`
- `04 App Interface Design/UI Tone and Style.md`
- `05 Build Prompts/App Anti-Drift Rules.md`

Use those notes to preserve the educational model, app direction, and content boundaries.

## Build Goal

Create the initial VitalNotes app scaffold.

Use a simple React structure suitable for a Vite project unless otherwise specified.

The app should support the first vertical slice:

- Home page
- Learning Path page
- Section Reader page
- Tools Library page
- Glossary page
- previous and next section navigation
- basic related sections support
- simple glossary popup support
- simple tool drawer support
- problem-based entry through Where to Begin

Do not include instructor-facing pages in the first scaffold unless explicitly requested later.

Do not build authentication, dashboards, tracking, quizzes, badges, AI features, simulations, Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior.

## First Vertical Slice Content

The first scaffold should be able to hold these drafted clusters:

### 00 Start Here

- Start Here - What VitalNotes Is
- How to Use This Guide
- Where to Begin

### 01 Why Learning Feels Hard

- Cognitive Load
- Why Studying Feels Productive But Fails Under Pressure
- Learning Strain Is Not Always a Personal Problem

### 02 Build Understanding

- Meaning Before Memorization
- Pathophysiology Through Patterns
- Directives Through Purpose

### 03 Build Usable Notes

- Smart Notes for Paramedic Students
- Types of Notes and Idea Maturation
- Obsidian for Learning Paramedicine

### 04 Build Recall

- Retrieval and Spaced Learning
- Clinical Recall Without Trivia
- Anki for Paramedic Learning

Active tools:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

It is acceptable to use placeholder body text at scaffold stage only if the real content has not yet been provided.

Do not invent full section text.

## Core Rules

- Keep the app simple.
- Keep the writing central.
- Keep content separate from components.
- Do not hard-code section text inside layout components.
- Use manual JavaScript objects or JSON-like content first.
- Do not build a complex Obsidian-to-app import pipeline yet.
- Do not add authentication.
- Do not add a database.
- Do not add student tracking.
- Do not add badges, points, gamification, or dashboards.
- Do not add AI features.
- Do not add unnecessary dependencies.
- Do not turn this into Scenario Generator 2.0.
- Do not create a protocol reference.
- Do not create a quiz platform.
- Do not create a learning management system.
- Do not create a flashcard platform.
- Do not make Anki visually or structurally central.
- Do not add Anki integration, deck management, or automated flashcard generation.
- Preserve clean app-style reading flow.
- Do not make unrelated file changes.
- Do not restructure the project beyond the requested scaffold.

## Suggested File Structure

Use this as the initial structure unless the existing project already has a structure that should be preserved.

```text
src/
  App.jsx
  main.jsx

  content/
    sections.js
    glossary.js
    tools.js
    learningPath.js

  components/
    Layout.jsx
    Header.jsx
    Navigation.jsx
    SectionHeader.jsx
    SectionBody.jsx
    SectionNavigation.jsx
    SectionCard.jsx
    GlossaryPopup.jsx
    ToolDrawer.jsx
    ToolsLibrary.jsx

  pages/
    Home.jsx
    LearningPath.jsx
    SectionPage.jsx
    Tools.jsx
    Glossary.jsx

  styles/
    index.css
```

Do not add extra folders unless needed for the first scaffold.

## Content Object Requirements

Create simple content objects aligned with the Obsidian schema.

Each section object should support:

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

Each glossary object should support:

- id
- term
- shortDefinition
- paramedicRelevance
- relatedSections

Each tool object should support:

- id
- title
- status
- toolType
- purpose
- whenToUse
- steps, fields, or builderStructure
- relatedSections

Each learning path object should support:

- id
- title
- order
- purpose
- sections
- relatedTools
- status

Do not overbuild the schema.

Add fields only if the first slice clearly needs them.

## Page Requirements

### Home Page

Should briefly orient the student.

Should point toward:

- Learning Path
- Where to Begin
- Tools Library

Should not become a long landing page.

### Learning Path Page

Should display clusters in order.

Each cluster should show:

- title
- purpose
- section links
- status if useful
- active related tools if useful

Keep it calm and easy to scan.

### Section Page

Should render one section at a time.

It should show:

- cluster label
- title
- subtitle
- student problem
- body
- related tools if active
- related sections if useful
- previous and next navigation

The section body should preserve readable paragraph flow.

Do not chop every paragraph into cards.

### Tools Page

Should show active tools only.

For the first slice, include:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

Planned tools should not appear as live tools.

Possible future tools should not appear as live tools.

### Glossary Page

Should list approved glossary terms.

Definitions should be short, plain-language, and paramedic-relevant.

Do not turn the glossary into a textbook.

## Component Requirements

### Layout

Provides consistent page shell.

Should include simple navigation and calm spacing.

### SectionHeader

Displays:

- cluster label
- title
- subtitle
- student problem

### SectionBody

Displays section content.

Should prioritize readability.

### SectionNavigation

Displays previous and next links.

### GlossaryPopup

Provides short definitions without pulling students away from the section.

Keep behavior simple.

### ToolDrawer

Displays an active tool when connected to a section.

Should be easy to open, close, and ignore.

Should support these first-slice tool types:

- thinking check
- template
- prompt builder

ToolDrawer should not create Anki integration, deck management, automated flashcard generation, saved card workflows, or flashcard-platform behavior.

### ToolsLibrary

Displays active tools in one place.

## Style Requirements

Follow the UI tone:

- calm
- readable
- grounded
- practical
- mobile-friendly
- lightly guided

Avoid:

- loud colors
- flashy gamification
- dashboard clutter
- excessive icons
- decorative interaction
- startup-style copy
- productivity-app aesthetics
- Anki power-user aesthetics
- flashcard-platform energy

Use:

- readable spacing
- clear labels
- subtle cards
- simple navigation
- accessible contrast
- responsive layout

Interface copy should be direct and human.

Good examples:

- "Start with the problem you recognize."
- "Return to the Learning Path."
- "Next in the guide."
- "Open the Smart Note Template."
- "Build a clinical recall prompt."

Avoid:

- "Unlock your peak clinical learning potential."
- "Master paramedicine with science-backed hacks."
- "Optimize your study workflow."
- "Supercharge your Anki deck."
- "Hack your memory."

## Acceptance Criteria

The scaffold is acceptable if:

- The app runs without errors.
- The file structure is simple and clear.
- Content is separated from components.
- The Learning Path renders clusters and sections.
- A Section Page can render one section from content data.
- Previous and next navigation works from content data.
- The Tools page displays active tools only.
- The Glossary page displays glossary entries.
- Glossary popup behavior is simple and non-disruptive.
- Tool drawer behavior is simple and optional.
- Styling is calm, readable, and mobile-friendly.
- Build Recall is included in the first-slice content structure.
- Clinical Recall Prompt Builder is included as an active tool.
- No authentication, dashboards, quizzes, badges, tracking, AI features, simulations, Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior are added.
- No content map changes are made.
- No unrelated files are modified.

## Final Reminder

Build the smallest useful scaffold.

Do not make the app impressive yet.

Make it clear, calm, readable, and faithful to the Obsidian structure.
```
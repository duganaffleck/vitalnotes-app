# VitalNotes App Agent Instructions

This repository is for the first vertical slice of the VitalNotes app.

VitalNotes is a student-facing learning guide for paramedic students. It teaches students how to learn paramedicine, not how to memorize more content.

The app must remain calm, readable, deliberate, and content-driven.

## Source of Truth

The Obsidian vault remains the source of truth.

Reference files are stored in:

- project-context/obsidian-source/
- project-context/app-readiness/
- project-context/build-prompts/
- project-context/decisions/

Do not invent sections, clusters, tools, glossary terms, or app features.

If a needed source file is missing, ask for that exact file.

## First Slice Scope

The first slice includes:

- Home page
- Learning Path page
- Section Reader page
- Tools Library page
- Glossary page
- previous and next navigation
- related sections
- simple glossary support
- simple tool support

The content included is:

- 00 Start Here
- 01 Why Learning Feels Hard
- 02 Build Understanding
- 03 Build Usable Notes
- 04 Build Recall

The only active tools are:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

## Do Not Build Yet

Do not add:

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
- Anki integration
- deck management
- automated flashcard generation
- progress tracking
- analytics
- CMS
- MDX pipeline
- Obsidian import pipeline

## App Philosophy

The app renders the guide.

The app does not reinvent the guide.

Writing is the main experience.

Use simple React components and simple JavaScript content files.

Do not overbuild.

Do not introduce unnecessary dependencies.

## Style

The interface should feel:

- calm
- readable
- practical
- grounded
- student-facing
- paramedicine-specific

Avoid:

- startup language
- productivity app language
- gamification
- loud colours
- excessive icons
- dashboard energy
- flashcard-platform behaviour

## Development Commands

Install dependencies:

npm install

Run locally:

npm run dev

Build:

npm run build

## Code Rules

Keep content separate from components.

Use:

- src/content/sections.js
- src/content/learningPath.js
- src/content/tools.js
- src/content/glossary.js

Use simple, readable React components.

Preserve the approved learning path.

Do not rename approved sections or tools.
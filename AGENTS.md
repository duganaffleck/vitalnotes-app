# VitalNotes Website Agent Instructions

This repository contains the VitalNotes website.

VitalNotes is a student-facing learning guide for paramedic students. It teaches students how to learn paramedicine, not how to memorize more content.

The site must remain calm, readable, deliberate, practical, and content-driven.

## Source of Truth

The Obsidian vault remains the source of truth.

Reference files are stored in:

- project-context/obsidian-source/
- project-context/site-readiness/
- project-context/build-prompts/
- project-context/decisions/

Do not invent sections, clusters, tools, glossary terms, or site features.

If a needed source file is missing, ask for that exact file.

## Current Site Scope

The site currently includes:

- Home page
- Learning Path page
- Section Reader page
- Tools Library page
- Glossary page
- previous and next section navigation
- related sections
- related tools
- glossary support
- tool drawer support
- expandable tool examples

Current completed learning path clusters:

- 00 Start Here
- 01 Why Learning Feels Hard
- 02 Do the Work
- 03 Build Understanding
- 04 Build Usable Notes
- 05 Build Recall
- 06 Think Clinically
- 07 Practice Better
- 08 Perform Under Pressure
- 09 Reflect and Improve
- 10 Practice Like It's Real

Current active tools:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder
- Scenario Day Reset
- OSCE Reset
- Reflection Without Journaling Tool
- Five Whys Tool
- Clinical Reasoning Check

## Do Not Add Without Explicit Approval

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

## Site Philosophy

The site renders the guide.

The site does not reinvent the guide.

Writing is the main experience.

Use simple React components and simple TypeScript content files.

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

- src/content/sections.ts
- src/content/learningPath.ts
- src/content/tools.ts
- src/content/glossary.ts
- src/content/types.ts

Use simple, readable React components.

Preserve the approved learning path.

Do not rename approved sections, clusters, tools, or glossary terms without explicit approval.

Keep related links useful and restrained on the site. Deeper linking belongs in Obsidian.

## Rendering notes

The Tools page groups tools through a hardcoded toolGroups list in src/pages/Tools.tsx. Any new tool must be added to a group there or it will not render on the Tools page, even if it exists in tools.ts with drafted status.

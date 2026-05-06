# App Vision

## Working Name

VitalNotes Learning Guide

## Core Idea

VitalNotes is a calm, content-driven app interface for paramedic students.

It helps students move through a structured guide about learning, reasoning, practice, OSCE preparation, retrieval, note-making, and reflection.

The app is not primarily interactive at the beginning.

Its first job is navigation, flow, clarity, and support.

The app should render the VitalNotes guide well before it tries to become anything else.

---

## Product Position

VitalNotes is not a course platform.

It is not a quiz app.

It is not a productivity system.

It is not a simulation engine.

It is not a flashcard platform.

It is a student-facing learning guide that helps paramedic students understand how to learn, think, practice, and improve in ways that transfer to labs, scenarios, OSCEs, and real clinical decision-making.

The app should make the guide easier to use than a traditional blog.

It should not make the project feel larger, louder, or more complicated than the content requires.

---

## What the App Should Do

The app should:

- organize the guide into clear learning paths
- make sections easier to move through
- preserve previous and next flow between sections
- support short glossary popups or cards for key concepts
- provide optional tool drawers where a reusable tool is justified
- collect active tools in a simple Tools Library
- allow students to find help based on the problem they are experiencing
- keep reading calm, spacious, and focused
- make the guide feel more usable than a traditional blog
- support the Obsidian-based content structure without exposing internal project architecture

---

## What the App Should Not Do Yet

The app should not:

- require accounts
- grade students
- track performance
- become a simulation engine
- become a full quiz platform
- overuse gamification
- become a dashboard
- become a learning management system
- turn Smart Notes into a productivity identity
- make Obsidian feel mandatory
- make Anki feel like the core learning system
- become an Anki platform
- include Anki integration
- include deck management
- include automated flashcard generation
- bury the writing under interaction
- create tools that have not been earned by the content

---

## Current Content Foundation

The following clusters are drafted and can support early app planning:

### 00 Start Here

- [[Start Here - What VitalNotes Is]] - Draft v3
- [[How to Use This Guide]] - Draft v3
- [[Where to Begin]] - Draft v2

### 01 Why Learning Feels Hard

- [[Cognitive Load]] - Draft v2
- [[Why Studying Feels Productive But Fails Under Pressure]] - Draft v2
- [[Learning Strain Is Not Always a Personal Problem]] - Draft v2

### 02 Build Understanding

- [[Meaning Before Memorization]] - Draft v2
- [[Pathophysiology Through Patterns]] - Draft v2
- [[Directives Through Purpose]] - Draft v2

### 03 Build Usable Notes

- [[Smart Notes for Paramedic Students]] - Draft v2
- [[Types of Notes and Idea Maturation]] - Draft v2
- [[Obsidian for Learning Paramedicine]] - Draft v2

### 04 Build Recall

- [[Retrieval and Spaced Learning]] - Draft v2
- [[Clinical Recall Without Trivia]] - Draft v2
- [[Anki for Paramedic Learning]] - Draft v2

Active drafted tools:

- [[Directive Meaning Check]] - Draft v1
- [[Smart Note Template]] - Draft v1
- [[Clinical Recall Prompt Builder]] - Draft v1

Next possible content cluster:

- [[05 Think Clinically]]

Next possible student-facing section:

- [[Clinical Reasoning]]

---

## First App Slice

The first app slice should remain small.

Its job is to test whether VitalNotes works as a calm reading interface before expanding features.

Likely first slice:

- Home page
- Learning Path page
- Section Reader page
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
- next and previous navigation
- clean responsive layout
- problem-based entry through [[Where to Begin]]

Reason for including Build Recall:

- it gives the first slice a fuller learning arc from understanding, to usable notes, to reliable access
- it allows tool behavior to be tested with three different tool types: thinking check, note template, and prompt builder
- it helps test whether a practical system page like [[Anki for Paramedic Learning]] can sit inside the guide without making the app feel like a flashcard platform

Do not begin the VS Code app build until the Build Recall architecture verification pass and app-readiness checkpoint are complete.

---

## Early Build Philosophy

Start with the smallest working structure that can test the actual reading experience.

Likely first content files:

- `src/content/sections.js`
- `src/content/glossary.js`
- `src/content/tools.js`
- `src/content/learningPath.js`

Use manual JavaScript objects or JSON-like content first.

Do not build a complex Obsidian-to-app import pipeline for the first version.

Obsidian remains the source of truth.

The app content folder can mirror the vault later if needed, but that should not be solved before the first reading experience works.

---

## Relationship to Obsidian

Obsidian is the project source of truth.

The app should eventually render the best parts of the Obsidian content structure:

- student-facing sections
- learning path
- glossary terms
- active tools
- previous and next navigation
- related sections

The app should not expose:

- internal project maps
- development logs
- source material indexes
- planning notes
- draft review notes
- old-to-new mapping files
- private architecture decisions

The student should see a guide, not the workshop behind it.

---

## Relationship to Scenario Generator

Scenario Generator helps instructors create better practice.

VitalNotes helps students learn from practice.

The two products should feel related in values:

- realism
- clinical reasoning
- practical learning
- low tolerance for shallow educational design
- respect for students under pressure

But VitalNotes should remain calmer, simpler, and more guide-like.

It should not become Scenario Generator for students.

---

## Design Feel

The app should feel:

- quiet
- readable
- grounded
- practical
- lightly guided
- student-facing
- paramedicine-specific
- serious without being stiff

It should avoid:

- motivational startup energy
- productivity-app aesthetics
- gamified learning pressure
- dashboard clutter
- flashy interactions
- generic education-platform language
- Anki power-user aesthetics
- flashcard-platform behavior

The student should feel like they are moving through a thoughtful guide built by someone who understands how paramedic school actually feels.

---

## App Success Test

The first app version succeeds if a student can:

- understand what VitalNotes is
- move through the learning path without confusion
- read a section calmly
- use glossary support without losing the thread
- open a tool only when it helps
- move to the next section naturally
- enter through a current learning problem
- feel that the app is lighter and clearer than the blog format

The app fails if the interface becomes more interesting than the learning.
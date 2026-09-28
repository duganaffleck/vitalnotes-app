# VitalNotes Website Agent Instructions

This repository contains the VitalNotes website.

VitalNotes is a student-facing learning guide for paramedic students. It teaches students how to learn paramedicine, not how to memorize more content.

The site must remain calm, readable, deliberate, practical, and content-driven.

## Source of Truth

The book is the source of truth: VitalNotes: Learning How to Learn Paramedicine, version 8.5 (August 2026).
The site carries app-sized versions of its chapters: the same ideas in the same order, the book's own
wording, lightly tightened for phone reading. Nothing clinical is added that the book doesn't say.

The Obsidian vault is still where drafting happens. Older reference files are in:

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
- Section Reader page (chapters show their part and chapter number)
- Tools Library page
- Glossary page
- Practice Apps page (Scenario Generator and ACR Review)
- Resources page (sources follow the book's Appendix C)
- previous and next section navigation
- related sections, related tools, glossary support, tool drawers, expandable tool examples
- companion blocks in a section body (type "companion"), linking to the Scenario Generator or ACR Review

Learning path, following the book:

- Start Here: Preface, Introduction
- Part One: Why Learning Feels Hard (Chapters 1 to 3)
- Part Two: Do the Work (4 to 8)
- Part Three: Build Understanding (9 to 11)
- Part Four: Build Notes and Recall (12 to 15)
- Part Five: Think Clinically (16 to 18)
- Part Six: Practise and Perform (19 to 21)
- Part Seven: Reflect and Improve (22 and 23)
- Part Eight: Practise Like It Is Real (24 and 25)
- Part Nine: Learn on the Truck (26 to 28)
- Conclusion
- More From VitalNotes: pages from earlier versions of the site that the book doesn't include. They run as
  their own chain and are marked `extra: true` in learningPath.ts.

Field tools (the book's Appendix A):

- Next-Attempt Debrief
- Reset Card
- Directive Decision Map
- Cue-to-Care Recall Card
- Skill Breakdown Sheet
- Scenario Run Sheet

The Appendix A pages have no text layer in the PDF proof, so these tools were built from how the chapters
describe them. Replace them with the book's exact pages when a text copy is available.

More tools (from earlier versions, not in the book): Smart Note Template, Clinical Reasoning Check,
Reflection Without Journaling Tool, Five Whys Tool.

Old page ids redirect to their replacements through src/content/redirects.ts, so saved links keep working.

## Family look

VitalNotes shares its header band, teal and type with the Scenario Generator and ACR Review
(scenario-generator repo). Keep them in step when one changes.

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

All content files carry a header saying they were generated from the book adaptation. They are ordinary TypeScript now; edit them directly.

## Rendering notes

The Tools page groups tools through a hardcoded toolGroups list in src/pages/Tools.tsx. Any new tool must be added to a group there or it will not render on the Tools page, even if it exists in tools.ts with drafted status.

# MOC - App Interface Design

This folder defines how the rebuilt VitalNotes content appears in the app interface.

The app should support the guide.

It should not overpower the guide.

VitalNotes should remain a calm, readable, navigable student-facing interface.

The writing is the main experience.

---

## Current Status

The first app vertical slice has been implemented.

The approved first-slice content migration is complete and pushed.

The first-slice cleanup pass is complete.

The first-slice smoke test has passed.

The first slice is stable and demo-ready.

The app now renders real student-facing content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Current active tools migrated into the app:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Current app support includes:

- [[Home]]
- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple tool drawer support
- glossary term panel and popup support
- section body list support

Current related checkpoints:

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]
- [[App Build Checkpoint 03 - First Slice Demo Ready]]
- [[UI Pass 02 - Shared VitalNotes Brand System]]

UI Pass 02 is complete, shipped, and locked.

The app now uses the shared VitalNotes brand system aligned with Scenario Generator while preserving the quieter student-facing reading experience.

Do not expand app scope yet.

Next priority:

- prepare the next bounded content migration slice
- use [[Repeatable Content Migration Checklist]] before migrating new content

---

## Core Notes

- [[App Vision]]
- [[Navigation Model]]
- [[Section Reader Design]]
- [[Popup and Glossary Rules]]
- [[Tool Drawer Design]]
- [[UI Tone and Style]]
- [[UI Pass 02 - Shared VitalNotes Brand System]]
- [[Content Schema]]
- [[App Anti-Drift Rules]]]]

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

Not a flashcard platform.

The app should help students move through the guide with less friction and more clarity.

The interface should make the writing easier to use, not compete with it.

---

## Current First-Slice Content

### [[00 Start Here]]

- [[Start Here - What VitalNotes Is]] - Draft v3, migrated to first-slice app
- [[How to Use This Guide]] - Draft v3, migrated to first-slice app
- [[Where to Begin]] - Draft v2, migrated to first-slice app

### [[01 Why Learning Feels Hard]]

- [[Cognitive Load]] - Draft v2, migrated to first-slice app
- [[Why Studying Feels Productive But Fails Under Pressure]] - Draft v2, migrated to first-slice app
- [[Learning Strain Is Not Always a Personal Problem]] - Draft v2, migrated to first-slice app

### [[02 Build Understanding]]

- [[Meaning Before Memorization]] - Draft v2, migrated to first-slice app
- [[Pathophysiology Through Patterns]] - Draft v2, migrated to first-slice app
- [[Directives Through Purpose]] - Draft v2, migrated to first-slice app

### [[03 Build Usable Notes]]

- [[Smart Notes for Paramedic Students]] - Draft v2, migrated to first-slice app
- [[Types of Notes and Idea Maturation]] - Draft v2, migrated to first-slice app
- [[Obsidian for Learning Paramedicine]] - Draft v2, migrated to first-slice app

### [[04 Build Recall]]

- [[Retrieval and Spaced Learning]] - Draft v2, migrated to first-slice app
- [[Clinical Recall Without Trivia]] - Draft v2, migrated to first-slice app
- [[Anki for Paramedic Learning]] - Draft v2, migrated to first-slice app

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as excluded, undecided, pending, or future-facing.

---

## Current Active Tools

Only these tools are active in the first app slice:

- [[Directive Meaning Check]] - Draft v1, migrated to first-slice app
- [[Smart Note Template]] - Draft v1, migrated to first-slice app
- [[Clinical Recall Prompt Builder]] - Draft v1, migrated to first-slice app

These tools may appear in:

- [[Tools Library]]
- related tool cards
- contextual tool drawers where justified

Do not treat planned tools as active app features.

Do not add new active tools unless explicitly approved.

---

## Planned Tools

These tools remain planned, not active:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Planned tools should remain parked until their related sections are rebuilt, stable, and clearly earn tool support.

---

## Current First Vertical Slice

The first app slice includes:

- [[Home]]
- [[Learning Path]]
- [[Section Reader]]
- [[Tools Library]]
- [[Glossary]]
- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]
- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]
- previous and next navigation
- related section cards
- related tool cards
- glossary term panel and popup support
- simple tool drawer support
- section body list support
- problem-based entry through [[Where to Begin]]

Reason for including [[04 Build Recall]]:

- the first slice tests the fuller arc from understanding, to usable notes, to reliable access
- it gives the app enough content variety to test conceptual, practical, and tool-supported sections
- it allows the interface to test three active tools without becoming tool-heavy
- [[Anki for Paramedic Learning]] helps test whether practical system pages can remain guide-like instead of becoming platform tutorials

Current status:

- implemented
- migrated
- pushed
- cleaned up
- audited
- smoke tested
- stable
- demo-ready

---

## Current App Structure

Current content files include:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

Current section body support includes:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

Current support scripts include:

- `scripts/audit-glossary.cjs`
- `scripts/audit-related-links.cjs`

The app currently uses manual TypeScript content objects.

This remains acceptable for the current app phase.

Do not add [[Obsidian Import Pipeline]], MDX, CMS, or automated content sync unless a future workflow problem clearly justifies it.

---

## Completed First-Slice Cleanup

### [[Retro Fix 01 - Bullet List Cleanup]]

Status: complete

Purpose:

Updated `src/content/sections.ts` so obvious flattened paragraph runs became proper `list` blocks.

Completed clusters:

- [[03 Build Usable Notes]]
- [[02 Build Understanding]]
- [[01 Why Learning Feels Hard]]

Confirmed no list cleanup was needed in:

- [[00 Start Here]]

Result:

- approved wording was preserved wherever possible
- presentation fidelity improved
- the current content map stayed intact
- no broad visual redesign was introduced
- no new features were added

---

### [[Glossary Term Audit]]

Status: complete

Purpose:

Compared glossary IDs in `src/content/sections.ts` against entries in `src/content/glossary.ts`.

Created audit script:

- `scripts/audit-glossary.cjs`

Added missing first-slice glossary entries:

- `directive-intent`
- `performance-under-pressure`
- `perfusion`
- `reflection`

Final audit result:

- no missing glossary entries
- every referenced glossary term exists

Known unused glossary entries:

- `metacognition`
- `recall`

These should remain for now. They are valid glossary entries, just not referenced in the current first slice.

---

### Related Section and Related Tool Audit

Status: complete

Purpose:

Checked that related section IDs and related tool IDs point to real app content.

Created audit script:

- `scripts/audit-related-links.cjs`

One broken future-facing related section reference was fixed.

Removed from `learning-strain-is-not-always-a-personal-problem`:

- `scenario-days-as-learning-tools`

Replaced with:

- `retrieval-and-spaced-learning`

Final audit result:

- no missing related sections
- no missing related tools

Human related-link review was completed across the first slice.

---

### Reader Typography and Spacing Pass

Status: complete

Updated app file:

- `src/styles/index.css`

This was a bounded demo-readiness pass.

Refined:

- section body spacing
- section heading rhythm
- section list spacing
- glossary panel spacing
- related panel spacing
- previous / next navigation spacing
- tool drawer readability

No behavior changes were made.

No content changes were made.

No color redesign was done.

No navigation redesign was done.

No component architecture changes were made.

---
### [[UI Pass 02 - Shared VitalNotes Brand System]]

Status: complete, shipped, and locked

Purpose:

Unified the visual language between the VitalNotes learning guide app and the Scenario Generator app.

Completed changes:

- strengthened the shared VitalNotes colour system
- aligned typography direction
- refined page headers and section headers
- added warmer orange cue styling
- normalized Home page styling with other pages
- changed section headers to use a left cue with right-side fade
- changed student-problem panels to match the same left cue with right-side fade
- removed the redundant "Open related section" action from the Tools page
- replaced the temporary VN mark with the shared VitalNotes logo asset

Updated app files:

- `src/styles/index.css`
- `public/vitalnotes-mark.svg`
- Tools page component

Result:

- VitalNotes and Scenario Generator now feel like part of the same brand system
- the learning guide remains quieter, more spacious, and reading-focused
- no content migration was performed
- no routes were changed
- no new tools were activated
- no app architecture changes were made
## Smoke Test Status

Status: passed

The first-slice smoke test checked:

- global navigation
- [[Home]] page
- [[Learning Path]] page
- [[Tools Library]] page
- [[Glossary]] page
- active navigation state
- hash-based navigation
- section reader pages
- previous and next navigation
- related section cards
- related tool drawer
- glossary chips and popup behavior
- reader typography and spacing
- list rendering
- mobile-ish browser width behavior

Representative reader pages checked:

- [[Start Here - What VitalNotes Is]]
- [[Cognitive Load]]
- [[Meaning Before Memorization]]
- [[Smart Notes for Paramedic Students]]
- [[Retrieval and Spaced Learning]]
- [[Anki for Paramedic Learning]]

Tools checked:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Glossary page checked, including added entries:

- Directive intent
- Performance under pressure
- Perfusion
- Reflection

Assessment:

- local app appears clean and appropriate for demo purposes
- live/deployment state appears stable based on review
- first vertical slice can be treated as demo-ready

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

---

## Current No-Go List

Do not add during the current stable first-slice phase:

- new student-facing sections
- new active tools
- accounts
- dashboards
- badges
- streaks
- scores
- quizzes
- grading
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
- broad routing overhaul
- broad visual redesign

---

## Deferred Design Consistency Task

### Button versus text-link consistency

Status: partially addressed

UI Pass 01 and UI Pass 02 addressed several redundant action treatments, including:

- Learning Path section cards now behave more cleanly
- redundant open-section affordances were removed where unnecessary
- the Tools page no longer displays the redundant "Open related section" action

Future UI review may still revisit button versus text-link consistency if a real issue appears.

This does not block the next content migration slice.

Track future issues in:

- [[Deferred Ideas]]]]

---
## Next App Step

The next app-development priority is to prepare the next bounded content migration slice.

Do not jump directly into app expansion.

Do not add new active tools yet.

Next planned slice:

- [[05 Think Clinically]]
- [[Clinical Reasoning]]
- [[Pattern Recognition]]
- [[Avoiding Premature Closure]]

Before migration, use:

- [[Repeatable Content Migration Checklist]]

Appropriate next actions, in order:

1. confirm the current Obsidian source text for the next slice
2. confirm stable section titles and IDs
3. confirm related section links conservatively
4. decide whether any planned tool has earned activation, without assuming it has
5. migrate only the approved bounded slice
6. run glossary and related-link audits
7. run `npm run build`
8. smoke test representative pages
9. commit after the slice is stable

---

## Current Rule

The app should make the guide easier to read, navigate, and use.

If the interface becomes more interesting than the learning, it is drifting.
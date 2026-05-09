# Deferred Ideas

These ideas may be useful later, but they are not part of the current first-slice stable app phase.

Deferred does not mean rejected.

It means not now.

Use this file to protect the current project from expanding too early.

---

## Current Boundary

Current phase:

- first app vertical slice implemented
- first-slice content migration complete
- first-slice cleanup complete
- first-slice smoke test passed
- first slice stable and demo-ready
- UI Pass 01 - Button and Link Consistency complete and shipped
- next bounded app-development pass not yet chosen

Current app status:

- app shell exists
- app runs locally
- app has been pushed
- approved first-slice content is migrated
- section body renderer supports list blocks
- simple tool drawer support exists
- glossary term panel and popup support exists
- glossary audit script exists
- related-link audit script exists
- first-slice reader spacing pass is complete

Current migrated clusters:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Completed first-slice cleanup passes:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]
- related-link audit
- reader typography and spacing pass
- demo-readiness smoke test
- UI Pass 01 - Button and Link Consistency

Do not let deferred ideas interrupt the stable first-slice state.

The app remains a calm, content-driven reading interface.

The writing is still the main experience.

---

## Deferred App Features

These may be reconsidered only after a bounded app-development pass shows a real need.

- student accounts
- database-backed progress tracking
- dashboards
- badges or gamified rewards
- streaks
- scores
- quizzes
- LMS integration
- AI-guided reflection
- AI-generated student feedback
- personalized learning paths
- saved student notes inside the app
- downloadable completion records
- advanced search
- advanced filtering
- dark mode customization beyond basic accessibility needs
- complex animations
- complex onboarding flow
- instructor dashboards
- public user profiles
- student cohorts

These are not part of the first vertical slice.

---

## Deferred Simulation and Scenario Features

These may belong to [[Scenario Generator]] or a separate future product, not the first VitalNotes app.

- Godot-based scenario game
- full branching patient simulations
- student-facing simulation engine
- interactive patient cases
- scenario scoring inside VitalNotes
- branching OSCE practice stations
- simulated radio reports
- virtual preceptor mode
- integration with [[Scenario Generator]] outputs
- [[Scenario Generator]] exporting VitalNotes-linked reflection prompts

VitalNotes may eventually connect to scenario learning, but it should not become [[Scenario Generator]].

The current app should remain a reading and learning-support interface.

---

## Deferred Instructor-Facing Features

These may be useful later, but VitalNotes should remain student-facing first.

- instructor dashboards
- instructor-only notes
- lesson planning tools
- class assignment mode
- cohort tracking
- instructor analytics
- instructor-facing scenario integration
- downloadable teaching packs
- instructor-only scenario discussion guides
- instructor-facing assessment rubrics

Revisit only after the student guide is stable.

---

## Deferred Tool and Resource Ideas

These may become useful, but should not be built until repeated section use proves they are needed.

- printable tool cards
- downloadable PDF version
- editable worksheets
- tool export
- glossary export
- spaced retrieval planner
- student self-check forms
- OSCE preparation checklist pack
- directive study worksheets
- scenario reflection cards
- Anki card quality check
- Anki export
- automated flashcard generation
- deck review workflow
- flashcard-platform behavior
- recognition versus access mini-tool
- performance pressure reset tool
- scenario day reflection tool

Possible future tools should remain parked in [[Tool Library Map]] until earned.

Anki-related tools should not be built unless a repeated student need appears later.

For now, [[Clinical Recall Prompt Builder]] handles the broader need of shaping recall prompts for clinical use.

---

## Deferred Technical Ideas

These may be considered after the first app slice proves the reading experience works and a specific technical burden appears.

- [[Obsidian Import Pipeline]]
- MDX rendering
- CMS integration
- database storage
- authentication
- user preferences
- local progress tracking
- synced progress tracking
- analytics
- deployment automation beyond basic hosting
- advanced content versioning
- advanced routing overhaul
- automated content sync
- full text search
- content admin interface

Current first-slice approach:

- manual TypeScript content objects
- simple content files
- simple React components
- hash-based navigation
- no complex import pipeline

Manual migration remains acceptable for the current app phase.

A future content pipeline should only be reconsidered if manual migration becomes a real maintenance problem.

---

## Deferred Content Ideas

These ideas may be useful later, but should not interrupt the locked learning path.

- instructor-facing companion guide
- expanded clinical reasoning essays
- advanced post-graduation guide
- new grad field transition section
- deeper directive study module
- full paramedic study system course
- scenario design manifesto integration
- downloadable workbook version
- expanded clinical examples library
- printable student field guide
- expanded OSCE preparation pack
- advanced clinical reasoning case library

Do not add new student-facing sections unless the content map is explicitly changed.

---

## Deferred Visual and UX Ideas

These may be reconsidered after the first slice remains stable and a specific consistency or readability issue is identified.

- broad typography redesign
- animation polish
- visual theme expansion
- advanced responsive layout changes
- icon system
- section progress indicators
- complex card redesigns
- expanded homepage interaction
- interactive [[Where to Begin]] selector

Current visual rule:

Fix readability and consistency problems only when they are visible in the working app.

Do not polish for its own sake.

The first-slice reader typography and spacing pass is complete.

---

## Deferred Design Consistency Tasks

These are not new features.

They are future review items for tightening the existing interface.

### Colour system tightening

Status: deferred

Later UI review should tighten the current colour system.

Specific items to revisit:

- reduce the number of similar grey tones
- reduce the number of similar cream/background tones
- consolidate border, muted text, hover, and card colours
- consider whether some colours should harmonize with the [[Scenario Generator]] app
- preserve the calm VitalNotes reading feel
- avoid making the interface look busy, gamified, or dashboard-like

Reason to defer:

- this does not block first-slice demo readiness
- the current app is usable and stable
- this is a design-system refinement, not broken behavior
- it should be handled as its own bounded visual consistency pass

Do not handle this during content migration or app expansion.

### Button versus text-link consistency

Status: complete

UI Pass 01 - Button and Link Consistency has been completed and shipped.

Completed changes:

- Learning Path section cards are now fully clickable
- redundant `Open section` buttons were removed
- non-interactive Learning Path tool chips were removed
- button and card hover states were made more consistent
- redundant `Open glossary` button was removed from section glossary popups
- redundant `Open related section` links were removed from Glossary page cards

This pass is no longer deferred.

---

## Deferred Anki-Related Ideas

These are specifically deferred to protect [[Anki for Paramedic Learning]] from becoming a product direction.

Do not include in the first slice:

- [[Anki Integration]]
- Anki-specific tools
- deck management
- automated flashcard generation
- card export
- deck review workflow
- flashcard-platform behavior
- spaced repetition dashboard

Current boundary:

VitalNotes may teach students how to use Anki more wisely.

VitalNotes should not become Anki.

[[Clinical Recall Prompt Builder]] remains the active tool for shaping better recall prompts.

---

## Revisit Conditions

A deferred idea can be reconsidered when one of these is true:

- first-slice stability is protected
- the next bounded app-development pass has been chosen
- reader testing shows a real need
- a repeated student problem is not being served by the current guide
- an active section clearly earns a new tool
- the app needs a feature to support reading, navigation, glossary use, or tools
- the student-facing guide is stable enough to support expansion
- the idea can be implemented without changing the core VitalNotes purpose
- the idea does not interfere with the calm reading interface

---

## Current No-Go List

Do not add these during the current stable first-slice phase:

- accounts
- dashboards
- quizzes
- badges
- streaks
- scoring
- simulations
- instructor dashboards
- LMS integration
- AI feedback
- AI reflection
- [[Anki Integration]]
- deck management
- automated flashcard generation
- CMS
- MDX
- [[Obsidian Import Pipeline]]
- progress tracking
- analytics

---

## Rule

Deferred does not mean rejected.

It means the idea is being protected from premature use.

The current work should stay focused on the next needed step:

1. preserve the first slice as a stable foundation
2. choose the next bounded app-development pass deliberately
3. avoid new features until that pass is explicit
4. create a repeatable migration checklist before the next content slice
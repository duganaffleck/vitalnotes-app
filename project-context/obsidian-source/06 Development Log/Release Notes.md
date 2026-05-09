# Release Notes

Use this once the app build begins or once a public-facing VitalNotes version is released.

This file should stay focused on meaningful app-facing or public-facing changes.

Do not use release notes to track every draft, architecture update, prompt change, glossary adjustment, or wording change.

---

## Purpose

Release notes summarize meaningful public-facing or app-facing changes.

Use this file for:

- app versions
- internal app slices
- major content releases
- first public slices
- major feature additions
- important fixes after app launch
- known limitations for a release

Do not use this file for:

- routine section edits
- internal architecture updates
- prompt changes
- minor glossary changes
- early planning notes
- unfinished drafts

Those belong in:

- [[Next Build Tasks]]
- [[Decisions]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Bugs and Fixes]]

---

## Current Status

No public release yet.

Current internal status:

- first working app shell exists
- approved first vertical slice content has been migrated
- app runs locally
- app has been pushed
- section body renderer supports list blocks
- first-slice cleanup is complete
- glossary audit is complete
- related-link audit is complete
- bounded reader typography and spacing pass is complete
- first-slice smoke test has passed
- first slice is stable and demo-ready
- UI Pass 01 - Button and Link Consistency is complete and shipped

Current internal checkpoints:

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

The app remains a bounded first vertical slice.

The app remains a calm, content-driven reading interface.

The writing is still the main experience.

---

## Version Template

### Version

v0.1.0

### Date

YYYY-MM-DD

### Release Type

Internal / Public / App slice / Content release

### Added

- 

### Changed

- 

### Fixed

- 

### Known Limitations

- 

### Notes

- 

---

## Internal Build - First Slice Shell

### Version

Internal checkpoint

### Date

2026-05-06

### Release Type

Internal app slice

### Related Checkpoint

[[App Build Checkpoint 01 - First Slice Shell]]

### Status

The first working VitalNotes app shell exists and runs locally.

This is not a public release.

### Added

- Vite, React, and TypeScript app scaffold
- basic app shell
- [[Home]] page
- [[Learning Path]] page
- [[Section Reader]] page
- [[Tools Library]] page
- [[Glossary]] page
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple tool drawer
- simple glossary popup support
- first content model
- active tools model
- glossary model

### In Progress At This Checkpoint

- [[00 Start Here]] content migration

Initial sections in progress:

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

### Active First-Slice Tools

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

### Not Included

This build did not include:

- dashboards
- accounts
- quizzes
- simulations
- [[Anki Integration]]
- AI features
- progress tracking
- analytics
- CMS
- MDX
- [[Obsidian Import Pipeline]]

### Notes

The app shell proved that the basic reading interface, navigation, tool drawer, and glossary popup model could work.

The next task after this checkpoint was to migrate real approved VitalNotes content into the reader.

---

## Internal Build - First Slice Content Migration Complete

### Version

Internal checkpoint

### Date

2026-05-06

### Release Type

Internal app slice

### Related Checkpoint

[[App Build Checkpoint 02 - First Slice Content Migration Complete]]

### Status

The approved first vertical slice content was migrated into the app content model and pushed.

This is not a public release.

### Added

- real section content for [[00 Start Here]]
- real section content for [[01 Why Learning Feels Hard]]
- real section content for [[02 Build Understanding]]
- real section content for [[03 Build Usable Notes]]
- real section content for [[04 Build Recall]]
- `list` block support in the section body renderer

### Migrated Clusters

#### [[00 Start Here]]

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

#### [[01 Why Learning Feels Hard]]

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

#### [[02 Build Understanding]]

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

#### [[03 Build Usable Notes]]

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

#### [[04 Build Recall]]

- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

### Preserved

- hash-based navigation
- previous and next section navigation
- related section cards
- related tool cards
- simple tool drawer support
- simple glossary popup support
- active tools model
- glossary model

### Active First-Slice Tools

Only these tools are active:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

### Known Limitations At This Checkpoint

At the time of this checkpoint:

- some earlier migrated bullet-style content still rendered as flattened paragraph blocks
- some glossary IDs still needed auditing against `src/content/glossary.ts`
- visual polish was intentionally deferred
- no public testing had occurred yet

These limitations were addressed during the later first-slice demo-readiness cleanup pass.

### Next Cleanup At This Checkpoint

The planned cleanup sequence after this checkpoint was:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. reader typography and spacing pass if needed for readability

Those cleanup tasks have now been completed.

### Not Included

This internal build did not include:

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
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- progress tracking
- analytics
- CMS
- MDX
- [[Obsidian Import Pipeline]]

### Notes

The first-slice content migration was complete at this checkpoint.

The app was suitable for focused cleanup and reader-quality testing.

The next risk at that point was presentation fidelity, not missing content.

---

## Internal Build - First Slice Demo Ready

### Version

Internal checkpoint

### Date

2026-05-06

### Release Type

Internal app slice

### Related Checkpoints

- [[App Build Checkpoint 01 - First Slice Shell]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

### Status

The first VitalNotes app vertical slice is stable and demo-ready.

This is not a public release.

The first slice now proves that real VitalNotes content can live inside a calm reader interface, connect to related sections and tools, support glossary behavior, and preserve the student-facing reading experience.

### Added

- reusable glossary audit script: `scripts/audit-glossary.cjs`
- reusable related-link audit script: `scripts/audit-related-links.cjs`
- missing first-slice glossary entries:
  - `directive-intent`
  - `performance-under-pressure`
  - `perfusion`
  - `reflection`

### Changed

- improved first-slice reader spacing in `src/styles/index.css`
- refined section body spacing
- refined section heading rhythm
- refined section list spacing
- refined glossary panel spacing
- refined related panel spacing
- refined previous / next navigation spacing
- refined tool drawer readability
- tightened related section and related tool selections across first-slice sections where needed

### Fixed

- converted flattened paragraph runs into proper list blocks where appropriate
- fixed one future-facing related section reference in `learning-strain-is-not-always-a-personal-problem`
- removed `scenario-days-as-learning-tools` from the first-slice related links
- replaced it with `retrieval-and-spaced-learning`
- verified that every referenced glossary term exists
- verified that every related section ID exists
- verified that every related tool ID exists

### Verified

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

### Known Limitations

- VS Code integrated terminal ConPTY issue remains a local workflow problem
- Codex and Copilot remain unreliable and are not part of the critical path
- broader colour-system tightening remains deferred for a later design consistency pass
- possible `Where to Being.md` filename typo should only be addressed if confirmed in the actual vault
- no public release has occurred yet

### Not Included

This internal build does not include:

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
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- progress tracking
- analytics
- CMS
- MDX
- [[Obsidian Import Pipeline]]

### Notes

The first slice is now stable enough to serve as the foundation for future app development.

The next move should not be automatic expansion.

The next move should be a bounded app-development pass chosen deliberately.

---

## Internal Build - UI Pass 01 - Button and Link Consistency

### Version

Internal checkpoint

### Date

2026-05-06

### Release Type

Internal UI pass

### Status

UI Pass 01 is complete and shipped.

This is not a public release.

This pass cleaned up button, link, and card affordances in the first vertical slice without adding features, changing routes, altering content, or expanding app scope.

### Changed

- made Learning Path section cards fully clickable
- removed the redundant `Open section` button from Learning Path section cards
- improved subtle hover and focus behaviour across button-like controls
- made clickable surfaces feel more consistent across the app
- preserved the calm reading-interface direction

### Removed

- non-interactive tool chips from Learning Path cluster headers
- redundant `Open glossary` button from section glossary popups
- redundant `Open related section` links from Glossary page cards

### Preserved

- top navigation
- hash-based navigation
- section reader navigation
- Tools Library
- glossary page
- glossary chips and popups
- related section cards in the section reader
- related tool cards in the section reader
- active first-slice tools
- first-slice content structure

### Verified

Checked locally after the pass:

- Learning Path section cards are clickable
- `Open section` button is gone
- Learning Path tool chips are gone
- hover states feel subtle and consistent
- section navigation still works
- glossary popups still open and close correctly
- top navigation Glossary link still works
- Glossary page cards show definitions without extra navigation buttons
- app builds successfully

### Not Included

This pass did not include:

- new features
- route changes
- content changes
- new active tools
- glossary content changes
- colour-system redesign
- broad visual redesign
- dashboard-style UI
- progress tracking
- analytics
- CMS
- MDX
- [[Obsidian Import Pipeline]]

### Known Limitations

- broader colour-system tightening remains deferred
- grey, cream, border, and muted-text tones may be consolidated later
- future design work may harmonize the VitalNotes palette with the Scenario Generator app
- deployment verification remains informal because the live state appears stable

### Notes

This pass clarified existing interface behaviour rather than expanding the app.

The first slice remains stable, bounded, and content-first.
# UI Pass 02 - Shared VitalNotes Brand System

This pass unifies the visual language between the VitalNotes learning guide app and the Scenario Generator app.

These are not separate brands.

They are two expressions of the same VitalNotes ecosystem.

Scenario Generator expresses VitalNotes as an active instructor-facing clinical scenario tool.

The VitalNotes learning guide expresses VitalNotes as a quiet student-facing reading and thinking environment.

The goal is shared identity with different interface posture.

---

## Current Project Position

The first VitalNotes app vertical slice is stable and demo-ready.

UI Pass 01 is complete.

The app currently supports:

- Home
- Learning Path
- Section Reader
- Tools Library
- Glossary
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- glossary term panel and popup support
- simple tool drawer support

Before migrating the next content slice, the visual system should be tightened so future content enters a more stable brand environment.

This pass should happen before the next major content migration.

---

## Core Principle

Both apps should feel like VitalNotes.

They do not need to have the same density, layout, or purpose.

They do need to share the same visual language.

Shared brand elements may include:

- font system
- colour tokens
- accent colours
- border language
- card softness
- button treatment
- focus states
- header and brand treatment
- calm clinical polish

Different interface expressions are allowed.

Scenario Generator may feel:

- active
- denser
- instructor-facing
- tool-like
- workspace-oriented
- scenario-production focused

VitalNotes learning guide should feel:

- quiet
- spacious
- student-facing
- reading-focused
- reflective
- supportive
- guide-oriented

The apps should feel related immediately, but they should not perform the same job.

---

## Brand Source

Use the current Scenario Generator visual language as the stronger brand foundation.

Borrow directly or adapt carefully from Scenario Generator:

- Manrope as the main body font
- Spectral as the major heading font
- deep ink / blue as the main anchor colour
- teal as the primary accent colour
- orange as the restrained secondary accent colour
- soft clinical gradients
- rounded card and panel surfaces
- clean borders
- clear hover states
- clear focus states
- named CSS variables

Do not copy the full Scenario Generator interface.

Do not import its density, form layout, or tool workspace behavior into the learning guide.

---

## VitalNotes Learning Guide Adaptation

The learning guide should use the shared brand system in a quieter way.

It should prioritize:

- reading comfort
- calm page rhythm
- clear section hierarchy
- low-friction navigation
- restrained colour use
- soft surfaces
- stable spacing
- legible long-form content
- student-facing warmth

It should avoid:

- dashboard energy
- control-panel styling
- excessive gradients
- excessive visual noise
- tool-heavy interface density
- instructor-facing affordances
- status colours everywhere
- unnecessary icons or badges

The writing remains the main experience.

The interface should support the text without competing with it.

---

## In Scope

This pass may adjust:

- `src/styles/index.css`
- CSS variables
- font imports
- body font
- heading font
- page background
- text colour
- muted text colour
- card surfaces
- panel surfaces
- borders
- shadows
- header styling
- brand mark styling
- nav pill styling
- primary and secondary buttons
- text buttons
- Learning Path cards
- Section Reader surface
- section body rhythm
- related panels
- related cards
- glossary panel
- glossary chips
- glossary popup
- tool drawer
- hover states
- focus states
- mobile-ish spacing

This should begin as a CSS-only pass.

Component changes should only happen if the CSS exposes a real limitation that cannot be solved cleanly otherwise.

---

## Out of Scope

Do not change:

- app routes
- hash navigation
- navigation structure
- content model
- section data
- glossary data
- tool data
- active tools
- student-facing text
- app architecture
- React component structure unless strictly necessary

Do not add:

- dashboards
- progress tracking
- quizzes
- scoring
- accounts
- analytics
- AI feedback
- Anki integration
- deck management
- automated flashcard generation
- Obsidian import behavior
- CMS behavior
- MDX
- broad routing changes
- broad layout redesign
- new content slices

This pass is visual system work only.

---

## CSS Token Direction

The learning guide should adopt a shared VitalNotes token structure similar to Scenario Generator.

Likely useful tokens:

- `--vn-ink`
- `--vn-ink-soft`
- `--vn-teal`
- `--vn-teal-deep`
- `--vn-orange`
- `--vn-paper`
- `--vn-shell`
- `--vn-card-bg`
- `--vn-card-border`
- `--vn-border`
- `--vn-muted-text`
- `--vn-heading-text`
- `--vn-button-start`
- `--vn-button-end`
- `--vn-button-text`
- `--vn-focus`
- `--vn-shadow-soft`
- `--vn-shadow-card`
- `--vn-font-heading`
- `--vn-font-body`

The token names do not need to match Scenario Generator perfectly, but they should be close enough that the two apps feel maintained by the same design system.

---

## Font Direction

Use the shared VitalNotes font pairing:

- Manrope for body, navigation, labels, buttons, and interface text
- Spectral for major headings and editorial emphasis

This should make VitalNotes feel more distinctive and less generic than the current Inter-based version.

Use Spectral carefully.

It should add guide-like character without making the app feel old-fashioned or decorative.

---

## Colour Direction

The learning guide should shift from generic warm cream and charcoal toward the shared VitalNotes palette.

Use:

- deep ink for primary text and brand anchoring
- soft paper or shell tones for backgrounds
- teal for primary accents and active states
- orange only as a restrained secondary accent
- pale blue or soft teal surfaces where useful
- clean border colours rather than many similar greys

Avoid:

- too many grey variants
- too many cream variants
- strong orange surfaces
- heavy saturated backgrounds
- dark tool-like panels in the main reader
- colours that make the guide feel like a dashboard

---

## Layout Direction

Keep the current layout intact.

Preserve:

- sticky header
- main content width
- page stack
- reader layout
- section body width
- Learning Path clusters
- related panels
- previous and next navigation
- Tools Library
- Glossary page
- tool drawer

Refine only where needed:

- card softness
- spacing rhythm
- hover polish
- header polish
- reader surface polish
- glossary and tool panel consistency

Do not redesign the navigation.

Do not restructure the app.

---

## Testing Checklist

After patching `src/styles/index.css`, run:

    npm run build

Then run:

    npm run dev

Open:

    http://localhost:5173/

Smoke test:

- Home
- Learning Path
- Section Reader
- Tools Library
- Glossary
- glossary chips
- glossary popup
- related section cards
- related tool cards
- previous and next navigation
- tool drawer
- narrow browser width

Confirm:

- the app still builds
- the app still runs locally
- no content has changed
- no navigation behavior has changed
- the app feels visually closer to Scenario Generator
- the app still feels quieter than Scenario Generator
- long-form reading still feels comfortable
- card and panel styling feels consistent
- hover and focus states remain clear

---

## Done Criteria

This pass is complete when:

- VitalNotes and Scenario Generator clearly feel like part of the same brand system
- VitalNotes remains a calm student-facing guide
- Scenario Generator remains the more active tool expression of the brand
- the guide app uses clearer colour tokens
- the guide app uses the shared font direction
- colours feel less scattered
- cards and panels feel more intentional
- no features have been added
- no content has changed
- no app architecture has changed
- `npm run build` passes
- local smoke testing passes

---

## Commit Message

Recommended commit message:

    Refine shared VitalNotes brand system

---

## Status

Complete, shipped, and locked.

The VitalNotes learning guide now uses the shared VitalNotes brand system aligned with Scenario Generator.

Completed changes:

- strengthened shared colour system
- aligned typography direction
- refined page headers and section headers
- added warmer orange cue styling
- normalized Home page styling with other pages
- changed section headers to use a left cue with right-side fade
- changed student-problem panels to match the same left cue with right-side fade
- removed the redundant "Open related section" action from the Tools page
- replaced the temporary VN mark with the shared VitalNotes logo asset
- preserved the existing app structure, routes, content model, tools, glossary data, and section data

This was primarily a CSS and visual identity pass.

No new features were added.
No content migration was performed.
No navigation redesign was performed.
No app architecture changes were made.

Commit:

`Refine shared VitalNotes brand system`
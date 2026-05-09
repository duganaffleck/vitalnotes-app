# UI Tone and Style

VitalNotes should feel calm, deliberate, useful, and grounded.

It should feel like a good instructor has organized the learning path beside the student, without making the interface feel like a course shell, productivity app, flashcard platform, or motivational platform.

The interface should support attention.

It should not compete for it.

The writing is the main experience.

---

## Current Status

The first app vertical slice has been implemented.

The approved first-slice content migration is complete and pushed.

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
- simple glossary popup support
- section body list support

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current cleanup focus:

- [[Retro Fix 01 - Bullet List Cleanup]]
- [[Glossary Term Audit]]

Broad visual polish is deferred until the first-slice rendering issues are cleaned up.

Do not polish around content-structure problems.

---

## Current Design Priority

The current design priority is presentation fidelity, not visual expansion.

Immediate priorities:

1. make flattened bullet-style content render correctly through list blocks
2. confirm glossary references behave cleanly
3. preserve readable section flow
4. avoid feature expansion
5. avoid broad redesign before reader-quality testing

The app does not need to look impressive yet.

It needs to feel readable, steady, and faithful to the guide.

---

## Desired Feel

VitalNotes should feel:

- calm
- readable
- deliberate
- practical
- quietly confident
- student-facing
- grounded in paramedicine
- easy to move through
- lighter than a traditional blog
- more organized than loose pages
- less formal than a course platform

The student should feel like:

- they know where they are
- they know what to read next
- the page is not demanding too much from them
- tools are available when useful
- the app understands the learning pressure of paramedic school

The app should feel organized without feeling managed.

---

## Avoid

Avoid:

- flashy gamification
- cluttered dashboards
- loud colours
- corporate course-shell feeling
- excessive icons
- decorative interaction
- productivity-app bloat
- startup-style learning language
- motivational slogans
- achievement badges
- unnecessary animations
- overdesigned progress systems
- quiz-app energy
- clinical textbook density
- Obsidian aesthetic obsession
- Anki power-user aesthetics
- flashcard-platform energy

The interface should not make students feel like they are entering another system to maintain.

---

## Use

Use:

- clean cards
- readable spacing
- clear labels
- simple navigation
- subtle orientation cues
- calm contrast
- mobile-friendly layout
- short interface copy
- consistent cluster labels
- obvious previous and next navigation
- selective glossary support
- optional tool access where justified

The design should make the guide feel easier to use without making the app feel busy.

---

## Visual Direction

The visual style should be restrained.

Prefer:

- soft spacing
- readable typography
- simple hierarchy
- generous line height
- clear section headers
- subtle dividers
- quiet cards
- minimal icons
- calm neutral backgrounds
- accessible contrast

Avoid:

- dense blocks with no breathing room
- heavy borders everywhere
- bright learning-app colours
- large decorative illustrations
- excessive hover effects
- interface elements that draw attention away from the section body

The UI should make the writing easier to stay with.

---

## Section Reader Style

The [[Section Reader]] should preserve paragraph-level explanation.

VitalNotes sections should not be chopped into too many cards, accordions, or tiles.

Cards may be useful for:

- student problem
- related tool
- related sections
- previous and next navigation
- glossary support

Cards should not replace the main body of the section.

The section body should feel like a calm reading space.

Current body block support includes:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

Because list support was added late in migration, some list-like content may still appear visually flattened.

Current cleanup:

- [[Retro Fix 01 - Bullet List Cleanup]]

This cleanup should happen before broad typography or layout polish.

---

## List Style

Lists should help structure content without making the section feel mechanical.

Use list styling for:

- grouped examples
- workflow steps
- repeated prompts
- option sets
- tool-style instructions
- short grouped distinctions
- visually flattened content that clearly reads as a list

Lists should have enough spacing to be readable but not so much that they fragment the section.

Do not force every short paragraph into a list.

Some short paragraphs are part of the VitalNotes cadence.

---

## Tools Style

Tools should feel practical and light.

A tool drawer or tool card should:

- open easily
- close easily
- use plain labels
- stay short
- feel optional
- connect clearly to the section
- help the student do one useful thing

A tool should not feel like:

- homework
- an assessment
- a productivity workflow
- a second lesson hidden inside the section
- an interactive feature added for novelty
- a deck-management system
- a flashcard app inside the guide

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

These are enough to test early tool behavior.

They represent three useful tool types:

- a thinking check
- a reusable note template
- a recall prompt builder

Do not add more tool interaction until these work cleanly.

Do not add new active tools during first-slice cleanup unless explicitly approved.

---

## Glossary Style

Glossary support should be subtle.

A glossary term should not interrupt the reading unless it is likely to reduce friction.

Use:

- light underline
- small info indicator
- hover or tap popup
- simple side card if needed

Avoid:

- marking too many terms in one paragraph
- long definitions
- academic phrasing
- glossary popups that become mini-lessons
- links that pull the student away too aggressively

A glossary popup should help the student keep reading.

Current glossary cleanup:

- [[Glossary Term Audit]]

The glossary should not become a textbook, learning science dictionary, quiz layer, or hidden lesson system.

---

## Tone in Interface Copy

Interface text should be direct and human.

Good:

- "Start with the problem you recognize."
- "This tool helps you extract one adjustment from a scenario."
- "Continue to the next section."
- "Return to the Learning Path."
- "Use this when a directive feels heavy or unclear."
- "Open the Smart Note Template."
- "Build a clinical recall prompt."
- "Related sections"
- "Next in the guide"

Avoid:

- "Unlock your peak clinical learning potential."
- "Master paramedicine with science-backed hacks."
- "Optimize your study workflow."
- "Level up your learning journey."
- "Crush your OSCEs."
- "Build your ultimate productivity system."
- "Supercharge your Anki deck."
- "Hack your memory."

Interface copy should sound like VitalNotes, not a software company.

---

## Progress Cues

Progress cues may be useful, but they should stay subtle.

Acceptable early cues:

- cluster label
- section number within cluster
- previous and next links
- simple learning path position

Avoid:

- streaks
- badges
- percentages everywhere
- performance scores
- heavy progress dashboards
- anything that makes reading feel like compliance

Progress should orient the student.

It should not pressure them.

Do not add progress tracking during first-slice cleanup.

---

## Mobile Style

The app should work well on mobile.

Mobile reading should prioritize:

- clean line length
- clear spacing
- easy previous and next movement
- glossary support that does not cover the whole screen
- tool drawers that are easy to dismiss
- minimal navigation friction

Avoid mobile layouts where the student has to fight the interface to keep reading.

A tired student should be able to open a section, read it, use a tool if needed, and continue.

---

## Accessibility and Readability

The interface should support tired students.

Use:

- readable font sizes
- strong enough contrast
- clear tap targets
- predictable navigation
- simple headings
- meaningful link text
- enough spacing between sections

Avoid:

- tiny text
- low contrast
- visual clutter
- unclear buttons
- hidden navigation
- icon-only controls without labels

A paramedic student may be reading this after class, after lab, after work, or before an OSCE.

The design should respect that.

---

## First-Slice Style Boundaries

Do not add during first-slice cleanup:

- broad visual redesign
- new theme system
- complex animations
- dashboards
- progress tracking
- accounts
- quizzes
- badges
- scores
- simulations
- instructor dashboards
- LMS integration
- AI feedback
- AI reflection
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior
- CMS
- MDX
- [[Obsidian Import Pipeline]]

Minor visual fixes are acceptable only when readability is blocked.

---

## Relationship to App Design Files

This file should stay aligned with:

- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Popup and Glossary Rules]]
- [[Navigation Model]]
- [[Content Schema]]
- [[App Anti-Drift Rules]]

Do not use this file to redesign app structure.

Use it to keep the existing app calm, readable, and content-first.

---

## Design Rule

The interface should reduce cognitive load.

If a design choice makes the app more impressive but the guide harder to read, do not use it.
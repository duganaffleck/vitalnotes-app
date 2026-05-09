# MOC - Build Prompts

This folder holds reusable prompts for ChatGPT and Codex.

Use these prompts to keep the project consistent and reduce drift.

Prompts in this folder should protect the VitalNotes rebuild from becoming generic, overbuilt, or app-first.

The Obsidian vault remains the source of truth.

The app renders the guide.

The app does not reinvent the guide.

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

Current phase:

- first-slice stable
- demo-readiness complete
- vault alignment nearly complete
- next bounded app-development pass not yet chosen

Do not expand app scope yet.

---

## Purpose

Build prompts should help with:

- student-facing section drafting
- section review and anti-slop checks
- Obsidian architecture updates
- vault maintenance
- app cleanup
- app planning
- bounded Codex implementation tasks
- bug fixes
- fresh chat continuation

They should not replace the source of truth.

The Obsidian vault remains the planning spine for VitalNotes.

---

## ChatGPT Prompts

Use ChatGPT prompts for content, review, planning, architecture work, and vault maintenance.

Core prompts:

- [[ChatGPT Content Rewrite Prompt]]
- [[ChatGPT Section Review Prompt]]
- [[ChatGPT Obsidian Update Prompt]]

Use [[ChatGPT Content Rewrite Prompt]] for:

- drafting student-facing sections
- rewriting student-facing sections
- preserving VitalNotes voice and cadence
- app-ready section drafting
- glossary and tool consideration during section development

Use [[ChatGPT Section Review Prompt]] for:

- reviewing sections for tone
- checking for AI slop
- checking for drift
- testing section role in the learning path
- confirming student problem, paramedic relevance, and useful forward orientation

Use [[ChatGPT Obsidian Update Prompt]] for:

- updating vault control files
- updating MOCs
- updating architecture maps
- updating development logs
- updating app-interface notes
- updating build prompts
- replacing stale project-status language
- converting old relative links into `[[Obsidian links]]`
- preserving vault continuity after app changes

Possible future prompt needs:

- cluster review prompt
- glossary update prompt
- tool page review prompt
- deployment-readiness prompt
- future repeatable migration checklist prompt
- next content-slice migration prompt
- fresh chat continuity prompt

ChatGPT should help with:

- drafting sections
- reviewing for tone and drift
- checking section role in the learning path
- updating architecture files
- preserving continuity
- identifying when a tool is earned
- preparing bounded Codex prompts
- maintaining the Obsidian vault

ChatGPT should not:

- reinvent the content map
- rename sections without explicit approval
- expand app scope during cleanup or stabilization
- turn student-facing content into academic explanation
- create loose files outside the vault structure
- add new active tools unless explicitly approved
- add new student-facing sections unless explicitly approved

---

## Codex Prompts

Use Codex prompts only for bounded implementation or bugfix tasks.

Core prompts:

- [[Codex App Structure Prompt]]
- [[Codex Component Prompt]]
- [[Codex Bugfix Prompt]]

Current Codex status:

- Codex and Copilot have been unreliable
- manual ChatGPT-guided copy/paste remains the reliable workflow
- Codex can be reconsidered later for tightly bounded tasks

Codex should receive:

- specific file targets
- current app-state context
- clear scope
- exact requirements
- acceptance criteria
- anti-drift reminders
- instructions not to restructure unrelated files
- instructions not to invent content

Codex should not receive broad prompts such as:

- "Build the app"
- "Make VitalNotes better"
- "Redesign the whole interface"
- "Add whatever features seem useful"
- "Create a complete learning platform"
- "Polish everything"

Codex should implement the structure already defined in the vault.

It should not reinterpret the project.

---

## Guardrails

Use these guardrail files before creating or using build prompts:

- [[App Anti-Drift Rules]]
- [[App Vision]]
- [[Navigation Model]]
- [[Content Schema]]
- [[Section Reader Design]]
- [[Tool Drawer Design]]
- [[Popup and Glossary Rules]]
- [[UI Tone and Style]]
- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Open Questions]]
- [[Deferred Ideas]]
- [[Decisions]]
- [[Repeatable Content Migration Checklist]]

The app should stay:

- content-driven
- calm
- student-facing
- paramedicine-specific
- simple before it is impressive
- aligned with the Obsidian vault

---

## Current Build Boundary

The app build has begun.

The first-slice app exists.

The approved first-slice content migration is complete.

The first-slice cleanup pass is complete.

The first-slice reader has passed demo-readiness smoke testing.

The current boundary is first-slice stability and choosing the next bounded app-development pass.

The next move should not be automatic expansion.

Appropriate next actions include:

1. confirm deployment status and verify Vercel build if needed
2. decide the next bounded app-development pass
3. create or update a repeatable migration checklist if needed
4. only then consider the next content slice

Possible bounded passes include:

- deployment verification cleanup, if needed
- small design consistency pass for button versus text-link affordances
- future repeatable migration checklist
- next content-slice planning
- next content-slice migration

Do not treat the current phase as permission to add features.

Do not expand beyond the first slice without an explicit decision in [[Decisions]].

---

## Current First-Slice Content

### [[00 Start Here]]

- [[Start Here - What VitalNotes Is]]
- [[How to Use This Guide]]
- [[Where to Begin]]

### [[01 Why Learning Feels Hard]]

- [[Cognitive Load]]
- [[Why Studying Feels Productive But Fails Under Pressure]]
- [[Learning Strain Is Not Always a Personal Problem]]

### [[02 Build Understanding]]

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

### [[03 Build Usable Notes]]

- [[Smart Notes for Paramedic Students]]
- [[Types of Notes and Idea Maturation]]
- [[Obsidian for Learning Paramedicine]]

### [[04 Build Recall]]

- [[Retrieval and Spaced Learning]]
- [[Clinical Recall Without Trivia]]
- [[Anki for Paramedic Learning]]

Build Recall is included in the first vertical slice and has been migrated.

Do not revert to older language that treats [[04 Build Recall]] as excluded, undecided, pending, or future-facing.

---

## Current Active Tools

Only these tools are active in the first app slice:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Planned tools should remain planned until their related sections are rebuilt, stable, and clearly earn tool support.

Planned tools include:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]
- [[Scenario Day Reset]]
- [[OSCE Reset]]
- [[Five Whys Tool]]
- [[Reflection Without Journaling Tool]]

Do not add new active tools unless explicitly approved.

---

## Current App Structure

Current app stack:

- Vite
- React
- TypeScript
- VS Code
- external Windows PowerShell
- Git
- GitHub

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

Reliable commands:

- `npm run build`
- `npm run dev`
- `node scripts/audit-glossary.cjs`
- `node scripts/audit-related-links.cjs`
- `git status`
- `git add .`
- `git commit -m "..."`
- `git push`

Local development address:

`http://localhost:5173/`

External Windows PowerShell is being used because the VS Code integrated terminal has a ConPTY launch issue.

---

## Completed Cleanup Prompts

### [[Retro Fix 01 - Bullet List Cleanup]]

Status: complete

This bounded task:

- updated `src/content/sections.ts`
- converted obvious flattened paragraph runs into proper `list` blocks
- reviewed [[Smart Notes for Paramedic Students]]
- reviewed [[Types of Notes and Idea Maturation]]
- reviewed [[Obsidian for Learning Paramedicine]]
- continued through other first-slice clusters where needed
- preserved wording wherever possible
- avoided title, ID, tool, feature, and learning path changes

Completed clusters:

- [[03 Build Usable Notes]]
- [[02 Build Understanding]]
- [[01 Why Learning Feels Hard]]

Confirmed no list cleanup was needed in:

- [[00 Start Here]]

A similar bounded prompt can be reused later if future migrations create flattened list problems again.

---

### [[Glossary Term Audit]]

Status: complete

This bounded task:

- compared glossary IDs in `src/content/sections.ts` against `src/content/glossary.ts`
- added or normalized only first-slice glossary terms
- kept definitions short
- kept definitions student-facing
- kept definitions paramedic-relevant
- avoided turning the glossary into a textbook

Created reusable audit script:

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

These should remain for now.

---

### Related Link Audit

Status: complete

This bounded task:

- checked every related section ID
- checked every related tool ID
- reviewed related sections and related tools per section

Created reusable audit script:

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

This bounded task updated:

- `src/styles/index.css`

It refined:

- section body spacing
- section heading rhythm
- section list spacing
- glossary panel spacing
- related panel spacing
- previous / next navigation spacing
- tool drawer readability

It did not change:

- behavior
- content
- color design
- navigation design
- component architecture

A future design pass should remain similarly bounded.

---

## First App Slice Status

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

## Future Prompt Needs

### Deployment Verification Prompt

Possible use:

- verify Vercel build
- check live app behavior
- confirm first-slice navigation outside localhost
- test representative pages, tools, glossary, and related links
- avoid adding features during deployment verification

Create only if deployment needs a dedicated pass.

### Design Consistency Prompt

Possible use:

- review button versus text-link consistency
- focus especially on the Learning Path `Open section` affordance
- avoid broad visual redesign
- make small local UI adjustments only if needed

Track related deferred item in:

- [[Deferred Ideas]]

### Repeatable Migration Checklist Prompt

Possible use:

- prepare for next content-slice migration
- preserve the lessons from the first slice
- include list cleanup, glossary audit, related-link audit, build, smoke test, and vault update steps
- prevent future migration drift

Create before next content migration if it would reduce friction.

### Next Content-Slice Migration Prompt

Possible use:

- migrate the next approved content slice only after the next pass is chosen
- use Obsidian as source of truth
- preserve approved section titles, IDs, tool relationships, glossary terms, and learning path order
- avoid adding new features during content migration

Do not create until the next slice is explicitly chosen.

---

## Prompt Standards

A strong prompt should include:

- project context
- current app state
- exact task
- file path or target
- source files to preserve
- constraints
- what not to change
- expected output format
- acceptance criteria
- anti-drift rules

A weak prompt asks for broad improvement without boundaries.

Avoid weak prompt language such as:

- "make this better"
- "improve the app"
- "clean it up however you think"
- "add features"
- "modernize it"
- "optimize everything"
- "polish everything"

Use bounded language such as:

- "Update only this file."
- "Do not change section names."
- "Preserve the current content map."
- "Return the full file."
- "Do not add new dependencies."
- "Do not modify unrelated components."
- "Use the existing Obsidian architecture as source of truth."
- "Make the smallest safe change."
- "Do not expand scope."

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

## Rule

Do not ask Codex to "build the app" broadly.

Give Codex bounded tasks with file targets, requirements, and acceptance criteria.

If a task cannot be described clearly, it is not ready for Codex yet.

When in doubt, use [[ChatGPT Obsidian Update Prompt]] to update the vault first, then create a bounded implementation prompt.
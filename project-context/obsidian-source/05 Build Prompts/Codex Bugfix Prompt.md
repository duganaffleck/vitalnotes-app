# Codex Bugfix Prompt

Use this prompt when fixing a specific bug in the VitalNotes app.

This prompt is for narrow debugging only.

Do not use it to redesign the app, refactor broadly, change content structure, add features, or alter the product direction.

The app already exists.

The first-slice content migration is complete.

Bugfixes should preserve the current first-slice app and the Obsidian vault structure.

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

Bugfixes should not become cleanup passes unless the reported bug directly requires it.

---

## Codex Prompt

```text
# Codex Bugfix Prompt

You are helping debug the existing VitalNotes app.

VitalNotes is a student-facing learning guide for paramedic students.

The app should remain simple, calm, content-driven, and aligned with the Obsidian vault structure.

The first app vertical slice already exists.

The first-slice content migration is complete.

Your task is to fix one specific bug.

Do not redesign the app.

Do not change the product direction.

Do not refactor unrelated code.

Do not add features.

Do not modify content unless the content is the direct cause of the bug.

Do not make Anki, flashcards, dashboards, tracking, or tool behavior structurally central while fixing a bug.

## Source of Truth

Use the existing app structure and relevant Obsidian vault notes.

Relevant notes may include:

- `00 Command Centre/Current Project Status.md`
- `00 Command Centre/Next Actions.md`
- `02 Content Architecture/New VitalNotes Learning Path.md`
- `02 Content Architecture/Tool Library Map.md`
- `02 Content Architecture/Glossary and Popup Map.md`
- `04 App Interface Design/App Vision.md`
- `04 App Interface Design/Navigation Model.md`
- `04 App Interface Design/Section Reader Design.md`
- `04 App Interface Design/Content Schema.md`
- `04 App Interface Design/UI Tone and Style.md`
- `04 App Interface Design/Tool Drawer Design.md`
- `04 App Interface Design/Popup and Glossary Rules.md`
- `05 Build Prompts/App Anti-Drift Rules.md`
- `06 Development Log/Next Build Tasks.md`
- `06 Development Log/Bugs and Fixes.md`

The Obsidian vault remains the project source of truth.

Do not change the educational model while fixing a technical issue.

## Current App State

The app is a Vite, React, and TypeScript project.

Current content files include:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

The current first slice includes:

- Home page
- Learning Path page
- Section Reader page
- Tools Library page
- Glossary page
- hash-based navigation
- previous and next section navigation
- related sections
- related tools
- simple glossary popup support
- simple tool drawer support
- section body list support

The section body renderer currently supports:

- heading blocks
- paragraph blocks
- placeholder blocks
- list blocks

Preserve existing behavior unless the bug directly requires a change.

## Current First-Slice Content

The app currently contains the approved first-slice clusters.

### 00 Start Here

- Start Here - What VitalNotes Is
- How to Use This Guide
- Where to Begin

### 01 Why Learning Feels Hard

- Cognitive Load
- Why Studying Feels Productive But Fails Under Pressure
- Learning Strain Is Not Always a Personal Problem

### 02 Build Understanding

- Meaning Before Memorization
- Pathophysiology Through Patterns
- Directives Through Purpose

### 03 Build Usable Notes

- Smart Notes for Paramedic Students
- Types of Notes and Idea Maturation
- Obsidian for Learning Paramedicine

### 04 Build Recall

- Retrieval and Spaced Learning
- Clinical Recall Without Trivia
- Anki for Paramedic Learning

Active tools:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

Do not add new clusters, sections, or tools while fixing a bug.

## Bug Report

Exact error message:

[PASTE ERROR]

Where it appears:

[TERMINAL / BROWSER / VERCEL / GITHUB / CONSOLE / APP READER]

File path, if known:

[FILE PATH]

Line number, if known:

[LINE NUMBER]

What I was doing when it happened:

[DESCRIPTION]

Recent changes made:

[RECENT CHANGES]

Expected behaviour:

[WHAT SHOULD HAVE HAPPENED]

Actual behaviour:

[WHAT HAPPENED INSTEAD]

## Debugging Rules

- Diagnose the likely cause before editing.
- Fix only the bug described.
- Make the smallest safe change.
- Do not refactor unrelated code.
- Do not change the app structure unless required to fix the bug.
- Do not add new dependencies unless absolutely necessary.
- Do not add features.
- Do not alter content unless content is the direct cause of the bug.
- Preserve the VitalNotes app direction.
- Preserve existing working behaviour.
- Preserve existing styling unless styling is the bug.
- Preserve the current content map.
- Preserve section names, tool names, glossary IDs, and cluster names.
- Avoid speculative cleanup.
- Avoid broad “while I’m here” improvements.
- Avoid turning a bugfix into a visual polish pass.
- Avoid turning a bugfix into a content rewrite.
- Avoid changing app behavior that is not involved in the bug.

## Diagnostic Process

Before changing code, identify:

1. What file or component is most likely involved.
2. Whether the bug is caused by:
   - syntax
   - import/export mismatch
   - missing prop
   - undefined data
   - routing issue
   - content object shape
   - glossary ID mismatch
   - related section/tool ID mismatch
   - body block rendering issue
   - CSS/layout issue
   - build configuration
   - dependency issue
3. The smallest change likely to fix it.
4. Any risk of breaking existing navigation, glossary behavior, tool drawers, or section rendering.

If more information is needed, make the best grounded assumption from the bug report and proceed with the smallest safe fix.

## What Not to Change

Do not change:

- learning path order
- section titles
- cluster names
- content schema fields unless directly required
- glossary language unless the bug is directly glossary-related
- tool names
- active/planned tool status
- app navigation model
- unrelated components
- unrelated CSS
- package dependencies unless the bug clearly requires it

Do not add:

- dashboards
- accounts
- tracking
- badges
- quizzes
- AI features
- simulations
- new app sections
- new tools
- new glossary terms unless the bug directly involves a missing first-slice glossary term
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior

## Special Cases

### If the bug involves flattened bullet lists

This may belong to Retro Fix 01 - Bullet List Cleanup.

Only fix the specific affected section unless the task explicitly asks for the full retrofix pass.

Use the existing list block shape:

{
  type: 'list',
  items: string[]
}

Preserve wording wherever possible.

Do not rewrite the section.

### If the bug involves missing glossary terms

This may belong to Glossary Term Audit.

Only add or normalize the missing first-slice glossary term if it is directly causing the bug.

Definitions should remain:

- short
- student-facing
- paramedic-relevant

Do not expand the glossary broadly.

### If the bug involves related sections or related tools

Fix only the broken ID, missing reference, or rendering issue.

Do not add new related sections or tools unless the current content already supports them.

### If the bug involves navigation

Preserve hash-based navigation unless the bug directly requires a small fix.

Do not add a routing library.

Do not overhaul navigation.

## Output Expectations

After fixing, summarize:

1. Likely cause
2. Files changed
3. Exact fix made
4. What did not change
5. Any risks or assumptions
6. How to test locally

If no code change is needed, explain why and provide the correct next step.

## Testing Expectations

After fixing, test with:

- `npm run build`
- `npm run dev` if local browser verification is needed

Check affected app areas only.

If relevant, verify:

- Learning Path still renders
- Section Reader still renders
- previous and next navigation still works
- related sections still work
- related tools still work
- Tools Library still shows active tools only
- Glossary page still renders
- glossary popup behavior still works
- tool drawer behavior still works

## Acceptance Criteria

The bugfix is complete when:

- the reported error no longer appears
- the app still builds successfully
- the app still runs locally
- existing navigation still works
- existing section rendering still works
- glossary behavior still works if already implemented
- tool drawer behavior still works if already implemented
- no unrelated features were added
- no unrelated styling changes were introduced
- no content map changes were made
- no Anki integration was added
- no deck management was added
- no automated flashcard generation was added
- no flashcard-platform behavior was added
- no dashboard, tracking, quiz, simulation, account, badge, scoring, or AI features were added
- Build Recall remains included in the first slice
- Clinical Recall Prompt Builder remains an active tool

## Final Reminder

Fix the bug.

Do not improve the app generally.

Make the smallest safe change and preserve the current first-slice structure.
```

---

## Current No-Go List

Do not ask Codex to add during bugfixes:

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

## Bugfix Rule

A bugfix should restore expected behavior.

It should not make VitalNotes larger, louder, more interactive, or more complex.
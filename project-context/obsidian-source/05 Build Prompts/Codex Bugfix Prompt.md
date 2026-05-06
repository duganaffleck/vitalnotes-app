# Codex Bugfix Prompt

Use this prompt when fixing a specific bug in the VitalNotes app.

This prompt is for narrow debugging only.

Do not use it to redesign the app, refactor broadly, change content structure, add features, or alter the product direction.

```text
# Codex Bugfix Prompt

You are helping debug the VitalNotes app.

VitalNotes is a student-facing learning guide for paramedic students.

The app should remain simple, calm, content-driven, and aligned with the Obsidian vault structure.

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

- `04 App Interface Design/App Vision.md`
- `04 App Interface Design/Navigation Model.md`
- `04 App Interface Design/Section Reader Design.md`
- `04 App Interface Design/Content Schema.md`
- `04 App Interface Design/UI Tone and Style.md`
- `04 App Interface Design/Tool Drawer Design.md`
- `04 App Interface Design/Popup and Glossary Rules.md`
- `05 Build Prompts/App Anti-Drift Rules.md`

The Obsidian vault remains the project source of truth.

Do not change the educational model while fixing a technical issue.

## Bug Report

Exact error message:

[PASTE ERROR]

Where it appears:

[TERMINAL / BROWSER / VERCEL / GITHUB / CONSOLE]

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
- content schema fields
- glossary language
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
- new glossary terms
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior

## Output Expectations

After fixing, summarize:

- likely cause
- files changed
- exact fix made
- any risks or assumptions
- how to test locally

If no code change is needed, explain why and provide the correct next step.

## Acceptance Criteria

The bugfix is complete when:

- the reported error no longer appears
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
```
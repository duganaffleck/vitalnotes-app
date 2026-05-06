# MOC - Development Log

This folder tracks project decisions, bugs, feature ideas, deferred ideas, next tasks, and releases.

Use it so the rebuild does not rely on memory alone.

The development log should preserve project continuity without becoming cluttered.

Do not use this folder to track every wording change.

---

## Logs

- [[Decisions]]
- [[Next Build Tasks]]
- [[Bugs and Fixes]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Release Notes]]

---

## Purpose of Each File

### [[Decisions]]

Use for major structural, workflow, content architecture, app direction, or future development decisions.

Do not use for minor wording edits.

Current major decisions include:

- Obsidian remains the source of truth.
- Content comes before code.
- The first app should be content-driven and calm.
- Start Here, How to Use This Guide, and Where to Begin remain separate.
- The early retrieval problem and later retrieval system remain separate.
- Build Understanding is drafted.
- Build Usable Notes is drafted.
- Build Recall is drafted.
- [[Directive Meaning Check]] is an active drafted tool.
- [[Smart Note Template]] is an active drafted tool.
- [[Clinical Recall Prompt Builder]] is an active drafted tool.
- [[Recognition vs Access Check]] is folded into the broader [[Clinical Recall Prompt Builder]] direction for now.
- The first app slice should include Build Recall.
- App build remains deferred until the Build Recall architecture verification pass and app-readiness checkpoint are complete.

---

### [[Next Build Tasks]]

Use for active and upcoming work.

This is the main operational task list.

It should answer:

- what is complete
- what is in progress
- what comes next
- what must wait

Current focus:

- complete the Build Recall architecture verification pass
- complete the app-readiness checkpoint
- decide whether to begin the first app vertical slice or continue into [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

Do not let this file become a broad wishlist.

---

### [[Bugs and Fixes]]

Use once app development begins.

Track:

- bugs
- error messages
- file paths
- fixes made
- testing notes
- unresolved technical issues

Do not use this file heavily before VS Code development begins.

---

### [[Feature Ideas]]

Use for possible app or content features that may be useful but are not yet decisions.

Examples might include:

- local progress tracking
- printable tool cards
- glossary drawer
- problem-based entry cards
- tool drawer behavior
- optional student-facing downloads

Feature ideas should remain parked until they are clearly needed.

Do not treat feature ideas as build tasks.

---

### [[Deferred Ideas]]

Use for ideas that are interesting but not appropriate for the current phase.

Examples might include:

- AI-guided reflection
- instructor-facing version
- advanced tool interactions
- Scenario Generator integration
- downloadable PDFs
- gamified progress systems
- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior

Deferred ideas are not rejected permanently.

They are protected from interrupting the current rebuild.

---

### [[Release Notes]]

Use once actual app versions or public-facing content releases exist.

Track:

- version name or date
- what changed
- what was added
- what was fixed
- known limitations

This file can stay mostly empty until app production begins.

---

## Current Project Status

Current phase:

- content rebuild
- Build Recall architecture verification pass
- app-readiness planning

Completed drafted clusters:

- [[../03 Rebuilt Content/00 Start Here]]
- [[../03 Rebuilt Content/01 Why Learning Feels Hard]]
- [[../03 Rebuilt Content/02 Build Understanding]]
- [[../03 Rebuilt Content/03 Build Usable Notes]]
- [[../03 Rebuilt Content/04 Build Recall]]

Active drafted tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Next project move:

- complete the Build Recall architecture verification pass
- complete the app-readiness checkpoint
- decide whether to begin the first app vertical slice or continue content drafting

Possible next content cluster if app development is deferred:

- [[../03 Rebuilt Content/05 Think Clinically]]

Possible next student-facing section if continuing content:

- [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

---

## Development Log Rules

- Keep decisions separate from tasks.
- Keep tasks separate from feature ideas.
- Keep bugs separate from content notes.
- Keep deferred ideas visible but inactive.
- Do not log every small rewrite.
- Do not turn this folder into a second command centre.
- Update this folder after major cluster progress, app-planning decisions, or technical changes.

---

## Current Boundary

Do not start VS Code app production yet.

Do not create GitHub, Vercel, or deployment tasks yet unless explicitly requested.

Do not turn app-planning notes into active build tasks before the Build Recall architecture verification pass and app-readiness checkpoint are complete.

The next active move after the verification pass is:

- complete an app-readiness checkpoint

After that, decide between:

- first app vertical slice
- continuing content drafting into [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]
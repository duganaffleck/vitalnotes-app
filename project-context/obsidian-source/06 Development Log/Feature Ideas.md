# Feature Ideas

Use this note to hold possible app or content features without letting them interrupt the current phase.

A feature is not accepted just because it is interesting.

It must improve navigation, clarity, flow, usability, or student learning.

Feature ideas should stay separate from active build tasks.

---

## Current Boundary

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

Current active cleanup:

- [[Retro Fix 01 - Bullet List Cleanup]]

Next cleanup:

- [[Glossary Term Audit]]

Do not convert feature ideas into build tasks during first-slice cleanup.

The current work is presentation fidelity, glossary consistency, and reader-quality testing.

---

## Implemented First-Slice Features

These features are no longer just ideas.

They exist in the first app slice and should now be tested, cleaned up, or preserved rather than reimagined.

### [[Learning Path]]

Purpose:

Help students see the guide structure and move through clusters without feeling lost.

Current status:

- implemented
- first-slice content migrated
- needs reader-quality testing

Guardrail:

Do not turn the learning path into a dashboard, progress tracker, or course shell.

---

### [[Section Reader]]

Purpose:

Display one student-facing section in a calm, readable, navigable format.

Current status:

- implemented
- renders real first-slice content
- supports heading, paragraph, placeholder, and list body blocks

Current cleanup:

- [[Retro Fix 01 - Bullet List Cleanup]]

Guardrail:

Do not chop the main section body into excessive cards, accordions, or widgets.

The writing remains the main experience.

---

### Previous and Next Navigation

Purpose:

Help students move through the intended learning path without needing to think too much about navigation.

Current status:

- implemented
- active across the first-slice section sequence

Guardrail:

Do not overhaul routing during first-slice cleanup.

Hash-based navigation is acceptable for now.

---

### Glossary Popups

Purpose:

Give short plain-language support for key terms without pulling students away from the section.

Current status:

- implemented as simple glossary popup support
- needs [[Glossary Term Audit]]

Guardrail:

Do not define every term.

Popups should reduce friction, not interrupt reading.

Do not turn the glossary into a textbook, quiz layer, AI explanation layer, or hidden lesson system.

---

### [[Tools Library]]

Purpose:

Collect active reusable tools in one place.

Current status:

- implemented
- shows active first-slice tools

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Guardrail:

Show active drafted tools only.

Planned tools should remain invisible to students until drafted, stable, and earned.

Do not turn the [[Tools Library]] into a tool catalogue.

---

### Tool Drawers

Purpose:

Provide contextual access to active tools from relevant sections.

Current status:

- implemented as simple tool drawer support
- needs reader-quality testing

Current first-slice tool drawer relationships:

- [[Directive Meaning Check]] with [[Directives Through Purpose]]
- [[Smart Note Template]] with [[Smart Notes for Paramedic Students]]
- [[Clinical Recall Prompt Builder]] with [[Clinical Recall Without Trivia]] and [[Anki for Paramedic Learning]]

Guardrail:

Only use drawers for active drafted tools.

Do not show planned tools as live features.

Do not let tool drawers become assignments, dashboards, [[Anki Integration]], deck managers, automated card generators, or flashcard-platform features.

---

### Problem-Based Start Page

Purpose:

Help students enter the guide through the problem they recognize.

Current status:

- implemented through [[Where to Begin]]
- currently written as a routing page, not an interactive selector

Guardrail:

Do not turn this into a quiz, diagnostic tool, AI recommendation engine, or complex onboarding flow.

---

## Possible Early Features

These may be useful after first-slice cleanup and reader-quality testing.

Do not build them during the current cleanup phase.

### Local Save Position

Purpose:

Remember where a student left off.

Why it may matter:

Students may read in short sessions between class, lab, work, or OSCE preparation.

Status:

Possible early feature

Guardrail:

Keep it simple.

Do not turn it into progress tracking, accounts, dashboards, streaks, or a compliance system.

---

### Section Progress Cue

Purpose:

Show students where they are in the guide.

Why it may matter:

A light progress cue may improve orientation.

Status:

Possible early feature

Guardrail:

Avoid badges, streaks, percentages everywhere, performance scores, or dashboard pressure.

Progress should orient the student.

It should not pressure them.

---

### Printable Tools

Purpose:

Allow students to print or save core tools.

Why it may matter:

Tools like [[Directive Meaning Check]], [[Smart Note Template]], and [[Clinical Recall Prompt Builder]] may be useful outside the app.

Status:

Possible later feature

Guardrail:

Do not build before the tools are stable and first-slice reader testing is complete.

Keep printable tools simple.

Do not create workbook bloat.

---

### Markdown Export for [[Smart Note Template]]

Purpose:

Let students copy or export the [[Smart Note Template]] in Markdown.

Why it may matter:

This could support students using Obsidian or another plain-text note system.

Status:

Possible later feature

Guardrail:

Do not make Obsidian feel mandatory.

Do not turn VitalNotes into an Obsidian tutorial or productivity system.

---

### Copyable [[Clinical Recall Prompt Builder]]

Purpose:

Let students copy the [[Clinical Recall Prompt Builder]] structure for use in notes, Anki, whiteboard recall, or study sessions.

Why it may matter:

This may help students use the prompt builder without turning the app into a flashcard platform.

Status:

Possible later feature

Guardrail:

Do not build [[Anki Integration]], deck management, automated card generation, or flashcard-platform behavior.

The feature should remain simple copy support only.

---

### Interactive [[Where to Begin]] Selector

Purpose:

Let students choose a current learning problem and receive a suggested starting section.

Why it may matter:

This could make problem-based entry easier if the written [[Where to Begin]] page is not enough.

Status:

Possible later feature

Guardrail:

Do not build before first-slice reader testing.

Do not turn this into:

- a quiz
- a diagnostic tool
- an AI recommendation engine
- a complex onboarding flow
- a personalized learning path system

For now, the written [[Where to Begin]] page is enough.

---

### Glossary Drawer or Side Panel

Purpose:

Provide glossary definitions in a slightly more spacious format than a small popup, especially on mobile.

Why it may matter:

Some glossary terms may be easier to read in a drawer if popups feel cramped.

Status:

Possible later feature

Guardrail:

Do not build before [[Glossary Term Audit]] and reader-quality testing.

Do not make glossary behavior more complex unless the current popup model creates a real reading problem.

---

## Later or Deferred Features

These may be valuable later, but should not be part of first-slice cleanup.

### Instructor-Facing Notes

Purpose:

Provide educators with companion notes, teaching rationale, or implementation guidance.

Status:

Deferred

Reason:

VitalNotes should remain student-facing until the guide experience is stable.

---

### Scenario Generator Bridge

Purpose:

Eventually connect Scenario Generator outputs to VitalNotes-linked learning or reflection prompts.

Status:

Deferred

Reason:

This may be powerful later, but it risks pulling VitalNotes toward scenario software too early.

---

### AI-Guided Reflection

Purpose:

Help students reflect on scenario performance through guided prompts.

Status:

Deferred

Reason:

Potentially useful, but too complex for the current version and could shift VitalNotes away from calm student-guided learning.

---

### Downloadable PDF Version

Purpose:

Allow students to read or print the guide offline.

Status:

Possible later feature

Reason:

Useful, but not necessary before the app reading experience works.

---

### Anki Card Quality Check

Purpose:

Help students review whether their Anki cards are too vague, too long, too shallow, or disconnected from clinical use.

Status:

Possible later feature

Reason:

This may become useful later, but the current active need is already handled more broadly by [[Clinical Recall Prompt Builder]].

Guardrail:

Do not build this unless a repeated student need appears.

Do not let it become deck management, Anki setup advice, automated flashcard generation, or a flashcard productivity system.

---

### Search

Purpose:

Allow students to find sections, tools, or glossary terms quickly.

Status:

Possible later feature

Reason:

Search may become useful once the guide grows beyond the first slice.

Guardrail:

Do not build search before the first-slice reader experience is stable.

Do not use search to compensate for unclear navigation.

---

## Rejected for Current Phase

Do not include these during first-slice cleanup:

- accounts
- dashboards
- badges
- streaks
- scores
- quizzes
- grading
- cohort tracking
- instructor analytics
- full simulation cases
- AI-generated feedback
- AI reflection
- LMS integration
- complex personalization
- database-backed progress tracking
- [[Obsidian Import Pipeline]]
- MDX
- CMS
- [[Anki Integration]]
- deck management
- automated flashcard generation
- flashcard-platform behavior

---

## Feature Acceptance Criteria

A feature may move from idea to active task only if it clearly helps with at least one of the following:

- reading flow
- navigation
- student orientation
- glossary support
- tool access
- problem-based entry
- app clarity
- student learning
- paramedic relevance

A feature should remain parked if it mainly makes the app feel bigger, more impressive, more interactive, or more complex.

---

## Current Review Conditions

Do not promote feature ideas until after:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. first-slice reader-quality testing

After that, review whether the app needs:

- small visual polish
- deployment preparation
- local save position
- simple copy support for tools
- continued content drafting with [[Clinical Reasoning]]

---

## Rule

A feature is not accepted because it is interesting.

It must make VitalNotes clearer, calmer, easier to use, or more useful for paramedic students.
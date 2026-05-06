# Feature Ideas

Use this note to hold possible app or content features without letting them interrupt the current phase.

A feature is not accepted just because it is interesting.

It must improve navigation, clarity, flow, usability, or student learning.

Feature ideas should stay separate from active build tasks.

---

## Current Boundary

Current phase:

- content rebuild
- Build Recall architecture verification pass
- app-readiness planning

Current drafted clusters:

- [[../03 Rebuilt Content/00 Start Here]]
- [[../03 Rebuilt Content/01 Why Learning Feels Hard]]
- [[../03 Rebuilt Content/02 Build Understanding]]
- [[../03 Rebuilt Content/03 Build Usable Notes]]
- [[../03 Rebuilt Content/04 Build Recall]]

Current active tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Next project move:

- complete the Build Recall architecture verification pass
- complete the app-readiness checkpoint
- decide whether to begin the first app vertical slice or continue into [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

Do not convert feature ideas into build tasks until the architecture verification pass is complete and the first app slice is explicitly defined.

---

## Likely First-Slice Features

These features are likely appropriate for the first app slice because they directly support the reading experience.

### Learning Path Page

Purpose:  
Help students see the guide structure and move through clusters without feeling lost.

Why it may matter:  
VitalNotes is no longer just a blog. Students need a clear route through the guide.

Status:  
Likely first-slice feature

---

### Section Reader

Purpose:  
Display one student-facing section in a calm, readable, navigable format.

Why it may matter:  
The Section Reader is the core app experience.

Status:  
Likely first-slice feature

---

### Previous and Next Navigation

Purpose:  
Help students move through the intended learning path without needing to think about navigation.

Why it may matter:  
This keeps the guide flowing and reduces friction.

Status:  
Likely first-slice feature

---

### Glossary Popups

Purpose:  
Give short plain-language support for key terms without pulling students away from the section.

Why it may matter:  
Terms like cognitive load, retrieval, clinical recall, directive intent, mechanism, Smart Notes, and Anki may benefit from brief reminders.

Status:  
Likely first-slice feature

Guardrail:  
Do not define every term. Popups should reduce friction, not interrupt reading.

---

### Simple Tools Library

Purpose:  
Collect active reusable tools in one place.

Why it may matter:  
Students should be able to return to tools without rereading full sections.

Status:  
Likely first-slice feature

Initial active tools:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]]

Guardrail:  
Show active drafted tools only. Planned tools should remain invisible to students until drafted and earned.

---

### Tool Drawers

Purpose:  
Provide contextual access to active tools from relevant sections.

Why it may matter:  
A tool drawer may let students use a tool while staying close to the section that introduced it.

Status:  
Likely first-slice test feature

Likely first-slice tool drawer tests:

- [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]] with [[../03 Rebuilt Content/02 Build Understanding/Directives Through Purpose]]
- [[../03 Rebuilt Content/Tools Library/Smart Note Template]] with [[../03 Rebuilt Content/03 Build Usable Notes/Smart Notes for Paramedic Students]]
- [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] with [[../03 Rebuilt Content/04 Build Recall/Clinical Recall Without Trivia]] and [[../03 Rebuilt Content/04 Build Recall/Anki for Paramedic Learning]]

Guardrail:  
Only use drawers for active drafted tools. Do not show planned tools as live features.

Do not let tool drawers become assignments, dashboards, Anki integrations, deck managers, or flashcard-platform features.

---

### Problem-Based Start Page

Purpose:  
Help students enter the guide through the problem they recognize.

Why it may matter:  
This supports [[../03 Rebuilt Content/00 Start Here/Where to Begin]] and keeps navigation student-centered.

Status:  
Likely first-slice or early feature

Guardrail:  
Do not turn this into a quiz or diagnostic tool.

---

## Possible Early Features

These may be useful after the first reading flow is tested.

### Local Save Position

Purpose:  
Remember where a student left off.

Why it may matter:  
Students may read in short sessions between class, lab, work, or OSCE preparation.

Status:  
Possible early feature

Guardrail:  
Keep it simple. Do not turn it into progress tracking or an account system.

---

### Section Progress Tracking

Purpose:  
Show students where they are in the guide.

Why it may matter:  
A light progress cue may improve orientation.

Status:  
Possible early feature

Guardrail:  
Avoid badges, streaks, percentages everywhere, or dashboard pressure.

---

### Printable Tools

Purpose:  
Allow students to print or save core tools.

Why it may matter:  
Tools like [[../03 Rebuilt Content/Tools Library/Directive Meaning Check]], [[../03 Rebuilt Content/Tools Library/Smart Note Template]], and [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] may be useful outside the app.

Status:  
Possible later feature

Guardrail:  
Do not build before the tools are stable.

---

### Markdown Export for Smart Notes

Purpose:  
Let students copy or export the Smart Note Template in Markdown.

Why it may matter:  
This could support students using Obsidian or another plain-text note system.

Status:  
Possible later feature

Guardrail:  
Do not make Obsidian feel mandatory.

---

### Copyable Clinical Recall Prompts

Purpose:  
Let students copy the [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]] structure for use in notes, Anki, whiteboard recall, or study sessions.

Why it may matter:  
This may help students use the prompt builder without turning the app into a flashcard platform.

Status:  
Possible later feature

Guardrail:  
Do not build Anki integration, deck management, automated card generation, or flashcard-platform behavior. The feature should remain simple copy support only.

---

## Later or Deferred Features

These may be valuable later, but should not be part of the first app slice.

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
Potentially useful, but too complex for the first version and could shift VitalNotes away from calm student-guided learning.

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
This may become useful later, but the current active need is already handled more broadly by [[../03 Rebuilt Content/Tools Library/Clinical Recall Prompt Builder]].

Guardrail:  
Do not build this unless a repeated student need appears. Do not let it become deck management, Anki setup advice, automated flashcard generation, or a flashcard productivity system.

---

## Rejected for First Slice

Do not include these in the first app slice:

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
- LMS integration
- complex personalization
- database-backed progress tracking
- Obsidian import pipeline
- Anki integration
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

## Rule

A feature is not accepted because it is interesting.

It must make VitalNotes clearer, calmer, easier to use, or more useful for paramedic students.
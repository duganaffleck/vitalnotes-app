# Open Questions

Use this note to hold unresolved decisions without letting them interrupt the current rebuild.

Questions belong here when they matter, but do not need to be solved immediately.

The goal is to keep uncertainty visible without letting it derail the current phase.

---

## Content Questions

### How many total student-facing sections should the rebuilt VitalNotes guide contain?

Current thought:  
The guide should remain smaller and cleaner than the old version, but not so reduced that important learning problems get flattened.

The current path is holding through:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Status:  
Open

Review later:  
After the first full learning path draft is more complete, or after the first app slice reveals whether the current number of sections feels navigable.

---

### Should the next content cluster be drafted before app development?

Current thought:  
Probably not.

The current first app slice is now strong enough to test with real content:

- Start Here
- Why Learning Feels Hard
- Build Understanding
- Build Usable Notes
- Build Recall
- three active tools

Continuing into [[Clinical Reasoning]] is appealing, but it may delay the app interface test longer than needed.

Status:  
Open for immediate app-readiness checkpoint

Review soon:  
After the Build Recall architecture verification pass is complete.

---

## App Interface Questions

### When should the VS Code app build begin?

Current thought:  
Soon, but not before the Build Recall architecture verification pass and app-readiness checkpoint are complete.

The app build should begin only after the first vertical slice is checked against real drafted sections and active tool pages.

Status:  
Open for app-readiness checkpoint

Review soon:  
After this Build Recall architecture verification pass is complete.

---

### Should the first app version use manual JavaScript objects, JSON-like data, or Markdown import?

Current thought:  
Manual JavaScript objects or JSON-like content structures are likely best for the first vertical slice.

A full Obsidian-to-app Markdown import pipeline should not be built yet. It would add complexity before the interface, content schema, glossary support, and tool behavior have been tested.

Status:  
Open for app build phase

Review later:  
Before app scaffold.

---

### How much of Obsidian should be represented in the app?

Current thought:  
Only the student-facing guide, glossary support, learning path, and active tools should appear in the app.

Obsidian itself should remain the source of truth and an optional student tool, not the visible structure of the app. The app should not expose internal planning files, development notes, mapping documents, source indexes, draft notes, or vault architecture.

Status:  
Open for app design

Review later:  
When refining [[Content Schema]] and [[Navigation Model]].

---

### Should glossary popups appear inline or as side-panel cards?

Current thought:  
Open.

Inline popups may be simpler. Side-panel cards may feel cleaner and less disruptive in a calm reading interface.

Status:  
Open for app build phase

Review later:  
When building the first VS Code section reader.

---

### Should tools open in drawers, modals, or separate pages?

Current thought:  
Open.

The current app concept favours tool drawers or separate tool pages, but this should be tested once the first vertical slice exists.

Active tools likely need standalone pages in the Tools Library:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Some may also need section-linked access where they directly support a reading section.

Status:  
Open for app build phase

Review later:  
When planning the first app vertical slice.

---

### Should active tools be tool drawers, standalone pages, or both?

Current thought:  
Likely both, but not confirmed.

Standalone pages would make the Tools Library useful as a return location. Tool drawers would let students use a tool while reading the connected section without losing context.

Likely first-slice active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Likely contextual drawer candidates:

- [[Directive Meaning Check]] with [[Directives Through Purpose]]
- [[Smart Note Template]] with [[Smart Notes for Paramedic Students]], [[Types of Notes and Idea Maturation]], and possibly [[Obsidian for Learning Paramedicine]]
- [[Clinical Recall Prompt Builder]] with [[Clinical Recall Without Trivia]] and [[Anki for Paramedic Learning]]

Status:  
Open for app build phase

Review later:  
When planning [[Tool Drawer Design]] and the first vertical slice.

---

### Should the app track reading progress locally?

Current thought:  
Not for the earliest version unless it is very simple and low-friction.

Status:  
Open for app build phase

Review later:  
After the first app scaffold is running.

---

### Should there be an instructor-facing section in version one?

Current thought:  
Probably not for the first version.

VitalNotes should remain student-facing until the core guide experience is stable. Instructor-facing notes may come later.

Status:  
Mostly deferred

Review later:  
After the first app version is usable.

---

### Should [[Where to Begin]] become an interactive selector later?

Current thought:  
Possibly.

For now, it should remain a written routing page. Later, it may translate into simple app navigation cards.

Status:  
Open for app build phase

Review later:  
When designing the first app navigation components.

---

### Should Anki-related support ever go beyond guidance and copyable prompts?

Current thought:  
Probably not in the first app slice.

The current boundary is that VitalNotes may mention Anki and may support better clinical recall prompt design through [[Clinical Recall Prompt Builder]], but the app should not become an Anki platform.

Do not include in the first slice:

- Anki integration
- deck management
- automated flashcard generation
- flashcard-platform behavior
- Anki-specific tools

Status:  
Mostly resolved for first slice, open for later review only if repeated student need appears

Review later:  
After first app testing, only if students repeatedly need limited copy support or card-quality guidance.

---

## Workflow Questions

### Should Obsidian remain the source of truth, or should the app content folder eventually become the vault?

Current thought:  
Obsidian remains the source of truth for now.

The app content folder may eventually mirror or import from the vault, but we should not solve that before the first app slice tests the content schema and reading experience.

Status:  
Open for app build phase

Review later:  
Before VS Code app content implementation.

---

### Should Codex tasks be logged manually in [[Decisions]]?

Current thought:  
No, not usually.

Codex implementation work should likely be tracked in [[Next Build Tasks]], [[Bugs and Fixes]], or a future development log entry. [[Decisions]] should only record major structural or strategic choices.

Status:  
Mostly resolved

Review later:  
When VS Code development begins.

---

## Resolved or Mostly Resolved

### How much routing belongs in [[How to Use This Guide]]?

Status:  
Resolved

Resolution:  
General use guidance belongs in [[How to Use This Guide]]. Problem-based routing belongs in [[Where to Begin]].

---

### Should Start Here explain the full guide navigation?

Status:  
Resolved

Resolution:  
No. [[Start Here - What VitalNotes Is]] explains purpose. [[How to Use This Guide]] explains general approach. [[Where to Begin]] handles problem-based entry.

---

### Should the early retrieval problem and later retrieval system be separated?

Status:  
Resolved

Resolution:  
[[Why Studying Feels Productive But Fails Under Pressure]] introduces the problem of familiarity, recognition, and weak access.

[[Retrieval and Spaced Learning]] teaches the fuller retrieval and spacing system.

This separation is working.

---

### Should [[Learning Strain Is Not Always a Personal Problem]] remain as its own section?

Status:  
Resolved for now

Resolution:  
Yes. The section completes the [[Why Learning Feels Hard]] cluster by helping students distinguish useful difficulty from wasted difficulty without treating every struggle as personal failure.

Revisit later:  
During the first full app-readiness pass.

---

### Should old sections be directly rewritten or only mined for ideas?

Status:  
Mostly resolved

Resolution:  
Old sections should be treated as source material, not fixed structure. Strong ideas, examples, and explanations should be preserved when useful, but the old section order and wording do not need to be protected.

Related decision:  
See [[Decisions]].

---

### How much should the Build Understanding cluster diagnose learning problems versus teach understanding directly?

Status:  
Resolved for now

Resolution:  
The Build Understanding cluster shifted appropriately from diagnosing difficulty to teaching usable understanding through meaning, mechanisms, pathophysiology patterns, directive purpose, risk, boundaries, and reassessment.

Related sections:

- [[Meaning Before Memorization]]
- [[Pathophysiology Through Patterns]]
- [[Directives Through Purpose]]

---

### How much of the original Smart Notes material should remain student-facing?

Status:  
Resolved for now

Resolution:  
The core Smart Notes ideas remain student-facing, but the rebuilt cluster is smaller, more practical, and more clearly tied to paramedic learning.

The current split is:

- [[Smart Notes for Paramedic Students]] introduces notes as thinking supports.
- [[Types of Notes and Idea Maturation]] explains how notes change as understanding matures.
- [[Obsidian for Learning Paramedicine]] explains a simple workspace without making Obsidian mandatory.
- [[Smart Note Template]] provides the reusable tool.

Revisit later:  
During app-readiness testing, especially around how the Smart Note Template appears in the interface.

---

### Should the first version include Anki?

Status:  
Resolved for now

Resolution:  
Yes, but carefully.

[[Anki for Paramedic Learning]] is included in the Build Recall cluster.

The section positions Anki as a support for retrieval and spacing, not as the learning system. It avoids turning VitalNotes into a flashcard-first guide.

Revisit later:  
During app-readiness testing, especially to make sure Anki does not become visually or structurally overemphasized.

---

### Should the Build Recall cluster create a new active tool?

Status:  
Resolved

Resolution:  
Yes.

The Build Recall cluster earned [[Clinical Recall Prompt Builder]] as an active drafted tool.

This tool is broader and more useful than [[Recognition vs Access Check]]. It helps students turn facts, Smart Notes, directive details, scenario errors, and confusing concepts into recall prompts that support clinical use.

---

### Should [[Recognition vs Access Check]] be created?

Status:  
Resolved for now

Resolution:  
No.

The useful pieces of [[Recognition vs Access Check]] have been folded into the Build Recall sections and [[Clinical Recall Prompt Builder]].

Revisit later:  
Only if app testing shows students need a smaller access-check tool separate from clinical recall prompt building.

---

### Should the Build Recall cluster lean more toward weekly study rhythm or scenario transfer?

Status:  
Resolved for now

Resolution:  
Scenario transfer should remain central.

The Build Recall cluster teaches retrieval, spacing, clinical recall, and Anki in a way that supports access during labs, scenarios, OSCEs, and patient care.

It does not become a generic weekly study schedule.

---

### Should the first app slice begin after Build Usable Notes or after Build Recall?

Status:  
Resolved for now

Resolution:  
The first app slice should begin after Build Recall.

Reason:  
Build Recall gives the first app slice a stronger learning arc:

- understand why learning feels hard
- build understanding
- preserve understanding in usable notes
- practice accessing knowledge through retrieval and clinical recall

This is a better test of the app than stopping after Build Usable Notes.

Revisit later:  
Confirm during the app-readiness checkpoint before VS Code work begins.

---

## Parking Lot

These ideas are interesting, but not active.

- Should there eventually be a student-facing downloadable PDF version?
- Should there eventually be instructor-facing notes?
- Should Scenario Generator eventually export VitalNotes-linked student reflection prompts?
- Should tools become printable cards?
- Should the app eventually include light local progress tracking?
- Should the app eventually include optional AI-guided reflection?
- Should there eventually be an Anki card quality check, separate from [[Clinical Recall Prompt Builder]]?
- Should there ever be limited copy support for recall prompts without creating Anki integration, deck management, automated flashcard generation, or flashcard-platform behavior?
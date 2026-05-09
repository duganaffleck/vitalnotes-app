# Slice 02 Migration Decisions - Think Clinically Foundations

Status: Complete, migrated, tested, and pushed

## Slice Scope

Slice 02 is:

- [[Clinical Reasoning]]
- [[Pattern Recognition]]
- [[Avoiding Premature Closure]]

This slice belongs to:

- [[05 Think Clinically]]

This is not the full Think Clinically cluster.

This is the foundations slice for clinical thinking.

---

## Purpose of Slice 02

Slice 02 begins the shift from learning systems into clinical thinking.

The first app slice helped students build:

- understanding
- usable notes
- recall
- learning orientation

Slice 02 asks:

How do students use what they know while the call is still unclear?

---

## Section Sequence

The intended sequence is:

- [[Directives Through Purpose]]
- [[Clinical Reasoning]]
- [[Pattern Recognition]]
- [[Avoiding Premature Closure]]

For now, [[Avoiding Premature Closure]] is the end of the active Slice 02 path.

Do not link forward to inactive future sections just to complete the chain.

---

## Section Roles

### [[Clinical Reasoning]]

Role:

Explain clinical reasoning as a working explanation under uncertainty.

This section teaches students that reasoning does not wait until assessment is complete. It develops during the call as information arrives, changes, and sometimes contradicts the first impression.

### [[Pattern Recognition]]

Role:

Explain pattern recognition as useful but accountable fast thinking.

This section teaches students that early recognition is not guessing, but it must remain connected to reasoning, reassessment, and verification.

### [[Avoiding Premature Closure]]

Role:

Explain what happens when an early explanation becomes too fixed.

This section teaches students to recognize when they have stopped letting the patient update the explanation.

---

## Tool Decision

No new active tools will be added during initial Slice 02 migration.

Keep these planned, not active:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]

Reason:

The current sections already contain short reasoning checks inside the prose.

Activating tools immediately may make Slice 02 feel too tool-heavy before the pages are tested in the app.

Possible later decision:

- activate [[Clinical Reasoning Check]] first if one tool clearly earns app support

Do not activate [[Pattern Recognition Safety Check]] unless repeated use clearly justifies it.

---

## Glossary Decision

Recommended glossary terms for initial Slice 02 migration:

- clinical reasoning
- working explanation
- uncertainty
- reassessment
- pattern recognition
- cue
- hypothesis
- premature closure
- fixation
- disconfirming cue
- cognitive narrowing

Do not add every possible term automatically.

Only add terms that reduce reading friction in the app.

Leave out for now unless clearly needed:

- verification

Reason:

Verification is useful, but it may not need its own glossary entry unless it becomes a repeated app-facing term.

---

## Related Section Decisions

Use conservative related links.

Only link to sections that are already active in the app or included in Slice 02.

### [[Clinical Reasoning]]

Related sections:

- [[Directives Through Purpose]]
- [[Clinical Recall Without Trivia]]
- [[Meaning Before Memorization]]
- [[Pattern Recognition]]

### [[Pattern Recognition]]

Related sections:

- [[Clinical Reasoning]]
- [[Meaning Before Memorization]]
- [[Clinical Recall Without Trivia]]
- [[Avoiding Premature Closure]]

### [[Avoiding Premature Closure]]

Related sections:

- [[Clinical Reasoning]]
- [[Pattern Recognition]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Directives Through Purpose]]

Do not link to [[Common Errors and How to Learn From Them]] yet.

Reason:

That section is not active in the app yet and belongs to a later Practice Better slice.

---

## Obsidian Placeholder Decision

Do not remove placeholder scaffolding from the three Obsidian files.

The existing vault convention allows placeholder planning material to remain above the rebuilt draft.

During app migration, extract only from:

- App Metadata
- App-Ready Section Draft
- Glossary and Popup Terms

Do not copy placeholder material into the app.

---

## App Migration Boundary

Initial Slice 02 migration may touch:

- `src/content/sections.ts`
- `src/content/glossary.ts`

Do not touch:

- `src/content/tools.ts`
- app routes
- navigation structure
- component architecture
- CSS
- visual branding

No app development beyond content migration is approved yet.

---

## Required Checklist

Before app migration, use:

- [[Repeatable Content Migration Checklist]]

---
---

## Migration Result

Slice 02 has been migrated into the VitalNotes app.

Updated app files:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/learningPath.ts`

Completed checks:

- glossary audit passed
- related links audit passed
- build passed
- Learning Path smoke test passed
- previous and next navigation passed
- glossary chip behavior passed
- related-section cards passed
- visual scan passed

No new active tools were added.

The following tools remain planned, not active:

- [[Clinical Reasoning Check]]
- [[Pattern Recognition Safety Check]]

Commit:

`Add Think Clinically foundations slice`

---

## Current Decision

Slice 02 is complete, migrated, tested, and pushed.

The Think Clinically foundations slice is now live in the app.

Tools remain planned.

No further Slice 02 app changes are needed unless a bug or content issue appears during later review.

Next project step:

Update Obsidian status files to reflect that Slice 02 has shipped.
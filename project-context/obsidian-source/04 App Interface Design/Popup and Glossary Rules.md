# Popup and Glossary Rules

## Purpose

Popups should clarify key concepts without pulling students away from the section.

Their job is to reduce reading friction.

They should help a student keep moving when a term might otherwise slow them down.

Popups should not carry the main teaching.

If a concept is necessary to understand the section, it belongs in the section itself.

---

## Current Status

The first-slice app includes simple glossary popup support.

The first-slice content migration is complete and pushed.

The app now renders real student-facing content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Current related checkpoint:

- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

Current glossary cleanup task:

- [[Glossary Term Audit]]

The next glossary task is not broad expansion.

The next task is to confirm that first-slice glossary IDs in `src/content/sections.ts` match entries in `src/content/glossary.ts`.

---

## Core Principle

A popup should be small enough to read quickly and useful enough to justify appearing.

A good popup helps the student think:

“I remember what that means. I can keep reading.”

It should not make the student feel like they have opened another lesson.

The writing remains the main experience.

---

## Use Popups For

Use popups for terms that appear repeatedly across the guide and may benefit from a quick reminder.

Current core examples include:

- cognitive load
- working memory
- overload
- structure
- reassessment
- retrieval
- recognition
- familiarity
- access
- spacing
- clinical recall
- recall prompt
- clinical cue
- boundary
- trivia
- Anki
- flashcard
- learning strain
- productive difficulty
- wasted difficulty
- meaning
- schema
- pathophysiology
- mechanism
- compensation
- perfusion
- ventilation
- oxygen delivery
- directive intent
- clinical risk
- scope
- contraindication
- Smart Notes
- capture notes
- working notes
- idea maturation
- provisional explanation
- Obsidian
- vault
- markdown
- links
- Inbox
- Reference
- clinical reasoning
- pattern recognition
- premature closure
- metacognition
- reflection
- scenario days
- OSCE preparation
- performance under pressure
- learning path
- Tools Library

Not every term needs to appear in every section.

Use only the terms that reduce friction in that specific reading context.

---

## First-Slice Glossary Audit Targets

During [[Glossary Term Audit]], check whether these potential first-slice glossary IDs are present, consistent, and useful:

- `reflection`
- `performance-under-pressure`
- `directive-intent`
- `recognition`
- `spacing`
- `clinical-recall`
- `anki`
- `links`
- `obsidian`
- `capture-notes`
- `working-notes`
- `transfer`
- `pathophysiology`
- `perfusion`
- `reassessment`

The audit should compare:

- `src/content/sections.ts`
- `src/content/glossary.ts`

Only first-slice glossary terms should be added or normalized during this pass.

Do not use the audit as an excuse to expand the glossary broadly.

---

## Do Not Use Popups For

Do not use popups for:

- every technical word
- obvious terms
- long explanations
- concepts that belong in the main section
- terms that appear once and are clear from context
- planning language meant only for the vault
- internal app structure
- citations or source notes
- anything that becomes a distraction

Do not use popups to make the app feel more interactive.

The writing should remain the main experience.

---

## Popup Style

A good popup is:

- short
- plain-language
- paramedic-relevant
- supportive
- calm
- useful in the moment
- not academic

Avoid:

- textbook phrasing
- overprecision
- multi-paragraph explanations
- motivational language
- jargon chains
- definitions that require more definitions

The best popup gives enough meaning to keep the student oriented, then gets out of the way.

---

## Popup Structure

Suggested fields:

- term
- shortDefinition
- paramedicRelevance
- relatedSections

Example structure:

Term:  
Cognitive Load

Short definition:  
The amount of mental work your brain is trying to manage at one time.

Paramedic relevance:  
It rises quickly when assessment, communication, decision-making, memory, and procedures compete for attention.

Related sections:

- [[Cognitive Load]]
- [[Learning Strain Is Not Always a Personal Problem]]
- [[Performance Under Pressure]]

---

## Length Rules

Most popups should be two short parts:

1. What the term means.
2. Why it matters in paramedic learning or practice.

If a popup needs more than this, consider one of these options:

- shorten the popup
- explain the concept in the section body
- create or revise a glossary entry
- create a tool only if the concept becomes a repeated practical process

A popup should not become a hidden section.

---

## Glossary Page

The full [[Glossary]] page may contain all approved glossary terms.

The [[Glossary]] page should still remain student-facing and plain-language.

It should not become:

- a textbook
- a citation list
- a learning science dictionary
- an internal planning document
- a replacement for section explanations

Use [[Glossary and Popup Map]] as the source of truth for glossary language.

---

## Inline Popup Behavior

Inline glossary support should be subtle.

Possible interaction patterns:

- lightly underlined term
- small info icon
- tap or hover popup
- click to open side card
- glossary drawer on mobile

The current first-slice app uses simple glossary popup support.

Keep this simple until first-slice reader testing shows a real need for change.

Avoid visual clutter.

If too many terms are marked in a paragraph, the section will start to feel interrupted.

---

## Side-Panel or Drawer Behavior

A side-panel or drawer may be useful later if inline popups feel cramped, especially on mobile.

If used, it should:

- open quickly
- close easily
- preserve the reader’s place
- avoid covering too much of the section
- contain only the selected term unless the student chooses to browse more

Do not make the student navigate away from the section just to understand a term.

Do not redesign glossary behavior before [[Glossary Term Audit]] and first-slice reader testing are complete.

---

## Related Sections

Related sections can appear in the full glossary entry.

They do not always need to appear in the popup itself.

Use related sections when they help students continue learning after reading.

Do not turn every popup into a navigation hub.

---

## Current Source of Truth

Popup and glossary language should be maintained in:

- [[Glossary and Popup Map]]
- `src/content/glossary.ts`

Design behavior should stay aligned with:

- [[Content Schema]]
- [[Section Reader Design]]
- [[Navigation Model]]

Tool-related terminology should stay aligned with:

- [[Tool Library Map]]
- [[Tool Drawer Design]]

Development tracking should stay aligned with:

- [[Next Build Tasks]]
- [[Bugs and Fixes]]
- [[App Build Checkpoint 02 - First Slice Content Migration Complete]]

---

## Current First-Slice Glossary Scope

The current first-slice glossary should support:

### [[00 Start Here]]

Terms that help students understand the guide structure, learning path, tools, and how to enter through a current problem.

### [[01 Why Learning Feels Hard]]

Terms related to cognitive load, working memory, overload, structure, familiarity, access, productive difficulty, and wasted difficulty.

### [[02 Build Understanding]]

Terms related to meaning, mechanisms, pathophysiology, compensation, perfusion, clinical risk, directive intent, contraindications, and reassessment.

### [[03 Build Usable Notes]]

Terms related to Smart Notes, capture notes, working notes, idea maturation, Obsidian, vaults, markdown, links, and reference material.

### [[04 Build Recall]]

Terms related to retrieval, spacing, recognition, clinical recall, recall prompts, Anki, flashcards, transfer, cues, and reassessment.

---

## Current Notes

- Terms from [[00 Start Here]] have been added to [[Glossary and Popup Map]].
- Terms from [[01 Why Learning Feels Hard]] have been added.
- Terms from [[02 Build Understanding]] have been added.
- Terms from [[03 Build Usable Notes]] have been added.
- Terms from [[04 Build Recall]] have been added.
- Terms from [[Clinical Recall Prompt Builder]] have been added.
- The glossary should stay practical and selective.
- New glossary terms should be added only when they reduce reading friction across multiple sections.
- Popups should support the app experience, not make it feel more complex.
- [[04 Build Recall]] terms should support reading flow without making VitalNotes feel like an Anki platform or flashcard app.
- [[Glossary Term Audit]] should happen after [[Retro Fix 01 - Bullet List Cleanup]].

---

## App Boundaries

Glossary support should not become:

- a learning science dictionary
- a textbook
- a quiz layer
- a dashboard
- a hidden lesson system
- AI explanation support
- a replacement for section content
- an excuse to over-mark terms in the reader

Do not add:

- AI glossary generation
- user-saved glossary notes
- glossary scoring
- glossary quizzes
- spaced repetition inside glossary entries
- [[Anki Integration]]
- deck management
- automated flashcard generation

---

## Design Rule

Popups should reduce cognitive load.

If a popup interrupts the reader more than it helps, it should not be there.

---

## Next Review

Review this file after:

1. [[Retro Fix 01 - Bullet List Cleanup]]
2. [[Glossary Term Audit]]
3. first-slice reader-quality testing

Do not expand popup behavior before those are complete.
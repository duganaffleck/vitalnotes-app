# Bugs and Fixes

Use this once the app build begins.

This file tracks real technical issues, fixes, workarounds, verification steps, and app-rendering problems.

Do not use it for content drafting issues, architecture questions, or feature ideas.

Those belong in:

- [[Next Build Tasks]]
- [[Open Questions]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Decisions]]

---

## Current Status

The app build has begun.

The first vertical slice has been implemented and pushed.

The approved first-slice content migration is complete.

The first-slice cleanup pass is complete.

The first-slice smoke test has passed.

The app now renders real student-facing guide content across:

- [[00 Start Here]]
- [[01 Why Learning Feels Hard]]
- [[02 Build Understanding]]
- [[03 Build Usable Notes]]
- [[04 Build Recall]]

Current technical status:

- first slice stable
- app runs locally
- app builds successfully
- list rendering cleanup complete
- glossary audit complete
- related-link audit complete
- reader spacing pass complete
- live/deployment state appears stable based on review

Current known technical issues:

- VS Code integrated terminal ConPTY failure
- Codex and Copilot access unreliable

Current active tools:

- [[Directive Meaning Check]]
- [[Smart Note Template]]
- [[Clinical Recall Prompt Builder]]

Do not record speculative issues here.

Only add entries when there is an actual app, build process, deployment process, rendering issue, or technical problem to track.

---

## Bug Template

### YYYY-MM-DD - Bug Title

Status: Open / Fixed / Monitoring / Workaround active

#### Bug

What happened?

#### Expected Behavior

What should have happened?

#### Actual Behavior

What happened instead?

#### Where It Appeared

Terminal / Browser / Vercel / GitHub / Console / App Reader / Other

#### Error Message

Paste the exact error message, if available.

#### File Path

- file path

#### Line Number

Line number, if known?

#### Cause

What caused it, if known?

#### Fix

What changed?

#### Files Changed

- file path

#### Test

How was it verified?

#### Notes

Any assumptions, risks, or follow-up needed.

---

## Fix Rules

When fixing bugs later:

- fix the specific bug
- make the smallest safe change
- preserve existing behavior
- avoid broad refactors
- avoid unrelated styling changes
- avoid changing the content map
- avoid changing section names, tool names, glossary IDs, or cluster names
- avoid adding features during bug fixes
- document the fix after it is verified

Use [[Codex Bugfix Prompt]] for bounded bugfix tasks if Codex becomes reliable later.

For now, manual ChatGPT-guided copy/paste implementation remains the reliable workflow.

---

## 2026-05-06 - VS Code Integrated Terminal ConPTY Failure

Status: Workaround active

### Bug

The VS Code integrated terminal failed to launch because of a native ConPTY error.

### Expected Behavior

The VS Code integrated terminal should open and allow normal terminal commands.

### Actual Behavior

The integrated terminal could not launch reliably.

### Where It Appeared

VS Code integrated terminal.

### Error Message

Native ConPTY launch failure.

Exact full error message not currently recorded in this note.

### Cause

Likely local VS Code or Windows terminal integration issue.

This is not caused by the VitalNotes app code.

### Current Workaround

Use external Windows PowerShell for all terminal commands.

### Verified Working

The following commands work through external Windows PowerShell:

- `npm run build`
- `npm run dev`
- `git add .`
- `git commit -m "..."`
- `git push`

### App Impact

No app code changes are required.

The app can still be built, run, committed, and pushed using the external terminal workflow.

### Follow-Up

Revisit only if the terminal issue slows development.

This does not block app development.

---

## 2026-05-06 - Codex and Copilot Access Unreliable

Status: Workaround active

### Bug

Codex, ChatGPT extension behavior, and GitHub Copilot Chat were unreliable or unavailable during early implementation.

### Expected Behavior

Tool-assisted coding should be available and reliable enough to support app implementation.

###, ChatGPT extension behavior, and GitHub Copilot Chat were unreliable or unavailable during early implementation.

### Expected Behavior

Tool-assisted coding should be available and reliable enough to support app implementation.

### Actual Behavior

The tools were inconsistent enough that they could not be trusted for the critical build path.

### Where It Appeared

VS Code extension workflow.

### Current Workaround

Manual implementation through ChatGPT-guided copy/paste in VS Code.

### App Impact

No app functionality depends on Codex or Copilot.

Do not make Codex or Copilot part of the critical build path for the current app phase.

### Follow-Up

Tool-assisted coding can be reconsidered later, but only after the first slice is stable enough that implementation support does not create drift or hidden changes.

---

## 2026-05-06 - Flattened Bullet Lists in App Reader

Status: Fixed

### Bug

During early content migration, Markdown bullet lists were converted into separate paragraph blocks because the first app reader content model initially supported only headings, paragraphs, and placeholders.

The app reader later gained support for `list` blocks, but some earlier migrated sections still needed retroactive cleanup.

### Expected Behavior

Grouped list content should render as bullet lists or structured list blocks where appropriate.

### Actual Behavior

Some grouped list content appeared visually flat as separate paragraph blocks.

### Where It Appeared

App reader.

Affected first-slice content included sections in:

- [[03 Build Usable Notes]]
- [[02 Build Understanding]]
- [[01 Why Learning Feels Hard]]

Confirmed no list cleanup was needed in:

- [[00 Start Here]]

### File Path

- `src/content/sections.ts`

### Cause

The `list` block type was added late in the first-slice content migration.

Earlier migrated content was shaped before list support existed.

### Fix

Completed [[Retro Fix 01 - Bullet List Cleanup]].

Converted obvious flattened paragraph runs into proper blocks using the current app content model:

```ts
{
  type: 'list',
  items: string[]
}
```

### Files Changed

- `src/content/sections.ts`

### Test

Verified through first-slice reader review.

Checked that:

- lists render as grouped list blocks
- wording remains stable
- section navigation still works
- related sections still work
- related tools still work
- glossary popup behavior still works
- tool drawer behavior still works

### Priority

Fixed.

Run similar cleanup after future migrations only if the issue reappears.

---

## 2026-05-06 - Glossary IDs May Be Missing or Inconsistent

Status: Fixed

### Bug

Some section glossary IDs referred to terms that did not yet exist in `src/content/glossary.ts`.

### Expected Behavior

When a section references a glossary term, the matching entry should exist and render correctly through the glossary popup or panel.

### Actual Behavior

Some referenced glossary IDs were missing or not yet normalized.

### Where It Appeared

First-slice glossary references.

### File Paths

- `src/content/sections.ts`
- `src/content/glossary.ts`

### Cause

Glossary references were added across migrated first-slice sections while the glossary model was still being built.

### Fix

Completed [[Glossary Term Audit]].

Created audit script:

- `scripts/audit-glossary.cjs`

Added missing first-slice glossary entries:

- `directive-intent`
- `performance-under-pressure`
- `perfusion`
- `reflection`

Known unused glossary entries:

- `metacognition`
- `recall`

These remain valid entries and should not be removed just because they are unused in the current first slice.

### Files Changed

- `src/content/glossary.ts`
- `scripts/audit-glossary.cjs`

### Test

Ran glossary audit.

Final result:

- no missing glossary entries
- every referenced glossary term exists

Also checked glossary behavior during first-slice smoke testing.

### Priority

Fixed.

Run `node scripts/audit-glossary.cjs` after future content migrations and before commits.

---

## 2026-05-06 - Related Section or Tool Links Could Drift

Status: Fixed for first slice / Monitoring for future slices

### Bug

Related section and related tool references could drift from actual app content IDs as content is migrated or edited.

One future-facing related section reference appeared before that section existed in the app content model.

### Expected Behavior

Every related section ID and related tool ID should point to an existing app content object.

### Actual Behavior

One related section reference pointed to a future section that was not part of the current first slice.

### Where It Appeared

App reader related links.

Specific affected section:

- `learning-strain-is-not-always-a-personal-problem`

### File Paths

- `src/content/sections.ts`
- `src/content/tools.ts`
- `scripts/audit-related-links.cjs`

### Cause

A related link pointed forward to a section outside the current first-slice app content.

### Fix

Created audit script:

- `scripts/audit-related-links.cjs`

The audit checks:

- every related section ID exists
- every related tool ID exists
- related sections and related tools per section

Fixed the broken reference by removing:

- `scenario-days-as-learning-tools`

Replaced it with:

- `retrieval-and-spaced-learning`

### Files Changed

- `src/content/sections.ts`
- `scripts/audit-related-links.cjs`

### Test

Ran related-link audit.

Final result:

- no missing related sections
- no missing related tools

Human related-link review was also completed across the first slice.

### Priority

Fixed for the first slice.

Run `node scripts/audit-related-links.cjs` after future content migrations and before commits.

---

## 2026-05-06 - Reader Spacing Needed Demo-Readiness Adjustment

Status: Fixed

### Bug

After real first-slice content was migrated, some reader spacing and related-panel spacing needed a bounded readability pass.

This was not a functional bug, but it affected demo-readiness presentation.

### Expected Behavior

The reader should feel calm, readable, and appropriate for student-facing guide content.

Lists, headings, related panels, glossary panels, and tool drawer content should have enough spacing to read comfortably.

### Actual Behavior

The app was functional, but some spacing needed refinement once real content was visible.

### Where It Appeared

App reader and supporting panels.

### File Path

- `src/styles/index.css`

### Cause

The app shell was initially built before all real first-slice content was migrated.

Real content revealed the actual typography and spacing needs.

### Fix

Completed a bounded reader typography and spacing pass.

Refined:

- section body spacing
- section heading rhythm
- section list spacing
- glossary panel spacing
- related panel spacing
- previous / next navigation spacing
- tool drawer readability

### Files Changed

- `src/styles/index.css`

### Test

Reviewed locally in browser.

Smoke test checked representative reader pages, tool drawers, glossary behavior, related links, and mobile-ish browser width behavior.

### Priority

Fixed.

Do not treat this as permission for broad visual redesign.

Future visual changes should remain small, local, and tied to readability or consistency issues.

---

## Current Monitoring Items

### Button versus Text-Link Consistency

Status: Deferred

This is not a bug.

Later UI review should decide which navigation actions should render as buttons versus text links.

Specific item to revisit:

- Learning Path `Open section` affordance compared with full button treatments

Track this in [[Deferred Ideas]], not as an active bug.

### Possible Source Filename Typo

Status: Monitoring only if confirmed in vault

A copied source file previously appeared as:

- `Where to Being.md`

Expected title:

- [[Where to Begin]]

Do not rename anything based on memory alone.

Confirm whether this typo exists in the real Obsidian vault before changing anything.
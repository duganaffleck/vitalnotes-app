# Bugs and Fixes

Use this once the app build begins.

This file should track real technical issues, fixes, and verification steps.

Do not use it for content drafting issues, architecture questions, or feature ideas.

Those belong in:

- [[Next Build Tasks]]
- [[Open Questions]]
- [[Feature Ideas]]
- [[Deferred Ideas]]
- [[Decisions]]

---

## Current Status

No app bugs yet.

VS Code app production has not started.

Current phase:

- content rebuild
- Build Recall architecture update pass
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

- complete the Build Recall architecture update pass
- complete the app-readiness checkpoint
- decide whether to begin first app vertical slice or continue into [[../03 Rebuilt Content/05 Think Clinically/Clinical Reasoning]]

Do not add bug entries until there is an actual app, build process, deployment process, or technical issue to record.

---

## Bug Template

### Date

YYYY-MM-DD

### Status

Open / Fixed / Monitoring

### Bug

What happened?

### Expected Behavior

What should have happened?

### Actual Behavior

What happened instead?

### Where It Appeared

Terminal / Browser / Vercel / GitHub / Console / Other

### Error Message

Paste the exact error message, if available.

### File Path

- file path

### Line Number

Line number, if known.

### Cause

What caused it, if known?

### Fix

What changed?

### Files Changed

- file path

### Test

How was it verified?

### Notes

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

Use [[../05 Build Prompts/Codex Bugfix Prompt]] for bounded bugfix tasks.
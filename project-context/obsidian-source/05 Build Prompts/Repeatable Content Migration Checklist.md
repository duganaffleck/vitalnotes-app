# Repeatable Content Migration Checklist

Use this checklist before migrating any new VitalNotes content into the app.

This file exists to prevent the cleanup problems from the first slice from repeating.

It should be used for every future content migration pass, especially when adding or updating sections in:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`

This is not a redesign checklist.

It is a migration safety checklist.

---

## Current Rule

The app supports the guide.

The app does not reinvent the guide.

Before migrating content, confirm that the source material belongs in the current approved app scope and fits the existing Obsidian structure.

Use the Obsidian vault as the source of truth.

Relevant files may include:

- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Release Notes]]
- [[Deferred Ideas]]
- [[Decisions]]
- [[App Build Checkpoint 03 - First Slice Demo Ready]]
- [[MOC - App Interface Design]]
- [[MOC - Build Prompts]]

---

## Before Migration

Confirm these before changing app files.

- [ ] The source section has been approved for migration.
- [ ] The source text comes from the current Obsidian vault or approved source document.
- [ ] The section belongs in the next approved content slice.
- [ ] The section title is stable.
- [ ] The section ID is stable.
- [ ] The section cluster is stable.
- [ ] The next and previous section relationships are known.
- [ ] Related sections are known or intentionally left empty.
- [ ] Related tools are known or intentionally left empty.
- [ ] No new active tool is being added unless explicitly approved.
- [ ] No new route, feature, dashboard, quiz, scoring system, or platform behavior is being introduced.

Do not migrate from memory.

If the source text is unclear, return to the vault before editing the app.

---

## Section Model Check

Before pasting content into `src/content/sections.ts`, confirm the section can be represented using the existing app model.

Current supported body block types:

- heading
- paragraph
- list
- placeholder

Check each section for:

- [ ] Title
- [ ] ID
- [ ] Cluster placement
- [ ] Short description or intro, where used
- [ ] Body content
- [ ] Previous section
- [ ] Next section
- [ ] Related sections
- [ ] Related tools
- [ ] Glossary terms

Do not force unsupported structures into paragraphs.

If the section contains a list, migrate it as a list block.

---

## Content Migration Pass

When migrating a section:

- [ ] Preserve the approved wording unless there is a specific reason to adjust it.
- [ ] Keep paragraph breaks natural.
- [ ] Convert real bullet lists into list blocks.
- [ ] Do not flatten lists into paragraph runs.
- [ ] Do not create decorative formatting.
- [ ] Do not add new student-facing claims.
- [ ] Do not add new tools or workflows unless already approved.
- [ ] Preserve the section’s role in the guide arc.
- [ ] Preserve the student-facing tone.

After each section is migrated, quickly scan for:

- [ ] Accidental repeated paragraphs
- [ ] Missing list items
- [ ] Broken sequence
- [ ] Placeholder text left behind
- [ ] Old section titles
- [ ] Old links or WordPress URLs accidentally pasted into app content
- [ ] Any em dashes introduced during editing

---

## List Block Check

This check is required.

For each migrated section, ask:

- [ ] Are there places where the source clearly had bullets or numbered steps?
- [ ] Did any list become a paragraph by accident?
- [ ] Are short concept groupings easier to read as list blocks?
- [ ] Are numbered workflows preserved in order?
- [ ] Are list items complete and not split awkwardly?

Do not over-list the prose.

Only use list blocks where the source structure or reading flow clearly benefits from it.

---

## Glossary Check

When a section references glossary terms:

- [ ] Confirm every glossary ID used in `src/content/sections.ts` exists in `src/content/glossary.ts`.
- [ ] Do not invent glossary IDs casually.
- [ ] Do not add glossary terms unless they are useful across multiple sections or clearly needed for student understanding.
- [ ] Keep glossary definitions brief, plain-language, and paramedicine-specific.
- [ ] Avoid turning the glossary into a textbook.

Run:

    node scripts/audit-glossary.cjs

Required result:

- [ ] No missing glossary entries.

Known unused glossary entries may remain if they are intentionally being held for later.

---

## Related Link Check

For each migrated section:

- [ ] Related section IDs must exist.
- [ ] Related tool IDs must exist.
- [ ] Related links should help the student move through the guide.
- [ ] Avoid linking forward to sections that are not active unless the app already supports that safely.
- [ ] Avoid related links that feel decorative.
- [ ] Related tools must be active and approved.

Run:

    node scripts/audit-related-links.cjs

Required result:

- [ ] No missing related sections.
- [ ] No missing related tools.

---

## Build Check

After a stable chunk of migration, run:

    npm run build

Required result:

- [ ] Build passes.
- [ ] No TypeScript errors.
- [ ] No broken imports.
- [ ] No syntax errors in content files.

If the build fails, stop and fix the build before continuing migration.

Do not stack more edits on top of a broken build.

---

## Local Smoke Test

Start the app:

    npm run dev

Open:

    http://localhost:5173/

Check representative pages from the migrated slice.

For each checked section:

- [ ] Page opens correctly.
- [ ] Title displays correctly.
- [ ] Section content displays in the correct order.
- [ ] Paragraph spacing feels readable.
- [ ] Lists render as lists.
- [ ] Glossary chips or glossary panel work where relevant.
- [ ] Related sections display correctly.
- [ ] Related tools display correctly.
- [ ] Previous and next navigation works.
- [ ] No obviously broken layout appears on a narrower browser width.

Also check:

- [ ] Learning Path
- [ ] Tools Library, if tools were touched
- [ ] Glossary, if glossary terms were touched

---

## Mobile-ish Layout Check

This does not need to be a full responsive design pass.

Narrow the browser window and check:

- [ ] Cards do not feel crushed.
- [ ] Section text remains readable.
- [ ] Related panels still stack or flow acceptably.
- [ ] Buttons and links remain clickable.
- [ ] No horizontal scrolling appears from content blocks.

Do not begin a broad visual redesign during this step.

Only fix real breakage.

---

## Vault Update Check

After the app migration is stable, update Obsidian only where needed.

Possible files:

- [[Current Project Status]]
- [[Next Build Tasks]]
- [[Release Notes]]
- [[Decisions]]
- [[Deferred Ideas]]
- [[App Build Checkpoint 03 - First Slice Demo Ready]]

Do not update every status file automatically.

Only update files that actually need to reflect the completed work.

Use Obsidian links.

Keep updates factual and concise.

---

## Git Checkpoint

Before committing:

    git status

Confirm the changed files make sense.

Expected files may include:

- `src/content/sections.ts`
- `src/content/glossary.ts`
- `src/content/tools.ts`
- `src/styles/index.css`
- `scripts/audit-glossary.cjs`
- `scripts/audit-related-links.cjs`

Only commit once the app builds and audits pass.

Recommended rhythm:

    npm run build
    node scripts/audit-glossary.cjs
    node scripts/audit-related-links.cjs
    git status
    git add .
    git commit -m "Migrate next VitalNotes content slice"
    git push

Use a more specific commit message when appropriate.

---

## Done Criteria

A migration pass is complete only when:

- [ ] Approved source text has been migrated.
- [ ] Section IDs are stable.
- [ ] Titles are correct.
- [ ] Body content is readable.
- [ ] Lists render properly.
- [ ] Glossary audit passes.
- [ ] Related-link audit passes.
- [ ] `npm run build` passes.
- [ ] Representative pages have been smoke tested.
- [ ] Mobile-ish layout has been checked.
- [ ] Obsidian status files are updated only where needed.
- [ ] Changes are committed and pushed.

---

## Hard Boundaries

Do not use content migration as an excuse to add:

- new app sections outside the approved slice
- new active tools without approval
- dashboards
- quizzes
- scoring
- accounts
- analytics
- AI feedback
- progress tracking
- Anki integration
- deck management
- automated flashcard generation
- CMS behavior
- MDX
- Obsidian import pipeline
- broad routing changes
- broad colour redesign
- broad component refactors

The migration process should keep the app calm, readable, and content-driven.

The writing remains the main experience.
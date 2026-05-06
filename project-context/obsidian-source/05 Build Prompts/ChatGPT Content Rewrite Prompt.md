# ChatGPT Content Rewrite Prompt

Use this prompt when rebuilding a VitalNotes student-facing section.

This prompt is for drafting or rebuilding content.

It is not for app coding, broad restructuring, or changing the content map.

```text
# ChatGPT Content Rewrite Prompt

You are helping rebuild VitalNotes as a student-facing learning guide for paramedic students.

VitalNotes teaches students how to learn paramedicine, not how to memorize more content.

Your job is to rebuild one section inside the established Obsidian vault structure with minimal drift, slop, hallucination, unnecessary restructuring, or generic advice.

Do not reinvent the project.

Do not rename sections unless explicitly instructed.

Do not change the content map.

Do not create loose documents outside the vault structure.

Do not start app development.

## Project Context

VitalNotes is being rebuilt from prior source material into a clearer, smaller, app-ready learning guide.

The old material should be treated as source material, not fixed structure.

Preserve strong thinking.
Reduce repetition.
Sharpen purpose.
Keep the paramedic lens central.

Obsidian is the source of truth.

The future app should render the best parts of the Obsidian content structure, but the current task is content rebuilding, not coding.

## Current Rebuild Status

Drafted clusters:

- 00 Start Here
- 01 Why Learning Feels Hard
- 02 Build Understanding
- 03 Build Usable Notes
- 04 Build Recall

Current active drafted tools:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

Current architecture status:

- Build Recall architecture verification pass is being completed.
- App-readiness checkpoint is next.
- First app vertical slice may begin after the checkpoint.

Next possible content cluster if content drafting continues:

- 05 Think Clinically

Next possible student-facing target:

- Clinical Reasoning

If this prompt is used later, update this status before drafting.

## Core VitalNotes Rules

Follow the VitalNotes rebuild rules:

- Teach students how to learn, reason, practice, recall, reflect, and perform in paramedicine.
- Keep the voice calm, warm, grounded, practical, and instructor-like.
- Write like an experienced paramedic instructor sitting beside the student.
- Use learning science implicitly and practically.
- Keep the paramedic context explicit.
- Avoid em dashes.
- Avoid generic motivation.
- Avoid aphorisms.
- Avoid slogans and polished one-liner endings.
- Avoid academic stiffness.
- Avoid casual flippancy.
- Avoid productivity-app language.
- Avoid over-explaining learning science.
- Do not name-drop books, authors, or theories unless explicitly requested.
- Do not turn the section into a book summary or literature review.
- Preserve strong source material, but do not preserve old structure unnecessarily.
- Write for app-style reading flow: clear sections, natural breaks, useful headings, readable paragraphs, and optional tools only when justified.
- End with forward orientation, not a distilled lesson or inspirational closing.

## Content Map Guardrail

The approved learning path is locked unless explicitly changed by the user.

Current learning path:

1. Start Here
2. Why Learning Feels Hard
3. Build Understanding
4. Build Usable Notes
5. Build Recall
6. Think Clinically
7. Practice Better
8. Perform Under Pressure
9. Reflect and Improve
10. Tools Library

Do not move the section to another cluster unless instructed.

Do not rename neighboring sections.

Do not add new sections unless instructed.

## Section Rebuild Task

Rebuild the section called:

[SECTION TITLE]

This section belongs in the vault at:

[VAULT LOCATION]

This section belongs in the learning path under:

[LEARNING PATH CATEGORY]

Student problem this section solves:

[STUDENT PROBLEM]

Purpose of this section:

[SECTION PURPOSE]

Role in the guide arc:

[ROLE IN GUIDE ARC]

Previous section:

[PREVIOUS SECTION]

Next section:

[NEXT SECTION]

Source material to preserve:

[SOURCE MATERIAL TO PRESERVE]

Source material to reduce, merge, or move elsewhere:

[MATERIAL TO CUT, REDUCE, OR MOVE]

Related sections:

[RELATED SECTIONS]

Related tools, if any:

[RELATED TOOLS]

Possible glossary or popup terms:

[POSSIBLE GLOSSARY TERMS]

## Source Handling Rules

Use source material carefully.

Preserve:

- strong explanations
- useful examples
- accurate paramedic framing
- durable student-facing insights
- concepts that serve the current section role

Reduce or remove:

- repetition
- bloated setup
- generic study advice
- motivational language
- overly polished transitions
- academic explanation that does not help the student
- app planning notes inside student-facing content
- tools that are not earned by repeated use

Move elsewhere:

- glossary definitions
- tool instructions
- app metadata
- internal planning comments
- ideas that belong to a later cluster

## Writing Expectations

The rebuilt section should:

- Open directly into the student problem or tension.
- Explain why the problem happens in paramedic learning.
- Keep the student experience recognizable.
- Use paramedic examples only when they clarify the idea.
- Avoid bloated explanation.
- Avoid thin generic advice.
- Make the learning science felt through the explanation rather than stated as theory.
- Support app-style reading with headings, readable paragraphs, and natural breaks.
- Include a tool, dropdown, or workflow only if it is genuinely reusable.
- Point clearly toward the next section or next learning need.

## Voice and Cadence Rules

Avoid AI-like writing patterns, including:

- excessive one-line paragraphs
- staccato sentence rhythm
- overly neat contrast pairs
- repeated “not this, but that” framing
- polished slogan-like transitions
- dramatic single-sentence emphasis
- generic explanatory staircase structure
- endings that feel too tidy or quotable

Prefer paragraph-level thinking.

The writing should feel like an experienced paramedic instructor explaining something carefully from lived observation. It should sound human, grounded, slightly imperfect where appropriate, and specific to what students actually experience in paramedic school.

Do not over-polish the rhythm.

Do not make every sentence land like a conclusion.

Let paragraphs carry thought naturally.

## Tool Rules

A section does not need a tool to be useful.

Include a tool, dropdown, or workflow only if it:

- introduces a reusable process
- reduces friction
- helps the student return to the idea later
- supports action without interrupting the section

Do not create a tool simply because the app could display one.

Current active drafted tools:

- Directive Meaning Check
- Smart Note Template
- Clinical Recall Prompt Builder

Possible future tools should stay parked unless the section clearly earns them.

Do not create an Anki-specific tool unless repeated section use clearly proves it is needed.

Do not let Anki, flashcards, deck management, or spaced repetition software become the centre of a section unless the section is specifically about using Anki as a limited support. Even then, keep the focus on paramedic learning, clinical recall, reasoning, and transfer.

## Glossary Rules

Suggested glossary terms should be short and plain-language.

Glossary entries should support reading flow.

They should not carry the main teaching.

Only suggest terms that reduce friction across multiple sections.

Do not overbuild the glossary.

## Output Format

Return the response in this format:

# [SECTION TITLE]

## App Metadata

Vault location:
Learning path:
Student problem:
Section purpose:
Role in guide arc:
Previous section:
Next section:
Related sections:
Related tools:
Suggested glossary terms:
Status:

## App-Ready Section Draft

[Write the rebuilt student-facing section here.]

## Justified Tool or Dropdown

Include only if needed.

If no tool is needed, write:

No tool or dropdown recommended for this section.

## Glossary and Popup Terms

List terms that may need short app popups.

For each term, provide a 1 to 3 sentence plain-language definition.

Only include terms that reduce reading friction.

## Notes on Source Handling

Briefly explain:

- What was preserved
- What was reduced
- What was moved elsewhere
- What was intentionally left out

## Quality Check

Confirm briefly:

- Real student problem addressed
- Paramedic context explicit
- Learning science used implicitly
- Tone matches VitalNotes
- No em dashes
- No generic motivational ending
- App-ready structure maintained
- No unnecessary tool added
- Section points forward cleanly
```
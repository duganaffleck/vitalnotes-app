import type { Tool } from './types'

export const tools: Tool[] = [
  {
    id: 'directive-meaning-check',
    title: 'Directive Meaning Check',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Help students understand what a directive is protecting, supporting, or preventing.',
    whenToUse:
      'Use this when a directive feels heavy or unclear, especially around purpose, risk, boundaries, withholding, stopping, patching, or reassessment.',
    steps: [
      'Name the directive or directive decision.',
      'Identify the clinical risk the directive is managing.',
      'Identify what physiology or patient condition the directive is trying to support.',
      'Name the firm boundaries, such as contraindications, patch points, or stopping conditions.',
      'Decide what reassessment would show whether the decision is still appropriate.',
    ],
    fields: [
      {
        id: 'directive',
        label: 'Directive or decision',
        helperText: 'Name the directive, medication, intervention, or decision point.',
      },
      {
        id: 'risk',
        label: 'Clinical risk',
        helperText: 'What harm is this directive trying to prevent or reduce?',
      },
      {
        id: 'support',
        label: 'What it supports',
        helperText: 'What physiology, symptom, or clinical priority is being supported?',
      },
      {
        id: 'boundaries',
        label: 'Boundaries',
        helperText: 'What would make you withhold, stop, patch, or reconsider?',
      },
      {
        id: 'reassessment',
        label: 'Reassessment',
        helperText: 'What would you check after acting?',
      },
    ],
    builderStructure: [],
    relatedSections: ['directives-through-purpose'],
  },
  {
    id: 'smart-note-template',
    title: 'Smart Note Template',
    status: 'drafted',
    toolType: 'template',
    purpose:
      'Help students turn a concept, scenario error, confusing idea, or repeated feedback point into one reusable thinking note.',
    whenToUse:
      'Use this when an idea needs to become clearer, more connected, and easier to return to later.',
    steps: [
      'Choose one idea, not a whole topic.',
      'Write the core claim in your own words.',
      'Explain why the idea matters clinically.',
      'Identify how the idea shows up in assessment, decisions, or scenario performance.',
      'Name a common confusion or error linked to the idea.',
      'Link it to related ideas.',
    ],
    fields: [
      {
        id: 'claim',
        label: 'Claim',
        helperText: 'The core idea in one clear sentence.',
      },
      {
        id: 'explanation',
        label: 'Explanation',
        helperText: 'Why the idea works, in your own words.',
      },
      {
        id: 'clinical-signals',
        label: 'Clinical signals',
        helperText: 'What you would notice in assessment, history, or reassessment.',
      },
      {
        id: 'common-confusion',
        label: 'Common confusion',
        helperText: 'What students often mix up, miss, or overapply.',
      },
      {
        id: 'links',
        label: 'Links',
        helperText: 'Related ideas, decisions, mechanisms, or scenarios.',
      },
    ],
    builderStructure: [],
    relatedSections: [
      'smart-notes-for-paramedic-students',
      'types-of-notes-and-idea-maturation',
      'obsidian-for-learning-paramedicine',
    ],
  },
  {
    id: 'clinical-recall-prompt-builder',
    title: 'Clinical Recall Prompt Builder',
    status: 'drafted',
    toolType: 'prompt-builder',
    purpose:
      'Help students turn facts, notes, scenario errors, directive details, and confusing concepts into recall prompts that support clinical use.',
    whenToUse:
      'Use this when knowledge needs to help you notice, decide, avoid harm, reassess, or explain something during a call, lab, scenario, or OSCE.',
    steps: [
      'Start with the clinical use, not the fact.',
      'Decide whether the prompt should support noticing, deciding, withholding, reassessing, or explaining.',
      'Write the prompt so it requires recall without giving away the answer.',
      'Check that the answer connects to patient care, not just terminology.',
      'Keep Anki optional and secondary. The prompt matters more than the platform.',
    ],
    fields: [
      {
        id: 'source-idea',
        label: 'Source idea',
        helperText: 'What fact, note, scenario error, or concept are you converting?',
      },
      {
        id: 'clinical-use',
        label: 'Clinical use',
        helperText: 'What should this help you notice, decide, reassess, or explain?',
      },
      {
        id: 'prompt',
        label: 'Recall prompt',
        helperText: 'Write the question without giving yourself too many cues.',
      },
      {
        id: 'answer',
        label: 'Expected answer',
        helperText: 'Answer in a way that connects to clinical use.',
      },
      {
        id: 'safety-check',
        label: 'Safety check',
        helperText: 'Does this avoid becoming trivia or platform busywork?',
      },
    ],
    builderStructure: [
      'Notice: What finding or pattern should I recognize?',
      'Decide: What action or priority does this knowledge support?',
      'Withhold: What boundary, contraindication, or risk should stop me?',
      'Reassess: What change would tell me the situation is improving or worsening?',
      'Explain: How would I justify this decision clearly?',
    ],
    relatedSections: ['clinical-recall-without-trivia', 'anki-for-paramedic-learning'],
  },
]

export const activeTools = tools.filter((tool) => tool.status === 'drafted')

export const getToolById = (id: string) =>
  tools.find((tool) => tool.id === id)
import type { Tool } from './types'

export const tools: Tool[] = [
  {
    id: 'directive-meaning-check',
    title: 'Directive Meaning Check',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Use a directive as more than a rule to memorize. Look at what it is trying to protect, support, or prevent.',
    whenToUse:
      'Use this when a directive feels heavy, unclear, or easy to apply mechanically, especially around risk, withholding, stopping, patching, or reassessment.',
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
        example: {
      context:
        'A student is reviewing oxygen use after a shortness of breath scenario where the patient was anxious, tachypneic, and sitting upright, but their saturation stayed around 95 percent.',
      entries: [
        {
          label: 'Directive or decision',
          text: 'Oxygen administration for a patient with shortness of breath.',
        },
        {
          label: 'Clinical risk',
          text: 'The student is trying to avoid both undertreating true hypoxia and applying oxygen automatically when it is not clearly supporting the patient.',
        },
        {
          label: 'What it supports',
          text: 'Oxygen should support oxygen delivery when assessment suggests hypoxia, increased work of breathing, poor perfusion, altered mental status, or deterioration.',
        },
        {
          label: 'Boundaries',
          text: 'A normal saturation with good waveform quality does not end the assessment. The student still needs to consider work of breathing, skin, mental status, trajectory, and whether the patient is improving or tiring.',
        },
        {
          label: 'Reassessment',
          text: 'After any decision, reassess respiratory effort, SpO2 waveform quality, lung sounds, mental status, skin, positioning, and whether the patient is becoming more or less able to speak.',
        },
      ],
      nextAdjustment:
        'In the next respiratory scenario, the student will explain oxygen decisions using patient condition and trajectory, not saturation alone.',
    },
    relatedSections: ['directives-through-purpose'],
  },
  {
    id: 'smart-note-template',
    title: 'Smart Note Template',
    status: 'drafted',
    toolType: 'template',
    purpose:
      'Turn one concept, scenario error, confusing idea, or repeated feedback point into a note you can actually use again.',
    whenToUse:
      'Use this when an idea keeps showing up in class, lab, feedback, or scenarios, and you need to make better sense of it.',
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
        example: {
      context:
        'A student keeps mixing up wheezing that improves because treatment is working with wheezing that becomes quieter because the patient is tiring.',
      entries: [
        {
          label: 'Claim',
          text: 'Quieter lung sounds after treatment are only reassuring if the patient also looks and works better.',
        },
        {
          label: 'Explanation',
          text: 'In obstructive breathing problems, airflow can improve after treatment, but worsening fatigue can also reduce air movement. The sound alone is not enough. The patient’s effort, speech, mental status, and overall trend decide what the change means.',
        },
        {
          label: 'Clinical signals',
          text: 'Accessory muscle use, ability to speak, posture, mental status, respiratory rate, SpO2 trend, ETCO2 if available, and whether the patient looks relieved or exhausted.',
        },
        {
          label: 'Common confusion',
          text: 'Students sometimes hear less wheezing and assume improvement before checking whether ventilation is actually better.',
        },
        {
          label: 'Links',
          text: 'Work of breathing, respiratory fatigue, reassessment after intervention, asthma patterns, pattern recognition safety check.',
        },
      ],
      nextAdjustment:
        'Before the next respiratory lab, the student will review this note and practise saying what reassessment findings would prove improvement.',
    },
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
      'Turn facts, notes, scenario errors, directive details, and confusing concepts into recall prompts that still point back to patient care.',
    whenToUse:
      'Use this when something needs to be remembered in a way that helps you notice, decide, reassess, avoid harm, or explain your reasoning.',
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
        example: {
      context:
        'A student wants to build a recall prompt from a missed reassessment after salbutamol in a respiratory scenario.',
      entries: [
        {
          label: 'Source idea',
          text: 'After bronchodilator treatment, improvement must be confirmed through reassessment rather than assumed.',
        },
        {
          label: 'Clinical use',
          text: 'This should help the student remember what to check after treatment and avoid treating the medication as the end of the decision.',
        },
        {
          label: 'Recall prompt',
          text: 'After salbutamol in a wheezy shortness of breath call, what reassessment findings would tell me the patient is improving rather than tiring?',
        },
        {
          label: 'Expected answer',
          text: 'Work of breathing decreases, speech improves, respiratory rate settles, air entry improves, mental status remains clear or improves, SpO2 trend is stable or improving, and the patient appears less exhausted.',
        },
        {
          label: 'Safety check',
          text: 'This is not trivia. It supports a real reassessment decision during patient care.',
        },
      ],
      nextAdjustment:
        'The student will build recall prompts around post-treatment decisions, not just medication indications.',
    },
    relatedSections: ['clinical-recall-without-trivia', 'anki-for-paramedic-learning'],
  },
  {
    id: 'scenario-day-reset',
    title: 'Scenario Day Reset',
    status: 'drafted',
    toolType: 'reset',
    purpose:
      'Take one useful adjustment from a scenario and carry it into the next attempt.',
    whenToUse:
      'Use this between scenarios or after feedback when the last run felt rough and you need one practical thing to try next.',
    steps: [
      'Name the main pattern from the last run.',
      'Choose one adjustment small enough to carry forward.',
      'Decide where that adjustment will probably matter next.',
      'Test it deliberately in the next attempt.',
      'Check whether the pattern changed, even slightly.',
    ],
    fields: [
      {
        id: 'pattern',
        label: 'Pattern',
        helperText:
          'What was the main pattern from the last scenario? Look for the shape of the issue, not every mistake.',
      },
      {
        id: 'one-adjustment',
        label: 'One adjustment',
        helperText:
          'What is one specific change you can carry into the next attempt?',
      },
      {
        id: 'next-moment',
        label: 'Next moment to test it',
        helperText:
          'Where will this adjustment probably matter in the next scenario?',
      },
    ],
    builderStructure: [],
        example: {
      context:
        'A student finished a sepsis scenario feeling scattered. They completed many assessment pieces but delayed transport while trying to make the diagnosis feel certain.',
      entries: [
        {
          label: 'Pattern',
          text: 'The student kept gathering information after enough risk was already present to justify transport and ongoing reassessment.',
        },
        {
          label: 'One adjustment',
          text: 'Name the working concern earlier: “This patient may be septic or systemically unwell, and the safest plan is early transport with reassessment.”',
        },
        {
          label: 'Next moment to test it',
          text: 'In the next scenario, the student will name the main risk after the first full set of vitals and initial history, then decide whether assessment is still changing care or only delaying movement.',
        },
      ],
      nextAdjustment:
        'Carry one phrase into the next room: “What is the safest plan if this is worse than it looks?”',
    },
    relatedSections: [
      'scenario-days-as-learning-tools',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
    ],
  },
  {
  id: 'osce-reset',
  title: 'OSCE Reset',
  status: 'drafted',
  toolType: 'reset',
  purpose:
    'Return to patient care during an OSCE when pressure causes rushing, freezing, fixation, over-explaining, or missed reassessment.',
  whenToUse:
    'Use this during OSCE preparation or inside a station when your attention narrows and you need to get back to the patient in front of you.',
  steps: [
    'Name the primary risk right now.',
    'Return to the structure that fits this point in the call.',
    'Choose the next patient-facing action.',
    'Reassess what should change after that action.',
  ],
  fields: [
    {
      id: 'primary-risk',
      label: 'Primary risk',
      helperText:
        'What is the main patient risk right now? This does not need to be the final diagnosis.',
    },
    {
      id: 'return-structure',
      label: 'Return structure',
      helperText:
        'What structure should you return to: primary assessment, vitals, history, directive boundary, transport decision, communication, or reassessment?',
    },
    {
      id: 'next-action',
      label: 'Next patient-facing action',
      helperText:
        'What is the next small action that moves patient care forward?',
    },
    {
      id: 'reassessment',
      label: 'Reassessment',
      helperText:
        'After that action, what should you check to see whether the patient, plan, or explanation has changed?',
    },
  ],
  builderStructure: [
    'Risk: What is the main patient risk right now?',
    'Structure: What part of the call do I return to?',
    'Action: What is the next patient-facing action?',
    'Reassess: What should I check after that action?',
  ],
      example: {
      context:
        'During an OSCE chest pain station, a student feels time pressure and starts rushing toward treatment before finishing the safety checks around nitroglycerin.',
      entries: [
        {
          label: 'Primary risk',
          text: 'Possible cardiac ischemia, with the added risk of unsafe medication use if contraindications or blood pressure trends are missed.',
        },
        {
          label: 'Return structure',
          text: 'Return to the medication safety structure: indication, vital signs, contraindications, medication check, patient explanation, reassessment plan.',
        },
        {
          label: 'Next patient-facing action',
          text: 'Pause, confirm blood pressure and relevant contraindications, explain the medication briefly, then proceed only if the decision remains appropriate.',
        },
        {
          label: 'Reassessment',
          text: 'Recheck pain, blood pressure, patient appearance, symptoms, and whether the working explanation or transport priority has changed.',
        },
      ],
      nextAdjustment:
        'Practise a short reset phrase before the next OSCE: “Risk, structure, action, reassess.”',
    },
  relatedSections: [
    'osce-preparation',
    'performance-under-pressure',
    'resetting-when-thinking-narrows',
  ],
},
  {
    id: 'reflection-without-journaling-tool',
    title: 'Reflection Without Journaling Tool',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Pull one useful adjustment from a scenario, OSCE, lab, placement moment, or feedback conversation without writing a full reflection.',
    whenToUse:
      'Use this after performance or feedback when one moment matters, but replaying the whole call would not help.',
    steps: [
      'Choose one moment where a decision, uncertainty, or feedback point mattered.',
      'Name what shaped your action in that moment.',
      'Choose one adjustment you can carry into the next attempt.',
      'Stop once the adjustment is clear enough to test.',
    ],
    fields: [
      {
        id: 'one-moment',
        label: 'One moment',
        helperText:
          'What specific moment are you reflecting on? Keep it smaller than the whole call.',
      },
      {
        id: 'what-shaped-it',
        label: 'What shaped it',
        helperText:
          'What were you noticing, assuming, feeling, or prioritizing at the time?',
      },
      {
        id: 'one-adjustment',
        label: 'One adjustment',
        helperText:
          'What is one specific thing you will notice or do differently next time?',
      },
    ],
    builderStructure: [
      'Moment: What specific point in the performance matters?',
      'Shape: What attention, assumption, pressure, or structure influenced the action?',
      'Adjustment: What will I notice or do differently next time?',
    ],
        example: {
      context:
        'A student ran a respiratory scenario, gave treatment appropriately, then moved on without reassessing whether the patient was improving.',
      entries: [
        {
          label: 'One moment',
          text: 'The moment immediately after salbutamol was administered.',
        },
        {
          label: 'What was happening',
          text: 'The student felt relieved because an appropriate intervention had been completed and started thinking about the next task.',
        },
        {
          label: 'What the student focused on',
          text: 'Medication completion, equipment cleanup, and moving the scenario forward.',
        },
        {
          label: 'What was missed',
          text: 'The treatment had not been tested. The student did not reassess work of breathing, speech, lung sounds, mental status, SpO2 trend, or fatigue.',
        },
        {
          label: 'Adjustment',
          text: 'After every meaningful intervention, pause long enough to ask, “Did this change the patient, or only change what I did?”',
        },
      ],
      nextAdjustment:
        'In the next scenario, the student will build reassessment into the action itself: treat, look again, then decide.',
    },
    relatedSections: [
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
      'scenario-days-as-learning-tools',
      'focused-practice-after-feedback',
      'resetting-when-thinking-narrows',
    ],
  },
  {
    id: 'five-whys-tool',
    title: 'Five Whys Tool',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Trace a repeated or confusing mistake back to something useful to practise, instead of only fixing the surface behaviour.',
    whenToUse:
      'Use this when feedback sounds right but you are not sure what to do with it, or when the same kind of mistake keeps returning.',
    steps: [
      'Choose one mistake, delay, or repeated pattern.',
      'Ask what led to it, using why questions without turning them into self-blame.',
      'Stop when the answer points to learning, structure, reasoning, preparation, or attention.',
      'Turn that endpoint into one adjustment for next time.',
    ],
    fields: [
      {
        id: 'surface-mistake',
        label: 'Surface mistake',
        helperText:
          'What happened on the surface? Name the moment, not your whole performance.',
      },
      {
        id: 'why-chain',
        label: 'Why chain',
        helperText:
          'What led to this? Keep asking until the answer becomes useful rather than judgmental.',
      },
      {
        id: 'learning-target',
        label: 'Learning target',
        helperText:
          'What part of your learning, structure, reasoning, or preparation needs support?',
      },
      {
        id: 'next-adjustment',
        label: 'Next adjustment',
        helperText:
          'What is one specific change you can test in the next attempt?',
      },
    ],
    builderStructure: [
      'What happened?',
      'What made that response more likely at the time?',
      'What assumption, structure, or knowledge gap shaped it?',
      'What learning target does this point toward?',
      'What adjustment will I test next?',
    ],
        example: {
      context:
        'A student delayed nitroglycerin in a chest pain scenario because they were waiting for the presentation to feel certain.',
      entries: [
        {
          label: 'Surface mistake',
          text: 'Nitroglycerin was delayed even though the patient had ongoing chest pain and no clear contraindication after assessment.',
        },
        {
          label: 'Why 1',
          text: 'The student was unsure the pain was cardiac.',
        },
        {
          label: 'Why 2',
          text: 'They treated nitroglycerin as something given only after certainty rather than after a safe, indicated decision point.',
        },
        {
          label: 'Why 3',
          text: 'Their directive review focused on thresholds and permission, not on what risk the directive is helping manage.',
        },
        {
          label: 'Learning target',
          text: 'Understand nitroglycerin as a risk-managed decision within boundaries, not as a reward for diagnostic certainty.',
        },
      ],
      nextAdjustment:
        'Before the next cardiac scenario, the student will practise explaining when nitro is indicated, when it is unsafe, and what reassessment should follow.',
    },
    relatedSections: [
      'the-five-whys',
      'reflection-without-journaling',
      'turning-feedback-into-action',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
      'avoiding-premature-closure',
    ],
  },
  {
    id: 'clinical-reasoning-check',
    title: 'Clinical Reasoning Check',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Check whether your current explanation is supported, flexible, and safe enough to guide what you do next.',
    whenToUse:
      'Use this during study, debrief, scenario preparation, or reflection when you need to review a decision before everything feels certain.',
    steps: [
      'Name what you think is happening right now.',
      'Identify what supports that explanation.',
      'Identify what does not fit or still needs checking.',
      'Choose the safest action while the picture develops.',
      'Decide what reassessment would make you change course.',
    ],
    fields: [
      {
        id: 'working-explanation',
        label: 'Working explanation',
        helperText:
          'What do you think is happening right now? Hold it as a working explanation, not a final answer.',
      },
      {
        id: 'supports-it',
        label: 'What supports it',
        helperText:
          'What cues, findings, history, or response patterns support this explanation?',
      },
      {
        id: 'does-not-fit',
        label: 'What does not fit',
        helperText:
          'What finding, cue, or uncertainty should keep your thinking flexible?',
      },
      {
        id: 'safest-action',
        label: 'Safest action',
        helperText:
          'What action is safe and useful while you continue to clarify the problem?',
      },
      {
        id: 'change-course',
        label: 'Change course cue',
        helperText:
          'What reassessment finding or new information would make you revise your explanation or plan?',
      },
    ],
    builderStructure: [
      'Explain: What do I think is happening right now?',
      'Support: What information supports that explanation?',
      'Test: What does not fit or still needs checking?',
      'Act: What is the safest action while I clarify?',
      'Reassess: What would make me change course?',
    ],
        example: {
      context:
        'A student locked onto asthma because the patient was wheezy, but missed signs that the patient was becoming fatigued.',
      entries: [
        {
          label: 'Working explanation',
          text: 'The patient may be having an asthma exacerbation or another obstructive respiratory problem.',
        },
        {
          label: 'What supports it',
          text: 'Wheezing, shortness of breath, increased work of breathing, history of inhaler use, and anxiety related to breathing difficulty.',
        },
        {
          label: 'What does not fit',
          text: 'The patient is becoming quieter, speaking less, looking tired, and showing less obvious air movement after the initial presentation.',
        },
        {
          label: 'Safest action',
          text: 'Continue appropriate respiratory management, reassess ventilation and fatigue closely, prepare for escalation, and avoid assuming quieter lungs mean improvement.',
        },
        {
          label: 'Change course cue',
          text: 'Worsening mental status, decreasing ability to speak, poor air entry, rising exhaustion, deteriorating vitals, or failure to improve after treatment.',
        },
      ],
      nextAdjustment:
        'The student will treat the first impression as a working explanation and actively search for signs that it is failing.',
    },
    relatedSections: [
      'clinical-reasoning',
      'pattern-recognition',
      'avoiding-premature-closure',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  }
]

export const activeTools = tools.filter((tool) => tool.status === 'drafted')

export const getToolById = (id: string) =>
  tools.find((tool) => tool.id === id)

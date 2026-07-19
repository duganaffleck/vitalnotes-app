import type { GlossaryTerm } from './types'

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'adjustment',
    term: 'Adjustment',
    shortDefinition:
      'One specific change a student carries into the next attempt.',
    paramedicRelevance:
      'Useful only when it is concrete enough to test: “reassess vitals before transport” is an adjustment; “do better” is not.',
    relatedSections: [
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
      'focused-practice-after-feedback',
    ],
  },
  {
    id: 'capture-notes',
    term: 'Capture notes',
    shortDefinition:
      'Fast, rough notes used to catch ideas, questions, or scenario observations before they disappear.',
    paramedicRelevance:
      'They do not need to be polished. Their job is to hold the moment until you have time to process it properly.',
    relatedSections: ['types-of-notes-and-idea-maturation'],
  },
  {
    id: 'clinical-reasoning',
    term: 'Clinical reasoning',
    shortDefinition:
      'The process of forming, testing, and adjusting an explanation of what is happening with a patient.',
    paramedicRelevance:
      'Students who reason clinically can act safely before certainty arrives and stay open to new information as the call develops.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'meaning-before-memorization',
      'directives-through-purpose',
      'clinical-reasoning',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'clinical-recall',
    term: 'Clinical recall',
    shortDefinition:
      'Recall practice shaped around clinical use rather than isolated facts.',
    paramedicRelevance:
      'The goal is access during a moving call, not recognition during a review session.',
    relatedSections: ['clinical-recall-without-trivia', 'anki-for-paramedic-learning'],
  },
  {
    id: 'cognitive-load',
    term: 'Cognitive load',
    shortDefinition:
      'The amount of mental demand placed on working memory at one time.',
    paramedicRelevance:
      'Labs, scenarios, and OSCEs increase load because assessment, communication, decisions, and skills all compete for attention simultaneously.',
    relatedSections: [
      'cognitive-load',
      'learning-strain-is-not-always-a-personal-problem',
      'smart-notes-for-paramedic-students',
    ],
  },
  {
    id: 'cognitive-narrowing',
    term: 'Cognitive narrowing',
    shortDefinition:
      'The tendency for attention to become tighter under pressure.',
    paramedicRelevance:
      'Narrowing can help with focus, but it also makes it easier to miss findings that fall outside the immediate task or first impression.',
    relatedSections: [
      'cognitive-load',
      'clinical-reasoning',
      'avoiding-premature-closure',
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
      'reflection-without-journaling',
      'the-five-whys',
    ],
  },
  {
    id: 'contraindication',
    term: 'Contraindication',
    shortDefinition:
      'A condition or finding that makes an intervention unsafe or inappropriate.',
    paramedicRelevance:
      'Understanding why a contraindication exists helps students withhold treatment safely instead of treating directives as wording to memorize around.',
    relatedSections: ['directives-through-purpose'],
  },
  {
    id: 'cue',
    term: 'Cue',
    shortDefinition:
      'A piece of information that may point toward a pattern, concern, or change in the patient.',
    paramedicRelevance:
      'Cues can include vital signs, appearance, scene details, history, behaviour, or response to treatment.',
    relatedSections: ['pattern-recognition', 'avoiding-premature-closure'],
  },
  {
    id: 'deliberate-practice',
    term: 'Deliberate practice',
    shortDefinition:
      'Focused practice aimed at improving one specific part of performance.',
    paramedicRelevance:
      'Paramedic students use deliberate practice by choosing a target before the scenario, not just running through it and hoping things improve.',
    relatedSections: [
      'scenario-days-as-learning-tools',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
    ],
  },
  {
    id: 'directive',
    term: 'Directive',
    shortDefinition:
      'A structured clinical rule that guides paramedic care within defined indications, conditions, and boundaries.',
    paramedicRelevance:
      'Directives are most useful when students understand what risk they are managing, not just what the steps say.',
    relatedSections: ['directives-through-purpose'],
  },
  {
    id: 'directive-intent',
    term: 'Directive intent',
    shortDefinition:
      'The purpose behind a directive, including the risk it is managing and the boundary it creates.',
    paramedicRelevance:
      'Students who understand intent can apply directives appropriately in presentations that do not match the textbook version.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'where-to-begin',
      'directives-through-purpose',
    ],
  },
  {
    id: 'disconfirming-cue',
    term: 'Disconfirming cue',
    shortDefinition:
      'A finding that does not fit your current explanation.',
    paramedicRelevance:
      'Disconfirming cues are the earliest signal that a working explanation may need to be revised.',
    relatedSections: ['clinical-reasoning', 'avoiding-premature-closure'],
  },
  {
    id: 'error-pattern',
    term: 'Error pattern',
    shortDefinition:
      'A repeated type of mistake that shows where learning or reasoning is not yet stable.',
    paramedicRelevance:
      'Naming the pattern, whether it is recall, reassessment, fixation, or communication, points toward what actually needs to change.',
    relatedSections: [
      'common-errors-and-what-they-reveal',
      'scenario-days-as-learning-tools',
      'focused-practice-after-feedback',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'evaluation-pressure',
    term: 'Evaluation pressure',
    shortDefinition:
      'The added mental load that appears when performance is being watched, timed, or marked.',
    paramedicRelevance:
      'Evaluation pressure can change how students assess, communicate, and reassess in ways they do not notice until after the scenario.',
    relatedSections: [
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
    ],
  },
  {
    id: 'feedback',
    term: 'Feedback',
    shortDefinition:
      'Information about performance that identifies what to adjust next.',
    paramedicRelevance:
      'Feedback without an adjustment is just a comment. It becomes useful when it changes the next attempt in a specific, testable way.',
    relatedSections: [
      'scenario-days-as-learning-tools',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'five-whys',
    term: 'Five Whys',
    shortDefinition:
      'A brief questioning structure used to trace a mistake back to an actionable learning target.',
    paramedicRelevance:
      'Students use the Five Whys to look beneath a surface error and find whether the real issue involves reasoning, preparation, attention, structure, or understanding.',
    relatedSections: [
      'the-five-whys',
      'common-errors-and-what-they-reveal',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'fixation',
    term: 'Fixation',
    shortDefinition:
      'When attention becomes stuck on one explanation, task, or cue.',
    paramedicRelevance:
      'Fixation makes it harder to notice broader patient changes, reassessment needs, or information that does not fit the first impression.',
    relatedSections: [
      'cognitive-load',
      'pattern-recognition',
      'avoiding-premature-closure',
    ],
  },
  {
    id: 'focused-practice',
    term: 'Focused practice',
    shortDefinition:
      'Practice organized around one clear improvement target.',
    paramedicRelevance:
      'Focused practice avoids the trap of trying to fix everything at once after difficult feedback.',
    relatedSections: [
      'focused-practice-after-feedback',
      'common-errors-and-what-they-reveal',
      'scenario-days-as-learning-tools',
    ],
  },
  {
    id: 'hypothesis',
    term: 'Hypothesis',
    shortDefinition:
      'A possible explanation that still needs to be tested against new information.',
    paramedicRelevance:
      'Treating early impressions as hypotheses helps students use pattern recognition without closing the call prematurely.',
    relatedSections: ['clinical-reasoning', 'pattern-recognition'],
  },
  {
    id: 'meaning',
    term: 'Meaning',
    shortDefinition:
      'The relationships between ideas that make facts usable.',
    paramedicRelevance:
      'Students with meaning can interpret findings and anticipate change; students without it are carrying a list they cannot act on under pressure.',
    relatedSections: ['meaning-before-memorization'],
  },
  {
    id: 'metacognition',
    term: 'Metacognition',
    shortDefinition:
      'Awareness of how your own thinking and learning are behaving.',
    paramedicRelevance:
      'Students apply metacognition when they notice overload, fixation, false confidence, or a repeated error before it takes over the scenario.',
    relatedSections: [
      'learning-strain-is-not-always-a-personal-problem',
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'osce',
    term: 'OSCE',
    shortDefinition:
      'A structured practical assessment where students manage a simulated patient scenario while being observed and evaluated.',
    paramedicRelevance:
      'OSCEs test whether assessment, reasoning, communication, and reassessment remain usable when performance is being measured.',
    relatedSections: [
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
    ],
  },
  {
    id: 'pathophysiology',
    term: 'Pathophysiology',
    shortDefinition:
      'The study of how body systems fail, compensate, and change during illness or injury.',
    paramedicRelevance:
      'Mechanism-based understanding helps students reason through unclear or evolving presentations instead of pattern-matching against a memorized list.',
    relatedSections: ['pathophysiology-through-patterns'],
  },
  {
    id: 'pattern-recognition',
    term: 'Pattern recognition',
    shortDefinition:
      'The ability to notice familiar clusters of findings, context, and patient behaviour.',
    paramedicRelevance:
      'Pattern recognition helps students recognize likely problems sooner, but it still needs to be checked against the actual patient in front of them.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'meaning-before-memorization',
      'pathophysiology-through-patterns',
      'pattern-recognition',
    ],
  },
  {
    id: 'performance-under-pressure',
    term: 'Performance under pressure',
    shortDefinition:
      'The ability to keep thinking, structure, and decision-making usable when stress and cognitive load increase.',
    paramedicRelevance:
      'Most paramedic learning systems work at rest. The goal is building systems that still hold up when the call is moving.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'where-to-begin',
      'cognitive-load',
      'why-studying-feels-productive-but-fails-under-pressure',
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
      'reflection-without-journaling',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'perfusion',
    term: 'Perfusion',
    shortDefinition:
      'The movement of blood through the body to deliver oxygen and nutrients to tissues.',
    paramedicRelevance:
      'Perfusion connects vital signs, skin signs, mental status, compensatory responses, and shock patterns during assessment.',
    relatedSections: ['pathophysiology-through-patterns'],
  },
  {
    id: 'practice-target',
    term: 'Practice target',
    shortDefinition:
      'One specific adjustment carried deliberately into the next practice attempt.',
    paramedicRelevance:
      'Practice targets keep improvement focused on something the student can actually test, rather than a general intention to do better.',
    relatedSections: [
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
      'scenario-days-as-learning-tools',
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'premature-closure',
    term: 'Premature closure',
    shortDefinition:
      'Settling on an explanation too early and no longer noticing information that should prompt reconsideration.',
    paramedicRelevance:
      'Premature closure is most dangerous when early findings are dramatic enough to make the first impression feel complete.',
    relatedSections: [
      'pattern-recognition',
      'avoiding-premature-closure',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'reassessment',
    term: 'Reassessment',
    shortDefinition:
      'The process of checking whether the patient, the plan, and the working explanation still make sense after time passes or care is provided.',
    paramedicRelevance:
      'Reassessment is how students find out whether their first impression was right.',
    relatedSections: [
      'cognitive-load',
      'directives-through-purpose',
      'clinical-recall-without-trivia',
      'clinical-reasoning',
      'avoiding-premature-closure',
    ],
  },
  {
    id: 'recall',
    term: 'Recall',
    shortDefinition:
      'The act of bringing knowledge back without rereading it.',
    paramedicRelevance:
      'Students need recall during labs, OSCEs, and calls. Recognition during a review session does not confirm that recall will work under pressure.',
    relatedSections: ['retrieval-and-spaced-learning'],
  },
  {
    id: 'recognition',
    term: 'Recognition',
    shortDefinition:
      'The feeling that information is familiar when you see it again.',
    paramedicRelevance:
      'Recognition can feel like learning without being learning. It does not guarantee the information will be accessible when it is actually needed.',
    relatedSections: ['why-studying-feels-productive-but-fails-under-pressure'],
  },
  {
    id: 'reflection',
    term: 'Reflection',
    shortDefinition:
      'A focused review of experience that identifies what mattered and what should change next time.',
    paramedicRelevance:
      'Reflection that ends in a specific adjustment is useful. Reflection that loops without resolution becomes rumination.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'how-to-use-this-guide',
      'where-to-begin',
      'learning-strain-is-not-always-a-personal-problem',
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'reset',
    term: 'Reset',
    shortDefinition:
      'A brief return to structure when thinking narrows or the call starts to drift.',
    paramedicRelevance:
      'A reset returns attention to the patient, the main risk, and the next useful action.',
    relatedSections: [
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
      'reflection-without-journaling',
    ],
  },
  {
    id: 'retrieval-practice',
    term: 'Retrieval practice',
    shortDefinition:
      'Practicing recall without immediately checking notes or answers.',
    paramedicRelevance:
      'Retrieval practice strengthens access so knowledge is available when a scenario is moving and there is no time to look it up.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'retrieval-and-spaced-learning',
      'clinical-recall-without-trivia',
    ],
  },
  {
    id: 'rumination',
    term: 'Rumination',
    shortDefinition:
      'Replaying a mistake or performance repeatedly without reaching a clear adjustment.',
    paramedicRelevance:
      'Rumination can feel like productive reflection, but it increases emotional load without improving the next attempt.',
    relatedSections: [
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
  },
  {
    id: 'scenario-based-learning',
    term: 'Scenario-based learning',
    shortDefinition:
      'Learning through realistic cases that require students to apply knowledge, skills, reasoning, communication, and judgment together.',
    paramedicRelevance:
      'Scenarios reveal whether knowledge is usable when a call is moving and multiple demands compete for attention at once.',
    relatedSections: [
      'scenario-days-as-learning-tools',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
    ],
  },
  {
    id: 'schema',
    term: 'Schema',
    shortDefinition:
      'An organized mental structure that helps related information work together.',
    paramedicRelevance:
      'Schemas help students group findings and mechanisms so clinical situations feel like patterns rather than disconnected facts.',
    relatedSections: ['meaning-before-memorization', 'pathophysiology-through-patterns'],
  },
  {
    id: 'smart-notes',
    term: 'Smart Notes',
    shortDefinition:
      'Short notes that explain one idea in your own words and connect it to related ideas.',
    paramedicRelevance:
      'The process of writing them matters as much as the notes themselves; putting an idea into your own words reveals what you actually understand.',
    relatedSections: [
      'where-to-begin',
      'smart-notes-for-paramedic-students',
      'types-of-notes-and-idea-maturation',
      'obsidian-for-learning-paramedicine',
    ],
  },
  {
    id: 'spacing',
    term: 'Spacing',
    shortDefinition:
      'Revisiting learning over time rather than concentrating all review into one period.',
    paramedicRelevance:
      'Spacing keeps knowledge accessible after delay, distraction, and pressure, which is where paramedic students actually need it.',
    relatedSections: ['retrieval-and-spaced-learning', 'anki-for-paramedic-learning'],
  },
  {
    id: 'structure',
    term: 'Structure',
    shortDefinition:
      'A stable way of organizing attention, tasks, or thinking before pressure rises.',
    paramedicRelevance:
      'Structure is most valuable before the call is demanding, not as a recovery tool after things have already gone sideways.',
    relatedSections: ['cognitive-load'],
  },
  {
    id: 'transfer',
    term: 'Transfer',
    shortDefinition:
      'The ability to use learning in a new situation, not only in the original study context.',
    paramedicRelevance:
      'Transfer is the difference between a student who knows something during review and one who can use it during an unfamiliar presentation.',
    relatedSections: ['why-studying-feels-productive-but-fails-under-pressure', 'clinical-recall-without-trivia'],
  },
  {
    id: 'uncertainty',
    term: 'Uncertainty',
    shortDefinition:
      'A situation where the full answer is not clear yet, but decisions still need to be made.',
    paramedicRelevance:
      'Paramedic students often need to manage risk and provide care while assessment, history, and patient response are still developing.',
    relatedSections: [
      'directives-through-purpose',
      'clinical-reasoning',
      'avoiding-premature-closure',
    ],
  },
  {
    id: 'working-explanation',
    term: 'Working explanation',
    shortDefinition:
      'Your best current understanding of what is happening, held loosely enough to change as new information appears.',
    paramedicRelevance:
      'Working explanations allow safe action without false certainty about what is happening.',
    relatedSections: ['clinical-reasoning', 'avoiding-premature-closure'],
  },
  {
    id: 'working-memory',
    term: 'Working memory',
    shortDefinition:
      'The limited mental workspace used to hold and manipulate information in the moment.',
    paramedicRelevance:
      'Working memory fills quickly during paramedic scenarios, which is why structure, distributed practice, and retrieval matter as much as content knowledge.',
    relatedSections: ['cognitive-load'],
  },
  {
    id: 'working-notes',
    term: 'Working notes',
    shortDefinition:
      'Notes used to process material before it becomes a clearer Smart Note.',
    paramedicRelevance:
      'Working notes give students space to wrestle with new ideas before committing them to a form they will actually reuse.',
    relatedSections: ['smart-notes-for-paramedic-students', 'types-of-notes-and-idea-maturation'],
  },
  {
    id: 'mental-rehearsal',
    term: 'Mental rehearsal',
    shortDefinition:
      'Running a call or station in your head, in first person and real time, with the decisions included.',
    paramedicRelevance:
      'Adds practice volume without a lab or partner. The steps you cannot picture concretely are the ones most likely to wobble under evaluation.',
    relatedSections: ['mental-rehearsal-and-visualization', 'osce-preparation'],
  },
  {
    id: 'learning-target',
    term: 'Learning target',
    shortDefinition:
      'The one specific behaviour a practice scenario is built to pull out and test.',
    paramedicRelevance:
      'A diagnosis is not a target. Reassessing after an intervention, or naming a transport decision before feeling certain, is.',
    relatedSections: ['design-and-run-your-own-scenarios', 'scenario-days-as-learning-tools'],
  },
  {
    id: 'consolidation',
    term: 'Consolidation',
    shortDefinition:
      'The process where new learning becomes stable memory, much of which happens during sleep.',
    paramedicRelevance:
      'Trading sleep for one more hour of studying spends the process that was going to lock in the previous six. Skills consolidate overnight too.',
    relatedSections: ['the-week-around-the-work', 'retrieval-and-spaced-learning'],
  },
  {
    id: 'automaticity',
    term: 'Automaticity',
    shortDefinition:
      'When a skill runs with little conscious attention because it has been practiced well past merely correct.',
    paramedicRelevance:
      'An automatic BVM seal or medication draw frees working memory for the patient in front of you. Skills stop taxing attention only after deliberate over-practice.',
    relatedSections: ['training-your-hands', 'cognitive-load'],
  },
]

export const orderedGlossaryTerms = [...glossaryTerms].sort((a, b) =>
  a.term.localeCompare(b.term),
)

export const getGlossaryTermById = (id: string) =>
  glossaryTerms.find((term) => term.id === id)
import type { GlossaryTerm } from './types'

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'anki',
    term: 'Anki',
    shortDefinition:
      'A spaced repetition app that can help students revisit recall prompts over time.',
    paramedicRelevance:
      'Anki can support recall, but it should not become the centre of paramedic learning or replace reasoning.',
    relatedSections: ['anki-for-paramedic-learning', 'clinical-recall-without-trivia'],
  },
  {
    id: 'capture-notes',
    term: 'Capture notes',
    shortDefinition:
      'Fast, rough notes used to catch ideas, questions, or scenario observations before they disappear.',
    paramedicRelevance:
      'Capture notes help students preserve useful learning moments from lectures, labs, and scenarios without trying to polish them immediately.',
    relatedSections: ['types-of-notes-and-idea-maturation'],
  },
 {
  id: 'clinical-reasoning',
  term: 'Clinical reasoning',
  shortDefinition:
    'The process of forming, testing, and adjusting an explanation of what is happening with a patient.',
  paramedicRelevance:
    'Clinical reasoning helps paramedic students act safely before certainty is available, while staying open to new information.',
  relatedSections: [
    'start-here-what-vitalnotes-is',
    'meaning-before-memorization',
    'directives-through-purpose',
    'clinical-reasoning',
  ],
},
  {
    id: 'clinical-recall',
    term: 'Clinical recall',
    shortDefinition:
      'Recall practice shaped around clinical use rather than isolated facts.',
    paramedicRelevance:
      'Clinical recall helps students access knowledge in ways that support assessment, decisions, reassessment, and explanation.',
    relatedSections: ['clinical-recall-without-trivia', 'anki-for-paramedic-learning'],
  },
  {
    id: 'cognitive-load',
    term: 'Cognitive load',
    shortDefinition:
      'The amount of mental demand placed on working memory at one time.',
    paramedicRelevance:
      'Labs, scenarios, and OSCEs increase load because assessment, communication, decisions, and skills compete for attention.',
    relatedSections: [
      'cognitive-load',
      'learning-strain-is-not-always-a-personal-problem',
      'smart-notes-for-paramedic-students',
    ],
  },
  {
    id: 'contraindication',
    term: 'Contraindication',
    shortDefinition:
      'A condition or finding that makes an intervention unsafe or inappropriate.',
    paramedicRelevance:
      'Understanding contraindications by purpose helps students withhold appropriately instead of treating directives as memorized obstacles.',
    relatedSections: ['directives-through-purpose'],
  },
  {
    id: 'directive',
    term: 'Directive',
    shortDefinition:
      'A structured clinical rule that guides paramedic care within defined indications, conditions, and boundaries.',
    paramedicRelevance:
      'Directives support safe decision-making, especially when information is incomplete or pressure is high.',
    relatedSections: ['directives-through-purpose'],
  },
    {
    id: 'directive-intent',
    term: 'Directive intent',
    shortDefinition:
      'The purpose behind a directive, including the risk it is managing and the boundary it creates.',
    paramedicRelevance:
      'Understanding directive intent helps students apply standards safely instead of treating directives as fragile wording to memorize.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'where-to-begin',
      'directives-through-purpose',
    ],
  },
  {
    id: 'learning-path',
    term: 'Learning path',
    shortDefinition:
      'The ordered route through VitalNotes sections.',
    paramedicRelevance:
      'The learning path helps students move from orientation, to understanding, to notes, to recall without treating everything as separate advice.',
    relatedSections: ['how-to-use-this-guide', 'where-to-begin'],
  },
  {
    id: 'links',
    term: 'Links',
    shortDefinition:
      'Connections between notes or ideas that show how one concept influences another.',
    paramedicRelevance:
      'Meaningful links help students connect physiology, directives, errors, and scenario decisions.',
    relatedSections: ['obsidian-for-learning-paramedicine'],
  },
  {
    id: 'meaning',
    term: 'Meaning',
    shortDefinition:
      'The relationships between ideas that make facts usable.',
    paramedicRelevance:
      'Meaning helps students interpret findings, anticipate change, and make decisions without relying only on memorized lists.',
    relatedSections: ['meaning-before-memorization'],
  },
  {
    id: 'metacognition',
    term: 'Metacognition',
    shortDefinition:
      'Awareness of how your own thinking and learning are behaving.',
    paramedicRelevance:
      'Students use metacognition when they notice overload, fixation, false confidence, or repeated errors before those patterns take over.',
    relatedSections: ['learning-strain-is-not-always-a-personal-problem'],
  },
  {
    id: 'obsidian',
    term: 'Obsidian',
    shortDefinition:
      'A note-taking app that stores plain text notes and supports links between ideas.',
    paramedicRelevance:
      'Obsidian can help students build connected notes, but it should remain a simple workspace rather than a productivity project.',
    relatedSections: ['obsidian-for-learning-paramedicine'],
  },
  {
    id: 'pathophysiology',
    term: 'Pathophysiology',
    shortDefinition:
      'The study of how body systems fail, compensate, and change during illness or injury.',
    paramedicRelevance:
      'Mechanism-based pathophysiology helps students reason through unclear or evolving patient presentations.',
    relatedSections: ['pathophysiology-through-patterns'],
  },
{
  id: 'pattern-recognition',
  term: 'Pattern recognition',
  shortDefinition:
    'The ability to notice familiar clusters of findings, context, and patient behavior.',
  paramedicRelevance:
    'Pattern recognition can help students recognize likely problems sooner, but it still needs to be checked against the patient in front of them.',
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
      'The ability to keep thinking, structure, and decision-making available when stress and cognitive load increase.',
    paramedicRelevance:
      'Paramedic students need learning systems that hold up during scenarios, OSCEs, and patient care when attention narrows.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'where-to-begin',
      'cognitive-load',
      'why-studying-feels-productive-but-fails-under-pressure',
    ],
  },
  {
    id: 'perfusion',
    term: 'Perfusion',
    shortDefinition:
      'The movement of blood through the body to deliver oxygen and nutrients to tissues.',
    paramedicRelevance:
      'Perfusion helps students connect vital signs, skin signs, mental status, compensation, and shock patterns during assessment.',
    relatedSections: ['pathophysiology-through-patterns'],
  },
{
  id: 'reassessment',
  term: 'Reassessment',
  shortDefinition:
    'The process of checking whether the patient, your plan, and your explanation still make sense after time passes or care is provided.',
  paramedicRelevance:
    'Reassessment helps students test whether their working explanation still fits as the patient changes or responds to care.',
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
      'The act of bringing knowledge back without simply rereading it.',
    paramedicRelevance:
      'Recall matters because students need access to knowledge during labs, OSCEs, and calls, not only while reviewing notes.',
    relatedSections: ['retrieval-and-spaced-learning'],
  },
  {
    id: 'recognition',
    term: 'Recognition',
    shortDefinition:
      'The feeling that information is familiar when you see it again.',
    paramedicRelevance:
      'Recognition can feel like learning, but it does not always mean the student can use the information under pressure.',
    relatedSections: ['why-studying-feels-productive-but-fails-under-pressure'],
  },
   {
    id: 'reflection',
    term: 'Reflection',
    shortDefinition:
      'A focused review of experience that identifies what mattered and what should change next time.',
    paramedicRelevance:
      'Reflection helps students learn from scenarios, feedback, mistakes, and pressure without turning every difficulty into a personal failure.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'how-to-use-this-guide',
      'where-to-begin',
      'learning-strain-is-not-always-a-personal-problem',
    ],
  },
  {
    id: 'retrieval-practice',
    term: 'Retrieval practice',
    shortDefinition:
      'Practicing recall without immediately looking at notes or answers.',
    paramedicRelevance:
      'Retrieval practice strengthens access to knowledge so it is more available during scenarios and OSCEs.',
    relatedSections: [
      'start-here-what-vitalnotes-is',
      'retrieval-and-spaced-learning',
      'clinical-recall-without-trivia',
    ],
  },
  {
    id: 'schema',
    term: 'Schema',
    shortDefinition:
      'An organized mental structure that helps related information work together.',
    paramedicRelevance:
      'Schemas help students group findings and mechanisms so clinical situations feel less like disconnected facts.',
    relatedSections: ['meaning-before-memorization', 'pathophysiology-through-patterns'],
  },
  {
    id: 'spacing',
    term: 'Spacing',
    shortDefinition:
      'Revisiting learning over time instead of concentrating all review into one short period.',
    paramedicRelevance:
      'Spacing helps knowledge remain accessible after delay, distraction, and pressure.',
    relatedSections: ['retrieval-and-spaced-learning', 'anki-for-paramedic-learning'],
  },
  {
    id: 'smart-notes',
    term: 'Smart Notes',
    shortDefinition:
      'Short notes that explain one idea in your own words and connect it to related ideas.',
    paramedicRelevance:
      'Smart Notes help students build clinical understanding that is easier to revisit, connect, and use later.',
    relatedSections: [
      'where-to-begin',
      'smart-notes-for-paramedic-students',
      'types-of-notes-and-idea-maturation',
      'obsidian-for-learning-paramedicine',
    ],
  },
  {
    id: 'structure',
    term: 'Structure',
    shortDefinition:
      'A stable way of organizing attention, tasks, or thinking before pressure rises.',
    paramedicRelevance:
      'Structure helps students reduce unnecessary load so they can assess, decide, communicate, and reassess more reliably.',
    relatedSections: ['cognitive-load'],
  },
  {
    id: 'transfer',
    term: 'Transfer',
    shortDefinition:
      'The ability to use learning in a new situation, not only in the original study context.',
    paramedicRelevance:
      'Transfer matters because paramedic students need knowledge to work across labs, scenarios, OSCEs, and real patient presentations.',
    relatedSections: [
      'why-studying-feels-productive-but-fails-under-pressure',
      'clinical-recall-without-trivia',
    ],
  },
  {
    id: 'working-memory',
    term: 'Working memory',
    shortDefinition:
      'The limited mental workspace used to hold and manipulate information in the moment.',
    paramedicRelevance:
      'Working memory fills quickly during paramedic scenarios, which is why structure, notes, and retrieval practice matter.',
    relatedSections: ['cognitive-load'],
  },
  {
    id: 'working-notes',
    term: 'Working notes',
    shortDefinition:
      'Notes used to process material before it becomes a clearer Smart Note.',
    paramedicRelevance:
      'Working notes give students space to wrestle with lectures, readings, and feedback before turning ideas into reusable explanations.',
    relatedSections: [
      'smart-notes-for-paramedic-students',
      'types-of-notes-and-idea-maturation',
    ],
  },
  {
  id: 'working-explanation',
  term: 'Working explanation',
  shortDefinition:
    'Your best current understanding of what is happening, held loosely enough to change as new information appears.',
  paramedicRelevance:
    'Working explanations help students act safely without pretending the call is clearer than it is.',
  relatedSections: ['clinical-reasoning', 'avoiding-premature-closure'],
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
  id: 'cue',
  term: 'Cue',
  shortDefinition:
    'A piece of information that may point toward a pattern, concern, or change in the patient.',
  paramedicRelevance:
    'Cues can include vital signs, patient appearance, scene details, history, behavior, or response to treatment.',
  relatedSections: ['pattern-recognition', 'avoiding-premature-closure'],
},
{
  id: 'hypothesis',
  term: 'Hypothesis',
  shortDefinition:
    'A possible explanation that still needs to be tested against new information.',
  paramedicRelevance:
    'Treating early impressions as hypotheses helps students use pattern recognition without closing the call too early.',
  relatedSections: ['clinical-reasoning', 'pattern-recognition'],
},
{
  id: 'premature-closure',
  term: 'Premature closure',
  shortDefinition:
    'Settling on an explanation too early and no longer noticing information that should make you reconsider.',
  paramedicRelevance:
    'Premature closure can cause students to miss changing vitals, poor treatment response, or details that do not fit the first impression.',
  relatedSections: ['pattern-recognition', 'avoiding-premature-closure'],
},
{
  id: 'fixation',
  term: 'Fixation',
  shortDefinition:
    'When attention becomes stuck on one explanation, task, or cue.',
  paramedicRelevance:
    'Fixation can make students miss broader patient changes, reassessment needs, or information that does not fit their first impression.',
  relatedSections: [
    'cognitive-load',
    'pattern-recognition',
    'avoiding-premature-closure',
  ],
},
{
  id: 'disconfirming-cue',
  term: 'Disconfirming cue',
  shortDefinition:
    'A finding that does not fit your current explanation.',
  paramedicRelevance:
    'Disconfirming cues help students notice when a working explanation may be wrong, incomplete, or no longer safe to rely on.',
  relatedSections: ['clinical-reasoning', 'avoiding-premature-closure'],
},
{
  id: 'cognitive-narrowing',
  term: 'Cognitive narrowing',
  shortDefinition:
    'The tendency for attention to become tighter under pressure.',
  paramedicRelevance:
    'Cognitive narrowing can help students focus, but it can also make them miss information outside the immediate task or first impression.',
  relatedSections: [
    'cognitive-load',
    'clinical-reasoning',
    'avoiding-premature-closure',
  ],
},
]

export const orderedGlossaryTerms = [...glossaryTerms].sort((a, b) =>
  a.term.localeCompare(b.term),
)

export const getGlossaryTermById = (id: string) =>
  glossaryTerms.find((term) => term.id === id)
import type { LearningPathCluster } from './types'

export const learningPath: LearningPathCluster[] = [
  {
    id: 'start-here',
    title: '00 Start Here',
    order: 0,
    purpose:
      'Begin with what VitalNotes is for, how the guide is arranged, and where to start.',
    sections: [
      'start-here-what-vitalnotes-is',
      'how-to-use-this-guide',
      'where-to-begin',
    ],
    relatedTools: [],
    status: 'drafted',
  },
  {
    id: 'why-learning-feels-hard',
    title: '01 Why Learning Feels Hard',
    order: 1,
    purpose:
      'Look at why studying can feel familiar but still become difficult in lab, scenarios, or OSCEs.',
    sections: [
      'cognitive-load',
      'why-studying-feels-productive-but-fails-under-pressure',
      'learning-strain-is-not-always-a-personal-problem',
    ],
    relatedTools: [],
    status: 'drafted',
  },
  {
    id: 'build-understanding',
    title: '02 Build Understanding',
    order: 2,
    purpose:
      'Work on connecting facts, physiology, and directives so they make more sense during patient assessment.',
    sections: [
      'meaning-before-memorization',
      'pathophysiology-through-patterns',
      'directives-through-purpose',
    ],
    relatedTools: ['directive-meaning-check'],
    status: 'drafted',
  },
  {
    id: 'build-usable-notes',
    title: '03 Build Usable Notes',
    order: 3,
    purpose:
      'Build notes that explain what matters and give you something useful to return to after class or lab.',
    sections: [
      'smart-notes-for-paramedic-students',
      'types-of-notes-and-idea-maturation',
      'obsidian-for-learning-paramedicine',
    ],
    relatedTools: ['smart-note-template'],
    status: 'drafted',
  },
  {
    id: 'build-recall',
    title: '04 Build Recall',
    order: 4,
    purpose:
      'Practise recall in a way that connects to calls, not just definitions or isolated facts.',
    sections: [
      'retrieval-and-spaced-learning',
      'clinical-recall-without-trivia',
      'anki-for-paramedic-learning',
    ],
    relatedTools: ['clinical-recall-prompt-builder'],
    status: 'drafted',
  },
  {
    id: 'think-clinically',
    title: '05 Think Clinically',
    order: 5,
    purpose:
      'Use incomplete information more carefully, especially when an early impression feels convincing.',
    sections: [
      'clinical-reasoning',
      'pattern-recognition',
      'avoiding-premature-closure',
    ],
    relatedTools: ['clinical-reasoning-check'],
    status: 'drafted',
  },
  {
    id: 'practice-better',
    title: '06 Practice Better',
    order: 6,
    purpose:
      'Use scenarios, common errors, and feedback to choose a smaller and clearer adjustment for next time.',
    sections: [
      'scenario-days-as-learning-tools',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
    ],
    relatedTools: ['scenario-day-reset', 'five-whys-tool'],
    status: 'drafted',
  },
  {
    id: 'perform-under-pressure',
    title: '07 Perform Under Pressure',
    order: 7,
    purpose:
      'Prepare for the moments when being watched, timed, or evaluated makes familiar skills harder to access.',
    sections: [
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
    ],
    relatedTools: ['osce-reset'],
    status: 'drafted',
  },
  {
    id: 'reflect-and-improve',
    title: '08 Reflect and Improve',
    order: 8,
    purpose:
      'Use feedback and difficult performances without turning every mistake into a long personal debrief.',
    sections: [
      'reflection-without-journaling',
      'the-five-whys',
      'turning-feedback-into-action',
    ],
    relatedTools: [
      'reflection-without-journaling-tool',
      'five-whys-tool',
      'clinical-reasoning-check',
    ],
    status: 'drafted',
  },
]

export const orderedLearningPath = [...learningPath].sort(
  (a, b) => a.order - b.order,
)
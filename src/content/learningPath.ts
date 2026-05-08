import type { LearningPathCluster } from './types'

export const learningPath: LearningPathCluster[] = [
  {
    id: 'start-here',
    title: '00 Start Here',
    order: 0,
    purpose:
      'Orient students to what VitalNotes is, how to use it, and where to begin.',
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
      'Help students understand why capable learners lose access under pressure.',
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
      'Show how facts become clinically usable through meaning, patterns, and directive purpose.',
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
      'Help students build notes that support thinking, connection, and later recall.',
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
      'Teach students how to strengthen access to knowledge without turning recall into trivia.',
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
      'Help students reason through incomplete calls, recognize useful patterns, and avoid closing too early.',
    sections: [
      'clinical-reasoning',
      'pattern-recognition',
      'avoiding-premature-closure',
    ],
    relatedTools: [],
    status: 'drafted',
  },
  {
    id: 'practice-better',
    title: '06 Practice Better',
    order: 6,
    purpose:
      'Help students use scenario practice, common error patterns, and feedback to improve deliberately.',
    sections: [
      'scenario-days-as-learning-tools',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
    ],
    relatedTools: ['scenario-day-reset'],
    status: 'drafted',
  },
]
export const orderedLearningPath = [...learningPath].sort(
  (a, b) => a.order - b.order,
)
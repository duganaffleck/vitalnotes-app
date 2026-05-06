import type { PageType, Section } from './types'

type SectionSeed = {
  id: string
  title: string
  subtitle: string
  cluster: string
  clusterOrder: number
  sectionOrder: number
  studentProblem: string
  sectionPurpose: string
  pageType: PageType
  glossaryTerms?: string[]
  relatedTools?: string[]
  relatedSections?: string[]
}

const sectionSeeds: SectionSeed[] = [
  {
    id: 'start-here-what-vitalnotes-is',
    title: 'Start Here - What VitalNotes Is',
    subtitle: 'A guide for learning paramedicine with more structure and less noise.',
    cluster: '00 Start Here',
    clusterOrder: 0,
    sectionOrder: 0,
    studentProblem:
      'Students often enter paramedic school knowing they need to study, but not knowing how learning needs to behave under pressure.',
    sectionPurpose:
      'Orient students to VitalNotes as a guide for learning, reasoning, and performing in paramedicine.',
    pageType: 'orientation',
    glossaryTerms: ['cognitive-load', 'retrieval-practice', 'clinical-reasoning'],
    relatedSections: ['how-to-use-this-guide', 'where-to-begin'],
  },
  {
    id: 'how-to-use-this-guide',
    title: 'How to Use This Guide',
    subtitle: 'A light orientation for moving through the learning path.',
    cluster: '00 Start Here',
    clusterOrder: 0,
    sectionOrder: 1,
    studentProblem:
      'Students can turn any learning resource into another thing to complete instead of a support for better learning.',
    sectionPurpose:
      'Show students how to use VitalNotes without turning it into a checklist or extra burden.',
    pageType: 'orientation',
    glossaryTerms: ['learning-path'],
    relatedSections: ['start-here-what-vitalnotes-is', 'where-to-begin'],
  },
  {
    id: 'where-to-begin',
    title: 'Where to Begin',
    subtitle: 'Start with the problem you recognize.',
    cluster: '00 Start Here',
    clusterOrder: 0,
    sectionOrder: 2,
    studentProblem:
      'Students often know something is not working, but cannot yet name whether the issue is memory, understanding, notes, pressure, or practice.',
    sectionPurpose:
      'Provide problem-based entry points into the guide without overwhelming the student.',
    pageType: 'entry-point',
    glossaryTerms: ['cognitive-load', 'retrieval-practice', 'smart-notes'],
    relatedSections: [
      'cognitive-load',
      'meaning-before-memorization',
      'smart-notes-for-paramedic-students',
      'clinical-recall-without-trivia',
    ],
  },
  {
    id: 'cognitive-load',
    title: 'Cognitive Load',
    subtitle: 'Why learning can fall apart when too much competes for attention.',
    cluster: '01 Why Learning Feels Hard',
    clusterOrder: 1,
    sectionOrder: 0,
    studentProblem:
      'Students may know the material in calm study conditions but lose access during labs, scenarios, or OSCEs.',
    sectionPurpose:
      'Explain overload as a structural learning problem, not a personal failure.',
    pageType: 'conceptual',
    glossaryTerms: ['cognitive-load', 'working-memory', 'structure'],
    relatedSections: [
      'why-studying-feels-productive-but-fails-under-pressure',
      'learning-strain-is-not-always-a-personal-problem',
    ],
  },
  {
    id: 'why-studying-feels-productive-but-fails-under-pressure',
    title: 'Why Studying Feels Productive But Fails Under Pressure',
    subtitle: 'Recognition is not the same as usable access.',
    cluster: '01 Why Learning Feels Hard',
    clusterOrder: 1,
    sectionOrder: 1,
    studentProblem:
      'Students often review notes until material feels familiar, then discover they cannot use it when the situation changes.',
    sectionPurpose:
      'Help students distinguish passive familiarity from recall, transfer, and clinical use.',
    pageType: 'conceptual',
    glossaryTerms: ['recognition', 'retrieval-practice', 'transfer'],
    relatedSections: ['cognitive-load', 'retrieval-and-spaced-learning'],
  },
  {
    id: 'learning-strain-is-not-always-a-personal-problem',
    title: 'Learning Strain Is Not Always a Personal Problem',
    subtitle: 'Difficulty can come from the system, not the student.',
    cluster: '01 Why Learning Feels Hard',
    clusterOrder: 1,
    sectionOrder: 2,
    studentProblem:
      'Students can misread strain as weakness, lack of discipline, or proof they are not suited to paramedicine.',
    sectionPurpose:
      'Separate useful difficulty from avoidable overload and help students respond more accurately to learning strain.',
    pageType: 'conceptual',
    glossaryTerms: ['cognitive-load', 'metacognition'],
    relatedSections: ['cognitive-load', 'meaning-before-memorization'],
  },
  {
    id: 'meaning-before-memorization',
    title: 'Meaning Before Memorization',
    subtitle: 'Facts become usable when they are connected.',
    cluster: '02 Build Understanding',
    clusterOrder: 2,
    sectionOrder: 0,
    studentProblem:
      'Students may collect facts, definitions, and rules without building the meaning needed to use them clinically.',
    sectionPurpose:
      'Show how understanding grows from relationships between ideas, mechanisms, and consequences.',
    pageType: 'conceptual',
    glossaryTerms: ['meaning', 'schema', 'clinical-reasoning'],
    relatedSections: ['pathophysiology-through-patterns', 'directives-through-purpose'],
  },
  {
    id: 'pathophysiology-through-patterns',
    title: 'Pathophysiology Through Patterns',
    subtitle: 'Use mechanisms to stay oriented when presentations are unclear.',
    cluster: '02 Build Understanding',
    clusterOrder: 2,
    sectionOrder: 1,
    studentProblem:
      'Students often learn pathophysiology as isolated textbook content, then struggle to use it during changing clinical presentations.',
    sectionPurpose:
      'Help students organize physiology around mechanisms, patterns, compensation, deterioration, and clinical decisions.',
    pageType: 'conceptual',
    glossaryTerms: ['pathophysiology', 'pattern-recognition', 'schema'],
    relatedSections: ['meaning-before-memorization', 'directives-through-purpose'],
  },
  {
    id: 'directives-through-purpose',
    title: 'Directives Through Purpose',
    subtitle: 'Protocols are easier to apply when you understand what they protect.',
    cluster: '02 Build Understanding',
    clusterOrder: 2,
    sectionOrder: 2,
    studentProblem:
      'Students may memorize directives as fragile rules and hesitate when presentations are borderline, incomplete, or changing.',
    sectionPurpose:
      'Reframe directives as decision-support tools that manage risk within clear boundaries.',
    pageType: 'tool-supported',
    glossaryTerms: ['directive', 'contraindication', 'reassessment'],
    relatedTools: ['directive-meaning-check'],
    relatedSections: ['meaning-before-memorization', 'clinical-recall-without-trivia'],
  },
  {
    id: 'smart-notes-for-paramedic-students',
    title: 'Smart Notes for Paramedic Students',
    subtitle: 'Notes should support thinking, not just store information.',
    cluster: '03 Build Usable Notes',
    clusterOrder: 3,
    sectionOrder: 0,
    studentProblem:
      'Students often have many notes, but those notes do not help them reason during scenarios or pressure.',
    sectionPurpose:
      'Introduce Smart Notes as a practical way to build reusable clinical understanding.',
    pageType: 'tool-supported',
    glossaryTerms: ['smart-notes', 'working-notes', 'cognitive-load'],
    relatedTools: ['smart-note-template'],
    relatedSections: ['types-of-notes-and-idea-maturation', 'obsidian-for-learning-paramedicine'],
  },
  {
    id: 'types-of-notes-and-idea-maturation',
    title: 'Types of Notes and Idea Maturation',
    subtitle: 'Understanding changes, and your notes need room to change with it.',
    cluster: '03 Build Usable Notes',
    clusterOrder: 3,
    sectionOrder: 1,
    studentProblem:
      'Students can treat notes as final products instead of working surfaces that mature through scenarios, feedback, and comparison.',
    sectionPurpose:
      'Clarify capture notes, working notes, Smart Notes, and how ideas become more usable over time.',
    pageType: 'practical-system',
    glossaryTerms: ['capture-notes', 'working-notes', 'smart-notes'],
    relatedTools: ['smart-note-template'],
    relatedSections: ['smart-notes-for-paramedic-students', 'obsidian-for-learning-paramedicine'],
  },
  {
    id: 'obsidian-for-learning-paramedicine',
    title: 'Obsidian for Learning Paramedicine',
    subtitle: 'A simple workspace for connecting ideas without turning notes into a project.',
    cluster: '03 Build Usable Notes',
    clusterOrder: 3,
    sectionOrder: 2,
    studentProblem:
      'Students may overbuild note systems, spend too much time organizing, or confuse software setup with learning.',
    sectionPurpose:
      'Explain Obsidian as an optional lightweight workspace for connected learning.',
    pageType: 'practical-system',
    glossaryTerms: ['obsidian', 'smart-notes', 'links'],
    relatedTools: ['smart-note-template'],
    relatedSections: ['smart-notes-for-paramedic-students', 'types-of-notes-and-idea-maturation'],
  },
  {
    id: 'retrieval-and-spaced-learning',
    title: 'Retrieval and Spaced Learning',
    subtitle: 'Remembering improves when access is practiced over time.',
    cluster: '04 Build Recall',
    clusterOrder: 4,
    sectionOrder: 0,
    studentProblem:
      'Students may review repeatedly but avoid the uncomfortable work of recalling information without cues.',
    sectionPurpose:
      'Introduce retrieval and spacing as practical supports for durable access under pressure.',
    pageType: 'conceptual',
    glossaryTerms: ['retrieval-practice', 'spacing', 'recall'],
    relatedSections: ['clinical-recall-without-trivia', 'anki-for-paramedic-learning'],
  },
  {
    id: 'clinical-recall-without-trivia',
    title: 'Clinical Recall Without Trivia',
    subtitle: 'Recall should help you notice, decide, reassess, and explain.',
    cluster: '04 Build Recall',
    clusterOrder: 4,
    sectionOrder: 1,
    studentProblem:
      'Students can turn recall practice into isolated fact testing that does not transfer well to patient care.',
    sectionPurpose:
      'Shape recall around clinical use rather than trivia.',
    pageType: 'tool-supported',
    glossaryTerms: ['clinical-recall', 'retrieval-practice', 'transfer'],
    relatedTools: ['clinical-recall-prompt-builder'],
    relatedSections: ['retrieval-and-spaced-learning', 'anki-for-paramedic-learning'],
  },
  {
    id: 'anki-for-paramedic-learning',
    title: 'Anki for Paramedic Learning',
    subtitle: 'Use Anki to support recall, not to replace reasoning.',
    cluster: '04 Build Recall',
    clusterOrder: 4,
    sectionOrder: 2,
    studentProblem:
      'Students may use Anki as a flashcard platform without shaping prompts around clinical judgment or transfer.',
    sectionPurpose:
      'Clarify how Anki can support spaced recall while remaining secondary to understanding, reasoning, and practice.',
    pageType: 'tool-supported',
    glossaryTerms: ['anki', 'spacing', 'clinical-recall'],
    relatedTools: ['clinical-recall-prompt-builder'],
    relatedSections: ['retrieval-and-spaced-learning', 'clinical-recall-without-trivia'],
  },
]

export const sections: Section[] = sectionSeeds.map((section, index) => ({
  ...section,
  status: 'drafted',
  body: [
    {
      type: 'placeholder',
      text: `Placeholder body. Replace with approved Obsidian draft text for ${section.title}.`,
    },
  ],
  glossaryTerms: section.glossaryTerms ?? [],
  relatedTools: section.relatedTools ?? [],
  relatedSections: section.relatedSections ?? [],
  previous: sectionSeeds[index - 1]?.id ?? '',
  next: sectionSeeds[index + 1]?.id ?? '',
}))

export const getSectionById = (id: string) =>
  sections.find((section) => section.id === id)

export const firstSection = sections[0]

export const orderedSections = [...sections].sort((a, b) => {
  if (a.clusterOrder !== b.clusterOrder) {
    return a.clusterOrder - b.clusterOrder
  }

  return a.sectionOrder - b.sectionOrder
})
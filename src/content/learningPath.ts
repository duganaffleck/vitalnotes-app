// Generated from the VitalNotes book (v8.5) adaptation. Edit here, or rerun the build script.
import type { LearningPathCluster } from './types'

export const learningPath: LearningPathCluster[] = [
  {
    "id": "start-here",
    "title": "Start Here",
    "order": 0,
    "purpose": "Begin with where VitalNotes came from, how the guide is arranged, and where to start.",
    "sections": [
      "preface",
      "introduction"
    ],
    "relatedTools": [
      "reset-card"
    ],
    "status": "drafted"
  },
  {
    "id": "part-one",
    "title": "Part One: Why Learning Feels Hard",
    "order": 1,
    "purpose": "Look at why studying can feel familiar but still become difficult in lab, scenarios, or OSCEs.",
    "sections": [
      "cognitive-load",
      "why-studying-feels-productive-but-fails-under-pressure",
      "learning-strain-is-not-always-a-personal-problem"
    ],
    "relatedTools": [
      "reset-card",
      "next-attempt-debrief"
    ],
    "status": "drafted"
  },
  {
    "id": "part-two",
    "title": "Part Two: Do the Work",
    "order": 2,
    "purpose": "Run the actual week of learning: notes captured live, partners used properly, practice questions that teach, and a schedule with room for all of it.",
    "sections": [
      "taking-notes-in-a-moving-lecture",
      "studying-with-a-partner",
      "practice-questions-that-teach",
      "the-week-around-the-work",
      "training-your-hands"
    ],
    "relatedTools": [
      "skill-breakdown-sheet"
    ],
    "status": "drafted"
  },
  {
    "id": "part-three",
    "title": "Part Three: Build Understanding",
    "order": 3,
    "purpose": "Connect facts, physiology, and patient care standards so they remain useful when the patient doesn't match the version from class.",
    "sections": [
      "meaning-before-memorization",
      "pathophysiology-through-patterns",
      "learning-the-patient-care-standards"
    ],
    "relatedTools": [
      "directive-decision-map"
    ],
    "status": "drafted"
  },
  {
    "id": "part-four",
    "title": "Part Four: Build Notes and Recall",
    "order": 4,
    "purpose": "Develop notes worth keeping, then practise retrieving them after the original cues are gone.",
    "sections": [
      "from-capture-to-smart-note",
      "retrieval-and-spaced-learning",
      "clinical-recall-without-trivia",
      "preparing-for-the-aemca"
    ],
    "relatedTools": [
      "cue-to-care-recall-card"
    ],
    "status": "drafted"
  },
  {
    "id": "part-five",
    "title": "Part Five: Think Clinically",
    "order": 5,
    "purpose": "Use incomplete information carefully, especially when an early impression feels convincing.",
    "sections": [
      "clinical-reasoning",
      "pattern-recognition",
      "avoiding-premature-closure"
    ],
    "relatedTools": [],
    "status": "drafted"
  },
  {
    "id": "part-six",
    "title": "Part Six: Practise and Perform",
    "order": 6,
    "purpose": "Use simulation, feedback, pressure, and recovery to make important behaviours more reliable.",
    "sections": [
      "from-scenario-to-practice-target",
      "osce-preparation-and-pressure-practice",
      "resetting-when-thinking-narrows"
    ],
    "relatedTools": [
      "next-attempt-debrief",
      "reset-card"
    ],
    "status": "drafted"
  },
  {
    "id": "part-seven",
    "title": "Part Seven: Reflect and Improve",
    "order": 7,
    "purpose": "Take the lesson without turning one performance into a verdict about yourself.",
    "sections": [
      "reflection-without-rumination",
      "after-you-fail-something"
    ],
    "relatedTools": [
      "next-attempt-debrief",
      "reset-card"
    ],
    "status": "drafted"
  },
  {
    "id": "part-eight",
    "title": "Part Eight: Practise Like It Is Real",
    "order": 8,
    "purpose": "Build targeted scenarios and mental rehearsal that create extra repetitions beyond scheduled lab time.",
    "sections": [
      "design-and-run-your-own-scenarios",
      "mental-rehearsal-and-visualization"
    ],
    "relatedTools": [
      "scenario-run-sheet",
      "next-attempt-debrief",
      "reset-card"
    ],
    "status": "drafted"
  },
  {
    "id": "part-nine",
    "title": "Part Nine: Learn on the Truck",
    "order": 9,
    "purpose": "Use placement to notice, ask, document, and improve without expecting yourself to be fully formed.",
    "sections": [
      "learning-during-placement",
      "working-with-your-preceptor",
      "documentation-as-thinking"
    ],
    "relatedTools": [
      "next-attempt-debrief"
    ],
    "status": "drafted"
  },
  {
    "id": "conclusion",
    "title": "Conclusion",
    "order": 10,
    "purpose": "Where the guide stops and the work carries on.",
    "sections": [
      "conclusion"
    ],
    "relatedTools": [],
    "status": "drafted"
  },
  {
    "id": "more",
    "title": "More From VitalNotes",
    "order": 11,
    "purpose": "Extra pages that go further on feedback, debriefs, note types and study software. They aren't in the book.",
    "sections": [
      "types-of-notes-and-idea-maturation",
      "common-errors-and-what-they-reveal",
      "focused-practice-after-feedback",
      "performance-under-pressure",
      "the-five-whys",
      "turning-feedback-into-action",
      "capturing-the-debrief",
      "obsidian-for-learning-paramedicine",
      "anki-for-paramedic-learning"
    ],
    "relatedTools": [
      "smart-note-template",
      "reset-card",
      "five-whys-tool",
      "reflection-without-journaling-tool",
      "clinical-reasoning-check",
      "cue-to-care-recall-card"
    ],
    "status": "drafted",
    "extra": true
  }
]

export const orderedLearningPath = [...learningPath].sort(
  (a, b) => a.order - b.order,
)

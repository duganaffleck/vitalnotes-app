export type ResourceLink = {
  label: string
  href: string
  external?: boolean
}

export type ResourceCard = {
  id: string
  title: string
  body?: string[]
  orderedList?: string[]
  list?: string[]
  link?: ResourceLink
  linkPlacement?: 'before-content' | 'after-content'
  codeBlock?: string
  accent?: 'orange' | 'neutral'
}

export type ResourceSection = {
  id: string
  title: string
  intro: string[]
  label?: string
  accent: 'orange' | 'neutral'
  cards: ResourceCard[]
}

export type SourceItem = {
  title: string
  author?: string
}

export type SourceCategory = {
  id: string
  title: string
  items: SourceItem[]
}

export const resourcesIntro = {
  eyebrow: 'Resources',
  title: 'Resources & Setup',
  subtitle: 'External tools, setup guidance, and the sources behind VitalNotes.',
  body: [
    'This page is for the tools and references that sit around VitalNotes.',
    'Use it when you are ready to set up Obsidian, start using Anki, or understand the sources behind the guide. The page gives you a simple starting point so the outside pieces support your learning instead of becoming another project.',
  ],
}

export const resourcesBridgeCard: ResourceCard = {
  id: 'tools-page-pointer',
  title: 'Looking for the learning tools?',
  body: [
    'The Tools page is where you find the in-app supports: Smart Notes, Five Whys, Clinical Reasoning Check, OSCE Reset, and related learning tools.',
    'This page is different. Resources is for external setup, companion systems, and source transparency.',
  ],
  link: {
    label: 'Go to Tools',
    href: '#/tools',
  },
  accent: 'orange',
}

export const resourceSections: ResourceSection[] = [
  {
    id: 'obsidian',
    title: 'Obsidian',
    intro: [
      'Obsidian is a note-taking app for building connected understanding. In VitalNotes, it is used as a thinking space, not a filing cabinet.',
      'You do not need to build a perfect vault before it becomes useful. The first goal is simple: create a place where your own explanations can grow, connect, and become easier to return to before labs, scenarios, and OSCEs.',
    ],
    label: 'Obsidian setup',
    accent: 'orange',
    cards: [
      {
        id: 'obsidian-what-it-is-for',
        title: 'What Obsidian is for',
        body: [
          'Obsidian is where you write to think.',
          'For paramedic students, that means connecting ideas across pathophysiology, directives, assessment, scenarios, and mistakes. A useful note should help future-you understand a clinical idea more clearly than a slide deck or copied definition would.',
          'It does not need to become a dashboard, calendar, task manager, aesthetic archive, or second-brain lifestyle project. Use it for the thinking work that helps you understand paramedicine.',
        ],
        accent: 'orange',
      },
      {
        id: 'obsidian-who-it-helps',
        title: 'Who it helps',
        body: [
          'Obsidian is useful if your notes feel disconnected from your performance.',
          'That might look like knowing the slide content, but struggling to explain why a patient is deteriorating. It might look like having a lot of notes, but not being able to find the idea that matters during scenario prep. It might also look like understanding something after class, then losing the connection when a lab gets noisy.',
          'If your current paper or digital notes are already helping you think clearly, you may not need to change much. The point is not to switch apps. The point is to make understanding easier to build and revisit.',
        ],
        accent: 'orange',
      },
      {
        id: 'obsidian-getting-started',
        title: 'Getting started without overbuilding',
        body: [
          'Start with the smallest version that can work. A vault is just a folder where your notes live. You can make it useful before you touch themes, plugins, graph view, or templates.',
          'When you open Obsidian for the first time, it will ask whether to open an existing vault or create a new one. Choose create new.',
        ],
        orderedList: [
          'Create a new vault and name it something simple, such as Paramedicine Notes or VitalNotes.',
          'Create one note called Inbox or Start Here.',
          'Write one idea you are trying to understand in your own words.',
          'Create a second note only when that idea points to a separate idea worth developing.',
          'Link the two notes when the relationship helps you think. Type [[Note Name]] inside any note to create a link.',
          'For the first week, capture rough ideas from lecture, lab, readings, or scenario feedback. Once or twice, choose one rough item and turn it into a clearer explanation.',
        ],
        link: {
          label: 'Download Obsidian',
          href: 'https://obsidian.md/download',
          external: true,
        },
        linkPlacement: 'before-content',
        accent: 'orange',
      },
      {
        id: 'obsidian-ignore-first',
        title: 'Ignore this at first',
        body: [
          'Skip themes, plugins, graph view, dashboards, daily notes, dataview, kanban boards, and complicated templates.',
          'Those things can be useful later, but they are not the starting point. The starting point is one idea, written clearly, in your own words, connected to another idea only when the connection matters.',
        ],
        accent: 'orange',
      },
      {
        id: 'obsidian-common-mistakes',
        title: 'Common beginner mistakes',
        list: [
          'Copying slide content directly into Obsidian instead of writing your own understanding.',
          'Building a beautiful folder structure before making a single useful note.',
          'Installing plugins in the first week and spending study time configuring them.',
          'Using tags because they feel organized, even when links would better show how ideas connect.',
          'Treating Obsidian as storage instead of a place to clarify thinking.',
        ],
        accent: 'orange',
      },
    ],
  },
  {
    id: 'anki',
    title: 'Anki',
    intro: [
      'Anki is a flashcard app for spaced retrieval. In VitalNotes, it is used to strengthen access to material you have already started to understand.',
      'Used well, Anki helps important details come back more reliably over time. Used poorly, it becomes a pile of cards that feels productive while quietly avoiding the harder work of understanding.',
    ],
    label: 'Anki setup',
    accent: 'orange',
    cards: [
      {
        id: 'anki-what-it-is-for',
        title: 'What Anki is for',
        body: [
          'Anki is for recall.',
          'It helps you retrieve specific information over time: medication doses, contraindications, key definitions, assessment findings, clinical comparisons, and other details that need to be available under pressure.',
          'It should not be where understanding begins. If a card feels impossible because the idea underneath it is unclear, the problem is probably not the card. Go back to notes, examples, practice, or explanation first.',
        ],
        accent: 'orange',
      },
      {
        id: 'anki-who-it-helps',
        title: 'Who it helps',
        body: [
          'Anki is useful if you understand something during study, but lose access to the details later.',
          'That matters in paramedicine because small details can shape safe decisions. Dose, route, timing, contraindication, threshold, and sequence all need to be retrievable without searching through notes every time.',
          'It is less useful when you are still trying to build the idea for the first time. In that case, use Smart Notes, examples, scenario debrief, or a clearer explanation before turning the material into cards.',
        ],
        accent: 'orange',
      },
      {
        id: 'anki-getting-started',
        title: 'Getting started without making a monster deck',
        body: [
          'Start smaller than feels necessary. The habit matters more than the card count at the beginning.',
        ],
        orderedList: [
          'Create one simple deck, such as Paramedicine or PCP Recall.',
          'Make five cards from material you already understand.',
          'Review briefly each day, even if the session is short.',
          'Add cards slowly after lectures, labs, or scenario feedback.',
          'Delete, rewrite, or suspend cards that keep failing because they are unclear. Suspend means pause a card without deleting it.',
        ],
        link: {
          label: 'Download Anki',
          href: 'https://apps.ankiweb.net/',
          external: true,
        },
        linkPlacement: 'before-content',
        accent: 'orange',
      },
      {
        id: 'anki-cards-that-work',
        title: 'Cards that work well',
        body: [
          'Good cards are narrow. They ask one thing at a time and have a clear answer.',
          'A useful card might ask for a medication dose, one contraindication, a normal value, one early sign of deterioration, or the difference between two similar presentations. If the answer needs a paragraph, the card is probably too broad.',
        ],
        list: [
          'What is the adult ASA dose for suspected cardiac ischemia?',
          'What finding would make nitroglycerin unsafe in this context?',
          'What is one early sign that respiratory fatigue may be worsening?',
        ],
        accent: 'orange',
      },
      {
        id: 'anki-cards-that-fail',
        title: 'Cards that usually fail',
        body: [
          'Weak cards are too broad, too early, or too copied.',
          'Avoid making cards from material you have not processed yet. Avoid cloze-deleting full paragraphs. Avoid turning every slide into flashcards. A large deck is not automatically a strong learning system.',
        ],
        list: [
          'Cards that ask you to explain an entire condition at once.',
          'Reasoning prompts with no single retrievable answer, such as asking the difference between recognition and certainty in chest pain care.',
          'Cards copied directly from slides before you understand the idea.',
          'Cards with several answers hidden inside one question.',
          'Cards you keep missing because the wording is vague.',
        ],
        accent: 'orange',
      },
      {
        id: 'anki-common-mistakes',
        title: 'Common beginner mistakes',
        list: [
          'Making cards before understanding the material.',
          'Downloading or building huge decks and calling that progress.',
          'Letting reviews pile up until Anki becomes something to avoid.',
          'Using flashcards for reasoning that would be better practiced through scenarios or written explanation.',
          'Keeping bad cards because deleting them feels like failure.',
        ],
        accent: 'orange',
      },
    ],
  },
  {
    id: 'keeping-small',
    title: 'Keeping the System Small',
    intro: [
      'Obsidian and Anki can both become projects of their own, especially once tutorials, plugin libraries, deck-building advice, and aesthetic systems get involved.',
      'A useful setup is one you can still use during a busy week, after lab, when you are tired, or when you only have ten useful minutes left.',
    ],
    accent: 'neutral',
    cards: [
      {
        id: 'sustainable-setup',
        title: 'A sustainable setup',
        body: [
          'The real test is not whether the system looks impressive on a quiet Sunday. The real test is whether you still use it in week eight of a semester, when assignments, labs, shifts, and fatigue are all competing for attention.',
        ],
        list: [
          'Start with defaults.',
          'Use links before tags.',
          'Make fewer Anki cards than you think you need.',
          'Process a small number of notes each week.',
          'Change the system only when something is actually getting in the way.',
          'If setup starts replacing learning, simplify.',
        ],
        accent: 'neutral',
      },
    ],
  },
]

export const obsidianFolderStructure = `/Inbox        rough notes, questions, quick captures
/Notes        developed Smart Notes and working explanations
/Reference    PDFs, standards, copied material, lecture documents
/Scenarios    scenario reflections and performance notes`

export const scenarioGeneratorCard: ResourceCard = {
  id: 'scenario-generator',
  title: 'Scenario Generator',
  body: [
    'The Scenario Generator is a companion simulation tool for paramedic instructors and students.',
    'It builds Ontario PCP-level scenarios with realistic presentations, case progression, directive awareness, learning objectives, and GRS-based evaluation support. It belongs beside VitalNotes because it helps move learning from reading into practice.',
  ],
  link: {
    label: 'Open Scenario Generator',
    href: 'https://scenario-generator-ten.vercel.app/',
    external: true,
  },
  accent: 'orange',
}

export const sourceCategories: SourceCategory[] = [
  {
    id: 'learning-science-memory',
    title: 'Learning science and memory',
    items: [
      {
        title: 'Make It Stick',
        author: 'Peter C. Brown, Henry L. Roediger III, and Mark A. McDaniel',
      },
      {
        title: 'How We Learn',
        author: 'Stanislas Dehaene',
      },
      {
        title: 'Understanding How We Learn',
        author: 'Yana Weinstein, Megan Sumeracki, and Oliver Caviglioli',
      },
      {
        title: 'The Science of Learning',
        author: 'Deans for Impact',
      },
      {
        title: 'Cognitive Load Theory',
        author: 'John Sweller and related cognitive load research',
      },
    ],
  },
  {
    id: 'notes-attention-knowledge',
    title: 'Notes, attention, and knowledge building',
    items: [
      {
        title: 'How to Take Smart Notes',
        author: 'Sönke Ahrens',
      },
      {
        title: 'Deep Work',
        author: 'Cal Newport',
      },
      {
        title: 'The Pleasures of Reading in an Age of Distraction',
        author: 'Alan Jacobs',
      },
      {
        title: 'Do Nothing',
        author: 'Celeste Headlee',
      },
    ],
  },
  {
    id: 'thinking-adaptability-expertise',
    title: 'Thinking, adaptability, and expertise',
    items: [
      {
        title: 'Peak',
        author: 'Anders Ericsson and Robert Pool',
      },
      {
        title: 'Range',
        author: 'David Epstein',
      },
      {
        title: 'Think Again',
        author: 'Adam Grant',
      },
      {
        title: 'Blink',
        author: 'Malcolm Gladwell',
      },
      {
        title: 'Expertise and decision-making research',
        author: 'Research area',
      },
      {
        title: 'Stress performance research',
        author: 'Research area',
      },
      {
        title: 'Simulation-based education research',
        author: 'Research area',
      },
    ],
  },
  {
    id: 'ontario-paramedic-practice',
    title: 'Ontario paramedic practice',
    items: [
      {
        title: 'Ontario Basic Life Support Patient Care Standards',
        author: 'Ontario practice document',
      },
      {
        title: 'Ontario Advanced Life Support Patient Care Standards',
        author: 'Ontario practice document',
      },
      {
        title: 'PESP standards and paramedic practice references',
        author: 'Paramedic practice reference',
      },
      {
        title: 'Ontario medical directives and clinical practice guidance',
        author: 'Clinical practice guidance',
      },
      {
        title: 'Simulation and OSCE-based education literature',
        author: 'Education research area',
      },
    ],
  },
]

export const standardsLink: ResourceLink = {
  label: 'Ontario Practice Documents',
  href: 'https://www.ontario.ca/page/paramedic-practice-documents',
  external: true,
}

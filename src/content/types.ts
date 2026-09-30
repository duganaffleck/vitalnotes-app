export type SectionStatus = 'drafted' | 'placeholder' | 'planned'

export type PageType =
  | 'orientation'
  | 'entry-point'
  | 'conceptual'
  | 'practical-system'
  | 'tool-supported'
  | 'practice-support'

export type ToolType =
  | 'thinking-check'
  | 'template'
  | 'prompt-builder'
  | 'reset'

export type BodyBlock =
  | {
      type: 'heading' | 'paragraph' | 'placeholder'
      text: string
    }
  | {
      type: 'list'
      items: string[]
    }
  | {
      type: 'companion'
      app: CompanionAppId
      text: string
      /** Query string that opens the app already set up, e.g. complexity=Complex&focus=... */
      query?: string
      /** Button label when it differs from the app's usual one */
      action?: string
    }

export type CompanionAppId = 'scenario-generator' | 'acr-review'

export type Section = {
  id: string
  title: string
  subtitle: string
  cluster: string
  clusterOrder: number
  sectionOrder: number
  studentProblem: string
  sectionPurpose: string
  pageType: PageType
  status: SectionStatus
  body: BodyBlock[]
  glossaryTerms: string[]
  relatedTools: string[]
  relatedSections: string[]
  previous: string
  next: string
  chapter?: number
}

export type GlossaryTerm = {
  id: string
  term: string
  shortDefinition: string
  paramedicRelevance: string
  relatedSections: string[]
  source?: 'book' | 'app'
}

export type ToolField = {
  id: string
  label: string
  helperText: string
}

export type ToolExampleEntry = {
  label: string
  text: string
}

export type ToolExample = {
  title?: string
  context: string
  entries: ToolExampleEntry[]
}

export type Tool = {
  id: string
  title: string
  status: SectionStatus
  toolType: ToolType
  purpose: string
  whenToUse: string
  whenNotToUse?: string[]
  fieldIntro?: string
  steps: string[]
  fields: ToolField[]
  commonMistakes?: string[]
  examples?: ToolExample[]
  relatedTools?: string[]
  toolPointers?: string[]
  relatedSections: string[]
  collection?: 'field' | 'more'
}

export type LearningPathCluster = {
  id: string
  title: string
  order: number
  purpose: string
  sections: string[]
  relatedTools: string[]
  status: SectionStatus
  extra?: boolean
}

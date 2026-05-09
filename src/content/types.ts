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
}

export type GlossaryTerm = {
  id: string
  term: string
  shortDefinition: string
  paramedicRelevance: string
  relatedSections: string[]
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
  context: string
  entries: ToolExampleEntry[]
  nextAdjustment: string
}

export type Tool = {
  id: string
  title: string
  status: SectionStatus
  toolType: ToolType
  purpose: string
  whenToUse: string
  steps: string[]
  fields: ToolField[]
  builderStructure: string[]
  example: ToolExample
  relatedSections: string[]
}

export type LearningPathCluster = {
  id: string
  title: string
  order: number
  purpose: string
  sections: string[]
  relatedTools: string[]
  status: SectionStatus
}
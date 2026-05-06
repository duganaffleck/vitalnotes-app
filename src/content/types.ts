export type SectionStatus = 'drafted' | 'placeholder' | 'planned'

export type PageType =
  | 'orientation'
  | 'entry-point'
  | 'conceptual'
  | 'practical-system'
  | 'tool-supported'

export type ToolType = 'thinking-check' | 'template' | 'prompt-builder'

export type BodyBlock = {
  type: 'heading' | 'paragraph' | 'placeholder'
  text: string
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
import { learningPath } from '../content/learningPath'
import type { Section } from '../content/types'

type SectionHeaderProps = {
  section: Section
}

function getSectionPositionLabel(section: Section) {
  const cluster = learningPath.find((item) => item.title === section.cluster)

  if (!cluster) {
    return section.cluster
  }

  const sectionIndex = cluster.sections.indexOf(section.id)

  if (sectionIndex === -1) {
    return section.cluster
  }

  return `${section.cluster} · Section ${sectionIndex + 1} of ${cluster.sections.length}`
}

function SectionHeader({ section }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <p className="cluster-label">{getSectionPositionLabel(section)}</p>
      <h1>{section.title}</h1>
      <p className="section-subtitle">{section.subtitle}</p>

      <div className="student-problem">
        <span>Student problem</span>
        <p>{section.studentProblem}</p>
      </div>
    </header>
  )
}

export default SectionHeader

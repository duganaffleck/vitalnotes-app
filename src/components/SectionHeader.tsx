import type { Section } from '../content/types'

type SectionHeaderProps = {
  section: Section
}

function SectionHeader({ section }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <p className="cluster-label">{section.cluster}</p>
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
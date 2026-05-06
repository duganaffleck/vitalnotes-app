import type { Section } from '../content/types'

type SectionCardProps = {
  section: Section
  onNavigate: (hash: string) => void
}

function SectionCard({ section, onNavigate }: SectionCardProps) {
  return (
    <article className="section-card">
      <p className="cluster-label">{section.cluster}</p>
      <h3>{section.title}</h3>
      <p>{section.subtitle}</p>
      <button
        className="text-button"
        onClick={() => onNavigate(`#/section/${section.id}`)}
      >
        Open section
      </button>
    </article>
  )
}

export default SectionCard
import type { Section } from '../content/types'

type SectionCardProps = {
  section: Section
  onNavigate: (hash: string) => void
}

function SectionCard({ section, onNavigate }: SectionCardProps) {
  const sectionHash = `#/section/${section.id}`

  return (
    <a
      className="section-card section-card-link"
      href={sectionHash}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(sectionHash)
      }}
    >
      <p className="cluster-label">{section.cluster}</p>
      <h3>{section.title}</h3>
      <p>{section.subtitle}</p>
      <span className="section-card-action">Open section</span>
    </a>
  )
}

export default SectionCard
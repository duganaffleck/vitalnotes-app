import { getSectionById } from '../content/sections'
import type { Section } from '../content/types'

type SectionNavigationProps = {
  section: Section
  onNavigate: (hash: string) => void
}

function SectionNavigation({ section, onNavigate }: SectionNavigationProps) {
  const previousSection = section.previous
    ? getSectionById(section.previous)
    : undefined
  const nextSection = section.next ? getSectionById(section.next) : undefined

  return (
    <nav className="section-navigation" aria-label="Section navigation">
      {previousSection ? (
        <button
          className="section-nav-button"
          onClick={() => onNavigate(`#/section/${previousSection.id}`)}
        >
          <span>Previous</span>
          <strong>{previousSection.title}</strong>
        </button>
      ) : (
        <div />
      )}

      {nextSection ? (
        <button
          className="section-nav-button align-right"
          onClick={() => onNavigate(`#/section/${nextSection.id}`)}
        >
          <span>Next in the guide</span>
          <strong>{nextSection.title}</strong>
        </button>
      ) : (
        <button
          className="section-nav-button align-right"
          onClick={() => onNavigate('#/learning-path')}
        >
          <span>Return to</span>
          <strong>Learning Path</strong>
        </button>
      )}
    </nav>
  )
}

export default SectionNavigation
import { getSectionById } from '../content/sections'
import type { Section } from '../content/types'

type SectionNavigationProps = {
  section: Section
  onNavigate: (hash: string) => void
}

const supportOnlySectionIds = new Set([
  'obsidian-for-learning-paramedicine',
  'anki-for-paramedic-learning',
])

function getNavigableSection(
  sectionId: string | undefined,
  direction: 'previous' | 'next',
): Section | undefined {
  let candidate = sectionId ? getSectionById(sectionId) : undefined

  while (candidate && supportOnlySectionIds.has(candidate.id)) {
    const nextId = direction === 'previous' ? candidate.previous : candidate.next
    candidate = nextId ? getSectionById(nextId) : undefined
  }

  return candidate
}

function SectionNavigation({ section, onNavigate }: SectionNavigationProps) {
  const previousSection = getNavigableSection(section.previous, 'previous')
  const nextSection = getNavigableSection(section.next, 'next')

  return (
    <nav className="section-navigation" aria-label="Section navigation">
      {previousSection ? (
        <button
          className="section-nav-button section-nav-button--previous"
          type="button"
          aria-label={`Go to previous section: ${previousSection.title}`}
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
          className="section-nav-button section-nav-button--next align-right"
          type="button"
          aria-label={`Go to next section: ${nextSection.title}`}
          onClick={() => onNavigate(`#/section/${nextSection.id}`)}
        >
          <span>Next in the guide</span>
          <strong>{nextSection.title}</strong>
        </button>
      ) : (
        <button
          className="section-nav-button section-nav-button--next align-right"
          type="button"
          aria-label="Return to Learning Path"
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

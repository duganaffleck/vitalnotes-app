import { getSectionById } from '../content/sections'
import { orderedLearningPath } from '../content/learningPath'
import type { Section } from '../content/types'

type SectionNavigationProps = {
  section: Section
  onNavigate: (hash: string) => void
}

// The navigable order is derived from the learning path itself, so new
// sections and reordered clusters are picked up automatically. Sections not
// wired into the path (support-only pages) get no prev/next chain.
// The book runs as one chain; the extra pages run as their own chain after it.
const mainOrder: string[] = orderedLearningPath
  .filter((cluster) => !cluster.extra)
  .flatMap((cluster) => cluster.sections)
const extraOrder: string[] = orderedLearningPath
  .filter((cluster) => cluster.extra)
  .flatMap((cluster) => cluster.sections)

function getNeighbour(
  sectionId: string,
  direction: 'previous' | 'next',
): Section | undefined {
  const pathOrder = mainOrder.includes(sectionId) ? mainOrder : extraOrder
  const index = pathOrder.indexOf(sectionId)
  if (index === -1) {
    return undefined
  }
  const neighbourId =
    direction === 'previous' ? pathOrder[index - 1] : pathOrder[index + 1]
  return neighbourId ? getSectionById(neighbourId) : undefined
}

function SectionNavigation({ section, onNavigate }: SectionNavigationProps) {
  const previousSection = getNeighbour(section.id, 'previous')
  const nextSection = getNeighbour(section.id, 'next')

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

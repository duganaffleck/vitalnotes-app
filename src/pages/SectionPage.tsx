import SectionBody from '../components/SectionBody'
import SectionHeader from '../components/SectionHeader'
import SectionNavigation from '../components/SectionNavigation'
import { getSectionById } from '../content/sections'
import { getToolById } from '../content/tools'
import type { Section } from '../content/types'

type SectionPageProps = {
  section: Section
  onNavigate: (hash: string) => void
}

function SectionPage({ section, onNavigate }: SectionPageProps) {
  const relatedTools = section.relatedTools
    .map((toolId) => getToolById(toolId))
    .filter(Boolean)

  const relatedSections = section.relatedSections
    .map((sectionId) => getSectionById(sectionId))
    .filter(Boolean)

  return (
    <article className="reader-layout">
      <SectionHeader section={section} />

      <SectionBody body={section.body} />

      {relatedTools.length > 0 && (
        <aside className="related-panel">
          <h2>Related tools</h2>
          <div className="related-list">
            {relatedTools.map((tool) =>
              tool ? (
                <button
                  className="related-card"
                  key={tool.id}
                  onClick={() => onNavigate('#/tools')}
                >
                  <span>{tool.toolType}</span>
                  <strong>{tool.title}</strong>
                  <p>{tool.purpose}</p>
                </button>
              ) : null,
            )}
          </div>
        </aside>
      )}

      {relatedSections.length > 0 && (
        <aside className="related-panel">
          <h2>Related sections</h2>
          <div className="related-list">
            {relatedSections.map((relatedSection) =>
              relatedSection ? (
                <button
                  className="related-card"
                  key={relatedSection.id}
                  onClick={() =>
                    onNavigate(`#/section/${relatedSection.id}`)
                  }
                >
                  <span>{relatedSection.cluster}</span>
                  <strong>{relatedSection.title}</strong>
                  <p>{relatedSection.subtitle}</p>
                </button>
              ) : null,
            )}
          </div>
        </aside>
      )}

      <SectionNavigation section={section} onNavigate={onNavigate} />
    </article>
  )
}

export default SectionPage
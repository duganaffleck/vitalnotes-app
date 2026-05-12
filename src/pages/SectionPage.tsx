import { useState } from 'react'
import GlossaryTerms from '../components/GlossaryTerms'
import SectionBody from '../components/SectionBody'
import SectionHeader from '../components/SectionHeader'
import SectionNavigation from '../components/SectionNavigation'
import ToolDrawer from '../components/ToolDrawer'
import { getSectionById } from '../content/sections'
import { getToolById } from '../content/tools'
import type { Section, Tool } from '../content/types'

type SectionPageProps = {
  section: Section
  onNavigate: (hash: string) => void
}

function isTool(tool: Tool | undefined): tool is Tool {
  return Boolean(tool)
}

function isSection(section: Section | undefined): section is Section {
  return Boolean(section)
}

function SectionPage({ section, onNavigate }: SectionPageProps) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

  const relatedTools = section.relatedTools
    .map((toolId) => getToolById(toolId))
    .filter(isTool)

  const maxVisibleRelatedSections = 5

  const relatedSections = section.relatedSections
    .map((sectionId) => getSectionById(sectionId))
    .filter(isSection)
    .slice(0, maxVisibleRelatedSections)

  return (
    <>
      <article className="reader-layout">
        <SectionHeader section={section} />

        <SectionBody body={section.body} />

        <div className="reader-support-stack">
          <SectionNavigation section={section} onNavigate={onNavigate} />

          <GlossaryTerms glossaryTermIds={section.glossaryTerms} />

          {relatedTools.length > 0 && (
            <aside className="related-panel related-panel--tools">
              <h2>Related tools</h2>
              <div className="related-list">
                {relatedTools.map((tool) => (
                  <button
                    className="related-card related-card--tool"
                    key={tool.id}
                    type="button"
                    aria-label={`Open tool: ${tool.title}`}
                    onClick={() => setSelectedTool(tool)}
                  >
                    <span>{tool.toolType}</span>
                    <strong>{tool.title}</strong>
                    <p>{tool.purpose}</p>
                  </button>
                ))}
              </div>
            </aside>
          )}

          {relatedSections.length > 0 && (
            <aside className="related-panel related-panel--sections">
              <h2>Related sections</h2>
              <div className="related-list">
                {relatedSections.map((relatedSection) => (
                  <button
                    className="related-card related-card--section"
                    key={relatedSection.id}
                    type="button"
                    aria-label={`Open section: ${relatedSection.title}`}
                    onClick={() =>
                      onNavigate(`#/section/${relatedSection.id}`)
                    }
                  >
                    <span>{relatedSection.cluster}</span>
                    <strong>{relatedSection.title}</strong>
                    <p>{relatedSection.subtitle}</p>
                  </button>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>

      <ToolDrawer
        tool={selectedTool}
        isOpen={Boolean(selectedTool)}
        onClose={() => setSelectedTool(null)}
      />
    </>
  )
}

export default SectionPage
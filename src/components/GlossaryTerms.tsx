import { useState } from 'react'
import GlossaryPopup from './GlossaryPopup'
import { getGlossaryTermById } from '../content/glossary'
import type { GlossaryTerm } from '../content/types'

type GlossaryTermsProps = {
  glossaryTermIds: string[]
  onNavigate: (hash: string) => void
}

function isGlossaryTerm(term: GlossaryTerm | undefined): term is GlossaryTerm {
  return Boolean(term)
}

function GlossaryTerms({ glossaryTermIds, onNavigate }: GlossaryTermsProps) {
  const [activeTermId, setActiveTermId] = useState<string | null>(null)

  const terms = glossaryTermIds
    .map((termId) => getGlossaryTermById(termId))
    .filter(isGlossaryTerm)

  if (terms.length === 0) {
    return null
  }

  const activeTerm = activeTermId
    ? terms.find((term) => term.id === activeTermId)
    : undefined

  return (
    <aside className="glossary-term-panel">
      <h2>Terms in this section</h2>

      <div className="glossary-chip-row">
        {terms.map((term) => (
          <button
            className={
              activeTermId === term.id
                ? 'glossary-chip active'
                : 'glossary-chip'
            }
            key={term.id}
            onClick={() =>
              setActiveTermId(activeTermId === term.id ? null : term.id)
            }
          >
            {term.term}
          </button>
        ))}
      </div>

      {activeTerm && (
        <GlossaryPopup
          term={activeTerm}
          isOpen={Boolean(activeTerm)}
          onClose={() => setActiveTermId(null)}
          onOpenGlossary={() => onNavigate('#/glossary')}
        />
      )}
    </aside>
  )
}

export default GlossaryTerms

import type { GlossaryTerm } from '../content/types'

type GlossaryPopupProps = {
  term: GlossaryTerm
  isOpen: boolean
  onClose: () => void
  onOpenGlossary: () => void
}

function GlossaryPopup({
  term,
  isOpen,
  onClose,
  onOpenGlossary,
}: GlossaryPopupProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="glossary-popup">
      <div className="glossary-popup-header">
        <h3>{term.term}</h3>
        <button className="small-close-button" onClick={onClose}>
          Close
        </button>
      </div>

      <p>{term.shortDefinition}</p>
      <p className="muted-copy">{term.paramedicRelevance}</p>

      <button className="text-button" onClick={onOpenGlossary}>
        Open glossary
      </button>
    </div>
  )
}

export default GlossaryPopup
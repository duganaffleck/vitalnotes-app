import type { Tool, ToolExample } from '../content/types'

type ToolDrawerProps = {
  tool: Tool | null
  isOpen: boolean
  onClose: () => void
}

function getToolExamples(tool: Tool): ToolExample[] {
  if (tool.examples && tool.examples.length > 0) {
    return tool.examples
  }

  return tool.example ? [tool.example] : []
}

function renderToolList(title: string, items: string[]) {
  if (items.length === 0) {
    return null
  }

  return (
    <div className="tool-drawer-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ToolDrawer({ tool, isOpen, onClose }: ToolDrawerProps) {
  if (!tool || !isOpen) {
    return null
  }

  const examples = getToolExamples(tool)

  return (
    <div className="drawer-backdrop" role="presentation" onClick={onClose}>
      <aside
        className="tool-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={`${tool.title} tool drawer`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="tool-drawer-header">
          <div>
            <p className="eyebrow">{tool.toolType}</p>
            <h2>{tool.title}</h2>
          </div>

          <button
            className="drawer-close-button"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="tool-drawer-section">
          <h3>Purpose</h3>
          <p>{tool.purpose}</p>
        </div>

        <div className="tool-drawer-section">
          <h3>Use this when</h3>
          <p>{tool.whenToUse}</p>
        </div>

        {tool.steps.length > 0 && (
          <div className="tool-drawer-section">
            <h3>Steps</h3>
            <ol>
              {tool.steps.map((step, index) => (
                <li key={`${tool.id}-step-${index}`}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {tool.fields.length > 0 && (
          <div className="tool-drawer-section">
            <h3>Fields</h3>
            <div className="drawer-field-list">
              {tool.fields.map((field) => (
                <div className="drawer-field-card" key={field.id}>
                  <strong>{field.label}</strong>
                  <p>{field.helperText}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tool.builderStructure.length > 0 &&
          renderToolList('Prompt structure', tool.builderStructure)}

        {tool.shortVersion && renderToolList('Short version', tool.shortVersion)}

        {tool.whenNotToUse &&
          renderToolList('Do not use this when', tool.whenNotToUse)}

        {tool.commonMistakes &&
          renderToolList('Common mistakes', tool.commonMistakes)}

        {examples.length > 0 && (
          <details
            className="tool-drawer-section tool-example"
            key={`${tool.id}-drawer-example`}
          >
            <summary
              className="card-action-button tool-example-button"
              aria-label={`View ${tool.title} example${examples.length > 1 ? 's' : ''}`}
            >
              {examples.length > 1 ? 'View examples' : 'View example'}
            </summary>

            <div className="tool-example-content">
              {examples.map((example, exampleIndex) => (
                <div
                  className="tool-example-item"
                  key={`${tool.id}-drawer-example-${exampleIndex}`}
                >
                  <h3>{example.title ?? 'Example in practice'}</h3>
                  <p>{example.context}</p>

                  <div className="drawer-field-list">
                    {example.entries.map((entry) => (
                      <div
                        className="drawer-field-card"
                        key={`${tool.id}-${exampleIndex}-${entry.label}`}
                      >
                        <strong>{entry.label}</strong>
                        <p>{entry.text}</p>
                      </div>
                    ))}
                  </div>

                  {example.nextAdjustment && (
                    <div className="drawer-field-card">
                      <strong>Next adjustment</strong>
                      <p>{example.nextAdjustment}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </details>
        )}
      </aside>
    </div>
  )
}

export default ToolDrawer

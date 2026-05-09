import type { Tool } from '../content/types'

type ToolDrawerProps = {
  tool: Tool | null
  isOpen: boolean
  onClose: () => void
}

function ToolDrawer({ tool, isOpen, onClose }: ToolDrawerProps) {
  if (!tool || !isOpen) {
    return null
  }

  return (
    <div className="drawer-backdrop" role="presentation" onClick={onClose}>
      <aside
        className="tool-drawer"
        aria-label={`${tool.title} tool drawer`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="tool-drawer-header">
          <div>
            <p className="eyebrow">{tool.toolType}</p>
            <h2>{tool.title}</h2>
          </div>

          <button className="drawer-close-button" onClick={onClose}>
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

        {tool.builderStructure.length > 0 && (
          <div className="tool-drawer-section">
            <h3>Prompt structure</h3>
            <ul>
              {tool.builderStructure.map((item, index) => (
                <li key={`${tool.id}-builder-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <details className="tool-drawer-section tool-example">
          <summary className="card-action-button tool-example-button">
            View example
          </summary>

          <div className="tool-example-content">
            <p>{tool.example.context}</p>

            <div className="drawer-field-list">
              {tool.example.entries.map((entry) => (
                <div className="drawer-field-card" key={`${tool.id}-${entry.label}`}>
                  <strong>{entry.label}</strong>
                  <p>{entry.text}</p>
                </div>
              ))}
            </div>

            <div className="drawer-field-card">
              <strong>Next adjustment</strong>
              <p>{tool.example.nextAdjustment}</p>
            </div>
          </div>
        </details>
      </aside>
    </div>
  )
}

export default ToolDrawer
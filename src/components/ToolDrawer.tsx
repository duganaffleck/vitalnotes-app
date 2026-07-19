import type { Tool, ToolExample } from '../content/types'
import { FieldCard, exportTool } from './ToolFields'

type ToolDrawerProps = {
  tool: Tool | null
  isOpen: boolean
  onClose: () => void
}

function getToolExamples(tool: Tool): ToolExample[] {
  return tool.examples ?? []
}

function renderToolList(title: string, items: string[]) {
  if (items.length === 0) {
    return null
  }

  return (
    <details className="tool-drawer-section tool-example">
      <summary
        className="card-action-button tool-example-button"
        aria-label={`View ${title.toLowerCase()}`}
      >
        {title}
      </summary>
      <div className="tool-example-content">
        <ul>
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </details>
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
          <details
            className="tool-drawer-section tool-example"
            key={`${tool.id}-drawer-steps`}
          >
            <summary
              className="card-action-button tool-example-button"
              aria-label={`View quick reference steps for ${tool.title}`}
            >
              View quick reference steps
            </summary>

            <div className="tool-example-content">
              <ol>
                {tool.steps.map((step, index) => (
                  <li key={`${tool.id}-step-${index}`}>{step}</li>
                ))}
              </ol>
            </div>
          </details>
        )}

        {tool.fields.length > 0 && (
          <div className="tool-drawer-section">
            <h3>Fields</h3>
            <p>{tool.fieldIntro ?? 'Use these fields as your working version.'}</p>
            <div className="drawer-field-list">
              {tool.fields.map((field) => (
                <FieldCard
                  key={field.id}
                  toolId={tool.id}
                  field={field}
                  className="drawer-field-card"
                />
              ))}
            </div>
            <div style={{ marginTop: '12px' }}>
              <button
                type="button"
                className="card-action-button"
                onClick={() => exportTool(tool)}
              >
                Export as PDF
              </button>
            </div>
          </div>
        )}

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
                </div>
              ))}
            </div>
          </details>
        )}

        {tool.whenNotToUse &&
          renderToolList('Do not use this when', tool.whenNotToUse)}

        {tool.commonMistakes &&
          renderToolList('Common mistakes', tool.commonMistakes)}

        {tool.toolPointers &&
          renderToolList('Possible next step', tool.toolPointers)}
      </aside>
    </div>
  )
}

export default ToolDrawer

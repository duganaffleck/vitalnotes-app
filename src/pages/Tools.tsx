import { activeTools } from '../content/tools'

type ToolsProps = {
  onNavigate: (hash: string) => void
}

function Tools({ onNavigate }: ToolsProps) {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use tools only when they clarify thinking.</h1>
        <p>
          These are the active first-slice tools. They are not meant to turn
          VitalNotes into a productivity system. They support directive meaning,
          Smart Notes, and clinical recall.
        </p>
      </header>

      <div className="tool-list">
        {activeTools.map((tool) => (
          <article className="tool-panel" key={tool.id}>
            <div className="tool-panel-header">
              <span className="tool-type">{tool.toolType}</span>
              <h2>{tool.title}</h2>
              <p>{tool.purpose}</p>
            </div>

            <div className="tool-section">
              <h3>Use this when</h3>
              <p>{tool.whenToUse}</p>
            </div>

            {tool.steps.length > 0 && (
              <div className="tool-section">
                <h3>Steps</h3>
                <ol>
                  {tool.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {tool.fields.length > 0 && (
              <div className="tool-section">
                <h3>Fields</h3>
                <div className="field-list">
                  {tool.fields.map((field) => (
                    <div className="field-card" key={field.id}>
                      <strong>{field.label}</strong>
                      <p>{field.helperText}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tool.relatedSections.length > 0 && (
              <button
                className="text-button"
                onClick={() =>
                  onNavigate(`#/section/${tool.relatedSections[0]}`)
                }
              >
                Open related section
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Tools
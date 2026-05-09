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
          Smart Notes, clinical recall, scenario learning, OSCE preparation, and
          reflection after performance.
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

            {tool.builderStructure.length > 0 && (
              <div className="tool-section">
                <h3>Prompt structure</h3>
                <ul>
                  {tool.builderStructure.map((item, index) => (
                    <li key={`${tool.id}-builder-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <details className="tool-section tool-example">
              <summary className="card-action-button tool-example-button">
                View example
              </summary>

              <div className="tool-example-content">
                <p>{tool.example.context}</p>

                <div className="field-list">
                  {tool.example.entries.map((entry) => (
                    <div className="field-card" key={`${tool.id}-${entry.label}`}>
                      <strong>{entry.label}</strong>
                      <p>{entry.text}</p>
                    </div>
                  ))}
                </div>

                <div className="field-card">
                  <strong>Next adjustment</strong>
                  <p>{tool.example.nextAdjustment}</p>
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Tools
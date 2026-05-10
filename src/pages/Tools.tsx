import { activeTools } from '../content/tools'
import type { Tool } from '../content/types'

type ToolGroup = {
  title: string
  purpose: string
  toolIds: string[]
}

const toolGroups: ToolGroup[] = [
  {
    title: 'Understanding',
    purpose:
      'Tools for making concepts, directives, and notes easier to think with later.',
    toolIds: ['directive-meaning-check', 'smart-note-template'],
  },
  {
    title: 'Recall',
    purpose:
      'Tools for strengthening access to clinically useful knowledge without turning recall into trivia.',
    toolIds: ['clinical-recall-prompt-builder'],
  },
  {
    title: 'Clinical thinking',
    purpose:
      'Tools for keeping reasoning flexible when early impressions feel convincing.',
    toolIds: ['clinical-reasoning-check'],
  },
  {
    title: 'Practice and performance',
    purpose:
      'Tools for using scenarios and OSCEs as places to adjust thinking, not just display performance.',
    toolIds: ['scenario-day-reset', 'osce-reset'],
  },
  {
    title: 'Reflection and improvement',
    purpose:
      'Tools for turning feedback, errors, and difficult moments into one practical adjustment.',
    toolIds: ['reflection-without-journaling-tool', 'five-whys-tool'],
  },
]

function renderTool(tool: Tool) {
  return (
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
  )
}

function Tools() {
  const toolsById = new Map(activeTools.map((tool) => [tool.id, tool]))

  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use tools only when they clarify thinking.</h1>
        <p>
          These tools are optional supports. Use them when a section gives you a
          problem you want to work through more deliberately, or when a lab,
          scenario, OSCE, or feedback point needs a clearer next step.
        </p>
      </header>

      <div className="cluster-list">
        {toolGroups.map((group) => {
          const groupTools = group.toolIds
            .map((toolId) => toolsById.get(toolId))
            .filter((tool): tool is Tool => Boolean(tool))

          if (groupTools.length === 0) {
            return null
          }

          return (
            <section className="cluster-panel" key={group.title}>
              <div className="cluster-panel-header">
                <div>
                  <p className="cluster-label">Tool group</p>
                  <h2>{group.title}</h2>
                  <p>{group.purpose}</p>
                </div>
              </div>

              <div className="tool-list">{groupTools.map(renderTool)}</div>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Tools
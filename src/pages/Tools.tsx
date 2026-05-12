import { activeTools } from '../content/tools'
import type { Tool, ToolExample } from '../content/types'

type ToolGroup = {
  title: string
  purpose: string
  toolIds: string[]
}

const toolGroups: ToolGroup[] = [
  {
    title: 'Understanding',
    purpose:
      'For directives, notes, and concepts that still feel a bit fuzzy after class or lab.',
    toolIds: ['directive-meaning-check', 'smart-note-template'],
  },
  {
    title: 'Recall',
    purpose:
      'For knowledge that needs to show up during scenarios, not just look familiar during review.',
    toolIds: ['clinical-recall-prompt-builder'],
  },
  {
    title: 'Clinical thinking',
    purpose:
      'For checking your first impression before it quietly becomes the only explanation.',
    toolIds: ['clinical-reasoning-check'],
  },
  {
    title: 'Practice and performance',
    purpose:
      'For scenario days and OSCE prep, especially when feedback needs to turn into one clear adjustment.',
    toolIds: ['scenario-day-reset', 'osce-reset'],
  },
  {
    title: 'Reflection and improvement',
    purpose:
      'For rough scenarios, repeated mistakes, and feedback that needs to become one clear change.',
    toolIds: ['reflection-without-journaling-tool', 'five-whys-tool'],
  },
]

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
    <div className="tool-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function renderExamples(tool: Tool) {
  const examples = getToolExamples(tool)

  if (examples.length === 0) {
    return null
  }

  return (
    <details className="tool-section tool-example" key={`${tool.id}-example`}>
      <summary
        className="card-action-button tool-example-button"
        aria-label={`View ${tool.title} example${examples.length > 1 ? 's' : ''}`}
      >
        {examples.length > 1 ? 'View examples' : 'View example'}
      </summary>

      <div className="tool-example-content">
        {examples.map((example, exampleIndex) => (
          <div className="tool-example-item" key={`${tool.id}-example-${exampleIndex}`}>
            <h3>{example.title ?? 'Example in practice'}</h3>
            <p>{example.context}</p>

            <div className="field-list">
              {example.entries.map((entry) => (
                <div
                  className="field-card"
                  key={`${tool.id}-${exampleIndex}-${entry.label}`}
                >
                  <strong>{entry.label}</strong>
                  <p>{entry.text}</p>
                </div>
              ))}
            </div>

            {example.nextAdjustment && (
              <div className="field-card">
                <strong>Next adjustment</strong>
                <p>{example.nextAdjustment}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </details>
  )
}

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

      {tool.builderStructure.length > 0 &&
        renderToolList('Prompt structure', tool.builderStructure)}

      {tool.shortVersion && renderToolList('Short version', tool.shortVersion)}

      {tool.whenNotToUse &&
        renderToolList('Do not use this when', tool.whenNotToUse)}

      {tool.commonMistakes &&
        renderToolList('Common mistakes', tool.commonMistakes)}

      {renderExamples(tool)}
    </article>
  )
}

function Tools() {
  const toolsById = new Map(activeTools.map((tool) => [tool.id, tool]))

  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use a tool when you need a next step.</h1>
        <p>
          These are small working aids for moments when reading is not quite
          enough. Use them after a section, a lab, a scenario, an OSCE station,
          or a feedback point when you need to turn an idea into something you
          can try.
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

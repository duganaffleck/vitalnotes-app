import { activeTools } from '../content/tools'
import { ToolWorkspace } from '../components/ToolFields'
import { toolRedirects } from '../content/redirects'
import type { Tool, ToolExample } from '../content/types'

type ToolGroup = {
  title: string
  purpose: string
  toolIds: string[]
}

const toolGroups: ToolGroup[] = [
  {
    title: 'Field tools',
    purpose:
      "The six tools from the book. Each one exists because a common student problem kept surviving ordinary advice. Use a tool when it changes the next attempt, and leave it alone when it doesn't.",
    toolIds: [
      'next-attempt-debrief',
      'reset-card',
      'directive-decision-map',
      'cue-to-care-recall-card',
      'skill-breakdown-sheet',
      'scenario-run-sheet',
    ],
  },
  {
    title: 'More tools',
    purpose:
      "Tools from earlier versions of VitalNotes that the book doesn't include. They pair with the extra pages at the end of the Learning Path.",
    toolIds: [
      'smart-note-template',
      'clinical-reasoning-check',
      'reflection-without-journaling-tool',
      'five-whys-tool',
    ],
  },
]

function getToolExamples(tool: Tool): ToolExample[] {
  return tool.examples ?? []
}

function renderToolList(title: string, items: string[], toolId?: string) {
  if (items.length === 0) {
    return null
  }

  return (
    <details
      className="tool-section tool-example"
      key={toolId ? `${toolId}-${title}` : title}
    >
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

function renderStepReference(tool: Tool) {
  if (tool.steps.length === 0) {
    return null
  }

  return (
    <details className="tool-section tool-example" key={`${tool.id}-steps`}>
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

      {renderStepReference(tool)}

      {tool.fields.length > 0 && (
        <div className="tool-section">
          <h3>Fields</h3>
          <p>{tool.fieldIntro ?? 'Use these fields as your working version.'}</p>
          <ToolWorkspace tool={tool} />
        </div>
      )}

      {renderExamples(tool)}

      {tool.whenNotToUse &&
        renderToolList('Do not use this when', tool.whenNotToUse, tool.id)}

      {tool.commonMistakes &&
        renderToolList('Common mistakes', tool.commonMistakes, tool.id)}

      {tool.toolPointers &&
        renderToolList('Possible next step', tool.toolPointers, tool.id)}
    </article>
  )
}

type ToolsProps = {
  toolId?: string
  onNavigate: (hash: string) => void
}

// The Tools page is a chooser: every tool as a short card. Opening one shows just that tool, with its own
// address (#/tools/next-attempt-debrief), so other pages can send a student straight to it.
function Tools({ toolId, onNavigate }: ToolsProps) {
  const toolsById = new Map(activeTools.map((tool) => [tool.id, tool]))
  const selected = toolId ? toolsById.get(toolRedirects[toolId] ?? toolId) : undefined

  if (selected) {
    return (
      <section className="page-stack">
        <nav className="tool-back">
          <button type="button" className="card-action-button" onClick={() => onNavigate('#/tools')}>
            All tools
          </button>
        </nav>
        {renderTool(selected)}
      </section>
    )
  }

  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use a tool when you need a next step.</h1>
        <p>
          These pages aren't a second lab manual. The Next-Attempt Debrief will
          probably see the most use; the others are for more occasional jobs.
          Don't record patient names, addresses, health-card numbers, exact
          dates of birth, or other identifying information from real calls or
          placement.
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

              <div className="tool-chooser">
                {groupTools.map((tool) => (
                  <a className="tool-choice" key={tool.id} href={`#/tools/${tool.id}`}>
                    <strong>{tool.title}</strong>
                    <span>{tool.purpose}</span>
                  </a>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Tools

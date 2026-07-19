import { useState } from 'react'
import { activeTools } from '../content/tools'
import type { Tool, ToolExample } from '../content/types'

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function exportTool(tool: Tool) {
  const answers = tool.fields.map((field) => {
    let value = ''
    try {
      value =
        window.localStorage.getItem(`vitalnotes-tool-${tool.id}-${field.id}`) ??
        ''
    } catch {
      // storage unavailable
    }
    return { label: field.label, value }
  })

  const win = window.open('', '_blank')
  if (!win) {
    return
  }

  const date = new Date().toLocaleDateString('en-CA')
  win.document.write(`<!doctype html><html><head><title>${escapeHtml(tool.title)} — VitalNotes</title><style>
    body { font-family: Georgia, 'Times New Roman', serif; max-width: 680px; margin: 40px auto; padding: 0 24px; color: #222; line-height: 1.55; }
    h1 { font-size: 1.5rem; margin-bottom: 2px; }
    .meta { color: #777; font-size: 0.85rem; margin-bottom: 26px; }
    .field { margin-bottom: 18px; page-break-inside: avoid; }
    .label { font-weight: 700; margin-bottom: 4px; }
    .answer { border: 1px solid #ccc; border-radius: 6px; padding: 10px; min-height: 2.4em; white-space: pre-wrap; }
    .empty { color: #999; font-style: italic; }
    @media print { body { margin: 12mm auto; } }
  </style></head><body>
  <h1>${escapeHtml(tool.title)}</h1>
  <div class="meta">VitalNotes &middot; ${date}</div>
  ${answers
    .map(
      (a) =>
        `<div class="field"><div class="label">${escapeHtml(a.label)}</div><div class="answer${a.value ? '' : ' empty'}">${a.value ? escapeHtml(a.value) : 'Not filled in'}</div></div>`,
    )
    .join('')}
  </body></html>`)
  win.document.close()
  win.focus()
  win.print()
}

function FieldCard({ toolId, field }: { toolId: string; field: Tool['fields'][number] }) {
  const storageKey = `vitalnotes-tool-${toolId}-${field.id}`
  const [value, setValue] = useState<string>(() => {
    try {
      return window.localStorage.getItem(storageKey) ?? ''
    } catch {
      return ''
    }
  })

  const update = (next: string) => {
    setValue(next)
    try {
      window.localStorage.setItem(storageKey, next)
    } catch {
      // storage unavailable; keep in-memory only
    }
  }

  return (
    <div className="field-card">
      <strong>{field.label}</strong>
      <p>{field.helperText}</p>
      <textarea
        rows={3}
        value={value}
        placeholder="Write here. Saved on this device."
        onChange={(event) => update(event.target.value)}
        style={{
          width: '100%',
          marginTop: '8px',
          padding: '10px',
          fontFamily: 'inherit',
          fontSize: '0.95rem',
          lineHeight: 1.5,
          border: '1px solid rgba(0, 0, 0, 0.15)',
          borderRadius: '10px',
          resize: 'vertical',
          background: 'rgba(255, 255, 255, 0.6)',
        }}
      />
    </div>
  )
}

type ToolGroup = {
  title: string
  purpose: string
  toolIds: string[]
}

const toolGroups: ToolGroup[] = [
  {
    title: 'Understanding',
    purpose:
      'Start here when a directive or concept feels unclear, or when an idea is becoming clear enough to keep and develop.',
    toolIds: ['directive-meaning-check', 'smart-note-template'],
  },
  {
    title: 'Recall',
    purpose:
      'Use this when knowledge needs to show up during scenarios, not just look familiar during review.',
    toolIds: ['clinical-recall-prompt-builder'],
  },
  {
    title: 'Clinical thinking',
    purpose:
      'Use this when your first impression may have become too narrow, too confident, or hard to update.',
    toolIds: ['clinical-reasoning-check'],
  },
  {
    title: 'Practice and performance',
    purpose:
      'Use these during scenario days and OSCE prep, especially when feedback needs to become one clear adjustment.',
    toolIds: ['scenario-design-template', 'scenario-day-reset', 'osce-reset'],
  },
  {
    title: 'Reflection and improvement',
    purpose:
      'Use these after rough scenarios, repeated mistakes, and feedback that needs to become one clear change.',
    toolIds: ['reflection-without-journaling-tool', 'five-whys-tool'],
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
          <div className="field-list">
            {tool.fields.map((field) => (
              <FieldCard key={field.id} toolId={tool.id} field={field} />
            ))}
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

function Tools() {
  const toolsById = new Map(activeTools.map((tool) => [tool.id, tool]))

  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use a tool when you need a next step.</h1>
        <p>
          These are small working aids for moments when reading is not quite
          enough. Start with Understanding when something feels unclear, then
          move toward Recall, Clinical thinking, Practice and performance, or
          Reflection and improvement depending on the problem in front of you.
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

import { useState } from 'react'
import type { Tool } from '../content/types'
import { companionApps } from '../content/companionApps'

const fieldKey = (toolId: string, fieldId: string) => `vitalnotes-tool-${toolId}-${fieldId}`
const historyKey = (toolId: string) => `vitalnotes-tool-${toolId}-history`
const HISTORY_MAX = 30

type SavedEntry = { savedAt: string; values: Record<string, string> }

function readField(toolId: string, fieldId: string) {
  try {
    return window.localStorage.getItem(fieldKey(toolId, fieldId)) ?? ''
  } catch {
    return ''
  }
}

function readHistory(toolId: string): SavedEntry[] {
  try {
    const raw = window.localStorage.getItem(historyKey(toolId))
    const list = raw ? JSON.parse(raw) : []
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

function writeHistory(toolId: string, list: SavedEntry[]) {
  try {
    window.localStorage.setItem(historyKey(toolId), JSON.stringify(list.slice(0, HISTORY_MAX)))
  } catch {
    // storage unavailable
  }
}

export function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function exportTool(tool: Tool, saved?: SavedEntry) {
  const answers = tool.fields.map((field) => ({
    label: field.label,
    value: saved ? saved.values[field.id] ?? '' : readField(tool.id, field.id),
  }))

  const win = window.open('', '_blank')
  if (!win) {
    return
  }

  const date = (saved ? new Date(saved.savedAt) : new Date()).toLocaleDateString('en-CA')
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

export function FieldCard({
  toolId,
  field,
  className = 'field-card',
}: {
  toolId: string
  field: Tool['fields'][number]
  className?: string
}) {
  const storageKey = fieldKey(toolId, field.id)
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
    <div className={className}>
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

const shortDate = (iso: string) => {
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })
}

// The working copy of a tool, plus the attempts before it. "Start a new entry" files the current answers under
// today's date and clears the fields, so a student can see whether the same target keeps coming back.
export function ToolWorkspace({ tool, drawer = false }: { tool: Tool; drawer?: boolean }) {
  const [version, setVersion] = useState(0)
  const [history, setHistory] = useState<SavedEntry[]>(() => readHistory(tool.id))
  const [note, setNote] = useState('')

  const current = () => Object.fromEntries(tool.fields.map((f) => [f.id, readField(tool.id, f.id)]))

  const startNew = () => {
    const values = current()
    if (!Object.values(values).some((v) => v.trim())) {
      setNote('Nothing to file yet. Fill in a field first.')
      return
    }
    const next = [{ savedAt: new Date().toISOString(), values }, ...history]
    writeHistory(tool.id, next)
    setHistory(next.slice(0, HISTORY_MAX))
    tool.fields.forEach((f) => {
      try {
        window.localStorage.removeItem(fieldKey(tool.id, f.id))
      } catch {
        // storage unavailable
      }
    })
    setVersion((v) => v + 1)
    setNote('Filed under today’s date. The fields are clear for the next attempt.')
  }

  const remove = (index: number) => {
    if (!window.confirm('Delete this entry? It can’t be brought back.')) return
    const next = history.filter((_, i) => i !== index)
    writeHistory(tool.id, next)
    setHistory(next)
  }

  // The Next-Attempt Debrief's "Next behaviour" can go straight to the Scenario Generator as a practice focus.
  const target = tool.fields.find((f) => f.id === 'next-behaviour')
  const practise = () => {
    const behaviour = target ? readField(tool.id, target.id).trim() : ''
    if (!behaviour) {
      setNote('Write the next behaviour first. That’s what the practice case is built around.')
      return
    }
    const focus = `Practice target: ${behaviour}. Build the case so the cue for this behaviour comes up and a partner can see whether it happens.`.slice(0, 320)
    const url = `${companionApps['scenario-generator'].url}?${new URLSearchParams({ focus }).toString()}`
    window.open(url, '_blank', 'noopener')
  }

  const cardClass = drawer ? 'drawer-field-card' : 'field-card'
  const listClass = drawer ? 'drawer-field-list' : 'field-list'

  return (
    <div className="tool-workspace">
      <div className={listClass} key={version}>
        {tool.fields.map((field) => (
          <FieldCard key={field.id} toolId={tool.id} field={field} className={cardClass} />
        ))}
      </div>
      <div className="tool-workspace-actions">
        {target && (
          <button type="button" className="primary-button" onClick={practise}>
            Practise this target
          </button>
        )}
        <button type="button" className="card-action-button" onClick={() => exportTool(tool)}>
          Export as PDF
        </button>
        <button type="button" className="card-action-button" onClick={startNew}>
          Start a new entry
        </button>
      </div>
      {target && (
        <p className="tool-workspace-hint">
          Practise this target opens the Scenario Generator with your next behaviour as the practice focus.
        </p>
      )}
      {note && (
        <p className="tool-workspace-note" role="status">
          {note}
        </p>
      )}
      {history.length > 0 && (
        <details className="tool-section tool-example tool-history">
          <summary className="card-action-button tool-example-button">
            Earlier entries ({history.length})
          </summary>
          <div className="tool-example-content">
            {history.map((entry, index) => {
              const first = tool.fields.map((f) => entry.values[f.id]).find((v) => v && v.trim()) ?? ''
              return (
                <details className="tool-history-entry" key={entry.savedAt}>
                  <summary>
                    <strong>{shortDate(entry.savedAt)}</strong>
                    <span>{first.length > 90 ? `${first.slice(0, 90)}…` : first}</span>
                  </summary>
                  <div className={listClass}>
                    {tool.fields
                      .filter((f) => (entry.values[f.id] ?? '').trim())
                      .map((f) => (
                        <div className={cardClass} key={f.id}>
                          <strong>{f.label}</strong>
                          <p style={{ whiteSpace: 'pre-wrap' }}>{entry.values[f.id]}</p>
                        </div>
                      ))}
                  </div>
                  <div className="tool-workspace-actions">
                    <button type="button" className="card-action-button" onClick={() => exportTool(tool, entry)}>
                      Export this one
                    </button>
                    <button type="button" className="card-action-button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </div>
                </details>
              )
            })}
          </div>
        </details>
      )}
    </div>
  )
}

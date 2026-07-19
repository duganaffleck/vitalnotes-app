import { useState } from 'react'
import type { Tool } from '../content/types'

export function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function exportTool(tool: Tool) {
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

export function FieldCard({
  toolId,
  field,
  className = 'field-card',
}: {
  toolId: string
  field: Tool['fields'][number]
  className?: string
}) {
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

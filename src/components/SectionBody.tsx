import type { ReactNode } from 'react'
import { companionApps } from '../content/companionApps'
import { sections } from '../content/sections'
import { tools } from '../content/tools'
import type { BodyBlock } from '../content/types'

type SectionBodyProps = {
  body: BodyBlock[]
  sectionId?: string
}

// Chapter and tool names in the text become links: "start with Cognitive Load" takes you there, and
// "the Reset Card" opens that tool. Longest names first, so "Clinical Reasoning Check" wins over "Clinical Reasoning".
const TARGETS = [
  ...sections.map((s) => ({ title: s.title, href: `#/section/${s.id}`, id: s.id })),
  ...tools.map((t) => ({ title: t.title, href: `#/tools/${t.id}`, id: t.id })),
].sort((a, b) => b.title.length - a.title.length)
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const TITLE_RE = new RegExp(`\\b(${TARGETS.map((t) => escapeRe(t.title)).join('|')})\\b`, 'g')

function linkTitles(text: string, selfId?: string): ReactNode {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(TITLE_RE)) {
    const target = TARGETS.find((t) => t.title === m[1])
    if (!target || target.id === selfId || m.index === undefined) continue
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(
      <a className="inline-xref" href={target.href} key={`${m.index}-${target.id}`}>
        {m[1]}
      </a>,
    )
    last = m.index + m[1].length
  }
  if (!out.length) return text
  if (last < text.length) out.push(text.slice(last))
  return out
}

function getListClassName(body: BodyBlock[], index: number, itemCount: number) {
  const previousBlock = body[index - 1]
  const nextBlock = body[index + 1]

  return [
    'section-list',
    itemCount >= 4 ? 'section-list--dense' : '',
    previousBlock?.type === 'list' ? 'section-list--after-list' : '',
    nextBlock?.type === 'list' ? 'section-list--before-list' : '',
  ]
    .filter(Boolean)
    .join(' ')
}

function SectionBody({ body, sectionId }: SectionBodyProps) {
  return (
    <div className="section-body">
      {body.map((block, index) => {
        if (block.type === 'heading') {
          return <h2 key={`${block.type}-${index}`}>{block.text}</h2>
        }

        if (block.type === 'list') {
          return (
            <ul
              className={getListClassName(body, index, block.items.length)}
              key={`${block.type}-${index}`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={`${block.type}-${index}-${itemIndex}`}>{linkTitles(item, sectionId)}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'companion') {
          const app = companionApps[block.app]
          const [base, hash = ''] = app.url.split('#')
          const href = block.query
            ? `${base}?${block.query}${hash ? `#${hash}` : ''}`
            : app.url
          return (
            <aside
              className="companion-callout"
              key={`${block.type}-${index}`}
              aria-label={`Companion app: ${app.name}`}
            >
              <span className="companion-callout-label">Companion app · {app.name}</span>
              <p>{block.text}</p>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {block.action ?? app.action}
              </a>
            </aside>
          )
        }

        if (block.type === 'placeholder') {
          return (
            <p className="placeholder-copy" key={`${block.type}-${index}`}>
              {block.text}
            </p>
          )
        }

        return <p key={`${block.type}-${index}`}>{linkTitles(block.text, sectionId)}</p>
      })}
    </div>
  )
}

export default SectionBody

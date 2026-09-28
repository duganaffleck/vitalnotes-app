import { companionApps } from '../content/companionApps'
import type { BodyBlock } from '../content/types'

type SectionBodyProps = {
  body: BodyBlock[]
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

function SectionBody({ body }: SectionBodyProps) {
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
                <li key={`${block.type}-${index}-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'companion') {
          const app = companionApps[block.app]
          return (
            <aside
              className="companion-callout"
              key={`${block.type}-${index}`}
              aria-label={`Companion app: ${app.name}`}
            >
              <span className="companion-callout-label">Companion app · {app.name}</span>
              <p>{block.text}</p>
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                {app.action}
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

        return <p key={`${block.type}-${index}`}>{block.text}</p>
      })}
    </div>
  )
}

export default SectionBody

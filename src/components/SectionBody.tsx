import type { BodyBlock } from '../content/types'

type SectionBodyProps = {
  body: BodyBlock[]
}

function SectionBody({ body }: SectionBodyProps) {
  return (
    <div className="section-body">
      {body.map((block, index) => {
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
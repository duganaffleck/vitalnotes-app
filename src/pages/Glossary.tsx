import { orderedGlossaryTerms } from '../content/glossary'

function Glossary() {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Glossary</p>
        <h1>Short definitions for terms used in the guide.</h1>
        <p>
          These definitions are meant to support reading. They are intentionally
          brief, plain-language, and connected to paramedic learning.
        </p>
      </header>

      <div className="glossary-list">
        {orderedGlossaryTerms.map((term) => (
          <article className="glossary-card" key={term.id}>
            <h2>{term.term}</h2>
            <p>{term.shortDefinition}</p>
            <p className="muted-copy">{term.paramedicRelevance}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Glossary
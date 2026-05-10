import { orderedGlossaryTerms } from '../content/glossary'

function Glossary() {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Glossary</p>
        <h1>Plain-language terms from the guide.</h1>
        <p>
          Use this page when a word keeps slowing you down. The definitions stay
          short and connected to paramedic learning, so you can get back to the
          section without turning the glossary into another reading task.
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
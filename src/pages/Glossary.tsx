import { useMemo, useState } from 'react'
import { orderedGlossaryTerms } from '../content/glossary'

function Glossary() {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()

  const filteredTerms = useMemo(() => {
    if (!normalizedQuery) {
      return orderedGlossaryTerms
    }

    return orderedGlossaryTerms.filter((term) => {
      const searchableText = [
        term.term,
        term.shortDefinition,
        term.paramedicRelevance,
      ]
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [normalizedQuery])

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

      <div className="glossary-search-panel">
        <div>
          <p className="cluster-label">Find a term</p>
          <label className="glossary-search-label" htmlFor="glossary-search">
            Search the glossary
          </label>
        </div>

        <input
          aria-describedby="glossary-search-count"
          className="glossary-search-input"
          id="glossary-search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a term, definition, or clinical idea"
          type="search"
          value={query}
        />

        <p className="glossary-search-count" id="glossary-search-count">
          Showing {filteredTerms.length} of {orderedGlossaryTerms.length}{' '}
          glossary terms.
        </p>
      </div>

      <div className="glossary-list">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term) => (
            <article className="glossary-card" key={term.id}>
              <h2>{term.term}</h2>
              <p>{term.shortDefinition}</p>
              <p className="muted-copy">{term.paramedicRelevance}</p>
            </article>
          ))
        ) : (
          <article className="glossary-card glossary-card--empty">
            <h2>No matching terms yet.</h2>
            <p>
              Try a shorter word, a related clinical idea, or return to the
              section where the term appeared.
            </p>
          </article>
        )}
      </div>
    </section>
  )
}

export default Glossary

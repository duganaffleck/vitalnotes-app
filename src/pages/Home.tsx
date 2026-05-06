import { firstSection } from '../content/sections'

type HomeProps = {
  onNavigate: (hash: string) => void
}

function Home({ onNavigate }: HomeProps) {
  return (
    <section className="page-stack">
      <div className="hero-card">
        <p className="eyebrow">VitalNotes</p>
        <h1>Learning paramedicine with structure, not noise.</h1>
        <p>
          VitalNotes is a student-facing guide for learning how to learn
          paramedicine. It focuses on understanding, recall, notes, reasoning,
          scenarios, and performance under pressure.
        </p>

        <div className="hero-actions">
          <button
            className="primary-button"
            onClick={() => onNavigate('#/learning-path')}
          >
            Open the Learning Path
          </button>
          <button
            className="secondary-button"
            onClick={() => onNavigate(`#/section/${firstSection.id}`)}
          >
            Start at the beginning
          </button>
        </div>
      </div>

      <div className="three-column-grid">
        <article className="info-card">
          <h2>Start with the problem you recognize.</h2>
          <p>
            If studying feels productive but does not hold up in scenarios, begin
            with the learning path rather than adding more content.
          </p>
        </article>

        <article className="info-card">
          <h2>Use tools when they help thinking.</h2>
          <p>
            The tools are optional supports. They clarify decisions, notes, and
            recall. They are not another system to maintain.
          </p>
        </article>

        <article className="info-card">
          <h2>Keep the guide close to practice.</h2>
          <p>
            The goal is learning that transfers into labs, OSCEs, scenarios, and
            real patient care.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Home

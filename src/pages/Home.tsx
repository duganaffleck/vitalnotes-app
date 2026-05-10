import { firstSection } from '../content/sections'

type HomeProps = {
  onNavigate: (hash: string) => void
}

function Home({ onNavigate }: HomeProps) {
  return (
    <section className="page-stack">
      <div className="hero-card">
        <p className="eyebrow">VitalNotes</p>
        <h1>A guide for studying paramedicine when more review is not enough.</h1>
        <p>
          VitalNotes helps paramedic students build the kind of learning that
          holds up in lab, scenarios, OSCEs, and early clinical practice.
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
          <h2>Start where things are breaking down.</h2>
          <p>
            If review feels familiar but scenarios still feel messy, begin with
            the learning path before adding more material.
          </p>
        </article>

        <article className="info-card">
          <h2>Use a tool when you need a next step.</h2>
          <p>
            The tools are small aids for notes, recall, decisions, practice, and
            feedback. They are not extra homework.
          </p>
        </article>

        <article className="info-card">
          <h2>Keep it close to the call.</h2>
          <p>
            The goal is learning that shows up when you are assessing,
            deciding, communicating, and reassessing.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Home
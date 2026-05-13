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
            type="button"
            className="primary-button"
            onClick={() => onNavigate('#/learning-path')}
          >
            Open the Learning Path
          </button>
        </div>
      </div>

      <div className="three-column-grid">
        <article className="info-card">
          <h2>If scenarios keep falling apart.</h2>
          <p>
            Start with cognitive load. It explains why knowledge can feel
            familiar during review and still become hard to use when the room
            gets noisy.
          </p>
          <button
            type="button"
            className="card-action-button"
            onClick={() => onNavigate('#/section/cognitive-load')}
          >
            Read Cognitive Load
          </button>
        </article>

        <article className="info-card">
          <h2>Use a tool when you need a next step.</h2>
          <p>
            The tools are small aids for notes, recall, decisions, practice, and
            feedback. They are not extra homework.
          </p>
        </article>

        <article className="info-card">
          <h2>If feedback keeps replaying.</h2>
          <p>
            Start with a small reflection structure before a rough scenario
            turns into a whole-day replay.
          </p>
          <button
            type="button"
            className="card-action-button"
            onClick={() => onNavigate('#/section/reflection-without-journaling')}
          >
            Read Reflection Without Journaling
          </button>
        </article>
      </div>
    </section>
  )
}

export default Home

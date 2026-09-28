type HomeProps = {
  onNavigate: (hash: string) => void
}

function Home({ onNavigate }: HomeProps) {
  return (
    <section className="page-stack">
      <div className="hero-card">
        <p className="eyebrow">Learning how to learn paramedicine</p>
        <h1>For the gap between studying and performing.</h1>
        <p>
          VitalNotes is a learning guide for Ontario Primary Care Paramedic
          students. Read it in order, or go directly to the problem in front of
          you. Use a field tool when it gives the next attempt a clearer job.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onNavigate('#/learning-path')}
          >
            Open the Learning Path
          </button>
          <button
            type="button"
            className="card-action-button"
            onClick={() => onNavigate('#/section/introduction')}
          >
            Where to begin
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
          <h2>If feedback needs to become a change.</h2>
          <p>
            The six field tools each do one job. The Next-Attempt Debrief turns
            feedback into one observable change you can test on the next call.
          </p>
          <button
            type="button"
            className="card-action-button"
            onClick={() => onNavigate('#/tools')}
          >
            Open Tools
          </button>
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
            onClick={() => onNavigate('#/section/reflection-without-rumination')}
          >
            Read Reflection Without Rumination
          </button>
        </article>
      </div>
    </section>
  )
}

export default Home

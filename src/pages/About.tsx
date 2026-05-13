function About() {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">About VitalNotes</p>
        <h1>Why this guide exists.</h1>
        <p>
          VitalNotes was created for paramedic students who are working hard,
          studying seriously, and still finding that their learning does not
          always show up when the room gets noisy.
        </p>
      </header>

      <div className="about-layout">
        <article className="about-panel about-panel-primary">
          <h2>Built from a real teaching gap</h2>
          <p>
            I created VitalNotes after watching students run into the same kind
            of problem again and again. They had notes. They had slides. They
            had protocols, medication lists, and exam expectations. Many were
            putting in the time.
          </p>
          <p>
            The harder part was not always knowing more. It was learning how to
            organize what they knew, retrieve it under pressure, reason through
            uncertainty, recover after mistakes, and keep improving without
            turning every rough scenario into a verdict on their ability.
          </p>
          <p>
            Paramedic school gives students a lot to carry. VitalNotes is meant
            to help students carry it with more structure and less wasted strain.
          </p>
        </article>

        <article className="about-panel">
          <h2>Who I am</h2>
          <p>
            I am a working paramedic and paramedic instructor. I spend a lot of
            time watching students learn in labs, scenarios, OSCEs, and clinical
            practice preparation.
          </p>
          <p>
            That matters because this guide is not written from a distance. It
            comes from the places where students freeze, hesitate, overthink,
            rush, recover, and slowly become steadier.
          </p>
        </article>

        <article className="about-panel">
          <h2>Who this is for</h2>
          <p>
            This guide is for paramedic students who want their studying to hold
            up beyond the page.
          </p>
          <ul className="about-list">
            <li>Students who review often but still blank in scenarios.</li>
            <li>Students who know content but struggle to use it in context.</li>
            <li>Students preparing for labs, OSCEs, and early clinical practice.</li>
            <li>Students trying to learn from feedback without spiraling.</li>
            <li>Students who want better notes, recall, reasoning, and practice habits.</li>
          </ul>
        </article>

        <article className="about-panel about-start-panel">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>Begin with the Learning Path</h2>
            <p>
              The Learning Path is the clearest way into VitalNotes. Start there
              if you are new to the guide, then branch into Tools, Resources, or
              the Glossary when a section gives you a reason to.
            </p>
          </div>

          <a className="card-action-button" href="#/learning-path">
            Open the Learning Path
          </a>
        </article>

        <article className="about-panel">
          <h2>What VitalNotes does</h2>
          <p>
            VitalNotes focuses on the learning layer underneath paramedic
            performance. It looks at cognitive load, memory, retrieval,
            note-making, clinical reasoning, scenarios, pressure, and reflection
            in plain language.
          </p>
          <p>
            The goal is not to add more content to memorize. The goal is to help
            students build habits that make their existing learning easier to
            access, test, revise, and use when it matters.
          </p>
        </article>

        <article className="about-panel">
          <h2>What this guide does not replace</h2>
          <p>
            VitalNotes sits beside your program, instructors, standards, medical
            directives, textbooks, lab practice, and clinical judgment.
          </p>
          <p>
            Use it alongside those things. Read the sections that match the
            problem you are facing. Try one tool at a time. Bring the ideas back
            into labs, scenarios, OSCE preparation, and feedback.
          </p>
        </article>

        <aside
          className="external-resource-card"
          aria-labelledby="feedback-title"
        >
          <div>
            <p className="eyebrow">Feedback</p>
            <h2 id="feedback-title">Help improve VitalNotes</h2>
            <p>
              If something felt useful, unclear, too long, too vague, or worth
              expanding, you can send a note here. Please avoid including
              patient details or identifying information from real calls,
              placements, or clinical settings.
            </p>
          </div>

          <a
            className="external-resource-button"
            href="https://forms.gle/GVBVGx8VMQkemgPNA"
            target="_blank"
            rel="noreferrer"
            aria-label="Send feedback about VitalNotes in a new tab"
          >
            Send feedback
          </a>
        </aside>
      </div>
    </section>
  )
}

export default About

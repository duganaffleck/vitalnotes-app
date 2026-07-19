function ScenarioGenerator() {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Scenario Generator</p>
        <h1>A companion practice tool for paramedic scenarios.</h1>
        <p>
          Use the Scenario Generator when you need a realistic case to work
          through, adapt, or discuss. VitalNotes helps you understand how to
          learn from practice. The Scenario Generator gives you another
          practice situation to think through.
        </p>
      </header>

      <div className="about-layout">
        <article className="about-panel about-panel-primary">
          <h2>What it is</h2>
          <p>
            The Scenario Generator is a separate companion tool that creates
            paramedic learning scenarios. It can help you practise assessment,
            clinical reasoning, communication, documentation, and reflection
            using realistic case material.
          </p>
          <p>
            It works best when you treat each scenario as a chance to practise
            how you think, not just as another case to finish.
          </p>
        </article>

        <article className="about-panel">
          <h2>When to use it</h2>
          <ul className="about-list">
            <li>Before lab, when you want another case to reason through.</li>
            <li>When you and a practice partner need a case to run and want to skip the writing.</li>
            <li>After feedback, when you need to test one specific adjustment.</li>
            <li>Before an OSCE, when you want to practise staying organized under pressure.</li>
            <li>When a presentation, directive, or decision point still feels unstable.</li>
            <li>When you want to compare how similar calls can unfold differently.</li>
          </ul>
        </article>

        <article className="about-panel">
          <h2>How it connects to VitalNotes</h2>
          <p>
            The guide's Practice Like It's Real cluster teaches you to design
            and run your own practice scenarios with a partner, and the
            Scenario Design Template on the{' '}
            <a href="#/tools">Tools page</a> gives that process a working
            structure. The generator fits directly into that workflow: generate
            a case, strip it to one page, choose your own learning target, and
            run it.
          </p>
          <p>
            Start with{' '}
            <a href="#/section/design-and-run-your-own-scenarios">
              Design and Run Your Own Scenarios
            </a>{' '}
            if you want the full method, including how to play the patient,
            debrief in five minutes, and build a case bank across a semester.
          </p>
        </article>

        <article className="about-panel">
          <h2>What it does not replace</h2>
          <p>
            The Scenario Generator does not replace your instructors, lab time,
            program standards, medical directives, textbooks, or clinical
            judgment.
          </p>
          <p>
            Treat it as practice support. Use it to rehearse thinking, notice
            gaps, and prepare better questions for class, lab, placement, or
            feedback.
          </p>
        </article>

        <aside
          className="external-resource-card"
          aria-labelledby="scenario-generator-link-title"
        >
          <div>
            <p className="eyebrow">Companion tool</p>
            <h2 id="scenario-generator-link-title">Open Scenario Generator</h2>
            <p>
              This opens the Scenario Generator in a separate tab so you can
              keep VitalNotes available while you practise.
            </p>
          </div>

          <a
            className="external-resource-button"
            href="https://scenario-generator-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Scenario Generator in a new tab"
          >
            Open Scenario Generator
          </a>
        </aside>
      </div>
    </section>
  )
}

export default ScenarioGenerator
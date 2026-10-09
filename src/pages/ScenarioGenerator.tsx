import { companionApps, practiceAcrVersion, practiceAcrUrl } from '../content/companionApps'

// The two practice apps that sit beside the guide: where they help, and where the guide covers the method.
function PracticeApps() {
  const generator = companionApps['scenario-generator']
  const review = companionApps['acr-review']

  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Practice Apps</p>
        <h1>Two apps for the practice the guide describes.</h1>
        <p>
          VitalNotes explains how to turn a scenario into a practice target and
          how to use documentation as thinking. The Scenario Generator and ACR
          Review give you the case and the chart to practise on. They are
          separate apps from the same family and open in a new tab.
        </p>
      </header>

      <div className="about-layout">
        <article className="about-panel about-panel-primary">
          <h2>{generator.name}</h2>
          <p>
            Builds Ontario PCP simulation scenarios for the semester, call type
            and complexity you choose. Each one has the dispatch, the patient,
            vitals that change over the call, expected management, what happens
            with good, delayed or wrong care, GRS anchors, and ECG strips when
            the call needs them. You can print a scenario or share it as a link.
          </p>
          <p>
            Use it when you and a partner need a case and would rather not
            write one. Pick the learning target first, the way{' '}
            <a href="#/section/design-and-run-your-own-scenarios">
              Design and Run Your Own Scenarios
            </a>{' '}
            describes, then run the case against it. Check any generated
            clinical detail against the current standards before you rely on
            it.
          </p>
          <a
            className="external-resource-button"
            href={generator.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {generator.action}
          </a>
        </article>

        <article className="about-panel about-panel-primary">
          <h2>{review.name}</h2>
          <p>
            A practice Ambulance Call Report with feedback. On a generated
            scenario, download the Practice ACR with the dispatch already filled
            in, chart the call, and upload it. The review checks the chart
            against the documentation standards and against the scenario, and
            it puts the most important fixes first.
          </p>
          <p>
            It is for practice charts from lab only. Never upload an ACR from a
            real call or placement. The guide's section on{' '}
            <a href="#/section/documentation-as-thinking">
              Documentation as Thinking
            </a>{' '}
            explains what to practise and why.
          </p>
          <p>
            For a new chart, use{' '}
            <a href={practiceAcrUrl} target="_blank" rel="noopener noreferrer">
              Practice ACR v{practiceAcrVersion}
            </a>. Fill it in and save it in Adobe Acrobat Reader, then close and
            reopen the saved PDF to check your entries before uploading it.
            Completed earlier v3 forms are still accepted by ACR Review.
          </p>
          <a
            className="external-resource-button"
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {review.action}
          </a>
        </article>

        <article className="about-panel">
          <h2>How they fit with the guide</h2>
          <ul className="about-list">
            <li>
              Choose one decision or behaviour to test. The{' '}
              <a href="#/tools/scenario-run-sheet">Scenario Run Sheet</a> keeps the case fair.
            </li>
            <li>Generate a case that fits it, and run it with a partner.</li>
            <li>Chart the call on the Practice ACR and upload it to ACR Review.</li>
            <li>
              Turn what you learned into one change with the{' '}
              <a href="#/tools/next-attempt-debrief">Next-Attempt Debrief</a>, then test it on the
              next case.
            </li>
          </ul>
        </article>

        <article className="about-panel">
          <h2>What they don't replace</h2>
          <p>
            Neither app replaces your instructors, lab time, your program's
            standards, the current Patient Care Standards, or your base
            hospital. Treat them as extra repetitions, and bring what they show
            you back to class, lab and your preceptor.
          </p>
        </article>
      </div>
    </section>
  )
}

export default PracticeApps

import SectionCard from '../components/SectionCard'
import { orderedLearningPath } from '../content/learningPath'
import { getSectionById } from '../content/sections'

type LearningPathProps = {
  onNavigate: (hash: string) => void
}

function LearningPath({ onNavigate }: LearningPathProps) {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Learning Path</p>
        <h1>Start with the first problem, then build from there.</h1>
        <p>
          The guide begins with why studying can feel solid until lab gets
          messy. From there, it moves into understanding, notes, recall,
          clinical reasoning, scenario practice, OSCE pressure, and what to do
          with feedback afterward.
        </p>
      </header>

      <div className="cluster-list">
        {orderedLearningPath.map((cluster) => {
          const clusterSections = cluster.sections
            .map((sectionId) => {
              const section = getSectionById(sectionId)
              return section
            })
            .filter(Boolean)

          return (
            <section className="cluster-panel" key={cluster.id}>
              <div className="cluster-panel-header">
                <div>
                  <p className="cluster-label">{cluster.title}</p>
                  <h2>{cluster.purpose}</h2>
                </div>
              </div>

              <div className="section-grid">
                {clusterSections.map((section) =>
                  section ? (
                    <SectionCard
                      key={section.id}
                      section={section}
                      onNavigate={onNavigate}
                    />
                  ) : null,
                )}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default LearningPath
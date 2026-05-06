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
        <h1>Move through the guide in a steady order.</h1>
        <p>
          This path starts with orientation, then moves into why learning feels
          hard, how understanding forms, how notes support thinking, and how
          recall becomes more reliable.
        </p>
      </header>

      <div className="cluster-list">
        {orderedLearningPath.map((cluster) => {
          const clusterSections = cluster.sections
            .map((sectionId) => getSectionById(sectionId))
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
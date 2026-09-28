import SectionCard from '../components/SectionCard'
import { orderedLearningPath } from '../content/learningPath'
import { getSectionById } from '../content/sections'

type LearningPathProps = {
  onNavigate: (hash: string) => void
}

function LearningPath({ onNavigate }: LearningPathProps) {
  return (
    <section className="page-stack learning-path-page">
      <header className="page-header">
        <p className="eyebrow">Learning Path</p>
        <h1>Start with the first problem, then build from there.</h1>
        <p>
          The guide follows the book: nine parts, from why studying can feel
          solid until lab gets messy, through understanding, notes, recall,
          clinical reasoning, practice and reflection, to learning on the
          truck. A few extra pages from earlier versions of VitalNotes sit at
          the end.
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
            <section className="cluster-panel learning-path-cluster" key={cluster.id}>
              <div className="cluster-panel-header learning-path-cluster-header">
                <div>
                  <p className="cluster-label">{cluster.title}</p>
                  <h2 className="learning-path-cluster-purpose">{cluster.purpose}</h2>
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

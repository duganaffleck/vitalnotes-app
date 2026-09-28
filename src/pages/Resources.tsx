import {
  obsidianFolderStructure,
  resourceSections,
  resourcesBridgeCard,
  resourcesIntro,
  relatedSystemCards,
  sourceCategories,
  standardsLink,
  type ResourceCard,
} from '../content/resources'
import '../styles/resources.css'

type ResourcesProps = {
  onNavigate: (hash: string) => void
}

function ResourceAction({ link }: { link: ResourceCard['link'] }) {
  if (!link) return null

  if (link.external) {
    return (
      <a
        className="external-resource-button resource-page-action"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {link.label}
      </a>
    )
  }

  return (
    <a className="card-action-button resource-page-action" href={link.href}>
      {link.label}
    </a>
  )
}

function ResourceContentBlock({ card }: { card: ResourceCard }) {
  return (
    <article className="resource-content-block">
      <h3 className="resource-body-heading">{card.title}</h3>

      {card.linkPlacement === 'before-content' ? <ResourceAction link={card.link} /> : null}

      {card.body?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {card.orderedList ? (
        <ol className="resource-list resource-list-numbered">
          {card.orderedList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : null}

      {card.list ? (
        <ul className="resource-list">
          {card.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {card.codeBlock ? <pre>{card.codeBlock}</pre> : null}

      {card.linkPlacement !== 'before-content' ? <ResourceAction link={card.link} /> : null}
    </article>
  )
}

function Resources({ onNavigate }: ResourcesProps) {
  return (
    <section className="page-stack resources-page">
      <header className="page-header resources-page-header">
        <p className="eyebrow">{resourcesIntro.eyebrow}</p>
        <h1>{resourcesIntro.title}</h1>
        <p>{resourcesIntro.subtitle}</p>
      </header>

      <section className="cluster-panel resource-intro-panel">
        <div className="resource-reading-copy">
          {resourcesIntro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="cluster-panel resource-bridge-panel">
        <div className="cluster-panel-header">
          <div>
            <p className="cluster-label">Tools page</p>
            <h2>{resourcesBridgeCard.title}</h2>
            {resourcesBridgeCard.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <button
          className="card-action-button resource-page-action"
          type="button"
          onClick={() => onNavigate(resourcesBridgeCard.link?.href ?? '#/tools')}
        >
          {resourcesBridgeCard.link?.label ?? 'Go to Tools'}
        </button>
      </section>

      {resourceSections.map((section) => (
        <section
          className={`cluster-panel resource-section-panel resource-section-panel-${section.accent}`}
          key={section.id}
        >
          <div className="cluster-panel-header resource-section-heading">
            <div>
              {section.label ? <p className="cluster-label">{section.label}</p> : null}
              <h2>{section.title}</h2>
              {section.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="resource-content-flow">
            {section.cards.map((card) => (
              <ResourceContentBlock card={card} key={card.id} />
            ))}
          </div>

          {section.id === 'obsidian' ? (
            <details className="tool-section tool-example resource-folder-details">
              <summary
                className="card-action-button tool-example-button resource-folder-button"
                aria-label="View suggested folder structure for Obsidian"
              >
                View suggested folder structure
              </summary>

              <div className="tool-example-content resource-folder-content">
                <p>
                  Keep this small. You can start with only Inbox and Notes. Add folders only when they solve a real problem.
                </p>
                <pre>{obsidianFolderStructure}</pre>
              </div>
            </details>
          ) : null}
        </section>
      ))}

      <section className="cluster-panel resource-feature-panel">
        <div className="cluster-panel-header">
          <div>
            <h2>More places to go from here</h2>
            <p>
              These sit outside the main reading path. Use them when you need scenario practice or a quick definition, not as extra required steps.
            </p>
          </div>
        </div>

        <div className="resource-system-grid">
          {relatedSystemCards.map((card) => (
            <article className="resource-system-card" key={card.id}>
              <h3>{card.title}</h3>
              <div className="resource-system-card-body">
                {card.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ResourceAction link={card.link} />
            </article>
          ))}
        </div>
      </section>

      <section className="cluster-panel resource-sources-panel">
        <div className="cluster-panel-header resource-section-heading">
          <div>
            <h2>What VitalNotes Is Built From</h2>
            <p>
              VitalNotes is a practical guide, but its central learning claims draw from established research on cognitive load, retrieval, spacing, deliberate practice, simulation, feedback, mental rehearsal, and reflection. Their application to Ontario paramedic education is the author's interpretation, informed by teaching, field experience, and student feedback. The field tools are practical adaptations developed for VitalNotes; they are not validated assessment instruments.
            </p>
          </div>
        </div>

        <div className="resource-source-grid">
          {sourceCategories.map((category) => (
            <article className="resource-source-block" key={category.id}>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={`${category.id}-${item.title}`}>
                    <span>{item.title}</span>
                    {item.author ? <small>{item.author}</small> : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="resource-standards-row">
          <p>
            For current Ontario standards and practice documents, use the official Ministry of Health page.
          </p>
          <ResourceAction link={standardsLink} />
        </div>
      </section>
    </section>
  )
}

export default Resources

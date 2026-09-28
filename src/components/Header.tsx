import Navigation from './Navigation'
import { companionApps } from '../content/companionApps'

type HeaderProps = {
  currentPage: string
  onNavigate: (hash: string) => void
}

// Same header band as the Scenario Generator and ACR Review, so the three read as one family.
function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="brand-hero" role="banner">
      <div className="brand-hero-topline">
        <div className="brand-badge">VitalNotes</div>
        <nav className="brand-family" aria-label="VitalNotes apps">
          <a className="brand-family-link" href="#/" aria-current="page">
            Guide
          </a>
          {Object.values(companionApps).map((app) => (
            <a
              key={app.id}
              className="brand-family-link"
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {app.name}
            </a>
          ))}
        </nav>
      </div>

      <button
        type="button"
        className="brand-heading-row"
        onClick={() => onNavigate('#/')}
        aria-label="Go to VitalNotes home"
      >
        <img src="/vitalnotes-mark.svg" alt="" className="brand-logo" />
        <span>
          <strong className="brand-title">VitalNotes</strong>
          <span className="brand-tagline">
            Learning how to learn paramedicine. For the gap between studying and
            performing.
          </span>
        </span>
      </button>

      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
    </header>
  )
}

export default Header

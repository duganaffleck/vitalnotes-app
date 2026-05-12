import Navigation from './Navigation'

type HeaderProps = {
  currentPage: string
  onNavigate: (hash: string) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <button
        type="button"
        className="brand-button"
        onClick={() => onNavigate('#/')}
        aria-label="Go to VitalNotes home"
      >
        <span className="brand-mark" aria-hidden="true">
          <img src="/vitalnotes-mark.svg" alt="" />
        </span>
        <span>
          <strong>VitalNotes</strong>
          <small>For the gap between studying and performing.</small>
        </span>
      </button>

      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
    </header>
  )
}

export default Header

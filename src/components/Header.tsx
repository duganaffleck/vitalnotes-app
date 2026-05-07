import Navigation from './Navigation'

type HeaderProps = {
  currentPage: string
  onNavigate: (hash: string) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => onNavigate('#/')}>
        <span className="brand-mark" aria-hidden="true">
  <img src="/vitalnotes-mark.svg" alt="" />
</span>
        <span>
          <strong>VitalNotes</strong>
          <small>Learning paramedicine with structure</small>
        </span>
      </button>

      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
    </header>
  )
}

export default Header
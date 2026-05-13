import Header from './Header'

type LayoutProps = {
  currentPage: string
  onNavigate: (hash: string) => void
  children: React.ReactNode
}

function Layout({ currentPage, onNavigate, children }: LayoutProps) {
  return (
    <div className="app-shell">
      <Header currentPage={currentPage} onNavigate={onNavigate} />

      <main className="main-content">{children}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="site-footer-support-text">
            VitalNotes is free for students. If it has helped you study,
            teach, or think through paramedicine more clearly, you can support
            future maintenance and tools.
          </p>

          <a
            href="https://ko-fi.com/duganaffleck"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-support-link"
          >
            Support VitalNotes
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout

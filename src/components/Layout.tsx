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
    </div>
  )
}

export default Layout
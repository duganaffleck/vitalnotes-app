type NavigationProps = {
  currentPage: string
  onNavigate: (hash: string) => void
}

const navItems = [
  { label: 'Home', page: 'home', hash: '#/' },
  { label: 'Learning Path', page: 'learning-path', hash: '#/learning-path' },
  { label: 'Tools', page: 'tools', hash: '#/tools' },
  { label: 'Glossary', page: 'glossary', hash: '#/glossary' },
]

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {navItems.map((item) => (
        <button
          key={item.page}
          className={currentPage === item.page ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate(item.hash)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
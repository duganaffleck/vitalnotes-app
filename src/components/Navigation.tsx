type NavigationProps = {
  currentPage: string
  onNavigate: (hash: string) => void
}

const navItems = [
  { label: 'Home', page: 'home', hash: '#/' },
  { label: 'Learning Path', page: 'learning-path', hash: '#/learning-path' },
  { label: 'Tools', page: 'tools', hash: '#/tools' },
  { label: 'Resources', page: 'resources', hash: '#/resources' },
  { label: 'About', page: 'about', hash: '#/about' },
]

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {navItems.map((item) => (
        <button
          key={item.page}
          type="button"
          className={currentPage === item.page ? 'nav-link active' : 'nav-link'}
          aria-current={currentPage === item.page ? 'page' : undefined}
          onClick={() => onNavigate(item.hash)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation

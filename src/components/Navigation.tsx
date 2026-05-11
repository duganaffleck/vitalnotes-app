type NavigationProps = {
  currentPage: string
  onNavigate: (hash: string) => void
}

const navItems = [
  { label: 'Home', page: 'home', hash: '#/' },
  { label: 'Learning Path', page: 'learning-path', hash: '#/learning-path' },
  { label: 'Tools', page: 'tools', hash: '#/tools' },
  { label: 'Glossary', page: 'glossary', hash: '#/glossary' },
  {
    label: 'Scenario Generator',
    page: 'scenario-generator',
    hash: 'https://scenario-generator-ten.vercel.app/',
  },
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
          onClick={() => {
            if (item.hash.startsWith('http')) {
              window.open(item.hash, '_blank', 'noopener,noreferrer')
              return
            }

            onNavigate(item.hash)
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
import { useEffect, useMemo, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import LearningPath from './pages/LearningPath'
import SectionPage from './pages/SectionPage'
import Tools from './pages/Tools'
import Glossary from './pages/Glossary'
import About from './pages/About'
import { firstSection, getSectionById } from './content/sections'

type AppRoute = {
  page: 'home' | 'learning-path' | 'section' | 'tools' | 'glossary' | 'about'
  sectionId?: string
}

function parseHash(): AppRoute {
  const hash = window.location.hash.replace('#', '')

  if (!hash || hash === '/') {
    return { page: 'home' }
  }

  if (hash === '/learning-path') {
    return { page: 'learning-path' }
  }

  if (hash === '/tools') {
    return { page: 'tools' }
  }

  if (hash === '/glossary') {
    return { page: 'glossary' }
  }

  if (hash === '/about') {
    return { page: 'about' }
  }

  if (hash.startsWith('/section/')) {
    const sectionId = hash.replace('/section/', '')
    return { page: 'section', sectionId }
  }

  return { page: 'home' }
}

function navigateTo(hash: string) {
  window.location.hash = hash
}

function App() {
  const [route, setRoute] = useState<AppRoute>(() => parseHash())

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const currentSection = useMemo(() => {
    if (route.page !== 'section') {
      return undefined
    }

    return getSectionById(route.sectionId ?? '') ?? firstSection
  }, [route])

  return (
    <Layout currentPage={route.page} onNavigate={navigateTo}>
      {route.page === 'home' && <Home onNavigate={navigateTo} />}
      {route.page === 'learning-path' && (
        <LearningPath onNavigate={navigateTo} />
      )}
      {route.page === 'section' && currentSection && (
        <SectionPage section={currentSection} onNavigate={navigateTo} />
      )}
      {route.page === 'tools' && <Tools />}
      {route.page === 'glossary' && <Glossary />}
      {route.page === 'about' && <About />}
    </Layout>
  )
}

export default App
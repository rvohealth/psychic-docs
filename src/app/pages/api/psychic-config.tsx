import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APIPsychicConfigPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className="page api psychic-config">
      <APILeftSidebar expanded={['psychic-config']} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicConfig</h1>

          <h2>Getters</h2>
          <nav>
            <a href="#root">root</a>
            <a href="#appPath">appPath</a>
            <a href="#confPath">confPath</a>
            <a href="#dbPath">dbPath</a>
            <a href="#migrationsPath">migrationsPath</a>
            <a href="#controllersPath">controllersPath</a>
            <a href="#modelsPath">modelsPath</a>
            <a href="#servicesPath">servicesPath</a>
            <a href="#authSessionKey">authSessionKey</a>
          </nav>

          <h2>Properties</h2>
          <nav>
            <a href="#controllers">controllers</a>
            <a href="#apiOnly">apiOnly</a>
            <a href="#useWs">useWs</a>
            <a href="#useRedis">useRedis</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#constructor">constructor</a>
            <a href="#boot">boot</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

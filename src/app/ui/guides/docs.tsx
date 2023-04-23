import { Link } from 'react-router-dom'
import Logo from '../logo'
import GuidesDatabase from './database'
import GuidesGettingStarted from './getting-started'
import GuidesInstallation from './installation'
import GuidesWelcome from './welcome'
import GuidesModels from './models'
import GuidesRouting from './routing'
import GuidesConfiguration from './configuration'
import GuidesControllers from './controllers'

export default function GuidesDocs() {
  return (
    <div className="docs guides">
      <div className="hero">
        <Logo size="large" />
        <div>
          <p className="subtext">An express-driven web framework with a jaw-dropping ORM built on Kysely</p>
        </div>

        <nav>
          <a href="#docs-content">Guides</a>
          <br />
          <Link to="/api">API documentation</Link>
        </nav>
      </div>

      <div id="docs-content" className="docs-content">
        <h1>psychic</h1>

        <GuidesWelcome />
        <GuidesInstallation />
        <GuidesGettingStarted />
        <GuidesConfiguration />
        <GuidesRouting />
        <GuidesControllers />
        <GuidesModels />
        <GuidesDatabase />
      </div>
    </div>
  )
}

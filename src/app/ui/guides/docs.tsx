import { Link } from 'react-router-dom'
import { IoChevronDownCircle as ChevronDownIcon } from 'react-icons/io5'
import Logo from '../logo'
import GuidesDatabase from './database'
import GuidesGettingStarted from './getting-started'
import GuidesInstallation from './installation'
import GuidesWelcome from './welcome'
import GuidesModels from './models'
import GuidesRouting from './routing'
import GuidesConfiguration from './configuration'
import GuidesControllers from './controllers'
import GuidesSerializers from './serializers'
import GuidesCLI from './cli'
import GuidesSpecs from './specs'
import GuidesDeployment from './deployment'
import NightSky from '../night-sky'

export default function GuidesDocs() {
  return (
    <div className="docs guides">
      <div className="hero">
        <NightSky />
        <div className="above-night-sky">
          <Logo size="large" />
          <div>
            <p className="subtext">An express-driven web framework with a jaw-dropping ORM built on Kysely</p>
          </div>

          <nav>
            <a href="#docs-content">Guides</a>
            <br />
            <Link to="/api">API documentation</Link>
          </nav>
          <a href="#docs-content">
            <ChevronDownIcon className="icon" />
          </a>
        </div>
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
        <GuidesSerializers />
        <GuidesCLI />
        <GuidesDatabase />
        <GuidesSpecs />
        <GuidesDeployment />
      </div>
    </div>
  )
}

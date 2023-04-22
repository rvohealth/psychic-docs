import LeftSidebar from '../left-sidebar'

export default function GuidesLeftSidebar() {
  return (
    <LeftSidebar mode="guide">
      <nav>
        <a href='#welcome'><div>welcome</div></a>
        <a href='#installation'><div>installation</div></a>

        <nav>
          <a className="subgroup-title getting-started" href="#getting-started">getting started</a>
          <a href='#getting-started-configure-env'><div>configure env</div></a>
          <a href='#getting-started-structure'><div>structure</div></a>
          <a href='#getting-started-create-controller'><div>create controller</div></a>
          <a href='#getting-started-create-route'><div>create route</div></a>
          <a href='#getting-started-start-dev-server'><div>start dev server</div></a>
          <a href='#getting-started-create-model'><div>create model</div></a>
        </nav>

        <nav>
          <a className="subgroup-title configuration" href="#configuration">configuration</a>
          <a href="#configuration-express">express</a>
          <a href="#configuration-sequelize">sequelize</a>
          <a href="#configuration-database">database</a>
          <a href="#configuration-routing">routing</a>
          <a href="#configuration-ws">websockets</a>
          <a href="#configuration-redis">redis</a>
        </nav>

        <nav>
          <a className="subgroup-title routing" href="#routing">routing</a>
          <a href="#routing-configuration">configuration</a>
          <a href="#routing-crud">crud</a>
          <a href="#routing-resources">resources</a>
          <a href="#routing-nesting">nesting</a>
          <a href="#routing-namespacing">namespacing</a>
        </nav>

        <nav>
          <a className="subgroup-title controllers" href="#controllers">controllers</a>
          <a href="#controllers-generating">generating</a>
          <a href="#controllers-express">express</a>
          <a href="#controllers-params">params</a>
          <a href="#controllers-response">response</a>
        </nav>

        <nav>
          <a className="subgroup-title models" href="#models">models</a>
          <a href="#models-generate">generating</a>
          <a href="#models-create">creating</a>
          <a href="#models-query">querying</a>
          <a href="#models-update">updating</a>
          <a href="#models-destroy">destroying</a>
        </nav>

        <nav>
          <a className="subgroup-title serializers" href="#serializers">serializers</a>
          <a href="#serializers-generate">generating</a>
          <a href="#serializers-attributes">attributes</a>
          <a href="#serializers-attributes">usage</a>
        </nav>

        <nav>
          <a className="subgroup-title cli" href="#cli">cli</a>
          <a href="#cli-generators">generators</a>
          <a href="#cli-spec-runners">spec runners</a>
          <a href="#cli-dev">dev server</a>
          <a href="#cli-repl">repl</a>
        </nav>

        <nav>
          <a className="subgroup-title database" href="#database">database</a>
          <a href="#database-configuration">configuration</a>
          <a href="#database-raw">raw</a>
          <a href="#database-query-builder">query builder</a>
        </nav>

        <nav>
          <a className="subgroup-title specs" href="#specs">specs</a>
          <a href="#specs-unit">unit</a>
          <a href="#specs-feature">feature</a>
        </nav>

        <nav>
          <a className="subgroup-title deployment" href="#deployment">deployment</a>
          <a href="#deployment-server">as server</a>
          <a href="#deployment-lambda">as lambda</a>
        </nav>

      </nav>
    </LeftSidebar>
  )
}

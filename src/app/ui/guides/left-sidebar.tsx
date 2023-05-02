import LeftSidebar from '../left-sidebar'

export default function GuidesLeftSidebar() {
  return (
    <LeftSidebar mode="guide">
      <nav>
        <a href="#welcome">welcome</a>
        <a href="#installation">installation</a>

        <nav>
          <a className="subgroup-title getting-started" href="#getting-started">
            getting started
          </a>
          <a href="#getting-started-configure-env">configure env</a>
          <a href="#getting-started-structure">structure</a>
          <a href="#getting-started-create-controller">create controller</a>
          <a href="#getting-started-create-route">create route</a>
          <a href="#getting-started-start-dev-server">start dev server</a>
          <a href="#getting-started-create-model">create model</a>
        </nav>

        <nav>
          <a className="subgroup-title configuration" href="#configuration">
            configuration
          </a>
          <a href="#configuration-express">express</a>
          <a href="#configuration-dream">dream</a>
          <a href="#configuration-routing">routing</a>
          <a href="#configuration-ws">websockets</a>
          <a href="#configuration-redis">redis</a>
        </nav>

        <nav>
          <a className="subgroup-title routing" href="#routing">
            routing
          </a>
          <a href="#routing-configuration">configuration</a>
          <a href="#routing-crud">crud</a>
          <a href="#routing-resources">resources</a>
          <a href="#routing-nesting">nesting</a>
          <a href="#routing-namespacing">namespacing</a>
        </nav>

        <nav>
          <a className="subgroup-title controllers" href="#controllers">
            controllers
          </a>
          <a href="#controllers-generating">generating</a>
          <a href="#controllers-request">request</a>
          <a href="#controllers-response">response</a>
          <a href="#controllers-params">params</a>
        </nav>

        <nav>
          <a className="subgroup-title models" href="#models">
            models
          </a>
          <a href="#models-generate">generating</a>
          <a href="#models-create">creating</a>
          <a href="#models-update">updating</a>
          <a href="#models-destroy">destroying</a>
          <a href="#models-transactions">transactions</a>
          <a href="#models-sti">single table inheritance</a>

          <nav>
            <a className="subgroup-title associations" href="#models-querying">
              querying
            </a>
            <a href="#models-querying-find">find</a>
            <a href="#models-querying-find-by">findBy</a>
            <a href="#models-querying-where">where</a>
            <a href="#models-querying-ops">ops</a>
            <a href="#models-querying-limit">limit</a>
            <a href="#models-querying-order">order</a>
            <a href="#models-querying-joins">joins</a>
            <a href="#models-querying-includes">includes</a>
            <a href="#models-querying-first">first</a>
            <a href="#models-querying-last">last</a>
            <a href="#models-querying-pluck">pluck</a>
            <a href="#models-querying-all">all</a>
            <a href="#models-querying-sql">sql</a>
          </nav>

          <nav>
            <a className="subgroup-title associations" href="#models-associations">
              associations
            </a>
            <a href="#models-associations-belongs-to">belongs to</a>
            <a href="#models-associations-has-one">has one</a>
            <a href="#models-associations-has-many">has many</a>
            <a href="#models-associations-through">through</a>
            <a href="#models-associations-polymorphism">polymorphism</a>
          </nav>

          <nav>
            <a className="subgroup-title hooks" href="#models-hooks">
              hooks
            </a>
            <a href="#models-hooks-before-create">before create</a>
            <a href="#models-hooks-before-update">before update</a>
            <a href="#models-hooks-before-save">before save</a>
            <a href="#models-hooks-before-destroy">before destroy</a>
            <a href="#models-hooks-after-create">after create</a>
            <a href="#models-hooks-after-update">after update</a>
            <a href="#models-hooks-after-save">after save</a>
            <a href="#models-hooks-after-destroy">after destroy</a>
            <a href="#models-hooks-after-create-commit">after create commit</a>
            <a href="#models-hooks-after-update-commit">after update commit</a>
            <a href="#models-hooks-after-save-commit">after save commit</a>
            <a href="#models-hooks-after-destroy-commit">after destroy commit</a>
          </nav>

          <nav>
            <a className="subgroup-title " href="#models-validations">
              validations
            </a>
            <a href="#models-validations-presence">presence</a>
            <a href="#models-validations-contains">contains</a>
            <a href="#models-validations-numericality">numericality</a>
            <a href="#models-validations-inclusion">inclusion</a>
            <a href="#models-validations-exclusion">exclusion</a>
            <a href="#models-validations-custom">custom</a>
          </nav>

          <nav>
            <a className="subgroup-title " href="#models-scopes">
              scopes
            </a>
            <a href="#models-scopes-usage">usage</a>
            <a href="#models-scopes-default">default scopes</a>
          </nav>
        </nav>

        <nav>
          <a className="subgroup-title serializers" href="#serializers">
            serializers
          </a>
          <a href="#serializers-generating">generating</a>
          <a href="#serializers-attributes">attributes</a>
          <a href="#serializers-usage">usage</a>
        </nav>

        <nav>
          <a className="subgroup-title cli" href="#cli">
            cli
          </a>
          <a href="#cli-generators">generators</a>
          <a href="#cli-spec-runners">spec runners</a>
          <a href="#cli-dev-server">dev server</a>
          <a href="#cli-repl">repl</a>
          <a href="#cli-introspection">introspection</a>
        </nav>

        <nav>
          <a className="subgroup-title database" href="#database">
            database
          </a>
          <a href="#database-configuration">configuration</a>
          <a href="#database-kysely">kysely</a>
        </nav>

        <nav>
          <a className="subgroup-title specs" href="#specs">
            specs
          </a>
          <a href="#specs-unit">unit</a>
          <a href="#specs-feature">feature</a>
        </nav>

        <nav>
          <a className="subgroup-title deployment" href="#deployment">
            deployment
          </a>
          <a href="#deployment-server">as server</a>
          <a href="#deployment-lambda">as lambda</a>
        </nav>
      </nav>
    </LeftSidebar>
  )
}

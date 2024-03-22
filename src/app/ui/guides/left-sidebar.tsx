import LeftSidebar from '../left-sidebar'

export default function GuidesLeftSidebar() {
  return (
    <LeftSidebar mode="guide">
      <nav>
        <a href="#welcome">
          <div>welcome</div>
        </a>
        <a href="#installation">
          <div>installation</div>
        </a>

        <nav>
          <a className="subgroup-title getting-started" href="#getting-started">
            <div>getting started</div>
          </a>
          <a href="#getting-started-configure-env">
            <div>configure env</div>
          </a>
          <a href="#getting-started-structure">
            <div>structure</div>
          </a>
          <a href="#getting-started-create-controller">
            <div>create controller</div>
          </a>
          <a href="#getting-started-create-route">
            <div>create route</div>
          </a>
          <a href="#getting-started-start-dev-server">
            <div>start dev server</div>
          </a>
          <a href="#getting-started-create-model">
            <div>create model</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title configuration" href="#configuration">
            <div>configuration</div>
          </a>
          <a href="#configuration-express">
            <div>express</div>
          </a>
          <a href="#configuration-dream">
            <div>dream</div>
          </a>
          <a href="#configuration-routing">
            <div>routing</div>
          </a>
          <a href="#configuration-ws">
            <div>websockets</div>
          </a>
          <a href="#configuration-redis">
            <div>redis</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title routing" href="#routing">
            <div>routing</div>
          </a>
          <a href="#routing-configuration">
            <div>configuration</div>
          </a>
          <a href="#routing-crud">
            <div>crud</div>
          </a>
          <a href="#routing-resources">
            <div>resources</div>
          </a>
          <a href="#routing-nesting">
            <div>nesting</div>
          </a>
          <a href="#routing-namespacing">
            <div>namespacing</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title controllers" href="#controllers">
            <div>controllers</div>
          </a>
          <a href="#controllers-generating">
            <div>generating</div>
          </a>
          <a href="#controllers-request">
            <div>request</div>
          </a>
          <a href="#controllers-response">
            <div>response</div>
          </a>
          <a href="#controllers-params">
            <div>params</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title models" href="#models">
            <div>models</div>
          </a>
          <a href="#models-generate">
            <div>generating</div>
          </a>
          <a href="#models-create">
            <div>creating</div>
          </a>
          <a href="#models-update">
            <div>updating</div>
          </a>
          <a href="#models-destroy">
            <div>destroying</div>
          </a>
          <a href="#models-transactions">
            <div>transactions</div>
          </a>
          <a href="#models-sti">
            <div>single table inheritance</div>
          </a>

          <nav>
            <a className="subgroup-title associations" href="#models-querying">
              <div>querying</div>
            </a>
            <a href="#models-querying-find">
              <div>find</div>
            </a>
            <a href="#models-querying-find-by">
              <div>findBy</div>
            </a>
            <a href="#models-querying-where">
              <div>where</div>
            </a>
            <a href="#models-querying-ops">
              <div>ops</div>
            </a>
            <a href="#models-querying-limit">
              <div>limit</div>
            </a>
            <a href="#models-querying-order">
              <div>order</div>
            </a>
            <a href="#models-querying-joins">
              <div>joins</div>
            </a>
            <a href="#models-querying-includes">
              <div>includes</div>
            </a>
            <a href="#models-querying-first">
              <div>first</div>
            </a>
            <a href="#models-querying-last">
              <div>last</div>
            </a>
            <a href="#models-querying-pluck">
              <div>pluck</div>
            </a>
            <a href="#models-querying-all">
              <div>all</div>
            </a>
            <a href="#models-querying-sql">
              <div>sql</div>
            </a>
          </nav>

          <nav>
            <a className="subgroup-title associations" href="#models-associations">
              <div>associations</div>
            </a>
            <a href="#models-associations-belongs-to">
              <div>belongs to</div>
            </a>
            <a href="#models-associations-has-one">
              <div>has one</div>
            </a>
            <a href="#models-associations-has-many">
              <div>has many</div>
            </a>
            <a href="#models-associations-through">
              <div>through</div>
            </a>
            <a href="#models-associations-polymorphism">
              <div>polymorphism</div>
            </a>
          </nav>

          <nav>
            <a className="subgroup-title hooks" href="#models-hooks">
              <div>hooks</div>
            </a>
            <a href="#models-hooks-before-create">
              <div>before create</div>
            </a>
            <a href="#models-hooks-before-update">
              <div>before update</div>
            </a>
            <a href="#models-hooks-before-save">
              <div>before save</div>
            </a>
            <a href="#models-hooks-before-destroy">
              <div>before destroy</div>
            </a>
            <a href="#models-hooks-after-create">
              <div>after create</div>
            </a>
            <a href="#models-hooks-after-update">
              <div>after update</div>
            </a>
            <a href="#models-hooks-after-save">
              <div>after save</div>
            </a>
            <a href="#models-hooks-after-destroy">
              <div>after destroy</div>
            </a>
            <a href="#models-hooks-after-create-commit">
              <div>after create commit</div>
            </a>
            <a href="#models-hooks-after-update-commit">
              <div>after update commit</div>
            </a>
            <a href="#models-hooks-after-save-commit">
              <div>after save commit</div>
            </a>
            <a href="#models-hooks-after-destroy-commit">
              <div>after destroy commit</div>
            </a>
          </nav>

          <nav>
            <a className="subgroup-title " href="#models-validations">
              <div>validations</div>
            </a>
            <a href="#models-validations-presence">
              <div>presence</div>
            </a>
            <a href="#models-validations-contains">
              <div>contains</div>
            </a>
            <a href="#models-validations-numericality">
              <div>numericality</div>
            </a>
            <a href="#models-validations-inclusion">
              <div>inclusion</div>
            </a>
            <a href="#models-validations-exclusion">
              <div>exclusion</div>
            </a>
            <a href="#models-validations-custom">
              <div>custom</div>
            </a>
          </nav>

          <nav>
            <a className="subgroup-title " href="#models-scopes">
              <div>scopes</div>
            </a>
            <a href="#models-scopes-usage">
              <div>usage</div>
            </a>
            <a href="#models-scopes-default">
              <div>default scopes</div>
            </a>
          </nav>
        </nav>

        <nav>
          <a className="subgroup-title serializers" href="#serializers">
            <div>serializers</div>
          </a>
          <a href="#serializers-generating">
            <div>generating</div>
          </a>
          <a href="#serializers-attributes">
            <div>attributes</div>
          </a>
          <a href="#serializers-usage">
            <div>usage</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title cli" href="#cli">
            <div>cli</div>
          </a>
          <a href="#cli-generators">
            <div>generators</div>
          </a>
          <a href="#cli-spec-runners">
            <div>spec runners</div>
          </a>
          <a href="#cli-dev-server">
            <div>dev server</div>
          </a>
          <a href="#cli-repl">
            <div>repl</div>
          </a>
          <a href="#cli-introspection">
            <div>introspection</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title database" href="#database">
            <div>database</div>
          </a>
          <a href="#database-configuration">
            <div>configuration</div>
          </a>
          <a href="#database-kysely">
            <div>kysely</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title specs" href="#specs">
            <div>specs</div>
          </a>
          <a href="#specs-unit">
            <div>unit</div>
          </a>
          <a href="#specs-feature">
            <div>feature</div>
          </a>
        </nav>

        <nav>
          <a className="subgroup-title deployment" href="#deployment">
            <div>deployment</div>
          </a>
          <a href="#deployment-server">
            <div>as server</div>
          </a>
          <a href="#deployment-lambda">
            <div>as lambda</div>
          </a>
        </nav>
      </nav>
    </LeftSidebar>
  )
}

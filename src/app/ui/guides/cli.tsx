import React from 'react'
import CodeExample from '../code-example'

export default function GuidesCLI() {
  return (
    <React.Fragment>
      <h2 id="cli">CLI</h2>

      <p>the psychic cli provides many commands for controlling your psychic app.</p>

      <h3 id="cli-generators">Generators</h3>
      <CodeExample
        id="cli-generators-example"
        expandLevel={2}
        description={
          <p>Psychic provides several generators for quickly building scaffolding for your app.</p>
        }
        theme="dark"
        codeExample={`\
# generate migration
psy g:migration create-users

# generate a model and migration
psy g:model user email id created_at

# generate a controller
psy g:controller users create update destroy

# generate a serializer
psy g:serializer user email id created_at

# generate a model, migration, controller, and serializer
psy g:resource user email id created_at
`}
      ></CodeExample>

      <h3 id="cli-spec-runners">Spec runners</h3>
      <CodeExample
        id="cli-spec-runners"
        expandLevel={2}
        description={<p>Spec runners enable you to run either unit or feature specs.</p>}
        theme="dark"
        codeExample={`\
# run unit specs
psy uspec

# run feature specs
psy fspec
`}
      ></CodeExample>

      <h3 id="cli-dev-server">Dev server</h3>
      <CodeExample
        id="cli-dev-server-example"
        expandLevel={2}
        description={<p>The dev server command starts a dev server for local development.</p>}
        theme="dark"
        codeExample={`\
# start local development server
psy dev
`}
      ></CodeExample>

      <h3 id="cli-repl">REPL</h3>
      <CodeExample
        id="cli-repl-example"
        expandLevel={2}
        description={
          <p>
            The REPL (called `console`) allows you to inspect the database through the lense of your
            application.
          </p>
        }
        theme="dark"
        codeExample={`\
# start local repl
psy console
> u = await User.all()
`}
      ></CodeExample>

      <h3 id="cli-introspection">introspection</h3>
      <CodeExample
        id="cli-repl-example"
        expandLevel={2}
        description={
          <p>
            In order to provide type completion to both Kysely and Psychic, we must introspect your files to
            generate some types. Considering, there are a few more steps to getting set up than would be
            necessary in a conventional ORM. This is generally done for you (such as when you run migrations),
            but can also be done manually.
          </p>
        }
        theme="dark"
        codeExample={`\
# syncs everything
psy sync:all

# introspect database and generate schema
psy sync:schema

# introspect your models and build an association index
psy sync:associations

# introspect your model structure and build namespaced indexes.
psy sync:model-indexes
`}
      ></CodeExample>
    </React.Fragment>
  )
}

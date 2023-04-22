import React from 'react'
import CodeExample from '../code-example'

export default function GuidesGettingStarted() {
  return (
    <React.Fragment>
      <h2 id="getting-started">Getting started</h2>

      <CodeExample
        id="getting-started-create-app"
        expandLevel={2}
        description={
          <p>
            Once the psychic cli is installed globally, you can use it to create a new psychic app locally. To
            do so, open your terminal and type the following in a directory of your choosing:
          </p>
        }
        codeExample={`\
cd ~/Sites # or another folder of your choosing
psy new myapp --api --ws --redis
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <h3 id="getting-started-configure-env">Configure your environment</h3>

      <CodeExample
        id="getting-started-configure-env-example"
        expandLevel={2}
        description={
          <React.Fragment>
            <p>
              After creating a new app, you should first make sure to configure your environment and get your
              database set up. To use psychic, you must first have postgresql installed and running on your
              local machine.
            </p>

            <p>
              Once you have postgres installed, open your .env and .env.test files. Your .env file sets
              environment variables for your development server, as well as for when you run the console,
              while your .env.test file sets env variables for jest, both when running unit and feature specs.
            </p>
          </React.Fragment>
        }
        codeExample={`\
# .env
DB_USER=mypostgresuser
DB_NAME=myapp_development
DB_PORT=5432
DB_HOST=localhost
APP_ENCRYPTION_KEY='sp4-pki-dftx'

# .env.test
DB_USER=mypostgresuser
DB_NAME=myapp_test
DB_PORT=5432
DB_HOST=localhost
APP_ENCRYPTION_KEY='3gy-vg7-fd68'
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-configure-db-example"
        expandLevel={2}
        description={
          <React.Fragment>
            <p>
              To see and/or make changes to the names of all environment variables used,&nbsp; see{' '}
              <span className="hl">conf/dream.ts</span>, which exposes a config that taps into your underlying
              env vars.
            </p>
          </React.Fragment>
        }
        codeExample={`\
export default {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
}
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-starting-dev-server"
        expandLevel={2}
        description={
          <React.Fragment>
            <p>Once this is done, you are able to run a host of commands to play with your environment.</p>
          </React.Fragment>
        }
        codeExample={`\
# create your database
psy db:create
NODE_ENV=test psy db:create

# migrate your database
psy db:migrate
NODE_ENV=test psy db:migrate

# start your dev server
psy dev

# run unit specs
psy uspec

# run feature specs
psy fspec

# open a repl with access to your model layer
psy console
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <h3 id="getting-started-structure">Structure</h3>

      <CodeExample
        id="getting-started-create-route-example"
        expandLevel={2}
        description={
          <React.Fragment>
            <p>
              Within your psychic project, you will see a pretty typical folder structure generated for
              you.&nbsp; Within the <span className="hl">app</span> folder, you will find your controllers,
              models, serializers, and services. These four folders create the walls of your app, allowing you
              to build your app's entire domain within these folder structures.
            </p>
            <p>
              Outside the app folder, you will find a <span className="hl">conf</span> and&nbsp;
              <span className="hl">db</span> folders, each of which provide additional setup outside the
              domain of your app. Within the conf folder, you will see a <span className="hl">routes.ts</span>{' '}
              file. This file contains all the routes for your app.
            </p>
          </React.Fragment>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.post('login', 'users#login')
  r.resources('users', { only: ['create', 'index'] })
}
`}
        results={`\
POST /login     users#login
POST /users     users#create
GET  /users     users#index\
          `}
      ></CodeExample>

      <CodeExample
        id="getting-started-examine-controller"
        expandLevel={2}
        description={
          <p>
            Here is a simple example of how a UsersController could be set up to do a simple authentication
            pattern:
          </p>
        }
        codeExample={`\
// app/controllers/users.ts

import { PsychicController, Params } from 'psychic'
import User from 'app/models/user'

export default class UsersController extends PsychicController {
  public async create() {
    const user = await User.create(this.userParams)
    this.ok(user)
  }

  public async login() {
    if (!this.params.email || !this.params.password)
      this.notFound()

    const user = await User.findBy({ email: this.params.email })
    if (!user || !await user.checkPassword(this.params.password))
      this.notFound()

    await this.startSession(user)
    this.ok()
  }

  private get userParams() {
    return Params.restrict(this.params?.user, ['email', 'password'])
  }
}
`}
      ></CodeExample>

      <h3 id="getting-started-create-controller">Create a controller</h3>

      <CodeExample
        id="getting-started-create-controller-example"
        expandLevel={2}
        description={
          <p>
            To create a new controller, simply use the psychic cli. In addition to a controller name, you can
            pass methods to your controller to have the generator pre-fill them for you.
          </p>
        }
        codeExample={`\
psychic g:controller todos helloworld create update
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <CodeExample
        id="getting-started-editing-controller"
        expandLevel={2}
        description={
          <p>Once this is done, a new controller will appear with some methods prefilled for us.</p>
        }
        codeExample={`\
// app/controllers/todos.ts

import { PsychicController, Params } from 'psychic'

export default class TodosController extends PsychicController {
  public async helloworld() {
  }

  public async create() {
  }

  public async update() {
  }
}
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-adding-hello-world-method"
        expandLevel={2}
        description={<p>Let's add a handler to our helloworld method to send some content out.</p>}
        codeExample={`\
// app/controllers/todos.ts

...

public async helloworld() {
  this.ok('helloworld!')
}

...
`}
      ></CodeExample>

      <h3 id="getting-started-create-route">Create a route</h3>

      <CodeExample
        id="getting-started-create-route-example"
        expandLevel={2}
        description={
          <p>Next, let's make sure we have a route defined for this new method in our routes file.</p>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  ...
  r.get('/helloworld', 'todos#helloworld')
}
`}
      ></CodeExample>

      <h3 id="getting-started-start-dev-server">Starting your dev server</h3>

      <CodeExample
        id="getting-started-starting-dev-server-example"
        expandLevel={2}
        description={
          <p>
            Now that we have this, we can start our dev server and visit&nbsp;
            <a href="http://localhost:7777/helloworld">http://localhost:7777/helloworld</a>
          </p>
        }
        codeExample={`\
$ psy dev
  psy dev server started at port 7777
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <h3 id="getting-started-create-model">Creating a model</h3>

      <CodeExample
        id="getting-started-examining-existing-user-model"
        expandLevel={2}
        description={
          <p>
            Examining our existing app structure, we will see that both a model and migration have&nbsp;
            already been added to the project structure. The user comes pre-filled with some helpful methods
            for encrypting and verifying passwords.
          </p>
        }
        codeExample={`\
// app/models/user.ts

import { BeforeCreate, BeforeUpdate, Column, Validates, Hash, dream } from 'psychic'
import { DateTime } from 'luxon'

const Dream = dream('users')
export default class User extends Dream {
  public id: number
  public name: string
  public created_at: DateTime
  public updated_at: DateTime

  @Validates('contains', '@')
  @Validates('presence')
  public email: string

  @Validates('length', { min: 4, max: 18 })
  public password_digest: string
  public password?: string | null

  @BeforeCreate()
  @BeforeUpdate()
  public async hashPass() {
    if (this.password) this.password_digest = await Hash.gen(this.password)
    this.password = undefined
  }

  public async checkPassword(password: string) {
    if (!this.password_digest) return false
    return await Hash.check(password, this.password_digest)
  }
}
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-creating-a-model"
        expandLevel={2}
        description={
          <p>
            However, since we originally set out to create a new model, not examine the existing one, let's go
            ahead and generate one using the cli.
          </p>
        }
        codeExample={`\
psy g:model todo user:belongs_to content:string\
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <CodeExample
        id="getting-started-examining-the-new-model"
        expandLevel={2}
        description={
          <p>
            Running this generates a new <span className="hl">todo</span> model for us, automatically adding
            on&nbsp; all of the columns we specified in our generator command, including our belongs_to
            association to the user model. These model annotations are all driven by the underlying&nbsp;
            <a href="https://github.com/sequelize/sequelize-typescript">sequelize-typescript</a> library.
          </p>
        }
        codeExample={`\
import { DateTime } from 'luxon'
import { dream, Column, BelongsTo } from 'dream'
import User from './user'

const Dream = dream('todos')
export default class Todo extends Dream {
  public id: number
  public user_id: number
  public content: string
  public created_at: DateTime
  public updated_at: DateTime

  @BelongsTo(() => User)
  public user: User
}
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-examining-the-new-migration"
        description={
          <p>
            In addition to a model, the generator you just ran will also generate a migration to create a new
            table for the corresponding model. It automatically provides all the fields specified when
            generating the model.
          </p>
        }
        codeExample={`\
import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('todos')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('user_id', 'serial', col => col.references('users.id').onDelete('cascade').notNull())
    .addColumn('content', 'text')
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql\`now()\`).notNull())
    .addColumn('updated_at', 'timestamp', col => col.defaultTo(sql\`now()\`).notNull())
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('todos').execute()
}
`}
      ></CodeExample>
    </React.Fragment>
  )
}

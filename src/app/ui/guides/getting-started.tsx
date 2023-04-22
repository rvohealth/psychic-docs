import React from "react";
import CodeExample from "../code-example";

export default function GuidesGettingStarted() {
  return (
    <React.Fragment>
      <h2 id="getting-started">Getting started</h2>

      <CodeExample
        id="getting-started-create-app"
        expandLevel={2}
        description={
          <p>
            Once the psychic cli is installed globally, you can use it to create
            a new psychic app locally.&nbsp; To do so, open your terminal and
            type the following in a directory of your choosing:
          </p>
        }
        codeExample={`\
cd ~/Sites # or another folder of your choosing
psychic new myapp --api --ws --redis
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
              After creating a new app, you should first make sure to configure
              your environment and get your database set up. To use psychic, you
              must first have postgresql installed and running on your local
              machine.
            </p>

            <p>
              Once you have postgres installed, open your .env and .env.test
              files. Your .env file sets environment variables for your
              development server, as well as for when you run the console, while
              your .env.test file sets env variables for jest, both when running
              unit and feature specs.
            </p>
          </React.Fragment>
        }
        codeExample={`\
# .env
DB_USER=mypostgresuser
DB_NAME=myapp_development
APP_ENCRYPTION_KEY='sp4-pki-dftx'

# .env.test
DB_USER=mypostgresuser
DB_NAME=myapp_test
APP_ENCRYPTION_KEY='3gy-vg7-fd68'
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-configure-db-example"
        expandLevel={2}
        description={
          <React.Fragment>
            <p>
              To see and/or make changes to the names of all environment
              variables used,&nbsp; see{" "}
              <span className="hl">db/connection.ts</span>, which exposes the
              Sequelize configuration directlty to you for easy
              modification/adaptation as the Sequelize&nbsp; api shifts.
            </p>
          </React.Fragment>
        }
        codeExample={`\
import { Sequelize } from "sequelize-typescript"
import { Dialect } from "sequelize"
import { env } from 'psychic'

env.load()

const connection = new Sequelize({
  dialect: (process.env.DB_DRIVER || 'postgres') as Dialect,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'psychic_dev',
  models: [__dirname + '/../app/models'],
  logging: process.env.DEBUG === '1',
})

export default connection
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-starting-dev-server"
        expandLevel={2}
        description={
          <React.Fragment>
            <p>
              Once this is done, you are able to run a host of commands to play
              with your environment.
            </p>
          </React.Fragment>
        }
        codeExample={`\
# create your database
psychic db:create
NODE_ENV=test psychic db:create

# migrate your database
psychic db:migrate
NODE_ENV=test psychic db:migrate

# start your dev server
psychic dev

# run unit specs
psychic uspec

# run feature specs
psychic fspec
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
              Within your psychic project, you will see a pretty typical folder
              structure generated for you.&nbsp; Within the{" "}
              <span className="hl">app</span> folder, you will find your
              controllers, models, serializers, and services. These four folders
              create the walls of your app, allowing you to build your app's
              entire domain within these folder structures.
            </p>
            <p>
              Outside the app folder, you will find a{" "}
              <span className="hl">conf</span> and&nbsp;
              <span className="hl">db</span> folders, each of which provide
              additional setup outside the domain of your app. Within the conf
              folder, you will see a <span className="hl">routes.ts</span> file.
              This file contains all the routes for your app.
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
            By default, a users controller is already provided with the app's
            scaffolding for you.&nbsp; Examining this controller, you will
            already see that it has a few methods added for you to respond to
            the routes in your routes file.
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

    const user = await User.findOne({ where: { email: this.params.email } })
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
            To create a new controller, simply use the psychic cli. In addition
            to a controller name, you can pass methods to your controller to
            have the generator pre-fill them for you.
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
          <p>
            Once this is done, a new controller will appear with some methods
            prefilled for us.
          </p>
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
        description={
          <p>
            Let's add a handler to our helloworld method to send some content
            out.
          </p>
        }
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
          <p>
            Next, let's make sure we have a route defined for this new method in
            our routes file.
          </p>
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
            <a href="http://localhost:7777/helloworld">
              http://localhost:7777/helloworld
            </a>
          </p>
        }
        codeExample={`\
$ psychic dev




                    ..:^~~!!~~^:.
               .~?5G##&&&##&&@@&#G5J!:
            ^?G#&@&&&&&&####&@@@@@@@&&GY!.
         .?G&&&###&&&@&&&@@&#BGGB&@@@@@&#BY^
       .J#@&&&#BGGGGBBB&@#BBGPPBB&@@@&&##BBBY^
      !P##@BGGPPGGGGPGBBBPPPPPPPPB######B555PP?.
     JGG&@BPPPPPGGGGGB###PPPPPPPPPGGPPGB##PP5BBY:
    YGGG#BPGPPPPGGGB&##@&GPPPGBG55555555PGBB##B5Y^
   ?BGGGPPGGGGGPGGGGG#@#GGPGPP&P55555555PGP5PPP55Y.
  :BPPGGGGGGGGGGGGBGGBGGBBGP~ 5#555555GBBGP5555PPP7
  ?G5PGGGGGGB####BBBGPP#@&P.  .Y#BBBPPB#&#G5555B#B5.
  5G5PPGGGGGB#&&#BGGGPGBBP:     #@@#BBB##&&#GGPG#BP:
  5GPPPPPB&#GB###BBGGG&@@B.     G@@@@@&BGG#@#GPB#BP:
  J&GPPPPPGBGGGGGGBBGB&&G^      G@@@@@@#BB&@&####B5.
  ^@&PPPP5PGGGGGGGGBGY!:       .#@@@@@@@@@@@@@@@&B?
   J@#P5PPPGPPGGGGG5^          5@@@@@@@@@@@@@@@&#P:
    P&##GGGG##GPPB@!         .^@@@@@@@@@@@@@@&##G~
     5@@@&#&@&BPG&@?      YP.!:&@@@@@@@@@@@@&##P~
      7&@@@@@&GPPP#P     ^@@~~:B@@@@@@@@@@@&#BJ:
       :Y&@@@@@&&&@@^  :.YBGJ:.~PPGB@@@@@@@&P~
         :J#@@@@#5?7^ ..            Y@@@@&P~
           .~YY~.                   P@#P?:
                                    7~.
  :::    :::  ::::::::  :::       ::: :::
  :+:    :+: :+:    :+: :+:       :+: :+:
  +:+    +:+ +:+    +:+ +:+       +:+ +:+
  +#++:++#++ +#+    +:+ +#+  +:+  +#+ +#+
  +#+    +#+ +#+    +#+ +#+ +#+#+ +#+ +#+
  #+#    #+# #+#    #+#  #+#+# #+#+#  #+#
  ###    ###  ########    ###   ###   ##########
  psychic dev server started at port 7777
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <h3>Creating a model</h3>

      <CodeExample
        id="getting-started-examining-existing-user-model"
        expandLevel={2}
        description={
          <p>
            Examining our existing app structure, we will see that both a model
            and migration have&nbsp; already been added to the project
            structure. The user comes pre-filled with some helpful methods for
            encrypting and verifying passwords.
          </p>
        }
        codeExample={`\
// app/models/user.ts

import { Sequelize, Table, Column, Model, HasMany, IsUUID, PrimaryKey, DataType, BeforeUpdate, BeforeCreate, Contains } from 'sequelize-typescript'
import { UUID, Hash, PsychicModel, Authenticates } from 'psychic'

@Table({ tableName: 'users', underscored: true })
export default class User extends PsychicModel {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: Sequelize.literal("uuid_generate_v4()") })
  id: UUID

  @Contains('@')
  @Column(DataType.TEXT)
  email: string

  @Column(DataType.TEXT)
  password_digest: string

  @Column(DataType.VIRTUAL)
  public password: string

  @BeforeCreate
  @BeforeUpdate
  static async hashPass(user: User) {
    if (user.password)
      user.password_digest = await Hash.gen(user.password)
    user.password = undefined
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
            However, since we originally set out to create a new model, not
            examine the existing one, let's go ahead and generate one using the
            cli.
          </p>
        }
        codeExample={`\
psychic g:model todo user:belongs_to content:string\
`}
        language="bash"
        theme="dark"
      ></CodeExample>

      <CodeExample
        id="getting-started-examining-the-new-model"
        expandLevel={2}
        description={
          <p>
            Running this generates a new <span className="hl">todo</span> model
            for us, automatically adding on&nbsp; all of the columns we
            specified in our generator command, including our belongs_to
            association to the user model. These model annotations are all
            driven by the underlying&nbsp;
            <a href="https://github.com/sequelize/sequelize-typescript">
              sequelize-typescript
            </a>{" "}
            library.
          </p>
        }
        codeExample={`\
// app/models/todo.ts

import { Sequelize, Table, Column, IsUUID, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { UUID, PsychicModel } from 'psychic'
import User from './user'

@Table({ tableName: 'todos' })
export default class Todo extends PsychicModel {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: Sequelize.literal("uuid_generate_v4()") })
  public id: UUID

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column
  user_id: UUID

  @BelongsTo(() => User)
  public user: User

  @Column
  public content: string
}
`}
      ></CodeExample>

      <CodeExample
        id="getting-started-examining-the-new-migration"
        description={
          <p>
            In addition to a model, the generator you just ran will also
            generate a migration to create a new table for the corresponding
            model. It automatically provides all the fields specified when
            generating the model.
          </p>
        }
        codeExample={`\
// db/migrations/1675570522455-create-todos.ts

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.DataTypes.UUID,
      },
      'user_id': {
        type: Sequelize.DataTypes.UUID,
      },
      'content': {
        type: Sequelize.STRING,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todos')
  }
}
`}
      ></CodeExample>
    </React.Fragment>
  );
}

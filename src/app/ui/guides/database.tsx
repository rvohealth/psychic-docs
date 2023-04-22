import React from "react";
import CodeExample from "../code-example";

export default function GuidesDatabase() {
  return (
    <React.Fragment>
      <h2 id="database">Database</h2>

      <CodeExample
        id="database-configuration"
        expandLevel={2}
        description={
          <p>
            Your db configuration can be found at{" "}
            <span className="hl">db/connection.ts</span>. As are most sensible
            applications, our database driver is driven mainly by environment
            variables, that way credentials are never commited to the code base,
            and can easily change for different environments.
          </p>
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
  database: process.env.DB_NAME || 'psychic_core_dev',
  models: [__dirname + '/../app/models'],
  logging: process.env.DEBUG === '1',
})

export default connection
`}
      ></CodeExample>

      <h3 id="database-raw">Raw querying</h3>

      <CodeExample
        id="database-raw"
        description={
          <p>
            Once your database connection is configured, you are able to import
            it and&nbsp; begin making queries to your db using the{" "}
            <span className="hl">raw</span> method.
          </p>
        }
        codeExample={`\
import { db } from 'psychic'
await db.raw('select * from users')
`}
      ></CodeExample>

      <h3 id="database-query-builder">Query builder</h3>

      <CodeExample
        id="database-query-builder-example"
        description={
          <p>
            TODO: In addition to having support for raw queries, we also provide
            support for query building (though this comes outside the offerings
            of sequelize).
          </p>
        }
        codeExample={`\
// TODO: build this!

import { db } from 'psychic'

await db
  .select('*')
  .from('users')
  .where({ email: 'cool@guy.biz' })
  .first()
`}
      ></CodeExample>
    </React.Fragment>
  );
}

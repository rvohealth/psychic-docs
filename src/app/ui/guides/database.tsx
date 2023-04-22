import React from 'react'
import CodeExample from '../code-example'

export default function GuidesDatabase() {
  return (
    <React.Fragment>
      <h2 id="database">Database</h2>

      <CodeExample
        id="database-configuration"
        expandLevel={2}
        description={
          <p>
            Your db configuration can be found at <span className="hl">conf/dream.ts</span>. As are most
            sensible applications, our database driver is driven mainly by environment variables, that way
            credentials are never commited to the code base, and can easily change for different environments.
          </p>
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

      <h3 id="database-raw">Raw querying</h3>

      <CodeExample
        id="database-raw"
        description={
          <p>
            Once your database connection is configured, you are able to import it and&nbsp; begin making
            queries to your db using [kysely](NEED_LINK) as your database driver!
          </p>
        }
        codeExample={`\
import { db } from 'psychic'

// example taken from kysely docs: https://kysely-org.github.io/kysely/classes/SelectQueryBuilder.html#select
const persons = await db
  .selectFrom('person')
  .select('id')
  .where('first_name', '=', 'Arnold')
  .execute()
`}
      ></CodeExample>
    </React.Fragment>
  )
}

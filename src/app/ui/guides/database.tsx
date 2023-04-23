import React from 'react'
import CodeExample from '../code-example'

export default function GuidesDatabase() {
  return (
    <React.Fragment>
      <h2 id="database">Database</h2>

      <h3 id="database-raw">Raw querying</h3>

      <CodeExample
        id="database-raw"
        description={
          <p>
            Once your database connection is configured, you are able to import it and&nbsp; begin making
            queries to your db using [kysely](NEED_LINK) as your database driver! This means rather than write
            raw queries, you will have Kysely to help you build queries and provide helpful typescript
            autocomplete power at a low level.
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

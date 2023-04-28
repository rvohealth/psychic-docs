import React from 'react'
import CodeExample from '../../code-example'

export default function GuidesModelQueries() {
  return (
    <React.Fragment>
      <h3 id="models-querying">Querying</h3>

      <CodeExample
        id="models-querying-usage"
        expandLevel={2}
        description={
          <p>
            You're probably tired of hearing it by now, but our querying paradigm was also modeled loosly
            after the <a href="NEED_LINK">Ruby on Rails querying patterns</a>. We wanted to expose a querying
            interface which could tap into Kysely's type intelligence to expose beautiful autocomplete magic,
            but wanted to include the ability to use powerful rails-like features, such as{' '}
            <a href="NEED_LINK">joins</a> and <a href="NEED_LINK">includes</a> to allow the type intelligence
            to extend to associations against your models.
          </p>
        }
        codeExample={`
export default class User extends Dream {
  public readonly get table() {
    return 'users' as const
  }

  public id: number
  public email: string | null

  @HasMany(() => Post)
  public posts: Post[]
}

export default class Post extends Dream {
  public id: number
  public content: string | null

  @BelongsTo(() => User)
  public user: User
}

const users = await User
  .joins('posts')
  .where({
    posts: {
      content: ops.ilike('howyadoin')
    }
  })
  .all()
`}
      ></CodeExample>

      <h3 id="models-querying-find">Dream.find</h3>
      <CodeExample
        id="models-querying-find-example"
        expandLevel={2}
        description={
          <p>
            The find method expects you to be passing a value matching the primary key of the given table.
            Passing an existing id, you will get back a promise returning the record in question, and
            otherwise you will get null.
          </p>
        }
        codeExample={`
const user = await User.find(123)
`}
      ></CodeExample>

      <h3 id="models-querying-find-by">Dream.findBy</h3>
      <CodeExample
        id="models-querying-find-by-example"
        expandLevel={2}
        description={
          <p>
            Use this method as a shorthand for collecting the first record matching a where statement, like
            so:
          </p>
        }
        codeExample={`
const user = await User.findBy({ email: 'fred@flinstone.com' })
`}
      ></CodeExample>

      <h3 id="models-querying-where">Dream.where</h3>
      <CodeExample
        id="models-querying-where-example"
        expandLevel={2}
        description={
          <p>
            The where statement will actually return back an instance of a Query (tethered by type generics
            back to the originating Dream class) which can then be chained with many statements before final
            execution.
          </p>
        }
        codeExample={`
await User.where({ email: ops.ilike('burpcollaborator.net') }).destroy()
`}
      ></CodeExample>

      <h3 id="models-querying-ops">ops</h3>
      <CodeExample
        id="models-querying-ops-example"
        expandLevel={2}
        description={
          <p>
            ops is a special set of helper methods which can tie back to lower-level kysely queries, allowing
            you to pass more complex statements without leaving an ideal statement flow, like so:
          </p>
        }
        codeExample={`
await User
  .where({ email: ops.in(['burpcollaborator.net', 'howyadoin@gmail.biz']) })
  .destroy()

await User
  .where({ email: ops.like('burpcollaborator.net') })
  .destroy()

await User
  .where({ email: ops.ilike('burpcollaborator.net') })
  .destroy()

await User
  .where({ id: ops.expression('<=', 23) })
  .destroy()
`}
      ></CodeExample>

      <h3 id="models-querying-limit">Dream.limit</h3>
      <CodeExample
        id="models-querying-limit-example"
        expandLevel={2}
        description={
          <p>The limit method allows you to limit the number of results coming from your query.</p>
        }
        codeExample={`
const users = await User.limit(3).all()
const users = await User.where(...).limit(3).all()
`}
      ></CodeExample>

      <h3 id="models-querying-order">Dream.order</h3>
      <CodeExample
        id="models-querying-order-example"
        expandLevel={2}
        description={
          <p>
            The order method allows you to pass both a field and a direction, and will order the resulting
            query to those specifications.
          </p>
        }
        codeExample={`
const users = await User.order('created_at', 'asc').all()
`}
      ></CodeExample>

      <h3 id="models-querying-joins">Dream.joins</h3>
      <CodeExample
        id="models-querying-joins-example"
        expandLevel={2}
        description={<p>The joins method allows you to join associations as part of your queries.</p>}
        codeExample={`
const users = await User.joins({ posts: ['comments'] }).all()
`}
      ></CodeExample>

      <h3 id="models-querying-includes">Dream.includes</h3>
      <CodeExample
        id="models-querying-includes-example"
        expandLevel={2}
        description={
          <p>The includes method allows you to side-load other associations while executing a query.</p>
        }
        codeExample={`
const users = await User.includes({ posts: ['comments'] }).all()
const firstComments = users[0].posts[0].comments
`}
      ></CodeExample>

      <h3 id="models-querying-first">Dream.first</h3>
      <CodeExample
        id="models-querying-first-example"
        expandLevel={2}
        description={<p>The first method returns the first record found in the given table.</p>}
        codeExample={`
const user = await User.first()
`}
      ></CodeExample>

      <h3 id="models-querying-first">Dream.last</h3>
      <CodeExample
        id="models-querying-last-example"
        expandLevel={2}
        description={<p>The last method returns the last record found in the given table.</p>}
        codeExample={`
const user = await User.last()
`}
      ></CodeExample>

      <h3 id="models-querying-pluck">Dream.pluck</h3>
      <CodeExample
        id="models-querying-pluck-example"
        expandLevel={2}
        description={
          <p>
            The pluck method returns raw objects containing just the attributes specified. If only one
            attribute is passed, it is returned as a flattened array.
          </p>
        }
        codeExample={`
const user = await User.pluck('id', 'email')
`}
      ></CodeExample>

      <h3 id="models-querying-all">Dream.all</h3>
      <CodeExample
        id="models-querying-all-example"
        expandLevel={2}
        description={
          <p>
            The all method returns all records matching the given conditions. If none are passed, it will
            return all records in the table.
          </p>
        }
        codeExample={`
const someUsers = await User.where(id: [1, 2, 3]).all()
const allUsers = await User.all()
`}
      ></CodeExample>

      <h3 id="models-querying-sql">Dream.sql</h3>
      <CodeExample
        id="models-querying-sql-example"
        expandLevel={2}
        description={<p>The sql method returns the sql that would be returned if executed.</p>}
        codeExample={`
console.log(User.where({ email: 'howyadoin' }).sql())
`}
      ></CodeExample>
    </React.Fragment>
  )
}

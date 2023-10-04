import React from 'react'
import CodeExample from '../../code-example'

export default function GuidesModelScopes() {
  return (
    <React.Fragment>
      <h3 id="models-scopes">Scopes</h3>

      <CodeExample
        id="models-scopes-usage"
        expandLevel={2}
        description={
          <p>
            The scoping system will be familiar to those coming from the Ruby on Rails camp, but for those who
            are new to this, our design was inspired by{' '}
            <a href="NEED_LINK">the Ruby on Rails scope pattern</a>, and can be used to elegantly capture
            recurring query behavior into partialized functions which can then be applied to your quieries,
            allowing your complex statements to be replaced with beautiful business logic.
          </p>
        }
        codeExample={`
export default class Post extends Dream {
  public readonly get table() {
    return 'posts' as const
  }

  public name: string
  ...

  @Scope()
  public static withFunnyName(query: any) {
    return query.where({ name: 'Chalupas jr' })
  }
}

const posts = await Post.scope('withFunnyName').all()
`}
      ></CodeExample>

      <h4 id="models-scopes-default">Default scopes</h4>
      <CodeExample
        id="models-scopes-default-example"
        expandLevel={2}
        description={
          <p>
            While regular scopes are meant to be applied manually, default scopes will automatically be
            applied to all queries. This behavior should be used sparingly, but there are occasionally pretty
            good cases for it, as seen below, emulating the{' '}
            <a href="NEED_LINK">Ruby on Rails paranoid gem pattern</a>.
          </p>
        }
        codeExample={`
export default class Post extends Dream {
  public readonly get table() {
    return 'posts' as const
  }

  public name: string
  ...

  @Scope({ default: true })
  public static hideDeleted(query: any) {
    return query.where({ deleted_at: null })
  }
}`}
      ></CodeExample>
    </React.Fragment>
  )
}

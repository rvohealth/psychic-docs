import React from 'react'
import CodeExample from '../../code-example'

export default function GuidesModelAssociations() {
  return (
    <React.Fragment>
      <h3 id="models-associations">Associations</h3>

      <p>
        Associations allow us to connect in the abstract two tables which are already making use of sensible
        foreign key patterns.
      </p>

      <h4 id="models-associations-belongs-to">Belongs to association</h4>
      <CodeExample
        id="models-associations-has-one-example"
        expandLevel={2}
        description={
          <p>
            Belongs to associations are to be used when the model in question is related to another model, and
            contains a foreign key to that model within its table. An example of a belongs to would be in the
            case of a `User` and `Post` model, where a `User` can write many `Post`s, and each `Post` would
            contain a field (called a foreign key) which points back to the id field of a `User` who owns it.
            In this context, we would say that the `Post` belongs to the `User`.
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null

  @BelongsTo(() => User)
  public user: User
  public user_id: number
}
`}
      ></CodeExample>

      <h4 id="models-associations-has-one">Has one association</h4>
      <CodeExample
        id="models-associations-has-one-example"
        expandLevel={2}
        description={
          <p>
            Has one associations allow us to express a singular inverse of the belongs to statement. This
            means that if the `Post` class were to belong to `User`, then the user could potentially have one
            post (though they would more-than-likely have many instead).
          </p>
        }
        codeExample={`
const Dream = dream('users')
export default class User extends Dream {
  public id: number
  public content: string | null

  @HasOne(() => Post)
  public post: Post
}
`}
      ></CodeExample>

      <h4 id="models-associations-has-many">Has many association</h4>
      <CodeExample
        id="models-associations-has-one-example"
        expandLevel={2}
        description={
          <p>
            Similar to the above has one example, but returning an array of records, rather than a single
            record (which makes much more sense in the case of `User` and `Post` models). Like the Has one
            relationship, it assumes the foreign key to be on opposite model.
          </p>
        }
        codeExample={`
const Dream = dream('users')
export default class User extends Dream {
  public id: number
  public content: string | null

  @HasMany(() => Post)
  public posts: Post[]
}
`}
      ></CodeExample>

      <h4 id="models-associations-through">through associations</h4>
      <CodeExample
        id="models-associations-through-example-1"
        expandLevel={2}
        description={
          <p>
            both HasOne and HasMany associations have recursively-nested `through` support built-in, allowing
            you to bring nested associations out of their nested context and into the parent model's domain.
          </p>
        }
        codeExample={`
const Dream = dream('comment_replies')
export default class CommentReply extends Dream {
  public id: number
  public content: string | null

  @BelongsTo(() => Comment)
  public comment: Comment

  @HasOne(() => User, { through: 'comment', throughClass: () => Comment })
  public user: User
}

...

const reply = await CommentReply.includes('user').first()
await reply.user.update({ email: 'someotheremail@howyadoin.biz' })

// or

const reply = await CommentReply.first()
await reply.load('user')
await reply.user.update({ email: 'someotheremail@howyadoin.biz' })
`}
      ></CodeExample>

      <h4 id="models-associations-polymorphism">polymorphic associations</h4>
      <CodeExample
        id="models-associations-through-example-1"
        expandLevel={2}
        description={
          <p>
            both HasOne and HasMany associations have recursively-nested `through` support built-in, allowing
            you to bring nested associations out of their nested context and into the parent model's domain.
          </p>
        }
        codeExample={`
const Dream = dream('comment_replies')
export default class CommentReply extends Dream {
  public id: number
  public content: string | null

  @BelongsTo(() => Comment)
  public comment: Comment

  @HasOne(() => User, { through: 'comment', throughClass: () => Comment })
  public user: User
}
`}
      ></CodeExample>
    </React.Fragment>
  )
}

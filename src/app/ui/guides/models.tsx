import React from 'react'
import CodeExample from '../code-example'
import GuidesModelAssociations from './models/associations'
import GuidesModelHooks from './models/hooks'
import GuidesModelValidations from './models/validations'
import GuidesModelScopes from './models/scopes'
import GuidesModelsQuerying from './models/querying'

export default function GuidesModels() {
  return (
    <React.Fragment>
      <h2 id="models">Models</h2>

      <CodeExample
        id="database-configuration"
        expandLevel={2}
        description={
          <p>
            To power the ORM under the hood, psychic is relying on the
            <a href="https://github.com/avocadojesus/dream">dream</a> library. This library was written custom
            for the Psychic framework, and comes with some pretty incredible bells and whistles attached to
            make your domains sing.
          </p>
        }
        codeExample={`
import { Dream, HasOne, BelongsTo, HasMany, BeforeCreate, AfterSave, AfterCreate, AfterUpdate } from 'psychic'
import Comment from './comment'
import CommentReaction from './comment-reaction'
import User from './user'

export default class Post extends Dream {
  public readonly get table() {
    return 'posts' as const
  }

  public id: number
  public content: string | null

  @BelongsTo(() => User)
  public user: User
  public user_id: number

  @HasMany(() => Comment)
  public comments: Comment[]

  @HasOne(() => Comment, {
    where: { primary: true },
  })
  public mainComment: Comment

  @HasMany(() => CompositionReaction, {
    through: 'comments',
    throughClass: () => Comment,
  })
  public commentReactions: CommentReaction[]

  @BeforeCreate()
  public doSomething() {
    ...do something before create
  }

  @AfterSave()
  public doSomethingelse() {
    ...do something safter create or update
  }
}
`}
      ></CodeExample>

      <p></p>

      <h3 id="models-generate">Generating a model</h3>

      <CodeExample
        id="models-generate-example"
        description={<p>The easiest way to generate a model is by using the psychic cli.</p>}
        codeExample={`\
psy g:dream todo user:belongs_to content:string
`}
      ></CodeExample>

      <CodeExample
        id="models-generate-using-resource-example"
        description={
          <p>
            If you know you will be needing endpoints exposed for the resource, you can additionally use the
            resource generator provided by psychic to also generate a controller and serializer. You will
            still need to add routes manually, and will definitely need to modify the generated code to
            tighten the wrenches authorization-wise, params-wise, etc...
          </p>
        }
        codeExample={`\
psy g:resource todo user:belongs_to content:string
`}
      ></CodeExample>

      <h3 id="models-create">Creating an instance of a model</h3>

      <CodeExample
        id="models-create-example"
        description={
          <p>
            To create an instance of a psychic model, use the static <span className="hl">.create</span>{' '}
            method.&nbsp; This method will automatically fill the id, created_at and updated_at fields on your
            model.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'

const user = await User.create({
  email: 'hello@world.biz',
  password: 'fishandfriends',
})
console.log(user.email, user.id)
`}
      ></CodeExample>

      <h3 id="models-query">Querying your models</h3>

      <CodeExample
        id="models-query-all-example"
        description={
          <p>
            Psychic provides a robust query building API, again modeled after Ruby on Rails's query building
            API to deliver a robust interface for composing queries.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'
import { ops } from 'psychic'

await User
  .where({ email: ops.like('%y@%') })
  .all()
`}
      ></CodeExample>

      <CodeExample
        id="models-query-first-example"
        description={
          <p>
            Additionally, we provide first and last methods on the query builder to allow you to easily gain
            entry to first or last records.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'
import { ops } from 'psychic'

await User
  .where({ email: ops.like('%y@%') })
  .first()
`}
      ></CodeExample>

      <h3 id="models-update">Updating an existing model</h3>

      <CodeExample
        id="models-update-example"
        description={
          <p>
            To update a record that already exists, you can use a combination of attribute setters&nbsp; and
            the <span className="hl">#save</span> method on your models to trigger updates.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'
const user = await User.first()
user.email = 'how@yadoin.biz'
await user.save()
`}
      ></CodeExample>

      <CodeExample
        id="models-update-example-2"
        description={
          <p>
            To achieve this in one line, you can call the <span className="hl">#update</span> method.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'
const user = await User.first()
await user.update({ email: 'how@yadoin.biz' })
`}
      ></CodeExample>

      <CodeExample
        id="models-update-example-3"
        description={<p>Updates can also be achieved through the query builder for bulk updating.</p>}
        codeExample={`\
import User from 'app/models/user'
import { ops } from 'psychic'

await User
  .where({ email: ops.like('%y@%') })
  .update({ email: 'fish@mcgee.com' })
`}
      ></CodeExample>

      <h3 id="models-destroy">Destroying a model</h3>

      <CodeExample
        id="models-destroy"
        description={
          <p>
            To destroy a model, simply call the <span className="hl">#destroy</span> method on the instance.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'

const user = await User.first()
await user.destroy()
`}
      ></CodeExample>

      <CodeExample
        id="models-destroy-2"
        description={<p>Destroying can also be done from the query builder for bulk deletion.</p>}
        codeExample={`\
import User from 'app/models/user'
import { ops } from 'psychic'

await User
  .where({ email: ops.like('%y@%') })
  .destroy()
`}
      ></CodeExample>

      <h3 id="models-transactions">Transactions</h3>
      <CodeExample
        id="models-transactions-example"
        description={
          <p>
            Transactions can be built using any model class, but typcally would be done from the base Dream
            class, like so:
          </p>
        }
        codeExample={`\
import { Dream } from 'psychic'

...

await Dream.transaction(async txn => {
  const user = await User.create({ ... }, txn)
  await Post.create({ user })
})
`}
      ></CodeExample>

      <h3 id="models-sti">STI (single table inheritance)</h3>
      <CodeExample
        id="models-sti-example"
        description={
          <p>
            Single table inheritance allows one to have model inheritance supported at the database level by
            using a type field to capture the class name. Doing this automatically applies default scopes to
            the class ensuring that the type restriction is always applied.
          </p>
        }
        codeExample={`\
import User from 'app/models/user'

@Sti()
class AdminUser extends User {
}
`}
      ></CodeExample>

      <GuidesModelsQuerying />
      <GuidesModelAssociations />
      <GuidesModelHooks />
      <GuidesModelValidations />
      <GuidesModelScopes />
    </React.Fragment>
  )
}

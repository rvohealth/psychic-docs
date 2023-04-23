import React from 'react'
import CodeExample from '../../code-example'

export default function GuidesModelHooks() {
  return (
    <React.Fragment>
      <h3 id="models-hooks">Hooks</h3>

      <p>
        Hooks allow us to add powerful callback-driven behavior to our models both before and after various
        changes in state to that record. Our implementation here is modeled directly after the Ruby on Rails
        active record callbacks pattern, and leverages decorators to allow powerfully expressive compositon at
        the model layer
      </p>

      <h4 id="models-hooks-before-create">Before create</h4>
      <CodeExample
        id="models-hooks-before-create-example"
        expandLevel={2}
        description={
          <p>
            BeforeCreate hooks are run whenever a new record is being saved to the database. A decorator
            pattern is leveraged, so no arguments need to be passed to the hook, it simply needs to live above
            the property, like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @BeforeCreate()
  public async hashPassword() {
    if (this.password)
      this.password_digest = await Hash.gen(this.password)
    this.password = undefined
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-update">Before update</h4>
      <CodeExample
        id="models-hooks-before-update-example"
        expandLevel={2}
        description={
          <p>
            BeforeUpdate hooks are run whenever an existing (meanin, previously-saved) record is updated, and
            can be leveraged like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @BeforeUpdate()
  public async doSomething() {
    // ... do whatever you want here!
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-save">Before save</h4>
      <CodeExample
        id="models-hooks-before-save-example"
        expandLevel={2}
        description={
          <p>
            BeforeSave hooks are run whenever either an existing OR new record is written to the DB, and can
            be leveraged like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @BeforeSave()
  public async doSomething() {
    // ... do whatever you want here!
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-destroy">Before destroy</h4>
      <CodeExample
        id="models-hooks-before-destroy-example"
        expandLevel={2}
        description={
          <p>
            BeforeDestroy hooks are run whenever either an existing record is destroyed from the DB, and can
            be leveraged like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @BeforeDestroy()
  public async doSomething() {
    // ... do whatever you want here!
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-create">After create</h4>
      <CodeExample
        id="models-hooks-before-create-example"
        expandLevel={2}
        description={
          <p>
            AfterCreate hooks are run after a new record is saved to the database. A decorator pattern is
            leveraged, so no arguments need to be passed to the hook, it simply needs to live above the
            property, like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @AfterCreate()
  public async hashPassword() {
    if (this.password)
      this.password_digest = await Hash.gen(this.password)
    this.password = undefined
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-update">After update</h4>
      <CodeExample
        id="models-hooks-before-update-example"
        expandLevel={2}
        description={
          <p>
            AfterUpdate hooks are run whenever an existing (meanin, previously-saved) record has been updated,
            and can be leveraged like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @AfterUpdate()
  public async doSomething() {
    // ... do whatever you want here!
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-save">After save</h4>
      <CodeExample
        id="models-hooks-before-save-example"
        expandLevel={2}
        description={
          <p>
            AfterSave hooks are run whenever either an existing OR new record has been written to the DB, and
            can be leveraged like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @AfterSave()
  public async doSomething() {
    // ... do whatever you want here!
  }
}
`}
      ></CodeExample>

      <h4 id="models-hooks-before-destroy">After destroy</h4>
      <CodeExample
        id="models-hooks-before-destroy-example"
        expandLevel={2}
        description={
          <p>
            AfterDestroy hooks are run whenever either an existing record has been destroyed from the DB, and
            can be leveraged like so:
          </p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number
  public content: string | null
  ...

  @AfterDestroy()
  public async doSomething() {
    // ... do whatever you want here!
  }
}
`}
      ></CodeExample>
    </React.Fragment>
  )
}

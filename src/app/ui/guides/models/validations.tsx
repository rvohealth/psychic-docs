import React from 'react'
import CodeExample from '../../code-example'

export default function GuidesModelValidations() {
  return (
    <React.Fragment>
      <h3 id="models-validations">Validations</h3>

      <p>
        Validations allow us to ensure certain conditions are met before a record can be saved to the
        database. These are useful for expressing common restrictions on your models.
      </p>

      <h4 id="models-validations-presence">Presence</h4>
      <CodeExample
        id="models-associations-presence-example"
        expandLevel={2}
        description={
          <p>Use the presence validator when you want to guarantee a field is not blank before saving.</p>
        }
        codeExample={`
const Dream = dream('posts')
export default class Post extends Dream {
  public id: number

  @Validates('presence')
  public content: string
`}
      ></CodeExample>

      <h4 id="models-validations-contains">Contains</h4>
      <CodeExample
        id="models-associations-contains-example"
        expandLevel={2}
        description={
          <p>
            Use the contains validator to ensure a certain format is met against your model before saving.
          </p>
        }
        codeExample={`
const Dream = dream('users')
export default class User extends Dream {
  public id: number

  @Validates('contains', '@')
  public email: string
`}
      ></CodeExample>
    </React.Fragment>
  )
}

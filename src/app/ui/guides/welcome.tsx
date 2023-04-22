import React from 'react'
import CodeExample from '../code-example'

export default function GuidesWelcome() {
  return (
    <React.Fragment>
      <h2 id="welcome">Welcome</h2>

      <CodeExample
        id="welcome-what-is-it"
        expandLevel={2}
        description={
          <>
            <p>
              Psychic is a node/typescript MVC-based web framework built on top of&nbsp;
              <a href="https://expressjs.com">expressjs</a> and&nbsp;
              <a href="https://github.com/avocadojesus/dream">dream ORM</a>. It provides a light wrapper
              around express, gifting you a custom routing mechanism which allows one to compose routes much
              like they would in Ruby on Rails, Laravel, pheonix, or most other popular MVC-based web
              frameworks, and then uses express to direct the defined routes to controller methods.
            </p>
            <p></p>
          </>
        }
        codeExample={`\
// conf/routes.ts

import { PsychicRouter } from 'psychic'

export default (r: PsychicRouter) => {
  r.get('/', 'welcome#index')
  r.namespace('api', r => {
    r.namespace('v1', r => {
      r.resources('users', { only: ['create', 'index'] })
    })
  })
}
`}
      ></CodeExample>

      <CodeExample
        id="welcome-what-is-it"
        expandLevel={2}
        description={
          <p>
            In addition, Psychic provides a full-force typescript/node/postgres driven ORM that runs on top of{' '}
            <a href="NEED_LINK">Kysely</a>. Modeled after the active record provided by Ruby on Rails, Dream
            provides a full suite of powerful features with a very robust typing system to aid you in your
            code journeys.
          </p>
        }
        codeExample={`\
import { BeforeCreate, BeforeUpdate, Column, Validates, Hash, dream } from 'psychic'

const Dream = dream('users')
export default class User extends Dream {
  public id: number
  public name: string
  public created_at: Date
  public updated_at: Date

  @Validates('contains', '@')
  @Validates('presence')
  public email: string

  @Validates('length', { min: 4, max: 18 })
  public password_digest: string
  public password?: string | null

  @BeforeCreate()
  @BeforeUpdate()
  public async hashPass() {
    if (this.password) this.password_digest = await Hash.gen(this.password)
    this.password = undefined
  }

  public async checkPassword(password: string) {
    if (!this.password_digest) return false
    return await Hash.check(password, this.password_digest)
  }
}
`}
      ></CodeExample>
    </React.Fragment>
  )
}

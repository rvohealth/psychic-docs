import React from "react";
import CodeExample from "../code-example";

export default function GuidesWelcome() {
  return (
    <React.Fragment>
      <h2 id="welcome">Welcome</h2>

      <CodeExample
        id="welcome-what-is-it"
        expandLevel={2}
        description={
          <p>
            Psychic is a node/typescript MVC-based microframework built on top
            of&nbsp;
            <a href="https://expressjs.com">expressjs</a> and&nbsp;
            <a href="https://github.com/sequelize/sequelize-typescript">
              sequelize-typescript
            </a>
            . It provides a light wrapper around express, gifting you a custom
            routing mechanism which allows one to compose routes much like they
            would in Ruby on Rails, Laravel, pheonix, or most other popular
            MVC-based web frameworks, and then uses express to direct the
            defined routes to controller methods.
          </p>
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
            Additionally, as previously mentioned, it provides a helpful
            integration with the sequelize ORM by utilizing the
            sequelize-typescript library, which brings the sequelize library
            into the modern era of node ORMs, leveraging decorators for driving
            associations, model hooks, and column descriptors.
          </p>
        }
        codeExample={`\
import { Sequelize, Table, Column, Model, HasMany, IsUUID, PrimaryKey, DataType, BeforeUpdate, BeforeCreate, Contains } from 'sequelize-typescript'
import { UUID, Hash, PsychicModel } from 'psychic'
import Composition from './composition'

@Table({ tableName: 'users', underscored: true })
export default class User extends PsychicModel {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: Sequelize.literal("uuid_generate_v4()") })
  id: UUID

  @Contains('@')
  @Column(DataType.TEXT)
  email: string

  @HasMany(() => Composition)
  compositions: Composition[]

  @Column(DataType.TEXT)
  password_digest: string

  @Column(DataType.VIRTUAL)
  public password: string

  @BeforeCreate
  @BeforeUpdate
  static async hashPass(user: User) {
    if (user.password)
      user.password_digest = await Hash.gen(user.password)
    user.password = undefined
  }

  public async checkPassword(password: string) {
    if (!this.password_digest) return false
    return await Hash.check(password, this.password_digest)
  }
}
`}
      ></CodeExample>
    </React.Fragment>
  );
}

import React from 'react'
import CodeExample from '../code-example'

export default function GuidesControllers() {
  return (
    <React.Fragment>
      <h2 id="controllers">Controllers</h2>

      <h3 id="controllers-generating">Generating</h3>

      <CodeExample
        id="controllers-generating-example"
        description={<p>To generate a controller, use the provided cli tool as demonstrated below:</p>}
        language="bash"
        codeExample={`\
psy g:controller howyadoins create update destroy
`}
      ></CodeExample>

      <CodeExample
        id="controllers-generating-example-2"
        description={<p>This will spit out the followig:</p>}
        codeExample={`\
import { PsychicController, Params } from 'psychic'

export default class HowyadoinsController extends PsychicController {
  public async create() {
  }

  public async update() {
  }

  public async destroy() {
  }
}
`}
      ></CodeExample>
    </React.Fragment>
  )
}

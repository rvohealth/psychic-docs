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
        theme="dark"
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

      <h3 id="controllers-request">request</h3>

      <CodeExample
        id="controllers-request-example"
        description={
          <p>
            Any controller extending the PsychicController class will automatically contain references to the
            request and response objects, since they are coupled to the controller upon instantiation of the
            class.
          </p>
        }
        codeExample={`\
import { PsychicController, Params } from 'psychic'

export default class HowyadoinsController extends PsychicController {
  public async create() {
    console.log(this.req)
  }
}
`}
      ></CodeExample>

      <h3 id="controllers-response">response</h3>
      <CodeExample
        id="controllers-response-example"
        description={<p>In addition, the controllers will also expose a res object</p>}
        codeExample={`\
import { PsychicController, Params } from 'psychic'

export default class HowyadoinsController extends PsychicController {
  public async create() {
    this.res.json({ how: 'yadoin' })
  }
}
`}
      ></CodeExample>

      <h3 id="controllers-params">params</h3>
      <CodeExample
        id="controllers-params-example"
        description={
          <p>
            Though you can go through conventional methods to collect request parameters from express,
            Psyichic provides a helpful shortcut for accessing any param, regardless of where it came from, by
            using the following:
          </p>
        }
        codeExample={`\
import { PsychicController, Params } from 'psychic'

export default class HowyadoinsController extends PsychicController {
  public async create() {
    console.log(this.params)
    // { ...query, ...post body }
  }
}
`}
      ></CodeExample>
    </React.Fragment>
  )
}

import React from 'react'
import CodeExample from '../code-example'

export default function GuidesSpecs() {
  return (
    <React.Fragment>
      <h2 id="specs">Specs</h2>

      <p>
        Psychic provides both feature and unit spec patterns, depending on the needs of your test. All specs
        are run using jest, and truncate your test server between each test run.
      </p>

      <h3 id="specs-unit">Unit specs</h3>
      <CodeExample
        id="specs-unit-example"
        expandLevel={2}
        description={
          <p>
            Unit specs are meant for testing strictly your backend components in isolation. They do not launch
            your server or front end. The config for them is located in `spec/unit/jest.config.js`
          </p>
        }
        codeExample={`\
import { PsychicServer } from 'psychic'
import * as request from 'supertest'
const server = new PsychicServer()

describe('GET /ping', () => {
  beforeAll(async () => {
    await server.boot()
  })

  it('returns 200 response code', async () => {
    request.agent(server.app).get('/ping').expect(200)
  })
})
`}
      ></CodeExample>

      <h3 id="specs-unit">Feature specs</h3>
      <CodeExample
        id="specs-feature-example"
        expandLevel={2}
        description={
          <p>
            Contrary to unit specs, feature specs will launch your front end and back end servers, driving
            them with puppeteer.
          </p>
        }
        codeExample={`\
describe('ensure puppeteer is working', () => {
  it('accepts the request', async () => {
    await page.goto('http://localhost:3000')
    await expect(page).toMatchTextContent('hello: world')
  })
})
`}
      ></CodeExample>
    </React.Fragment>
  )
}

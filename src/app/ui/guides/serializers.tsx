import React from 'react'
import CodeExample from '../code-example'

export default function GuidesSerializers() {
  return (
    <React.Fragment>
      <h2 id="serializers">Serializers</h2>

      <p>Serializers allow you to control the shapes of the payloads in your API.</p>

      <CodeExample
        id="serializers-generating"
        expandLevel={2}
        description={<p>To generate a serializer, use the cli command provided:</p>}
        theme="dark"
        codeExample={`\
psy g:serializer user email id created_at
`}
      ></CodeExample>

      <CodeExample
        id="serializers-generating-2"
        expandLevel={2}
        description={<p>which would generate</p>}
        codeExample={`\
import { PsychicSerializer } from 'psychic'

export default class UserSerializer extends PsychicSerializer {
  static {
    this
      .attributes(
        'email',
        'id'
      )
  }
}
`}
      ></CodeExample>

      <h3 id="serializers-attributes">Serializer attributes</h3>
      <CodeExample
        id="serializers-attributes"
        expandLevel={2}
        description={<p>Attributes are assigned in the static constructor of the serializer.</p>}
        codeExample={`\
import { PsychicSerializer } from 'psychic'

export default class UserSerializer extends PsychicSerializer {
  static {
    this
      .attributes(
        'email',
        'id'
      )
  }
}
`}
      ></CodeExample>

      <h3 id="serializers-usage">usage</h3>
      <CodeExample
        id="serializers-attributes"
        expandLevel={2}
        description={
          <p>From within a controller, one can use a serializer to restrict attributes, like so:</p>
        }
        codeExample={`\
  public myMethod() {
    const stuff = await Stuff.first()
    this.ok(new StuffSerializer(stuff).serialize())
  }
`}
      ></CodeExample>
    </React.Fragment>
  )
}

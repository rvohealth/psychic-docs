import React from 'react'
import CodeExample from '../code-example'

export default function GuidesInstallation() {
  return (
    <React.Fragment>
      <h2 id="installation" data-breadcrumb={['installation']}>
        Installation
      </h2>

      <CodeExample
        id="installation-download-cli"
        expandLevel={2}
        description={
          <p>
            In order to get started with psychic, you will first need to download the&nbsp;
            <a href="https://github.com/@rvohealth/psychic-cli">psychic cli package</a>. This package is
            really only needed to get a new app up and running. Once it is, you will use yarn scripts to
            access the psychic cli, which will be useful for running migrations, generating resources,
            starting your development server, etc...
          </p>
        }
        codeExample={`\
yarn global add https://github.com/@rvohealth/psychic-cli
`}
        language="bash"
        theme="dark"
      ></CodeExample>
    </React.Fragment>
  )
}

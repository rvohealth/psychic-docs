import React from "react";
import CodeExample from "../code-example";

export default function GuidesInstallation() {
  return (
    <React.Fragment>
      <h2 id="installation">Installation</h2>

      <CodeExample
        id="installation-download-cli"
        expandLevel={2}
        description={
          <p>
            In order to get started with psychic, you will first need to
            download the&nbsp;
            <a href="https://github.com/avocadojesus/psychic-cli">
              psychic cli package.
            </a>
          </p>
        }
        codeExample={`\
yarn global add https://github.com/avocadojesus/psychic-cli
`}
        language="bash"
        theme="dark"
      ></CodeExample>
    </React.Fragment>
  );
}

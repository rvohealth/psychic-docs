import { qtcreatorDark as lightTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { far as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import { idea as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { darcula as darkTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Inspector } from "react-inspector";

export default function CodeExample({
  id,
  title,
  codeExample,
  results,
  children,
  description = <div></div>,
  expandLevel = 0,
  theme = "light",
  language = "javascript",
}: {
  id: string;
  title?: string;
  codeExample: string;
  results?: any;
  children?: React.ReactNode;
  description?: React.ReactNode;
  expandLevel?: number;
  theme?: "light" | "dark";
  language?: string;
}) {
  let selectedTheme: any;
  switch (theme) {
    case "light":
      selectedTheme = lightTheme;
      break;

    case "dark":
      selectedTheme = darkTheme;
      break;
  }

  return (
    <div
      className={`code-example ${theme} ${!title ? " reduced" : ""}`}
      id={id}
    >
      <div className="notation-title">{title && <h3>{title}</h3>}</div>

      <div className="description">{description}</div>

      <div className="content">
        <div className="notation-main">
          <div className="notation-outer-container code">
            <SyntaxHighlighter language={language} style={selectedTheme}>
              {codeExample}
            </SyntaxHighlighter>
          </div>
          <div className="example-text">{children}</div>
        </div>
        <div className="notation-transcription code">
          {results && (
            <div className="code-wrap">
              {typeof results === "string" ? (
                <pre className="results">{results}</pre>
              ) : (
                <Inspector
                  theme="chromeDark"
                  expandLevel={expandLevel}
                  table={false}
                  data={results}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

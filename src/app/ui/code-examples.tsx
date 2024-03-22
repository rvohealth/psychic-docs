import { far as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import { far as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import { idea as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import darkTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/nnfx'
// import { synthwave84 as darkTheme } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { oneLight as darkTheme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { atomOneLight as darkTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Inspector } from 'react-inspector'
import { useState } from 'react'

export default function CodeExamples({
  id,
  title,
  startingOption,
  options,
  codeExamples,
  results,
  children,
  description = <div></div>,
  expandLevel = 0,
  theme = 'light',
  language = 'javascript',
}: {
  id: string
  title?: string
  startingOption: string
  options: { id: string; label: string }[]
  codeExamples: { id: string; example: string }[]
  results?: any
  children?: React.ReactNode
  description?: React.ReactNode
  expandLevel?: number
  theme?: 'light' | 'dark'
  language?: string
}) {
  const [currentId, setCurrentId] = useState(startingOption)

  let selectedTheme: any
  switch (theme) {
    case 'light':
      selectedTheme = darkTheme
      break

    case 'dark':
      selectedTheme = darkTheme
      break
  }

  const codeExample = codeExamples.find(example => example.id === currentId)!
  const currentOption = options.find(option => option.id === currentId)!

  return (
    <div className={`code-example ${theme} ${!title ? ' reduced' : ''}`} id={id}>
      <div className="notation-title">{title && <h3>{title}</h3>}</div>

      <div className="description">{description}</div>

      <div className="options">
        {options.map(option => (
          <button
            className={option.id === currentId ? 'active' : ''}
            key={option.id}
            onClick={() => {
              setCurrentId(option.id)
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="content">
        <div className="notation-main">
          <div className="notation-outer-container code">
            <SyntaxHighlighter language={language} style={selectedTheme}>
              {codeExample.example}
            </SyntaxHighlighter>
          </div>
          <div className="example-text">{children}</div>
        </div>
        <div className="notation-transcription code">
          {results && (
            <div className="code-wrap">
              {typeof results === 'string' ? (
                <pre className="results">{results}</pre>
              ) : (
                <Inspector theme="chromeDark" expandLevel={expandLevel} table={false} data={results} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APIEnvPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className='page api env'>
      <APILeftSidebar expanded={['env']} />

      <div className='docs api'>
        <div className='documentation'>
          <h1>env</h1>

          <p>
          </p>

          <h2>Methods</h2>
          <nav>
            <a href="#load">load</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

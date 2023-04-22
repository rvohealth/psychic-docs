import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APIParamsPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className='page api params'>
      <APILeftSidebar expanded={['params']} />

      <div className='docs api'>
        <div className='documentation'>
          <h1>Params</h1>

          <p>
            The Params class is a helper class to make restricting params very simple. It is&nbsp;
            predominantly used in controllers to help filter request params.
          </p>

          <h2>Static Methods</h2>
          <nav>
            <a href="#restrict">.restrict</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

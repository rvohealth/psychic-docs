import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APILogPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className='page api log'>
      <APILeftSidebar expanded={['log']} />

      <div className='docs api'>
        <div className='documentation'>
          <h1>log</h1>

          <p>
          </p>

          <h2>Getters</h2>
          <nav>
            <a href="#header">header</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#puts">puts</a>
            <a href="#write">write</a>
            <a href="#info">info</a>
            <a href="#error">error</a>
            <a href="#welcome">welcome</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

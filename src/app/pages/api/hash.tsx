import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APIHashPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className='page api hash'>
      <APILeftSidebar expanded={['hash']} />

      <div className='docs api'>
        <div className='documentation'>
          <h1>hash</h1>

          <p>
          </p>

          <h2>Static methods</h2>
          <nav>
            <a href="#gen">gen</a>
            <a href="#check">check</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

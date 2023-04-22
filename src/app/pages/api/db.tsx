import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APIDbPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className='page api db'>
      <APILeftSidebar expanded={['db']} />

      <div className='docs api'>
        <div className='documentation'>
          <h1>db</h1>

          <p>
            the db class is a helpful app singleton which provides low-level database access.
          </p>

          <h2>Getters</h2>
          <nav>
            <a href="#source">source</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#initialize">initialize</a>
            <a href="#connect">connect</a>
            <a href="#test">test</a>
            <a href="#raw">raw</a>
            <a href="#truncate">truncate</a>
            <a href="#close">close</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import APILeftSidebar from '../../ui/api/left-sidebar'

export default function APIEncryptPage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
  }, [location.hash])

  return (
    <div className='page api encrypt'>
      <APILeftSidebar expanded={['encrypt']} />

      <div className='docs api'>
        <div className='documentation'>
          <h1>encrypt</h1>

          <p>
            the encrypt class is a static-driven helper that wraps the jwt library to make encrypting&nbsp;
            and decrypting a breeze.
          </p>

          <h2>Static methods</h2>
          <nav>
            <a href="#sign">sign</a>
            <a href="#decode">decode</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

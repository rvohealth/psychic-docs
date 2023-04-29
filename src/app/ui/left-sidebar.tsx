import { NavLink } from 'react-router-dom'
import Logo from './logo'

export default function LeftSidebar({
  mode,
  children,
}: {
  mode: 'api' | 'guide'
  children: React.ReactNode
}) {
  return (
    <div className={`left-sidebar ${mode}`}>
      <Logo />
      <nav className="page-selection">
        <NavLink to="/guides#docs-content">guides</NavLink>
        <NavLink to="/api">api</NavLink>
      </nav>

      <div className="left-sidebar-content">{children}</div>
    </div>
  )
}

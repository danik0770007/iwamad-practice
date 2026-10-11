import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        <div>
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </div>
      <nav aria-label="Main">
        <ul className="nav">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li className="nav__likes" aria-label={`${likes} likes`}>♥ {likes}</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
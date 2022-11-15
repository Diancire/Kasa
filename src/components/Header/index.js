import { Link } from 'react-router-dom'
import logo from '../../assets/logo_head.png'

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header_logo" />
        <nav>
          <Link to="/" className="nav_items">Accueil</Link>
          <Link to="/about" className="nav_items">A propos</Link>
        </nav>
      </header>
    )
  }
  
  export default Header

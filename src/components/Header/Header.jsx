import { Link } from "react-router-dom"
import logo from "../../assets/logo-kasa.svg"
import "../../styles/Header.css"

function Header() {
    return (
      <header>
        <img src={logo} alt="Logo Kasa" className="logo" />
        <nav className="menu">
            <Link to="/">Accueil</Link>
            <Link to="/à-propos">À propos</Link>
        </nav>
      </header>
    )
  }
  
  export default Header
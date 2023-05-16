import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-kasa.svg";
import "../../styles/Header.css";

function Header() {
    return (
      <header>
        <Link to="/" ><img src={logo} alt="Logo Kasa" className="logo" /></Link>
        <nav className="menu">
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/à-propos" >À propos</NavLink>
        </nav>
      </header>
    )
  }
  
  export default Header;
import logo from "../../assets/logo/logo-kasa-white.svg";
import "../../styles/Footer.css";

function Footer() {
    return (
      <footer>
        <img src={logo} alt="Logo Kasa"/>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
export default Footer;
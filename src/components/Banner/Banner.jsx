import banner from "../../assets/banner/banner-kasa.jpg"
import "../../styles/Banner.css"

function Banner() {
    return (
      <div className="banner">
        <img src={banner} alt="Bannière avec paysage"/>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
  }
  
  export default Banner
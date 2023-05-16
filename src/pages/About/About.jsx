import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/banner/banner-about.jpg";
import Collapse from "../../components/Collapse/Collapse";
import "../../styles/About.css"

function About() {
    return (
      <main>
        <Banner 
          imgSrc={bannerImage}
          imgAlt="Paysage de montagnes"
        />
        <div className="accordions-wrapper-about">
          <Collapse 
            categoryName="Fiabilité"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Collapse 
            categoryName="Respect"
            categoryDetails="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse 
            categoryName="Service"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Collapse 
            categoryName="Sécurité"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </main>
    )
  }
  
  export default About;
import Banner from "../../components/Banner/Banner";
import LocationList from "../../components/LocationList/LocationList";
import bannerImage from "../../assets/banner/banner-kasa.jpg";
import "../../styles/scss/Home.scss";

function Home() {
    return (
      <main>
        <div className="home-banner">
          <Banner 
            imgSrc={bannerImage}
            imgText="Chez vous, partout et ailleurs"
            imgAlt="Rochers au bord de la mer"
          />
          <LocationList />
          </div>
      </main>
    )
  }
  
  export default Home;
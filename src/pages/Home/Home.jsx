import Banner from "../../components/Banner/Banner";
import LocationList from "../../components/LocationList/LocationList";
import bannerImage from "../../assets/banner/banner-kasa.jpg";

function Home() {
    return (
      <main>
        <Banner 
          imgSrc={bannerImage}
          imgText="Chez vous, partout et ailleurs"
          imgAlt="Rochers au bord de la mer"
        />
        <LocationList />
      </main>
    )
  }
  
  export default Home;
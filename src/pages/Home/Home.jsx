import Banner from "../../components/Banner/Banner"
import LocationList from "../../components/LocationList/LocationList"

function Home() {
    return (
      <div>
        <Banner />
        <LocationList />

        {/* <ul> */}
          {/* {locationList.map((location) => (<li key={location.id}>{location}</li>))} */}
        {/* </ul> */}
      </div>
    )
  }
  
  export default Home
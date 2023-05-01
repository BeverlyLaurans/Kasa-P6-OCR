import { locationList } from "../../datas/locationList.js"
import { Link } from "react-router-dom"
import "../../styles/LocationList.css"

function LocationList() {
    return (
        <div className="location-list">
            {locationList.map((location) => (
          <div key={location.id} className="location-card">
            <Link to={`/locations/${location.id}`}>
              <img src={location.pictures[0]} alt={location.title}/>
              <h2>{location.title}</h2>
            </Link>
          </div>
        ))}
        </div>
    )
}

export default LocationList
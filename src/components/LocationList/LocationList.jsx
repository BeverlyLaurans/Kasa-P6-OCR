import { locationDatas } from "../../datas/locationDatas.js";
import { Link } from "react-router-dom";
import "../../styles/LocationList.css";

function LocationList() {
    return (
        <div className="location-list">
            {locationDatas.map((location) => (
          <div key={location.id} className="location-card">
            <Link to={`/locations/${location.id}`}>
              <div className="image-container">
                <img src={location.cover} alt={location.title}/>
                <div className="image-overlay"></div>
              </div>
              <h2>{location.title}</h2>
            </Link>
          </div>
        ))}
        </div>
    )
}

export default LocationList;
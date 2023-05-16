import { locationDatas } from "../../datas/locationDatas";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import { Navigate } from "react-router-dom";
import "../../styles/Location.css";

function LocationDetails() {
  const { locationId } = useParams();
  const location = locationDatas.find((location) => location.id === locationId);

  if (!location) {
    return <Navigate to="/error" />;
  } else {
    return (
      <main>
        <Slideshow 
        imgSrc={location.pictures}
        imgAlt={`Photo ${location.title} ${location.location}`}
        />
        <div className="location-about">
          <div className="location-main-informations">
            <div className="location-title">
              <h1>{location.title}</h1>
              <p>{location.location}</p>
            </div>
            <div className="host-informations">
              <p>{location.host.name}</p>
              <img src={location.host.picture} alt="Host"/>
            </div>
          </div>
          <div className="location-other-informations">
            <Tags 
              tagName={
                <ul className="tags-list">
                  {location.tags.map((tag) => (
                        <li className="tag-item" key={`${tag}-${location.id}`}>{tag}</li>
                        ))}
                </ul>
              }
            />
            <Rating 
            rating={location.rating}/>
          </div>
        </div>
        <div className="accordions-wrapper-location">
            <Collapse 
              categoryName="Description"
              categoryDetails={location.description}
            />
            <Collapse 
              categoryName="Équipements"
              categoryDetails={
                <ul>
                  {location.equipments.map((equipment) => (
                    <li key={`${equipment}-${location.id}`}>{equipment}</li>
                    ))}
                </ul>
              }
            />
        </div>
      </main>
    )
    }
  }
  
export default LocationDetails;
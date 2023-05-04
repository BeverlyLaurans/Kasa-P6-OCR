import { locationDatas } from "../../datas/locationDatas";
import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags"
import Collapse from "../../components/Collapse/Collapse";
import "../../styles/Location.css"

function LocationDetails() {
  const { locationId } = useParams();
  const findLocationId = locationDatas.find((location) => location.id === locationId);

    return (
      <div>
        <Slideshow />
        <div>
          <h1>Titre du logement</h1>
          <p>Localisation</p>
          <Tags />
        </div>
        <div>
          <div>
            <p></p>
            <img />
          </div>
          <div>
            <ul></ul>
          </div>
        </div>
        <div className="accordions-wrapper-location">
            <Collapse 
              categoryName="Description"
              categoryDetails=""
            />
            <Collapse 
              categoryName="Équipements"
              categoryDetails=""
            />
        </div>
      </div>
    )
  }
  
export default LocationDetails
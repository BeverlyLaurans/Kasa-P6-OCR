import { locationDatas } from "../../datas/locationDatas"
import { useParams } from "react-router-dom"
// import { useState, useEffect } from "react"
import Slideshow from "../../components/Slideshow/Slideshow"
import Tags from "../../components/Tags/Tags"
// import starEmpty from "../../assets/icons/star-empty.svg"
// import starFull from "../../assets/icons/star-full.svg"
import Collapse from "../../components/Collapse/Collapse"
import Rating from "../../components/Rating/Rating"
import "../../styles/Location.css"

function LocationDetails() {
  const { locationId } = useParams();
  const location = locationDatas.find((location) => location.id === locationId);

    return (
      <div>
        <Slideshow 
        imgSrc={location.pictures}
        />
        <div className="location-about">
          <div className="location-informations">
            <h1>{location.title}</h1>
            <p>{location.location}</p>
            <Tags 
            tagName={
              <ul className="tags-list">
                {location.tags.map((tag) => (
                      <li className="tag-item" key={`${tag}-${location.id}`}>{tag}</li>
                      ))}
              </ul>
            }
            />
          </div>
          <div className="host-informations">
            <div className="host">
              <p>{location.host.name}</p>
              <img src={location.host.picture}/>
            </div>
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
      </div>
    )
  }
  
export default LocationDetails
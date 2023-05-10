import { useState, useEffect } from "react"
import previousArrow from "../../assets/icons/previous-arrow.svg"
import nextArrow from "../../assets/icons/next-arrow.svg"
import "../../styles/Slideshow.css"

function Slideshow(props) {
  const {imgSrc} = props
  const [imageIndex, setImageIndex] = useState(0)
    
  function nextPicture() {
    if (imageIndex === imgSrc.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  function previousPicture() {
    if (imageIndex === 0) {
      setImageIndex(imgSrc.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }

      return (
        <div className="slideshow">
            <img src={imgSrc[imageIndex]} alt="" className="slideshow-image"/>
            <div className="slideshow-informations">
              <div className="slideshow-navigation">
                  <button onClick={previousPicture}><img src={previousArrow}/></button>
                  <button onClick={nextPicture}><img src={nextArrow}/></button>
              </div>
              <div className="slideshow-counter">
                  <p>{imageIndex + 1}/{imgSrc.length}</p>
              </div>
              </div>
        </div>
      )
    }
    
    export default Slideshow
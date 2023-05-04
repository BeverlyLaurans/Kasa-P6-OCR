import { locationDatas } from "../../datas/locationDatas"
import previousArrow from "../../assets/icons/previous-arrow.svg"
import nextArrow from "../../assets/icons/next-arrow.svg"
import "../../styles/Slideshow.css"

function Slideshow() {
    
      return (
        <div className="slideshow">
            <img src="" alt="" className="slideshow-image"/>
            <div className="slideshow-navigation">
                <button><img src={previousArrow}/></button>
                <button><img src={nextArrow}/></button>
            </div>
            <div className="slideshow-counter">
                <p></p>
            </div>
        </div>
      )
    }
    
    export default Slideshow
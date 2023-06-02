import { useState } from "react";
import whiteArrow from "../../assets/icons/white-arrow.svg";
import "../../styles/scss/components/_Collapse.scss";

function Collapse(props) {
  const {categoryName, categoryDetails} = props;
  const [activeButton, setActiveButton] = useState(false);

    return (
      <div className="accordion">
        <button 
        className={`accordion__title ${activeButton ? "active" : ""}`} 
        onClick={() => setActiveButton(!activeButton)}
        >
        <p>{categoryName}</p>
        <img className={`${activeButton ? "active" : ""}`}
        src={whiteArrow}
        >
        </img>
        </button>
        <div 
        className={`accordion__description ${activeButton ? "active" : ""}`}
        >
          <div className={`accordion__description-details ${activeButton ? "active" : ""}`}>{categoryDetails}</div>
        </div>
      </div>
    )
  }
  
  export default Collapse;
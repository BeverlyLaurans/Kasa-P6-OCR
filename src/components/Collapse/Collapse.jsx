import { useState, useEffect } from "react";
import arrowDown from "../../assets/icons/white-arrow-down.svg";
import arrowUp from "../../assets/icons/white-arrow-up.svg";
import "../../styles/scss/Collapse.scss";

function Collapse(props) {
  const {categoryName, categoryDetails} = props;
  const [activeButton, setActiveButton] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");

  useEffect(() => {
    if (activeButton) {
      setArrowDirection("up");
    } else {
      setArrowDirection("down");
    }
  }, [activeButton])

    return (
      <div className="accordion">
        <button className={`accordion__title ${activeButton ? "active" : ""}`} onClick={() => setActiveButton(!activeButton)}>
        <p>{categoryName}</p>
        <img src={arrowDirection === "down" ? arrowDown : arrowUp} alt={`white-arrow-${arrowDirection}`}></img>
        </button>
        {activeButton && (
        <div className="accordion__description">
          <div>{categoryDetails}</div>
        </div>
        )}
      </div>
    )
  }
  
  export default Collapse;
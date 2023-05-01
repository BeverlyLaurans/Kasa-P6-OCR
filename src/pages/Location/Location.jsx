import locationList from "../../components/LocationList/LocationList"
import { useParams } from 'react-router-dom'
import "../../styles/Location.css"

function Location() {
  const { locationId } = useParams();
  const findLocationId = locationList.find((location) => location.id === locationId);

    return (
      <div>
        {/* <Banner /> */}
        <div>
          <h1></h1>
          <p></p>
          {/* <Tags /> */}
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
        <div>
          <div>
            {/* <Collapse /> */}
          </div>
          <div>
            {/* <Collapse /> */}
          </div>
        </div>
      </div>
    )
  }
  
export default Location
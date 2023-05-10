import "../../styles/Tags.css"

function Tags(props) {
  const {tagName} = props

    return (
      <div className="tag">
        <p>{tagName}</p>
      </div>
    )
  }
  
export default Tags
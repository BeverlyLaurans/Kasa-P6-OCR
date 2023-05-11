import "../../styles/Tags.css";

function Tags(props) {
  const {tagName} = props;

    return (
      <div className="tag">
        <div className="tag-name">{tagName}</div>
      </div>
    )
  }
  
export default Tags;
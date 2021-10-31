import DeleteButton from "./DeleteButton";
import "../styles/Website.css";

function Website(props) {
  const { websiteName, websiteLink } = props.website;
  const { handleChange, handleDelete, index } = props;
  return (
    <div className="website">
      <input 
        placeholder="Website Name"
        type="text"
        value={websiteName}
        className="website__websiteName"
        data-index={index}
        data-parent="websites"
        name="websiteName"
        onChange={handleChange}
      />
      <input 
        placeholder="Website Link"
        type="text"
        value={websiteLink}
        className="website__websiteLink"
        data-index={index}
        data-parent="websites"
        name="websiteLink"
        onChange={handleChange}
      />
      <DeleteButton 
        handleDelete={handleDelete}
        index={index}
        parent="websites"
      />
    </div>
  );
}

export default Website;
import DeleteButton from "./DeleteButton";
import "../styles/Website.css";

function Website() {
  return (
    <div className="website">
      <input 
        placeholder="Website Name"
        type="text"
        className="website__websiteName"
      />
      <input 
        placeholder="Wesbite Link"
        type="text"
        className="website__websiteLink"
      />
      <DeleteButton />
    </div>
  );
}

export default Website;
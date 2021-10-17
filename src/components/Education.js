import DeleteButton from "./DeleteButton";
import "../styles/Education.css";

function Education() {
  return (
    <div className="education">
      <input 
        placeholder="University"
        type="text"
        className="education__university"
      />
      <input 
        placeholder="Location"
        type="text"
        className="education__location"
      />
      <input 
        placeholder="Degree"
        type="text"
        className="education__degree"
      />
      <input 
        placeholder="Subject"
        type="text"
        className="education__subject"
      />
      <input 
        placeholder="From"
        type="text"
        className="education__from"
      />
      <input 
        placeholder="To"
        type="text"
        className="education__to"
      />
      <DeleteButton />
    </div>
  );
}

export default Education;
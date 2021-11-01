import DeleteButton from "./DeleteButton";
import "../styles/Education.css";

function Education(props) {
  const {
    university,
    location,
    degree,
    subject,
    from,
    to,
  } = props.education;
  const { index, handleChange, handleDelete } = props;
  return (
    <div className="education">
      <input 
        placeholder="University"
        type="text"
        className="education__university"
        name="university"
        value={university}
        data-index={index}
        data-parent="educations"
        onChange={handleChange}
      />
      <input 
        placeholder="Location"
        type="text"
        className="education__location"
        name="location"
        value={location}
        data-index={index}
        data-parent="educations"
        onChange={handleChange}
      />
      <input 
        placeholder="Degree"
        type="text"
        className="education__degree"
        name="degree"
        value={degree}
        data-index={index}
        data-parent="educations"
        onChange={handleChange}
      />
      <input 
        placeholder="Subject"
        type="text"
        className="education__subject"
        name="subject"
        value={subject}
        data-index={index}
        data-parent="educations"
        onChange={handleChange}
      />
      <input 
        placeholder="From"
        type="text"
        className="education__from"
        name="from"
        value={from}
        data-index={index}
        data-parent="educations"
        onChange={handleChange}
      />
      <input 
        placeholder="To"
        type="text"
        className="education__to"
        name="to"
        value={to}
        data-index={index}
        data-parent="educations"
        onChange={handleChange}
      />
      <DeleteButton handleDelete={handleDelete} index={index} parent="educations"/>
    </div>
  );
}

export default Education;
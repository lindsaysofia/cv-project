import DeleteButton from "./DeleteButton";
import "../styles/Experience.css";

function Experience(props) {
  const {
    position,
    company,
    location,
    from,
    to,
    description
  } = props.experience;
  const {
    handleChange,
    handleDelete,
    index
  } = props;
  return (
    <div className="experience">
      <input 
        placeholder="Position"
        type="text"
        className="experience__position"
        name="position"
        value={position}
        data-parent="experiences"
        data-index={index}
        onChange={handleChange}
      />
      <input 
        placeholder="Company"
        type="text"
        className="experience__company"
        name="company"
        value={company}
        data-parent="experiences"
        data-index={index}
        onChange={handleChange}
      />
      <input 
        placeholder="Location"
        type="text"
        className="experience__location"
        name="location"
        value={location}
        data-parent="experiences"
        data-index={index}
        onChange={handleChange}
      />
      <input 
        placeholder="From"
        type="text"
        className="experience__from"
        name="from"
        value={from}
        data-parent="experiences"
        data-index={index}
        onChange={handleChange}
      />
      <input 
        placeholder="To"
        type="text"
        className="experience__to"
        name="to"
        value={to}
        data-parent="experiences"
        data-index={index}
        onChange={handleChange}
      />
      <textarea
        placeholder="Description"
        type="text"
        className="experience__description"
        name="description"
        value={description}
        data-parent="experiences"
        data-index={index}
        onChange={handleChange}
      ></textarea>
      <DeleteButton handleDelete={handleDelete} index={index} parent="experiences"/>
    </div>
  );
}

export default Experience;
import DeleteButton from "./DeleteButton";

function Experience() {
  return (
    <div className="experience">
      <input 
        placeholder="Position"
        type="text"
        className="experience__position"
      />
      <input 
        placeholder="Company"
        type="text"
        className="experience__company"
      />
      <input 
        placeholder="Location"
        type="text"
        className="experience__location"
      />
      <input 
        placeholder="From"
        type="text"
        className="experience__from"
      />
      <input 
        placeholder="To"
        type="text"
        className="experience__to"
      />
      <textarea
        placeholder="Description"
        type="text"
        className="experience__description"
      ></textarea>
      <DeleteButton />
    </div>
  );
}

export default Experience;
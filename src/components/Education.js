import DeleteButton from "./DeleteButton";

function Education() {
  return (
    <div>
      <input 
        placeholder="University"
        type="text"
      />
      <input 
        placeholder="Location"
        type="text"
      />
      <input 
        placeholder="Degree"
        type="text"
      />
      <input 
        placeholder="Subject"
        type="text"
      />
      <input 
        placeholder="From"
        type="text"
      />
      <input 
        placeholder="To"
        type="text"
      />
      <DeleteButton />
    </div>
  );
}

export default Education;
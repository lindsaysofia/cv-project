import DeleteButton from "./DeleteButton";

function Experience() {
  return (
    <div>
      <input 
        placeholder="Position"
        type="text"
      />
      <input 
        placeholder="Company"
        type="text"
      />
      <input 
        placeholder="Location"
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
      <textarea
        placeholder="Description"
        type="text"
      ></textarea>
      <DeleteButton />
    </div>
  );
}

export default Experience;
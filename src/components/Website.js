import DeleteButton from "./DeleteButton";

function Website() {
  return (
    <div>
      <input 
        placeholder="Title"
        type="text"
      />
      <input 
        placeholder="Link"
        type="text"
      />
      <DeleteButton />
    </div>
  );
}

export default Website;
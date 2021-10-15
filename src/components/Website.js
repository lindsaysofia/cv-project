import DeleteButton from "./DeleteButton";

function Website() {
  return (
    <div className="website">
      <input 
        placeholder="Title"
        type="text"
        className="website__title"
      />
      <input 
        placeholder="Link"
        type="text"
        className="link"
      />
      <DeleteButton />
    </div>
  );
}

export default Website;
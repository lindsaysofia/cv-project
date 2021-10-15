import Website from "./Website";
import AddButton from "./AddButton";

function WebsiteInput() {
  return (
    <div className="websiteInput">
       <h3 className="websiteInput__header">Add a Website</h3>
       <Website />
      <AddButton />
    </div>
  );
}

export default WebsiteInput;
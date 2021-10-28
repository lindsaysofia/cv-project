import Website from "./Website";
import AddButton from "./AddButton";

function WebsiteInput(props) {
  return (
    <div className="websiteInput">
       <h3 className="websiteInput__header">Add Your Websites</h3>
       {props.websites.map((website, index) => 
        <Website 
          key={index} 
          index={index}
          website={website}
          handleChange={props.handleChange}
        />)}
      <AddButton />
    </div>
  );
}

export default WebsiteInput;
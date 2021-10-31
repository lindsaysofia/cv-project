import Website from "./Website";
import AddButton from "./AddButton";

function WebsiteInput(props) {
  const { handleAdd, handleChange, handleDelete } = props;
  return (
    <div className="websiteInput">
       <h3 className="websiteInput__header">Add Your Websites</h3>
       {props.websites.map((website, index) => 
        <Website 
          key={index} 
          index={index}
          website={website}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />)}
      <AddButton 
        parent="websites" 
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default WebsiteInput;
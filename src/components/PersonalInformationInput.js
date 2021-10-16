import WebsiteInput from "./WebsiteInput";
import "../styles/PersonalInformationInput.css";

function PersonalInformationInput() {
  return (
    <div className="personalInformationInput">
      <h2 className="personalInformationInput__header">Personal Information</h2>
      <input 
        placeholder="First Name"
        type="text"
        className="personalInformationInput__firstName"
      />
      <input 
        placeholder="Last Name"
        type="text"
        className="personalInformationInput__lastName"
      />
      <input 
        placeholder="Title"
        type="text"
        className="personalInformationInput__title"
      />
      <textarea
        placeholder="Description"
        type="text"
        className="personalInformationInput__description"
      ></textarea>
      <div className="personalInformationInput__photo">
        <label for="photo">Choose a Photo to Upload</label>
        <input 
          id="photo"
          name="photo"
          placeholder="Title"
          type="file"
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <input 
        placeholder="Location"
        type="text"
        className="personalInformationInput__location"
      />
      <input 
        placeholder="Phone Number"
        type="text"
        className="personalInformationInput__phoneNumber"
      />
      <input 
        placeholder="Email"
        type="text"
        className="personalInformationInput__email"
      />
      <WebsiteInput />
    </div>
  );
}

export default PersonalInformationInput;
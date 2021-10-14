import WebsiteInput from "./WebsiteInput";

function PersonalInformationInput() {
  return (
    <div>
      <h2>Personal Information</h2>
      <input 
        placeholder="First Name"
        type="text"
      />
      <input 
        placeholder="Last Name"
        type="text"
      />
      <input 
        placeholder="Title"
        type="text"
      />
      <textarea
        placeholder="Description"
        type="text"
      ></textarea>
      <div>
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
      />
      <input 
        placeholder="Phone Number"
        type="text"
      />
      <input 
        placeholder="Email"
        type="text"
      />
      <WebsiteInput />
    </div>
  );
}

export default PersonalInformationInput;
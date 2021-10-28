import WebsiteInput from "./WebsiteInput";
import "../styles/PersonalInformationInput.css";

function PersonalInformationInput(props) {
  const {
    firstName,
    lastName,
    title,
    description,
    photo,
    location,
    phone,
    email,
    websites,
   } = props.data.personalInformation;
   const { handleChange } = props;
  return (
    <div className="personalInformationInput">
      <h2 className="personalInformationInput__header">Personal Information</h2>
      <input 
        placeholder="First Name"
        type="text"
        value={firstName}
        className="personalInformationInput__firstName"
        data-parent="personalInformation"
        name="firstName"
        onChange={handleChange}
      />
      <input 
        placeholder="Last Name"
        type="text"
        value={lastName}
        className="personalInformationInput__lastName"
        data-parent="personalInformation"
        name="lastName"
        onChange={handleChange}
      />
      <input 
        placeholder="Title"
        type="text"
        value={title}
        className="personalInformationInput__title"
        data-parent="personalInformation"
        name="title"
        onChange={handleChange}
      />
      <textarea
        placeholder="Description"
        type="text"
        value={description}
        className="personalInformationInput__description"
        data-parent="personalInformation"
        name="description"
        onChange={handleChange}
      ></textarea>
      <div className="personalInformationInput__photo">
        <label htmlFor="photo">Profile Photo</label>
        <input 
          id="photo"
          name="photo"
          value={photo}
          type="file"
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <input 
        placeholder="Location"
        type="text"
        value={location}
        className="personalInformationInput__location"
        data-parent="personalInformation"
        name="location"
        onChange={handleChange}
      />
      <input 
        placeholder="Phone Number"
        type="phone"
        value={phone}
        className="personalInformationInput__phoneNumber"
        data-parent="personalInformation"
        name="phone"
        onChange={handleChange}
      />
      <input 
        placeholder="Email"
        type="email"
        value={email}
        className="personalInformationInput__email"
        data-parent="personalInformation"
        name="email"
        onChange={handleChange}
      />
      <WebsiteInput 
        websites={websites} 
        handleChange={handleChange}
      />
    </div>
  );
}

export default PersonalInformationInput;
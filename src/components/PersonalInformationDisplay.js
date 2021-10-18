import WebsiteDisplay from "./WebsiteDisplay";

function PersonalInformationDisplay(props) {
  const {
    firstName,
    lastName,
    title,
    description,
    photo,
    location,
    phone,
    email,
   } = props.data.personalInformation;
  return (
    <div className="personalInformationDisplay">
      <h2>{firstName}{lastName ? ` ${lastName}` : ''}</h2>
      <p>{title}</p>
      <p>{description}</p>
      <img src={photo} alt=""/>
      <div>
        <p>Location</p>
        <p>{location}</p>
      </div>
      <div>
        <p>Phone</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>Email</p>
        <p>{email}</p>
      </div>
      <WebsiteDisplay data={props.data}/>
    </div>
  );
}

export default PersonalInformationDisplay;
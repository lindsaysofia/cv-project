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
      <h2 className="personalInformationDisplay__name">{firstName}{lastName ? ` ${lastName}` : ''}</h2>
      <p className="personalInformationDisplay__title">{title}</p>
      <p className="personalInformationDisplay__description">{description}</p>
      <img 
        className="personalInformationDisplay__photo"
        src={photo} 
        alt=""
      />
      <div className="personalInformationDisplay__location">
        <h3 className="personalInformationDisplay__locationHeader">Location</h3>
        <p className="personalInformationDisplay__locationDetail">{location}</p>
      </div>
      <div className="personalInformationDisplay__phone">
        <h3 className="personalInformationDisplay__phoneHeader">Phone</h3>
        <p className="personalInformationDisplay__phoneDetail">{phone}</p>
      </div>
      <div className="personalInformationDisplay__email">
        <h3 className="personalInformationDisplay__emailHeader">Email</h3>
        <p className="personalInformationDisplay__emailDetail">{email}</p>
      </div>
      <WebsiteDisplay data={props.data}/>
    </div>
  );
}

export default PersonalInformationDisplay;
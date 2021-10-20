import "../styles/PersonalInformationDisplayHeader.css";

function PersonalInformationDisplayHeader(props) {
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
    <div className="personalInformationDisplayHeader">
      <h2 className="personalInformationDisplayHeader__name">{firstName}{lastName ? ` ${lastName}` : ''}</h2>
      <p className="personalInformationDisplayHeader__title">{title}</p>
      <p className="personalInformationDisplayHeader__description">{description}</p>
      <img 
        className="personalInformationDisplayHeader__photo"
        src={photo} 
        alt=""
      />
    </div>
  );
}

export default PersonalInformationDisplayHeader;
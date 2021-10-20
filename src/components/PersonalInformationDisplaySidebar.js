import WebsiteDisplay from "./WebsiteDisplay";
import "../styles/PersonalInformationDisplaySidebar.css";

function PersonalInformationDisplaySidebar(props) {
  const {
    location,
    phone,
    email,
   } = props.data.personalInformation;
  return (
    <div className="personalInformationDisplaySidebar">
      <div className="personalInformationDisplaySidebar__location">
        <h3 className="personalInformationDisplaySidebar__locationHeader">Location</h3>
        <p className="personalInformationDisplaySidebar__locationDetail">{location}</p>
      </div>
      <div className="personalInformationDisplaySidebar__phone">
        <h3 className="personalInformationDisplaySidebar__phoneHeader">Phone</h3>
        <p className="personalInformationDisplaySidebar__phoneDetail">{phone}</p>
      </div>
      <div className="personalInformationDisplaySidebar__email">
        <h3 className="personalInformationDisplaySidebar__emailHeader">Email</h3>
        <p className="personalInformationDisplaySidebar__emailDetail">{email}</p>
      </div>
      <WebsiteDisplay data={props.data}/>
    </div>
  );
}

export default PersonalInformationDisplaySidebar;
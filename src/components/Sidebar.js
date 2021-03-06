import WebsiteDisplay from "./WebsiteDisplay";
import "../styles/Sidebar.css";

function Sidebar(props) {
  const {
    location,
    phone,
    email,
   } = props.data.personalInformation;

   const { skills } = props.data;

  return (
    <div className="sidebar">
      <div className="sidebar__location">
        <p className="sidebar__locationDetail">{location ? <i className="fas fa-map-marker-alt"></i> : ''} {location}</p>
      </div>
      <div className="sidebar__phone">
        <p className="sidebar__phoneDetail">{phone ? <i className="fas fa-phone-alt"></i> : ''} {phone}</p>
      </div>
      <div className="sidebar__email">
        <p className="sidebar__emailDetail">{email ? <i className="far fa-envelope"></i> : ''} {email}</p>
      </div>
      <WebsiteDisplay data={props.data}/>
      <div className="sidebar__skill">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => <p key={index} className="sidebar__skillDetail">{skill ? <i className="far fa-lightbulb"></i> : ''} {skill}</p>)}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
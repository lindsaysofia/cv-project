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
        <h3 className="sidebar__locationHeader">Location</h3>
        <p className="sidebar__locationDetail">{location}</p>
      </div>
      <div className="sidebar__phone">
        <h3 className="sidebar__phoneHeader">Phone</h3>
        <p className="sidebar__phoneDetail">{phone}</p>
      </div>
      <div className="sidebar__email">
        <h3 className="sidebar__emailHeader">Email</h3>
        <p className="sidebar__emailDetail">{email}</p>
      </div>
      <WebsiteDisplay data={props.data}/>
      <h3 className="sidebar__skill">Skills</h3>
      {skills.map((skill) => {
        return (
          <p className="sidebar__skillDetail">{skill}</p>
        );
      })}
    </div>
  );
}

export default Sidebar;
import PersonalInformationDisplayHeader from "./PersonalInformationDisplayHeader";
import PersonalInformationDisplaySidebar from "./PersonalInformationDisplaySidebar";
import SkillDisplay from "./SkillDisplay";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import "../styles/CVDisplay.css";

function CVDisplay(props) {
  return (
    <div className="cvDisplay">
      <PersonalInformationDisplayHeader data={props.data}/>
      <PersonalInformationDisplaySidebar data={props.data}/>
      <SkillDisplay data={props.data}/>
      <EducationDisplay data={props.data}/>
      <ExperienceDisplay data={props.data}/>
    </div>
  );
}

export default CVDisplay;
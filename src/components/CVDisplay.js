import PersonalInformationDisplay from "./PersonalInformationDisplay";
import SkillDisplay from "./SkillDisplay";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import "../styles/CVDisplay.css";

function CVDisplay(props) {
  return (
    <div className="cvDisplay">
      <PersonalInformationDisplay data={props.data}/>
      <SkillDisplay data={props.data}/>
      <EducationDisplay data={props.data}/>
      <ExperienceDisplay data={props.data}/>
    </div>
  );
}

export default CVDisplay;
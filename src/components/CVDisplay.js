import PersonalInformationDisplay from "./PersonalInformationDisplay";
import SkillDisplay from "./SkillDisplay";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import "../styles/CVDisplay.css";

function CVDisplay() {
  return (
    <div className="cvDisplay">
      <PersonalInformationDisplay />
      <SkillDisplay />
      <EducationDisplay />
      <ExperienceDisplay />
    </div>
  );
}

export default CVDisplay;
import PersonalInformationDisplay from "./PersonalInformationDisplay";
import SkillDisplay from "./SkillDisplay";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";

function CVDisplay() {
  return (
    <div>
      <PersonalInformationDisplay />
      <SkillDisplay />
      <EducationDisplay />
      <ExperienceDisplay />
    </div>
  );
}

export default CVDisplay;
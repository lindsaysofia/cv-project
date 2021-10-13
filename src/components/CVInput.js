import PersonalInformationInput from "./PersonalInformationInput";
import SkillInput from "./SkillInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";

function CVInput() {
  return (
    <div>
      <PersonalInformationInput />
      <SkillInput />
      <EducationInput />
      <ExperienceInput />
    </div>
  );
}

export default CVInput;
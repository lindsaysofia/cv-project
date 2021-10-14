import PersonalInformationInput from "./PersonalInformationInput";
import SkillInput from "./SkillInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import GenerateButton from "./GenerateButton";
import LoadExampleButton from "./LoadExampleButton";
import ResetButton from "./ResetButton";

function CVInput() {
  return (
    <div>
      <PersonalInformationInput />
      <SkillInput />
      <EducationInput />
      <ExperienceInput />
      <GenerateButton />
      <LoadExampleButton />
      <ResetButton />
    </div>
  );
}

export default CVInput;
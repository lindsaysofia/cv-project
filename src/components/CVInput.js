import PersonalInformationInput from "./PersonalInformationInput";
import SkillInput from "./SkillInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import GenerateButton from "./GenerateButton";
import LoadExampleButton from "./LoadExampleButton";
import ResetButton from "./ResetButton";
import "../styles/CVInput.css";

function CVInput() {
  return (
    <div className="cvInput">
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
import PersonalInformationInput from "./PersonalInformationInput";
import SkillInput from "./SkillInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import GenerateButton from "./GenerateButton";
import LoadExampleButton from "./LoadExampleButton";
import ResetButton from "./ResetButton";
import "../styles/CVInput.css";

function CVInput(props) {
  return (
    <div className="cvInput">
      <PersonalInformationInput 
        data={props.data}
        handleChange={props.handleChange}
        handleAdd={props.handleAdd}
        handleDelete={props.handleDelete}
      />
      <SkillInput data={props.data}/>
      <EducationInput data={props.data}/>
      <ExperienceInput data={props.data}/>
      <GenerateButton />
      <LoadExampleButton />
      <ResetButton />
    </div>
  );
}

export default CVInput;
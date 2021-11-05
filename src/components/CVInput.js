import PersonalInformationInput from "./PersonalInformationInput";
import SkillInput from "./SkillInput";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import GenerateButton from "./GenerateButton";
import LoadExampleButton from "./LoadExampleButton";
import ResetButton from "./ResetButton";
import "../styles/CVInput.css";

function CVInput(props) {
  const {
    data,
    handleChange,
    handleAdd,
    handleDelete,
    handleExample,
    handleReset,
    generatePDF,
    uploadPhoto
  } = props;
  return (
    <div className="cvInput">
      <PersonalInformationInput 
        data={data}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        uploadPhoto={uploadPhoto}
      />
      <SkillInput 
        data={data}
        handleChange={handleChange}  
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <EducationInput 
        data={data}
        handleChange={handleChange}  
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <ExperienceInput 
        data={data}
        handleChange={handleChange}  
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <GenerateButton 
        generatePDF={generatePDF}
      />
      <LoadExampleButton 
        handleExample={handleExample}
      />
      <ResetButton 
        handleReset={handleReset}
      />
    </div>
  );
}

export default CVInput;
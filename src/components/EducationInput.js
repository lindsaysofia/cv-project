import Education from "./Education";
import AddButton from "./AddButton";
import "../styles/EducationInput.css";

function EducationInput(props) {
  const { educations } = props.data;
  const {
    handleChange, 
    handleAdd,
    handleDelete,
  } = props;
  return (
    <div className="educationInput">
      <h2 className="educationInput__header">Education</h2>
      {educations.map((education, index)=> <Education key={index} education={education} index={index} handleChange={handleChange} handleDelete={handleDelete}/>)}
      <AddButton handleAdd={handleAdd}parent="educations"/>
    </div>
  );
}

export default EducationInput;
import Education from "./Education";
import AddButton from "./AddButton";

function EducationInput() {
  return (
    <div className="educationInput">
      <h2 className="educationInput__header">Education</h2>
      <Education />
      <AddButton />
    </div>
  );
}

export default EducationInput;
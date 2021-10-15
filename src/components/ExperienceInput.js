import Experience from "./Experience";
import AddButton from "./AddButton";

function ExperienceInput() {
  return (
    <div className="experienceInput">
      <h2 className="experienceInput__header">Experience</h2>
      <Experience />
      <AddButton />
    </div>
  );
}

export default ExperienceInput;
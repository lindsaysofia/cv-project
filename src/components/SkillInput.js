import Skill from "./Skill";
import AddButton from "./AddButton";

function SkillInput() {
  return (
    <div className="skillInput">
      <h2 className="skillInput__header">Skills</h2>
      <Skill />
      <AddButton />
    </div>
  );
}

export default SkillInput;
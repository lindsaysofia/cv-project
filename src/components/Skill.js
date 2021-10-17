import DeleteButton from "./DeleteButton";
import "../styles/Skill.css";

function Skill() {
  return (
    <div className="skill">
      <input 
        placeholder="Add a Skill"
        type="text"
        className="skill_addSkill"
      />
      <DeleteButton />
    </div>
  );
}

export default Skill;
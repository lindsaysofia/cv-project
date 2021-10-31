import DeleteButton from "./DeleteButton";
import "../styles/Skill.css";

function Skill(props) {
  const {handleChange, skill, index, parent} = props;
  return (
    <div className="skill">
      <input 
        placeholder="Add a Skill"
        type="text"
        value={skill}
        className="skill_addSkill"
        data-parent={parent}
        data-index={index}
        onChange={handleChange}
      />
      <DeleteButton />
    </div>
  );
}

export default Skill;
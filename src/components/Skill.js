import DeleteButton from "./DeleteButton";
import "../styles/Skill.css";

function Skill(props) {
  const {handleChange, handleDelete, skill, index, parent} = props;
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
      <DeleteButton 
        handleDelete={handleDelete}
        index={index}
        parent={parent}
      />
    </div>
  );
}

export default Skill;
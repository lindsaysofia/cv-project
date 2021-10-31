import Skill from "./Skill";
import AddButton from "./AddButton";
import "../styles/SkillInput.css";

function SkillInput(props) {
  const { handleChange, handleAdd, handleDelete } = props;
  const { skills } = props.data;
  return (
    <div className="skillInput">
      <h2 className="skillInput__header">Skills</h2>
      {skills.map((skill, index) => <Skill key={index} handleChange={handleChange} handleDelete={handleDelete} skill={skill} index={index} parent="skills"/>)}
      <AddButton 
        handleAdd={handleAdd}
        parent="skills"
        />
    </div>
  );
}

export default SkillInput;
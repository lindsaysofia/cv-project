import Experience from "./Experience";
import AddButton from "./AddButton";
import "../styles/ExperienceInput.css";

function ExperienceInput(props) {
  const {
    handleChange,  
    handleAdd,
    handleDelete
  } = props;
  const { experiences } = props.data;
  return (
    <div className="experienceInput">
      <h2 className="experienceInput__header">Experience</h2>
      {experiences.map((experience, index) => <Experience key={index} handleChange={handleChange} handleDelete={handleDelete} experience={experience} index={index}/>)}
      <AddButton 
        handleAdd={handleAdd} 
        parent="experiences"
      />
    </div>
  );
}

export default ExperienceInput;
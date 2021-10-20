import "../styles/SkillDisplay.css";
function SkillDisplay(props) {
  const { skills } = props.data;
  return (
    <div className="skillDisplay">
      <h3 className="skillDisplay__header">Skills</h3>
      {skills.map((skill) => {
        return (
          <p className="skillDisplay__skill">{skill}</p>
        );
      })}
    </div>
  );
}

export default SkillDisplay;
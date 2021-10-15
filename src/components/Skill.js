import DeleteButton from "./DeleteButton";

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
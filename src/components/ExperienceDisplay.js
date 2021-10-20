import "../styles/ExperienceDisplay.css";

function ExperienceDisplay(props) {
  const { experiences } = props.data;
  return (
    <div className="experienceDisplay">
      <h2>Experience</h2>
      {experiences.map((experience) => {
        const { 
          position,
          company,
          location,
          from,
          to,
          description,
         } = experience;
        return (
          <div className="experience">
            <p className="experience__position">{position}</p>
            <p className="experience__company">{company}</p>
            <p className="experience__location">{location}</p>
            <p className="experience__from">{from}</p>
            <p className="experience__to">{to}</p>
            <p className="experience__subject">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceDisplay;
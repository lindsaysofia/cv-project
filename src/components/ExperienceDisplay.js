import "../styles/ExperienceDisplay.css";

function ExperienceDisplay(props) {
  const { experiences } = props.data;
  return (
    <div className="experienceDisplay">
      <h2>Experience</h2>
      {experiences.map((experience, index) => {
        const { 
          position,
          company,
          location,
          from,
          to,
          description,
         } = experience;
        return (
          <div key={index} className="experienceDisplay--item">
            <p className="experienceDisplay__positionCompany">{position}, {company}</p>
            <p className="experienceDisplay__location">{location}</p>
            <p className="experienceDisplay__fromTo">{from}-{to}</p>
            <p className="experienceDisplay__subject">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceDisplay;
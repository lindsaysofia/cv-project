import "../styles/EducationDisplay.css";

function EducationDisplay(props) {
  const { educations } = props.data;
  return (
    <div className="educationDisplay">
      <h2>Education</h2>
      {educations.map((education) => {
        const { 
          university,
          location,
          degree,
          subject,
          from,
          to,
         } = education;
        return (
          <div className="education">
            <p className="education__university">{university}</p>
            <p className="education__location">{location}</p>
            <p className="education__degree">{degree}</p>
            <p className="education__subject">{subject}</p>
            <p className="education__from">{from}</p>
            <p className="education__to">{to}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationDisplay;
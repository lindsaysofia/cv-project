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
          <div className="educationDisplay--item">
            <p className="educationDisplay__university">{university}</p>
            <p className="educationDisplay__location">{location}</p>
            <p className="educationDisplay__degreeSubject">{degree} in {subject}</p>
            <p className="educationDisplay__fromTo">{from}-{to}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationDisplay;
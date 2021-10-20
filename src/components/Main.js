import EductionDisplay from './EducationDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import "../styles/Main.css";

function Main(props) {
  return (
    <div className="main">
      <EductionDisplay data={props.data}/>
      <ExperienceDisplay data={props.data}/>
    </div>
  );
}

export default Main;
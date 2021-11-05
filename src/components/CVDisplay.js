import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "../styles/CVDisplay.css";

function CVDisplay(props) {
  return (
    <div className="cvDisplay">
      <div id="pdf">
        <Header data={props.data}/>
        <Sidebar data={props.data}/>
        <Main data={props.data}/>
      </div>
    </div>
  );
}

export default CVDisplay;
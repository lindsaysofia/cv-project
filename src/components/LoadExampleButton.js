import "../styles/LoadExampleButton.css";

function LoadExampleButton(props) {
  const { handleExample } = props;
  return (
    <button 
      className="loadExampleButton"
      onClick={handleExample}
    >
      Load Example
    </button>
  );
}

export default LoadExampleButton;
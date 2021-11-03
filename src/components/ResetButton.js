import "../styles/ResetButton.css";

function ResetButton(props) {
  const { handleReset } = props;
  return (
    <button className="resetButton"
      onClick={handleReset}
    >
      Reset
    </button>
  );
}

export default ResetButton;
import "../styles/GenerateButton.css";

function GenerateButton(props) {
  const { generatePDF } = props;
  return (
    <button className="generateButton"
      onClick={generatePDF}
    >
      Generate PDF
    </button>
  );
}

export default GenerateButton;
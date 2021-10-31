function AddButton(props) {
  const { handleAdd, parent } = props;
  return (
    <button 
      className="addButton"
      data-parent={parent}
      onClick={handleAdd}
    >
      Add
    </button>
  );
}

export default AddButton;
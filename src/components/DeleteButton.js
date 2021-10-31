function DeleteButton(props) {
  const { handleDelete, index, parent } = props;
  return (
    <button 
      className="deleteButton"
      data-index={index}
      data-parent={parent}
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
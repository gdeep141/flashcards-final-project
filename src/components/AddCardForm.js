const AddCardForm = ({
  handleSubmit,
  front,
  handleFrontChange,
  back,
  handleBackChange,
}) => {
  const btnStyle = {
    backgroundColor: "lightblue",
    border: "1px solid black",
    boxShadow: "2px 2px black",
  };
  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };
  const formStyle = {
    backgroundColor: "lightyellow",
    boxShadow: "5px 5px black",
    border: "1px solid black",
    padding: "12px",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      Front:
      <input
        style={inputStyle}
        type="text"
        value={front}
        onChange={handleFrontChange}
      />
      Back:
      <input
        style={inputStyle}
        type="text"
        value={back}
        onChange={handleBackChange}
      />
      <button style={btnStyle} type="submit">
        Create
      </button>
    </form>
  );
};

export default AddCardForm;

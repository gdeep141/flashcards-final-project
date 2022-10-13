const Form = ({
  handleSubmit,
  front,
  handleFrontChange,
  back,
  handleBackChange,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      Front: <input value={front} onChange={handleFrontChange} />
    </div>
    <div>
      Back: <input value={back} onChange={handleBackChange} />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);

export default Form;

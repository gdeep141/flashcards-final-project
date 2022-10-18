const MyButton = ({ text, background, color, handleClick }) => {
  const style = {
    backgroundColor: background,
    boxShadow: "2px 2px black",
    border: "1px solid black",
    color: color,
  };
  return (
    <button style={style} onClick={handleClick}>
      {text}
    </button>
  );
};

export default MyButton;

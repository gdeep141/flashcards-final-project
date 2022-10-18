import Side from "./Side";
import MyButton from "./MyButton";

const Card = ({ card, handleDelete, handleEdit, handleFlip }) => {
  const style = {
    backgroundColor: "lightyellow",
    boxShadow: "10px 5px",
    border: "1px solid black",
    padding: "5px",
  };

  if (!card) return; // Used for short rows at end of grid

  return (
    // <div style={style} className="card text-center">
    <div style={style}>
      <div className="card-body">
        <Side card={card} />
        <MyButton
          text="Flip"
          background="green"
          color="white"
          handleClick={handleFlip}
        />{" "}
        <MyButton
          text="Edit"
          background="orange"
          color="black"
          handleClick={handleEdit}
        />{" "}
        <MyButton
          text="Delete"
          background="red"
          color="white"
          handleClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Card;

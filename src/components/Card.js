import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Side = ({ card }) => {
  if (card.side === "front") {
    return <p>{card.front}</p>;
  }
  return <p>{card.back}</p>;
};

const Card = ({ card, handleDelete, handleEdit, handleFlip }) => {
  // const style = {
  //   // border: "1px solid black",
  //   // borderRadius: "5px",
  //   margin: "5px",
  //   padding: "5px",
  //   width: "250px",
  //   boxShadow:
  //     "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  //   textAlign: "center",
  // };

  if (!card) return; // Used for short rows at end of grid

  return (
    <div className="card">
      <div className="card-body">
        <Side card={card} />
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>{" "}
        <Button variant="warning" size="sm" onClick={handleEdit}>
          Edit
        </Button>{" "}
        <Button variant="success" size="sm" onClick={handleFlip}>
          Flip
        </Button>
      </div>
    </div>
  );
};

export default Card;

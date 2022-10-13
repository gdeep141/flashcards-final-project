import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Side from "./Side";

const Card = ({ card, handleDelete, handleEdit, handleFlip }) => {
  const style = {
    // boxShadow:
    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign: "center",
  };

  if (!card) return; // Used for short rows at end of grid

  return (
    <div className="card text-center">
      <div className="card-body">
        <Side card={card} />
        <Button variant="success" size="sm" onClick={handleFlip}>
          Flip
        </Button>{" "}
        <Button variant="warning" size="sm" onClick={handleEdit}>
          Edit
        </Button>{" "}
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card;

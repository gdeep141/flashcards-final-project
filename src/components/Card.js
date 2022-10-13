const Side = ({ card }) => {
  if (card.side === "front") {
    return <p>{card.front}</p>;
  }
  return <p>{card.back}</p>;
};

const Card = ({ card, handleDelete, handleEdit, handleFlip }) => {
  const style = {
    border: "1px solid black",
    borderRadius: "5px",
    margin: "5px",
    padding: "5px",
  };

  return (
    <div style={style}>
      <Side card={card} />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleFlip}>Flip</button>
    </div>
  );
};

export default Card;

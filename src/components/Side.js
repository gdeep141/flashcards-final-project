const Side = ({ card }) => {
  const style = {
    height: "150px",
  };
  if (card.side === "front") {
    return (
      <p style={style} className="overflow-auto">
        {card.front}
      </p>
    );
  }
  return (
    <p style={style} className="overflow-auto">
      {card.back}
    </p>
  );
};

export default Side;

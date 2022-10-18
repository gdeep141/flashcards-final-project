import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";

const CardGrid = ({ cards, deleteCard, editCard, flipCard }) => {
  if (cards.length == 0) {
    return <h3>No cards. Use the form above to start adding cards</h3>;
  }

  const splitIntoRows = (rowSize) => {
    let result = [];
    for (let i = 0; i < cards.length; i += rowSize) {
      let row = cards.slice(i, i + rowSize);
      result.push([row]);
    }
    return result;
  };

  const splitCards = splitIntoRows(3);

  return (
    <Container>
      {splitCards.map((row) => (
        <Row className="mt-4">
          {row.map((col) =>
            col.map((card) => (
              <Col className="col-4">
                <Card
                  key={card.id}
                  card={card}
                  handleDelete={() => deleteCard(card.id)}
                  handleEdit={() => editCard(card)}
                  handleFlip={() => flipCard(card)}
                />
              </Col>
            ))
          )}
        </Row>
      ))}
    </Container>
  );
};

export default CardGrid;

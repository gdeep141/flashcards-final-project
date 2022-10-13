import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardService from "./services/card";
import Card from "./Card";

const CardGrid = ({ cards, deleteCard, editCard, flipCard }) => {
  if (cards.length == 0) {
    return <h3>No cards. Use the form above to start adding cards</h3>;
  }
  /*
  Split cards into lists of 3, where the last list is padded if short.
  e.g. [1,2,3,4,5,6,7] becomes [[1,2,3], [4,5,6], [7, undefined, undefined]]
  */
  let splitCards = [];
  const rowSize = 3;
  for (let i = 0; i < cards.length; i += rowSize) {
    let row = cards.slice(i, i + rowSize);
    splitCards.push([row]);
  }

  return (
    <Container>
      {splitCards.map((row) => (
        <Row>
          {row.map((col) =>
            col.map((card) => (
              <Col className="col-4">
                <Card
                  id={card.id}
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

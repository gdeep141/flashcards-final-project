import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardService from "./services/card";
import Card from "./Card";

const CardGrid = () => {
  const [cards, setCards] = useState([]);

  const deleteCard = (card) => {
    if (window.confirm(`Are you sure you wish to delete this card?`)) {
      cardService.remove(card.id).then(() => {
        setCards(cards.filter((c) => c.id !== card.id));
      });
    }
  };

  const editCard = (card) => {
    const newValue = prompt(`Please enter a new ${card.side}`);
    if (!newValue) {
      return;
    }
    const newCard =
      card.side === "front"
        ? { ...card, front: newValue }
        : { ...card, back: newValue };
    cardService.update(card.id, newCard).then((response) => {
      setCards(cards.map((c) => (c.id === card.id ? response.data : c)));
    });
  };

  const flipCard = (card) => {
    const newSide = card.side === "front" ? "back" : "front";
    const flippedCard = { ...card, side: newSide };
    cardService.update(card.id, flippedCard).then((response) => {
      setCards(cards.map((c) => (c.id === card.id ? flippedCard : c)));
    });
  };

  useEffect(() => {
    cardService.getAll().then((response) => {
      setCards(response.data);
    });
  }, []);

  /*
  Split cards into lists of 3, where the last list is padded if short.
  e.g. [1,2,3,4,5,6,7] becomes [[1,2,3], [4,5,6], [7, undefined, undefined]]
  */
  let splitCards = [];
  const rowSize = 3;
  for (let i = 0; i < cards.length; i += rowSize) {
    let row = cards.slice(i, i + rowSize);
    // if (row.length < rowSize) {
    //   row = row.concat(Array(rowSize - row.length).fill());
    // }
    splitCards.push([row]);
  }

  return (
    <Container>
      {splitCards.map((row) => (
        <Row>
          {row.map((col) =>
            col.map((card) => (
              <Col className="col-3">
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

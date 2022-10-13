import { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import cardService from "./components/services/card.js";

const App = () => {
  const [cards, setCards] = useState([]);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  useEffect(() => {
    cardService.getAll().then((response) => {
      setCards(response.data);
    });
  }, []);

  const clearForm = () => {
    setFront("");
    setBack("");
  };

  const addCard = (event) => {
    event.preventDefault();
    const newCard = { front, back, side: "front" };
    cardService.add(newCard).then((response) => {
      setCards(cards.concat(response.data));
      clearForm();
    });
  };

  const deleteCard = (id) => {
    if (window.confirm(`Are you sure you wish to delete this card?`)) {
      cardService.remove(id).then(() => {
        setCards(cards.filter((c) => c.id !== id));
      });
    }
  };

  const getFrontOrBack = () => {
    let result;
    while (true) {
      result = prompt("Enter 'front' or 'back'")?.toLowerCase();
      if (result === "front" || result === "back" || !result) {
        return result;
      }
    }
  };

  const editCard = (card) => {
    const side = getFrontOrBack();
    if (!side) {
      return;
    }
    const newValue = prompt(`Please enter a new ${side}`);
    if (!newValue) {
      return;
    }
    const newCard =
      side === "front"
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

  const handleFrontChange = (event) => {
    event.preventDefault();
    setFront(event.target.value);
  };

  const handleBackChange = (event) => {
    event.preventDefault();
    setBack(event.target.value);
  };

  return (
    <div>
      <h1>Flashcards</h1>
      <Form
        handleSubmit={addCard}
        front={front}
        handleFrontChange={handleFrontChange}
        back={back}
        handleBackChange={handleBackChange}
      />
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleDelete={() => deleteCard(card.id)}
          handleEdit={() => editCard(card)}
          handleFlip={() => flipCard(card)}
        />
      ))}
    </div>
  );
};

export default App;

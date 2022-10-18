import { useState, useEffect } from "react";
import AddCardForm from "./components/AddCardForm";
import CardGrid from "./components/CardGrid";
import cardService from "./components/services/card.js";
import Button from "react-bootstrap/Button";
import MyButton from "./components/MyButton";

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

  const flipAll = (side) => {
    setCards(cards.map((card) => ({ ...card, side })));
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

  const handleFrontChange = (event) => {
    event.preventDefault();
    setFront(event.target.value);
  };

  const handleBackChange = (event) => {
    event.preventDefault();
    setBack(event.target.value);
  };

  return (
    <div className="container">
      <br />
      <h1>Flashcards</h1>
      <br />
      <AddCardForm
        handleSubmit={addCard}
        front={front}
        handleFrontChange={handleFrontChange}
        back={back}
        handleBackChange={handleBackChange}
      />
      <br />
      <h2>Cards</h2>
      <MyButton
        text="Flip all to front"
        color="white"
        background="green"
        handleClick={() => flipAll("front")}
      />{" "}
      <MyButton
        text="Flip all to back"
        color="white"
        background="red"
        handleClick={() => flipAll("back")}
      />
      <CardGrid
        cards={cards}
        deleteCard={deleteCard}
        editCard={editCard}
        flipCard={flipCard}
      />
    </div>
  );
};

export default App;

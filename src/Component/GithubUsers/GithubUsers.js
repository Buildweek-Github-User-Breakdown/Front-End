import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form"

const GithubUsers = (props) => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <h1>Hello</h1>
      <GithubUserList cards={cards} />
      <Form onSubmit={addNewCard}/>
    </div>
  );
};

export default GithubUsers;

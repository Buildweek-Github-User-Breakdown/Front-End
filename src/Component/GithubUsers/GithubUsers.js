import React, { useState } from "react";
import GithubUserList from "./GithubUserList"
import Form from "./Form"

const GithubUsers = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
    console.log(cards)
  }

  return (
    <div>
      <h1>GitHub User DashbOard</h1>
      <Form onSubmit={addNewCard}/>
      <GithubUserList cards={cards}/>
    </div>
  );
};

export default GithubUsers;

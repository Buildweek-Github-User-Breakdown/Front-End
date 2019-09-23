import React, { useState } from "react";
// import GithubUserList from "./GithubUserList";
import Form from "./Form"

const GithubUsers = () => {
  const [cards, setCards] = useState([]);

  addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <h1>Hello</h1>
      {/* <GithubUserList cards={cards} /> */}
      <Formon onSubmit={addNewCard}/>
    </div>
  );
};

export default GithubUsers;

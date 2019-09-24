import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo";

const GithubUsers = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
    console.log(cards);
  };

  return (
    <div className="wrapper">
      <h1>GitHub User Dashboard</h1>
      <Form onSubmit={addNewCard} />
      <GithubUserList cards={cards} />
      <CommitHistoryRepo />
    </div>
  );
};

export default GithubUsers;

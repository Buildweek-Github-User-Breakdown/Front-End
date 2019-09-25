import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo";


const GithubUsers = () => {
  const [cards, setCards] = useState([]);
  const [lang, setLang] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  const addLanguage = language => {
    setLang(lang.concat(language))
  }

  return (
    <div className="wrapper">
      <h1>GitHub User DashbOard</h1>
      <Form onSubmit={addNewCard} addLanguage={addLanguage}/>
      <GithubUserList cards={cards} lang={lang}/>
      <CommitHistoryRepo />
    </div>
  );
};
export default GithubUsers;
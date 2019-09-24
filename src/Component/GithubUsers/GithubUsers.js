import React, { useState } from "react";
import GithubUserList from "./GithubUserList"
import Form from "./Form"

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
    <div>
      <h1>GitHub User DashbOard</h1>
      <Form onSubmit={addNewCard} addLanguage={addLanguage}/>
      <GithubUserList cards={cards} lang={lang}/>
    </div>
  );
};

export default GithubUsers;

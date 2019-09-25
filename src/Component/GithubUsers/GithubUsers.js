import React, { useState } from "react";
import GithubUserList from "./GithubUserList"
import Form from "./Form"
import Styled from "styled-components";

const H1 = Styled.h1`
margin-left:460px;
margin-top:20px;
`


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
      <H1>GitHub User Dashboard</H1>
      <Form onSubmit={addNewCard} addLanguage={addLanguage}/>
      <GithubUserList cards={cards} lang={lang}/>
    </div>
  );
};

export default GithubUsers;

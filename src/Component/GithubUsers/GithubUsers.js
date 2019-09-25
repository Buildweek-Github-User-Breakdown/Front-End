import React, { useState } from "react";

import GithubUserList from "./GithubUserList"
import Form from "./Form"
import Styled from "styled-components";
import Header from "../Header";

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

    <div className="wrapper">
      <h1>GitHub User DashbOard</h1>
      <Form onSubmit={addNewCard} addLanguage={addLanguage}/>
      <GithubUserList cards={cards} lang={lang}/>
      <CommitHistoryRepo /
    </div>
  );
};
export default GithubUsers;
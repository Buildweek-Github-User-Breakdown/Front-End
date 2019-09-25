import React, { useState } from "react";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo"
import GithubUserList from "./GithubUserList"
import Form from "./Form"
import Styled from "styled-components";

const H1 = Styled.h1`
margin-left:410px;
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
      <H1>GitHub User DashbOard</H1>
      <Form onSubmit={addNewCard} addLanguage={addLanguage}/>
      <GithubUserList cards={cards} lang={lang}/>
      <CommitHistoryRepo/>
    </div>
  );
};
export default GithubUsers;
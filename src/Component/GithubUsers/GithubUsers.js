import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form";
import Styled from "styled-components";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo";
import Header from "../Header"

const H1 = Styled.h1`
margin-left:460px;
margin-top:20px;
`;

const GithubUsers = () => {
  const [cards, setCards] = useState([]);
  const [lang, setLang] = useState([]);
  const [repo, setRepo] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  const addLanguage = language => {
    setLang(lang.concat(language));
  };

  const addRepo = repoPins => {
    setRepo(repo.concat(repoPins));
  };

  return (

    <div>
      <Header/>
      <div>
        <H1>GitHub User Dashboard</H1>
        <Form
          onSubmit={addNewCard}
          addLanguage={addLanguage}
          addRepo={addRepo}
        />
        <GithubUserList cards={cards} lang={lang} />
        <CommitHistoryRepo repo={repo} />
      </div>
    </div>
  );
};
export default GithubUsers;

import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo";
import Header from "../Header";
import Styled from "styled-components";

const WrapperCads = Styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
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
        <Form
          onSubmit={addNewCard}
          addLanguage={addLanguage}
          addRepo={addRepo}
        />
        <WrapperCads>
        <GithubUserList cards={cards} lang={lang} />
        {/* <CommitHistoryRepo repo={repo} /> */}
        </WrapperCads>
    </div>
  );
};
export default GithubUsers;

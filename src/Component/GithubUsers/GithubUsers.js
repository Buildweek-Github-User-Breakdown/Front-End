import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo";
import Header from "../Header";
import Styled from "styled-components";
import Favourite from "../Favourite/Favourite"

const WrapperCads = Styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
`;

const WrapperRepo = Styled.div `
 width:100%;
`



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
      <Favourite/>
        <Form
          onSubmit={addNewCard}
          addLanguage={addLanguage}
          addRepo={addRepo}
        />
        <WrapperCads>
        <GithubUserList cards={cards} lang={lang} />
        <WrapperRepo>
        <CommitHistoryRepo repo={repo} />
        </WrapperRepo>
        </WrapperCads>
    </div>
  );
};
export default GithubUsers;

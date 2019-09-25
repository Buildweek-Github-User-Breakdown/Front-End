import React, { useState } from "react";
import GithubUserList from "./GithubUserList";
import Form from "./Form";
import CommitHistoryRepo from "../../Components/CommitHistoryRepo";

const GithubUsers = () => {
  const [cards, setCards] = useState([]);
  const [lang, setLang] = useState([]);
  const [repo, setRepo] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  const addLanguage = language => {
    setLang(lang.concat(language))
  }

  const addRepo = repoPins => {
    setRepo(repo.concat(repoPins));
  }

  return (
    <div className="wrapper">
      <h1>GitHub User DashbOard</h1>
      <Form onSubmit={addNewCard} addLanguage={addLanguage} addRepo={addRepo}/>
      <GithubUserList cards={cards} lang={lang}/>
      <CommitHistoryRepo repo={repo}/>
    </div>
  );
};
export default GithubUsers;
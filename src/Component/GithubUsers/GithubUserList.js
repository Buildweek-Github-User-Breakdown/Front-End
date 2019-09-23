import React from "react";
import GithubUserCard from "./GithubUserCard";

const GithubUserList = (props) => (
  <div>
    {props.cards.map(card => (
      <GithubUserCard key={card.id} {...card} />
    ))}
  </div>
);

export default GithubUserList;

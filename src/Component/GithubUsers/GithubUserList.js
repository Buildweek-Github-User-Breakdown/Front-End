import React from "react";
import GithubUserCard from "./GithubUserCard";

const GithubUserList = (props) => (
  <div>
    {props.cards.map((card, index) => (
      <GithubUserCard key={card.id} {...card} lang={props.lang[index]} />
    ))}
  </div>
);

export default GithubUserList;

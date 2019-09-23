import React from "React";
import GithubUserCard from "./GithubUserCard";

const GithubUserList = ({ char }) => (
  <div>
    {char.cards.map(card => (
      <GithubUserCard {...card} />
    ))}
  </div>
);

export default GithubUserList;

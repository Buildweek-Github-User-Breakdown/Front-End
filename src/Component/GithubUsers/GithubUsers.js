import React, { useState } from "react";
// import GithubUserList from "./GithubUserList";
import Form from "./Form"

const GithubUsers = () => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <h1>Hello</h1>
      {/* <GithubUserList cards={cards} /> */}
      <Form/>
    </div>
  );
};

export default GithubUsers;

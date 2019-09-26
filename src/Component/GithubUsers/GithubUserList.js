import React from "react";
import GithubUserCard from "./GithubUserCard";
import Styled from "styled-components"

const Div = Styled.div`
border:2px solid grey;
`

const GithubUserList = (props) => (
  <Div>
    {props.cards.map((card, index) => (
      <GithubUserCard key={card.id} {...card} lang={props.lang[index]} />
    ))}
    
  </Div>
);

export default GithubUserList;
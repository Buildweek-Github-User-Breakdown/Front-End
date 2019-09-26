import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #e5e5e5;
  color: black;
  margin: 5px;
  padding: 0.25em 1em;
  width: 40%;
`;

function CommitHistoryCards(props) {
  //  console.log(props)
  return (
      <Card>
        <p>User: {props.name}</p>
        <p>Date: {props.date}</p>
        <p>Message: {props.message}</p>
        <p>Commit: {props.commit}</p>
      </Card>
  );
}

export default CommitHistoryCards;

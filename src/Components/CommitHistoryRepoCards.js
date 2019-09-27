import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #e5e5e5;
  color: #1089ff;
  margin: 5px;
  padding: 0.25em 1em;
  text-align: center;
  transition: box-shadow 0.2s linear;
  width:100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  & > ${Card}:hover {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;

function CommitHistoryRepoCards(props) {
  return (
    <Container>
      <Card>
        <p>{props.title}</p>
      </Card>
    </Container>
  );
}

export default CommitHistoryRepoCards;

import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
height:67px;
background-color:black;
`;

const H1 = Styled.h1`
color:white;
`;

const Li = Styled.li`
color:white;
margin-left:20px;
font-size:20px;
margin-top:10px;
`

const List = Styled.ul`
display: flex;
flex-direction: row;
flex-wrap:wrap;
margin-left:380px;
list-style-type: none;

`



function Header() {
  return (
    <Div>
      <H1>Git Hub</H1>
      <List>
          <Li>Pull Request</Li>
          <Li>Issues</Li>
          <Li>MarketPlace</Li>
      </List>
    </Div>
  );
}

export default Header;

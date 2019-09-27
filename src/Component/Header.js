import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const Div = Styled.div`
display: flex;
height:67px;
background-color: #24292e;
`;

const Img = Styled.img`
height:50px;
width:50px;
margin-left:20px;
margin-top:10px;
`;

const H1 = Styled.h1`
  color: white;
  margin: 20px auto;
  text-transform: uppercase;
  font-size: 22px;
`;
const History = Styled.a`
 color:white
 margin: 20px 20px 20px 0;
 display: block;
 font-size: 18px;
`;

function Header() {
  return (
    <Div>
      <Img src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png" />
      <H1>GitHub User Dashboard</H1>
      <Link to="/Commits">
        <History>Commits History</History>
      </Link>
    </Div>
  );
}

export default Header;

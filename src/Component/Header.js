import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
height:67px;
width:100%
background-color:black;
`;

const H1 = Styled.h1`
color:white;
`;

function Header() {
  return (
    <Div>
      <H1>Git Hub</H1>
      {/* <img src="https://img.icons8.com/ios-filled/2x/github.png" /> */}
    </Div>
  );
}

export default Header;

import React from "react";
import Styled from "styled-components";

const Img = Styled.img`
height:300px;
width:300px;
border:2px solod grey;

`

const Div = Styled.div`
fontWeight:bold;
font-size:25px;
margin-left:70px;
padding-top:40px;

`


export default function GithubUserCard (props)  {
  return (
    <div>
      <Img alt="avatar"  src={props.avatar_url} />
      <Div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div style={{ fontWeight: "bold" }}>{props.username}</div>
      </Div>
    </div>
  );
};


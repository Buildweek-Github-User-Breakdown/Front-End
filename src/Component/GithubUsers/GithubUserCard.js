import React from "react";
import Styled from "styled-components";

const Img = Styled.img`
height:300px;
width:300px;
border:2px solod grey;

`;

const Div = Styled.div`
fontWeight:bold;
font-size:25px;
margin-left:70px;
padding-top:40px;

`;
const Images = Styled.img`
margin-left:320px;
`;

export default function GithubUserCard(props) {
  console.log(props.lang)
  return (
    <div>
      <Img alt="avatar" src={props.avatar_url} />
      <Div>
        <div>{props.bio}</div>
        <div>{props.name}</div>
        <div>{props.username}</div>
        <div>{props.location}</div>
        <div>Followers: {props.followers}</div>
        <div>Following: {props.following}</div>
        <div>{props.html_url}</div>
        <Images
          src={"http://ghchart.rshah.org/" + props.login}
          alt="Github chart"
        />
        <div>Popular language: { props.lang } </div>
      </Div>
    </div>
  );
}

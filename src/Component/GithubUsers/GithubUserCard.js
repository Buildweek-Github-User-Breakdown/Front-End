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
margin-top:50px;
height:180px;
width:800px;
margin-left:100px;
border:2px solid grey;
`;
const ImgDiv = Styled.div`

`;

const Maindiv = Styled.div`
display: flex;
flex-direction: row;
margin-top:50px;
flex-wrap:wrap;
`;
const Imagesdiv = Styled.div`

`
const Languages = Styled.div`
margin-left:200px;
font-size:20px;
margin-top:30px;
`

export default function GithubUserCard(props) {
  console.log(props.lang);
  return (
    <Maindiv>
      <ImgDiv>
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
      </ImgDiv>
    </Maindiv>
  );

}




import React from "react";
import Styled from "styled-components";

const Img = Styled.img`
height:300px;
width:300px;
`;

const Div = Styled.div`

`;
const Images = Styled.img`
height:180px;
width:800px;
margin-left:100px;
border:2px solid grey;
`;
const ImgDiv = Styled.div`
 width: 45%;
`;

const Maindiv = Styled.div`
display: flex;
margin-left: 10px;

`;
const Imagesdiv = Styled.div`
 display: flex;
 flex-flow: row wrap;
 align-items: center;
`
const Languages = Styled.div`
margin-left: 100px;
font-size:20px;
margin-top: -275px
`
const Buttons = Styled.button`
margin-top:20px;
margin-left:580px;
`

const saveFav = (id) => {
  const favo = localStorage.getItem('fav') && localStorage.getItem('fav').split(',') || [];
  if (favo && !favo.includes(id)) {
    favo.push(id ? id + ' ': "");
  }
  const store = favo.join(',')
  localStorage.setItem('fav', store);
  window.location.reload();
}

export default function GithubUserCard(props) {
  return (
    <div>
    <Buttons onClick={() => saveFav(props.login)}>Save Favourite</Buttons>
    <Maindiv>
      <div>
      </div>
      <ImgDiv>
        <Img alt="avatar" src={props.avatar_url} /> 
      <Div>
        <p>{props.bio}</p>
        <p>{props.name}</p>
        <p>{props.username}</p>
        <p>{props.location}</p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
        <p>{props.html_url}</p>
      </Div>
      </ImgDiv>
      <Imagesdiv>
        <Images
          src={"http://ghchart.rshah.org/" + props.login}
          alt="Github chart"
        />
        <Languages>Popular languages: {props.lang} </Languages>
      </Imagesdiv>
      
      
    </Maindiv>
    </div>
  );
}
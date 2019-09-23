import React,{useState} from "react";
import GithubUserList from "./GithubUserList";

const GithubUser = () => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <GithubUserList  cards = {cards}/>
    </div>
  );
};
 
export default GithubUser;
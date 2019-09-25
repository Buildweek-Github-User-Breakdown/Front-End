import React, { useState } from "react";
import Styled from "styled-components";
import axios from "axios";

const Input = Styled.input`
   margin-top:50px;
   height:40px;
   width:180px;
   font-size:15px;  
 `;
const Button = Styled.button`
 margin-left:30px;
 height:30px;
 width:100px;
 font-size:12px;
 `;

const Form = props => {
  const [username, setUsername] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${username}`).then(res => {
      props.onSubmit(res.data);
      setUsername("");
    });

    axios.get(`https://api.github.com/users/${username}/repos`).then(res => {
      let lang = [];
      const language = res.data.filter(item => {
        return item.language !== "" && item.language !== null;
      });

      language.forEach(item => {
        if (lang.indexOf(item.language) === -1) {
          lang.push(item.language);
        }
      });

      const repoLanguage = lang.join(", ");
      props.addLanguage(repoLanguage);
    });
    axios.get(`https://api.github.com/users/${username}/repos`).then(res => {
      let results = [];
      for (let key in res.data) {
        let value = res.data[key];
        results.push(value.name);
      }
      const repoName = results.slice(Math.max(results.length - 6, 1));
      console.log(repoName)
      props.addRepo(repoName);
    });
    // function ActionLink() {
    //   function handleClick(e) {
    //     e.preventDefault();
    //     ;
    //   }

    axios
      .get(`https://api.github.com/repos/${username}/Best_City_Guide/commits`)
      .then(res => {
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
        />
        <Button type="submit">Add card</Button>
      </form>
    </div>
  );
};
export default Form;

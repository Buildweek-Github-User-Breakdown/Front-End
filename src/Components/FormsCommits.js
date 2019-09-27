import React, { useState } from "react";
import Styled from "styled-components";
import axios from "axios";

const FormHistory =Styled.form `
 display: block;
 margin-top: 10px;
 text-align: center;
`

function FormsCommits(props) {
  const [user, setUser] = useState({ username: "", repo: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser({ username: '', repo: '' });
    axios.get(`https://api.github.com/repos/${user.username}/${user.repo}/commits`)
    .then(res => {
      props.addHistory(res.data)
    });
  };

  return (
    <div>
      {console.log(user)}
      <FormHistory onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          repo:
          <input
            type="text"
            name="repo"
            value={user.repo}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </FormHistory>
    </div>
  );
}

export default FormsCommits;
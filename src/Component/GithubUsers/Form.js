import React, { useState } from "react";
import axios from "axios"

const Form = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then(res => {
      props.onSubmit(res.data);
      console.log(res.data)
      setUsername("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
      />
       <button type="submit">Add card</button>
    </form>
  );
};
export default Form;

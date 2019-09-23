import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data);
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
    </form>
  );
};
export default Form;

import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const initialState = {
  name: "",
  username: "",
  password: ""
};

const SignUpForm = () => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  const handleChanges = event => {
    setCredentials({
      [event.target.name]: event.target.value
    });
  };

  const handleSignUp = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, credentials)
      .then(response => {
        console.log(response, "response from addFriend");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="SignUpCard">
      <form onSubmit={handleSignUp}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChanges}
          />
        </label>

        <label>
          Password
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Sign Up For Github</button>
      </form>
    </div>
  );
};

export default SignUpForm;

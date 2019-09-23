import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const initialState = {
  username: "",
  password: ""
};

const LogIn = () => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  return (
    <div className="LoginCard">
      <h2>Login</h2>
      <form className="LoginForm">
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={e => setCredentials(`${e.target.name}:${e.target.value}`)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={e => setCredentials(`${e.target.name}:${e.target.value}`)}
        />
        <button>Login Now</button>
      </form>
    </div>
  );
};

export default LogIn;

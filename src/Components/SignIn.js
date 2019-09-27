import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

export const ButtonGreen = styled.button`
  background: #00f2fe;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  padding: 13px 0px;
  font-size: 18px;
  color: #191919;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px 1px rgba(0, 0, 0, 0.24);
  border: none;
  cursor: pointer;
  width:100%;
`;

export const ButtonRed = styled.button`
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  padding: 13px 0px;
  font-size: 16px;
  color: #191919;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px 1px rgba(0, 0, 0, 0.24);
  border: none;
  cursor: pointer;
  width:100%;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  width: 250px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
  border: 1px solid #4facfe;
  border-radius: 4px;
`;

export const Card = styled.div`
  width: 20rem;
  border-radius: 20px;
  background-color: white;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

export const Wrapper = styled.div`
  background-color: #2b3137;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title = styled.h3`
  text-align: center;
`;

const initialState = {
  username: "",
  password: ""
};

const LogIn = props => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://github-user-breakdown.herokuapp.com/login`,
        `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-school:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper className="wrapper">
      <Card className="LoginCard">
        <Title>Github User Card Login</Title>
        <Form className="LoginForm">
          <Label>
            Username
            <Input
              name="username"
              type="text"
              value={credentials.username}
              onChange={handleChanges}
            />
          </Label>
          <Label>
            Password
            <Input
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChanges}
            />
          </Label>
          <div className="container">
          <Link to="/">
          <ButtonRed>Register</ButtonRed>
          </Link>
          <ButtonGreen onClick={handleSubmit}>Login</ButtonGreen>
          </div>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default LogIn;

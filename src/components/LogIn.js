import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "./axiosWithAuth";

export const ButtonGreen = styled.button`
  background-color: #28a745;
  border-color: 1px #28a745;
  border-radius: 10%;
  color: white;
  width: 40%;
  margin-left: 3rem;
  height: 2rem;
`;

export const ButtonRed = styled.button`
  background-color: darkred;
  border-color: 1px crimson;
  border-radius: 10%;
  color: white;
  width: 40%;
  height: 2rem;
  vertical-align: top;
`;

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: silver;
  background: lightgray;
  border: silver;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Card = styled.div`
  border: 2px solid gray;
  width: 20rem;
  border-radius: 20px;
  background-color: white;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

export const Wrapper = styled.div`
  background-color: darkslategray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title = styled.h3`
  font-family: "Raleway", roboto, serif;
  text-align: center;
`;

const initialState = {
  username: "",
  password: ""
};

const LogIn = () => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  const handleChanges = event => {
    setCredentials({
      [event.target.name]: event.target.value
    });
  };

  return (
    <Wrapper className="wrapper">
      <Card className="LoginCard">
        <Title>Github User Card App</Title>
        <FormGroup className="LoginForm">
          <Label>
            {" "}
            Username{" "}
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
          <ButtonRed>New Account</ButtonRed>
          <ButtonGreen>Login Now</ButtonGreen>
        </FormGroup>
      </Card>
    </Wrapper>
  );
};

export default LogIn;

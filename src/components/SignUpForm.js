import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import {
  ButtonGreen,
  ButtonRed,
  FormGroup,
  Label,
  Input,
  Card,
  Wrapper,
  Title
} from "./LogIn";

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
    <Wrapper className="Wrapper">
      <Card className="SignUpCard">
        <Title>Create a New Account</Title>
        <FormGroup onSubmit={handleSignUp}>
          <Label>
            Username
            <Input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChanges}
            />
          </Label>
          <Label>
            Email
            <Input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChanges}
            />
          </Label>

          <Label>
            Password
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChanges}
            />
          </Label>
          <ButtonRed>Go back</ButtonRed>
          <ButtonGreen type="submit">Sign Up Now</ButtonGreen>
        </FormGroup>
      </Card>
    </Wrapper>
  );
};

export default SignUpForm;

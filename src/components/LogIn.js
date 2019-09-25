import React, { useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "./AxiosWithAuth";
import axios from "axios";
import UserDataContext from '../contexts/UserDataContext';


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
  const { userData, setUserData } = useContext(UserDataContext)

  // const [credentials, setCredentials] = useState(initialState);
  // console.log(credentials);


  // const handleChanges = event => {
  //   setCredentials({
  //     [event.target.name]: event.target.value
  //   });
  // };

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const changeHandler = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
    //...login gives us the orignal state of login whaever it last was {...$anything} (in this case {...login}) then we add whatever the value is (event.target.value) to whatever the changed feild it corresponds to (event.target.name)
  }
  const submitForm = event => {
    event.preventDefault()
    axiosWithAuth()
      .post('/createnewuser', login)
      .then(response => {
        console.log(response.data)
        setUserData({
          id: response.data.id,
          name: response.data.name,
        })
        // localStorage.setItem('token', response.data.token)
        // const data = response.data
        // console.log('response data variable: ', data)
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }
  return (
    <Wrapper className="wrapper">
      <Card className="LoginCard">
        <Title>Github User Card App</Title>
        <form className="login-form" onSubmit={submitForm}>
          <h1>Login:</h1>
          <label htmlFor="name" className="login-label" />
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={login.username} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <label htmlFor="password" className="login-label" />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={login.password} //this value is updated by the changeHandler
            onChange={changeHandler}
          />
          <br></br>
          <button type="submit" inverted color="blue" className="login-button">
            Submit
          </button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default LogIn;

{/* <FormGroup className="LoginForm" onSubmit={submitForm}>
  <Label>
    {" "}
    Username{" "}
    <Input
    name="username"
    placeholder="Username"
    type="text"
    value={login.username} //this value is updated by the changeHandler
    onChange={changeHandler}
  />
  <Label htmlFor="password" className="login-label" />
  <Input
    name="password"
    placeholder="Password"
    type="password"
    value={login.password} //this value is updated by the changeHandler
    onChange={changeHandler}
  />
  </Label>
  <ButtonRed>New Account</ButtonRed>
  <ButtonGreen>Login Now</ButtonGreen>
</FormGroup> */}
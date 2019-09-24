import React, {useState, useContext} from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogIn";
import "./App.css";

import { UserDataProvider } from './contexts/UserDataContext';

function App() {
  const [userData, setUserData] = useState({})


  return (
    <header>
      <UserDataProvider value={{ userData, setUserData }}>
      <LoginForm />
      {/* <SignUpForm /> */}
    </UserDataProvider>
    </header>
  );
}

export default App;

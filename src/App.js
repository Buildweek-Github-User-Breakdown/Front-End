import React from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogIn";
import "./App.css";

function App() {
  return (
    <header>
      <SignUpForm />
      <LoginForm />
    </header>
  );
}

export default App;

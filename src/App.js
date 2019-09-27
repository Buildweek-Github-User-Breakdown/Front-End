import React from "react";
import { Route, Switch } from "react-router-dom";
import GithubUsers from "./Component/GithubUsers/GithubUsers";
import Notes from "./Component/Notes/Notes.js";
import LogIn from "./Components/LogIn";
import SignUpForm from "./Components/SignUpForm";
import FormsCommitsHistory from "./Components/FormsCommitsHistory"

import "./App.css";

function App() {



  return (
    <Switch>
        <Route exact path="/" component={SignUpForm}/>
        <Route exact path="/LogIn" component={LogIn}/>
        <Route exact path="/Home" component={GithubUsers} />
        <Route exact path="/Commits" component={FormsCommitsHistory} />
        <Route exact path="/notes" component={Notes} />
    </Switch>
  );
}

export default App;

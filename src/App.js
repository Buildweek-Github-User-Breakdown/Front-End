import React from "react";

import { Route, Switch } from "react-router-dom";
import CommitHistory from "./Components/CommitHistory";
import GithubUsers from "./Component/GithubUsers/GithubUsers";
import Notes from "./Component/Notes/Notes.js";
import LogIn from "./Components/LogIn";
import SignUpForm from "./Components/SignUpForm";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GithubUsers} />
      <div className="history">
        <Route path="/Commits" component={CommitHistory} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/SignUp" component={SignUpForm}/>
        <Route exact path="/LogIn" component={LogIn}/>
      </div>
    </Switch>
  );

}

export default App;

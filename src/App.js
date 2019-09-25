import React from "react";
import { Route, Switch } from "react-router-dom";
import CommitHistory from "./Components/CommitHistory";
import GithubUsers from "./Component/GithubUsers/GithubUsers";
import Header from "./Component/Header"
import "./App.css";

function App() {
  return (
    <div>
    <header>
      <Header/>
    </header>
    <Switch>
      <Route exact path="/" component={GithubUsers} />
      <div className="history">
        <h1>Commit History</h1>
        <Route path="/Commits" component={CommitHistory} />
      </div>
    </Switch>
    </div>
  );
}

export default App;

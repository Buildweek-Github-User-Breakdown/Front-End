import React from "react";
import { Route, Switch } from "react-router-dom";
import CommitHistory from "./Components/CommitHistory";
import GithubUsers from "./Component/GithubUsers/GithubUsers";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GithubUsers} />
      <div className="history">
        <h1>Commit History</h1>
        <Route path="/Commits" component={CommitHistory} />
      </div>
    </Switch>
  );
}

export default App;

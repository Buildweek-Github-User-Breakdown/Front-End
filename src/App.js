import React from "react";

import "./App.css";
import CommitHistory from "./Components/CommitHistory";
import CommitHistoryRepo from "./Components/CommitHistoryRepo";

import GithubUsers from "./Component/GithubUsers/GithubUsers";
import "./App.css";


function App() {
  return (
    <div>
 CommitHistory
      <CommitHistory />
      <CommitHistoryRepo />

      <GithubUsers />
master
    </div>
  );
}

export default App;

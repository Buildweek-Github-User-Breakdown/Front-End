import React from "react";
import "./App.css";
import CommitHistory from "./Components/CommitHistory";
import CommitHistoryRepo from "./Components/CommitHistoryRepo";
import { Route } from "react-router-dom";

function App() {
  return (
     <main className="App">
      <Route exact path="/" component={CommitHistoryRepo} />
      <Route  path="/CommitHistory" component={CommitHistory} />
    </main>
  );
}

export default App;

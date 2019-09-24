import React from "react";
import "./App.css";
import CommitHistory from "./Components/CommitHistory";
import CommitHistoryRepo from "./Components/CommitHistoryRepo";

function App() {
  return (
    <div>
      <CommitHistory />
      <CommitHistoryRepo />
    </div>
  );
}

export default App;

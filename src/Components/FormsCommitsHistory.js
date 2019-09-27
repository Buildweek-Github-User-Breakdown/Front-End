import React, { useState } from "react";
import FormsCommits from "./FormsCommits"
import CommitHistory from "./CommitHistory";

const GithubUsers = () => {
  const [history, setHistory] = useState([]);

  const addHistory = historyCommits => {
    setHistory(history.concat(historyCommits));
  };

  return (
    <div>
     <FormsCommits addHistory={addHistory} />
     <CommitHistory commit={history}/>
    </div>
  );
};
export default GithubUsers;

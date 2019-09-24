import React, { useState, useEffect } from "react";
import CommitHistoryCards from './CommitHistoryCards'
import axios from "axios";

const CommitHistoryRepo = () => {
  const [repo, setRepo] = useState();

  useEffect(() => {
    axios.get("https://api.github.com/users/itava0/repos").then(res => {
      for (let key in res.data) {
        let value = res.data[key];
        setRepo(value.name);
      }
    });
  }, []);

  const repoName = () => {
    let name = []
    name.push(repo);
    return name
  }

console.log(repoName())
  return (
     <div>
      {repoName().map(item=> {
        return (
          <CommitHistoryCards
           title={item}
          />
        );
      })}
    </div>
  )
};

export default CommitHistoryRepo;

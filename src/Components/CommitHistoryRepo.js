import React, { useState, useEffect } from "react";
import CommitHistoryRepoCards from './CommitHistoryRepoCards'
import axios from "axios";

const CommitHistoryRepo = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/itava0/repos").then(res => {
      let results = [];  
    for (let key in res.data) {
        let value = res.data[key];
        results.push(value.name)
      }
      setRepo([...repo, ...results])
      console.log(results, repo)
    });
  }, []);

console.log(repo)
  return (
     <div>
      {repo.map(item=> {
        return (
          <CommitHistoryRepoCards
           title={item}
          />
        );
      })}
    </div>
  )
};

export default CommitHistoryRepo;

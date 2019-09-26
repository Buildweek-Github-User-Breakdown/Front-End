import React from "react";
import CommitHistoryRepoCards from './CommitHistoryRepoCards'


const CommitHistoryRepo = (props) => {
  return (
     <div>
      {props.repo.map((item, key)=> {
        return (
          <CommitHistoryRepoCards
           key={key}
           title={item}
          />
        );
      })}
    </div>
  )
};

export default CommitHistoryRepo;

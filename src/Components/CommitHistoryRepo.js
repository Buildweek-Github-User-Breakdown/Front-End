import React from "react";
import CommitHistoryRepoCards from './CommitHistoryRepoCards'


const CommitHistoryRepo = (props) => {
  return (
     <div>
      {props.repo.map(item=> {
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

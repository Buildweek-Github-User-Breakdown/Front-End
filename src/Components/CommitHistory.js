import React,{useState,useEffect} from 'react';
import moment from 'moment'
import CommitHistoryCards from './CommitHistoryCards'


function CommitHistory (props) {
 return (
       <div>
      {props.commit.map((item, key)=> {
        return (
          <CommitHistoryCards
           key={key}
           date={moment(item.commit.author.date).format('MMMM Do YYYY, h:mm:ss a')}
           message={item.commit.message}
           commit={item.commit.tree.sha}
          />
        );
      })}
    </div>
 )
}

export default CommitHistory;
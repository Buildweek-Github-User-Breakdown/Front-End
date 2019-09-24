import React from 'react';

 function CommitHistoryCards(props) {
  //  console.log(props)
   return (
     <ul>
       <li>{props.name}</li>
       <li>{props.date}</li>
       <li>{props.commit}</li>
     </ul>
   )
 }

 export default CommitHistoryCards;

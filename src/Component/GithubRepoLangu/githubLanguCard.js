import React from 'react';

 function CommitLanguCards(props) {
   console.log(props)
   return (
     <ul>
       <li>{props.language}</li>
     </ul>
   )
 }

 export default CommitLanguCards;
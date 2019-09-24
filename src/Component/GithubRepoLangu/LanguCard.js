import React from 'react';

 function LanguCards(props) {
   console.log(props)
   return (
     <ul>
       <li>{props.language}</li>
     </ul>
   )
 }

 export default CommitLanguCards;
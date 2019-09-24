import React from 'react';
import LanguCard from "./LanguCard"

 function LanguList(props) {
   console.log(props)
   return (
  <div>
     {props.languages.map(item => (
      <LanguCard key={item.id} {...item} />
    ))}
   
  </div>
   )
 }

 export default LanguList;
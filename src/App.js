import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const API = 'https://developer.github.com/v3/'
  
    useEffect(() => {
      axios.get(API)
      .then(response => {
        console.log(response)
      })
      .catch(error =>{
        console.log("this is an error", error);
      })
    }, [])
  
  return (
   <h1>
     Hello
   </h1>
  );
}

export default App;

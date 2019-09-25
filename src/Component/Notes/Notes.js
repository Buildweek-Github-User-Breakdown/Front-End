import React, {useState} from "react";
import Styled from "styled-components";

const Divs = Styled.div`
height:400px;
width:650px;
border:2px solid black;
margin-left:320px;
margin-top:100px;
`

const Inputs = Styled.input`
margin-top:50px;
height:50px;
width:500px;
border:2px solid grey;
`

const Button = Styled.button`
margin-top:20px;
height:40px;
width:120px;
margin-left:200px;
border:2px solid grey;
`

export default function Notes() {
const [notes, setNotes] = useState({notes:""});

const handleChanges = e => {
    console.log(notes);
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNotes({ notes:""});
  };


  return( 
  <Divs>
     <div>
     <h2>Add A Note</h2>
      <form onSubmit={handleSubmit}>
          <Inputs
         id="notes"
         type="notes"
         name="notes"
         onChange={handleChanges}
         value={notes.notes}
         placeholder="Notes"/>
         <div>
          <Button type="submit">Add Notes</Button>
          </div>
      </form>
      </div>
  </Divs>
  ) 
}

import React, { useState } from "react";
import Styled from "styled-components";

const Divs = Styled.div`
height:400px;
width:650px;
border:2px solid black;
margin-left:320px;
margin-top:100px;
`;

const Inputs = Styled.input`
margin-top:50px;
height:50px;
width:500px;
border:2px solid grey;
`;

const Button = Styled.button`
margin-top:20px;
height:40px;
width:120px;
margin-left:200px;
border:2px solid grey;
`;
const Header = Styled.h2`
margin-left:200px;
margin-top:40px;

`;

const Headers = Styled.h1`
border:2px solid grey;
`;

export default function Notes() {
  const [notes, setNotes] = useState("");
  const [showNote, setShowNote] = useState("");

  const handleChanges = e => {
    setNotes(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowNote("true");
  };
  const deleteNote = e => {
    e.preventDefault();
    setNotes("");
  };

  return (
    <Divs>
      <div>
        <Header>Add A Note</Header>
        <Headers>
          {showNote && (
            <div>
              {" "}
              {notes} <button onClick={deleteNote}>Delete</button>
              <button onClick={() => setEditing(false)}></button>
            </div>
          )}
        </Headers>
        <form onSubmit={handleSubmit}>
          <Inputs
            id="note"
            type="note"
            name="note"
            onChange={handleChanges}
            value={notes}
            placeholder="Notes"
          />
          <div>
            <Button type="submit">Add Notes</Button>
          </div>
        </form>
      </div>
    </Divs>
  );
}

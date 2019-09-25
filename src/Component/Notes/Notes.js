import React, {useState} from "react";

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
  <div>
      <form onSubmit={handleSubmit}>
          <input
         id="notes"
         type="notes"
         name="notes"
         onChange={handleChanges}
         value={notes.notes}/>
      </form>
      <button type="submit">Notes</button>
  </div>
  ) 
}

import React, {useState} from "react";

export default function Notes() {
const [notes, setNotes] = useState('');

  return( 
  <div>
      <form>
          <input
           type="text"
           placeholder="Commits"
           value={notes}
           onChange={event => setNotes(event.target.value)}/>
      </form>
  </div>
  ) 
}

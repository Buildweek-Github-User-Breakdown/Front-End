import React, {useState} from "react";

export default function Notes() {
const [notes, setNotes] = useState('');

  return( 
  <div>
      <form>
          <input
           type="text"
           placeholder="Commits"/>
      </form>
  </div>
  ) 
}

import React, { useState } from "react";

const  Form = () => {
    const [username, setUsername] = useState('')

    return(
        <form>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username" 
        />

        </form>
    )
}
export default Form;
import React from "react";
import Styled  from "styled-components"

const Div = Styled.div`
margin-left:400px;
font-size:20px;
`



const Favourite = () => {
  const favUser = localStorage.getItem("fav");

  return (
    <Div>
       { favUser && <div>Favourites: { favUser } </div> }
    </Div>
  );
};

export default Favourite;

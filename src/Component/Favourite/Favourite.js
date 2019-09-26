import React from "react";

const Favourite = () => {
  const favUser = localStorage.getItem("fav");

  return (
    <div>
       { favUser && <div>Favourites: { favUser } </div> }
    </div>
  );
};

export default Favourite;

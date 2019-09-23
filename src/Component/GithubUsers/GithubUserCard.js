import React from "react";

export default function GithubUserCard ({ char })  {
  return (
    <div>
      <img alt="avatar" style={{ width: "70px" }} src={props.char.avatar_url} />
      <div>
        <div style={{ fontWeight: "bold" }}>{props.char.name}</div>
        <div>{props.char.blog}</div>
      </div>
    </div>
  );
};


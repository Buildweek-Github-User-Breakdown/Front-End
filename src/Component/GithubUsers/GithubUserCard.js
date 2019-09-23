import React from "react";

export default function GithubUserCard (props)  {
  return (
    <div>
      <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div style={{ fontWeight: "bold" }}>{props.username}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};


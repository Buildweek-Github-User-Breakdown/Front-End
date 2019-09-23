import React from "react";

export default function GithubUserCard ({char})  {
  return (
    <div>
      <img alt="avatar" style={{ width: "70px" }} src={char.avatar_url} />
      <div>
        <div style={{ fontWeight: "bold" }}>{char.name}</div>
        <div>{char.blog}</div>
      </div>
    </div>
  );
};


import React from "react";
const Like = ({ liked, handleLike }) => {
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={handleLike}
      className={`fa fa-heart${liked !== true ? "-o" : ""}`}
    ></i>
  );
};

export default Like;

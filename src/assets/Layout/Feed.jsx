import React from "react";
import Top from "../Components/Feed/Top";
import Bottom from "../Components/Feed/Bottom";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="feed" style={{ width: "75%" }}>
      <div className="top">
        <Top />
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  );
};

export default Feed;

import React from "react";
import Top from "../Components/Feed/Top";
import Bottom from "../Components/Feed/Bottom";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="prof2-feed" style={{ }}>
      <div className="prof2-top">
        <Top />
      </div>
      <div className="prof2-bottom">
        <Bottom />
      </div>
    </div>
  );
};

export default Feed;

import React from 'react'
import one from "../Images/unsplash1.png";
import two from "../Images/unsplash2.png";
import ellipsis from "../Images/ellipsis-solid.svg";
import Range from './Range';
import Info from './Info';
import './BottomLeft.scss'


const BottomLeft = () => {
  return (
    <div className="bottom-left">
      <div className="range">
        <h4 style={{ color: "##0F172A", fontSize: "14px" }}>
          Complete Your Profile
        </h4>{" "}
        <br />
        <Range />
      </div>
      <div className="intro">
        <div className="intro-con">
          <div className="intro1">
            <h4 style={{ color: "##0F172A" }}>Intro</h4>
            <img src={ellipsis} alt="" width={20} />
          </div>
          <p
            style={{ color: "#64748B", fontSize: "14px", paddingBottom: "5px" }}
          >
            I am an experienced joiner with well developed skills.
          </p>
          <div className="items">
            <Info />
          </div>
        </div>
      </div>
      <div className="images">
        <div className="photos">
          <h4>Photos</h4>
          <p style={{ fontSize: "14px", color: "#2563EB" }}>See All</p>
        </div>
        <div className="one">
          <img src={one} alt="" />
          <img src={two} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BottomLeft

import React from 'react'
import zero from '../Components/Images/48px.png';
import one from "../Components/Images/48px-1.png";
import two from '../Components/Images/48px-2.png';
import three from '../Components/Images/48px-3.png';
import four from '../Components/Images/48px-4.png';
import five from "../Components/Images/48px-5.png";
import six from "../Components/Images/48px-6.png";
import seven from "../Components/Images/48px-7.png";
import eight from "../Components/Images/48px-8.png";
import nine from "../Components/Images/48px-9.png";
import ellipsis from "../Components/Images/ellipsis-solid.svg";

const Friends = () => {
    const friend = [
      {
        name: "Angela Lee",
        social: "@anglee",
        icon: zero,
      },
      {
        name: " Wade Warren",
        social: "@anglee",
        icon: one,
      },
      {
        name: " Jane Coper",
        social: "@@anglee",
        icon: two,
      },
      {
        name: " Esther Howard",
        social: "@anglee",
        icon: three,
      },
      {
        name: " Brooklyn Simmons",
        social: "@anglee",
        icon: four,
      },
      {
        name: " Leslie Alexander",
        social: "@anglee",
        icon: five,
      },
      {
        name: "Jenny Wilson",
        social: "@anglee",
        icon: six,
      },
      {
        name: " Robert Fox",
        social: "@anglee",
        icon: seven,
      },
      {
        name: " Cody Fisher",
        social: "@anglee",
        icon: eight,
      },
      {
        name: " Kristin Watson",
        social: "@anglee",
        icon: nine,
      },
    ];

  return (
    <div className="friends">
      {friend.map((item, index) => (
        <div className="friendItems" key="index">
          <div className="avatar">
            <div className="avatarDetails">
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
              <p>{item.social}</p>
            </div>
            <img src={ellipsis} alt="" width="20" />
          </div>
          <button>Message</button>
        </div>
      ))}
    </div>
  );
}

export default Friends

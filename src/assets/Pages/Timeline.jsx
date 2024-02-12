import Avatar from "../Components/Images/Avatar.png";
import zer from "../Components/Images/64px.png";
import on from "../Components/Images/64px-1.png";
import tw from "../Components/Images/64px-2.png";
import thre from "../Components/Images/64px-3.png";
import fou from "../Components/Images/64px-4.png";
import fiv from "../Components/Images/64px-5.png";
import si from "../Components/Images/64px-6.png";
import seve from "../Components/Images/64px-7.png";
import down from "../Components/Images/chevron-down.png";
import pubic from "../Components/Images/name.png";
import globe from "../Components/Images/globe.png";
import smile from "../Components/Images/mood-smile.png";
import ink from "../Components/Images/ink.png";
import LiveVideo from "../Components/Feed/LiveVideo";
import ellipsi from "../Components/Images/ellipsis-solid.svg";
import splashOne from "../Components/Images/unsplash1.png";
import splashTwo from "../Components/Images/unsplash2.png";
import splash from "../Components/Images/unsplash_BV8Ka-JE0Cs.png";
import Likes from "../Components/Feed/Likes";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="your">
        <h3>Your Timeline</h3>
        <div className="others">
          <div className="othersNames">
            <img src={Avatar} alt="" />
            <span>You</span>
          </div>
          <div className="othersNames">
            <img src={zer} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={on} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={tw} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={thre} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={fou} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={fiv} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={si} alt="" />
            <span>@anglee</span>
          </div>
          <div className="othersNames">
            <img src={seve} alt="" />
            <span>@anglee</span>
          </div>
        </div>
      </div>
      <div className="public">
        <div className="publicItems">
          <div className="LeftRight">
            <div className="left">
              <img src={Avatar} alt="" />
              <div className="leftText">
                <p>Angela Lee</p>
                <p>@anglee</p>
              </div>
            </div>
            <div className="right">
              <img src={globe} alt="" />
              <img src={pubic} alt="" />
              <img src={down} alt="" />
            </div>
          </div>
          <div className="onMind">
            <input type="text" placeholder="Whats on your mind" />
            <div className="smile">
              <img src={smile} alt="" />
              <img src={ink} alt="" />
            </div>
          </div>
          <div className="live">
            <LiveVideo />
            <img src={ellipsi} alt="" width="20" />
          </div>
        </div>
      </div>
      <div className="photography">
        <div className="angie">
          <img src={Avatar} alt="" />
          <div className="angieName">
            <p>Angela Lee</p>
            <p>@anglee</p>
          </div>
        </div>
        <p style={{ padding: "0.3rem" }}>
          Here are some photography works that I made on the weekend with some
          of my friends, I really love those colorful tone. happy for that!
        </p>
        <div className="imgs">
          <img src={splash} alt="" width="200" height="100" />
          <img src={splashOne} alt="" width="200" height="100" />
          <img src={splashTwo} alt="" width="200" height="100" />
        </div>
        <div className="like">
          <Likes />
        </div>

        <div
          className="msgs"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F8FAFC",
            paddingInline: "1rem",
            paddingBlock: "0.5rem",
            borderRadius: "0.6rem",
            marginInline:"0.5rem"
          }}
        >
          <input
            type="text"
            placeholder="Write your message"
            style={{ backgroundColor: "transparent", border: "none" }}
          />
          <div className="msgsItems">
            <img src={smile} alt="" />
            <img src={ink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

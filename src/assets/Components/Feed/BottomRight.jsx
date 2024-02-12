import Avatar from "../Images/avatar.png";
import LiveVideo from "./LiveVideo";
import one from "../Images/unsplash1.png";
import two from "../Images/unsplash2.png";
import Likes from "./Likes";
import smile from "../Images/mood-smile.png";
import ink from "../Images/ink.png";
import "./BottomRight.scss";
const BottomRight = () => {
  return (
    <div className="bottomRight" style={{}}>
      <div className="mind" style={{}}>
        <div className="mindItems" style={{}}>
          <img src={Avatar} alt="" height="35" />
          <input type="text" placeholder="What's on your mind?" style={{}} />
        </div>
        <div className="live">
          <LiveVideo />
        </div>
      </div>

      <div className="time" style={{}}>
        <div className="ago">
          <img src={Avatar} alt="" width={40} />
          <div className="mins">
            <h3 style={{ fontSize: "14px" }}>Angela Lee</h3>
            <p style={{ fontSize: "12px" }}>56 mins ago</p>
          </div>
        </div>
        <p>
          Here are some photography works that I made <br /> on the weekend with
          some of my friends, happy for that!
        </p>
        <div className="img">
          <img src={one} alt="" width="220" height="140" />
          <img src={two} alt="" width="220" height="140" />
        </div>
        <div className="likes">
          <Likes />
        </div>
        <div className="msg">
          <input type="text" placeholder="Write your message" />
          <div className="msgPics">
            <img src={smile} alt="" />
            <img src={ink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomRight;

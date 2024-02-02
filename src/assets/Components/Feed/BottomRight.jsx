import Avatar from "../Images/avatar.png";
import LiveVideo from "./LiveVideo";
import one from "../Images/unsplash1.png";
import two from "../Images/unsplash2.png";
import Likes from "./Likes";
import smile from "../Images/mood-smile.png";
import ink from "../Images/ink.png";

const BottomRight = () => {
  return (
    <div
      className="bottomRight"
      style={{ backgroundColor: "white", paddingBlock: ".8rem" }}
    >
      <div
        className="mind"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: "0.8rem",
            gap: "0.8rem",
          }}
        >
          <img src={Avatar} alt="" height="35" />
          <input
            type="text"
            placeholder="What's on your mind?"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#F8FAFC",
            }}
          />
        </div>
        <div className="live">
          <LiveVideo />
        </div>
      </div>

      <div
        className="time"
        style={{ display: "flex", flexDirection: "column", padding: "0.8rem" }}
      >
        <div
          className="ago"
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
            gap: "0.8rem",
          }}
        >
          <img src={Avatar} alt="" width={40} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2px",
            }}
          >
            <h3 style={{ fontSize: "14px" }}>Angela Lee</h3>
            <p style={{ fontSize: "12px" }}>56 mins ago</p>
          </div>
        </div>
        <p style={{ fontSize: "14px", paddingBottom: "0.8rem" }}>
          Here are some photography works that I made <br /> on the weekend with
          some of my friends, happy for that!
        </p>
        <div
          className="img"
          style={{
            display: "flex",
            gap: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <img src={one} alt="" width="220" height="140" />
          <img src={two} alt="" width="220" height="140" />
        </div>
        <div className="likes" style={{ paddingBlock: "0.5rem" }}>
          <Likes />
        </div>
        <div
          className="msg"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F8FAFC",
            paddingInline: "10px",
            paddingBlock: "0.5rem",
            borderRadius: "0.6rem",
          }}
        >
          <input
            type="text"
            placeholder="Write your message"
            style={{ backgroundColor: "transparent", border: "none" }}
          />
          <div>
            <img src={smile} alt="" />
            <img src={ink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomRight;

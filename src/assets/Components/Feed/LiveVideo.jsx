import Video from "../Images/video.png";
import star from "../Images/star.png";
import photo from "../Images/photo.png";
import "./LiveVideo.scss";

const LiveVideo = () => {
  const items = [
    {
      icon: Video,
      name: "LiveVideo",
    },
    {
      icon: photo,
      name: "ImageVideo",
    },
    {
      icon: star,
      name: "Activity",
    },
  ];
  return (
    <div
      className="live"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0.8rem",
        gap: "0.8rem",
      }}
    >
      {items &&
        items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.icon} alt="" width="20" /> <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
};

export default LiveVideo;

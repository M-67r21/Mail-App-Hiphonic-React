import heart from "../Images/heart.png";
import share from "../Images/share.png";
import message from "../Images/messages.png";

const Likes = () => {
  const likes = [
    {
      icon: heart,
      name: "2.6K Likes",
    },
    {
      icon: message,
      name: "297 Comments",
    },
    {
      icon: share,
      name: "201K Share",
    },
  ];
  return (
    <div
      className="likes"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      {likes.map((item, index) => (
        <div
          className="like"
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={item.icon} alt="" />
          <span style={{ fontSize: "14px" }}>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Likes;

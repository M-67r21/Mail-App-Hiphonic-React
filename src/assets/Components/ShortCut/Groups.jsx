import "./Groups.scss";
import Group1 from "../Images/Group1.png";
import Group2 from "../Images/Group2.png";
import Group3 from "../Images/Group3.png";

function Groups() {
  const groupData = [
    {
      icon: Group1,
      name: "Design Enthusiast",
    },
    {
      icon: Group2,
      name: "UI Official",
    },
    {
      icon: Group3,
      name: "Web Designer",
    },
  ];
  return (
    <div className="GroupItems">
      <div className="heading">
        <p style={{ textTransform: "uppercase", color: "#94A3B8" }}>
          Your Page
        </p>
        <p style={{ color: "#2563EB", fontSize: "0.9rem" }}>See all</p>
      </div>
      {groupData &&
        groupData.map((item, index) => (
          <div className="group-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Groups;

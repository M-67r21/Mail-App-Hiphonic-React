import map from "../Images/map-pin.png";
import briefcase from "../Images/briefcase.png";
import events from "../Images/events.png";
import ink from "../Images/ink.png";
import "./Info.scss";

const Info = () => {
  const infoItem = [
    {
      icon: map,
      name: "2972 Westheimer Rd.",
    },
    {
      icon: briefcase,
      name: "Binford Ltd..",
    }
    ];

    const infoItemss = [
    {
      icon: events,
      name: "September 24, 2017.",
    },
    {
      icon: ink,
      name: "dribbble.com/Angela.",
    },
  ]

  return (
    <div className="info" style={{ backgroundColor: "white" }}>
      {infoItem.map((item, index) => (
        <div className="infoitems" key={index} style={{}}>
          <img src={item.icon} alt="" />
          <p style={{ fontSize: "14px", paddingLeft: "5px", color: "#0F172A" }}>
            {item.name}
          </p>
        </div>
      ))}
      {infoItemss.map((item, index) => (
        <div className="infoitems" key={index} style={{}}>
          <img src={item.icon} alt="" />
          <p style={{ fontSize: "14px", paddingLeft: "5px", color: "#0F172A" }}>
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Info;

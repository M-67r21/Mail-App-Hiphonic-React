import { Link } from "react-router-dom";
import timeline from "../Images/timeline.png";
import friends from "../Images/friends.png";
import groups from "../Images/group.png";
import videos from "../Images/video.png";
import photos from "../Images/photo.png";
import events from "../Images/events.png";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <h3 style={{ color: "#94A3B8" }}>MENU</h3>
      <div className="menu-items">
        <img src={timeline} alt="" />
        <Link to="/timeline">
          <span>Timeline</span>
        </Link>
      </div>
      <div className="menu-items">
        <img src={friends} alt="" />
        <Link to="/friends">
          <span>Friends</span>
        </Link>
      </div>
      <div className="menu-items">
        <img src={groups} alt="" />
        <Link to="/group">
          <span>Group</span>
        </Link>
      </div>
      <div className="menu-items">
        <img src={videos} alt="" />
        <Link to="/videos">
          <span>Videos</span>
        </Link>
      </div>
      <div className="menu-items">
        <img src={photos} alt="" />
        <Link to="/photos">
          <span>Photos</span>
        </Link>
      </div>
      <div className="menu-items">
        <img src={events} alt="" />
        <Link to="/events">
          <span>Events</span>
        </Link>
        <span>14</span>
      </div>
    </div>
  );
};

export default Menu;

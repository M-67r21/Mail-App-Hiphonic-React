import timeline from "../Images/timeline.png";
import friends from "../Images/friends.png";
import groups from "../Images/group.png";
import videos from "../Images/video.png";
import photos from "../Images/photo.png";
import events from "../Images/events.png";
import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      <h3>MENU</h3>
      <div className="menu-items">
        <img src={timeline} alt="" />
        <span>Timeline</span>
      </div>
      <div className="menu-items">
        <img src={friends} alt="" />
        <span>Friends</span>
      </div>
      <div className="menu-items">
        <img src={groups} alt="" />
        <span>Group</span>
      </div>
      <div className="menu-items">
        <img src={videos} alt="" />
        <span>Video</span>
      </div>
      <div className="menu-items">
        <img src={photos} alt="" />
        <span>Photos</span>
      </div>
      <div className="menu-items">
        <img src={events} alt="" />
        <span>Events</span>
        <span>14</span>
      </div>
    </div>
  );
};

export default Menu;

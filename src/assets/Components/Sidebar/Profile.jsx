import "./Profile.scss";
import Avatar from "../Images/avatar.png";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Image">
        <img src={Avatar} alt="avatar" />{" "}
      </div>
      <div className="text">
        <p className="Profilename">Angela Lee</p>
        <p className="username">@angelalee</p>
      </div>
    </div>
  );
};

export default Profile;

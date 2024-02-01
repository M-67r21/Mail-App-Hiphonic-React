import './Top.scss'
import back from "../Images/background.png";
import Avatar from "../Images/avatar.png";

const Top = () => {
  return (
    <div className="top">
      <div className="img">
        <img src={back} alt="" style={{ width: "100%" }} />
        <button>Edit Profile</button>
      </div>
      <div className="avatar">
        <div className="angela">
          <img className="lee" src={Avatar} alt="" width="40" />
          <div className="text">
            <p>Angela Lee</p>
            <p>@anglee</p>
          </div>
        </div>
        <div className="posts">
          <div>
            <h3>Posts</h3>
            <p>693</p>
          </div>
          <div>
            <h3>Friends</h3>
            <p>5.7K</p>
          </div>
          <div>
            <h3>Photos</h3>
            <p>296</p>
          </div>
          <div>
            <h3>Likes</h3>
            <p>10.7K</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top

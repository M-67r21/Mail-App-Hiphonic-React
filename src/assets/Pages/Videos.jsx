import search from "../Components/Images/search.png";
import one from "../Components/Images/Mask Group.png";
import two from "../Components/Images/Mask Group 1.png";
import three from "../Components/Images/Mask Group 2.png";
import four from "../Components/Images/unsplash_7MAjXGUmaPw.png";
import avatarone from "../Components/Images/Avatar 1.png";
import avatartwo from "../Components/Images/Avatar 2.png";
import avatarthree from "../Components/Images/Avatar 3.png";
import avatar from "../Components/Images/Avatar.png";
import k from "../Components/Images/2K.png";

import "./Videos.scss";

const Videos = () => {
  return (
    <div className="video">
      <div className="videoTop">
        <div className="videoHeading">
          <h4>Video</h4>
          <img src={search} alt="" />
        </div>
        <div className="categories">
          <div className="categoriesHeading">
            <h4>Categories to explore</h4>
            <button>See All</button>
          </div>
          <div className="videoss">
            <div className="music">
              <img src={one} alt="" />
              <div className="musicItems">
                <p>Music</p>
                <div className="musicImg">
                  <img src={avatarone} alt="" />
                  <img src={avatartwo} alt="" />
                  <img src={avatarthree} alt="" />
                  <img src={k} alt="" />
                </div>
              </div>
              <button>See all</button>
            </div>
            <div className="music">
              <img src={two} alt="" />
              <div className="musicItems">
                <p>Family</p>
                <div className="musicImg">
                  <img src={avatarone} alt="" />
                  <img src={avatartwo} alt="" />
                  <img src={avatarthree} alt="" />
                  <img src={k} alt="" />
                </div>
              </div>
              <button>See all</button>
            </div>
            <div className="music3">
              <img src={three} alt="" />
              <p>Kids</p>
              <button></button>
            </div>
          </div>
        </div>
      </div>

      <div className="videoBottom">
        <div className="videoBottomHeading">
          <div className="Leeee">
            <img src={avatar} alt="" />
            <div className="LeeeeName">
              <p
                style={{
                  color: "#0F172A",
                  fontSize: ".9rem",
                  fontWeight: "600",
                }}
              >
                Angela Lee
              </p>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: ".8rem",
                  fontWeight: "500",
                }}
              >
                56 mins ago
              </p>
            </div>
          </div>
        </div>
        <p style={{ color: "#64748B", fontSize: ".9rem", fontWeight: "500" }}>
          The HAPPINESS you get when you serve your food to family members and
          their smile and your satisfaction is beyond. Do some experiment, feel
          the energy, share the happiness, fulfill your urge and finally relieve
          your stress.
        </p>
        <img src={four} alt="" />
      </div>
    </div>
  );
};

export default Videos;

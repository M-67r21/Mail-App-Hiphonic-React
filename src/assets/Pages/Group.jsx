import search from "../Components/Images/search.png";
import dots from "../Components/Images/dots-vertical.png";
import mask from "../Components/Images/Mask.png";
import masks from "../Components/Images/Mask2.png";
import one from "../Components/Images/24px.png";
import two from "../Components/Images/24px-1.png";
import three from "../Components/Images/24px-2.png";
import k from "../Components/Images/2K.png";
import left from '../Components/Images/unsplash_T6fDN60bMWY.png'
import right from "../Components/Images/unsplash_ZSPBhokqDMc.png";
import './Group.scss'

const Group = () => {
  return (
    <div className="group">
      <div className="groups">
        <div className="groupsHead">
          <h4>Groups</h4>
          <div className="groupsHeadRight">
            <img src={search} alt="" />
            <button>+ Create New Group</button>
          </div>
        </div>
        <div className="suggested">
          <div className="suggestedHeading">
            <div className="right">
              <h4>Suggested for you</h4>
              <p>Groups you might be interested in</p>
            </div>
            <button>See All</button>
          </div>
          <div className="groupList">
            <div className="UI">
              <div className="UIHead">
                <div className="UD">
                  <p className="UDP">UD</p>
                  <div className="designer">
                    <h4>UI/UX Deigner</h4>
                    <p>Bandung. 7 post a day</p>
                  </div>
                </div>
                <img src={dots} alt="" />
              </div>
              <img src={mask} alt="" />
              <div className="join">
                <button>Join Group</button>
                <div className="joinItems">
                  <img src={one} alt="" />
                  <img src={two} alt="" />
                  <img src={three} alt="" />
                  <img src={k} alt="" className="k" />
                </div>
              </div>
            </div>
            <div className="UI2">
              <div className="UIHead2">
                <div className="UD2">
                  <p className="uip">UI</p>
                  <div className="designer">
                    <h4>User Interface</h4>
                    <p>Jakarta. 7 post a day</p>
                  </div>
                </div>
                <img src={dots} alt="" />
              </div>
              <img src={masks} alt="" />
              <div className="join">
                <button>Join Group</button>
                <div className="joinItems">
                  <img src={one} alt="" />
                  <img src={two} alt="" />
                  <img src={three} alt="" />
                  <img src={k} alt="" className="k" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>Recent Activity</h4>
      <div className="recent">
        <div className="enthuasiast">
          <h4>DE</h4>
          <div className="enthuasiastName">
            <h5>Design Enthusiast</h5>
            <p>Angela Lee . 56 mins ago</p>
          </div>
        </div>
        <p className="recentP">
          Conduct design process best practices across projects such as
          gathering insights, validating problems & solutions, delivering
          multiple fidelity levels of design, and ensure the final design is
          implemented properly on.
        </p>
        <div className="recentImg">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Group;

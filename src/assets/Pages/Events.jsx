import ellipsis from "../Components/Images/ellipsis-solid.svg";
import calender from "../Components/Images/events.png";
import five from "../Components/Images/Mask Group 5.png";
import six from "../Components/Images/Mask Group 6.png";
import seven from "../Components/Images/Mask Group 7.png";
import eight from "../Components/Images/Mask Group 8.png";
import avatarone from "../Components/Images/Avatar 1.png";
import avatartwo from "../Components/Images/Avatar 2.png";
import avatarthree from "../Components/Images/Avatar 3.png";
import k from "../Components/Images/2K.png";
import location from "../Components/Images/40px.png";
import './Events.scss'

const Events = () => {
  return (
    <div className="event">
      <div className="eventHeading">
        <h4>Find Event</h4>
        <img src={ellipsis} alt="" width="20" />
      </div>
      <div className="popular">
        <div className="popularHeading">
          <div className="popularHeadingButton">
            <button
              style={{
                color: "#2563EB",
                fontSize: "1rem",
                fontWeight: "700",
                borderBottom: "0.2rem solid #2563EB",
              }}
            >
              Popular
            </button>
            <button>For You</button>
            <button>Nearest</button>
            <button>Favorite</button>
            <button>Registered</button>
          </div>
          <div className="calender">
            <img src={calender} alt="" />
            <p>November</p>
          </div>
        </div>
        <div className="images">
          <div className="imagesTop">
            <div className="imagesTopLeft">
              <img src={five} alt="" />
              <div className="national">
                <div className="nationalName">
                  <p>National Seminar</p>
                  <p style={{ color: "#94A3B8", fontSize: ".8rem" }}>
                    By{" "}
                    <span style={{ color: "#64748B", fontSize: ".8rem" }}>
                      Emma Stone
                    </span>
                  </p>
                </div>
                <button>
                  <img src={calender} alt="" />
                  <p>16 Nov, 2022</p>
                </button>
              </div>
              <div className="going">
                <div className="goingImg">
                  <img src={avatarone} alt="" />
                  <img src={avatartwo} alt="" />
                  <img src={avatarthree} alt="" />
                  <img src={k} alt="" />
                </div>
                <p>+2K are going</p>
              </div>
              <div className="location">
                <img src={location} alt="" />
                <div className="locationAddress">
                  <p>4517 Washington Ave. Manchester,</p>
                  <p>Kentucky 39495</p>
                </div>
              </div>
              <button>Register</button>
            </div>
            <div className="imagesTopRight">
              <img src={six} alt="" />
              <div className="national">
                <div className="nationalName">
                  <p>Potery Workshop</p>
                  <p style={{ color: "#94A3B8", fontSize: ".8rem" }}>
                    By
                    <span style={{ color: "#64748B", fontSize: ".8rem" }}>
                      Emma Stone
                    </span>
                  </p>
                </div>
                <button>
                  <img src={calender} alt="" />
                  <p>16 Nov, 2022</p>
                </button>
              </div>
              <div className="going">
                <div className="goingImg">
                  <img src={avatarone} alt="" />
                  <img src={avatartwo} alt="" />
                  <img src={avatarthree} alt="" />
                  <img src={k} alt="" />
                </div>
                <p>+2K are going</p>
              </div>
              <div className="location">
                <img src={location} alt="" />
                <div className="4517">
                  <p>4517 Washington Ave. Manchester,</p>
                  <p>Kentucky 39495</p>
                </div>
              </div>
              <button>Register</button>
            </div>
          </div>
          <div className="imagesBottom">
            <div className="imagesBottomLeft">
              <img src={seven} alt="" />
              <div className="national">
                <div className="nationalName">
                  <p>National Seminar</p>
                  <p style={{ color: "#94A3B8", fontSize: ".8rem" }}>
                    By{" "}
                    <span style={{ color: "#64748B", fontSize: ".8rem" }}>
                      Emma Stone
                    </span>
                  </p>
                </div>
                <button>
                  <img src={calender} alt="" />
                  <p>16 Nov, 2022</p>
                </button>
              </div>
              <div className="going">
                <div className="goingImg">
                  <img src={avatarone} alt="" />
                  <img src={avatartwo} alt="" />
                  <img src={avatarthree} alt="" />
                  <img src={k} alt="" />
                </div>
                <p>+2K are going</p>
              </div>
              <div className="location">
                <img src={location} alt="" />
                <div className="4517">
                  <p>4517 Washington Ave. Manchester,</p>
                  <p>Kentucky 39495</p>
                </div>
              </div>
              <button>Register</button>
            </div>
            <div className="imagesBottomRight">
              <img src={eight} alt="" />
              <div className="national">
                <div className="nationalName">
                  <p>Potery Workshop</p>
                  <p style={{ color: "#94A3B8", fontSize: ".8rem" }}>
                    By{" "}
                    <span style={{ color: "#64748B", fontSize: ".8rem" }}>
                      Emma Stone
                    </span>
                  </p>
                </div>
                <button>
                  <img src={calender} alt="" />
                  <p>16 Nov, 2022</p>
                </button>
              </div>
              <div className="going">
                <div className="goingImg">
                  <img src={avatarone} alt="" />
                  <img src={avatartwo} alt="" />
                  <img src={avatarthree} alt="" />
                  <img src={k} alt="" />
                </div>
                <p>+2K are going</p>
              </div>
              <div className="location">
                <img src={location} alt="" />
                <div className="4517">
                  <p>4517 Washington Ave. Manchester,</p>
                  <p>Kentucky 39495</p>
                </div>
              </div>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

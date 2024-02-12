import ellipsis from "../Components/Images/ellipsis-solid.svg";
import one from "../Components/Images/unsplash1.png"
import two from "../Components/Images/unsplash2.png"
import three from "../Components/Images/unsplash_BV8Ka-JE0Cs.png"
import four from "../Components/Images/unsplash_dnL6ZIpht2s.png";
import five from "../Components/Images/unsplash__KaMTEmJnxY.png";
import six from "../Components/Images/unsplash_vbAEHCrvXZ0.png";
import seven from "../Components/Images/unsplash_TLD6iCOlyb0.png";
import eight from "../Components/Images/unsplash__C5zsV_p-YI.png";
import nine from "../Components/Images/unsplash_rhUU1pemhQ0.png";
import ten from "../Components/Images/unsplash_z9vkyDW9brw.png";
import eleven from "../Components/Images/unsplash_QRKJwE6yfJo.png";
import twelve from "../Components/Images/unsplash_Xh6BpT-1tXo.png";
import thirteen from "../Components/Images/unsplash_BeeMMFF_jso.png";
import fourteen from "../Components/Images/unsplash_XeYx043QD5U-1.png";
import fifteen from "../Components/Images/unsplash_X3ijISYzlM4.png";
import sixteen from "../Components/Images/unsplash_wyN0QFDiXw0.png";
import "./Photos.scss"

const Photos = () => {
  return (
    <div className="photos">
      <div className="your">
        <h4>Your Photos</h4>
        <img src={ellipsis} alt="" width="20" style={{ color: "#F1F5F9" }} />
      </div>
      <div className="aboutYou">
        <p className="abt" style={{paddingBottom:".7rem"}}>Photos About You</p>
        <p className="abt2">Your Photos</p>
        <p className="abt3">Albums</p>
      </div>
      <div className="total">
        <div className="totalHeading">
          <h4>Total Photos</h4>
          <p style={{ color: "#64748B;" }}>42 Total Photos About You</p>
        </div>
        <div className="totalPhotos">
          <div className="row1">
            <img src={one} alt="" width="185" height="187" />
            <img src={two} alt="" width="185" height="187" />
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
          <div className="row1">
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
          </div>
          <div className="row1">
            <img src={nine} alt="" />
            <img src={ten} alt="" />
            <img src={eleven} alt="" />
            <img src={twelve} alt="" />
          </div>
          <div className="row1">
            <img src={thirteen} alt="" />
            <img src={fourteen} alt="" />
            <img src={fifteen} alt="" />
            <img src={sixteen} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;

import websiteDesign from "../Images/websitedesign.png";
import mobileDesign from "../Images/mobiledesign.png";
import productDesign from "../Images/productdesign.png";
import './Pages.scss'

const Pages = () => {
  const shortCutItems = [
    {
      icon: websiteDesign,
      name: "Website Design",
    },
    {
      icon: mobileDesign,
      name: "Mobile Design",
    },
    {
      icon: productDesign,
      name: "Product Design",
    },
  ];
  return (
    <div className="pages">
      <div className="heading">
        <p>YOUR PAGES</p>
        <p>See all</p>
        {/* {showSeeAll && <p>See All</p>} */}
      </div>
      {shortCutItems &&
        shortCutItems.map((item, index) => (
          <div className="shortcut-item" key={index}>
            <img src={item.icon} alt={item.name} width="20" height="20" />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Pages;

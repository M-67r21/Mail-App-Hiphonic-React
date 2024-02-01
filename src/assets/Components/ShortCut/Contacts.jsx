import "./Contacts.scss";
import wade from "../Images/wade.png";
import jane from "../Images/jane.png";
import esther from "../Images/esther.png";
import cameron from "../Images/cameron.png";
import brooklyn from "../Images/Brooklyn.png";
const Contacts = () => {
    const contacts = [
        {
            icon:wade,
            name:'Wade Warren'
        },
        {
            icon:jane,
            name:'Jane Cooper'
        },
        {
            icon:esther,
            name:'Esther Howard'
        },
        {
            icon:cameron,
            name:'Camerron Williamson'
        },
        {
            icon:brooklyn,
            name:'Brooklyn Simmons'
        }
    ]
  return (
    <div className="ContactItems">
      <div className="heading">
        <p style={{ textTransform: "uppercase" }}>Contacts</p>
        <p style={{ color: "#2563EB" }}>See all</p>
      </div>
      {contacts &&
        contacts.map((item, index) => (
          <div className="contactcontainer">
            <div className="contact-item" key={index}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Contacts;

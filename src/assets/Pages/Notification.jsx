import Bessie from "../Components/Images/bogdan2 2.png";
import Marvin from "../Components/Images/bogdan2 2-1.png";
import Courtney from "../Components/Images/bogdan2 2-2.png";
import Darrell from "../Components/Images/bogdan2 2-3.png";
import Esther from "../Components/Images/bogdan2 2-4.png";
import Kathryn from "../Components/Images/bogdan2 2-6.png";

import "./Notification.scss";
import { useState } from "react";

const Notification = () => {
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide(hide);
  };
 

  const notificationToday = [
    {
      icon: Bessie,
      name: "Bessie Cooper",
      noti: "Started following you",
    },
    {
      icon: Marvin,
      name: "Marvin McKiney",
      noti: "Joined UI Official group",
    },
    {
      icon: Courtney,
      name: "Courtney Henry",
      noti: "Joined UI Official group",
    },
    {
      icon: Darrell,
      name: "Darrell Steward",
      noti: "Joined UI Official group",
    },
    {
      icon: Esther,
      name: "Esther Howard",
      noti: "Joined UI Official group",
    },
  ];

  const notificationYesterday = [
    {
      icon: Esther,
      name: "Esther Howard",
      noti: "Joined UI Official group",
    },
    {
      icon: Kathryn,
      name: "Kathryn Murphy",
      noti: "Joined UI Official group",
    },
  ];

  return (
    <>
      {hide && (
        <div className="Noti">
          <div className="topp">
            <p style={{ fontWeight: "bold" }}>Notification</p>
            <p style={{ fontSize: "1.2rem" }} onClick={handleHide}>
              x
            </p>
          </div>
          <div className="all">
            <div className="unread">
              <p className="allNoti">All Notification</p>
              <p className="unreadP">Unread</p>
            </div>
            <div className="today">
              <h5 style={{ color: "#94A3B8", fontSize: ".9rem" }}>TODAY</h5>
              <div className="todayItems">
                {notificationToday.map((item, index) => (
                  <div className="todayNoti" key={index}>
                    <img
                      src={item.icon}
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="todayNotiP">
                      <p style={{ color: "#0F172A", fontSize: "0.9rem" }}>
                        {item.name}
                      </p>
                      <p style={{ color: "#94A3B8", fontSize: "0.7rem" }}>
                        {item.noti}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="yesterday">
              <h4>YESTERDAY</h4>
              <div className="yesterItems">
                {notificationYesterday.map((item, index) => (
                  <div className="yesterNoti" key={index}>
                    <img
                      src={item.icon}
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="yesterNotP">
                      <p style={{ color: "#0F172A", fontSize: "0.9rem" }}>
                        {item.name}
                      </p>
                      <p style={{ color: "#94A3B8", fontSize: "0.7rem" }}>
                        {item.noti}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;

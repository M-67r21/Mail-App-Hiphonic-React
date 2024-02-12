import { Link } from "react-router-dom";

import logo from "../Components/Images/logo.png";
import sidebar from "../Components/Images/sidebar.png";
import Avatar from "../Components/Images/avatar.png";
import Chevrondown from "../Components/Images/Chevrondown.png";
import Notifications from "../Components/Images/notifications.png";
import Messages from "../Components/Images/messages.png";
import search from "../Components/Images/search.png";
import "./Navbar.scss";
import { useState } from "react";
import Notification from "../Pages/Notification";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={sidebar} alt="noimage" />
        <div className="nav-logo-text">
          <img src={logo} alt="noimage" />
          <h2>Hiphonic</h2>
        </div>
      </div>
      <div className="search">
        <div className="input">
          <img src={search} alt="" />
          <input type="search" placeholder="Search" />
        </div>
        <div className="nav-right-body">
          <img src={Messages} alt="noimage" />

          <img src={Notifications} alt="noimage" onClick={handleClick} />

          <div className="profile">
            <img src={Avatar} alt="noimage" />
            <img src={Chevrondown} alt="noimage" />
          </div>

          {click && (
            <div className="toggle">
              <Notification />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

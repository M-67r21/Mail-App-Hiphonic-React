import MainApp from "./MainApp";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import './MailApp.scss'

const MailApp = () => {
  return (
    <>
      <div className="container">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Main">
          <div className="Sidebar">
            <SideBar />
          </div>
          <div className="MainApp">
            <MainApp />
          </div>
        </div>
      </div>
    </>
  );
};

export default MailApp;

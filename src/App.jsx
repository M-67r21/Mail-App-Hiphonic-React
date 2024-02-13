import { Route } from "react-router-dom";
import "./App.scss";
import MailApp from "./assets/Layout/MailApp";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<MailApp />} />
        </Routes>
        {/* <div className="container">
          <MailApp />
        </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;

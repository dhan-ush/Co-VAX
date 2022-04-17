import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./pages/homepage";
import Userlogin from "./pages/userLogin";
import UserReg from "./pages/userReg";
import Registration from "./pages/registrationDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/userReg" element={<UserReg />} />
          <Route path="/registrationDetails" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

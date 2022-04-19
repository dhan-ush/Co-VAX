import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./pages/homepage";
import Userlogin from "./pages/userLogin";
import UserReg from "./pages/userReg";
import Reg from "./pages/registrationDetails";
import Dashboard from "./pages/dashboard";
import Profile from "./components/Profile";
import DownloadCertificate from "./components/DownloadCerti";
function App() {
  const [user, setUser] = useState({
    aadhar: "",
    name: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    gender:"",
    mobile: "",
    secondary_number: "",
    vaccination_status: 0,
    address_line: "",
    pincode: "",
    city: "",
    state: "",
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/userlogin" element={<Userlogin user={user} setUser={setUser}  />} />
          <Route path="/userReg" element={<UserReg user={user} setUser={setUser} />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/regDetails" element={<Reg user={user} setUser={setUser} />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/certificate" element={<DownloadCertificate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

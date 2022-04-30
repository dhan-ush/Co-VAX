import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "./pages/homepage";
import Userlogin from "./pages/userLogin";
import Centerlogin from "./pages/centerLogin";
import Reg from "./pages/registrationDetails";
import Dashboard from "./pages/dashboard";
import Profile from "./components/Profile";
import DownloadCertificate from "./components/DownloadCerti";
import CenterDash from "./pages/centerDash";
import Adminlogin from "./pages/adminLogin";
import AdminDash from "./pages/adminDash";

function App() {
  const [user, setUser] = useState({
    aadhar: "",
    name: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    gender: "",
    mobile: "",
    secondary_number: "",
    vaccination_status: 0,
    address_line: "",
    pincode: "",
    city: "",
    state: "",
  });
  // const [user, setUser] = useState({
  //   aadhar_number: "",
  //   name: "",
  //   date_of_birth: "",
  //   gender: "",
  //   primary_gender: "",
  //   secondary_number: "",
  //   vaccination_status: 0,
  //   pincode: "",
  //   city: "",
  //   state: "",
  //   address_line: "",
  //   password: ""
  // });
  const [center, setCenter] = useState({
    center_id: -1,
    date: "",
    name:"",
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    password:"",
    jabs_unbooked:"",
    jabs_booked:"",
    vaccine_name: "",
  });

  const [admin,setAdmin]=useState({
    username:"",
    password:""
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/userlogin" element={<Userlogin user={user} setUser={setUser} />} />
          <Route path="/centerlogin" element={<Centerlogin center={center} setCenter={setCenter} />} />
          <Route path="/adminlogin" element={<Adminlogin admin={admin} setAdmin={setAdmin} />} />
          <Route path="/dash" element={<Dashboard user={user} setUser={setUser} />} />
          <Route path="/centerDash" element={<CenterDash center={center} setUser={setCenter} />} />
          <Route path="/adminDash" element={<AdminDash admin={admin} setUser={setAdmin} />} />
          <Route path="/regDetails" element={<Reg user={user} setUser={setUser} />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/certificate" element={<DownloadCertificate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

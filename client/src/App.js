import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import React from "react"
import Homepage from './pages/homepage';
import Userlogin from './pages/userLogin';
import UserReg from './pages/userReg';
import Dashboard from './pages/dashboard';
=======
import React from "react";
import Homepage from "./pages/homepage";
import Userlogin from "./pages/userLogin";
import UserReg from "./pages/userReg";
import Registration from "./pages/registrationDetails";
>>>>>>> 89c7c72ddc50159ba13ed5103d2116ee65517970
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/userReg" element={<UserReg />} />
<<<<<<< HEAD
          <Route path="/dash" element={<Dashboard />} />
=======
          <Route path="/registrationDetails" element={<Registration />} />
>>>>>>> 89c7c72ddc50159ba13ed5103d2116ee65517970
        </Routes>
      </Router>
    </div>
  );
}

export default App;

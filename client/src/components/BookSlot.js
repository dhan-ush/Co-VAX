import React from 'react';
import { Link } from "react-router-dom"
import ProfileIcon from "../assets/icon-man.svg";
import OrangeIcon from "../assets/exclamation.png";
import RedIcon from "../assets/cross.svg";
import GreenIcon from "../assets/tick.svg";
import { useState } from 'react';
import BookingDetails from './bookingDetails';
import ViewCentres from './ViewCentres';

function BookSlot() {
  const [comp, setComp] = useState(1);

  const [user, setUser] = useState({
    name: "Akshat Khaitan",
    aadhar: "394891502839",
    gender: "Male",
    date_of_birth: "23-09-2002",
    mobile: "9483902127",
    vaccination_status: 1.5,
  });
  const [centres, setCentres] = useState([
  ]);

  const dose_1 = {
    vaccine: "COVISHIELD",
    centre: "Apollo BGS Hospital",
    date: "23-09-2021"
  };
  const dose_2 = {
    vaccine: "COVISHIELD",
    centre: "Columbia Asia Hospital",
    date: "27-02-2022"
  };
  const daysPassed = 70;

  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
      {comp == 1 ?
        <BookingDetails user={user} setUser={setUser} dose_1={dose_1} dose_2={dose_2} daysPassed={daysPassed} comp={comp} setComp={setComp} />
        :
        <ViewCentres user={user} setUser={setUser} comp={comp} setComp={setComp} />
      }
    </>
  )
}

export default BookSlot;
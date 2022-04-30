import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/icon-man.svg";
import OrangeIcon from "../assets/exclamation.png";
import RedIcon from "../assets/cross.svg";
import GreenIcon from "../assets/tick.svg";
import BookingDetails from "./bookingDetails";
import ViewCentres from "./ViewCentres";
import axios from "axios";
import Moment from "moment";
const moment = require("moment");

function BookSlot({ user, setUser }) {
  const [vaccinationDetails, setvaccinationDetails] = useState([]);
  const [daysPassed, setdaysPassed] = useState(70);
  useEffect(() => {
    axios
      .post("http://localhost:3001/VaccinationDetails", {
        aadhar_number: user.aadhar,
      })
      .then((response) => {
        if (response.data.length > 0) {
          setvaccinationDetails(response.data[0]);
          var today = new Date();
          var dmonth = today.getMonth() + 1;
          var day = today.getDate();
          // if(dmonth<10)
          // {
          //   dmonth='0'+ dmonth;
          // }
          // if(day<10)
          // {
          //     day='0'+ day;
          // }
          // var date2 = moment();
          var date2 = moment().format();

          date2 = Moment(date2).format("DD/MM/YYYY");
          // console.log(date2+'daw')
          const date1 = Moment(response.data[0].dose1_date).format(
            "DD/MM/YYYY"
          );

          var date22 = date2.slice(0, 2);
          if (date22[0] === "0") date22 = date22[1];
          var date222 = date2.slice(3, 5);
          if (date222[0] === "0") date222 = date222[1];
          const date2_date = `${date22}/${date222}/${date2.slice(6, 10)}`;
          console.log(date2_date + "addaadda");
          var date11 = date1.slice(0, 2);
          if (date11[0] === "0") date11 = date11[1];
          var date111 = date1.slice(3, 5);
          if (date111[0] === "0") date111 = date111[1];
          const date1_date = `${date11}/${date111}/${today.getFullYear()}`;
          console.log(date1_date + "addaadda");
          var date01 = new Date(date1_date);
          var date02 = new Date(date2_date);
          var today = "27/11/2013";
          date01 = new Date(
            date1.split("/")[2],
            date1.split("/")[1] - 1,
            date1.split("/")[0]
          );
          // var date2 = "23/02/2011"
          date02 = new Date(
            date2.split("/")[2],
            date2.split("/")[1] - 1,
            date2.split("/")[0]
          );
          var timeDiff = Math.abs(date02.getTime() - date01.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          console.log(diffDays + " days");
        }
        console.log(response.data);
      });
  }, []);
  // useEffect(()=>{})

  const [comp, setComp] = useState(1);

  const dose_1 = {
    vaccine: "COVISHIELD",
    centre: "Apollo BGS Hospital",
    date: "23-09-2021",
  };
  const dose_2 = {
    vaccine: "COVISHIELD",
    centre: "Columbia Asia Hospital",
    date: "27-02-2022",
  };
  // const daysPassed = 70;

  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
      {comp == 1 ? (
        <BookingDetails
          user={user}
          setUser={setUser}
          vaccinationDetails={vaccinationDetails}
          daysPassed={daysPassed}
          comp={comp}
          setComp={setComp}
        />
      ) : (
        <ViewCentres
          user={user}
          setUser={setUser}
          comp={comp}
          setComp={setComp}
        />
      )}
    </>
  );
}

export default BookSlot;

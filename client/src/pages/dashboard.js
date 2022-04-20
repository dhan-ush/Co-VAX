import { React, useEffect } from "react";
import UserDash from "../components/UserDash";

function Dashboard({ user, setUser }) {
  return (
    <>
      <UserDash user={user} setUser={setUser} />
    </>
  );
}

export default Dashboard;

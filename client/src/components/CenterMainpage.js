import React from 'react'
import CenterProfile from './CenterProfile';
import ManageStaff from './ManageStaff';
import { useState } from 'react';
import AddStaff from './addStaff';
import RemoveStaff from './removeStaff';

function CenterMainpage({center,setCenter}) {
  const [comp,setComp]=useState(0);

  return (
    <>
      {
        comp==0?
        <CenterProfile center={center} setCenter={setCenter} comp={comp} setComp={setComp}/>:
        comp==1?
        <ManageStaff center={center} setCenter={setCenter} comp={comp} setComp={setComp}/>:
        comp==2?
        <AddStaff center={center} setCenter={setCenter} comp={comp} setComp={setComp}/>:
        <RemoveStaff center={center} setCenter={setCenter} comp={comp} setComp={setComp}/>


      }
    </>
  )
}

export default CenterMainpage
import React from 'react';
import st from '../styles/raiseissue.module.css'
import { Link } from "react-router-dom"

function BookSlot() {
  const [pinCode, setPinCode] = React.useState('');
  return (
    <div align="center">
    <h1>Bookslot</h1>
    <br/>
    <input type="text" placeholder="Enter pincode"></input>
    <br/>
    <button>Book</button>
    </div>
  )
}

export default BookSlot;
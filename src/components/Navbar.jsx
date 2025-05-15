import { IoChevronDown } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return  (
<>
  <nav>
      <NavLink className="brand" to="/">
        <img src='./logo.png' alt='logo' />
      </NavLink>

       <div >

      {!isVisible && (
     <ul  className="menuIcon" onClick={handleClick}>
       
     <li>
            <NavLink to="/" className="navbarli" >PASSPORT <IoChevronDown className="icon" /></NavLink>
        </li>
        <li>
            <NavLink to="/" className="navbarli" >VISAS <IoChevronDown className="icon" /></NavLink>
        </li>
        <li>
            <NavLink to="/" className="navbarli">PANCARD <IoChevronDown className="icon" /></NavLink>
        </li>
        <li>
            <NavLink to="/" className="navbarli">CONTACT US <IoChevronDown className="icon" /></NavLink>
        </li>
        <li>
            <NavLink to="/" className="navbarli">ABOUT US <IoChevronDown className="icon" /></NavLink>
        </li>

     </ul>

)}
{isVisible && (
  <div className="hover-text">

  <div className="box">
  <h5>Passport Apply</h5>
<p>Passport Apply - Norma </p>
<p>Passport Apply - Total </p>
<p>Check Appointment Availability</p>
<p>Track Application status</p>
  </div>

  <div className="box">
  <h5>Passport Apply - Normal</h5>
<p>Passport Apply - Total </p>
<p>Check Appointment Availability</p>
<p>Police Clearance Certificate</p>
<p>Identity Certificate</p>
<p>LoC Permit</p>
  </div>

  <div className="box">
  <h5>Information Corner</h5>
<p>Fee Calculator</p>
<p>Know your Police Station</p>
<p>Local Pass port Sve Kendra</p>
  </div>

  <div className="box">
  <h5>Document Advisort</h5>
  <p>Document Required For Fresh Passport </p>
<p>Document Required For Reissue Of Passport</p>
<p>Document Required For PCC and Miscl.services</p>
<p>Document Required For Diploma/Office Passport</p>
<p>Document Required For Background Verification for GEP</p>
  </div>

  <div onClick={handleClick} >
  <button className="hide-btn">GO BACK </button>
  </div>
  </div>
 

)}
    </div>
     <button>JOIN NOW </button>
    </nav>
</>
  )
}

export default Navbar

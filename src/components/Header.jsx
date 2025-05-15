import React from 'react'
import { NavLink } from 'react-router-dom'
import logoo from "../assets/logoo.png";
import lohooo from "../assets/lohooo.png";
import logoooo from "../assets/logoooo.png";
import logooooo from "../assets/logooooo.png";
import "./Header.css";

const Header = () => {
  return (
    <NavLink className="top" to="/">
   
    <img src={lohooo} alt="" />
        <img src={logoo} alt="" />
       <img src={logoooo} alt="" />
       <div>
       <img src={logooooo} alt="" />
       </div>
  </NavLink>

  )
}

export default Header

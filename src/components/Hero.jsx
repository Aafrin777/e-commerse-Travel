import React from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci"
import { LuCalendarDays } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
 import "./Hero.css";

const Hero =() =>{
  return (
  <>
    <Wrapper>
            <h1 className='hero-heading'>The whole world await.</h1>
<div className='section-hero'>
            <div className='search-bar'>
              
<CiSearch className='icon1'  />
    <input className='input'
     type="search" 
     placeholder="search destination,Hotel"/>
        </div>

     <p className='icon2'><CiCalendar/> check in  <LuCalendarDays /> check out  <FaUser /> 1 room , 2 adults</p>
    
        <button className="search-btn" type="submit">Search</button>
    </div>

    </Wrapper>
</>
  );
}
const  Wrapper = styled.section`

`;
export default Hero;

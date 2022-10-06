// parent of navlinks i.e Home,Reading List , About

import React from "react";
import {FaBookOpen,FaRegCalendarAlt} from "react-icons/fa"
// import ReactDOM from "react-dom";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div id="nav-bar">
      <div className="logo">
        <h1 id ="logo">BOOK SHELF</h1>
        <FaBookOpen id ='book-icon'/>
        </div>
      <NavLink className="NavLink" to="/" >Home</NavLink>
      <NavLink className="NavLink" to="/ReadingList" >Reading List</NavLink>
      <NavLink className="NavLink" to="/about" >  About</NavLink>
      <FaRegCalendarAlt style={{color:'#61dafb' ,fontSize:30}}/>
    </div>
  );
}
export default NavBar
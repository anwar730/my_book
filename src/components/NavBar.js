// parent of navlinks i.e Home,Reading List , About

import React from "react";
// import ReactDOM from "react-dom";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
// const linkStyles = {
//   display: "inline-block",
//   width: "150px",
//   padding: "12px",
//   margin: "10 6px 6px ",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
//   gap:"100px"

// };

/* define the NavBar component */
function NavBar() {
  return (
    <div id="nav-bar">
        <h1 id ="logo">BOOK SHELF</h1>
      <NavLink class="NavLink" to="/" >Home</NavLink>
      <NavLink class="NavLink" to="/ReadingList" >Reading List</NavLink>
      <NavLink class="NavLink" to="/about" >  About</NavLink>

      <input type='text' id ="filter"placeholder="Search Book Here"/>
    </div>
  );
}
export default NavBar
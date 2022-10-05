// Put the footer here 
import React from 'react'
import {FaInstagram,FaFacebook} from "react-icons/fa"

function Footer() {
  return (
    <div id="container">
        <div id='sm-cont'>
      <div id ='policies'>
        <h3>Our Policies</h3>
        <p>FAQ</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Terms and conditions</p>
        
        
      </div>
      <div id='About us'>
        <h3>About Us</h3>
        <p>Our Company</p>
        <p>Our History</p>
        <p>Contact</p>
        <p>Journal</p>
        <p>Store Locations</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className='icons'>
        <h2><FaInstagram/></h2>
        <h2><FaFacebook/></h2>
        </div>
      </div>
      </div>
      <p id='done'>All Rights Reserved By Anwar</p>

    </div>
  )
}

export default Footer

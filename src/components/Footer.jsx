import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div>
          <h1>Contact Us</h1>
          <p>Somewhere in the world. Planet 2976 block 2012</p>
          <button>Email Us</button>
        </div>
        <div>
          <h1>Socials</h1>
          <ul>
            <li><Link to="https://twitter.com"><i className="fa-brands fa-twitter"></i> &nbsp; Twitter</Link></li>
            <li><Link to="https://discord.com"><i className="fa-brands fa-discord"></i> &nbsp; Discord</Link></li>
            <li><Link to="https://github.com"><i className="fa-brands fa-github"></i> &nbsp; GitHub</Link></li>
          </ul>
        </div>
        <div>
          <h1>Legal</h1>
          <ul>
            <li>Privacy and Policy</li>
            <li>Terms and Condition</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"center", color:"gray", fontSize:"16px", paddingBottom:"10px", paddingTop:"50px"}}>
        © Copyright. All rights reserved. 
      </div>
    </footer>
  );
}

export default Footer
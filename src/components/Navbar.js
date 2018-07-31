import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <Link to="/" className="navbar-title">Never<br/>Ending<br/>Story</Link> 
      </div>
      <div className="bottomNavbar">
        <Link to="/">Home</Link>
        <Link to ="/stories">Stories</Link>
      </div>
    </div>
  )
};

export default Navbar;
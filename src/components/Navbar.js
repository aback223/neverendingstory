import React from 'react';
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <a href="/" className="navbar-title">Never<br/>Ending<br/>Story</a>
      </div>
      <div className="bottomNavbar">
        <a href="/about">Intro</a>
        <a href="/feedback">Feedback</a>
      </div>
    </div>
  )
};

export default Navbar;
import React from 'react';
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <a href="/" className="navbar-title">Never<br/>Ending<br/>Story</a>
      </div>
      <div className="bottom">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </div>
    </div>
  )
};

export default Navbar;